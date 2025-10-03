import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FocusTrap } from '@synerity/ui';

@Component({
  selector: 'app-su-focus-trap-demo',
  imports: [CommonModule, FormsModule, FocusTrap],
  templateUrl: './su-focus-trap-demo.html',
  styleUrl: './su-focus-trap-demo.scss'
})
export class SuFocusTrapDemo {
  // Focus trap configurations
  focusTrapConfigs = [
    {
      id: 'basic',
      enabled: true,
      autoFocus: true,
      styleClass: 'sui-focus-trap--primary'
    },
    {
      id: 'disabled',
      enabled: false,
      autoFocus: false,
      styleClass: 'sui-focus-trap--error'
    }
  ];

  // Style options
  styles = [
    { value: '', label: 'Default' },
    { value: 'sui-focus-trap--primary', label: 'Primary' },
    { value: 'sui-focus-trap--success', label: 'Success' },
    { value: 'sui-focus-trap--warning', label: 'Warning' },
    { value: 'sui-focus-trap--error', label: 'Error' }
  ];

  // Size options
  sizes = [
    { value: '', label: 'Normal' },
    { value: 'sui-focus-trap--small', label: 'Small' },
    { value: 'sui-focus-trap--large', label: 'Large' }
  ];

  selectedStyle = '';
  selectedSize = '';
  enabled = true;
  autoFocus = true;

  // Event tracking
  focusCount = 0;
  lastFocusedElement = '';

  // Event handlers
  onFocus(event: any): void {
    this.focusCount++;
    this.lastFocusedElement = event.target?.tagName || 'Unknown';
    console.log('Focus event:', event);
  }

  onBlur(event: any): void {
    console.log('Blur event:', event);
  }

  onKeyDown(event: KeyboardEvent): void {
    console.log('Key down event:', event.key);
  }

  // Get focus trap class
  getFocusTrapClass(): string {
    let classes = 'sui-focus-trap';
    
    if (this.selectedStyle) {
      classes += ` ${this.selectedStyle}`;
    }
    
    if (this.selectedSize) {
      classes += ` ${this.selectedSize}`;
    }
    
    return classes;
  }

  // Get focus trap style
  getFocusTrapStyle(): any {
    return {};
  }

  // Reset counters
  resetCounters(): void {
    this.focusCount = 0;
    this.lastFocusedElement = '';
  }

  // Get configuration description
  getConfigDescription(): string {
    let description = `Enabled: ${this.enabled ? 'Yes' : 'No'}`;
    description += ` • Auto Focus: ${this.autoFocus ? 'Yes' : 'No'}`;
    description += ` • Style: ${this.selectedStyle || 'Default'}`;
    description += ` • Size: ${this.selectedSize || 'Normal'}`;
    return description;
  }

  // Sample form fields for focus trap
  getFormFields() {
    return [
      { type: 'text', placeholder: 'First Name', required: true },
      { type: 'text', placeholder: 'Last Name', required: true },
      { type: 'email', placeholder: 'Email Address', required: true },
      { type: 'tel', placeholder: 'Phone Number', required: false },
      { type: 'text', placeholder: 'Company', required: false }
    ];
  }

  // Sample buttons for focus trap
  getActionButtons() {
    return [
      { label: 'Save', type: 'primary', action: () => this.onAction('Save') },
      { label: 'Cancel', type: 'secondary', action: () => this.onAction('Cancel') },
      { label: 'Reset', type: 'warning', action: () => this.onAction('Reset') }
    ];
  }

  onAction(action: string): void {
    console.log('Action clicked:', action);
    alert(`Action: ${action}`);
  }
}
