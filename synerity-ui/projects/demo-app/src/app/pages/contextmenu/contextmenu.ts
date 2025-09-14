import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContextMenu as SuiContextMenu } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-contextmenu',
  imports: [CommonModule, FormsModule, SuiContextMenu, Tabs],
  templateUrl: './contextmenu.html',
  styleUrl: './contextmenu.scss'
})
export class ContextMenuPage {
  activeTab = 'demo';
  
  // Demo data
  basicContextMenuItems = [
    { label: 'Copy', icon: '📋', command: () => this.onAction('Copy') },
    { label: 'Paste', icon: '📄', command: () => this.onAction('Paste') },
    { label: 'Cut', icon: '✂️', command: () => this.onAction('Cut') },
    { separator: true },
    { label: 'Delete', icon: '🗑️', command: () => this.onAction('Delete') }
  ];
  
  nestedContextMenuItems = [
    { 
      label: 'File', 
      icon: '📁',
      items: [
        { label: 'New', icon: '📄', command: () => this.onAction('New File') },
        { label: 'Open', icon: '📂', command: () => this.onAction('Open File') },
        { label: 'Save', icon: '💾', command: () => this.onAction('Save File') }
      ]
    },
    { 
      label: 'Edit', 
      icon: '✏️',
      items: [
        { label: 'Undo', icon: '↶', command: () => this.onAction('Undo') },
        { label: 'Redo', icon: '↷', command: () => this.onAction('Redo') },
        { separator: true },
        { label: 'Find', icon: '🔍', command: () => this.onAction('Find') }
      ]
    },
    { label: 'Help', icon: '❓', command: () => this.onAction('Help') }
  ];
  
  disabledContextMenuItems = [
    { label: 'Action 1', icon: '⚡', command: () => this.onAction('Action 1') },
    { label: 'Action 2', icon: '🔧', command: () => this.onAction('Action 2'), disabled: true },
    { label: 'Action 3', icon: '🎯', command: () => this.onAction('Action 3') }
  ];
  
  // Interactive demo
  interactiveItems = [
    { label: 'Copy', icon: '📋', command: () => this.onAction('Copy') },
    { label: 'Paste', icon: '📄', command: () => this.onAction('Paste') },
    { label: 'Cut', icon: '✂️', command: () => this.onAction('Cut') },
    { separator: true },
    { label: 'Delete', icon: '🗑️', command: () => this.onAction('Delete') }
  ];
  
  // Code visibility states
  showBasicContextMenuCode = false;
  showNestedContextMenuCode = false;
  showDisabledContextMenuCode = false;
  showInteractiveDemoCode = false;
  
  // Action log
  actionLog: string[] = [];
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicContextMenu':
        this.showBasicContextMenuCode = !this.showBasicContextMenuCode;
        break;
      case 'nestedContextMenu':
        this.showNestedContextMenuCode = !this.showNestedContextMenuCode;
        break;
      case 'disabledContextMenu':
        this.showDisabledContextMenuCode = !this.showDisabledContextMenuCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onAction(action: string) {
    this.actionLog.unshift(`${new Date().toLocaleTimeString()}: ${action} clicked`);
    if (this.actionLog.length > 10) {
      this.actionLog = this.actionLog.slice(0, 10);
    }
  }
  
  onContextMenuShow() {
    this.onAction('Context Menu Shown');
  }
  
  onContextMenuHide() {
    this.onAction('Context Menu Hidden');
  }
  
  // Helper methods
  getContextMenuStatus(): { status: string; color: string; icon: string } {
    return { status: 'Ready', color: 'text-green-600', icon: '📋' };
  }
  
  // Quick actions
  clearActionLog() {
    this.actionLog = [];
  }
  
  addRandomItem() {
    const items = ['New Item', 'Random Action', 'Test Item', 'Sample Action'];
    const icons = ['⭐', '🔧', '🎯', '⚡', '📋', '📄', '✂️', '🗑️'];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    
    this.interactiveItems.unshift({
      label: randomItem,
      icon: randomIcon,
      command: () => this.onAction(randomItem)
    });
  }
  
  removeLastItem() {
    if (this.interactiveItems.length > 1) {
      this.interactiveItems.pop();
    }
  }
}
