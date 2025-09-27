import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import RadioButton component from Synerity UI
import { RadioButton } from '@synerity/ui';

@Component({
  selector: 'app-rapid-radio-button',
  imports: [
    CommonModule,
    FormsModule,
    RadioButton
  ],
  templateUrl: './rapid-radio-button.html',
  styleUrl: './rapid-radio-button.scss'
})
export class RapidRadioButton {
  title = 'Synerity UI RadioButton Demo';
  
  // Basic radio button states
  selectedOption = 'option1';
  disabledSelected = 'option2';
  
  // Form integration
  formData = {
    gender: 'male',
    notification: 'email',
    language: 'en'
  };
  
  // Radio button groups
  genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];
  
  notificationOptions = [
    { value: 'email', label: 'Email' },
    { value: 'sms', label: 'SMS' },
    { value: 'push', label: 'Push Notification' },
    { value: 'none', label: 'None' }
  ];
  
  languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' }
  ];
  
  // Size variants
  sizeOptions = [
    { value: 'small', label: 'Small', size: 'sm' },
    { value: 'medium', label: 'Medium', size: 'md' },
    { value: 'large', label: 'Large', size: 'lg' }
  ];
  selectedSize = 'medium';
  
  // Color variants
  colorOptions = [
    { value: 'primary', label: 'Primary', color: 'primary' },
    { value: 'secondary', label: 'Secondary', color: 'secondary' },
    { value: 'success', label: 'Success', color: 'success' },
    { value: 'warning', label: 'Warning', color: 'warning' },
    { value: 'danger', label: 'Danger', color: 'danger' }
  ];
  selectedColor = 'primary';
  
  onRadioChange(event: any, type: string) {
    console.log(`${type} changed to:`, event);
  }
  
  onGenderChange(event: any) {
    this.formData.gender = event.value;
    console.log('Gender changed to:', event.value);
  }
  
  onNotificationChange(event: any) {
    this.formData.notification = event.value;
    console.log('Notification changed to:', event.value);
  }
  
  onLanguageChange(event: any) {
    this.formData.language = event.value;
    console.log('Language changed to:', event.value);
  }
}
