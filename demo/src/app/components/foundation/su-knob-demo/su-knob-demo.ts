import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Knob } from '@synerity/ui';

@Component({
  selector: 'app-su-knob-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Knob],
  templateUrl: './su-knob-demo.html',
  styleUrl: './su-knob-demo.scss'
})
export class SuKnobDemo {
  // Basic knob states
  basicKnob = 50;
  disabledKnob = 75;
  readonlyKnob = 25;

  // Size variants
  smallKnob = 30;
  mediumKnob = 60;
  largeKnob = 80;

  // Color variants
  primaryKnob = 45;
  successKnob = 70;
  warningKnob = 55;
  dangerKnob = 35;

  // Audio controls
  volumeKnob = 60;
  bassKnob = 40;
  trebleKnob = 50;
  balanceKnob = 0;

  // Temperature controls
  temperatureKnob = 22;
  humidityKnob = 45;
  pressureKnob = 1013;

  // Form integration
  formData = {
    volume: 60,
    temperature: 22,
    pressure: 1013
  };

  // Size options
  sizeOptions = [
    { label: 'Small (80px)', value: 80 },
    { label: 'Medium (120px)', value: 120 },
    { label: 'Large (160px)', value: 160 }
  ];
  selectedSize = 120;

  // Step controls
  stepKnob = 5;
  fineStepKnob = 0.5;

  onKnobChange(value: number, property: string): void {
    (this as any)[property] = value;
  }

  onFormKnobChange(value: number, property: string): void {
    this.formData[property as keyof typeof this.formData] = value;
  }

  resetForm(): void {
    this.formData = {
      volume: 60,
      temperature: 22,
      pressure: 1013
    };
  }

  setDefaultValues(): void {
    this.basicKnob = 50;
    this.disabledKnob = 75;
    this.readonlyKnob = 25;
    this.smallKnob = 30;
    this.mediumKnob = 60;
    this.largeKnob = 80;
    this.primaryKnob = 45;
    this.successKnob = 70;
    this.warningKnob = 55;
    this.dangerKnob = 35;
    this.volumeKnob = 60;
    this.bassKnob = 40;
    this.trebleKnob = 50;
    this.balanceKnob = 0;
    this.temperatureKnob = 22;
    this.humidityKnob = 45;
    this.pressureKnob = 1013;
    this.stepKnob = 5;
    this.fineStepKnob = 0.5;
  }

  getKnobColor(color: string): string {
    const colors: { [key: string]: string } = {
      primary: '#3b82f6',
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#ef4444'
    };
    return colors[color] || '#3b82f6';
  }
}