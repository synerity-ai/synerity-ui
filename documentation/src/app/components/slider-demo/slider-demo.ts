import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Slider } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

interface SliderVariant {
  value: number;
  min: number;
  max: number;
  step: number;
  size: 'small' | 'medium' | 'large';
  theme: 'light' | 'dark';
  color: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink';
  disabled: boolean;
  readonly: boolean;
  showValue: boolean;
  showRange: boolean;
  label: string;
  vertical: boolean;
  compact: boolean;
  spacious: boolean;
  animated: boolean;
  glow: boolean;
  description: string;
}

@Component({
  selector: 'app-slider-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Slider],
  templateUrl: './slider-demo.html',
  styleUrl: './slider-demo.scss'
})
export class SliderDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Basic sliders
  basicSliders: SliderVariant[] = [
    {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      showValue: false,
      showRange: false,
      label: 'Basic Slider',
      vertical: false,
      compact: false,
      spacious: false,
      animated: false,
      glow: false,
      description: 'Simple range slider component'
    },
    {
      value: 75,
      min: 0,
      max: 100,
      step: 5,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      showValue: true,
      showRange: true,
      label: 'Slider with Value and Range',
      vertical: false,
      compact: false,
      spacious: false,
      animated: false,
      glow: false,
      description: 'Slider showing current value and range'
    }
  ];

  // Size variations
  sizeVariants: SliderVariant[] = [
    {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 'small',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      showValue: true,
      showRange: false,
      label: 'Small Size',
      vertical: false,
      compact: false,
      spacious: false,
      animated: false,
      glow: false,
      description: 'Compact slider component'
    },
    {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      showValue: true,
      showRange: false,
      label: 'Medium Size',
      vertical: false,
      compact: false,
      spacious: false,
      animated: false,
      glow: false,
      description: 'Standard slider component'
    },
    {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 'large',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      showValue: true,
      showRange: false,
      label: 'Large Size',
      vertical: false,
      compact: false,
      spacious: false,
      animated: false,
      glow: false,
      description: 'Larger slider component'
    }
  ];

  // Color themes
  colorThemes: SliderVariant[] = [
    {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      showValue: true,
      showRange: false,
      label: 'Default Color',
      vertical: false,
      compact: false,
      spacious: false,
      animated: false,
      glow: false,
      description: 'Standard blue colored slider'
    },
    {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 'medium',
      theme: 'light',
      color: 'primary',
      disabled: false,
      readonly: false,
      showValue: true,
      showRange: false,
      label: 'Primary Color',
      vertical: false,
      compact: false,
      spacious: false,
      animated: false,
      glow: false,
      description: 'Primary blue colored slider'
    },
    {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 'medium',
      theme: 'light',
      color: 'success',
      disabled: false,
      readonly: false,
      showValue: true,
      showRange: false,
      label: 'Success Color',
      vertical: false,
      compact: false,
      spacious: false,
      animated: false,
      glow: false,
      description: 'Green colored slider'
    },
    {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 'medium',
      theme: 'light',
      color: 'warning',
      disabled: false,
      readonly: false,
      showValue: true,
      showRange: false,
      label: 'Warning Color',
      vertical: false,
      compact: false,
      spacious: false,
      animated: false,
      glow: false,
      description: 'Orange colored slider'
    },
    {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 'medium',
      theme: 'light',
      color: 'danger',
      disabled: false,
      readonly: false,
      showValue: true,
      showRange: false,
      label: 'Danger Color',
      vertical: false,
      compact: false,
      spacious: false,
      animated: false,
      glow: false,
      description: 'Red colored slider'
    },
    {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 'medium',
      theme: 'light',
      color: 'purple',
      disabled: false,
      readonly: false,
      showValue: true,
      showRange: false,
      label: 'Purple Color',
      vertical: false,
      compact: false,
      spacious: false,
      animated: false,
      glow: false,
      description: 'Purple colored slider'
    },
    {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 'medium',
      theme: 'light',
      color: 'pink',
      disabled: false,
      readonly: false,
      showValue: true,
      showRange: false,
      label: 'Pink Color',
      vertical: false,
      compact: false,
      spacious: false,
      animated: false,
      glow: false,
      description: 'Pink colored slider'
    }
  ];

  // Layout options
  layoutOptions: SliderVariant[] = [
    {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      showValue: true,
      showRange: true,
      label: 'With Value and Range',
      vertical: false,
      compact: false,
      spacious: false,
      animated: false,
      glow: false,
      description: 'Shows current value and range'
    },
    {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      showValue: false,
      showRange: false,
      label: 'Compact Spacing',
      vertical: false,
      compact: true,
      spacious: false,
      animated: false,
      glow: false,
      description: 'Reduced spacing between elements'
    },
    {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      showValue: false,
      showRange: false,
      label: 'Spacious Spacing',
      vertical: false,
      compact: false,
      spacious: true,
      animated: false,
      glow: false,
      description: 'Increased spacing between elements'
    }
  ];

  // State examples
  stateExamples: SliderVariant[] = [
    {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      showValue: true,
      showRange: false,
      label: 'Interactive Slider',
      vertical: false,
      compact: false,
      spacious: false,
      animated: false,
      glow: false,
      description: 'Standard interactive slider'
    },
    {
      value: 75,
      min: 0,
      max: 100,
      step: 1,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: true,
      showValue: true,
      showRange: false,
      label: 'Read-only Slider',
      vertical: false,
      compact: false,
      spacious: false,
      animated: false,
      glow: false,
      description: 'Slider cannot be changed'
    },
    {
      value: 25,
      min: 0,
      max: 100,
      step: 1,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: true,
      readonly: false,
      showValue: true,
      showRange: false,
      label: 'Disabled Slider',
      vertical: false,
      compact: false,
      spacious: false,
      animated: false,
      glow: false,
      description: 'Slider is disabled and cannot be interacted with'
    }
  ];

  // Animation effects
  animationEffects: SliderVariant[] = [
    {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      showValue: true,
      showRange: false,
      label: 'Animated Slider',
      vertical: false,
      compact: false,
      spacious: false,
      animated: true,
      glow: false,
      description: 'Smooth animations on value changes'
    },
    {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      showValue: true,
      showRange: false,
      label: 'Glow Effect',
      vertical: false,
      compact: false,
      spacious: false,
      animated: false,
      glow: true,
      description: 'Glowing effect on the slider thumb'
    },
    {
      value: 50,
      min: 0,
      max: 100,
      step: 1,
      size: 'medium',
      theme: 'light',
      color: 'primary',
      disabled: false,
      readonly: false,
      showValue: true,
      showRange: false,
      label: 'Animated + Glow',
      vertical: false,
      compact: false,
      spacious: false,
      animated: true,
      glow: true,
      description: 'Combined animation and glow effects'
    }
  ];

  // Real-world examples
  volumeSlider: SliderVariant = {
    value: 70,
    min: 0,
    max: 100,
    step: 1,
    size: 'medium',
    theme: 'light',
    color: 'primary',
    disabled: false,
    readonly: false,
    showValue: true,
    showRange: false,
    label: 'Volume Control',
    vertical: false,
    compact: false,
    spacious: false,
    animated: true,
    glow: false,
    description: 'Audio volume control slider'
  };

  brightnessSlider: SliderVariant = {
    value: 80,
    min: 0,
    max: 100,
    step: 1,
    size: 'medium',
    theme: 'light',
    color: 'warning',
    disabled: false,
    readonly: false,
    showValue: true,
    showRange: false,
    label: 'Screen Brightness',
    vertical: false,
    compact: false,
    spacious: false,
    animated: true,
    glow: false,
    description: 'Display brightness control'
  };

  temperatureSlider: SliderVariant = {
    value: 22,
    min: 16,
    max: 30,
    step: 0.5,
    size: 'large',
    theme: 'light',
    color: 'danger',
    disabled: false,
    readonly: false,
    showValue: true,
    showRange: true,
    label: 'Temperature Control',
    vertical: false,
    compact: false,
    spacious: false,
    animated: true,
    glow: true,
    description: 'Thermostat temperature control'
  };

  priceRangeSlider: SliderVariant = {
    value: 500,
    min: 0,
    max: 1000,
    step: 10,
    size: 'medium',
    theme: 'light',
    color: 'success',
    disabled: false,
    readonly: false,
    showValue: true,
    showRange: true,
    label: 'Price Range',
    vertical: false,
    compact: false,
    spacious: false,
    animated: false,
    glow: false,
    description: 'Product price range filter'
  };

  onSliderChange(value: number, slider: SliderVariant): void {
    slider.value = value;
    console.log(`${slider.label} changed to:`, value);
  }

  getSliderText(value: number, min: number, max: number, step: number): string {
    if (step < 1) {
      return `${value.toFixed(1)}`;
    }
    return `${value}`;
  }

  getSliderPercentage(value: number, min: number, max: number): number {
    return ((value - min) / (max - min)) * 100;
  }

  getSliderStatus(value: number, min: number, max: number): string {
    const percentage = this.getSliderPercentage(value, min, max);
    if (percentage >= 80) return 'High';
    if (percentage >= 60) return 'Medium';
    if (percentage >= 40) return 'Low';
    return 'Very Low';
  }

  getSliderStatusColor(value: number, min: number, max: number): string {
    const percentage = this.getSliderPercentage(value, min, max);
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-blue-600';
    if (percentage >= 40) return 'text-yellow-600';
    return 'text-red-600';
  }
}