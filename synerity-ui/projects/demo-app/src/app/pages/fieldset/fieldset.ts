import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Fieldset } from 'ui-lib';

@Component({
  selector: 'app-fieldset',
  imports: [CommonModule, FormsModule, Tabs, Fieldset],
  templateUrl: './fieldset.html',
  styleUrl: './fieldset.scss'
})
export class FieldsetPage {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicFieldsetCode = false;
  showToggleableFieldsetCode = false;
  showFormFieldsetCode = false;
  showCustomStylingCode = false;

  // Form data for examples
  userInfo = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  addressInfo = {
    street: '',
    city: '',
    state: '',
    zipCode: ''
  };

  preferences = {
    newsletter: false,
    notifications: true,
    theme: 'light'
  };

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicFieldset':
        this.showBasicFieldsetCode = !this.showBasicFieldsetCode;
        break;
      case 'toggleableFieldset':
        this.showToggleableFieldsetCode = !this.showToggleableFieldsetCode;
        break;
      case 'formFieldset':
        this.showFormFieldsetCode = !this.showFormFieldsetCode;
        break;
      case 'customStyling':
        this.showCustomStylingCode = !this.showCustomStylingCode;
        break;
    }
  }

  onFieldsetToggle(event: any): void {
    console.log('Fieldset toggled:', event);
  }

  onSubmit(): void {
    console.log('Form submitted:', {
      userInfo: this.userInfo,
      addressInfo: this.addressInfo,
      preferences: this.preferences
    });
  }
}