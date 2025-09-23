import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { InputOtp as SuiInputOtp } from '../../../../../ui-lib/src/lib/input-otp/input-otp';

@Component({
  selector: 'app-inputotp',
  standalone: true,
  imports: [CommonModule, FormsModule, Tabs, SuiInputOtp],
  templateUrl: './inputotp.html',
  styleUrl: './inputotp.scss'
})
export class InputotpComponent {
  activeTab = 'demo';

  // Basic OTP
  basicOtpValue = '';
  basicOtpLength = 6;

  // Custom Length OTP
  customOtpValue = '';
  customOtpLength = 4;

  // Alphanumeric OTP
  alphanumericOtpValue = '';
  alphanumericOtpLength = 8;

  // Disabled OTP
  disabledOtpValue = '123456';
  disabledOtpLength = 6;

  // SMS Verification OTP
  smsOtpValue = '';
  smsOtpLength = 6;

  // Email Verification OTP
  emailOtpValue = '';
  emailOtpLength = 8;

  // Code visibility flags
  showBasicInputOtpCode = false;
  showInputOtpVariantsCode = false;
  showInputOtpStatesCode = false;

  onTabChange(tab: string) {
    this.activeTab = tab;
  }

  toggleCode(type: string) {
    switch (type) {
      case 'basicInputOtp':
        this.showBasicInputOtpCode = !this.showBasicInputOtpCode;
        break;
      case 'inputOtpVariants':
        this.showInputOtpVariantsCode = !this.showInputOtpVariantsCode;
        break;
      case 'inputOtpStates':
        this.showInputOtpStatesCode = !this.showInputOtpStatesCode;
        break;
    }
  }

  onBasicOtpChange(value: string) {
    this.basicOtpValue = value;
    console.log('Basic OTP changed:', value);
  }

  onBasicOtpComplete(value: string) {
    console.log('Basic OTP completed:', value);
  }

  onCustomOtpChange(value: string) {
    this.customOtpValue = value;
    console.log('Custom OTP changed:', value);
  }

  onCustomOtpComplete(value: string) {
    console.log('Custom OTP completed:', value);
  }

  onAlphanumericOtpChange(value: string) {
    this.alphanumericOtpValue = value;
    console.log('Alphanumeric OTP changed:', value);
  }

  onAlphanumericOtpComplete(value: string) {
    console.log('Alphanumeric OTP completed:', value);
  }

  onDisabledOtpChange(value: string) {
    this.disabledOtpValue = value;
    console.log('Disabled OTP changed:', value);
  }

  onSmsOtpChange(value: string) {
    this.smsOtpValue = value;
    console.log('SMS OTP changed:', value);
  }

  onSmsOtpComplete(value: string) {
    console.log('SMS OTP completed:', value);
    // In a real app, you would verify this OTP with your backend
  }

  onEmailOtpChange(value: string) {
    this.emailOtpValue = value;
    console.log('Email OTP changed:', value);
  }

  onEmailOtpComplete(value: string) {
    console.log('Email OTP completed:', value);
    // In a real app, you would verify this OTP with your backend
  }

  clearBasicOtp() {
    this.basicOtpValue = '';
  }

  clearCustomOtp() {
    this.customOtpValue = '';
  }

  clearAlphanumericOtp() {
    this.alphanumericOtpValue = '';
  }

  clearSmsOtp() {
    this.smsOtpValue = '';
  }

  clearEmailOtp() {
    this.emailOtpValue = '';
  }
}
