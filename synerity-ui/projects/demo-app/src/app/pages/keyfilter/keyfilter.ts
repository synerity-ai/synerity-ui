import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KeyFilter as SuiKeyFilter } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-keyfilter',
  imports: [CommonModule, FormsModule, SuiKeyFilter, Tabs],
  templateUrl: './keyfilter.html',
  styleUrl: './keyfilter.scss'
})
export class KeyFilterPage {
  activeTab = 'demo';
  
  // Demo data
  integerKeyFilter = '';
  numericKeyFilter = '';
  alphaKeyFilter = '';
  alphanumericKeyFilter = '';
  customKeyFilter = '';
  disabledKeyFilter = '';
  interactiveKeyFilter = '';
  interactivePattern: 'int' | 'num' | 'alpha' | 'alphanum' | string = 'alphanum';
  interactiveDisabled = false;
  
  // Code visibility states
  showIntegerKeyFilterCode = false;
  showNumericKeyFilterCode = false;
  showAlphaKeyFilterCode = false;
  showAlphanumericKeyFilterCode = false;
  showCustomKeyFilterCode = false;
  showDisabledKeyFilterCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'integerKeyFilter':
        this.showIntegerKeyFilterCode = !this.showIntegerKeyFilterCode;
        break;
      case 'numericKeyFilter':
        this.showNumericKeyFilterCode = !this.showNumericKeyFilterCode;
        break;
      case 'alphaKeyFilter':
        this.showAlphaKeyFilterCode = !this.showAlphaKeyFilterCode;
        break;
      case 'alphanumericKeyFilter':
        this.showAlphanumericKeyFilterCode = !this.showAlphanumericKeyFilterCode;
        break;
      case 'customKeyFilter':
        this.showCustomKeyFilterCode = !this.showCustomKeyFilterCode;
        break;
      case 'disabledKeyFilter':
        this.showDisabledKeyFilterCode = !this.showDisabledKeyFilterCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onKeyFilterChange(value: string, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Helper methods
  getKeyFilterStatus(value: string): { status: string; color: string; icon: string } {
    if (!value || value.trim() === '') {
      return { status: 'Empty', color: 'text-gray-600', icon: '○' };
    } else {
      return { status: 'Has Value', color: 'text-green-600', icon: '✓' };
    }
  }
  
  getKeyFilterDescription(value: string): string {
    if (!value || value.trim() === '') {
      return 'No value entered';
    } else {
      return `Value: ${value}`;
    }
  }
  
  // Quick actions
  setSampleValue() {
    this.interactiveKeyFilter = 'Sample123';
  }
  
  setIntegerValue() {
    this.integerKeyFilter = '12345';
  }
  
  setNumericValue() {
    this.numericKeyFilter = '123.45';
  }
  
  setAlphaValue() {
    this.alphaKeyFilter = 'HelloWorld';
  }
  
  setAlphanumericValue() {
    this.alphanumericKeyFilter = 'Hello123';
  }
  
  setCustomValue() {
    this.customKeyFilter = 'ABC123';
  }
  
  clearAll() {
    this.integerKeyFilter = '';
    this.numericKeyFilter = '';
    this.alphaKeyFilter = '';
    this.alphanumericKeyFilter = '';
    this.customKeyFilter = '';
    this.disabledKeyFilter = '';
    this.interactiveKeyFilter = '';
  }
}
