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
export class Password {
  activeTab = 'demo';
  
  // Demo data
  basicPassword = '';
  placeholderPassword = '';
  disabledPassword = '';
  minLengthPassword = '';
  noTogglePassword = '';
  interactivePassword = '';
  
  // Code visibility states
  showBasicUsageCode = false;
  showPasswordFeaturesCode = false;
  showPasswordStatesCode = false;
  showPasswordValidationCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  onPasswordChange(value: string, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Code toggle methods
  toggleCode(section: string) {
    switch(section) {
      case 'basicUsage': this.showBasicUsageCode = !this.showBasicUsageCode; break;
      case 'passwordFeatures': this.showPasswordFeaturesCode = !this.showPasswordFeaturesCode; break;
      case 'passwordStates': this.showPasswordStatesCode = !this.showPasswordStatesCode; break;
      case 'passwordValidation': this.showPasswordValidationCode = !this.showPasswordValidationCode; break;
      case 'interactiveDemo': this.showInteractiveDemoCode = !this.showInteractiveDemoCode; break;
    }
  }
}
