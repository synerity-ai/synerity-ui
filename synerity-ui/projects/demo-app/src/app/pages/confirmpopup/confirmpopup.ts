import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs } from '../../shared/tabs/tabs';
import { ConfirmPopup as SuiConfirmPopup } from '../../../../../ui-lib/src/lib/confirm-popup/confirm-popup';

@Component({
  selector: 'app-confirmpopup',
  standalone: true,
  imports: [CommonModule, Tabs, SuiConfirmPopup],
  templateUrl: './confirmpopup.html',
  styleUrl: './confirmpopup.scss'
})
export class ConfirmPopupComponent {
  activeTab = 'demo';
  showBasicConfirmPopupCode = false;
  showIconConfirmPopupCode = false;
  showPositionConfirmPopupCode = false;

  // Basic popup
  lastBasicAction = 'None';

  // Icon popup
  lastIconAction = 'None';

  // Position popup
  lastPositionAction = 'None';

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicConfirmPopup':
        this.showBasicConfirmPopupCode = !this.showBasicConfirmPopupCode;
        break;
      case 'iconConfirmPopup':
        this.showIconConfirmPopupCode = !this.showIconConfirmPopupCode;
        break;
      case 'positionConfirmPopup':
        this.showPositionConfirmPopupCode = !this.showPositionConfirmPopupCode;
        break;
    }
  }

  onBasicAccept(): void {
    this.lastBasicAction = 'Item Deleted';
    console.log('Basic popup accepted - item deleted');
  }

  onBasicReject(): void {
    this.lastBasicAction = 'Deletion Cancelled';
    console.log('Basic popup rejected - deletion cancelled');
  }

  onIconAccept(): void {
    this.lastIconAction = 'Item Archived';
    console.log('Icon popup accepted - item archived');
  }

  onIconReject(): void {
    this.lastIconAction = 'Archive Cancelled';
    console.log('Icon popup rejected - archive cancelled');
  }

  onPositionAccept(position: string): void {
    this.lastPositionAction = `${position} popup accepted`;
    console.log(`${position} popup accepted`);
  }

  onPositionReject(position: string): void {
    this.lastPositionAction = `${position} popup rejected`;
    console.log(`${position} popup rejected`);
  }
}
