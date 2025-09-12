import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Checkbox as SuiCheckbox } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-checkbox',
  imports: [CommonModule, FormsModule, SuiCheckbox, Tabs],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss'
})
export class Checkbox {
  activeTab = 'demo';
  
  // Demo data
  basicChecked = false;
  disabledChecked = true;
  readonlyChecked = true;
  requiredChecked = false;
  indeterminateChecked = false;
  
  // Sizes
  smallChecked = false;
  mediumChecked = false;
  largeChecked = false;
  
  // Variants
  defaultChecked = false;
  filledChecked = false;
  outlinedChecked = false;
  
  // With labels
  labeledChecked = false;
  customLabelChecked = false;
  
  // Checkbox group
  selectedOptions: string[] = [];
  options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];
  
  // Interactive demo
  interactiveChecked = false;
  
  // Code visibility states
  showBasicUsageCode = false;
  showCheckboxStatesCode = false;
  showCheckboxLabelsCode = false;
  showCheckboxGroupCode = false;
  showInteractiveDemoCode = false;
  
  // Event handlers
  onCheckboxChange(event: any) {
    console.log('Checkbox changed:', event);
  }
  
  onCheckboxFocus(event: any) {
    console.log('Checkbox focused:', event);
  }
  
  onCheckboxBlur(event: any) {
    console.log('Checkbox blurred:', event);
  }
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  // Checkbox group methods
  toggleOption(value: string, checked: boolean) {
    if (checked) {
      if (!this.selectedOptions.includes(value)) {
        this.selectedOptions.push(value);
      }
    } else {
      this.selectedOptions = this.selectedOptions.filter(option => option !== value);
    }
  }
  
  // Code toggle methods
  toggleCode(section: string) {
    switch(section) {
      case 'basicUsage':
        this.showBasicUsageCode = !this.showBasicUsageCode;
        break;
      case 'checkboxStates':
        this.showCheckboxStatesCode = !this.showCheckboxStatesCode;
        break;
      case 'checkboxLabels':
        this.showCheckboxLabelsCode = !this.showCheckboxLabelsCode;
        break;
      case 'checkboxGroup':
        this.showCheckboxGroupCode = !this.showCheckboxGroupCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
}
