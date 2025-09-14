import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputMask as SuiInputMask } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-inputmask',
  imports: [CommonModule, FormsModule, SuiInputMask, Tabs],
  templateUrl: './inputmask.html',
  styleUrl: './inputmask.scss'
})
export class InputMaskPage {
  activeTab = 'demo';
  
  // Demo data
  phoneInputMask = '';
  dateInputMask = '';
  creditCardInputMask = '';
  ssnInputMask = '';
  zipCodeInputMask = '';
  customInputMask = '';
  disabledInputMask = '';
  interactiveInputMask = '';
  interactiveMask = '(999) 999-9999';
  interactivePlaceholder = '_';
  interactiveDisabled = false;
  
  // Code visibility states
  showPhoneInputMaskCode = false;
  showDateInputMaskCode = false;
  showCreditCardInputMaskCode = false;
  showSsnInputMaskCode = false;
  showZipCodeInputMaskCode = false;
  showCustomInputMaskCode = false;
  showDisabledInputMaskCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'phoneInputMask':
        this.showPhoneInputMaskCode = !this.showPhoneInputMaskCode;
        break;
      case 'dateInputMask':
        this.showDateInputMaskCode = !this.showDateInputMaskCode;
        break;
      case 'creditCardInputMask':
        this.showCreditCardInputMaskCode = !this.showCreditCardInputMaskCode;
        break;
      case 'ssnInputMask':
        this.showSsnInputMaskCode = !this.showSsnInputMaskCode;
        break;
      case 'zipCodeInputMaskCode':
        this.showZipCodeInputMaskCode = !this.showZipCodeInputMaskCode;
        break;
      case 'customInputMask':
        this.showCustomInputMaskCode = !this.showCustomInputMaskCode;
        break;
      case 'disabledInputMask':
        this.showDisabledInputMaskCode = !this.showDisabledInputMaskCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onInputMaskChange(value: string, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Helper methods
  getInputMaskStatus(value: string): { status: string; color: string; icon: string } {
    if (!value || value.trim() === '') {
      return { status: 'Empty', color: 'text-gray-600', icon: '○' };
    } else {
      return { status: 'Has Value', color: 'text-green-600', icon: '✓' };
    }
  }
  
  getInputMaskDescription(value: string): string {
    if (!value || value.trim() === '') {
      return 'No value entered';
    } else {
      return `Value: ${value}`;
    }
  }
  
  // Quick actions
  setPhoneValue() {
    this.phoneInputMask = '5551234567';
  }
  
  setDateValue() {
    this.dateInputMask = '12252024';
  }
  
  setCreditCardValue() {
    this.creditCardInputMask = '4111111111111111';
  }
  
  setSsnValue() {
    this.ssnInputMask = '123456789';
  }
  
  setZipCodeValue() {
    this.zipCodeInputMask = '12345';
  }
  
  setCustomValue() {
    this.customInputMask = 'ABC123';
  }
  
  clearAll() {
    this.phoneInputMask = '';
    this.dateInputMask = '';
    this.creditCardInputMask = '';
    this.ssnInputMask = '';
    this.zipCodeInputMask = '';
    this.customInputMask = '';
    this.disabledInputMask = '';
    this.interactiveInputMask = '';
  }
}
