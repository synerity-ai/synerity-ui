import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Dialog as SuiDialog } from '../../../../../ui-lib/src/lib/dialog/dialog';

@Component({
  selector: 'app-dialog',
  imports: [CommonModule, FormsModule, Tabs, SuiDialog],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss'
})
export class Dialog {
  activeTab = 'demo';
  
  // Demo data
  basicDialogVisible = false;
  modalDialogVisible = false;
  resizableDialogVisible = false;
  draggableDialogVisible = false;
  
  // Code visibility states
  showBasicDialogCode = false;
  showModalDialogCode = false;
  showResizableDialogCode = false;
  showDraggableDialogCode = false;
  
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
    }
  }
  
  // Dialog demo methods
  openBasicDialog() {
    this.basicDialogVisible = true;
  }
  
  closeBasicDialog() {
    this.basicDialogVisible = false;
  }
  
  openModalDialog() {
    this.modalDialogVisible = true;
  }
  
  closeModalDialog() {
    this.modalDialogVisible = false;
  }
  
  openResizableDialog() {
    this.resizableDialogVisible = true;
  }
  
  closeResizableDialog() {
    this.resizableDialogVisible = false;
  }
  
  openDraggableDialog() {
    this.draggableDialogVisible = true;
  }
  
  closeDraggableDialog() {
    this.draggableDialogVisible = false;
  }
}
