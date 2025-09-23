import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Dialog as SuiDialog } from 'ui-lib';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiDialog],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss'
})
export class DialogComponent {
  activeTab = 'demo';
  showBasicDialog = false;
  showDraggableDialog = false;
  showResizableDialog = false;
  showMaximizableDialog = false;
  showPositionedDialog = false;

  // Code visibility toggles
  showBasicDialogCode = false;
  showDraggableDialogCode = false;
  showResizableDialogCode = false;
  showMaximizableDialogCode = false;
  showPositionedDialogCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicDialog':
        this.showBasicDialogCode = !this.showBasicDialogCode;
        break;
      case 'draggableDialog':
        this.showDraggableDialogCode = !this.showDraggableDialogCode;
        break;
      case 'resizableDialog':
        this.showResizableDialogCode = !this.showResizableDialogCode;
        break;
      case 'maximizableDialog':
        this.showMaximizableDialogCode = !this.showMaximizableDialogCode;
        break;
      case 'positionedDialog':
        this.showPositionedDialogCode = !this.showPositionedDialogCode;
        break;
    }
  }
}