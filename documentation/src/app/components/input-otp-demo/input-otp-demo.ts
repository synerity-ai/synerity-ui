import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputOtp } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-input-otp-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, InputOtp],
  templateUrl: './input-otp-demo.html',
  styleUrl: './input-otp-demo.scss'
})
export class InputOtpDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  otpValue = '';
  shortOtpValue = '';
  longOtpValue = '';
  alphaOtpValue = '';

  onOtpComplete(value: string): void {
    console.log('OTP Complete:', value);
  }
}
