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
  dropdownDate: Date | null = null;
  inlineDate: Date | null = null;
  rangeDate: { start: Date | null; end: Date | null } | null = null;
  normalSizeDate: Date | null = null;
  compactSizeDate: Date | null = null;
  disabledDate: Date | null = null;
  readonlyDate: Date | null = new Date();
  valueDate: Date | null = new Date();
  
  // Interactive demo data
  demoValue: Date | null = null;
  demoRangeValue: { start: Date | null; end: Date | null } | null = null;
  demoVariant: 'dropdown' | 'inline' | 'range' = 'dropdown';
  demoSize: 'normal' | 'compact' = 'normal';
  demoPlaceholder = 'Select a date...';
  demoDisabled = false;
  demoReadonly = false;
  
  // Code visibility states
  showBasicDateCode = false;
  showVariantsCode = false;
  showSizesCode = false;
  showStatesCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicDate':
        this.showBasicDateCode = !this.showBasicDateCode;
        break;
      case 'variants':
        this.showVariantsCode = !this.showVariantsCode;
        break;
      case 'sizes':
        this.showSizesCode = !this.showSizesCode;
        break;
      case 'states':
        this.showStatesCode = !this.showStatesCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  // Date picker demo methods
  onDateChange(value: Date | null | { start: Date | null; end: Date | null } | null) {
    console.log('Date changed:', value);
  }
  
  onDemoDateChange(value: Date | null | { start: Date | null; end: Date | null } | null) {
    if (this.demoVariant === 'range') {
      this.demoRangeValue = value as { start: Date | null; end: Date | null } | null;
    } else {
      this.demoValue = value as Date | null;
    }
    console.log('Demo date changed:', value);
  }

  onRangeChange(value: Date | null | { start: Date | null; end: Date | null } | null) {
    this.rangeDate = value as { start: Date | null; end: Date | null } | null;
    console.log('Range changed:', value);
  }
  
  // Utility methods
  formatDate(value: Date | null): string {
    if (!value) return 'No date selected';
    return value.toLocaleDateString();
  }
}