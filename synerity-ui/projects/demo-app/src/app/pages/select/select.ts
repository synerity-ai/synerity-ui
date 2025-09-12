import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Select as SuiSelect } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-select',
  imports: [CommonModule, FormsModule, SuiSelect, Tabs],
  templateUrl: './select.html',
  styleUrl: './select.scss'
})
export class Select {
  activeTab = 'demo';
  
  // Demo data
  selectedValue = '';
  selectedCountry = '';
  selectedSearchable = '';
  selectedClearable = '';
  selectedDisabled = '';
  
  // Options for different demos
  basicOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];
  
  countryOptions = [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Germany', value: 'de' },
    { label: 'France', value: 'fr' },
    { label: 'Japan', value: 'jp' }
  ];
  
  // Code visibility states
  showBasicUsageCode = false;
  showSelectVariantsCode = false;
  showSelectStatesCode = false;
  showSelectFeaturesCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  onSelectChange(value: any, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Code toggle methods
  toggleCode(section: string) {
    switch(section) {
      case 'basicUsage': this.showBasicUsageCode = !this.showBasicUsageCode; break;
      case 'selectVariants': this.showSelectVariantsCode = !this.showSelectVariantsCode; break;
      case 'selectStates': this.showSelectStatesCode = !this.showSelectStatesCode; break;
      case 'selectFeatures': this.showSelectFeaturesCode = !this.showSelectFeaturesCode; break;
      case 'interactiveDemo': this.showInteractiveDemoCode = !this.showInteractiveDemoCode; break;
    }
  }
}
