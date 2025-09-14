import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanelMenu as SuiPanelMenu } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-panelmenu',
  imports: [CommonModule, FormsModule, SuiPanelMenu, Tabs],
  templateUrl: './panelmenu.html',
  styleUrl: './panelmenu.scss'
})
export class PanelMenuPage {
  activeTab = 'demo';
  
  // Demo data
  basicPanelMenuItems = [
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
        { label: 'Zoom Out', icon: '🔍-', command: () => this.onAction('Zoom Out') }
      ]
    },
    { label: 'Help', icon: '❓', command: () => this.onAction('Help') }
  ];
  
  multiplePanelMenuItems = [
    { 
      label: 'Navigation', 
      icon: '🧭',
      items: [
        { label: 'Home', icon: '🏠', command: () => this.onAction('Home') },
        { label: 'About', icon: 'ℹ️', command: () => this.onAction('About') },
        { label: 'Contact', icon: '📞', command: () => this.onAction('Contact') }
      ]
    },
    { 
      label: 'Settings', 
      icon: '⚙️',
      items: [
        { label: 'General', icon: '🔧', command: () => this.onAction('General Settings') },
        { label: 'Privacy', icon: '🔒', command: () => this.onAction('Privacy Settings') },
        { label: 'Security', icon: '🛡️', command: () => this.onAction('Security Settings') }
      ]
    },
    { 
      label: 'Tools', 
      icon: '🔨',
      items: [
        { label: 'Calculator', icon: '🧮', command: () => this.onAction('Calculator') },
        { label: 'Calendar', icon: '📅', command: () => this.onAction('Calendar') },
        { label: 'Notes', icon: '📝', command: () => this.onAction('Notes') }
      ]
    }
  ];
  
  disabledPanelMenuItems = [
    { label: 'Action 1', icon: '⚡', command: () => this.onAction('Action 1') },
    { label: 'Action 2', icon: '🔧', command: () => this.onAction('Action 2'), disabled: true },
    { label: 'Action 3', icon: '🎯', command: () => this.onAction('Action 3') }
  ];
  
  // Interactive demo
  interactiveMultiple = false;
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
  showBasicPanelMenuCode = false;
  showMultiplePanelMenuCode = false;
  showDisabledPanelMenuCode = false;
  showInteractiveDemoCode = false;
  
  // Action log
  actionLog: string[] = [];
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicPanelMenu':
        this.showBasicPanelMenuCode = !this.showBasicPanelMenuCode;
        break;
      case 'multiplePanelMenu':
        this.showMultiplePanelMenuCode = !this.showMultiplePanelMenuCode;
        break;
      case 'disabledPanelMenu':
        this.showDisabledPanelMenuCode = !this.showDisabledPanelMenuCode;
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
  
  onPanelMenuItemClick(item: any) {
    this.onAction(item.label || 'Unknown');
  }
  
  // Helper methods
  getPanelMenuStatus(): { status: string; color: string; icon: string } {
    return { status: 'Ready', color: 'text-green-600', icon: '📋' };
  }
  
  // Quick actions
  clearActionLog() {
    this.actionLog = [];
  }
  
  toggleMultiple() {
    this.interactiveMultiple = !this.interactiveMultiple;
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
