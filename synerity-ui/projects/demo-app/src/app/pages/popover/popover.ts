import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Popover } from 'ui-lib';

@Component({
  selector: 'app-popover',
  imports: [CommonModule, FormsModule, Tabs, Popover],
  templateUrl: './popover.html',
  styleUrl: './popover.scss'
})
export class PopoverPage {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicPopoverCode = false;
  showPositionedPopoverCode = false;
  showCustomStylingCode = false;

  // Popover states
  basicPopoverVisible = false;
  topPopoverVisible = false;
  bottomPopoverVisible = false;
  leftPopoverVisible = false;
  rightPopoverVisible = false;
  topLeftPopoverVisible = false;
  topRightPopoverVisible = false;
  bottomLeftPopoverVisible = false;
  bottomRightPopoverVisible = false;

  // Popover configurations
  basicPopoverConfig = {
    position: 'bottom' as const,
    dismissible: true,
    showCloseIcon: false
  };

  topPopoverConfig = {
    position: 'top' as const,
    dismissible: true,
    showCloseIcon: false
  };

  bottomPopoverConfig = {
    position: 'bottom' as const,
    dismissible: true,
    showCloseIcon: false
  };

  leftPopoverConfig = {
    position: 'left' as const,
    dismissible: true,
    showCloseIcon: false
  };

  rightPopoverConfig = {
    position: 'right' as const,
    dismissible: true,
    showCloseIcon: false
  };

  topLeftPopoverConfig = {
    position: 'top-left' as const,
    dismissible: true,
    showCloseIcon: false
  };

  topRightPopoverConfig = {
    position: 'top-right' as const,
    dismissible: true,
    showCloseIcon: false
  };

  bottomLeftPopoverConfig = {
    position: 'bottom-left' as const,
    dismissible: true,
    showCloseIcon: false
  };

  bottomRightPopoverConfig = {
    position: 'bottom-right' as const,
    dismissible: true,
    showCloseIcon: false
  };

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicPopover':
        this.showBasicPopoverCode = !this.showBasicPopoverCode;
        break;
      case 'positionedPopover':
        this.showPositionedPopoverCode = !this.showPositionedPopoverCode;
        break;
      case 'customStyling':
        this.showCustomStylingCode = !this.showCustomStylingCode;
        break;
    }
  }

  // Popover actions
  onPopoverShow(): void {
    console.log('Popover shown');
  }

  onPopoverHide(): void {
    console.log('Popover hidden');
  }

  // Content actions
  onEditClick(): void {
    console.log('Edit clicked');
    alert('Edit action triggered!');
  }

  onDeleteClick(): void {
    console.log('Delete clicked');
    alert('Delete action triggered!');
  }

  onShareClick(): void {
    console.log('Share clicked');
    alert('Share action triggered!');
  }

  onCopyClick(): void {
    console.log('Copy clicked');
    alert('Content copied to clipboard!');
  }

  onDownloadClick(): void {
    console.log('Download clicked');
    alert('Download started!');
  }

  onPrintClick(): void {
    console.log('Print clicked');
    alert('Print dialog opened!');
  }

  onSettingsClick(): void {
    console.log('Settings clicked');
    alert('Settings opened!');
  }

  onHelpClick(): void {
    console.log('Help clicked');
    alert('Help documentation opened!');
  }
}