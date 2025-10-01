import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconField } from '@synerity/ui';

@Component({
  selector: 'app-su-icon-field-demo',
  imports: [CommonModule, FormsModule, IconField],
  templateUrl: './su-icon-field-demo.html',
  styleUrl: './su-icon-field-demo.scss'
})
export class SuIconFieldDemo {
  // Basic input values
  searchQuery = '';
  emailAddress = '';
  phoneNumber = '';
  
  // Position examples
  leftIconValue = '';
  rightIconValue = '';
  
  // Size examples
  smallInput = '';
  normalInput = '';
  largeInput = '';
  
  // Different icons
  userInput = '';
  lockInput = '';
  calendarInput = '';
  locationInput = '';
  
  // Disabled example
  disabledInput = 'Disabled field';
  
  // Interactive example
  interactiveValue = '';
  currentIcon = '🔍';
  currentPosition: 'left' | 'right' = 'left';
  currentSize: 'small' | 'normal' | 'large' = 'normal';
  isDisabled = false;
  
  // Icon options
  iconOptions = [
    { value: '🔍', label: 'Search' },
    { value: '📧', label: 'Email' },
    { value: '👤', label: 'User' },
    { value: '🔒', label: 'Lock' },
    { value: '📅', label: 'Calendar' },
    { value: '📍', label: 'Location' },
    { value: '💡', label: 'Light Bulb' },
    { value: '⭐', label: 'Star' },
    { value: '❤️', label: 'Heart' },
    { value: '🔔', label: 'Bell' }
  ];
  
  // Position options
  positions: Array<{ value: 'left' | 'right'; label: string }> = [
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' }
  ];
  
  // Size options
  sizes: Array<{ value: 'small' | 'normal' | 'large'; label: string }> = [
    { value: 'small', label: 'Small' },
    { value: 'normal', label: 'Normal' },
    { value: 'large', label: 'Large' }
  ];
  
  getCodeExample(): string {
    const attrs = [
      `icon="${this.currentIcon}"`,
      `position="${this.currentPosition}"`,
      `size="${this.currentSize}"`
    ];
    
    if (this.isDisabled) {
      attrs.push('[disabled]="true"');
    }
    
    return `<sui-icon-field ${attrs.join(' ')}>
  <input 
    type="text" 
    [(ngModel)]="interactiveValue" 
    placeholder="Enter text..."${this.isDisabled ? '\n    [disabled]="true"' : ''}
  />
</sui-icon-field>`;
  }
}
