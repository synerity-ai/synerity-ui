import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Toast } from '@synerity/ui';

@Component({
  selector: 'app-su-toast-demo',
  imports: [CommonModule, FormsModule, Toast],
  templateUrl: './su-toast-demo.html',
  styleUrl: './su-toast-demo.scss'
})
export class SuToastDemo {
  // Toast position
  selectedPosition: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center' = 'top-right';

  // Toast configurations
  positions = [
    { value: 'top-right', label: 'Top Right' },
    { value: 'top-left', label: 'Top Left' },
    { value: 'bottom-right', label: 'Bottom Right' },
    { value: 'bottom-left', label: 'Bottom Left' },
    { value: 'top-center', label: 'Top Center' },
    { value: 'bottom-center', label: 'Bottom Center' }
  ];

  // Demo data
  demoMessages = [
    {
      severity: 'success' as const,
      summary: 'Success!',
      detail: 'Your action was completed successfully.',
      life: 3000
    },
    {
      severity: 'info' as const,
      summary: 'Information',
      detail: 'Here is some useful information for you.',
      life: 4000
    },
    {
      severity: 'warn' as const,
      summary: 'Warning',
      detail: 'Please be careful with this action.',
      life: 5000
    },
    {
      severity: 'error' as const,
      summary: 'Error',
      detail: 'Something went wrong. Please try again.',
      life: 6000
    }
  ];

  // Custom messages
  customMessage = {
    severity: 'info' as const,
    summary: '',
    detail: '',
    life: 3000,
    closable: true
  };

  // Toast reference
  toastRef: any;

  // Event handlers
  onToastClose(message: any): void {
    console.log('Toast closed:', message);
  }

  // Show different types of toasts
  showSuccess(): void {
    this.toastRef?.add({
      severity: 'success',
      summary: 'Success!',
      detail: 'Operation completed successfully.',
      life: 3000
    });
  }

  showInfo(): void {
    this.toastRef?.add({
      severity: 'info',
      summary: 'Information',
      detail: 'Here is some useful information.',
      life: 4000
    });
  }

  showWarning(): void {
    this.toastRef?.add({
      severity: 'warn',
      summary: 'Warning',
      detail: 'Please be careful with this action.',
      life: 5000
    });
  }

  showError(): void {
    this.toastRef?.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Something went wrong. Please try again.',
      life: 6000
    });
  }

  // Show custom message
  showCustomMessage(): void {
    if (this.customMessage.summary.trim()) {
      this.toastRef?.add({
        ...this.customMessage,
        life: this.customMessage.life || 3000
      });
    }
  }

  // Show multiple toasts
  showMultiple(): void {
    this.demoMessages.forEach((message, index) => {
      setTimeout(() => {
        this.toastRef?.add(message);
      }, index * 500);
    });
  }

  // Show persistent toast
  showPersistent(): void {
    this.toastRef?.add({
      severity: 'info',
      summary: 'Persistent Toast',
      detail: 'This toast will not auto-close. Click the X to close it.',
      life: 0,
      closable: true
    });
  }

  // Clear all toasts
  clearAll(): void {
    this.toastRef?.clearAll();
  }

  // Get position class
  getPositionClass(): string {
    return `sui-toast--${this.selectedPosition}`;
  }
}
