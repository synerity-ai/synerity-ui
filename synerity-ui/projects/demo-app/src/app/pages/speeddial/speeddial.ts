import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpeedDial as SuiSpeedDial } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-speeddial',
  imports: [CommonModule, FormsModule, SuiSpeedDial, Tabs],
  templateUrl: './speeddial.html',
  styleUrl: './speeddial.scss'
})
export class SpeedDialPage {
  activeTab = 'demo';
  
  // Demo data
  basicSpeedDialItems = [
    { label: 'Add', icon: '➕', command: () => this.onAction('Add') },
    { label: 'Edit', icon: '✏️', command: () => this.onAction('Edit') },
    { label: 'Delete', icon: '🗑️', command: () => this.onAction('Delete') }
  ];
  
  directionSpeedDialItems = [
    { label: 'Up', icon: '⬆️', command: () => this.onAction('Up') },
    { label: 'Left', icon: '⬅️', command: () => this.onAction('Left') },
    { label: 'Right', icon: '➡️', command: () => this.onAction('Right') },
    { label: 'Down', icon: '⬇️', command: () => this.onAction('Down') }
  ];
  
  customSpeedDialItems = [
    { label: 'Share', icon: '📤', command: () => this.onAction('Share') },
    { label: 'Download', icon: '⬇️', command: () => this.onAction('Download') },
    { label: 'Print', icon: '🖨️', command: () => this.onAction('Print') },
    { label: 'Email', icon: '📧', command: () => this.onAction('Email') }
  ];
  
  disabledSpeedDialItems = [
    { label: 'Action 1', icon: '⚡', command: () => this.onAction('Action 1') },
    { label: 'Action 2', icon: '🔧', command: () => this.onAction('Action 2'), disabled: true },
    { label: 'Action 3', icon: '🎯', command: () => this.onAction('Action 3') }
  ];
  
  // Interactive demo
  interactiveDirection: 'up' | 'down' | 'left' | 'right' = 'up';
  interactiveDisabled = false;
  interactiveButtonIcon = '+';
  interactiveButtonLabel = '';
  interactiveItems = [
    { label: 'Action 1', icon: '⚡', command: () => this.onAction('Action 1') },
    { label: 'Action 2', icon: '🔧', command: () => this.onAction('Action 2') },
    { label: 'Action 3', icon: '🎯', command: () => this.onAction('Action 3') }
  ];
  
  // Code visibility states
  showBasicSpeedDialCode = false;
  showDirectionSpeedDialCode = false;
  showCustomSpeedDialCode = false;
  showDisabledSpeedDialCode = false;
  showInteractiveDemoCode = false;
  
  // Action log
  actionLog: string[] = [];
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicSpeedDial':
        this.showBasicSpeedDialCode = !this.showBasicSpeedDialCode;
        break;
      case 'directionSpeedDial':
        this.showDirectionSpeedDialCode = !this.showDirectionSpeedDialCode;
        break;
      case 'customSpeedDial':
        this.showCustomSpeedDialCode = !this.showCustomSpeedDialCode;
        break;
      case 'disabledSpeedDial':
        this.showDisabledSpeedDialCode = !this.showDisabledSpeedDialCode;
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
  
  onSpeedDialItemClick(item: any) {
    this.onAction(item.label || 'Unknown');
  }
  
  // Helper methods
  getSpeedDialStatus(): { status: string; color: string; icon: string } {
    return { status: 'Ready', color: 'text-green-600', icon: '⚡' };
  }
  
  // Quick actions
  clearActionLog() {
    this.actionLog = [];
  }
  
  setRandomDirection() {
    const directions = ['up', 'down', 'left', 'right'];
    this.interactiveDirection = directions[Math.floor(Math.random() * directions.length)] as any;
  }
  
  toggleInteractiveDisabled() {
    this.interactiveDisabled = !this.interactiveDisabled;
  }
  
  setRandomIcon() {
    const icons = ['+', '⚡', '🔧', '🎯', '📤', '⬇️', '🖨️', '📧'];
    this.interactiveButtonIcon = icons[Math.floor(Math.random() * icons.length)];
  }
}
