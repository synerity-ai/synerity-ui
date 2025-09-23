import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpeedDial } from '../../../../../ui-lib/src/lib/speed-dial/speed-dial';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-speed-dial',
  standalone: true,
  imports: [CommonModule, FormsModule, SpeedDial, Tabs],
  templateUrl: './speed-dial.html',
  styleUrls: ['./speed-dial.scss']
})
export class SpeedDialComponent {
  activeTab = 'demo';

  // Code visibility flags
  showBasicSpeedDialCode = false;
  showSpeedDialVariantsCode = false;
  showSpeedDialStatesCode = false;

  // Demo data
  basicItems = [
    { label: 'Add', icon: '➕', command: () => this.onAction('Add') },
    { label: 'Edit', icon: '✏️', command: () => this.onAction('Edit') },
    { label: 'Delete', icon: '🗑️', command: () => this.onAction('Delete') }
  ];

  variantItems = [
    { label: 'Share', icon: '📤', command: () => this.onAction('Share') },
    { label: 'Download', icon: '⬇️', command: () => this.onAction('Download') },
    { label: 'Print', icon: '🖨️', command: () => this.onAction('Print') },
    { label: 'Email', icon: '📧', command: () => this.onAction('Email') }
  ];

  stateItems = [
    { label: 'Save', icon: '💾', command: () => this.onAction('Save') },
    { label: 'Cancel', icon: '❌', command: () => this.onAction('Cancel') },
    { label: 'Disabled', icon: '🚫', command: () => this.onAction('Disabled'), disabled: true }
  ];

  lastAction = '';

  // Event handlers
  onTabChange(tabId: string): void {
    this.activeTab = tabId;
  }

  toggleCode(codeType: string): void {
    switch (codeType) {
      case 'basic':
        this.showBasicSpeedDialCode = !this.showBasicSpeedDialCode;
        break;
      case 'variants':
        this.showSpeedDialVariantsCode = !this.showSpeedDialVariantsCode;
        break;
      case 'states':
        this.showSpeedDialStatesCode = !this.showSpeedDialStatesCode;
        break;
    }
  }

  onAction(action: string): void {
    this.lastAction = action;
    console.log(`SpeedDial action: ${action}`);
  }

  onSpeedDialItemClick(item: any): void {
    console.log('SpeedDial item clicked:', item);
  }
}
