import { Component, Input, ViewChild } from '@angular/core';
import { ComponentExample } from '../../models/component.model';
import { Dialog, Button } from '@synerity/ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.html',
  styleUrl: './dialog-demo.scss',
  imports: [Dialog, Button, FormsModule],
  standalone: true
})
export class DialogDemoComponent {
  @Input() currentExample: ComponentExample | null = null;

  // Basic Dialog
  basicDialogVisible = false;

  // Modal Dialog
  modalDialogVisible = false;

  // Size variants
  smallDialogVisible = false;
  largeDialogVisible = false;
  extraLargeDialogVisible = false;
  fullDialogVisible = false;

  // Position variants
  topDialogVisible = false;
  bottomDialogVisible = false;
  leftDialogVisible = false;
  rightDialogVisible = false;

  // Advanced features
  maximizableDialogVisible = false;
  resizableDialogVisible = false;
  nonClosableDialogVisible = false;

  // Form Dialog
  formDialogVisible = false;
  formData = {
    name: '',
    email: '',
    message: ''
  };

  // Confirmation Dialog
  confirmDialogVisible = false;
  confirmMessage = '';

  // Dialog references
  @ViewChild('basicDialog') basicDialog: Dialog | undefined;
  @ViewChild('modalDialog') modalDialog: Dialog | undefined;
  @ViewChild('smallDialog') smallDialog: Dialog | undefined;
  @ViewChild('largeDialog') largeDialog: Dialog | undefined;
  @ViewChild('extraLargeDialog') extraLargeDialog: Dialog | undefined;
  @ViewChild('fullDialog') fullDialog: Dialog | undefined;
  @ViewChild('topDialog') topDialog: Dialog | undefined;
  @ViewChild('bottomDialog') bottomDialog: Dialog | undefined;
  @ViewChild('leftDialog') leftDialog: Dialog | undefined;
  @ViewChild('rightDialog') rightDialog: Dialog | undefined;
  @ViewChild('maximizableDialog') maximizableDialog: Dialog | undefined;
  @ViewChild('resizableDialog') resizableDialog: Dialog | undefined;
  @ViewChild('nonClosableDialog') nonClosableDialog: Dialog | undefined;
  @ViewChild('formDialog') formDialog: Dialog | undefined;
  @ViewChild('confirmDialog') confirmDialog: Dialog | undefined;

  // Basic Dialog methods
  showBasicDialog(): void {
    this.basicDialogVisible = true;
  }

  hideBasicDialog(): void {
    this.basicDialogVisible = false;
  }

  // Modal Dialog methods
  showModalDialog(): void {
    this.modalDialogVisible = true;
  }

  hideModalDialog(): void {
    this.modalDialogVisible = false;
  }

  // Size variant methods
  showSmallDialog(): void {
    this.smallDialogVisible = true;
  }

  showLargeDialog(): void {
    this.largeDialogVisible = true;
  }

  showExtraLargeDialog(): void {
    this.extraLargeDialogVisible = true;
  }

  showFullDialog(): void {
    this.fullDialogVisible = true;
  }

  // Position variant methods
  showTopDialog(): void {
    this.topDialogVisible = true;
  }

  showBottomDialog(): void {
    this.bottomDialogVisible = true;
  }

  showLeftDialog(): void {
    this.leftDialogVisible = true;
  }

  showRightDialog(): void {
    this.rightDialogVisible = true;
  }

  // Advanced feature methods
  showMaximizableDialog(): void {
    this.maximizableDialogVisible = true;
  }

  showResizableDialog(): void {
    this.resizableDialogVisible = true;
  }

  showNonClosableDialog(): void {
    this.nonClosableDialogVisible = true;
  }

  // Form Dialog methods
  showFormDialog(): void {
    this.formDialogVisible = true;
  }

  hideFormDialog(): void {
    this.formDialogVisible = false;
    this.resetForm();
  }

  submitForm(): void {
    console.log('Form submitted:', this.formData);
    this.hideFormDialog();
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }

  // Confirmation Dialog methods
  showConfirmDialog(message: string): void {
    this.confirmMessage = message;
    this.confirmDialogVisible = true;
  }

  hideConfirmDialog(): void {
    this.confirmDialogVisible = false;
    this.confirmMessage = '';
  }

  confirmAction(): void {
    console.log('Action confirmed');
    this.hideConfirmDialog();
  }

  // Utility methods
  onDialogShow(): void {
    console.log('Dialog shown');
  }

  onDialogHide(): void {
    console.log('Dialog hidden');
  }

  onDialogMaximize(): void {
    console.log('Dialog maximized');
  }

  onDialogUnmaximize(): void {
    console.log('Dialog unmaximized');
  }
}
