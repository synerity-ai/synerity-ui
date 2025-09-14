import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputGroup as SuiInputGroup } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-inputgroup',
  imports: [CommonModule, FormsModule, SuiInputGroup, Tabs],
  templateUrl: './inputgroup.html',
  styleUrl: './inputgroup.scss'
})
export class InputGroupPage {
  activeTab = 'demo';
  
  // Demo data
  basicInputGroup = '';
  smallInputGroup = '';
  largeInputGroup = '';
  disabledInputGroup = '';
  interactiveInputGroup = '';
  interactiveSize: 'small' | 'normal' | 'large' = 'normal';
  interactiveDisabled = false;
  
  // Code visibility states
  showBasicInputGroupCode = false;
  showSmallInputGroupCode = false;
  showLargeInputGroupCode = false;
  showDisabledInputGroupCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicInputGroup':
        this.showBasicInputGroupCode = !this.showBasicInputGroupCode;
        break;
      case 'smallInputGroup':
        this.showSmallInputGroupCode = !this.showSmallInputGroupCode;
        break;
      case 'largeInputGroup':
        this.showLargeInputGroupCode = !this.showLargeInputGroupCode;
        break;
      case 'disabledInputGroup':
        this.showDisabledInputGroupCode = !this.showDisabledInputGroupCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onInputGroupChange(value: string, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Helper methods
  getInputGroupStatus(value: string): { status: string; color: string; icon: string } {
    if (!value || value.trim() === '') {
      return { status: 'Empty', color: 'text-gray-600', icon: '○' };
    } else {
      return { status: 'Has Value', color: 'text-green-600', icon: '✓' };
    }
  }
  
  getInputGroupDescription(value: string): string {
    if (!value || value.trim() === '') {
      return 'No value entered';
    } else {
      return `Value: ${value}`;
    }
  }
  
  // Quick actions
  setSampleValue() {
    this.interactiveInputGroup = 'Sample text';
  }
  
  setBasicValue() {
    this.basicInputGroup = 'Basic input value';
  }
  
  setSmallValue() {
    this.smallInputGroup = 'Small value';
  }
  
  setLargeValue() {
    this.largeInputGroup = 'Large input value with more text';
  }
  
  clearAll() {
    this.basicInputGroup = '';
    this.smallInputGroup = '';
    this.largeInputGroup = '';
    this.disabledInputGroup = '';
    this.interactiveInputGroup = '';
  }
}
