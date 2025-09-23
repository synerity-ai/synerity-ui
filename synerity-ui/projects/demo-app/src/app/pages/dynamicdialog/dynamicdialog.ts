import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { DynamicDialog as SuiDynamicDialog } from 'ui-lib';

@Component({
  selector: 'app-dynamicdialog',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiDynamicDialog],
  templateUrl: './dynamicdialog.html',
  styleUrl: './dynamicdialog.scss'
})
export class DynamicDialogComponent {
  activeTab = 'demo';
  showBasicDynamicDialog = false;
  showDraggableDynamicDialog = false;
  showCustomSizeDynamicDialog = false;

  // Code visibility toggles
  showBasicDynamicDialogCode = false;
  showDraggableDynamicDialogCode = false;
  showCustomSizeDynamicDialogCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicDynamicDialog':
        this.showBasicDynamicDialogCode = !this.showBasicDynamicDialogCode;
        break;
      case 'draggableDynamicDialog':
        this.showDraggableDynamicDialogCode = !this.showDraggableDynamicDialogCode;
        break;
      case 'customSizeDynamicDialog':
        this.showCustomSizeDynamicDialogCode = !this.showCustomSizeDynamicDialogCode;
        break;
    }
  }
}
