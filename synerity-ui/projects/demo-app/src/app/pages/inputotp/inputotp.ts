import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputOtp as SuiInputOtp } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-inputotp',
  imports: [CommonModule, FormsModule, SuiInputOtp, Tabs],
  templateUrl: './inputotp.html',
  styleUrl: './inputotp.scss'
})
export class InputOtpPage {
  activeTab = 'demo';
  
  // Demo data
  basicInputOtp = '';
  numericInputOtp = '';
  textInputOtp = '';
  disabledInputOtp = '';
  interactiveInputOtp = '';
  interactiveLength = 6;
  interactiveNumericOnly = true;
  interactiveInputType: 'text' | 'tel' = 'tel';
  interactiveDisabled = false;
  
  // Code visibility states
  showBasicInputOtpCode = false;
  showNumericInputOtpCode = false;
  showTextInputOtpCode = false;
  showDisabledInputOtpCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicInputOtp':
        this.showBasicInputOtpCode = !this.showBasicInputOtpCode;
        break;
      case 'numericInputOtp':
        this.showNumericInputOtpCode = !this.showNumericInputOtpCode;
        break;
      case 'textInputOtp':
        this.showTextInputOtpCode = !this.showTextInputOtpCode;
        break;
      case 'disabledInputOtp':
        this.showDisabledInputOtpCode = !this.showDisabledInputOtpCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onInputOtpChange(value: string, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  onInputOtpComplete(value: string, field: string) {
    console.log(`${field} completed with:`, value);
  }
  
  // Helper methods
  getInputOtpStatus(value: string): { status: string; color: string; icon: string } {
    if (!value || value.length === 0) {
      return { status: 'Empty', color: 'text-gray-600', icon: '○' };
    } else if (value.length < 6) {
      return { status: 'Incomplete', color: 'text-yellow-600', icon: '◐' };
    } else {
      return { status: 'Complete', color: 'text-green-600', icon: '✓' };
    }
  }
  
  getInputOtpDescription(value: string): string {
    if (!value || value.length === 0) {
      return 'No OTP entered';
    } else if (value.length < 6) {
      return `Partial OTP: ${value} (${value.length}/6)`;
    } else {
      return `Complete OTP: ${value}`;
    }
  }
  
  // Quick actions
  setRandomOtp() {
    const length = this.interactiveLength;
    const chars = this.interactiveNumericOnly ? '0123456789' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    this.interactiveInputOtp = result;
  }
  
  setSampleOtp() {
    this.basicInputOtp = '123456';
  }
  
  setNumericOtp() {
    this.numericInputOtp = '987654';
  }
  
  setTextOtp() {
    this.textInputOtp = 'ABC123';
  }
  
  clearAll() {
    this.basicInputOtp = '';
    this.numericInputOtp = '';
    this.textInputOtp = '';
    this.disabledInputOtp = '';
    this.interactiveInputOtp = '';
  }
}
