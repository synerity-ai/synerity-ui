import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { DatePicker as SuiDatePicker } from '../../../../../ui-lib/src/lib/date-picker/date-picker';

@Component({
  selector: 'app-datepicker',
  imports: [CommonModule, FormsModule, Tabs, SuiDatePicker],
  templateUrl: './datepicker.html',
  styleUrl: './datepicker.scss'
})
export class Datepicker {
  activeTab = 'demo';
  
  // Demo data
  basicDate: Date | null = null;
  minMaxDate: Date | null = null;
  disabledDate: Date | null = null;
  readonlyDate: Date | null = new Date();
  requiredDate: Date | null = null;
  placeholderDate: Date | null = null;
  timeDate: Date | null = null;
  customFormatDate: Date | null = null;
  
  // Interactive demo data
  interactiveValue: Date | null = null;
  interactiveMinDate: Date | null = null;
  interactiveMaxDate: Date | null = null;
  
  // Helper properties for template
  today = new Date();
  endOf2025 = new Date(2025, 11, 31);
  interactiveDisabled = false;
  interactiveReadonly = false;
  interactiveRequired = false;
  interactiveShowTime = false;
  interactiveShowTodayButton = true;
  interactiveShowClearButton = true;
  interactivePlaceholder = 'Select a date...';
  interactiveSize: 'normal' | 'compact' = 'normal';
  interactiveVariant: 'dropdown' | 'inline' = 'dropdown';
  
  // Code visibility states
  showBasicDateCode = false;
  showMinMaxDateCode = false;
  showDateStatesCode = false;
  showTimeDateCode = false;
  showCustomFormatDateCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicDate':
        this.showBasicDateCode = !this.showBasicDateCode;
        break;
      case 'minMaxDate':
        this.showMinMaxDateCode = !this.showMinMaxDateCode;
        break;
      case 'dateStates':
        this.showDateStatesCode = !this.showDateStatesCode;
        break;
      case 'timeDate':
        this.showTimeDateCode = !this.showTimeDateCode;
        break;
      case 'customFormatDate':
        this.showCustomFormatDateCode = !this.showCustomFormatDateCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  // Date picker demo methods
  onDateChange(value: Date | null) {
    console.log('Date changed:', value);
  }
  
  onInteractiveDateChange(value: Date | null) {
    this.interactiveValue = value;
    console.log('Interactive date changed:', value);
  }
  
  onDateFocus() {
    console.log('Date picker focused');
  }
  
  onDateBlur() {
    console.log('Date picker blurred');
  }
  
  onDateOpen() {
    console.log('Date picker opened');
  }
  
  onDateClose() {
    console.log('Date picker closed');
  }
  
  onDateSelect(value: Date | null) {
    console.log('Date selected:', value);
  }
  
  // Utility methods
  formatDate(value: Date | null): string {
    if (!value) return 'No date selected';
    return value.toLocaleDateString();
  }
  
  isValidDate(value: Date | null): boolean {
    return value !== null && !isNaN(value.getTime());
  }
  
  getDateStatus(value: Date | null): string {
    if (!value) return 'No date';
    if (isNaN(value.getTime())) return 'Invalid date';
    return 'Valid date';
  }
  
  // Helper methods for interactive demo
  setMinDate(days: number) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    this.interactiveMinDate = date;
  }
  
  setMaxDate(days: number) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    this.interactiveMaxDate = date;
  }
  
  clearMinDate() {
    this.interactiveMinDate = null;
  }
  
  clearMaxDate() {
    this.interactiveMaxDate = null;
  }
}
