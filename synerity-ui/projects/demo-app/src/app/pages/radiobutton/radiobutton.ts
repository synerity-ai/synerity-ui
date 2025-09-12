import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioButton as SuiRadioButton } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-radiobutton',
  imports: [CommonModule, FormsModule, SuiRadioButton, Tabs],
  templateUrl: './radiobutton.html',
  styleUrl: './radiobutton.scss'
})
export class Radiobutton {
  activeTab = 'demo';
  
  // Demo data
  selectedColor = '';
  selectedSize = '';
  selectedPayment = '';
  selectedLanguage = '';
  selectedDisabled = '';
  interactiveSelection = '';
  
  // Code visibility states
  showBasicUsageCode = false;
  showRadioGroupCode = false;
  showRadioStatesCode = false;
  showRadioFeaturesCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  onRadioChange(value: any, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Code toggle methods
  toggleCode(section: string) {
    switch(section) {
      case 'basicUsage': this.showBasicUsageCode = !this.showBasicUsageCode; break;
      case 'radioGroup': this.showRadioGroupCode = !this.showRadioGroupCode; break;
      case 'radioStates': this.showRadioStatesCode = !this.showRadioStatesCode; break;
      case 'radioFeatures': this.showRadioFeaturesCode = !this.showRadioFeaturesCode; break;
      case 'interactiveDemo': this.showInteractiveDemoCode = !this.showInteractiveDemoCode; break;
    }
  }
}
