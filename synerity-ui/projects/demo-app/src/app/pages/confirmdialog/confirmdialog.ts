import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmDialog } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-confirmdialog',
  imports: [CommonModule, FormsModule, ConfirmDialog, Tabs],
  templateUrl: './confirmdialog.html',
  styleUrl: './confirmdialog.scss'
})
export class Confirmdialog {
  activeTab = 'demo';
  
  // Demo data
  confirmDialogVisible = false;
  confirmMessage = 'Are you sure you want to delete this item?';
  
  // Code visibility states
  showBasicConfirmDialogCode = false;
  showCustomConfirmDialogCode = false;
  showEventConfirmDialogCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicConfirmDialog':
        this.showBasicConfirmDialogCode = !this.showBasicConfirmDialogCode;
        break;
      case 'customConfirmDialog':
        this.showCustomConfirmDialogCode = !this.showCustomConfirmDialogCode;
        break;
      case 'eventConfirmDialog':
        this.showEventConfirmDialogCode = !this.showEventConfirmDialogCode;
        break;
    }
  }
  
  // Confirm dialog demo methods
  onConfirmDialogAccept(event: any) {
    console.log('Confirm dialog accepted:', event);
    this.confirmDialogVisible = false;
  }
  
  onConfirmDialogReject(event: any) {
    console.log('Confirm dialog rejected:', event);
    this.confirmDialogVisible = false;
  }
  
  showConfirmDialog() {
    this.confirmDialogVisible = true;
  }
  
  onConfirmDialogHide(event: any) {
    console.log('Confirm dialog hidden:', event);
    this.confirmDialogVisible = false;
  }
}
