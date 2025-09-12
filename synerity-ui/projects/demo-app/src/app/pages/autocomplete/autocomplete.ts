import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoComplete as SuiAutoComplete } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-autocomplete',
  imports: [CommonModule, FormsModule, SuiAutoComplete, Tabs],
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.scss'
})
export class Autocomplete {
  activeTab = 'demo';
  
  // Demo data
  basicAutoComplete = '';
  countryAutoComplete = '';
  disabledAutoComplete = '';
  minLengthAutoComplete = '';
  interactiveAutoComplete = '';
  
  // Options for demos
  countryOptions = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 
    'Italy', 'Spain', 'Japan', 'China', 'India', 'Australia', 'Brazil'
  ];
  
  skillOptions = [
    { label: 'JavaScript Developer', value: 'javascript' },
    { label: 'TypeScript Expert', value: 'typescript' },
    { label: 'Angular Specialist', value: 'angular' },
    { label: 'React Developer', value: 'react' },
    { label: 'Vue.js Developer', value: 'vue' },
    { label: 'Node.js Backend', value: 'nodejs' }
  ];
  
  // Code visibility states
  showBasicUsageCode = false;
  showAutoCompleteFeaturesCode = false;
  showAutoCompleteStatesCode = false;
  showAutoCompleteOptionsCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  onAutoCompleteChange(value: unknown, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Code toggle methods
  toggleCode(section: string) {
    switch(section) {
      case 'basicUsage': this.showBasicUsageCode = !this.showBasicUsageCode; break;
      case 'autoCompleteFeatures': this.showAutoCompleteFeaturesCode = !this.showAutoCompleteFeaturesCode; break;
      case 'autoCompleteStates': this.showAutoCompleteStatesCode = !this.showAutoCompleteStatesCode; break;
      case 'autoCompleteOptions': this.showAutoCompleteOptionsCode = !this.showAutoCompleteOptionsCode; break;
      case 'interactiveDemo': this.showInteractiveDemoCode = !this.showInteractiveDemoCode; break;
    }
  }
}
