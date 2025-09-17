import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Password as SuiPassword } from '../../../../../ui-lib/src/lib/password/password';

@Component({
  selector: 'app-password',
  imports: [CommonModule, FormsModule, Tabs, SuiPassword],
  templateUrl: './password.html',
  styleUrl: './password.scss'
})
export class Password {
  activeTab = 'demo';
  
  // Demo data
  basicPassword = '';
  confirmPassword = '';
  passwordStrength = '';
  passwordRequirements = {
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  };
  
  // Advanced demo data
  loginPassword = '';
  resetPassword = '';
  newPassword = '';
  
  // Code visibility states
  showBasicPasswordCode = false;
  showPasswordConfirmationCode = false;
  showPasswordStrengthCode = false;
  showPasswordToggleCode = false;
  showPasswordRequirementsCode = false;
  showAdvancedPasswordCode = false;
  
  // Event handlers
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicPassword':
        this.showBasicPasswordCode = !this.showBasicPasswordCode;
        break;
      case 'passwordConfirmation':
        this.showPasswordConfirmationCode = !this.showPasswordConfirmationCode;
        break;
      case 'passwordStrength':
        this.showPasswordStrengthCode = !this.showPasswordStrengthCode;
        break;
      case 'passwordToggle':
        this.showPasswordToggleCode = !this.showPasswordToggleCode;
        break;
      case 'passwordRequirements':
        this.showPasswordRequirementsCode = !this.showPasswordRequirementsCode;
        break;
      case 'advancedPassword':
        this.showAdvancedPasswordCode = !this.showAdvancedPasswordCode;
        break;
    }
  }
  
  onPasswordChange(password: string) {
    this.basicPassword = password;
    this.checkPasswordStrength(password);
    this.checkPasswordRequirements(password);
  }
  
  onConfirmPasswordChange(password: string) {
    this.confirmPassword = password;
  }
  
  onLoginPasswordChange(password: string) {
    this.loginPassword = password;
  }
  
  onResetPasswordChange(password: string) {
    this.resetPassword = password;
  }
  
  onNewPasswordChange(password: string) {
    this.newPassword = password;
    this.checkPasswordStrength(password);
    this.checkPasswordRequirements(password);
  }
  
  // Utility methods
  checkPasswordStrength(password: string) {
    if (password.length === 0) {
      this.passwordStrength = '';
      return;
    }
    
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    
    if (score <= 2) {
      this.passwordStrength = 'weak';
    } else if (score <= 3) {
      this.passwordStrength = 'medium';
    } else {
      this.passwordStrength = 'strong';
    }
  }
  
  checkPasswordRequirements(password: string) {
    this.passwordRequirements = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^A-Za-z0-9]/.test(password)
    };
  }
  
  getPasswordStrengthColor(): string {
    switch (this.passwordStrength) {
      case 'weak': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'strong': return 'text-green-600';
      default: return 'text-gray-600';
    }
  }
  
  getPasswordStrengthBgColor(): string {
    switch (this.passwordStrength) {
      case 'weak': return 'bg-red-100';
      case 'medium': return 'bg-yellow-100';
      case 'strong': return 'bg-green-100';
      default: return 'bg-gray-100';
    }
  }
  
  getPasswordStrengthBorderColor(): string {
    switch (this.passwordStrength) {
      case 'weak': return 'border-red-300';
      case 'medium': return 'border-yellow-300';
      case 'strong': return 'border-green-300';
      default: return 'border-gray-300';
    }
  }
  
  passwordsMatch(): boolean {
    return this.basicPassword === this.confirmPassword && this.basicPassword.length > 0;
  }
  
  passwordsDoNotMatch(): boolean {
    return this.basicPassword !== this.confirmPassword && this.confirmPassword.length > 0;
  }
}
