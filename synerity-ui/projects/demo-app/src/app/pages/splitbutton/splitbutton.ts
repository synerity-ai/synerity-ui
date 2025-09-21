import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { SplitButton as SuiSplitButton } from '../../../../../ui-lib/src/lib/split-button/split-button';

@Component({
  selector: 'app-splitbutton',
  imports: [CommonModule, FormsModule, Tabs, SuiSplitButton],
  templateUrl: './splitbutton.html',
  styleUrl: './splitbutton.scss'
})
export class SplitbuttonComponent {
  activeTab = 'demo';
  showBasicCode = false;
  showIconCode = false;
  showCustomCode = false;

  // Demo data
  basicItems = [
    { label: 'Save', icon: '💾', command: () => this.save() },
    { label: 'Save As', icon: '📁', command: () => this.saveAs() },
    { label: '', separator: true },
    { label: 'Export', icon: '📤', command: () => this.export() },
    { label: 'Print', icon: '🖨️', command: () => this.print() }
  ];

  iconItems = [
    { label: 'New File', icon: '📄', command: () => this.newFile() },
    { label: 'Open File', icon: '📂', command: () => this.openFile() },
    { label: '', separator: true },
    { label: 'Settings', icon: '⚙️', command: () => this.settings() },
    { label: 'Help', icon: '❓', command: () => this.help() }
  ];

  customItems = [
    { label: 'Primary Action', icon: '⭐', command: () => this.primaryAction() },
    { label: 'Secondary Action', icon: '🔧', command: () => this.secondaryAction() },
    { label: '', separator: true },
    { label: 'Advanced Options', icon: '⚡', command: () => this.advancedOptions() },
    { label: 'Disabled Action', icon: '🚫', command: () => this.disabledAction(), disabled: true }
  ];

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'icon':
        this.showIconCode = !this.showIconCode;
        break;
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
    }
  }

  // Action methods
  save(): void {
    console.log('Save action triggered');
  }

  saveAs(): void {
    console.log('Save As action triggered');
  }

  export(): void {
    console.log('Export action triggered');
  }

  print(): void {
    console.log('Print action triggered');
  }

  newFile(): void {
    console.log('New File action triggered');
  }

  openFile(): void {
    console.log('Open File action triggered');
  }

  settings(): void {
    console.log('Settings action triggered');
  }

  help(): void {
    console.log('Help action triggered');
  }

  primaryAction(): void {
    console.log('Primary Action triggered');
  }

  secondaryAction(): void {
    console.log('Secondary Action triggered');
  }

  advancedOptions(): void {
    console.log('Advanced Options triggered');
  }

  disabledAction(): void {
    console.log('Disabled Action triggered');
  }

  onMainButtonClick(): void {
    console.log('Main button clicked');
    this.save(); // Default action
  }

  onMenuItemClick(item: any): void {
    console.log('Menu item clicked:', item.label);
    if (item.command) {
      item.command();
    }
  }
}
