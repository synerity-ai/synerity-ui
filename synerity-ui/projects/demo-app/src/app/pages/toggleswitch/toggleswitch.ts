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
export class Toggleswitch {
  activeTab = 'demo';
  
  // Demo data
  basicToggle = false;
  enabledToggle = true;
  disabledToggle = false;
  customToggle = false;
  interactiveToggle = false;
  
  // Code visibility states
  showBasicUsageCode = false;
  showToggleFeaturesCode = false;
  showToggleStatesCode = false;
  showToggleVariantsCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  onToggleChange(value: boolean, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Code toggle methods
  toggleCode(section: string) {
    switch(section) {
      case 'basicUsage': this.showBasicUsageCode = !this.showBasicUsageCode; break;
      case 'toggleFeatures': this.showToggleFeaturesCode = !this.showToggleFeaturesCode; break;
      case 'toggleStates': this.showToggleStatesCode = !this.showToggleStatesCode; break;
      case 'toggleVariants': this.showToggleVariantsCode = !this.showToggleVariantsCode; break;
      case 'interactiveDemo': this.showInteractiveDemoCode = !this.showInteractiveDemoCode; break;
    }
  }
}
