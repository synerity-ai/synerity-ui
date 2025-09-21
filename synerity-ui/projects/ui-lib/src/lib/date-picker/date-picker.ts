import { 
  ChangeDetectionStrategy, 
  Component, 
  EventEmitter, 
  Input, 
  Output, 
  ViewChild, 
  ElementRef, 
  OnDestroy, 
  forwardRef,
  ChangeDetectorRef,
  OnInit,
  HostListener
} from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription, fromEvent } from 'rxjs';

// Global z-index manager for datepicker calendars
class DatePickerZIndexManager {
  private static instance: DatePickerZIndexManager;
  private baseZIndex = 999999;
  private currentZIndex = 999999;
  private openCalendars = new Set<DatePicker>();

  static getInstance(): DatePickerZIndexManager {
    if (!DatePickerZIndexManager.instance) {
      DatePickerZIndexManager.instance = new DatePickerZIndexManager();
    }
    return DatePickerZIndexManager.instance;
  }

  registerCalendar(calendar: DatePicker): number {
    this.openCalendars.add(calendar);
    this.currentZIndex += 10;
    return this.currentZIndex;
  }

  unregisterCalendar(calendar: DatePicker): void {
    this.openCalendars.delete(calendar);
    if (this.openCalendars.size === 0) {
      this.currentZIndex = this.baseZIndex;
    }
  }

  getCurrentZIndex(): number {
    return this.currentZIndex;
  }
}

export interface DatePickerConfig {
  format: string;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  disabledDays?: number[];
  firstDayOfWeek?: number;
  showWeekNumbers?: boolean;
  showTodayButton?: boolean;
  showClearButton?: boolean;
  showTime?: boolean;
  timeFormat?: '12' | '24';
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'compact' | 'inline';
  theme?: 'light' | 'dark';
}

@Component({
  selector: 'sui-date-picker',
  imports: [CommonModule, NgIf],
  templateUrl: './date-picker.html',
  styleUrl: './date-picker.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePicker),
      multi: true
    }
  ]
})
export class DatePicker implements ControlValueAccessor, OnDestroy, OnInit {
  // Core Inputs
  @Input() value: Date | null = null;
  @Input() placeholder = 'Select date';
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() required = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() variant: 'default' | 'compact' | 'inline' = 'default';
  @Input() theme: 'light' | 'dark' = 'light';
  
  // Date Constraints
  @Input() minDate: Date | null = null;
  @Input() maxDate: Date | null = null;
  @Input() disabledDates: Date[] = [];
  @Input() disabledDays: number[] = []; // 0 = Sunday, 1 = Monday, etc.
  
  // Calendar Configuration
  @Input() firstDayOfWeek = 0; // 0 = Sunday, 1 = Monday
  @Input() showWeekNumbers = false;
  @Input() showTodayButton = true;
  @Input() showClearButton = true;
  @Input() showTime = false;
  @Input() timeFormat: '12' | '24' = '24';
  
  // Formatting
  @Input() dateFormat = 'MM/dd/yyyy';
  @Input() timeFormatString = 'HH:mm';
  
  // Styling
  @Input() style: any = {};
  @Input() styleClass = '';
  
  // Events
  @Output() onChange = new EventEmitter<Date | null>();
  @Output() onSelect = new EventEmitter<Date | null>();
  @Output() onOpen = new EventEmitter<void>();
  @Output() onClose = new EventEmitter<void>();
  @Output() onFocus = new EventEmitter<void>();
  @Output() onBlur = new EventEmitter<void>();

  // ViewChild References
  @ViewChild('triggerElement') triggerElement!: ElementRef;
  @ViewChild('calendarPanel') calendarPanel!: ElementRef;
  @ViewChild('dateInput') dateInput!: ElementRef;

  // Component State
  isOpen = false;
  isFocused = false;
  currentView: 'calendar' | 'months' | 'years' = 'calendar';
  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();
  selectedTime = { hours: 0, minutes: 0 };
  private calendarZIndex = 999999;
  private calendarElement: HTMLElement | null = null;
  
  // Calendar Data
  weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  monthNames: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  yearRange: number[] = [];
  
