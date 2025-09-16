import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-confirmdialog',
  imports: [CommonModule, FormsModule, Tabs],
  templateUrl: './confirmdialog.html',
  styleUrl: './confirmdialog.scss'
})
export class ConfirmDialogPage {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicDialogCode = false;
  showCustomDialogCode = false;
  showCustomStylingCode = false;

  // Dialog states
  basicDialogVisible = false;
  customDialogVisible = false;
  deleteDialogVisible = false;

  // Dialog configurations
  basicDialogConfig = {
    header: 'Confirm Action',
    message: 'Are you sure you want to proceed?',
    acceptLabel: 'Yes',
    rejectLabel: 'No'
  };

  customDialogConfig = {
    header: 'Save Changes',
    message: 'Do you want to save your changes before closing?',
    acceptLabel: 'Save',
    rejectLabel: 'Discard',
    acceptIcon: '💾',
    rejectIcon: '🗑️'
  };

  deleteDialogConfig = {
    header: 'Delete Item',
    message: 'This action cannot be undone. Are you sure you want to delete this item?',
    acceptLabel: 'Delete',
    rejectLabel: 'Cancel',
    acceptIcon: '🗑️',
    rejectIcon: '❌'
  };

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicDialog':
        this.showBasicDialogCode = !this.showBasicDialogCode;
        break;
      case 'customDialog':
        this.showCustomDialogCode = !this.showCustomDialogCode;
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

  showCustomDialog(): void {
    this.customDialogVisible = true;
  }

  showDeleteDialog(): void {
    this.deleteDialogVisible = true;
  }

  onBasicAccept(): void {
    console.log('Basic dialog accepted');
    alert('Action confirmed!');
  }

  onBasicReject(): void {
    console.log('Basic dialog rejected');
  }

  onCustomAccept(): void {
    console.log('Custom dialog accepted');
    alert('Changes saved!');
  }

  onCustomReject(): void {
    console.log('Custom dialog rejected');
    alert('Changes discarded!');
  }

  onDeleteAccept(): void {
    console.log('Delete dialog accepted');
    alert('Item deleted!');
  }

  onDeleteReject(): void {
    console.log('Delete dialog rejected');
  }

  onDialogHide(): void {
    console.log('Dialog hidden');
  }
}