import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayPanel } from '@synerity/ui';

@Component({
  selector: 'app-su-overlay-panel-demo',
  imports: [CommonModule, FormsModule, OverlayPanel],
  templateUrl: './su-overlay-panel-demo.html',
  styleUrl: './su-overlay-panel-demo.scss'
})
export class SuOverlayPanelDemo {
  // Overlay panel configurations
  overlayConfigs = [
    {
      id: 'basic',
      showCloseIcon: true,
      dismissable: true,
      modal: false
    },
    {
      id: 'modal',
      showCloseIcon: true,
      dismissable: true,
      modal: true
    },
    {
      id: 'no-close',
      showCloseIcon: false,
      dismissable: true,
      modal: false
    },
    {
      id: 'persistent',
      showCloseIcon: true,
      dismissable: false,
      modal: false
    }
  ];

  // Size options
  sizes = [
    { value: 'small', label: 'Small' },
    { value: 'normal', label: 'Normal' },
    { value: 'large', label: 'Large' },
    { value: 'xlarge', label: 'Extra Large' }
  ];

  selectedConfig = 'basic';
  selectedSize = 'normal';
  showCloseIcon = true;
  dismissable = true;
  modal = false;

  // Event tracking
  showCount = 0;
  hideCount = 0;

  // Event handlers
  onOverlayShow(): void {
    this.showCount++;
    console.log('Overlay panel shown');
  }

  onOverlayHide(): void {
    this.hideCount++;
    console.log('Overlay panel hidden');
  }

  // Get current configuration
  getCurrentConfig(): any {
    return this.overlayConfigs.find(config => config.id === this.selectedConfig) || this.overlayConfigs[0];
  }

  // Get overlay class
  getOverlayClass(): string {
    let classes = 'sui-overlay-panel';
    
    if (this.selectedSize !== 'normal') {
      classes += ` sui-overlay-panel--${this.selectedSize}`;
    }
    
    return classes;
  }

  // Get overlay style
  getOverlayStyle(): any {
    return {};
  }

  // Reset counters
  resetCounters(): void {
    this.showCount = 0;
    this.hideCount = 0;
  }

  // Get configuration description
  getConfigDescription(): string {
    const config = this.getCurrentConfig();
    let description = `Modal: ${config.modal ? 'Yes' : 'No'}`;
    description += ` • Dismissable: ${config.dismissable ? 'Yes' : 'No'}`;
    description += ` • Close Icon: ${config.showCloseIcon ? 'Yes' : 'No'}`;
    return description;
  }
}
