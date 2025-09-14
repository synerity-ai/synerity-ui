import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectButton as SuiSelectButton } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-selectbutton',
  imports: [CommonModule, FormsModule, SuiSelectButton, Tabs],
  templateUrl: './selectbutton.html',
  styleUrl: './selectbutton.scss'
})
export class SelectButtonPage {
  activeTab = 'demo';
  
  // Demo data
  basicSelectButton: unknown = null;
  sizeSelectButton: unknown = null;
  disabledSelectButton: unknown = null;
  interactiveSelectButton: unknown = null;
  interactiveDisabled = false;
  
  // Options data
  basicOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];
  
  sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];
  
  disabledOptions = [
    { label: 'Enabled', value: 'enabled' },
    { label: 'Disabled', value: 'disabled', disabled: true },
    { label: 'Another', value: 'another' }
  ];
  
  // Code visibility states
  showBasicSelectButtonCode = false;
  showSizeSelectButtonCode = false;
  showDisabledSelectButtonCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicSelectButton':
        this.showBasicSelectButtonCode = !this.showBasicSelectButtonCode;
        break;
      case 'sizeSelectButton':
        this.showSizeSelectButtonCode = !this.showSizeSelectButtonCode;
        break;
      case 'disabledSelectButton':
        this.showDisabledSelectButtonCode = !this.showDisabledSelectButtonCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onSelectButtonChange(value: unknown, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Helper methods
  getSelectButtonStatus(value: unknown): { status: string; color: string; icon: string } {
    if (value === null || value === undefined) {
      return { status: 'No Selection', color: 'text-gray-600', icon: '○' };
    } else {
      return { status: 'Selected', color: 'text-green-600', icon: '✓' };
    }
  }
  
  getSelectButtonDescription(value: unknown): string {
    if (value === null || value === undefined) {
      return 'No option selected';
    } else {
      return `Selected: ${value}`;
    }
  }
  
  // Quick actions
  setRandomBasicOption() {
    const randomIndex = Math.floor(Math.random() * this.basicOptions.length);
    this.basicSelectButton = this.basicOptions[randomIndex].value;
  }
  
  setRandomSizeOption() {
    const randomIndex = Math.floor(Math.random() * this.sizeOptions.length);
    this.sizeSelectButton = this.sizeOptions[randomIndex].value;
  }
  
  setRandomInteractiveOption() {
    const randomIndex = Math.floor(Math.random() * this.basicOptions.length);
    this.interactiveSelectButton = this.basicOptions[randomIndex].value;
  }
  
  clearAll() {
    this.basicSelectButton = null;
    this.sizeSelectButton = null;
    this.disabledSelectButton = null;
    this.interactiveSelectButton = null;
  }
}
