import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentExample } from '../../models/component.model';
import { Toast } from '@synerity/ui';

@Component({
  selector: 'app-toast-demo',
  standalone: true,
  imports: [CommonModule, Toast],
  templateUrl: './toast-demo.html',
  styleUrls: ['./toast-demo.scss']
})
export class ToastDemoComponent {
  @Input() currentExample!: ComponentExample;
  @ViewChild('toastRef') toastRef!: Toast;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Toast demonstration methods
  showSuccessToast(): void {
    if (this.toastRef) {
      this.toastRef.add({
        severity: 'success',
        summary: 'Success!',
        detail: 'Operation completed successfully.',
        life: 3000,
        closable: true
      });
    }
  }

  showInfoToast(): void {
    if (this.toastRef) {
      this.toastRef.add({
        severity: 'info',
        summary: 'Information',
        detail: 'Here is some helpful information for you.',
        life: 4000,
        closable: true
      });
    }
  }

  showWarningToast(): void {
    if (this.toastRef) {
      this.toastRef.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Please review your input before proceeding.',
        life: 5000,
        closable: true
      });
    }
  }

  showErrorToast(): void {
    if (this.toastRef) {
      this.toastRef.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Something went wrong. Please try again.',
        life: 6000,
        closable: true
      });
    }
  }

  showPersistentToast(): void {
    if (this.toastRef) {
      this.toastRef.add({
        severity: 'info',
        summary: 'Persistent Message',
        detail: 'This toast will not auto-dismiss.',
        life: 0,
        closable: true
      });
    }
  }

  showNonClosableToast(): void {
    if (this.toastRef) {
      this.toastRef.add({
        severity: 'info',
        summary: 'System Message',
        detail: 'Important system notification.',
        life: 3000,
        closable: false
      });
    }
  }

  clearAllToasts(): void {
    if (this.toastRef) {
      this.toastRef.clearAll();
    }
  }
}