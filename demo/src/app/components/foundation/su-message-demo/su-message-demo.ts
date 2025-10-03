import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Message } from '@synerity/ui';

@Component({
  selector: 'app-su-message-demo',
  imports: [CommonModule, FormsModule, Message],
  templateUrl: './su-message-demo.html',
  styleUrl: './su-message-demo.scss'
})
export class SuMessageDemo {
  // Message configurations
  messageConfigs = [
    {
      severity: 'success' as const,
      text: 'Operation completed successfully!',
      closable: true
    },
    {
      severity: 'info' as const,
      text: 'Here is some useful information for you.',
      closable: true
    },
    {
      severity: 'warn' as const,
      text: 'Please be careful with this action.',
      closable: true
    },
    {
      severity: 'error' as const,
      text: 'Something went wrong. Please try again.',
      closable: true
    }
  ];

  // Severity options
  severities = [
    { value: 'success', label: 'Success', icon: '✓' },
    { value: 'info', label: 'Info', icon: 'ℹ' },
    { value: 'warn', label: 'Warning', icon: '⚠' },
    { value: 'error', label: 'Error', icon: '✗' }
  ];

  selectedSeverity: 'success' | 'info' | 'warn' | 'error' = 'info';
  customText = 'This is a custom message.';
  closable = true;

  // Message visibility
  showMessage = true;
  messageKey = 0;

  // Event handlers
  onMessageClose(): void {
    console.log('Message closed');
    this.showMessage = false;
  }

  // Show different types of messages
  showSuccess(): void {
    this.selectedSeverity = 'success';
    this.customText = 'Operation completed successfully!';
    this.showMessage = true;
    this.messageKey++;
  }

  showInfo(): void {
    this.selectedSeverity = 'info';
    this.customText = 'Here is some useful information.';
    this.showMessage = true;
    this.messageKey++;
  }

  showWarning(): void {
    this.selectedSeverity = 'warn';
    this.customText = 'Please be careful with this action.';
    this.showMessage = true;
    this.messageKey++;
  }

  showError(): void {
    this.selectedSeverity = 'error';
    this.customText = 'Something went wrong. Please try again.';
    this.showMessage = true;
    this.messageKey++;
  }

  // Show custom message
  showCustomMessage(): void {
    this.showMessage = true;
    this.messageKey++;
  }

  // Hide message
  hideMessage(): void {
    this.showMessage = false;
  }

  // Get current severity config
  getCurrentSeverity(): any {
    return this.severities.find(s => s.value === this.selectedSeverity) || this.severities[0];
  }

  // Get message class
  getMessageClass(): string {
    let classes = 'sui-message';
    
    if (this.selectedSeverity) {
      classes += ` sui-message--${this.selectedSeverity}`;
    }
    
    return classes;
  }

  // Get message style
  getMessageStyle(): any {
    return {};
  }
}
