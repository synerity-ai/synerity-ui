import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Menubar as SuiMenubar } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-menubar',
  imports: [CommonModule, FormsModule, SuiMenubar, Tabs],
  templateUrl: './menubar.html',
  styleUrl: './menubar.scss'
})
export class MenubarPage {
  activeTab = 'demo';
  
  // Demo data
  basicMenubarItems = [
    { 
      label: 'File', 
      icon: '📁',
      items: [
        { label: 'New', icon: '📄', command: () => this.onAction('New File') },
        { label: 'Open', icon: '📂', command: () => this.onAction('Open File') },
        { label: 'Save', icon: '💾', command: () => this.onAction('Save File') },
        { label: 'Save As', icon: '💾', command: () => this.onAction('Save As') },
        { separator: true },
        { label: 'Exit', icon: '🚪', command: () => this.onAction('Exit') }
      ]
    },
    { 
      label: 'Edit', 
      icon: '✏️',
      items: [
        { label: 'Undo', icon: '↶', command: () => this.onAction('Undo') },
        { label: 'Redo', icon: '↷', command: () => this.onAction('Redo') },
        { separator: true },
        { label: 'Cut', icon: '✂️', command: () => this.onAction('Cut') },
        { label: 'Copy', icon: '📋', command: () => this.onAction('Copy') },
        { label: 'Paste', icon: '📄', command: () => this.onAction('Paste') }
      ]
    },
    { 
      label: 'View', 
      icon: '👁️',
      items: [
        { label: 'Zoom In', icon: '🔍+', command: () => this.onAction('Zoom In') },
        { label: 'Zoom Out', icon: '🔍-', command: () => this.onAction('Zoom Out') },
        { label: 'Reset Zoom', icon: '🔍', command: () => this.onAction('Reset Zoom') }
      ]
    },
    { 
      label: 'Help', 
      icon: '❓',
      items: [
        { label: 'Documentation', icon: '📚', command: () => this.onAction('Documentation') },
        { label: 'About', icon: 'ℹ️', command: () => this.onAction('About') }
      ]
    }
  ];
  
  nestedMenubarItems = [
    { 
      label: 'Products', 
      icon: '📦',
      items: [
        { 
          label: 'Electronics', 
          icon: '📱',
          items: [
            { label: 'Phones', icon: '📞', command: () => this.onAction('Phones') },
            { label: 'Laptops', icon: '💻', command: () => this.onAction('Laptops') },
            { label: 'Tablets', icon: '📱', command: () => this.onAction('Tablets') }
          ]
        },
        { 
          label: 'Clothing', 
          icon: '👕',
          items: [
            { label: 'Men', icon: '👔', command: () => this.onAction('Men Clothing') },
            { label: 'Women', icon: '👗', command: () => this.onAction('Women Clothing') },
            { label: 'Kids', icon: '👶', command: () => this.onAction('Kids Clothing') }
          ]
        }
      ]
    },
    { 
      label: 'Services', 
      icon: '🔧',
      items: [
        { label: 'Consulting', icon: '💼', command: () => this.onAction('Consulting') },
        { label: 'Support', icon: '🆘', command: () => this.onAction('Support') },
        { label: 'Training', icon: '🎓', command: () => this.onAction('Training') }
      ]
    }
  ];
  
  disabledMenubarItems = [
    { label: 'Action 1', icon: '⚡', command: () => this.onAction('Action 1') },
    { label: 'Action 2', icon: '🔧', command: () => this.onAction('Action 2'), disabled: true },
    { label: 'Action 3', icon: '🎯', command: () => this.onAction('Action 3') }
  ];
  
  // Interactive demo
  interactiveItems = [
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
        { label: 'Redo', icon: '↷', command: () => this.onAction('Redo') }
      ]
    },
    { label: 'Help', icon: '❓', command: () => this.onAction('Help') }
  ];
  
  // Code visibility states
  showBasicMenubarCode = false;
  showNestedMenubarCode = false;
  showDisabledMenubarCode = false;
  showInteractiveDemoCode = false;
  
  // Action log
  actionLog: string[] = [];
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicMenubar':
        this.showBasicMenubarCode = !this.showBasicMenubarCode;
        break;
      case 'nestedMenubar':
        this.showNestedMenubarCode = !this.showNestedMenubarCode;
        break;
      case 'disabledMenubar':
        this.showDisabledMenubarCode = !this.showDisabledMenubarCode;
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
  
  onMenubarItemClick(item: any) {
    this.onAction(item.label || 'Unknown');
  }
  
  // Helper methods
  getMenubarStatus(): { status: string; color: string; icon: string } {
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
    
    this.interactiveItems.push({
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
