import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconField as SuiIconField } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-iconfield',
  imports: [CommonModule, FormsModule, SuiIconField, Tabs],
  templateUrl: './iconfield.html',
  styleUrl: './iconfield.scss'
})
export class IconFieldPage {
  activeTab = 'demo';
  
  // Demo data
  leftIconField = '';
  rightIconField = '';
  smallIconField = '';
  largeIconField = '';
  interactiveIconField = '';
  interactiveIcon = '🔍';
  interactivePosition: 'left' | 'right' = 'left';
  interactiveSize: 'small' | 'normal' | 'large' = 'normal';
  
  // Code visibility states
  showLeftIconFieldCode = false;
  showRightIconFieldCode = false;
  showSmallIconFieldCode = false;
  showLargeIconFieldCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'leftIconField':
        this.showLeftIconFieldCode = !this.showLeftIconFieldCode;
        break;
      case 'rightIconField':
        this.showRightIconFieldCode = !this.showRightIconFieldCode;
        break;
      case 'smallIconField':
        this.showSmallIconFieldCode = !this.showSmallIconFieldCode;
        break;
      case 'largeIconField':
        this.showLargeIconFieldCode = !this.showLargeIconFieldCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onIconFieldChange(value: string, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Helper methods
  getIconFieldStatus(value: string): { status: string; color: string; icon: string } {
    if (!value || value.trim() === '') {
      return { status: 'Empty', color: 'text-gray-600', icon: '○' };
    } else {
      return { status: 'Has Value', color: 'text-green-600', icon: '✓' };
    }
  }
  
  getIconFieldDescription(value: string): string {
    if (!value || value.trim() === '') {
      return 'No value entered';
    } else {
      return `Value: ${value}`;
    }
  }
  
  // Quick actions
  setSampleValue() {
    this.interactiveIconField = 'Sample text';
  }
  
  setSearchValue() {
    this.leftIconField = 'search query';
  }
  
  setEmailValue() {
    this.rightIconField = 'user@example.com';
  }
  
  setSmallValue() {
    this.smallIconField = 'small input';
  }
  
  setLargeValue() {
    this.largeIconField = 'large input text';
  }
  
  clearAll() {
    this.leftIconField = '';
    this.rightIconField = '';
    this.smallIconField = '';
    this.largeIconField = '';
    this.interactiveIconField = '';
  }
}
