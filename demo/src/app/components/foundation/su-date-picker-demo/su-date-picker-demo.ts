import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePicker } from '@synerity/ui';

@Component({
  selector: 'app-su-date-picker-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePicker],
  templateUrl: './su-date-picker-demo.html',
  styleUrl: './su-date-picker-demo.scss'
})
export class SuDatePickerDemo {
  // Basic date picker states
  basicDate = new Date();
  disabledDate = new Date(2024, 11, 25);
  readonlyDate = new Date(2024, 11, 31);

  // Size variants
  smallDate = new Date();
  mediumDate = new Date();
  largeDate = new Date();

  // Theme variants
  lightDate = new Date();
  darkDate = new Date();

  // Range date picker
  rangeValue = { start: new Date(2024, 11, 1), end: new Date(2024, 11, 31) };
  vacationRange = { start: null, end: null };
  projectRange = { start: new Date(2024, 0, 1), end: new Date(2024, 5, 30) };

  // Form integration
  formData: {
    birthDate: Date | null;
    eventDate: Date | null;
    deadline: Date | null;
    startDate: Date | null;
    endDate: Date | null;
  } = {
    birthDate: new Date(1990, 5, 15),
    eventDate: new Date(2024, 11, 25),
    deadline: new Date(2024, 11, 31),
    startDate: new Date(2024, 0, 1),
    endDate: new Date(2024, 11, 31)
  };

  // Date constraints
  minDate = new Date();
  maxDate = new Date(2025, 11, 31);
  restrictedDate = new Date();

  // Time picker
  dateTime = new Date();
  timeOnly = new Date();

  // Calendar configuration
  customFirstDay = new Date();
  showWeekNumbers = new Date();
  customFormat = new Date();

  // Preset dates
  presetDate = new Date();

  // Today's date for constraints
  today = new Date();

  // Size options
  sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];
  selectedSize = 'medium';

  // Theme options
  themeOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' }
  ];
  selectedTheme = 'light';

  onDateChange(value: Date | null | { start: Date | null; end: Date | null } | null, property: string): void {
    if (value && typeof value === 'object' && 'start' in value) {
      // Handle range values
      (this as any)[property] = value.start;
    } else {
      (this as any)[property] = value;
    }
  }

  onFormDateChange(value: Date | null | { start: Date | null; end: Date | null } | null, property: string): void {
    let dateValue: Date | null = null;
    if (value && typeof value === 'object' && 'start' in value) {
      // Handle range values
      dateValue = value.start;
    } else {
      dateValue = value as Date | null;
    }
    this.formData[property as keyof typeof this.formData] = dateValue;
  }

  onRangeChange(value: Date | null | { start: Date | null; end: Date | null } | null, property: string): void {
    if (value && typeof value === 'object' && 'start' in value) {
      (this as any)[property] = value;
    }
  }

  resetForm(): void {
    this.formData = {
      birthDate: new Date(1990, 5, 15),
      eventDate: new Date(2024, 11, 25),
      deadline: new Date(2024, 11, 31),
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 11, 31)
    };
  }

  setDefaultValues(): void {
    this.basicDate = new Date();
    this.disabledDate = new Date(2024, 11, 25);
    this.readonlyDate = new Date(2024, 11, 31);
    this.smallDate = new Date();
    this.mediumDate = new Date();
    this.largeDate = new Date();
    this.lightDate = new Date();
    this.darkDate = new Date();
    this.restrictedDate = new Date();
    this.dateTime = new Date();
    this.timeOnly = new Date();
    this.customFirstDay = new Date();
    this.showWeekNumbers = new Date();
    this.customFormat = new Date();
    this.presetDate = new Date();
    this.rangeValue = { start: new Date(2024, 11, 1), end: new Date(2024, 11, 31) };
    this.vacationRange = { start: null, end: null };
    this.projectRange = { start: new Date(2024, 0, 1), end: new Date(2024, 5, 30) };
  }

  getFormattedDate(date: Date | null): string {
    if (!date) return 'No date selected';
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  getFormattedDateTime(date: Date | null): string {
    if (!date) return 'No date selected';
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  getFormattedRange(range: { start: Date | null; end: Date | null } | null): string {
    if (!range || !range.start || !range.end) return 'No range selected';
    const start = range.start.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    const end = range.end.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    return `${start} - ${end}`;
  }

  getRangeDuration(range: { start: Date | null; end: Date | null } | null): string {
    if (!range || !range.start || !range.end) return 'No range selected';
    const diffTime = Math.abs(range.end.getTime() - range.start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays + 1} days`;
  }

  // Preset date options
  presetDates = [
    { label: 'Today', value: new Date() },
    { label: 'Tomorrow', value: new Date(Date.now() + 24 * 60 * 60 * 1000) },
    { label: 'Next Week', value: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
    { label: 'Next Month', value: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) },
    { label: 'Christmas 2024', value: new Date(2024, 11, 25) },
    { label: 'New Year 2025', value: new Date(2025, 0, 1) }
  ];

  setPresetDate(preset: any): void {
    this.presetDate = preset.value;
  }

  // Disabled dates (weekends)
  disabledWeekendDates: Date[] = [];
  
  constructor() {
    // Generate weekend dates for the next year
    const today = new Date();
    for (let i = 0; i < 365; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const day = date.getDay();
      if (day === 0 || day === 6) { // Sundays and Saturdays
        this.disabledWeekendDates.push(new Date(date));
      }
    }
  }

  // Custom date format
  customDateFormat = 'MM/dd/yyyy';
  
  // Time format options
  timeFormatOptions = [
    { label: '12 Hour (AM/PM)', value: '12' },
    { label: '24 Hour', value: '24' }
  ];
  selectedTimeFormat = '12';
}