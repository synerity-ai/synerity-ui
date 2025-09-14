import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Dock as SuiDock } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-dock',
  imports: [CommonModule, FormsModule, SuiDock, Tabs],
  templateUrl: './dock.html',
  styleUrl: './dock.scss'
})
export class DockPage {
  activeTab = 'demo';
  
  // Demo data
  basicDockItems = [
    { label: 'Home', icon: '🏠', command: () => this.onAction('Home'), tooltip: 'Go to Home' },
    { label: 'Search', icon: '🔍', command: () => this.onAction('Search'), tooltip: 'Search items' },
    { label: 'Settings', icon: '⚙️', command: () => this.onAction('Settings'), tooltip: 'Open Settings' },
    { label: 'Profile', icon: '👤', command: () => this.onAction('Profile'), tooltip: 'View Profile' }
  ];
  
  positionDockItems = [
    { label: 'File', icon: '📁', command: () => this.onAction('File'), tooltip: 'File Manager' },
    { label: 'Edit', icon: '✏️', command: () => this.onAction('Edit'), tooltip: 'Edit Tools' },
    { label: 'View', icon: '👁️', command: () => this.onAction('View'), tooltip: 'View Options' },
    { label: 'Tools', icon: '🔧', command: () => this.onAction('Tools'), tooltip: 'Tools Menu' },
    { label: 'Help', icon: '❓', command: () => this.onAction('Help'), tooltip: 'Help & Support' }
  ];
  
  disabledDockItems = [
    { label: 'Action 1', icon: '⚡', command: () => this.onAction('Action 1'), tooltip: 'First Action' },
    { label: 'Action 2', icon: '🔧', command: () => this.onAction('Action 2'), disabled: true, tooltip: 'Disabled Action' },
    { label: 'Action 3', icon: '🎯', command: () => this.onAction('Action 3'), tooltip: 'Third Action' }
  ];
  
  // Interactive demo
  interactivePosition = 'bottom';
  interactiveItems = [
    { label: 'Home', icon: '🏠', command: () => this.onAction('Home'), tooltip: 'Go to Home' },
    { label: 'Search', icon: '🔍', command: () => this.onAction('Search'), tooltip: 'Search items' },
    { label: 'Settings', icon: '⚙️', command: () => this.onAction('Settings'), tooltip: 'Open Settings' },
    { label: 'Profile', icon: '👤', command: () => this.onAction('Profile'), tooltip: 'View Profile' }
  ];
  
  // Code visibility states
  showBasicDockCode = false;
  showPositionDockCode = false;
  showDisabledDockCode = false;
  showInteractiveDemoCode = false;
  
  // Action log
  actionLog: string[] = [];
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicDock':
        this.showBasicDockCode = !this.showBasicDockCode;
        break;
      case 'positionDock':
        this.showPositionDockCode = !this.showPositionDockCode;
        break;
      case 'disabledDock':
        this.showDisabledDockCode = !this.showDisabledDockCode;
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
  
  onDockItemClick(item: any) {
    this.onAction(item.label || 'Unknown');
  }
  
  // Helper methods
  getDockStatus(): { status: string; color: string; icon: string } {
    return { status: 'Ready', color: 'text-green-600', icon: '🚀' };
  }
  
  // Quick actions
  clearActionLog() {
    this.actionLog = [];
  }
  
  setRandomPosition() {
    const positions = ['bottom', 'top', 'left', 'right'];
    this.interactivePosition = positions[Math.floor(Math.random() * positions.length)] as any;
  }
  
  addRandomItem() {
    const items = ['New Item', 'Random Action', 'Test Item', 'Sample Action'];
    const icons = ['⭐', '🔧', '🎯', '⚡', '📋', '📄', '✂️', '🗑️'];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    
    this.interactiveItems.push({
      label: randomItem,
      icon: randomIcon,
      command: () => this.onAction(randomItem),
      tooltip: `${randomItem} Tooltip`
    });
  }
  
  removeLastItem() {
    if (this.interactiveItems.length > 1) {
      this.interactiveItems.pop();
    }
  }
}
