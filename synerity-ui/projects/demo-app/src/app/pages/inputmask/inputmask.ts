import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { InputMask } from '../../../../../ui-lib/src/lib/input-mask/input-mask';

@Component({
  selector: 'app-inputmask',
  imports: [CommonModule, FormsModule, Tabs, InputMask],
  templateUrl: './inputmask.html',
  styleUrl: './inputmask.scss'
})
export class Inputmask {
  activeTab = 'demo';
  
  // Basic InputMask
  basicInputMask = '';
  showBasicInputMaskCode = false;
  
  // Phone InputMask
  phoneInputMask = '';
  showPhoneInputMaskCode = false;
  
  // Date InputMask
  dateInputMask = '';
  showDateInputMaskCode = false;
  
  // Credit Card InputMask
  creditCardInputMask = '';
  showCreditCardInputMaskCode = false;
  
  // Currency InputMask
  currencyInputMask = '';
  showCurrencyInputMaskCode = false;
  
  // Interactive Demo
  interactiveValue = '';
  interactiveMask = '999-999-9999';
  interactivePlaceholder = 'Enter phone number';
  interactiveDisabled = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(section: string) {
    switch (section) {
      case 'basicInputMask':
        this.showBasicInputMaskCode = !this.showBasicInputMaskCode;
        break;
      case 'phoneInputMask':
        this.showPhoneInputMaskCode = !this.showPhoneInputMaskCode;
        break;
      case 'dateInputMask':
        this.showDateInputMaskCode = !this.showDateInputMaskCode;
        break;
      case 'creditCardInputMask':
        this.showCreditCardInputMaskCode = !this.showCreditCardInputMaskCode;
        break;
      case 'currencyInputMask':
        this.showCurrencyInputMaskCode = !this.showCurrencyInputMaskCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onInputMaskChange(value: string) {
    console.log('InputMask value changed:', value);
  }
  
  onInteractiveInputMaskChange(value: string) {
    console.log('Interactive InputMask value changed:', value);
  }
  
  formatInputMaskValue(value: string): string {
    return value || 'No input';
  }
  
  // Interactive demo methods
  resetInputMask() {
    this.interactiveValue = '';
    this.interactiveMask = '999-999-9999';
    this.interactivePlaceholder = 'Enter phone number';
    this.interactiveDisabled = false;
  }
  
  getInputMaskStatus(value: string): string {
    return value ? 'Has input' : 'No input';
  }
  
  isValidInputMaskValue(value: string): boolean {
    return Boolean(value && value.length > 0);
  }
  
  // Mask presets
  setPhoneMask() {
    this.interactiveMask = '999-999-9999';
    this.interactivePlaceholder = 'Enter phone number';
  }
  
  setDateMask() {
    this.interactiveMask = '99/99/9999';
    this.interactivePlaceholder = 'Enter date (MM/DD/YYYY)';
  }
  
  setCreditCardMask() {
    this.interactiveMask = '9999-9999-9999-9999';
    this.interactivePlaceholder = 'Enter credit card number';
  }
  
  setCurrencyMask() {
    this.interactiveMask = '999,999.99';
    this.interactivePlaceholder = 'Enter amount';
  }
  
  setCustomMask() {
    this.interactiveMask = 'AAA-999';
    this.interactivePlaceholder = 'Enter custom format (ABC-123)';
  }
}
