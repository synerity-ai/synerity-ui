import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { ToggleSwitch as SuiToggleSwitch } from '../../../../../ui-lib/src/lib/toggle-switch/toggle-switch';

@Component({
  selector: 'app-toggleswitch',
  imports: [CommonModule, FormsModule, Tabs, SuiToggleSwitch],
  templateUrl: './toggleswitch.html',
  styleUrl: './toggleswitch.scss'
})
export class Toggleswitch {
  activeTab = 'demo';
  
  // Demo data
  basicToggle = false;
  disabledToggle = true;
  readonlyToggle = false;
  requiredToggle = false;
  customToggle = true;
  
  // Interactive demo data
  interactiveValue = false;
  interactiveDisabled = false;
  interactiveReadonly = false;
  interactiveRequired = false;
  
  // Code visibility states
  showBasicToggleCode = false;
  showToggleStatesCode = false;
  showCustomToggleCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicToggle':
        this.showBasicToggleCode = !this.showBasicToggleCode;
        break;
      case 'toggleStates':
        this.showToggleStatesCode = !this.showToggleStatesCode;
        break;
      case 'customToggle':
        this.showCustomToggleCode = !this.showCustomToggleCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  // Toggle demo methods
  onToggleChange(value: boolean) {
    console.log('Toggle changed:', value);
  }
  
  onInteractiveToggleChange(value: boolean) {
    this.interactiveValue = value;
    console.log('Interactive toggle changed:', value);
  }
  
  onToggleFocus() {
    console.log('Toggle focused');
  }
  
  onToggleBlur() {
    console.log('Toggle blurred');
  }
  
  // Utility methods
  formatToggleValue(value: boolean): string {
    return value ? 'On' : 'Off';
  }
  
  isValidToggleValue(value: boolean): boolean {
    return typeof value === 'boolean';
  }
  
  getToggleStatus(value: boolean): string {
    return value ? 'Enabled' : 'Disabled';
  }
  
  // Helper methods for interactive demo
  resetToggle() {
    this.interactiveValue = false;
    this.interactiveDisabled = false;
    this.interactiveReadonly = false;
    this.interactiveRequired = false;
  }
}