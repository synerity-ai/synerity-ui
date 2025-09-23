import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SplitButton } from '../../../../../ui-lib/src/lib/split-button/split-button';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-split-button',
  standalone: true,
  imports: [CommonModule, FormsModule, SplitButton, Tabs],
  templateUrl: './split-button.html',
  styleUrls: ['./split-button.scss']
})
export class SplitButtonComponent {
  activeTab = 'demo';

  // Code visibility flags
  showBasicSplitButtonCode = false;
  showSplitButtonVariantsCode = false;
  showSplitButtonStatesCode = false;

  // Demo data
  basicItems = [
    { label: 'Save', icon: '💾', command: () => this.onAction('Save') },
    { label: 'Save As...', icon: '📁', command: () => this.onAction('Save As') },
    { label: 'Export', icon: '📤', command: () => this.onAction('Export') }
  ];

  variantItems = [
    { label: 'New Document', icon: '📄', command: () => this.onAction('New Document') },
    { label: 'Open', icon: '📂', command: () => this.onAction('Open') },
    { label: 'Recent Files', icon: '🕒', command: () => this.onAction('Recent Files') },
    { separator: true },
    { label: 'Settings', icon: '⚙️', command: () => this.onAction('Settings') }
  ];

  stateItems = [
    { label: 'Edit', icon: '✏️', command: () => this.onAction('Edit') },
    { label: 'Copy', icon: '📋', command: () => this.onAction('Copy') },
    { label: 'Disabled Action', icon: '🚫', command: () => this.onAction('Disabled'), disabled: true }
  ];

  lastAction = '';

  // Event handlers
  onTabChange(tabId: string): void {
    this.activeTab = tabId;
  }

  toggleCode(codeType: string): void {
    switch (codeType) {
      case 'basic':
        this.showBasicSplitButtonCode = !this.showBasicSplitButtonCode;
        break;
      case 'variants':
        this.showSplitButtonVariantsCode = !this.showSplitButtonVariantsCode;
        break;
      case 'states':
        this.showSplitButtonStatesCode = !this.showSplitButtonStatesCode;
        break;
    }
  }

  onAction(action: string): void {
    this.lastAction = action;
    console.log(`SplitButton action: ${action}`);
  }

  onSplitButtonClick(): void {
    this.onAction('Main Button Clicked');
  }

  onSplitButtonItemClick(item: any): void {
    console.log('SplitButton item clicked:', item);
  }
}
