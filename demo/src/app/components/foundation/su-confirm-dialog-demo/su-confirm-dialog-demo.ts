import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmDialog } from '@synerity/ui';

@Component({
  selector: 'app-su-confirm-dialog-demo',
  imports: [CommonModule, FormsModule, ConfirmDialog],
  templateUrl: './su-confirm-dialog-demo.html',
  styleUrl: './su-confirm-dialog-demo.scss'
})
export class SuConfirmDialogDemo {
  // Basic Confirm Dialog
  basicConfirmVisible = false;
  
  // Custom Labels
  customConfirmVisible = false;
  
  // With Icons
  iconConfirmVisible = false;
  
  // Different Variants
  successConfirmVisible = false;
  warningConfirmVisible = false;
  errorConfirmVisible = false;
  
  // Custom Styling
  customStyledConfirmVisible = false;
  
  // Form Confirmation
  formConfirmVisible = false;
  formData = {
    name: '',
    email: ''
  };
  
  // Delete Confirmation
  deleteConfirmVisible = false;
  itemToDelete = 'Important Document';
  
  // Multiple Actions
  actionConfirmVisible = false;
  selectedAction = '';
  
  // Confirmation Results
  lastResult = '';
  
  // Custom Messages
  customMessages = [
    { value: 'delete', label: 'Delete Item', message: 'Are you sure you want to delete this item? This action cannot be undone.' },
    { value: 'save', label: 'Save Changes', message: 'Do you want to save your changes before leaving?' },
    { value: 'reset', label: 'Reset Form', message: 'This will clear all form data. Are you sure?' },
    { value: 'logout', label: 'Logout', message: 'Are you sure you want to logout? Any unsaved changes will be lost.' }
  ];
  
  selectedMessage = 'delete';
  
  // Event Handlers
  onAccept() {
    this.lastResult = 'Accepted';
    console.log('User accepted the confirmation');
  }
  
  onReject() {
    this.lastResult = 'Rejected';
    console.log('User rejected the confirmation');
  }
  
  onHide() {
    console.log('Confirm dialog hidden');
  }
  
  // Custom Actions
  showDeleteConfirmation() {
    this.deleteConfirmVisible = true;
  }
  
  confirmDelete() {
    this.lastResult = 'Item deleted successfully';
    this.deleteConfirmVisible = false;
    console.log('Item deleted:', this.itemToDelete);
  }
  
  cancelDelete() {
    this.lastResult = 'Delete cancelled';
    this.deleteConfirmVisible = false;
    console.log('Delete cancelled');
  }
  
  // Form Actions
  showFormConfirmation() {
    this.formConfirmVisible = true;
  }
  
  confirmFormSubmission() {
    this.lastResult = 'Form submitted successfully';
    this.formConfirmVisible = false;
    console.log('Form submitted:', this.formData);
  }
  
  cancelFormSubmission() {
    this.lastResult = 'Form submission cancelled';
    this.formConfirmVisible = false;
    console.log('Form submission cancelled');
  }
  
  // Get Current Message
  getCurrentMessage(): string {
    const message = this.customMessages.find(m => m.value === this.selectedMessage);
    return message ? message.message : 'Are you sure?';
  }
  
  // Get Current Label
  getCurrentLabel(): string {
    const message = this.customMessages.find(m => m.value === this.selectedMessage);
    return message ? message.label : 'Confirm';
  }
}
