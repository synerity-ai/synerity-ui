import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiSelect as SuiMultiSelect } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-multiselect',
  imports: [CommonModule, FormsModule, SuiMultiSelect, Tabs],
  templateUrl: './multiselect.html',
  styleUrl: './multiselect.scss'
})
export class Multiselect {
  activeTab = 'demo';
  
  // Demo data
  basicMultiSelect: string[] = [];
  preSelectedMultiSelect: string[] = ['option1', 'option3'];
  disabledMultiSelect: string[] = [];
  interactiveMultiSelect: string[] = [];
  
  // Options for demos
  basicOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' }
  ];
  
  skillOptions = [
    { label: 'JavaScript', value: 'javascript' },
    { label: 'TypeScript', value: 'typescript' },
    { label: 'Angular', value: 'angular' },
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Node.js', value: 'nodejs' }
  ];
  
  // Code visibility states
  showBasicUsageCode = false;
  showMultiSelectFeaturesCode = false;
  showMultiSelectStatesCode = false;
  showMultiSelectOptionsCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  onMultiSelectChange(value: string[], field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Code toggle methods
  toggleCode(section: string) {
    switch(section) {
      case 'basicUsage': this.showBasicUsageCode = !this.showBasicUsageCode; break;
      case 'multiSelectFeatures': this.showMultiSelectFeaturesCode = !this.showMultiSelectFeaturesCode; break;
      case 'multiSelectStates': this.showMultiSelectStatesCode = !this.showMultiSelectStatesCode; break;
      case 'multiSelectOptions': this.showMultiSelectOptionsCode = !this.showMultiSelectOptionsCode; break;
      case 'interactiveDemo': this.showInteractiveDemoCode = !this.showInteractiveDemoCode; break;
    }
  }
}
