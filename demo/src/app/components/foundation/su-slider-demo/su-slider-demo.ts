import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Slider } from '@synerity/ui';

@Component({
  selector: 'app-su-slider-demo',
  imports: [CommonModule, FormsModule, Slider],
  templateUrl: './su-slider-demo.html',
  styleUrl: './su-slider-demo.scss'
})
export class SuSliderDemo {
  // Basic slider states
  basicSlider = 50;
  disabledSlider = 75;
  
  // Range sliders
  volumeSlider = 60;
  brightnessSlider = 80;
  contrastSlider = 70;
  
  // Step sliders
  stepSlider = 30;
  largeStepSlider = 20;
  
  // Min/Max sliders
  temperatureSlider = 22; // Celsius
  pressureSlider = 1013; // hPa
  
  // Form integration
  formData = {
    volume: 60,
    brightness: 80,
    contrast: 70,
    temperature: 22,
    pressure: 1013
  };

  // Methods for demo interactions
  onSliderChange(value: number, type: string) {
    console.log(`${type} slider changed to:`, value);
    
    // Update the corresponding form data
    switch(type) {
      case 'volume':
        this.formData.volume = value;
        break;
      case 'brightness':
        this.formData.brightness = value;
        break;
      case 'contrast':
        this.formData.contrast = value;
        break;
      case 'temperature':
        this.formData.temperature = value;
        break;
      case 'pressure':
        this.formData.pressure = value;
        break;
    }
  }

  resetForm() {
    this.formData = {
      volume: 50,
      brightness: 50,
      contrast: 50,
      temperature: 20,
      pressure: 1000
    };
    
    this.volumeSlider = 50;
    this.brightnessSlider = 50;
    this.contrastSlider = 50;
    this.temperatureSlider = 20;
    this.pressureSlider = 1000;
  }

  setDefaultValues() {
    this.volumeSlider = 75;
    this.brightnessSlider = 80;
    this.contrastSlider = 70;
    this.temperatureSlider = 22;
    this.pressureSlider = 1013;
  }

  clearAllSelections() {
    this.basicSlider = 0;
    this.volumeSlider = 0;
    this.brightnessSlider = 0;
    this.contrastSlider = 0;
    this.temperatureSlider = 0;
    this.pressureSlider = 0;
  }
}
