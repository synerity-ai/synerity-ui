import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirmpopup',
  imports: [CommonModule, FormsModule],
  templateUrl: './confirmpopup.html',
  styleUrl: './confirmpopup.scss'
})
export class ConfirmPopupPage {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicPopupCode = false;
  showPositionedPopupCode = false;
  showCustomStylingCode = false;

  // Popup states
  basicPopupVisible = false;
  topPopupVisible = false;
  bottomPopupVisible = false;
  leftPopupVisible = false;
  rightPopupVisible = false;

  // Popup configurations
  basicPopupConfig = {
    message: 'Are you sure you want to delete this item?',
    acceptLabel: 'Delete',
    rejectLabel: 'Cancel'
  };

  topPopupConfig = {
    message: 'Save your changes?',
    acceptLabel: 'Save',
    rejectLabel: 'Discard',
    position: 'top' as const
  };

  bottomPopupConfig = {
    message: 'Continue with this action?',
    acceptLabel: 'Continue',
    rejectLabel: 'Cancel',
    position: 'bottom' as const
  };

  leftPopupConfig = {
    message: 'Are you sure?',
    acceptLabel: 'Yes',
    rejectLabel: 'No',
    position: 'left' as const
  };

  rightPopupConfig = {
    message: 'Confirm this operation?',
    acceptLabel: 'Confirm',
    rejectLabel: 'Cancel',
    position: 'right' as const
  };

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicPopup':
        this.showBasicPopupCode = !this.showBasicPopupCode;
        break;
      case 'positionedPopup':
        this.showPositionedPopupCode = !this.showPositionedPopupCode;
        break;
      case 'customStyling':
        this.showCustomStylingCode = !this.showCustomStylingCode;
        break;
    }
  }

  // Popup actions
  onBasicAccept(): void {
    console.log('Basic popup accepted');
    alert('Item deleted!');
  }

  onBasicReject(): void {
    console.log('Basic popup rejected');
  }

  onTopAccept(): void {
    console.log('Top popup accepted');
    alert('Changes saved!');
  }

  onTopReject(): void {
    console.log('Top popup rejected');
  }

  onBottomAccept(): void {
    console.log('Bottom popup accepted');
    alert('Action continued!');
  }

  onBottomReject(): void {
    console.log('Bottom popup rejected');
  }

  onLeftAccept(): void {
    console.log('Left popup accepted');
    alert('Confirmed!');
  }

  onLeftReject(): void {
    console.log('Left popup rejected');
  }

  onRightAccept(): void {
    console.log('Right popup accepted');
    alert('Operation confirmed!');
  }

  onRightReject(): void {
    console.log('Right popup rejected');
  }

  onPopupHide(): void {
    console.log('Popup hidden');
  }
}