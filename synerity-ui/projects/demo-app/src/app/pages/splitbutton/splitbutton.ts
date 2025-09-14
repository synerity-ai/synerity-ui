import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SplitButton as SuiSplitButton } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-splitbutton',
  imports: [CommonModule, FormsModule, SuiSplitButton, Tabs],
  templateUrl: './splitbutton.html',
  styleUrl: './splitbutton.scss'
})
export class SplitButtonPage {
  activeTab = 'demo';
  
  // Demo data
  basicSplitButtonItems = [
    { label: 'Save', icon: '💾', command: () => this.onAction('Save') },
    { label: 'Save As', icon: '📁', command: () => this.onAction('Save As') },
    { label: 'Export', icon: '📤', command: () => this.onAction('Export') }
  ];
  
  styleSplitButtonItems = [
    { label: 'Primary Action', icon: '⭐', command: () => this.onAction('Primary Action') },
    { label: 'Secondary Action', icon: '🔧', command: () => this.onAction('Secondary Action') },
    { label: 'Danger Action', icon: '⚠️', command: () => this.onAction('Danger Action') }
  ];
  
  iconSplitButtonItems = [
    { label: 'Download', icon: '⬇️', command: () => this.onAction('Download') },
    { label: 'Upload', icon: '⬆️', command: () => this.onAction('Upload') },
    { label: 'Share', icon: '🔗', command: () => this.onAction('Share') }
  ];
  
  disabledSplitButtonItems = [
    { label: 'Action 1', icon: '⚡', command: () => this.onAction('Action 1') },
    { label: 'Action 2', icon: '🔧', command: () => this.onAction('Action 2'), disabled: true },
    { label: 'Action 3', icon: '🎯', command: () => this.onAction('Action 3') }
  ];
  
  // Interactive demo
  interactiveLabel = 'Save';
  interactiveIcon = '💾';
  interactiveButtonStyle = 'primary';
  interactiveDisabled = false;
  interactiveItems = [
    { label: 'Save', icon: '💾', command: () => this.onAction('Save') },
    { label: 'Save As', icon: '📁', command: () => this.onAction('Save As') },
    { label: 'Export', icon: '📤', command: () => this.onAction('Export') }
  ];
  
  // Code visibility states
  showBasicSplitButtonCode = false;
  showStyleSplitButtonCode = false;
  showIconSplitButtonCode = false;
  showDisabledSplitButtonCode = false;
  showInteractiveDemoCode = false;
  
  // Action log
  actionLog: string[] = [];
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicSplitButton':
        this.showBasicSplitButtonCode = !this.showBasicSplitButtonCode;
        break;
      case 'styleSplitButton':
        this.showStyleSplitButtonCode = !this.showStyleSplitButtonCode;
        break;
      case 'iconSplitButton':
        this.showIconSplitButtonCode = !this.showIconSplitButtonCode;
        break;
      case 'disabledSplitButton':
        this.showDisabledSplitButtonCode = !this.showDisabledSplitButtonCode;
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
  
  onSplitButtonClick() {
    this.onAction('Main Button Clicked');
  }
  
  onSplitButtonItemClick(item: any) {
    this.onAction(item.label || 'Unknown');
  }
  
  // Helper methods
  getSplitButtonStatus(): { status: string; color: string; icon: string } {
    return { status: 'Ready', color: 'text-green-600', icon: '🔘' };
  }
  
  // Quick actions
  clearActionLog() {
    this.actionLog = [];
  }
  
  setRandomStyle() {
    const styles = ['primary', 'secondary', 'success', 'info', 'warning', 'help', 'danger'];
    this.interactiveButtonStyle = styles[Math.floor(Math.random() * styles.length)] as any;
  }
  
  toggleInteractiveDisabled() {
    this.interactiveDisabled = !this.interactiveDisabled;
  }
  
  setRandomIcon() {
    const icons = ['💾', '📁', '📤', '⬇️', '⬆️', '🔗', '⭐', '🔧', '🎯'];
    this.interactiveIcon = icons[Math.floor(Math.random() * icons.length)];
  }
}
