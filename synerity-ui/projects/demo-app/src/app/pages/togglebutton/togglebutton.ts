import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToggleButton as SuiToggleButton } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-togglebutton',
  imports: [CommonModule, FormsModule, SuiToggleButton, Tabs],
  templateUrl: './togglebutton.html',
  styleUrl: './togglebutton.scss'
})
export class ToggleButtonPage {
  activeTab = 'demo';
  
  // Demo data
  basicToggleButton: unknown | unknown[] = null;
  multipleToggleButton: unknown | unknown[] = [];
  iconToggleButton: unknown | unknown[] = null;
  disabledToggleButton: unknown | unknown[] = null;
  interactiveToggleButton: unknown | unknown[] = null;
  interactiveMultiple = false;
  interactiveDisabled = false;
  
  // Options data
  basicOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];
  
  iconOptions = [
    { label: 'Home', value: 'home', icon: '🏠' },
    { label: 'Settings', value: 'settings', icon: '⚙️' },
    { label: 'Profile', value: 'profile', icon: '👤' }
  ];
  
  multipleOptions = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
    { label: 'Yellow', value: 'yellow' }
  ];
  
  disabledOptions = [
    { label: 'Enabled', value: 'enabled' },
    { label: 'Disabled', value: 'disabled' },
    { label: 'Another', value: 'another' }
  ];
  
  // Code visibility states
  showBasicToggleButtonCode = false;
  showMultipleToggleButtonCode = false;
  showIconToggleButtonCode = false;
  showDisabledToggleButtonCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicToggleButton':
        this.showBasicToggleButtonCode = !this.showBasicToggleButtonCode;
        break;
      case 'multipleToggleButton':
        this.showMultipleToggleButtonCode = !this.showMultipleToggleButtonCode;
        break;
      case 'iconToggleButton':
        this.showIconToggleButtonCode = !this.showIconToggleButtonCode;
        break;
      case 'disabledToggleButton':
        this.showDisabledToggleButtonCode = !this.showDisabledToggleButtonCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onToggleButtonChange(value: unknown | unknown[], field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Helper methods
  getToggleButtonStatus(value: unknown | unknown[]): { status: string; color: string; icon: string } {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return { status: 'No Selection', color: 'text-gray-600', icon: '○' };
      } else {
        return { status: `${value.length} Selected`, color: 'text-green-600', icon: '✓' };
      }
    } else {
      if (value === null || value === undefined) {
        return { status: 'No Selection', color: 'text-gray-600', icon: '○' };
      } else {
        return { status: 'Selected', color: 'text-green-600', icon: '✓' };
      }
    }
  }
  
  getToggleButtonDescription(value: unknown | unknown[]): string {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return 'No options selected';
      } else {
        return `Selected: ${value.join(', ')}`;
      }
    } else {
      if (value === null || value === undefined) {
        return 'No option selected';
      } else {
        return `Selected: ${value}`;
      }
    }
  }
  
  // Quick actions
  setRandomBasicOption() {
    const randomIndex = Math.floor(Math.random() * this.basicOptions.length);
    this.basicToggleButton = this.basicOptions[randomIndex].value;
  }
  
  setRandomIconOption() {
    const randomIndex = Math.floor(Math.random() * this.iconOptions.length);
    this.iconToggleButton = this.iconOptions[randomIndex].value;
  }
  
  setRandomMultipleOptions() {
    const numSelections = Math.floor(Math.random() * 3) + 1;
    const shuffled = [...this.multipleOptions].sort(() => 0.5 - Math.random());
    this.multipleToggleButton = shuffled.slice(0, numSelections).map(opt => opt.value);
  }
  
  setRandomInteractiveOption() {
    if (this.interactiveMultiple) {
      const numSelections = Math.floor(Math.random() * 3) + 1;
      const shuffled = [...this.basicOptions].sort(() => 0.5 - Math.random());
      this.interactiveToggleButton = shuffled.slice(0, numSelections).map(opt => opt.value);
    } else {
      const randomIndex = Math.floor(Math.random() * this.basicOptions.length);
      this.interactiveToggleButton = this.basicOptions[randomIndex].value;
    }
  }
  
  clearAll() {
    this.basicToggleButton = null;
    this.multipleToggleButton = [];
    this.iconToggleButton = null;
    this.disabledToggleButton = null;
    this.interactiveToggleButton = this.interactiveMultiple ? [] : null;
  }
}
