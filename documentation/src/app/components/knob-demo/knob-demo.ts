import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Knob } from '@synerity/ui';

@Component({
  selector: 'app-knob-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Knob],
  templateUrl: './knob-demo.html',
  styleUrls: ['./knob-demo.scss']
})
export class KnobDemo {
  @Input() currentExample: any;

  // Basic Knob
  basicValue = 50;
  basicMin = 0;
  basicMax = 100;
  basicStep = 1;

  // Size variants
  smallValue = 25;
  mediumValue = 75;
  largeValue = 60;

  // States
  disabledValue = 30;
  readonlyValue = 80;

  // Custom styling
  customValue = 45;
  customMin = 0;
  customMax = 200;
  customStep = 5;

  // Color variants
  redValue = 40;
  greenValue = 70;
  yellowValue = 85;
  purpleValue = 55;

  // Form integration
  formValue = 65;
  formValid = true;

  // Event handlers
  onValueChange(value: number, example: string): void {
    console.log(`${example} value changed:`, value);
  }

  // Utility methods
  resetValue(): void {
    this.basicValue = 50;
  }

  setRandomValue(): void {
    this.basicValue = Math.floor(Math.random() * 101);
  }

  // Form validation
  validateForm(): void {
    this.formValid = this.formValue >= 0 && this.formValue <= 100;
  }

  onFormValueChange(): void {
    this.validateForm();
  }

  // Preset values
  setPresetValue(value: number): void {
    this.basicValue = value;
  }

  // Custom color themes
  getCustomColorStyle(color: string): any {
    return {
      '--sui-knob-primary': color,
      '--sui-knob-primary-hover': this.darkenColor(color, 0.2)
    };
  }

  private darkenColor(color: string, amount: number): string {
    // Simple color darkening utility
    const colors: { [key: string]: string } = {
      '#ef4444': '#dc2626',
      '#10b981': '#059669',
      '#f59e0b': '#d97706',
      '#8b5cf6': '#7c3aed'
    };
    return colors[color] || color;
  }

  // Animation and interaction
  animateToValue(targetValue: number): void {
    const startValue = this.basicValue;
    const duration = 1000; // 1 second
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      this.basicValue = Math.round(startValue + (targetValue - startValue) * easeOut);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }
}
