import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Slider as SuiSlider } from '../../../../../ui-lib/src/lib/slider/slider';

@Component({
  selector: 'app-slider',
  imports: [CommonModule, FormsModule, Tabs, SuiSlider],
  templateUrl: './slider.html',
  styleUrl: './slider.scss'
})
export class Slider {
  activeTab = 'demo';
  
  // Demo data
  basicSlider = 50;
  minMaxSlider = 25;
  stepSlider = 10;
  disabledSlider = 75;
  
  // Interactive demo data
  interactiveValue = 50;
  interactiveMin = 0;
  interactiveMax = 100;
  interactiveStep = 1;
  interactiveDisabled = false;
  
  // Code visibility states
  showBasicSliderCode = false;
  showMinMaxSliderCode = false;
  showStepSliderCode = false;
  showSliderStatesCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicSlider':
        this.showBasicSliderCode = !this.showBasicSliderCode;
        break;
      case 'minMaxSlider':
        this.showMinMaxSliderCode = !this.showMinMaxSliderCode;
        break;
      case 'stepSlider':
        this.showStepSliderCode = !this.showStepSliderCode;
        break;
      case 'sliderStates':
        this.showSliderStatesCode = !this.showSliderStatesCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  // Slider demo methods
  onSliderChange(value: number) {
    console.log('Slider changed:', value);
  }
  
  onInteractiveSliderChange(value: number) {
    this.interactiveValue = value;
    console.log('Interactive slider changed:', value);
  }
  
  // Helper methods for interactive demo
  setSliderValue(value: number) {
    this.interactiveValue = value;
  }
  
  getSliderPercentage(): number {
    if (this.interactiveMax === this.interactiveMin) return 0;
    return Math.round(((this.interactiveValue - this.interactiveMin) / (this.interactiveMax - this.interactiveMin)) * 100);
  }
  
  getMiddleValue(): number {
    return Math.floor((this.interactiveMin + this.interactiveMax) / 2);
  }
  
  resetSlider() {
    this.interactiveValue = 50;
    this.interactiveMin = 0;
    this.interactiveMax = 100;
    this.interactiveStep = 1;
    this.interactiveDisabled = false;
  }
}