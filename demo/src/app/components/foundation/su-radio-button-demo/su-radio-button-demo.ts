import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioButton } from '@synerity/ui';

@Component({
  selector: 'app-su-radio-button-demo',
  imports: [CommonModule, FormsModule, RadioButton],
  templateUrl: './su-radio-button-demo.html',
  styleUrl: './su-radio-button-demo.scss'
})
export class SuRadioButtonDemo {
  // Basic radio button groups
  selectedValue1 = 'option1';
  selectedValue2 = 'option2';
  selectedValue3 = 'option3';
  selectedValue4 = 'option4';

  // Dynamic options
  options = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
    { value: 'xlarge', label: 'Extra Large' }
  ];

  selectedSize = 'medium';

  // Disabled state
  selectedDisabled = 'option1';
  isDisabled = false;

  // Event tracking
  changeCount = 0;
  lastChange = '';

  // Event handlers
  onRadioChange(event: any): void {
    this.changeCount++;
    this.lastChange = event;
    console.log('Radio button changed:', event);
  }

  // Reset counters
  resetCounters(): void {
    this.changeCount = 0;
    this.lastChange = '';
  }

  // Toggle disabled state
  toggleDisabled(): void {
    this.isDisabled = !this.isDisabled;
  }

  // Get configuration description
  getConfigDescription(): string {
    return `Selected: ${this.selectedSize} • Disabled: ${this.isDisabled}`;
  }

  // Sample data for different use cases
  getSampleData() {
    return {
      sizes: [
        { value: 'xs', label: 'Extra Small' },
        { value: 'sm', label: 'Small' },
        { value: 'md', label: 'Medium' },
        { value: 'lg', label: 'Large' },
        { value: 'xl', label: 'Extra Large' }
      ],
      colors: [
        { value: 'red', label: 'Red' },
        { value: 'blue', label: 'Blue' },
        { value: 'green', label: 'Green' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'purple', label: 'Purple' }
      ],
      themes: [
        { value: 'light', label: 'Light Theme' },
        { value: 'dark', label: 'Dark Theme' },
        { value: 'auto', label: 'Auto (System)' }
      ]
    };
  }
}
