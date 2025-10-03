import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlockUi } from '@synerity/ui';

@Component({
  selector: 'app-su-block-ui-demo',
  imports: [CommonModule, FormsModule, BlockUi],
  templateUrl: './su-block-ui-demo.html',
  styleUrl: './su-block-ui-demo.scss'
})
export class SuBlockUiDemo {
  // Block UI configurations
  blockConfigs = [
    {
      id: 'basic',
      blocked: false,
      message: 'Loading...',
      showSpinner: true
    },
    {
      id: 'no-spinner',
      blocked: false,
      message: 'Processing...',
      showSpinner: false
    },
    {
      id: 'no-message',
      blocked: false,
      message: '',
      showSpinner: true
    },
    {
      id: 'custom',
      blocked: false,
      message: 'Please wait while we process your request...',
      showSpinner: true
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

  selectedConfig = 'basic';
  selectedSize = 'normal';
  selectedColor = '';
  customMessage = 'Loading...';
  showSpinner = true;
  blocked = false;

  // Event tracking
  blockCount = 0;
  unblockCount = 0;

  // Event handlers
  onBlock(): void {
    this.blocked = true;
    this.blockCount++;
    console.log('UI blocked');
  }

  onUnblock(): void {
    this.blocked = false;
    this.unblockCount++;
    console.log('UI unblocked');
  }

  // Get current configuration
  getCurrentConfig(): any {
    return this.blockConfigs.find(config => config.id === this.selectedConfig) || this.blockConfigs[0];
  }

  // Get block UI class
  getBlockUiClass(): string {
    let classes = 'sui-block-ui';
    
    if (this.selectedSize !== 'normal') {
      classes += ` sui-block-ui--${this.selectedSize}`;
    }
    
    if (this.selectedColor) {
      classes += ` sui-block-ui--${this.selectedColor}`;
    }
    
    return classes;
  }

  // Get block UI style
  getBlockUiStyle(): any {
    return {};
  }

  // Get overlay class
  getOverlayClass(): string {
    return 'sui-block-ui-overlay';
  }

  // Get overlay style
  getOverlayStyle(): any {
    return {};
  }

  // Reset counters
  resetCounters(): void {
    this.blockCount = 0;
    this.unblockCount = 0;
  }

  // Get configuration description
  getConfigDescription(): string {
    const config = this.getCurrentConfig();
    let description = `Spinner: ${config.showSpinner ? 'Yes' : 'No'}`;
    description += ` • Message: ${config.message ? 'Yes' : 'No'}`;
    return description;
  }

  // Simulate loading
  simulateLoading(): void {
    this.onBlock();
    setTimeout(() => {
      this.onUnblock();
    }, 3000);
  }
}
