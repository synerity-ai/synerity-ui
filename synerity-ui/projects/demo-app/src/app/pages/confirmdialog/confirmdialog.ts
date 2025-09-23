import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs } from '../../shared/tabs/tabs';
import { ConfirmDialog as SuiConfirmDialog } from '../../../../../ui-lib/src/lib/confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-confirmdialog',
  standalone: true,
  imports: [CommonModule, Tabs, SuiConfirmDialog],
  templateUrl: './confirmdialog.html',
  styleUrl: './confirmdialog.scss'
})
export class ConfirmDialogComponent {
  activeTab = 'demo';
  showBasicConfirmDialogCode = false;
  showIconConfirmDialogCode = false;
  showCustomConfirmDialogCode = false;

  // Basic dialog
  basicDialogVisible = false;
  lastAction = 'None';

  // Icon dialog
  iconDialogVisible = false;
  lastIconAction = 'None';

  // Custom dialog
  customDialogVisible = false;
  lastCustomAction = 'None';

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicConfirmDialog':
        this.showBasicConfirmDialogCode = !this.showBasicConfirmDialogCode;
        break;
      case 'iconConfirmDialog':
        this.showIconConfirmDialogCode = !this.showIconConfirmDialogCode;
        break;
      case 'customConfirmDialog':
        this.showCustomConfirmDialogCode = !this.showCustomConfirmDialogCode;
        break;
    }
  }

  showBasicDialog(): void {
    this.basicDialogVisible = true;
  }

  onBasicAccept(): void {
    this.lastAction = 'Accepted';
    console.log('Basic dialog accepted');
  }

  onBasicReject(): void {
    this.lastAction = 'Rejected';
    console.log('Basic dialog rejected');
  }

  onBasicHide(): void {
    this.basicDialogVisible = false;
  }

  showIconDialog(): void {
    this.iconDialogVisible = true;
  }

  onIconAccept(): void {
    this.lastIconAction = 'Item Deleted';
    console.log('Icon dialog accepted - item deleted');
  }

  onIconReject(): void {
    this.lastIconAction = 'Deletion Cancelled';
    console.log('Icon dialog rejected - deletion cancelled');
  }

  onIconHide(): void {
    this.iconDialogVisible = false;
  }

  showCustomDialog(): void {
    this.customDialogVisible = true;
  }

  onCustomAccept(): void {
    this.lastCustomAction = 'Changes Saved';
    console.log('Custom dialog accepted - changes saved');
  }

  onCustomReject(): void {
    this.lastCustomAction = 'Changes Not Saved';
    console.log('Custom dialog rejected - changes not saved');
  }

  onCustomHide(): void {
    this.customDialogVisible = false;
  }
}