  // Event Subscriptions
  private documentClickListener!: Subscription;
  private windowResizeListener!: Subscription;
  private windowScrollListener!: Subscription;
  private escapeKeyListener!: Subscription;
  private calendarClickHandler: ((event: Event) => void) | null = null;
  
  // Flag to prevent double-click issues
  private isSelectingDate = false;
  
  // ControlValueAccessor implementation
  private onValueChange = (value: Date | null) => {};
  private onTouched = () => {};

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.initializeYearRange();
    this.updateCurrentDate();
  }

  ngOnDestroy(): void {
    // Ensure calendar is unregistered if component is destroyed while open
    if (this.isOpen) {
      const zIndexManager = DatePickerZIndexManager.getInstance();
      zIndexManager.unregisterCalendar(this);
      this.removeCalendarFromBody();
    }
    this.cleanupEventListeners();
  }

  // Public Methods
  toggle(): void {
    if (this.disabled || this.readonly) return;
    
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open(): void {
    if (this.disabled || this.readonly || this.isOpen) return;
    
    this.isOpen = true;
    this.isSelectingDate = false; // Reset flag when opening
    this.updateCurrentDate();
    
    // Bind event listeners for all variants
    this.bindEventListeners();
    
    // Create dynamic calendar for all variants to ensure consistent behavior
    // Register with z-index manager to get highest z-index
    const zIndexManager = DatePickerZIndexManager.getInstance();
    this.calendarZIndex = zIndexManager.registerCalendar(this);
    
    this.createCalendarInBody();
    
    this.onOpen.emit();
    this.cdr.detectChanges();
  }

  close(): void {
    if (!this.isOpen) return;
    
    this.isOpen = false;
    this.currentView = 'calendar';
    
    // Cleanup event listeners for all variants
    this.cleanupEventListeners();
    
    // Cleanup dynamic calendar for all variants
    // Unregister from z-index manager
    const zIndexManager = DatePickerZIndexManager.getInstance();
    zIndexManager.unregisterCalendar(this);
    
    // Remove calendar from body
    this.removeCalendarFromBody();
    
    this.onClose.emit();
    this.cdr.detectChanges();
  }

  selectDate(date: Date, event?: Event): void {
    if (this.isDateDisabled(date) || this.isSelectingDate) return;
    
    // Set flag to prevent double-click issues
    this.isSelectingDate = true;
    
    // Prevent event propagation to avoid conflicts with document click handler
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    
    let selectedDate = new Date(date);
    
    // Preserve time if showTime is enabled and we have an existing value
    if (this.showTime && this.value) {
      selectedDate.setHours(this.value.getHours(), this.value.getMinutes());
    } else if (this.showTime) {
      selectedDate.setHours(this.selectedTime.hours, this.selectedTime.minutes);
    }
    
    this.value = selectedDate;
    this.onValueChange(this.value);
    this.onTouched();
    this.onChange.emit(this.value);
    this.onSelect.emit(this.value);
    
    // Close calendar if not showing time
    if (!this.showTime) {
      this.close();
    }
    
    // Reset the flag after a short delay
    setTimeout(() => {
      this.isSelectingDate = false;
    }, 100);
  }

  selectToday(): void {
    this.selectDate(new Date(), undefined);
  }

  clear(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.value = null;
    this.onValueChange(this.value);
    this.onTouched();
    this.onChange.emit(this.value);
    this.close();
  }

  // Navigation Methods
  previousMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.cdr.detectChanges();
  }

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.cdr.detectChanges();
  }

  goToMonth(month: number): void {
    this.currentMonth = month;
    this.currentView = 'calendar';
    this.cdr.detectChanges();
  }

  goToYear(year: number): void {
    this.currentYear = year;
    this.currentView = 'calendar';
    this.cdr.detectChanges();
  }

  // Calendar Data Methods
  getCalendarDays(): any[] {
    const days: any[] = [];
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    const startDate = new Date(firstDay);
    
    // Adjust start date based on firstDayOfWeek
    const dayOffset = (firstDay.getDay() - this.firstDayOfWeek + 7) % 7;
    startDate.setDate(startDate.getDate() - dayOffset);

    const today = new Date();
    const selectedDate = this.value;

    // Generate 42 days (6 weeks) to ensure full calendar view
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = date.getMonth() === this.currentMonth;
      const isToday = this.isSameDay(date, today);
      const isSelected = selectedDate && this.isSameDay(date, selectedDate);
      const isDisabled = this.isDateDisabled(date);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;

      days.push({
        date: date,
        day: date.getDate(),
        isCurrentMonth,
        isToday,
        isSelected,
        isDisabled,
        isWeekend,
        weekNumber: this.getWeekNumber(date)
      });
    }

    return days;
  }

  getMonthNames(): string[] {
    return this.monthNames;
  }

  getYearRange(): number[] {
    return this.yearRange;
  }

  // Utility Methods
  isDateDisabled(date: Date): boolean {
    // Check min/max dates
    if (this.minDate && date < this.minDate) return true;
    if (this.maxDate && date > this.maxDate) return true;
    
    // Check disabled dates
    if (this.disabledDates.some(d => this.isSameDay(date, d))) return true;
    
    // Check disabled days of week
    if (this.disabledDays.includes(date.getDay())) return true;
    
    return false;
  }

  isSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }

  getWeekNumber(date: Date): number {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }

  getDisplayValue(): string {
    if (!this.value) return '';
    
    if (this.showTime) {
      return `${this.value.toLocaleDateString()} ${this.formatTime(this.value)}`;
    }
    
    return this.value.toLocaleDateString();
  }

  formatTime(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    if (this.timeFormat === '12') {
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12;
      return `${displayHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    }
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

  // Event Handlers
  onInputFocus(): void {
    this.isFocused = true;
    this.onFocus.emit();
  }

  onInputBlur(): void {
    this.isFocused = false;
    this.onBlur.emit();
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const dateValue = target.value ? new Date(target.value) : null;
    
    if (dateValue && !isNaN(dateValue.getTime())) {
      this.value = dateValue;
      this.onValueChange(this.value);
      this.onChange.emit(this.value);
    }
  }

  onTimeFormatChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const isPM = target.value === 'PM';
    
    if (isPM && this.selectedTime.hours < 12) {
      this.selectedTime.hours += 12;
    } else if (!isPM && this.selectedTime.hours >= 12) {
      this.selectedTime.hours -= 12;
    }
  }

  // Keyboard Navigation
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (!this.isOpen) return;
    
    switch (event.key) {
      case 'Escape':
        this.close();
        event.preventDefault();
        break;
      case 'Enter':
        if (this.value) {
          this.close();
        }
        event.preventDefault();
        break;
      case 'ArrowLeft':
        this.previousMonth();
        event.preventDefault();
        break;
      case 'ArrowRight':
        this.nextMonth();
        event.preventDefault();
        break;
    }
  }

  // Styling Methods
  getComponentClass(): string {
    const classes = [
      'sui-date-picker',
      `sui-date-picker-${this.size}`,
      `sui-date-picker-${this.variant}`,
      `sui-date-picker-${this.theme}`
    ];
    
    if (this.disabled) classes.push('sui-date-picker-disabled');
    if (this.readonly) classes.push('sui-date-picker-readonly');
    if (this.isOpen) classes.push('sui-date-picker-open');
    if (this.isFocused) classes.push('sui-date-picker-focused');
    if (this.required && !this.value) classes.push('sui-date-picker-required');
    
    return classes.join(' ');
  }

  getTriggerClass(): string {
    return `sui-date-picker-trigger sui-date-picker-trigger-${this.size}`;
  }

  getCalendarClass(): string {
    return `sui-date-picker-calendar sui-date-picker-calendar-${this.size} sui-date-picker-calendar-${this.theme}`;
  }

  getCalendarStyle(): any {
    if (!this.isOpen) return {};
    
    const triggerRect = this.triggerElement?.nativeElement?.getBoundingClientRect();
    if (!triggerRect) return { 
      position: 'fixed',
      zIndex: this.calendarZIndex,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      isolation: 'isolate'
    };
    
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    
    // Calculate calendar dimensions based on variant
    let calendarHeight = 400; // Default height
    let calendarWidth = 280; // Default width
    
    if (this.variant === 'compact') {
      calendarHeight = 320; // Compact height
      calendarWidth = 240; // Compact width
    } else if (this.variant === 'inline') {
      calendarHeight = 380; // Inline height
      calendarWidth = 280; // Inline width
    }
    
    // Calculate optimal position
    let top = triggerRect.bottom + window.scrollY + 8;
    let left = triggerRect.left + window.scrollX;
    
    // Check if calendar would go off screen vertically
    const wouldGoOffBottom = top + calendarHeight > viewportHeight + window.scrollY;
    const wouldGoOffTop = triggerRect.top + window.scrollY - calendarHeight - 8 < window.scrollY;
    
    // Priority: Show month/year navigation buttons
    // If there's not enough space below, position above the trigger
    if (wouldGoOffBottom && !wouldGoOffTop) {
      top = triggerRect.top + window.scrollY - calendarHeight - 8;
    } else if (wouldGoOffBottom && wouldGoOffTop) {
      // If it would go off both top and bottom, center it vertically
      const availableHeight = viewportHeight - 20; // Leave 20px margin
      top = window.scrollY + (viewportHeight - Math.min(calendarHeight, availableHeight)) / 2;
    }
    
    // Check if calendar would go off screen horizontally
    if (left + calendarWidth > viewportWidth + window.scrollX) {
      left = viewportWidth + window.scrollX - calendarWidth - 16;
    }
    
    // Ensure calendar doesn't go off the left edge
    if (left < window.scrollX + 16) {
      left = window.scrollX + 16;
    }
    
    return {
      position: 'fixed',
      top: `${top}px`,
      left: `${left}px`,
      zIndex: this.calendarZIndex,
      // Ensure calendar is always on top
      isolation: 'isolate',
      // Force hardware acceleration
      transform: 'translateZ(0)',
      willChange: 'transform'
    };
  }

  // Calendar Body Management
  private createCalendarInBody(): void {
    if (this.calendarElement) {
      this.removeCalendarFromBody();
    }

    // Create calendar element
    this.calendarElement = document.createElement('div');
    this.calendarElement.className = this.getCalendarClass();
    this.calendarElement.setAttribute('role', 'dialog');
    this.calendarElement.setAttribute('aria-label', 'Date picker calendar');
    
    // Set styles
    const styles = this.getCalendarStyle();
    Object.assign(this.calendarElement.style, styles);
    
    // Add calendar content
    this.renderCalendarContent();
    
    // Append to body
    document.body.appendChild(this.calendarElement);
    
    // Ensure CSS is available globally
    this.ensureGlobalStyles();
  }

  private removeCalendarFromBody(): void {
    if (this.calendarElement && this.calendarElement.parentNode) {
      this.calendarElement.parentNode.removeChild(this.calendarElement);
      this.calendarElement = null;
    }
  }

  private renderCalendarContent(): void {
    if (!this.calendarElement) return;

    let contentHTML = '';
    
    if (this.currentView === 'calendar') {
      contentHTML = `
        <div class="sui-date-picker-calendar-view">
          <div class="sui-date-picker-weekdays">
            ${this.weekDays.map(day => `<div class="sui-date-picker-weekday">${day}</div>`).join('')}
          </div>
          <div class="sui-date-picker-days">
            ${this.getCalendarDays().map(day => `
              <button type="button" class="sui-date-picker-day ${day.isCurrentMonth ? '' : 'sui-date-picker-day-other-month'} ${day.isToday ? 'sui-date-picker-day-today' : ''} ${day.isSelected ? 'sui-date-picker-day-selected' : ''} ${day.isDisabled ? 'sui-date-picker-day-disabled' : ''} ${day.isWeekend ? 'sui-date-picker-day-weekend' : ''}" ${day.isDisabled ? 'disabled' : ''} data-date="${day.date.toISOString()}">
                ${day.day}
              </button>
            `).join('')}
          </div>
        </div>
      `;
    } else if (this.currentView === 'months') {
      contentHTML = `
        <div class="sui-date-picker-months-view">
          <div class="sui-date-picker-months-grid">
            ${this.monthNames.map((month, index) => `
              <button type="button" class="sui-date-picker-month ${index === this.currentMonth ? 'sui-date-picker-month-selected' : ''}" data-month="${index}">
                ${month}
              </button>
            `).join('')}
          </div>
        </div>
      `;
    } else if (this.currentView === 'years') {
      const startYear = Math.floor(this.currentYear / 10) * 10;
      const endYear = startYear + 9;
      contentHTML = `
        <div class="sui-date-picker-years-view">
          <div class="sui-date-picker-years-nav">
            <button type="button" class="sui-date-picker-nav-button" data-action="prev-decade">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>
            <span class="sui-date-picker-years-range">${startYear} - ${endYear}</span>
            <button type="button" class="sui-date-picker-nav-button" data-action="next-decade">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </div>
          <div class="sui-date-picker-years-grid">
            ${Array.from({length: 10}, (_, i) => startYear + i).map(year => `
              <button type="button" class="sui-date-picker-year ${year === this.currentYear ? 'sui-date-picker-year-selected' : ''}" data-year="${year}">
                ${year}
              </button>
            `).join('')}
          </div>
        </div>
      `;
    }

    const calendarHTML = `
      <div class="sui-date-picker-header">
        <div class="sui-date-picker-nav">
          ${this.currentView === 'years' ? '' : `<button type="button" class="sui-date-picker-nav-button" data-action="prev">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>`}
          <button type="button" class="sui-date-picker-month-year" data-action="month">${this.monthNames[this.currentMonth]}</button>
          <button type="button" class="sui-date-picker-month-year" data-action="year">${this.currentYear}</button>
          ${this.currentView === 'years' ? '' : `<button type="button" class="sui-date-picker-nav-button" data-action="next">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>`}
        </div>
      </div>
      <div class="sui-date-picker-content">
        ${contentHTML}
      </div>
      <div class="sui-date-picker-footer">
        <button type="button" class="sui-date-picker-today" data-action="today">Today</button>
        <button type="button" class="sui-date-picker-clear-footer" data-action="clear">Clear</button>
      </div>
    `;

    this.calendarElement.innerHTML = calendarHTML;
    this.bindCalendarEvents();
  }

  private bindCalendarEvents(): void {
    if (!this.calendarElement) return;

    // Remove existing click handler if it exists
    if (this.calendarClickHandler) {
      this.calendarElement.removeEventListener('click', this.calendarClickHandler);
    }

    // Create new click handler
    this.calendarClickHandler = (event: Event) => {
      const target = event.target as HTMLElement;
      
      // Find the closest element with data-action attribute (handles SVG clicks)
      const actionElement = target.closest('[data-action]') as HTMLElement;
      const action = actionElement?.getAttribute('data-action');
      
      if (action === 'prev') {
        event.stopPropagation();
        this.previousMonth();
        this.renderCalendarContent();
      } else if (action === 'next') {
        event.stopPropagation();
        this.nextMonth();
        this.renderCalendarContent();
      } else if (action === 'prev-decade') {
        event.stopPropagation();
        this.currentYear -= 10;
        this.renderCalendarContent();
      } else if (action === 'next-decade') {
        event.stopPropagation();
        this.currentYear += 10;
        this.renderCalendarContent();
      } else if (action === 'month') {
        event.stopPropagation();
        this.currentView = this.currentView === 'months' ? 'calendar' : 'months';
        this.renderCalendarContent();
      } else if (action === 'year') {
        event.stopPropagation();
        this.currentView = this.currentView === 'years' ? 'calendar' : 'years';
        this.renderCalendarContent();
      } else if (action === 'today') {
        event.stopPropagation();
        this.selectToday();
      } else if (action === 'clear') {
        event.stopPropagation();
        this.clear();
      } else if (target.classList.contains('sui-date-picker-day') && !target.hasAttribute('disabled')) {
        event.stopPropagation();
        const dateStr = target.getAttribute('data-date');
        if (dateStr) {
          this.selectDate(new Date(dateStr), undefined);
        }
      } else if (target.classList.contains('sui-date-picker-month')) {
        event.stopPropagation();
        const month = parseInt(target.getAttribute('data-month') || '0');
        this.goToMonth(month);
        this.renderCalendarContent();
      } else if (target.classList.contains('sui-date-picker-year')) {
        event.stopPropagation();
        const year = parseInt(target.getAttribute('data-year') || '0');
        this.goToYear(year);
        this.renderCalendarContent();
      }
    };

    // Add the new click handler
    this.calendarElement.addEventListener('click', this.calendarClickHandler);
  }

  private ensureGlobalStyles(): void {
    // Remove existing styles if they exist to ensure updates are applied
    const existingStyles = document.getElementById('sui-date-picker-global-styles');
    if (existingStyles) {
      existingStyles.remove();
    }

    // Create style element with all datepicker styles
    const styleElement = document.createElement('style');
    styleElement.id = 'sui-date-picker-global-styles';
    styleElement.textContent = `
      /* Global Datepicker Styles */
      .sui-date-picker-calendar {
        position: fixed !important;
        z-index: 999999 !important;
        width: 280px;
        background: #ffffff;
        border: 1px solid #d1d5db;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        overflow: hidden;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-size: 13px;
        line-height: 1.4;
        color: #374151;
        isolation: isolate !important;
      }

      .sui-date-picker-header {
        padding: 12px;
        border-bottom: 1px solid #d1d5db;
        background: #f9fafb;
      }

      .sui-date-picker-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }

      .sui-date-picker-nav-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border: none;
        background: none;
        border-radius: 6px;
        cursor: pointer;
        color: #6b7280;
        transition: all 0.15s ease;
      }

      .sui-date-picker-nav-button:hover {
        background-color: #f3f4f6;
        color: #374151;
      }

      .sui-date-picker-month-year {
        flex: 1;
        padding: 8px 12px;
        border: none;
        background: none;
        cursor: pointer;
        color: #374151;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        border-radius: 6px;
        transition: all 0.15s ease;
      }

      .sui-date-picker-month-year:hover {
        background-color: #f3f4f6;
      }

      .sui-date-picker-content {
        padding: 12px;
      }

      .sui-date-picker-weekdays {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 2px;
        margin-bottom: 8px;
      }

      .sui-date-picker-weekday {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 28px;
        font-size: 11px;
        font-weight: 600;
        color: #6b7280;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .sui-date-picker-days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 2px;
        margin-bottom: 12px;
      }

      .sui-date-picker-day {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border: none;
        background: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13px;
        color: #374151;
        transition: all 0.15s ease;
        position: relative;
      }

      .sui-date-picker-day:hover:not(:disabled) {
        background-color: #f3f4f6;
        transform: scale(1.05);
      }

      .sui-date-picker-day-other-month {
        color: #9ca3af;
      }

      .sui-date-picker-day-today {
        background-color: #dbeafe;
        color: #3b82f6;
        font-weight: 600;
      }

      .sui-date-picker-day-today::after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 4px;
        background: #3b82f6;
        border-radius: 50%;
      }

      .sui-date-picker-day-selected {
        background-color: #3b82f6;
        color: #ffffff;
        font-weight: 600;
      }

      .sui-date-picker-day-selected:hover {
        background-color: #3b82f6;
        transform: scale(1.05);
      }

      .sui-date-picker-day-disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }

      .sui-date-picker-day-disabled:hover {
        background: none;
        transform: none;
      }

      .sui-date-picker-day-weekend {
        color: #6b7280;
      }

      .sui-date-picker-footer {
        display: flex;
        justify-content: space-between;
        gap: 6px;
        padding: 10px;
        border-top: 1px solid #d1d5db;
        background: #f9fafb;
      }

      .sui-date-picker-today,
      .sui-date-picker-clear-footer {
        flex: 1;
        padding: 6px 12px;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        background: #ffffff;
        cursor: pointer;
        font-size: 12px;
        color: #374151;
        transition: all 0.15s ease;
      }

      .sui-date-picker-today:hover,
      .sui-date-picker-clear-footer:hover {
        background-color: #f3f4f6;
        border-color: #3b82f6;
      }

      .sui-date-picker-today {
        color: #3b82f6;
        border-color: #3b82f6;
      }

      .sui-date-picker-today:hover {
        background-color: #dbeafe;
      }

      /* Month and Year Views */
      .sui-date-picker-months-view,
      .sui-date-picker-years-view {
        padding: 8px;
      }

      .sui-date-picker-months-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 6px;
        align-items: stretch;
      }

      .sui-date-picker-month {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px 6px;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        background: #ffffff;
        cursor: pointer;
        font-size: 12px;
        color: #374151;
        transition: all 0.15s ease;
        text-align: center;
        min-height: 36px;
        box-sizing: border-box;
      }

      .sui-date-picker-month:hover {
        background-color: #f3f4f6;
        border-color: #3b82f6;
      }

      .sui-date-picker-month-selected {
        background-color: #3b82f6;
        color: #ffffff;
        border-color: #3b82f6;
      }

      .sui-date-picker-month-selected:hover {
        background-color: #3b82f6;
      }

      .sui-date-picker-years-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
        padding: 8px 0;
      }

      .sui-date-picker-years-range {
        font-size: 16px;
        font-weight: 600;
        color: #374151;
      }

      .sui-date-picker-years-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        align-items: stretch;
      }

      .sui-date-picker-year {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 8px;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        background: #ffffff;
        cursor: pointer;
        font-size: 14px;
        color: #374151;
        transition: all 0.15s ease;
        text-align: center;
        min-height: 44px;
        box-sizing: border-box;
      }

      .sui-date-picker-year:hover {
        background-color: #f3f4f6;
        border-color: #3b82f6;
      }

      .sui-date-picker-year-selected {
        background-color: #3b82f6;
        color: #ffffff;
        border-color: #3b82f6;
      }

      .sui-date-picker-year-selected:hover {
        background-color: #3b82f6;
      }
    `;

    document.head.appendChild(styleElement);
  }

  // Private Methods
  private initializeYearRange(): void {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 50;
    const endYear = currentYear + 50;
    
    for (let year = startYear; year <= endYear; year++) {
      this.yearRange.push(year);
    }
  }

  private updateCurrentDate(): void {
    if (this.value) {
      this.currentMonth = this.value.getMonth();
      this.currentYear = this.value.getFullYear();
      
      if (this.showTime) {
        this.selectedTime = {
          hours: this.value.getHours(),
          minutes: this.value.getMinutes()
        };
      }
    } else {
      const today = new Date();
      this.currentMonth = today.getMonth();
      this.currentYear = today.getFullYear();
    }
  }

  private positionCalendar(): void {
    // This method is called after the calendar is rendered
    // The actual positioning is handled by getCalendarStyle()
    this.cdr.detectChanges();
  }

  private bindEventListeners(): void {
    // Document click listener for all variants
    // All variants now use JavaScript-generated calendar
    setTimeout(() => {
      this.documentClickListener = fromEvent(document, 'click').subscribe((event: any) => {
        if (!this.triggerElement?.nativeElement?.contains(event.target) && 
            !this.calendarElement?.contains(event.target)) {
          this.close();
        }
      });
    }, 100);
    
    // Window resize listener
    this.windowResizeListener = fromEvent(window, 'resize').subscribe(() => {
      if (this.isOpen) {
        this.positionCalendar();
      }
    });
    
    // Window scroll listener
    this.windowScrollListener = fromEvent(window, 'scroll').subscribe(() => {
      if (this.isOpen) {
        this.positionCalendar();
      }
    });
    
    // Escape key listener
    this.escapeKeyListener = fromEvent(document, 'keydown').subscribe((event: Event) => {
      const keyboardEvent = event as KeyboardEvent;
      if (keyboardEvent.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  private cleanupEventListeners(): void {
    if (this.documentClickListener) {
      this.documentClickListener.unsubscribe();
    }
    if (this.windowResizeListener) {
      this.windowResizeListener.unsubscribe();
    }
    if (this.windowScrollListener) {
      this.windowScrollListener.unsubscribe();
    }
    if (this.escapeKeyListener) {
      this.escapeKeyListener.unsubscribe();
    }
    if (this.calendarClickHandler && this.calendarElement) {
      this.calendarElement.removeEventListener('click', this.calendarClickHandler);
      this.calendarClickHandler = null;
    }
  }

  // ControlValueAccessor Methods
  writeValue(value: Date | null): void {
    this.value = value;
    this.updateCurrentDate();
    this.cdr.detectChanges();
  }

  registerOnChange(fn: (value: Date | null) => void): void {
    this.onValueChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.detectChanges();
  }
}