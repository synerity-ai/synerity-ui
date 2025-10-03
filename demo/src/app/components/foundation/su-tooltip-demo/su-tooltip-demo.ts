import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tooltip } from '@synerity/ui';

@Component({
  selector: 'app-su-tooltip-demo',
  imports: [CommonModule, FormsModule, Tooltip],
  templateUrl: './su-tooltip-demo.html',
  styleUrl: './su-tooltip-demo.scss'
})
export class SuTooltipDemo {
  // Tooltip configurations
  tooltipConfigs = [
    {
      id: 'basic',
      tooltip: 'This is a basic tooltip',
      position: 'top' as const,
      showDelay: 0,
      hideDelay: 0
    },
    {
      id: 'delayed',
      tooltip: 'This tooltip has a delay',
      position: 'bottom' as const,
      showDelay: 500,
      hideDelay: 200
    },
    {
      id: 'positioned',
      tooltip: 'This tooltip is positioned to the right',
      position: 'right' as const,
      showDelay: 0,
      hideDelay: 0
    },
    {
      id: 'custom',
      tooltip: 'Custom styled tooltip',
      position: 'left' as const,
      showDelay: 300,
      hideDelay: 100
    }
  ];

  // Position options
  positions = [
    { value: 'top', label: 'Top' },
    { value: 'bottom', label: 'Bottom' },
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' }
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
    { value: 'info', label: 'Info' },
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' }
  ];

  selectedPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  selectedSize = 'normal';
  selectedColor = '';
  tooltipText = 'This is a tooltip';
  showDelay = 0;
  hideDelay = 0;
  disabled = false;

  // Event tracking
  showCount = 0;
  hideCount = 0;

  // Event handlers
  onTooltipShow(): void {
    this.showCount++;
    console.log('Tooltip shown');
  }

  onTooltipHide(): void {
    this.hideCount++;
    console.log('Tooltip hidden');
  }

  // Get current configuration
  getCurrentConfig(): any {
    return this.tooltipConfigs.find(config => config.id === 'basic') || this.tooltipConfigs[0];
  }

  // Get tooltip class
  getTooltipClass(): string {
    let classes = 'sui-tooltip';
    
    if (this.selectedSize !== 'normal') {
      classes += ` sui-tooltip--${this.selectedSize}`;
    }
    
    if (this.selectedColor) {
      classes += ` sui-tooltip--${this.selectedColor}`;
    }
    
    return classes;
  }

  // Get tooltip style
  getTooltipStyle(): any {
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
    description += ` • Show Delay: ${this.showDelay}ms`;
    description += ` • Hide Delay: ${this.hideDelay}ms`;
    return description;
  }

  // Get size dimensions
  getSizeDimensions(): { width: string, height: string } {
    switch (this.selectedSize) {
      case 'small':
        return { width: '120px', height: 'auto' };
      case 'large':
        return { width: '200px', height: 'auto' };
      case 'xlarge':
        return { width: '300px', height: 'auto' };
      default:
        return { width: '150px', height: 'auto' };
    }
  }
}
