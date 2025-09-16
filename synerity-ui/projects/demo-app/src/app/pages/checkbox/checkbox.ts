import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-checkbox',
  imports: [CommonModule, FormsModule, Tabs],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss'
})
export class Checkbox {
  activeTab = 'demo';
  
  // Demo data
  basicCheckbox = false;
  disabledCheckbox = true;
  readonlyCheckbox = true;
  indeterminateCheckbox = false;
  
  // Multiple checkboxes
  selectedOptions: string[] = [];
  availableOptions = [
    { value: 'option1', label: 'Option 1', description: 'First option description' },
    { value: 'option2', label: 'Option 2', description: 'Second option description' },
    { value: 'option3', label: 'Option 3', description: 'Third option description' },
    { value: 'option4', label: 'Option 4', description: 'Fourth option description' }
  ];
  
  // Checkbox sizes
  smallCheckbox = false;
  mediumCheckbox = true;
  largeCheckbox = false;
  
  // Checkbox variants
  primaryCheckbox = true;
  secondaryCheckbox = false;
  successCheckbox = false;
  warningCheckbox = false;
  dangerCheckbox = false;
  
  // Interactive demo
  interactiveChecked = false;
  interactiveDisabled = false;
  interactiveReadonly = false;
  interactiveIndeterminate = false;
  interactiveSize = 'md';
  interactiveVariant = 'primary';
  interactiveLabel = 'Interactive Checkbox';
  interactiveDescription = 'This is an interactive checkbox for demonstration.';
  
  // Code visibility states
  showBasicCheckboxCode = false;
  showCheckboxStatesCode = false;
  showCheckboxSizesCode = false;
  showCheckboxVariantsCode = false;
  showMultipleCheckboxesCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicCheckbox':
        this.showBasicCheckboxCode = !this.showBasicCheckboxCode;
        break;
      case 'checkboxStates':
        this.showCheckboxStatesCode = !this.showCheckboxStatesCode;
        break;
      case 'checkboxSizes':
        this.showCheckboxSizesCode = !this.showCheckboxSizesCode;
        break;
      case 'checkboxVariants':
        this.showCheckboxVariantsCode = !this.showCheckboxVariantsCode;
        break;
      case 'multipleCheckboxes':
        this.showMultipleCheckboxesCode = !this.showMultipleCheckboxesCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  // Checkbox demo methods
  onCheckboxChange(checked: boolean) {
    console.log('Checkbox changed:', checked);
  }
  
  onOptionChange(option: string, checked: boolean) {
    if (checked) {
      if (!this.selectedOptions.includes(option)) {
        this.selectedOptions.push(option);
      }
    } else {
      this.selectedOptions = this.selectedOptions.filter(opt => opt !== option);
    }
    console.log('Selected options:', this.selectedOptions);
  }
  
  isOptionSelected(option: string): boolean {
    return this.selectedOptions.includes(option);
  }
  
  selectAll() {
    this.selectedOptions = this.availableOptions.map(option => option.value);
  }
  
  selectNone() {
    this.selectedOptions = [];
  }
  
  // Interactive demo methods
  toggleInteractive() {
    this.interactiveChecked = !this.interactiveChecked;
  }
  
  toggleDisabled() {
    this.interactiveDisabled = !this.interactiveDisabled;
  }
  
  toggleReadonly() {
    this.interactiveReadonly = !this.interactiveReadonly;
  }
  
  toggleIndeterminate() {
    this.interactiveIndeterminate = !this.interactiveIndeterminate;
  }
  
  updateSize(size: string) {
    this.interactiveSize = size;
  }
  
  updateVariant(variant: string) {
    this.interactiveVariant = variant;
  }
  
  resetInteractive() {
    this.interactiveChecked = false;
    this.interactiveDisabled = false;
    this.interactiveReadonly = false;
    this.interactiveIndeterminate = false;
    this.interactiveSize = 'md';
    this.interactiveVariant = 'primary';
  }
}
