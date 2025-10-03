import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DynamicDialog } from '@synerity/ui';

@Component({
  selector: 'app-su-dynamic-dialog-demo',
  imports: [CommonModule, FormsModule, DynamicDialog],
  templateUrl: './su-dynamic-dialog-demo.html',
  styleUrl: './su-dynamic-dialog-demo.scss'
})
export class SuDynamicDialogDemo {
  // Dynamic dialog configurations
  dialogConfigs = [
    {
      id: 'basic',
      header: 'Basic Dialog',
      modal: true,
      closable: true,
      draggable: true,
      resizable: false,
      width: 'auto',
      height: 'auto',
      position: 'center' as const
    },
    {
      id: 'draggable',
      header: 'Draggable Dialog',
      modal: true,
      closable: true,
      draggable: true,
      resizable: false,
      width: '400px',
      height: '300px',
      position: 'center' as const
    },
    {
      id: 'resizable',
      header: 'Resizable Dialog',
      modal: true,
      closable: true,
      draggable: false,
      resizable: true,
      width: '500px',
      height: '400px',
      position: 'center' as const
    },
    {
      id: 'positioned',
      header: 'Positioned Dialog',
      modal: true,
      closable: true,
      draggable: false,
      resizable: false,
      width: '350px',
      height: '250px',
      position: 'top' as const
    }
  ];

  // Position options
  positions = [
    { value: 'center', label: 'Center' },
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
    { value: 'error', label: 'Error' }
  ];

  selectedPosition: 'center' | 'top' | 'bottom' | 'left' | 'right' = 'center';
  selectedSize = 'normal';
  selectedColor = '';
  header = 'Dynamic Dialog';
  modal = true;
  closable = true;
  draggable = true;
  resizable = false;
  customWidth = 'auto';
  customHeight = 'auto';

  // Event tracking
  showCount = 0;
  hideCount = 0;

  // Event handlers
  onDialogShow(): void {
    this.showCount++;
    console.log('Dynamic dialog shown');
  }

  onDialogHide(): void {
    this.hideCount++;
    console.log('Dynamic dialog hidden');
  }

  // Get current configuration
  getCurrentConfig(): any {
    return this.dialogConfigs.find(config => config.id === 'basic') || this.dialogConfigs[0];
  }

  // Get dialog class
  getDialogClass(): string {
    let classes = 'sui-dynamic-dialog';
    
    if (this.selectedSize !== 'normal') {
      classes += ` sui-dynamic-dialog--${this.selectedSize}`;
    }
    
    if (this.selectedColor) {
      classes += ` sui-dynamic-dialog--${this.selectedColor}`;
    }
    
    return classes;
  }

  // Get dialog style
  getDialogStyle(): any {
    return {
      width: this.customWidth,
      height: this.customHeight
    };
  }

  // Reset counters
  resetCounters(): void {
    this.showCount = 0;
    this.hideCount = 0;
  }

  // Get configuration description
  getConfigDescription(): string {
    let description = `Position: ${this.selectedPosition}`;
    description += ` • Modal: ${this.modal ? 'Yes' : 'No'}`;
    description += ` • Draggable: ${this.draggable ? 'Yes' : 'No'}`;
    description += ` • Resizable: ${this.resizable ? 'Yes' : 'No'}`;
    return description;
  }

  // Get size dimensions
  getSizeDimensions(): { width: string, height: string } {
    switch (this.selectedSize) {
      case 'small':
        return { width: '300px', height: '200px' };
      case 'large':
        return { width: '600px', height: '400px' };
      case 'xlarge':
        return { width: '800px', height: '600px' };
      default:
        return { width: '400px', height: '300px' };
    }
  }
}
