import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToggleSwitch as SuiToggleSwitch } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-toggleswitch',
  imports: [CommonModule, FormsModule, SuiToggleSwitch, Tabs],
  templateUrl: './toggleswitch.html',
  styleUrl: './toggleswitch.scss'
})
export class ToggleSwitchPage {
  activeTab = 'demo';
  
  // Demo data
  basicToggle = false;
  enabledToggle = true;
  disabledToggle = false;
  customToggle = false;
  interactiveToggle = false;
  interactiveDisabled = false;
  
  // Settings toggles
  notificationsToggle = true;
  darkModeToggle = false;
  autoSaveToggle = true;
  emailAlertsToggle = false;
  privacyToggle = false;
  
  // Code visibility states
  showBasicToggleCode = false;
  showEnabledToggleCode = false;
  showDisabledToggleCode = false;
  showCustomToggleCode = false;
  showSettingsToggleCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicToggle':
        this.showBasicToggleCode = !this.showBasicToggleCode;
        break;
      case 'enabledToggle':
        this.showEnabledToggleCode = !this.showEnabledToggleCode;
        break;
      case 'disabledToggle':
        this.showDisabledToggleCode = !this.showDisabledToggleCode;
        break;
      case 'customToggle':
        this.showCustomToggleCode = !this.showCustomToggleCode;
        break;
      case 'settingsToggle':
        this.showSettingsToggleCode = !this.showSettingsToggleCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onToggleChange(value: boolean, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Helper methods
  getToggleStatus(toggle: boolean): { status: string; color: string; icon: string } {
    if (toggle) {
      return { status: 'Enabled', color: 'text-green-600', icon: '✓' };
    } else {
      return { status: 'Disabled', color: 'text-gray-600', icon: '✗' };
    }
  }
  
  getToggleDescription(toggle: boolean): string {
    return toggle ? 'Feature is currently enabled' : 'Feature is currently disabled';
  }
  
  // Quick actions
  enableAll() {
    this.notificationsToggle = true;
    this.darkModeToggle = true;
    this.autoSaveToggle = true;
    this.emailAlertsToggle = true;
    this.privacyToggle = true;
  }
  
  disableAll() {
    this.notificationsToggle = false;
    this.darkModeToggle = false;
    this.autoSaveToggle = false;
    this.emailAlertsToggle = false;
    this.privacyToggle = false;
  }
  
  resetToDefaults() {
    this.notificationsToggle = true;
    this.darkModeToggle = false;
    this.autoSaveToggle = true;
    this.emailAlertsToggle = false;
    this.privacyToggle = false;
  }
}
