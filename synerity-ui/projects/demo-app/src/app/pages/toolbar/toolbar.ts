import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Toolbar } from '../../../../../ui-lib/src/lib/toolbar/toolbar';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, FormsModule, Toolbar, Tabs],
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.scss']
})
export class ToolbarComponent {
  activeTab = 'demo';

  // Code visibility flags
  showBasicToolbarCode = false;
  showToolbarVariantsCode = false;
  showToolbarCustomCode = false;

  // Demo data
  basicLeftItems = [
    { label: 'New', icon: '📄', command: () => this.onAction('New') },
    { label: 'Open', icon: '📂', command: () => this.onAction('Open') },
    { label: 'Save', icon: '💾', command: () => this.onAction('Save') }
  ];

  basicRightItems = [
    { label: 'Settings', icon: '⚙️', command: () => this.onAction('Settings') },
    { label: 'Help', icon: '❓', command: () => this.onAction('Help') }
  ];

  variantLeftItems = [
    { label: 'Bold', icon: 'B', command: () => this.onAction('Bold') },
    { label: 'Italic', icon: 'I', command: () => this.onAction('Italic') },
    { label: 'Underline', icon: 'U', command: () => this.onAction('Underline') },
    { separator: true },
    { label: 'Align Left', icon: '⬅️', command: () => this.onAction('Align Left') },
    { label: 'Align Center', icon: '↔️', command: () => this.onAction('Align Center') },
    { label: 'Align Right', icon: '➡️', command: () => this.onAction('Align Right') }
  ];

  variantRightItems = [
    { label: 'Undo', icon: '↶', command: () => this.onAction('Undo') },
    { label: 'Redo', icon: '↷', command: () => this.onAction('Redo') },
    { separator: true },
    { label: 'Print', icon: '🖨️', command: () => this.onAction('Print') }
  ];

  customLeftItems = [
    { label: 'Add User', icon: '👤', command: () => this.onAction('Add User') },
    { label: 'Edit', icon: '✏️', command: () => this.onAction('Edit') },
    { label: 'Delete', icon: '🗑️', command: () => this.onAction('Delete'), disabled: true }
  ];

  customRightItems = [
    { label: 'Export', icon: '📤', command: () => this.onAction('Export') },
    { label: 'Import', icon: '📥', command: () => this.onAction('Import') }
  ];

  lastAction = '';
  customToolbarStyle = { backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' };

  // Event handlers
  onTabChange(tabId: string): void {
    this.activeTab = tabId;
  }

  toggleCode(codeType: string): void {
    switch (codeType) {
      case 'basic':
        this.showBasicToolbarCode = !this.showBasicToolbarCode;
        break;
      case 'variants':
        this.showToolbarVariantsCode = !this.showToolbarVariantsCode;
        break;
      case 'custom':
        this.showToolbarCustomCode = !this.showToolbarCustomCode;
        break;
    }
  }

  onAction(action: string): void {
    this.lastAction = action;
    console.log(`Toolbar action: ${action}`);
  }

  onToolbarItemClick(item: any): void {
    console.log('Toolbar item clicked:', item);
  }
}