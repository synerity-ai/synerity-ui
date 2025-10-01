import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Password } from '@synerity/ui';

@Component({
  selector: 'app-su-password-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Password],
  templateUrl: './su-password-demo.html',
  styleUrl: './su-password-demo.scss'
})
export class SuPasswordDemo {
  // Basic password
  basicPassword = '';

  // Password with toggle
  togglePassword = '';

  // Password without toggle (always hidden)
  hiddenPassword = '';

  // Disabled password
  disabledPassword = 'cannot-edit-this';

  // Password with min length
  minLengthPassword = '';

  // Form example
  formData = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  // Interactive demo
  currentPassword = '';
  currentToggleMask = true;
  currentDisabled = false;
  currentMinLength: number | null = null;

  // Min length options - PROPERTY not method
  minLengthOptions = [
    { value: null, label: 'No minimum' },
    { value: 6, label: '6 characters' },
    { value: 8, label: '8 characters' },
    { value: 12, label: '12 characters' }
  ];

  // Event handlers
  onPasswordChange(value: string): void {
    console.log('Password changed:', value ? '***' : 'empty');
  }

  // Form validation
  isFormValid(): boolean {
    return this.formData.currentPassword.length > 0 &&
           this.formData.newPassword.length >= 8 &&
           this.formData.newPassword === this.formData.confirmPassword;
  }

  getPasswordStrength(password: string): string {
    if (!password) return 'None';
    if (password.length < 6) return 'Weak';
    if (password.length < 10) return 'Medium';
    if (password.length >= 12 && /[A-Z]/.test(password) && /[0-9]/.test(password)) return 'Strong';
    return 'Medium';
  }

  getStrengthColor(password: string): string {
    const strength = this.getPasswordStrength(password);
    switch (strength) {
      case 'Weak': return 'text-red-600';
      case 'Medium': return 'text-yellow-600';
      case 'Strong': return 'text-green-600';
      default: return 'text-gray-500';
    }
  }

  // Reset values
  resetValues(): void {
    this.basicPassword = '';
    this.togglePassword = '';
    this.hiddenPassword = '';
    this.minLengthPassword = '';
    this.currentPassword = '';
    this.formData = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
  }

  submitPasswordChange(): void {
    if (this.isFormValid()) {
      alert('Password change submitted successfully!');
      this.formData = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      };
    }
  }
}
