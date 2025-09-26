import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import Checkbox component from Synerity UI
import { Checkbox } from '@synerity/ui';

@Component({
  selector: 'app-rapid-checkbox',
  imports: [
    CommonModule,
    FormsModule,
    Checkbox
  ],
  templateUrl: './rapid-checkbox.html',
  styleUrl: './rapid-checkbox.scss'
})
export class RapidCheckbox {
  title = 'Synerity UI Checkbox Demo';
  
  // Basic checkbox states
  basicChecked = false;
  disabledChecked = true;
  indeterminateChecked = false;
  
  // Form integration
  formData = {
    terms: false,
    newsletter: true,
    notifications: false
  };
  
  // Checkbox group
  selectedOptions: string[] = [];
  availableOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' }
  ];
  
  // Size variants
  smallChecked = false;
  normalChecked = false;
  largeChecked = false;
  
  // Color variants
  primaryChecked = false;
  secondaryChecked = false;
  successChecked = false;
  warningChecked = false;
  dangerChecked = false;
  
  onCheckboxChange(event: boolean, type: string) {
    console.log(`${type} changed to:`, event);
  }
  
  onOptionToggle(option: string) {
    const index = this.selectedOptions.indexOf(option);
    if (index > -1) {
      this.selectedOptions.splice(index, 1);
    } else {
      this.selectedOptions.push(option);
    }
  }
  
  isOptionSelected(option: string): boolean {
    return this.selectedOptions.includes(option);
  }
}
