import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToggleSwitch } from '@synerity/ui';

@Component({
  selector: 'app-su-toggle-switch-demo',
  imports: [CommonModule, FormsModule, ToggleSwitch],
  templateUrl: './su-toggle-switch-demo.html',
  styleUrl: './su-toggle-switch-demo.scss'
})
export class SuToggleSwitchDemo {
  // Basic toggle switch states
  basicToggle = false;
  disabledToggle = true;
  
  // Feature toggles
  darkModeToggle = false;
  notificationsToggle = true;
  autoSaveToggle = false;
  
  // Settings toggles
  emailNotifications = false;
  smsNotifications = true;
  pushNotifications = false;
  marketingEmails = false;
  
  // Privacy toggles
  profileVisibility = true;
  searchVisibility = false;
  analyticsTracking = false;
  
  // Form integration
  formData = {
    darkMode: false,
    notifications: true,
    autoSave: false,
    emailNotifications: false,
    smsNotifications: true,
    pushNotifications: false,
    marketingEmails: false,
    profileVisibility: true,
    searchVisibility: false,
    analyticsTracking: false
  };

  // Methods for demo interactions
  onToggleChange(value: boolean, type: string) {
    console.log(`${type} toggle changed to:`, value);
    
    // Update the corresponding form data
    switch(type) {
      case 'darkMode':
        this.formData.darkMode = value;
        break;
      case 'notifications':
        this.formData.notifications = value;
        break;
      case 'autoSave':
        this.formData.autoSave = value;
        break;
      case 'emailNotifications':
        this.formData.emailNotifications = value;
        break;
      case 'smsNotifications':
        this.formData.smsNotifications = value;
        break;
      case 'pushNotifications':
        this.formData.pushNotifications = value;
        break;
      case 'marketingEmails':
        this.formData.marketingEmails = value;
        break;
      case 'profileVisibility':
        this.formData.profileVisibility = value;
        break;
      case 'searchVisibility':
        this.formData.searchVisibility = value;
        break;
      case 'analyticsTracking':
        this.formData.analyticsTracking = value;
        break;
    }
  }

  resetForm() {
    this.formData = {
      darkMode: false,
      notifications: false,
      autoSave: false,
      emailNotifications: false,
      smsNotifications: false,
      pushNotifications: false,
      marketingEmails: false,
      profileVisibility: false,
      searchVisibility: false,
      analyticsTracking: false
    };
    
    this.darkModeToggle = false;
    this.notificationsToggle = false;
    this.autoSaveToggle = false;
    this.emailNotifications = false;
    this.smsNotifications = false;
    this.pushNotifications = false;
    this.marketingEmails = false;
    this.profileVisibility = false;
    this.searchVisibility = false;
    this.analyticsTracking = false;
  }

  setDefaultValues() {
    this.darkModeToggle = true;
    this.notificationsToggle = true;
    this.autoSaveToggle = true;
    this.emailNotifications = true;
    this.smsNotifications = true;
    this.pushNotifications = false;
    this.marketingEmails = false;
    this.profileVisibility = true;
    this.searchVisibility = true;
    this.analyticsTracking = false;
  }

  clearAllSelections() {
    this.basicToggle = false;
    this.darkModeToggle = false;
    this.notificationsToggle = false;
    this.autoSaveToggle = false;
    this.emailNotifications = false;
    this.smsNotifications = false;
    this.pushNotifications = false;
    this.marketingEmails = false;
    this.profileVisibility = false;
    this.searchVisibility = false;
    this.analyticsTracking = false;
  }
}
