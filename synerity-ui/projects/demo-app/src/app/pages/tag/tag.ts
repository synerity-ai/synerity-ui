import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tag } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-tag-page',
  standalone: true,
  imports: [CommonModule, FormsModule, Tag, Tabs],
  templateUrl: './tag.html',
  styleUrl: './tag.scss'
})
export class TagPage {
  activeTab = 'demo';

  // Basic Tag
  basicValue = 'Basic Tag';
  basicSeverity: 'info' | 'success' | 'warning' | 'danger' | 'contrast' = 'info';
  basicIcon = '';
  basicRemovable = false;
  basicDisabled = false;

  // Custom Tag
  customValue = 'Custom Tag';
  customSeverity: 'info' | 'success' | 'warning' | 'danger' | 'contrast' = 'success';
  customIcon = '✓';
  customRemovable = true;
  customDisabled = false;
  customStyle = { fontSize: '14px', fontWeight: 'bold' };
  customStyleClass = 'custom-tag';

  // Multiple Tags
  tags = [
    { value: 'New', severity: 'success' as 'info' | 'success' | 'warning' | 'danger' | 'contrast', icon: '🆕', removable: false, disabled: false },
    { value: 'Updated', severity: 'info' as 'info' | 'success' | 'warning' | 'danger' | 'contrast', icon: '🔄', removable: false, disabled: false },
    { value: 'Warning', severity: 'warning' as 'info' | 'success' | 'warning' | 'danger' | 'contrast', icon: '⚠️', removable: true, disabled: false },
    { value: 'Error', severity: 'danger' as 'info' | 'success' | 'warning' | 'danger' | 'contrast', icon: '❌', removable: true, disabled: false }
  ];

  // Interactive Demo
  interactiveValue = 'Interactive Tag';
  interactiveSeverity: 'info' | 'success' | 'warning' | 'danger' | 'contrast' = 'warning';
  interactiveIcon = '🎯';
  interactiveRemovable = true;
  interactiveDisabled = false;
  interactiveStyle = { fontSize: '16px', padding: '8px 12px' };
  interactiveStyleClass = 'interactive-tag';

  // Code visibility
  showBasicTagCode = false;
  showCustomTagCode = false;
  showMultipleTagsCode = false;
  showInteractiveDemoCode = false;

  // Action log
  actionLog: string[] = [];

  onTabChange(tabId: string) {
    this.activeTab = tabId;
  }

  toggleCode(example: string) {
    switch (example) {
      case 'basicTag':
        this.showBasicTagCode = !this.showBasicTagCode;
        break;
      case 'customTag':
        this.showCustomTagCode = !this.showCustomTagCode;
        break;
      case 'multipleTags':
        this.showMultipleTagsCode = !this.showMultipleTagsCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }

  // Event handlers
  onBasicTagRemove() {
    this.addToActionLog('Basic tag remove clicked');
  }

  onCustomTagRemove() {
    this.addToActionLog('Custom tag remove clicked');
  }

  onTagRemove(tag: any) {
    this.addToActionLog(`${tag.value} tag remove clicked`);
  }

  onInteractiveTagRemove() {
    this.addToActionLog('Interactive tag remove clicked');
  }

  // Interactive Demo methods
  setRandomSeverity() {
    const severities: ('info' | 'success' | 'warning' | 'danger' | 'contrast')[] = ['info', 'success', 'warning', 'danger', 'contrast'];
    this.interactiveSeverity = severities[Math.floor(Math.random() * severities.length)];
    this.addToActionLog(`Severity set to ${this.interactiveSeverity}`);
  }

  setRandomIcon() {
    const icons = ['🎯', '⭐', '🔥', '💎', '🚀', '🎨', '💡', '🎪'];
    this.interactiveIcon = icons[Math.floor(Math.random() * icons.length)];
    this.addToActionLog(`Icon set to ${this.interactiveIcon}`);
  }

  toggleRemovable() {
    this.interactiveRemovable = !this.interactiveRemovable;
    this.addToActionLog(`Removable ${this.interactiveRemovable ? 'enabled' : 'disabled'}`);
  }

  toggleDisabled() {
    this.interactiveDisabled = !this.interactiveDisabled;
    this.addToActionLog(`Disabled ${this.interactiveDisabled ? 'enabled' : 'disabled'}`);
  }

  setRandomStyle() {
    const styles = [
      { fontSize: '12px', padding: '4px 8px' },
      { fontSize: '14px', padding: '6px 10px' },
      { fontSize: '16px', padding: '8px 12px' },
      { fontSize: '18px', padding: '10px 14px' }
    ];
    this.interactiveStyle = styles[Math.floor(Math.random() * styles.length)];
    this.addToActionLog(`Style updated`);
  }

  toggleAllRemovable() {
    const allRemovable = this.tags.every(tag => tag.removable);
    this.tags.forEach(tag => {
      tag.removable = !allRemovable;
    });
    this.addToActionLog(`All tags ${allRemovable ? 'made non-removable' : 'made removable'}`);
  }

  addToActionLog(action: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.actionLog.unshift(`[${timestamp}] ${action}`);
    if (this.actionLog.length > 10) {
      this.actionLog.pop();
    }
  }

  clearActionLog() {
    this.actionLog = [];
  }
}