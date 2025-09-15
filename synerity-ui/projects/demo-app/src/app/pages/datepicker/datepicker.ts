import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { DatePicker } from 'ui-lib';

@Component({
  selector: 'app-datepicker',
  imports: [CommonModule, FormsModule, Tabs, DatePicker],
  templateUrl: './datepicker.html',
  styleUrls: ['./datepicker.scss']
})
export class DatePickerPage {
  activeTab = 'demo';

  // Demo Data
  basicDate: Date | null = null;
  sizeDate: Date | null = null;
  startDate: Date | null = null;
  endDate: Date | null = null;
  filterFromDate: Date | null = null;
  filterToDate: Date | null = null;
  compactDate1: Date | null = null;
  compactDate2: Date | null = null;
  compactDate3: Date | null = null;
  minDateValue: Date | null = null;
  maxDateValue: Date | null = null;
  weekdayOnlyDate: Date | null = null;
  timeDate24: Date | null = null;
  timeDate12: Date | null = null;
  lightThemeDate: Date | null = null;
  darkThemeDate: Date | null = null;
  interactiveDate: Date | null = null;

  // Interactive Demo Properties
  interactiveSize: 'small' | 'medium' | 'large' = 'medium';
  interactiveTheme: 'light' | 'dark' = 'light';
  interactiveShowTime = false;
  interactiveDisabled = false;

  // Date Constraints
  today = new Date();
  nextMonth = new Date();
  nextWeek = new Date();

  // Code Visibility States
  showBasicDateCode = false;
  showSizeVariantsCode = false;
  showMultiplePickersCode = false;
  showDateConstraintsCode = false;
  showTimePickerCode = false;
  showThemeVariantsCode = false;
  showInteractiveDemoCode = false;

  constructor() {
    // Set up date constraints
    this.nextMonth.setMonth(this.today.getMonth() + 1);
    this.nextWeek.setDate(this.today.getDate() + 7);
  }

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  onDateChange(date: Date | null, property: string): void {
    (this as any)[property] = date;
  }

  toggleCode(example: string): void {
    switch (example) {
      case 'basicDate':
        this.showBasicDateCode = !this.showBasicDateCode;
        break;
      case 'sizeVariants':
        this.showSizeVariantsCode = !this.showSizeVariantsCode;
        break;
      case 'multiplePickers':
        this.showMultiplePickersCode = !this.showMultiplePickersCode;
        break;
      case 'dateConstraints':
        this.showDateConstraintsCode = !this.showDateConstraintsCode;
        break;
      case 'timePicker':
        this.showTimePickerCode = !this.showTimePickerCode;
        break;
      case 'themeVariants':
        this.showThemeVariantsCode = !this.showThemeVariantsCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }

  getDateInfo(date: Date | null): { formatted: string; dayOfWeek: string } {
    if (!date) {
      return { formatted: 'No date selected', dayOfWeek: '' };
    }

    const formatted = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });

    return { formatted, dayOfWeek };
  }
}