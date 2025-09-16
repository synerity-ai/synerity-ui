import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-dynamicdialog',
  imports: [CommonModule, FormsModule, Tabs],
  templateUrl: './dynamicdialog.html',
  styleUrl: './dynamicdialog.scss'
})
export class DynamicDialogPage {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicDialogCode = false;
  showDraggableDialogCode = false;
  showCustomStylingCode = false;

  // Dialog states
  basicDialogVisible = false;
  draggableDialogVisible = false;
  formDialogVisible = false;
  infoDialogVisible = false;

  // Dialog configurations
  basicDialogConfig = {
    header: 'Basic Dynamic Dialog',
    modal: true,
    closable: true,
    draggable: true,
    resizable: false,
    width: '400px',
    height: 'auto',
    position: 'center' as const
  };

  draggableDialogConfig = {
    header: 'Draggable Dialog',
    modal: true,
    closable: true,
    draggable: true,
    resizable: false,
    width: '500px',
    height: '300px',
    position: 'center' as const
  };

  formDialogConfig = {
    header: 'Form Dialog',
    modal: true,
    closable: true,
    draggable: true,
    resizable: false,
    width: '450px',
    height: 'auto',
    position: 'center' as const
  };

  infoDialogConfig = {
    header: 'Information Dialog',
    modal: true,
    closable: true,
    draggable: false,
    resizable: false,
    width: '350px',
    height: 'auto',
    position: 'center' as const
  };

  // Form data
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicDialog':
        this.showBasicDialogCode = !this.showBasicDialogCode;
        break;
      case 'draggableDialog':
        this.showDraggableDialogCode = !this.showDraggableDialogCode;
        break;
      case 'customStyling':
        this.showCustomStylingCode = !this.showCustomStylingCode;
        break;
    }
  }

  // Dialog actions
  showBasicDialog(): void {
    this.basicDialogVisible = true;
  }

  showDraggableDialog(): void {
    this.draggableDialogVisible = true;
  }

  showFormDialog(): void {
    this.formDialogVisible = true;
  }

  showInfoDialog(): void {
    this.infoDialogVisible = true;
  }

  onDialogShow(): void {
    console.log('Dynamic dialog shown');
  }

  onDialogHide(): void {
    console.log('Dynamic dialog hidden');
  }

  closeDialog(dialogType: string): void {
    switch (dialogType) {
      case 'basic':
        this.basicDialogVisible = false;
        break;
      case 'draggable':
        this.draggableDialogVisible = false;
        break;
      case 'form':
        this.formDialogVisible = false;
        break;
      case 'info':
        this.infoDialogVisible = false;
        break;
    }
  }

  // Form actions
  submitForm(): void {
    console.log('Form submitted:', this.formData);
    alert('Form submitted successfully!');
    this.formDialogVisible = false;
    this.resetForm();
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }

  // Info dialog actions
  onInfoAccept(): void {
    console.log('Info dialog accepted');
    this.infoDialogVisible = false;
  }
}