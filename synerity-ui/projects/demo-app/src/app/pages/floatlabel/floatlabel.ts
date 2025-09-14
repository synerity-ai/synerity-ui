import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FloatLabel as SuiFloatLabel } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-floatlabel',
  imports: [CommonModule, FormsModule, SuiFloatLabel, Tabs],
  templateUrl: './floatlabel.html',
  styleUrl: './floatlabel.scss'
})
export class FloatLabelPage {
  activeTab = 'demo';
  
  // Demo data
  basicFloatLabel = '';
  emailFloatLabel = '';
  passwordFloatLabel = '';
  requiredFloatLabel = '';
  disabledFloatLabel = '';
  interactiveFloatLabel = '';
  interactiveDisabled = false;
  interactiveRequired = false;
  interactiveLabel = 'Floating Label';
  
  // Code visibility states
  showBasicFloatLabelCode = false;
  showEmailFloatLabelCode = false;
  showPasswordFloatLabelCode = false;
  showRequiredFloatLabelCode = false;
  showDisabledFloatLabelCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicFloatLabel':
        this.showBasicFloatLabelCode = !this.showBasicFloatLabelCode;
        break;
      case 'emailFloatLabel':
        this.showEmailFloatLabelCode = !this.showEmailFloatLabelCode;
        break;
      case 'passwordFloatLabel':
        this.showPasswordFloatLabelCode = !this.showPasswordFloatLabelCode;
        break;
      case 'requiredFloatLabel':
        this.showRequiredFloatLabelCode = !this.showRequiredFloatLabelCode;
        break;
      case 'disabledFloatLabel':
        this.showDisabledFloatLabelCode = !this.showDisabledFloatLabelCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onFloatLabelChange(value: string, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Helper methods
  getFloatLabelStatus(value: string): { status: string; color: string; icon: string } {
    if (!value || value.trim() === '') {
      return { status: 'Empty', color: 'text-gray-600', icon: '○' };
    } else {
      return { status: 'Has Value', color: 'text-green-600', icon: '✓' };
    }
  }
  
  getFloatLabelDescription(value: string): string {
    if (!value || value.trim() === '') {
      return 'No value entered';
    } else {
      return `Value: ${value}`;
    }
  }
  
  // Quick actions
  setSampleValue() {
    this.interactiveFloatLabel = 'Sample text';
  }
  
  setEmailValue() {
    this.emailFloatLabel = 'user@example.com';
  }
  
  setPasswordValue() {
    this.passwordFloatLabel = 'mypassword123';
  }
  
  clearAll() {
    this.basicFloatLabel = '';
    this.emailFloatLabel = '';
    this.passwordFloatLabel = '';
    this.requiredFloatLabel = '';
    this.disabledFloatLabel = '';
    this.interactiveFloatLabel = '';
  }
}
