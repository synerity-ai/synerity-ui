import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Dialog } from '@synerity/ui';

@Component({
  selector: 'app-su-dialog-demo',
  imports: [CommonModule, FormsModule, Dialog],
  templateUrl: './su-dialog-demo.html',
  styleUrl: './su-dialog-demo.scss'
})
export class SuDialogDemo {
  // Basic Dialog
  basicDialogVisible = false;
  
  // Modal Dialog
  modalDialogVisible = false;
  
  // Resizable Dialog
  resizableDialogVisible = false;
  
  // Maximizable Dialog
  maximizableDialogVisible = false;
  maximized = false;
  
  // Draggable Dialog
  draggableDialogVisible = false;
  
  // Custom Styled Dialog
  customDialogVisible = false;
  
  // Form Dialog
  formDialogVisible = false;
  formData = {
    name: '',
    email: '',
    message: ''
  };
  
  // Confirmation Dialog
  confirmDialogVisible = false;
  
  // Multiple Dialogs
  firstDialogVisible = false;
  secondDialogVisible = false;
  
  // Dialog Variants
  variants = [
    { value: 'default', label: 'Default' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'error', label: 'Error' }
  ];
  
  selectedVariant = 'default';
  
  // Dialog Sizes
  sizes = [
    { value: 'sm', label: 'Small (300px)' },
    { value: 'md', label: 'Medium (500px)' },
    { value: 'lg', label: 'Large (800px)' },
    { value: 'xl', label: 'Extra Large (1200px)' }
  ];
  
  selectedSize = 'md';
  
  // Dialog Positions
  positions = [
    { value: 'center', label: 'Center' },
    { value: 'top', label: 'Top' },
    { value: 'bottom', label: 'Bottom' },
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' }
  ];
  
  selectedPosition = 'center';
  
  // Event Handlers
  onDialogShow() {
    console.log('Dialog shown');
  }
  
  onDialogHide() {
    console.log('Dialog hidden');
  }
  
  onDialogMaximize() {
    console.log('Dialog maximized');
  }
  
  onDialogUnmaximize() {
    console.log('Dialog unmaximized');
  }
  
  // Form Submission
  submitForm() {
    console.log('Form submitted:', this.formData);
    this.formDialogVisible = false;
    this.formData = { name: '', email: '', message: '' };
  }
  
  // Confirmation Actions
  confirmAction() {
    console.log('Action confirmed');
    this.confirmDialogVisible = false;
  }
  
  cancelAction() {
    console.log('Action cancelled');
    this.confirmDialogVisible = false;
  }
  
  // Get Dialog Width
  getDialogWidth(): string {
    switch (this.selectedSize) {
      case 'sm': return '300px';
      case 'md': return '500px';
      case 'lg': return '800px';
      case 'xl': return '1200px';
      default: return '500px';
    }
  }
  
  // Get Dialog Style Class
  getDialogStyleClass(): string {
    return `sui-dialog-${this.selectedVariant}`;
  }
}
