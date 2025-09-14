import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Password as SuiPassword } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-password',
  imports: [CommonModule, FormsModule, SuiPassword, Tabs],
  templateUrl: './password.html',
  styleUrl: './password.scss'
})
export class PasswordPage {
  activeTab = 'demo';
  
  // Demo data
  basicPassword = '';
  placeholderPassword = '';
  disabledPassword = 'disabled123';
  minLengthPassword = '';
  noTogglePassword = '';
  interactivePassword = '';
  interactivePlaceholder = 'Enter your password...';
  interactiveMinLength = 8;
  interactiveToggleMask = true;
  interactiveDisabled = false;
  
  // Code visibility states
  showBasicPasswordCode = false;
  showPlaceholderPasswordCode = false;
  showDisabledPasswordCode = false;
  showMinLengthPasswordCode = false;
  showNoTogglePasswordCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicPassword':
        this.showBasicPasswordCode = !this.showBasicPasswordCode;
        break;
      case 'placeholderPassword':
        this.showPlaceholderPasswordCode = !this.showPlaceholderPasswordCode;
        break;
      case 'disabledPassword':
        this.showDisabledPasswordCode = !this.showDisabledPasswordCode;
        break;
      case 'minLengthPassword':
        this.showMinLengthPasswordCode = !this.showMinLengthPasswordCode;
        break;
      case 'noTogglePassword':
        this.showNoTogglePasswordCode = !this.showNoTogglePasswordCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onPasswordChange(value: string, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Password strength checker
  getPasswordStrength(password: string): { strength: string; color: string } {
    if (!password) return { strength: '', color: '' };
    
    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    
    if (score <= 2) return { strength: 'Weak', color: 'text-red-600' };
    if (score <= 3) return { strength: 'Medium', color: 'text-yellow-600' };
    return { strength: 'Strong', color: 'text-green-600' };
  }
}
