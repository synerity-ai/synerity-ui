import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Inplace } from '@synerity/ui';

@Component({
  selector: 'app-su-inplace-demo',
  imports: [CommonModule, FormsModule, Inplace],
  templateUrl: './su-inplace-demo.html',
  styleUrl: './su-inplace-demo.scss'
})
export class SuInplaceDemo {
  // Inplace configurations
  inplaceConfigs = [
    {
      id: 'basic',
      active: false,
      closable: true,
      disabled: false
    },
    {
      id: 'non-closable',
      active: false,
      closable: false,
      disabled: false
    },
    {
      id: 'disabled',
      active: false,
      closable: true,
      disabled: true
    },
    {
      id: 'active',
      active: true,
      closable: true,
      disabled: false
    }
  ];

  // Size options
  sizes = [
    { value: 'small', label: 'Small' },
    { value: 'normal', label: 'Normal' },
    { value: 'large', label: 'Large' }
  ];

  // Color options
  colors = [
    { value: '', label: 'Default' },
    { value: 'primary', label: 'Primary' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'error', label: 'Error' }
  ];

  selectedSize = 'normal';
  selectedColor = '';
  closable = true;
  disabled = false;

  // Event tracking
  activateCount = 0;
  deactivateCount = 0;

  // Event handlers
  onInplaceActivate(): void {
    this.activateCount++;
    console.log('Inplace activated');
  }

  onInplaceDeactivate(): void {
    this.deactivateCount++;
    console.log('Inplace deactivated');
  }

  // Get current configuration
  getCurrentConfig(): any {
    return this.inplaceConfigs.find(config => config.id === 'basic') || this.inplaceConfigs[0];
  }

  // Get inplace class
  getInplaceClass(): string {
    let classes = 'sui-inplace';
    
    if (this.selectedSize !== 'normal') {
      classes += ` sui-inplace--${this.selectedSize}`;
    }
    
    if (this.selectedColor) {
      classes += ` sui-inplace--${this.selectedColor}`;
    }
    
    return classes;
  }

  // Get inplace style
  getInplaceStyle(): any {
    return {};
  }

  // Reset counters
  resetCounters(): void {
    this.activateCount = 0;
    this.deactivateCount = 0;
  }

  // Get configuration description
  getConfigDescription(): string {
    let description = `Size: ${this.selectedSize}`;
    description += ` • Color: ${this.selectedColor || 'Default'}`;
    description += ` • Closable: ${this.closable ? 'Yes' : 'No'}`;
    description += ` • Disabled: ${this.disabled ? 'Yes' : 'No'}`;
    return description;
  }
}
