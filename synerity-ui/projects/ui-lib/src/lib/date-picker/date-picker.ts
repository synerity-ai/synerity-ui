import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'sui-date-picker',
  imports: [CommonModule, NgIf],
  templateUrl: './date-picker.html',
  styleUrl: './date-picker.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePicker implements OnDestroy {
  @Input() value: Date | null = null;
  @Input() placeholder = 'Select date';
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() minDate: Date | null = null;
  @Input() maxDate: Date | null = null;
  @Input() dateFormat = 'MM/dd/yyyy';
  @Input() showIcon = true;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onChange = new EventEmitter<Date | null>();
  @Output() onSelect = new EventEmitter<Date | null>();

  @ViewChild('dateInput') dateInput!: ElementRef;
  @ViewChild('datePicker') datePicker!: ElementRef;

  visible = false;
  private documentClickListener!: Subscription;

  ngOnDestroy(): void {
    this.unbindDocumentClickListener();
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    if (!this.disabled && !this.readonly) {
      this.toggle();
    }
  }

  toggle(): void {
    this.visible = !this.visible;
    if (this.visible) {
      this.bindDocumentClickListener();
    } else {
      this.unbindDocumentClickListener();
    }
  }

  onDateChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const dateValue = target.value ? new Date(target.value) : null;
    this.value = dateValue;
    this.onChange.emit(this.value);
    this.onSelect.emit(this.value);
  }

  onDateSelect(date: Date): void {
    this.value = date;
    this.onChange.emit(this.value);
    this.onSelect.emit(this.value);
    this.visible = false;
    this.unbindDocumentClickListener();
  }

  clear(): void {
    this.value = null;
    this.onChange.emit(this.value);
  }

  private bindDocumentClickListener(): void {
    this.documentClickListener = fromEvent(document, 'click').subscribe((event: any) => {
      if (this.datePicker && !this.datePicker.nativeElement.contains(event.target)) {
        this.visible = false;
        this.unbindDocumentClickListener();
      }
    });
  }

  private unbindDocumentClickListener(): void {
    if (this.documentClickListener) {
      this.documentClickListener.unsubscribe();
    }
  }

  getDatePickerClass(): string {
    return `sui-date-picker ${this.disabled ? 'sui-date-picker-disabled' : ''} ${this.readonly ? 'sui-date-picker-readonly' : ''} ${this.styleClass}`.trim();
  }

  getDatePickerStyle(): any {
    return {
      ...this.style
    };
  }

  getDisplayValue(): string {
    if (!this.value) return '';
    return this.value.toLocaleDateString();
  }

  isVisible(): boolean {
    return this.visible;
  }

  isDisabled(): boolean {
    return this.disabled;
  }

  isReadonly(): boolean {
    return this.readonly;
  }

  hasValue(): boolean {
    return this.value !== null;
  }
}
