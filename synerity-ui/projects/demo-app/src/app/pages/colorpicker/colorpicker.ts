import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorPicker as SuiColorPicker } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-colorpicker',
  imports: [CommonModule, FormsModule, SuiColorPicker, Tabs],
  templateUrl: './colorpicker.html',
  styleUrl: './colorpicker.scss'
})
export class Colorpicker {
  activeTab = 'demo';
  
  // Demo data
  basicColor = '#3B82F6';
  primaryColor = '#EF4444';
  secondaryColor = '#10B981';
  customColor = '#8B5CF6';
  disabledColor = '#6B7280';
  interactiveColor = '#F59E0B';
  
  // Code visibility states
  showBasicUsageCode = false;
  showColorFeaturesCode = false;
  showColorStatesCode = false;
  showColorFormatsCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  onColorChange(value: string, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Code toggle methods
  toggleCode(section: string) {
    switch(section) {
      case 'basicUsage': this.showBasicUsageCode = !this.showBasicUsageCode; break;
      case 'colorFeatures': this.showColorFeaturesCode = !this.showColorFeaturesCode; break;
      case 'colorStates': this.showColorStatesCode = !this.showColorStatesCode; break;
      case 'colorFormats': this.showColorFormatsCode = !this.showColorFormatsCode; break;
      case 'interactiveDemo': this.showInteractiveDemoCode = !this.showInteractiveDemoCode; break;
    }
  }
}
