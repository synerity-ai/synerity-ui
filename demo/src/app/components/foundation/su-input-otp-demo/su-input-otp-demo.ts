import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputOtp } from '@synerity/ui';

@Component({
  selector: 'app-su-input-otp-demo',
  imports: [CommonModule, FormsModule, InputOtp],
  templateUrl: './su-input-otp-demo.html',
  styleUrl: './su-input-otp-demo.scss'
})
export class SuInputOtpDemo {
  otp4 = '';
  otp6 = '';
  otp8 = '';
  otpNumeric = '';
  otpText = '';
  
  // Interactive
  otpValue = '';
  otpLength = 6;
  isNumericOnly = true;
  isDisabled = false;
  
  handleComplete(value: string): void {
    alert('OTP Complete: ' + value);
  }
  
  getCodeExample(): string {
    const attrs = [`[length]="${this.otpLength}"`];
    if (!this.isNumericOnly) attrs.push('[numericOnly]="false"');
    if (this.isDisabled) attrs.push('[disabled]="true"');
    
    return `<sui-input-otp
  [(ngModel)]="otpValue"
  ${attrs.join('\n  ')}
  (complete)="handleComplete($event)"
></sui-input-otp>`;
  }
}
