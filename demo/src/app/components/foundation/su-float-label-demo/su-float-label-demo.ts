import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from '@synerity/ui';

@Component({
  selector: 'app-su-float-label-demo',
  imports: [CommonModule, FormsModule, FloatLabel],
  templateUrl: './su-float-label-demo.html',
  styleUrl: './su-float-label-demo.scss'
})
export class SuFloatLabelDemo {
  // Basic input values
  username = '';
  email = '';
  password = '';
  
  // Textarea value
  message = '';
  
  // Select value
  country = '';
  
  // Required field
  requiredField = '';
  
  // Error state
  errorField = '';
  
  // Success state
  successField = 'Valid input';
  
  // Outlined variant
  outlinedField = '';
  
  // Filled variant
  filledField = '';
  
  // Disabled field
  disabledField = 'Disabled value';
  
  // Interactive example
  labelText = 'Your Name';
  inputValue = '';
  isRequired = false;
  isDisabled = false;
  currentVariant = 'default';
  currentState = 'default';
  
  // Variant options
  variants = [
    { value: 'default', label: 'Default' },
    { value: 'outlined', label: 'Outlined' },
    { value: 'filled', label: 'Filled' }
  ];
  
  // State options
  states = [
    { value: 'default', label: 'Default' },
    { value: 'error', label: 'Error' },
    { value: 'success', label: 'Success' }
  ];
  
  // Country options for select demo
  countries = [
    { value: '', label: 'Select a country' },
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' }
  ];
  
  getFloatLabelClass(): string {
    const classes = [];
    
    if (this.currentVariant === 'outlined') {
      classes.push('sui-float-label-outlined');
    } else if (this.currentVariant === 'filled') {
      classes.push('sui-float-label-filled');
    }
    
    if (this.currentState === 'error') {
      classes.push('sui-float-label-error');
    } else if (this.currentState === 'success') {
      classes.push('sui-float-label-success');
    }
    
    if (this.isDisabled) {
      classes.push('sui-float-label-disabled');
    }
    
    return classes.join(' ');
  }
  
  getCodeExample(): string {
    const attrs = [`label="${this.labelText}"`];
    
    if (this.isRequired) {
      attrs.push('[required]="true"');
    }
    
    const styleClass = this.getFloatLabelClass();
    if (styleClass) {
      attrs.push(`styleClass="${styleClass}"`);
    }
    
    const inputAttrs = [];
    inputAttrs.push('type="text"');
    inputAttrs.push('[(ngModel)]="inputValue"');
    inputAttrs.push('placeholder=" "');
    
    if (this.isDisabled) {
      inputAttrs.push('[disabled]="true"');
    }
    
    return `<sui-float-label ${attrs.join(' ')}>
  <input ${inputAttrs.join(' ')} />
</sui-float-label>`;
  }
}
