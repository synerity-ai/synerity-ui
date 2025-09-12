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
export class Datepicker {
  activeTab = 'demo';
  
  // Demo data
  basicDate: Date | null = null;
  placeholderDate: Date | null = null;
  disabledDate: Date | null = null;
  readonlyDate: Date | null = null;
  minMaxDate: Date | null = null;
  interactiveDate: Date | null = null;
  
  // Code visibility states
  showBasicUsageCode = false;
  showDateFeaturesCode = false;
  showDateStatesCode = false;
  showDateValidationCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  onDateChange(value: Date | null, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  getDaysBetween(): number {
    if (!this.interactiveDate || !this.basicDate) return 0;
    const diffTime = Math.abs(this.basicDate.getTime() - this.interactiveDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
  
  // Code toggle methods
  toggleCode(section: string) {
    switch(section) {
      case 'basicUsage': this.showBasicUsageCode = !this.showBasicUsageCode; break;
      case 'dateFeatures': this.showDateFeaturesCode = !this.showDateFeaturesCode; break;
      case 'dateStates': this.showDateStatesCode = !this.showDateStatesCode; break;
      case 'dateValidation': this.showDateValidationCode = !this.showDateValidationCode; break;
      case 'interactiveDemo': this.showInteractiveDemoCode = !this.showInteractiveDemoCode; break;
    }
  }
}
