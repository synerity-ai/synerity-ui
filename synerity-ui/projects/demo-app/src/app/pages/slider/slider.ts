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
export class SliderPage {
  activeTab = 'demo';
  
  // Demo data
  basicSlider = 50;
  rangeSlider = 25;
  stepSlider = 10;
  disabledSlider = 75;
  customSlider = 60;
  interactiveSlider = 30;
  interactiveMin = 0;
  interactiveMax = 100;
  interactiveStep = 1;
  interactiveDisabled = false;
  
  // Code visibility states
  showBasicSliderCode = false;
  showRangeSliderCode = false;
  showStepSliderCode = false;
  showDisabledSliderCode = false;
  showCustomSliderCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicSlider':
        this.showBasicSliderCode = !this.showBasicSliderCode;
        break;
      case 'rangeSlider':
        this.showRangeSliderCode = !this.showRangeSliderCode;
        break;
      case 'stepSlider':
        this.showStepSliderCode = !this.showStepSliderCode;
        break;
      case 'disabledSlider':
        this.showDisabledSliderCode = !this.showDisabledSliderCode;
        break;
      case 'customSlider':
        this.showCustomSliderCode = !this.showCustomSliderCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onSliderChange(value: number, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Helper methods
  getSliderPercentage(value: number, min: number, max: number): number {
    return ((value - min) / (max - min)) * 100;
  }
  
  getSliderStatus(value: number, min: number, max: number): { status: string; color: string } {
    const percentage = this.getSliderPercentage(value, min, max);
    
    if (percentage <= 25) return { status: 'Low', color: 'text-red-600' };
    if (percentage <= 50) return { status: 'Medium', color: 'text-yellow-600' };
    if (percentage <= 75) return { status: 'High', color: 'text-blue-600' };
    return { status: 'Very High', color: 'text-green-600' };
  }
  
  // Quick value setters
  setSliderValue(value: number) {
    this.interactiveSlider = value;
  }
  
  // Preset values
  setLow() { this.interactiveSlider = 25; }
  setMedium() { this.interactiveSlider = 50; }
  setHigh() { this.interactiveSlider = 75; }
  setMax() { this.interactiveSlider = this.interactiveMax; }
  setMin() { this.interactiveSlider = this.interactiveMin; }
}
