import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePicker, Button } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

interface DatePickerVariant {
  value: Date | null;
  placeholder: string;
  size: 'normal' | 'compact';
  variant: 'dropdown' | 'inline' | 'range';
  disabled: boolean;
  readonly: boolean;
  required: boolean;
  showTime: boolean;
  timeFormat: '12' | '24';
  minDate: Date | null;
  maxDate: Date | null;
  label: string;
  description: string;
}

@Component({
  selector: 'app-date-picker-demo',
  standalone: true,
  imports: [CommonModule, DatePicker, Button],
  templateUrl: './date-picker-demo.html',
  styleUrl: './date-picker-demo.scss'
})
export class DatePickerDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Basic date pickers
  basicDatePickers: DatePickerVariant[] = [
    { 
      value: null, 
      placeholder: 'Select date', 
      size: 'normal', 
      variant: 'dropdown',
      disabled: false,
      readonly: false,
      required: false,
      showTime: false,
      timeFormat: '24',
      minDate: null,
      maxDate: null,
      label: 'Basic Date Picker',
      description: 'Simple date selection'
    },
    { 
      value: new Date(), 
      placeholder: 'Select date', 
      size: 'normal', 
      variant: 'dropdown',
      disabled: false,
      readonly: false,
      required: false,
      showTime: false,
      timeFormat: '24',
      minDate: null,
      maxDate: null,
      label: 'With Default Value',
      description: 'Pre-selected with today\'s date'
    },
    { 
      value: null, 
      placeholder: 'Select date', 
      size: 'compact', 
      variant: 'dropdown',
      disabled: false,
      readonly: false,
      required: false,
      showTime: false,
      timeFormat: '24',
      minDate: null,
      maxDate: null,
      label: 'Compact Size',
      description: 'Smaller date picker'
    }
  ];

  // Size variations
  sizeVariants: DatePickerVariant[] = [
    { 
      value: null, 
      placeholder: 'Normal size', 
      size: 'normal', 
      variant: 'dropdown',
      disabled: false,
      readonly: false,
      required: false,
      showTime: false,
      timeFormat: '24',
      minDate: null,
      maxDate: null,
      label: 'Normal Size',
      description: 'Standard date picker size'
    },
    { 
      value: null, 
      placeholder: 'Compact size', 
      size: 'compact', 
      variant: 'dropdown',
      disabled: false,
      readonly: false,
      required: false,
      showTime: false,
      timeFormat: '24',
      minDate: null,
      maxDate: null,
      label: 'Compact Size',
      description: 'Smaller date picker size'
    }
  ];

  // Variant types
  variantTypes: DatePickerVariant[] = [
    { 
      value: null, 
      placeholder: 'Dropdown picker', 
      size: 'normal', 
      variant: 'dropdown',
      disabled: false,
      readonly: false,
      required: false,
      showTime: false,
      timeFormat: '24',
      minDate: null,
      maxDate: null,
      label: 'Dropdown Variant',
      description: 'Opens as dropdown overlay'
    },
    { 
      value: null, 
      placeholder: 'Inline picker', 
      size: 'normal', 
      variant: 'inline',
      disabled: false,
      readonly: false,
      required: false,
      showTime: false,
      timeFormat: '24',
      minDate: null,
      maxDate: null,
      label: 'Inline Variant',
      description: 'Embedded calendar view'
    },
    { 
      value: null, 
      placeholder: 'Date range', 
      size: 'normal', 
      variant: 'range',
      disabled: false,
      readonly: false,
      required: false,
      showTime: false,
      timeFormat: '24',
      minDate: null,
      maxDate: null,
      label: 'Range Variant',
      description: 'Select date range'
    }
  ];

  // State variations
  stateVariants: DatePickerVariant[] = [
    { 
      value: null, 
      placeholder: 'Disabled picker', 
      size: 'normal', 
      variant: 'dropdown',
      disabled: true,
      readonly: false,
      required: false,
      showTime: false,
      timeFormat: '24',
      minDate: null,
      maxDate: null,
      label: 'Disabled State',
      description: 'Non-interactive date picker'
    },
    { 
      value: new Date(), 
      placeholder: 'Readonly picker', 
      size: 'normal', 
      variant: 'dropdown',
      disabled: false,
      readonly: true,
      required: false,
      showTime: false,
      timeFormat: '24',
      minDate: null,
      maxDate: null,
      label: 'Readonly State',
      description: 'Display only, no editing'
    },
    { 
      value: null, 
      placeholder: 'Required field', 
      size: 'normal', 
      variant: 'dropdown',
      disabled: false,
      readonly: false,
      required: true,
      showTime: false,
      timeFormat: '24',
      minDate: null,
      maxDate: null,
      label: 'Required Field',
      description: 'Mandatory date selection'
    }
  ];

  // Time picker variations
  timeVariants: DatePickerVariant[] = [
    { 
      value: null, 
      placeholder: 'Date and time', 
      size: 'normal', 
      variant: 'dropdown',
      disabled: false,
      readonly: false,
      required: false,
      showTime: true,
      timeFormat: '24',
      minDate: null,
      maxDate: null,
      label: '24-Hour Format',
      description: 'Date with 24-hour time'
    },
    { 
      value: null, 
      placeholder: 'Date and time', 
      size: 'normal', 
      variant: 'dropdown',
      disabled: false,
      readonly: false,
      required: false,
      showTime: true,
      timeFormat: '12',
      minDate: null,
      maxDate: null,
      label: '12-Hour Format',
      description: 'Date with 12-hour time'
    }
  ];

  // Constrained date pickers
  constrainedDatePickers: DatePickerVariant[] = [
    { 
      value: null, 
      placeholder: 'Future dates only', 
      size: 'normal', 
      variant: 'dropdown',
      disabled: false,
      readonly: false,
      required: false,
      showTime: false,
      timeFormat: '24',
      minDate: new Date(),
      maxDate: null,
      label: 'Future Dates Only',
      description: 'Minimum date is today'
    },
    { 
      value: null, 
      placeholder: 'Past dates only', 
      size: 'normal', 
      variant: 'dropdown',
      disabled: false,
      readonly: false,
      required: false,
      showTime: false,
      timeFormat: '24',
      minDate: null,
      maxDate: new Date(),
      label: 'Past Dates Only',
      description: 'Maximum date is today'
    },
    { 
      value: null, 
      placeholder: 'This month only', 
      size: 'normal', 
      variant: 'dropdown',
      disabled: false,
      readonly: false,
      required: false,
      showTime: false,
      timeFormat: '24',
      minDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      maxDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
      label: 'This Month Only',
      description: 'Limited to current month'
    }
  ];

  // Event handlers
  onDateChange(value: any, picker: DatePickerVariant): void {
    picker.value = value;
    console.log('Date changed:', value);
  }

  onRangeChange(value: any, picker: DatePickerVariant): void {
    picker.value = value;
    console.log('Range changed:', value);
  }

  // Utility method to get today's date
  getToday(): Date {
    return new Date();
  }

  // Utility methods
  formatDate(date: Date | null): string {
    if (!date) return 'No date selected';
    return date.toLocaleDateString();
  }

  formatRange(value: any): string {
    if (!value || typeof value !== 'object' || !value.start) return 'No range selected';
    if (!value.end) return `${this.formatDate(value.start)} - `;
    return `${this.formatDate(value.start)} - ${this.formatDate(value.end)}`;
  }

  // Sample data for form examples
  formData = {
    startDate: null as Date | null,
    endDate: null as Date | null,
    eventDate: null as Date | null,
    reminderDate: null as Date | null,
    deadline: null as Date | null
  };

  // Sample booking data
  bookingData = {
    checkIn: null as Date | null,
    checkOut: null as Date | null,
    guestCount: 2,
    roomType: 'Standard'
  };

  // Sample task data
  taskData = {
    dueDate: null as Date | null,
    startDate: null as Date | null,
    priority: 'Medium',
    status: 'Pending'
  };

  // Utility method for calculating duration
  getDuration(startDate: Date, endDate: Date): number {
    if (!startDate || !endDate) return 0;
    const timeDiff = endDate.getTime() - startDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }

  // Form data handlers
  onFormStartDateChange(value: any): void {
    this.formData.startDate = value as Date | null;
  }

  onFormEndDateChange(value: any): void {
    this.formData.endDate = value as Date | null;
  }

  onFormReminderDateChange(value: any): void {
    this.formData.reminderDate = value as Date | null;
  }

  onFormDeadlineChange(value: any): void {
    this.formData.deadline = value as Date | null;
  }

  // Booking data handlers
  onBookingCheckInChange(value: any): void {
    this.bookingData.checkIn = value as Date | null;
  }

  onBookingCheckOutChange(value: any): void {
    this.bookingData.checkOut = value as Date | null;
  }

  // Task data handlers
  onTaskStartDateChange(value: any): void {
    this.taskData.startDate = value as Date | null;
  }

  onTaskDueDateChange(value: any): void {
    this.taskData.dueDate = value as Date | null;
  }
}
