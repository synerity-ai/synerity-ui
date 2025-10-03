import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmPopup } from '@synerity/ui';

@Component({
  selector: 'app-su-confirm-popup-demo',
  imports: [CommonModule, FormsModule, ConfirmPopup],
  templateUrl: './su-confirm-popup-demo.html',
  styleUrl: './su-confirm-popup-demo.scss'
})
export class SuConfirmPopupDemo {
  // Popup configurations
  popupConfigs = [
    {
      id: 'basic',
      message: 'Are you sure you want to delete this item?',
      acceptLabel: 'Delete',
      rejectLabel: 'Cancel',
      acceptIcon: '🗑️',
      rejectIcon: '✗'
    },
    {
      id: 'custom',
      message: 'This action cannot be undone. Do you want to continue?',
      acceptLabel: 'Continue',
      rejectLabel: 'Go Back',
      acceptIcon: '✓',
      rejectIcon: '←'
    },
    {
      id: 'warning',
      message: 'You are about to make permanent changes. Are you sure?',
      acceptLabel: 'Yes, Proceed',
      rejectLabel: 'Cancel',
      acceptIcon: '⚠️',
      rejectIcon: '✗'
    }
  ];

  // Position options
  positions = [
    { value: 'top', label: 'Top' },
    { value: 'bottom', label: 'Bottom' },
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' }
  ];

  selectedPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  selectedConfig = 'basic';

  // Custom popup settings
  customMessage = 'Are you sure you want to proceed?';
  customAcceptLabel = 'Yes';
  customRejectLabel = 'No';
  customAcceptIcon = '';
  customRejectIcon = '';

  // Results tracking
  lastAction = '';
  actionCount = 0;

  // Event handlers
  onAccept(): void {
    this.lastAction = 'Accepted';
    this.actionCount++;
    console.log('User accepted the confirmation');
  }

  onReject(): void {
    this.lastAction = 'Rejected';
    this.actionCount++;
    console.log('User rejected the confirmation');
  }

  onHide(): void {
    console.log('Confirm popup hidden');
  }

  // Get current configuration
  getCurrentConfig(): any {
    if (this.selectedConfig === 'custom') {
      return {
        message: this.customMessage,
        acceptLabel: this.customAcceptLabel,
        rejectLabel: this.customRejectLabel,
        acceptIcon: this.customAcceptIcon,
        rejectIcon: this.customRejectIcon
      };
    }
    return this.popupConfigs.find(config => config.id === this.selectedConfig) || this.popupConfigs[0];
  }

  // Reset counters
  resetCounters(): void {
    this.actionCount = 0;
    this.lastAction = '';
  }

  // Get position class
  getPositionClass(): string {
    return `sui-confirm-popup--${this.selectedPosition}`;
  }
}
