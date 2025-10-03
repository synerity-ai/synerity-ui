import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Popover } from '@synerity/ui';

@Component({
  selector: 'app-su-popover-demo',
  imports: [CommonModule, FormsModule, Popover],
  templateUrl: './su-popover-demo.html',
  styleUrl: './su-popover-demo.scss'
})
export class SuPopoverDemo {
  // Popover configurations
  popoverConfigs = [
    {
      id: 'basic',
      position: 'bottom' as const,
      showCloseIcon: false,
      dismissible: true
    },
    {
      id: 'top',
      position: 'top' as const,
      showCloseIcon: false,
      dismissible: true
    },
    {
      id: 'left',
      position: 'left' as const,
      showCloseIcon: false,
      dismissible: true
    },
    {
      id: 'right',
      position: 'right' as const,
      showCloseIcon: false,
      dismissible: true
    }
  ];

  // Position options
  positions = [
    { value: 'top', label: 'Top' },
    { value: 'bottom', label: 'Bottom' },
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
    { value: 'top-left', label: 'Top Left' },
    { value: 'top-right', label: 'Top Right' },
    { value: 'bottom-left', label: 'Bottom Left' },
    { value: 'bottom-right', label: 'Bottom Right' }
  ];

  // Size options
  sizes = [
    { value: 'small', label: 'Small' },
    { value: 'normal', label: 'Normal' },
    { value: 'large', label: 'Large' },
    { value: 'xlarge', label: 'Extra Large' }
  ];

  // Color options
  colors = [
    { value: '', label: 'Default' },
    { value: 'primary', label: 'Primary' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'error', label: 'Error' },
    { value: 'info', label: 'Info' }
  ];

  selectedPosition: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'bottom';
  selectedSize = 'normal';
  selectedColor = '';
  showCloseIcon = false;
  dismissible = true;

  // Event tracking
  showCount = 0;
  hideCount = 0;

  // Event handlers
  onPopoverShow(): void {
    this.showCount++;
    console.log('Popover shown');
  }

  onPopoverHide(): void {
    this.hideCount++;
    console.log('Popover hidden');
  }

  // Get current configuration
  getCurrentConfig(): any {
    return this.popoverConfigs.find(config => config.id === 'basic') || this.popoverConfigs[0];
  }

  // Get popover class
  getPopoverClass(): string {
    let classes = 'sui-popover';
    
    if (this.selectedSize !== 'normal') {
      classes += ` sui-popover--${this.selectedSize}`;
    }
    
    if (this.selectedColor) {
      classes += ` sui-popover--${this.selectedColor}`;
    }
    
    return classes;
  }

  // Get popover style
  getPopoverStyle(): any {
    return {};
  }

  // Reset counters
  resetCounters(): void {
    this.showCount = 0;
    this.hideCount = 0;
  }

  // Get configuration description
  getConfigDescription(): string {
    let description = `Position: ${this.selectedPosition}`;
    description += ` • Dismissible: ${this.dismissible ? 'Yes' : 'No'}`;
    description += ` • Close Icon: ${this.showCloseIcon ? 'Yes' : 'No'}`;
    return description;
  }
}
