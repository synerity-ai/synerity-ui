import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputNumber as SuiInputNumber } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-inputnumber',
  imports: [CommonModule, FormsModule, SuiInputNumber, Tabs],
  templateUrl: './inputnumber.html',
  styleUrl: './inputnumber.scss'
})
export class Inputnumber {
  activeTab = 'demo';
  
  // Demo data
  basicNumber: number | null = null;
  minMaxNumber: number | null = null;
  stepNumber: number | null = null;
  disabledNumber: number | null = null;
  placeholderNumber: number | null = null;
  interactiveNumber: number | null = null;
  
  // Code visibility states
  showBasicUsageCode = false;
  showNumberFeaturesCode = false;
  showNumberStatesCode = false;
  showNumberValidationCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  onNumberChange(value: number | null, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Code toggle methods
  toggleCode(section: string) {
    switch(section) {
      case 'basicUsage': this.showBasicUsageCode = !this.showBasicUsageCode; break;
      case 'numberFeatures': this.showNumberFeaturesCode = !this.showNumberFeaturesCode; break;
      case 'numberStates': this.showNumberStatesCode = !this.showNumberStatesCode; break;
      case 'numberValidation': this.showNumberValidationCode = !this.showNumberValidationCode; break;
      case 'interactiveDemo': this.showInteractiveDemoCode = !this.showInteractiveDemoCode; break;
    }
  }
}
