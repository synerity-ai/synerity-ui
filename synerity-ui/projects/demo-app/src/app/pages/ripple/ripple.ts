import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ripple } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-ripple-page',
  standalone: true,
  imports: [CommonModule, FormsModule, Ripple, Tabs],
  templateUrl: './ripple.html',
  styleUrl: './ripple.scss'
})
export class RipplePage {
  activeTab = 'demo';

  // Basic Ripple
  basicDisabled = false;
  basicColor = 'rgba(0, 0, 0, 0.1)';

  // Custom Ripple
  customDisabled = false;
  customColor = 'rgba(59, 130, 246, 0.3)';
  customDuration = 600;

  // Button Ripples
  buttonRipples = [
    { label: 'Primary', color: 'rgba(59, 130, 246, 0.3)', disabled: false },
    { label: 'Success', color: 'rgba(16, 185, 129, 0.3)', disabled: false },
    { label: 'Warning', color: 'rgba(245, 158, 11, 0.3)', disabled: false },
    { label: 'Danger', color: 'rgba(239, 68, 68, 0.3)', disabled: false }
  ];

  // Interactive Demo
  interactiveDisabled = false;
  interactiveColor = 'rgba(139, 92, 246, 0.3)';
  interactiveDuration = 500;

  // Code visibility
  showBasicRippleCode = false;
  showCustomRippleCode = false;
  showButtonRipplesCode = false;
  showInteractiveDemoCode = false;

  // Action log
  actionLog: string[] = [];

  onTabChange(tabId: string) {
    this.activeTab = tabId;
  }

  toggleCode(example: string) {
    switch (example) {
      case 'basicRipple':
        this.showBasicRippleCode = !this.showBasicRippleCode;
        break;
      case 'customRipple':
        this.showCustomRippleCode = !this.showCustomRippleCode;
        break;
      case 'buttonRipples':
        this.showButtonRipplesCode = !this.showButtonRipplesCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }

  // Interactive Demo methods
  toggleDisabled() {
    this.interactiveDisabled = !this.interactiveDisabled;
    this.addToActionLog(`Ripple ${this.interactiveDisabled ? 'disabled' : 'enabled'}`);
  }

  setRandomColor() {
    const colors = [
      'rgba(239, 68, 68, 0.3)',
      'rgba(245, 158, 11, 0.3)',
      'rgba(16, 185, 129, 0.3)',
      'rgba(59, 130, 246, 0.3)',
      'rgba(139, 92, 246, 0.3)',
      'rgba(236, 72, 153, 0.3)',
      'rgba(6, 182, 212, 0.3)'
    ];
    this.interactiveColor = colors[Math.floor(Math.random() * colors.length)];
    this.addToActionLog(`Color set to ${this.interactiveColor}`);
  }

  setRandomDuration() {
    this.interactiveDuration = Math.floor(Math.random() * 800) + 200;
    this.addToActionLog(`Duration set to ${this.interactiveDuration}ms`);
  }

  toggleAllButtonRipples() {
    const allDisabled = this.buttonRipples.every(ripple => ripple.disabled);
    this.buttonRipples.forEach(ripple => {
      ripple.disabled = !allDisabled;
    });
    this.addToActionLog(`All button ripples ${allDisabled ? 'enabled' : 'disabled'}`);
  }

  addToActionLog(action: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.actionLog.unshift(`[${timestamp}] ${action}`);
    if (this.actionLog.length > 10) {
      this.actionLog.pop();
    }
  }

  clearActionLog() {
    this.actionLog = [];
  }

  getButtonClass(label: string): string {
    switch (label) {
      case 'Primary':
        return 'bg-blue-600 text-white hover:bg-blue-700';
      case 'Success':
        return 'bg-green-600 text-white hover:bg-green-700';
      case 'Warning':
        return 'bg-yellow-600 text-white hover:bg-yellow-700';
      case 'Danger':
        return 'bg-red-600 text-white hover:bg-red-700';
      default:
        return 'bg-gray-600 text-white hover:bg-gray-700';
    }
  }
}