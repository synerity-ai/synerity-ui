import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Dialog as SuiDialog } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-dialog',
  imports: [CommonModule, FormsModule, SuiDialog, Tabs],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss'
})
export class DialogPage {
  activeTab = 'demo';
  
  // Dialog states
  basicDialogVisible = false;
  modalDialogVisible = false;
  resizableDialogVisible = false;
  draggableDialogVisible = false;
  maximizableDialogVisible = false;
  customDialogVisible = false;
  
  // Dialog configurations
  dialogHeader = 'Dialog Title';
  dialogWidth = '400px';
  dialogHeight = '300px';
  dialogPosition: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'center';
  
  // Code visibility states
  showBasicDialogCode = false;
  showModalDialogCode = false;
  showResizableDialogCode = false;
  showDraggableDialogCode = false;
  showMaximizableDialogCode = false;
  showCustomDialogCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicDialog':
        this.showBasicDialogCode = !this.showBasicDialogCode;
        break;
      case 'modalDialog':
        this.showModalDialogCode = !this.showModalDialogCode;
        break;
      case 'resizableDialog':
        this.showResizableDialogCode = !this.showResizableDialogCode;
        break;
      case 'draggableDialog':
        this.showDraggableDialogCode = !this.showDraggableDialogCode;
        break;
      case 'maximizableDialog':
        this.showMaximizableDialogCode = !this.showMaximizableDialogCode;
        break;
      case 'customDialog':
        this.showCustomDialogCode = !this.showCustomDialogCode;
        break;
    }
  }
  
  // Dialog event handlers
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
}
