import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Slider as SuiSlider } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-slider',
  imports: [CommonModule, FormsModule, SuiSlider, Tabs],
  templateUrl: './slider.html',
  styleUrl: './slider.scss'
})
export class Slider {
  activeTab = 'demo';
  
  // Demo data
  basicSlider = 50;
  rangeSlider = 25;
  stepSlider = 10;
  disabledSlider = 75;
  customSlider = 60;
  interactiveSlider = 30;
  
  // Code visibility states
  showBasicUsageCode = false;
  showSliderFeaturesCode = false;
  showSliderStatesCode = false;
  showSliderRangesCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  onSliderChange(value: number, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Code toggle methods
  toggleCode(section: string) {
    switch(section) {
      case 'basicUsage': this.showBasicUsageCode = !this.showBasicUsageCode; break;
      case 'sliderFeatures': this.showSliderFeaturesCode = !this.showSliderFeaturesCode; break;
      case 'sliderStates': this.showSliderStatesCode = !this.showSliderStatesCode; break;
      case 'sliderRanges': this.showSliderRangesCode = !this.showSliderRangesCode; break;
      case 'interactiveDemo': this.showInteractiveDemoCode = !this.showInteractiveDemoCode; break;
    }
  }
}
