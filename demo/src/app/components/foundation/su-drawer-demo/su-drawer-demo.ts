import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Drawer } from '@synerity/ui';

@Component({
  selector: 'app-su-drawer-demo',
  imports: [CommonModule, FormsModule, Drawer],
  templateUrl: './su-drawer-demo.html',
  styleUrl: './su-drawer-demo.scss'
})
export class SuDrawerDemo {
  // Drawer configurations
  drawerConfigs = [
    {
      id: 'basic',
      position: 'left' as const,
      modal: true,
      closable: true,
      width: '300px',
      height: '300px'
    },
    {
      id: 'right',
      position: 'right' as const,
      modal: true,
      closable: true,
      width: '300px',
      height: '300px'
    },
    {
      id: 'top',
      position: 'top' as const,
      modal: true,
      closable: true,
      width: '300px',
      height: '300px'
    },
    {
      id: 'bottom',
      position: 'bottom' as const,
      modal: true,
      closable: true,
      width: '300px',
      height: '300px'
    }
  ];

  // Position options
  positions = [
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
    { value: 'top', label: 'Top' },
    { value: 'bottom', label: 'Bottom' }
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

  selectedPosition: 'left' | 'right' | 'top' | 'bottom' = 'left';
  selectedSize = 'normal';
  selectedColor = '';
  modal = true;
  closable = true;
  customWidth = '300px';
  customHeight = '300px';

  // Event tracking
  showCount = 0;
  hideCount = 0;

  // Event handlers
  onDrawerShow(): void {
    this.showCount++;
    console.log('Drawer shown');
  }

  onDrawerHide(): void {
    this.hideCount++;
    console.log('Drawer hidden');
  }

  // Get current configuration
  getCurrentConfig(): any {
    return this.drawerConfigs.find(config => config.id === 'basic') || this.drawerConfigs[0];
  }

  // Get drawer class
  getDrawerClass(): string {
    let classes = 'sui-drawer';
    
    if (this.selectedSize !== 'normal') {
      classes += ` sui-drawer--${this.selectedSize}`;
    }
    
    if (this.selectedColor) {
      classes += ` sui-drawer--${this.selectedColor}`;
    }
    
    return classes;
  }

  // Get drawer style
  getDrawerStyle(): any {
    const isVertical = this.selectedPosition === 'left' || this.selectedPosition === 'right';
    return {
      [isVertical ? 'width' : 'height']: isVertical ? this.customWidth : this.customHeight
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
    description += ` • Closable: ${this.closable ? 'Yes' : 'No'}`;
    return description;
  }

  // Get size dimensions
  getSizeDimensions(): { width: string, height: string } {
    switch (this.selectedSize) {
      case 'small':
        return { width: '250px', height: '250px' };
      case 'large':
        return { width: '400px', height: '400px' };
      case 'xlarge':
        return { width: '500px', height: '500px' };
      default:
        return { width: '300px', height: '300px' };
    }
  }
}
