import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Dialog } from 'ui-lib';

@Component({
  selector: 'app-dialog',
  imports: [CommonModule, FormsModule, Tabs, Dialog],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss'
})
export class DialogPage {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicDialogCode = false;
  showModalDialogCode = false;
  showResizableDialogCode = false;
  showCustomStylingCode = false;

  // Dialog states
  basicDialogVisible = false;
  modalDialogVisible = false;
  resizableDialogVisible = false;
  maximizableDialogVisible = false;
  maximizedDialogVisible = false;

  // Dialog configurations
  basicDialogConfig = {
    header: 'Basic Dialog',
    modal: false,
    closable: true,
    draggable: true,
    resizable: false,
    maximizable: false
  };

  modalDialogConfig = {
    header: 'Modal Dialog',
    modal: true,
    closable: true,
    draggable: true,
    resizable: false,
    maximizable: false
  };

  resizableDialogConfig = {
    header: 'Resizable Dialog',
    modal: true,
    closable: true,
    draggable: true,
    resizable: true,
    maximizable: false,
    width: '400px',
    height: '300px'
  };

  maximizableDialogConfig = {
    header: 'Maximizable Dialog',
    modal: true,
    closable: true,
    draggable: true,
    resizable: false,
    maximizable: true,
    width: '500px',
    height: '400px'
  };

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicDialog':
        this.showBasicDialogCode = !this.showBasicDialogCode;
        break;
      case 'modalDialog':
        this.showModalDialogCode = !this.showModalDialogCode;
        break;
      case 'resizableDialog':
        this.showResizableDialogCode = !this.showResizableDialogCode;
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

  showModalDialog(): void {
    this.modalDialogVisible = true;
  }

  showResizableDialog(): void {
    this.resizableDialogVisible = true;
  }

  showMaximizableDialog(): void {
    this.maximizableDialogVisible = true;
  }

  onDialogShow(): void {
    console.log('Dialog shown');
  }

  onDialogHide(): void {
    console.log('Dialog hidden');
  }

  onDialogMaximize(): void {
    console.log('Dialog maximized');
    this.maximizedDialogVisible = true;
  }

  onDialogUnmaximize(): void {
    console.log('Dialog unmaximized');
    this.maximizedDialogVisible = false;
  }

  closeDialog(dialogType: string): void {
    switch (dialogType) {
      case 'basic':
        this.basicDialogVisible = false;
        break;
      case 'modal':
        this.modalDialogVisible = false;
        break;
      case 'resizable':
        this.resizableDialogVisible = false;
        break;
      case 'maximizable':
        this.maximizableDialogVisible = false;
        break;
    }
  }
}