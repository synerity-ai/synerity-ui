import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePicker as SuiDatePicker } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-datepicker',
  imports: [CommonModule, FormsModule, SuiDatePicker, Tabs],
  templateUrl: './datepicker.html',
  styleUrl: './datepicker.scss'
})
export class DatePickerPage {
  activeTab = 'demo';
  
  // Demo data
  basicDate: Date | null = null;
  placeholderDate: Date | null = null;
  disabledDate: Date | null = new Date('2024-12-25');
  readonlyDate: Date | null = new Date('2024-01-15');
  minMaxDate: Date | null = null;
  interactiveDate: Date | null = null;
  interactiveMinDate = new Date('2024-01-01');
  interactiveMaxDate = new Date('2024-12-31');
  
  // Predefined dates for template
  minDate2024 = new Date('2024-01-01');
  maxDate2024 = new Date('2024-12-31');
  interactivePlaceholder = 'Select a date...';
  interactiveDisabled = false;
  interactiveReadonly = false;
  interactiveShowIcon = true;
  
  // Code visibility states
  showBasicDateCode = false;
  showPlaceholderDateCode = false;
  showDisabledDateCode = false;
  showReadonlyDateCode = false;
  showMinMaxDateCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicDate':
        this.showBasicDateCode = !this.showBasicDateCode;
        break;
      case 'placeholderDate':
        this.showPlaceholderDateCode = !this.showPlaceholderDateCode;
        break;
      case 'disabledDate':
        this.showDisabledDateCode = !this.showDisabledDateCode;
        break;
      case 'readonlyDate':
        this.showReadonlyDateCode = !this.showReadonlyDateCode;
        break;
      case 'minMaxDate':
        this.showMinMaxDateCode = !this.showMinMaxDateCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onDateChange(value: Date | null, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Helper methods
  getDaysBetween(): number {
    if (!this.interactiveDate || !this.basicDate) return 0;
    const diffTime = Math.abs(this.basicDate.getTime() - this.interactiveDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
  
  getDateInfo(date: Date | null): { formatted: string; dayOfWeek: string; isValid: boolean } {
    if (!date) return { formatted: 'No date selected', dayOfWeek: '', isValid: false };
    
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    
    return {
      formatted: date.toLocaleDateString('en-US', options),
      dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'long' }),
      isValid: date instanceof Date && !isNaN(date.getTime())
    };
  }
  
  // Predefined date ranges
  setToday() {
    this.interactiveDate = new Date();
  }
  
  setTomorrow() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.interactiveDate = tomorrow;
  }
  
  setNextWeek() {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    this.interactiveDate = nextWeek;
  }
  
  clearDate() {
    this.interactiveDate = null;
  }
}
