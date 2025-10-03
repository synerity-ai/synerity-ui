import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ripple } from '@synerity/ui';

@Component({
  selector: 'app-su-ripple-demo',
  imports: [CommonModule, FormsModule, Ripple],
  templateUrl: './su-ripple-demo.html',
  styleUrl: './su-ripple-demo.scss'
})
export class SuRippleDemo {
  // Ripple configurations
  rippleConfigs = [
    { id: 'basic', disabled: false, color: 'rgba(255, 255, 255, 0.6)', duration: 600 },
    { id: 'disabled', disabled: true, color: 'rgba(255, 255, 255, 0.6)', duration: 600 }
  ];

  // Color options
  colors = [
    { value: 'rgba(255, 255, 255, 0.6)', label: 'White (Default)' },
    { value: 'rgba(59, 130, 246, 0.6)', label: 'Blue' },
    { value: 'rgba(16, 185, 129, 0.6)', label: 'Green' },
    { value: 'rgba(245, 158, 11, 0.6)', label: 'Yellow' },
    { value: 'rgba(239, 68, 68, 0.6)', label: 'Red' },
    { value: 'rgba(139, 92, 246, 0.6)', label: 'Purple' }
  ];

  // Duration options
  durations = [
    { value: 300, label: 'Fast (300ms)' },
    { value: 600, label: 'Normal (600ms)' },
    { value: 1000, label: 'Slow (1000ms)' }
  ];

  // Style options
  styles = [
    { value: '', label: 'Default' },
    { value: 'sui-ripple--primary', label: 'Primary' },
    { value: 'sui-ripple--success', label: 'Success' },
    { value: 'sui-ripple--warning', label: 'Warning' },
    { value: 'sui-ripple--error', label: 'Error' },
    { value: 'sui-ripple--info', label: 'Info' }
  ];

  // Size options
  sizes = [
    { value: '', label: 'Normal' },
    { value: 'sui-ripple--small', label: 'Small' },
    { value: 'sui-ripple--large', label: 'Large' }
  ];

  selectedColor = 'rgba(255, 255, 255, 0.6)';
  selectedDuration = 600;
  selectedStyle = '';
  selectedSize = '';
  disabled = false;

  // Event tracking
  rippleCount = 0;
  lastRippleTime = '';

  // Event handlers
  onRippleClick(): void {
    this.rippleCount++;
    this.lastRippleTime = new Date().toLocaleTimeString();
    console.log('Ripple effect triggered');
  }

  // Get ripple class
  getRippleClass(): string {
    let classes = 'sui-ripple';

    if (this.selectedStyle) {
      classes += ` ${this.selectedStyle}`;
    }

    if (this.selectedSize) {
      classes += ` ${this.selectedSize}`;
    }

    if (this.disabled) {
      classes += ' sui-ripple-disabled';
    }

    return classes;
  }

  // Get ripple style
  getRippleStyle(): any {
    return {};
  }

  // Reset counters
  resetCounters(): void {
    this.rippleCount = 0;
    this.lastRippleTime = '';
  }

  // Get configuration description
  getConfigDescription(): string {
    let description = `Color: ${this.selectedColor}`;
    description += ` • Duration: ${this.selectedDuration}ms`;
    description += ` • Style: ${this.selectedStyle || 'Default'}`;
    description += ` • Size: ${this.selectedSize || 'Normal'}`;
    description += ` • Disabled: ${this.disabled ? 'Yes' : 'No'}`;
    return description;
  }

  // Sample buttons with ripple effects
  getSampleButtons() {
    return [
      { label: 'Primary Button', style: 'sui-ripple--primary', color: 'rgba(59, 130, 246, 0.6)' },
      { label: 'Success Button', style: 'sui-ripple--success', color: 'rgba(16, 185, 129, 0.6)' },
      { label: 'Warning Button', style: 'sui-ripple--warning', color: 'rgba(245, 158, 11, 0.6)' },
      { label: 'Error Button', style: 'sui-ripple--error', color: 'rgba(239, 68, 68, 0.6)' },
      { label: 'Info Button', style: 'sui-ripple--info', color: 'rgba(139, 92, 246, 0.6)' }
    ];
  }

  // Sample cards with ripple effects
  getSampleCards() {
    return [
      { title: 'Card 1', content: 'Click this card to see the ripple effect', color: 'bg-blue-50', borderColor: 'border-blue-200' },
      { title: 'Card 2', content: 'Ripple effects provide visual feedback', color: 'bg-green-50', borderColor: 'border-green-200' },
      { title: 'Card 3', content: 'Great for interactive elements', color: 'bg-purple-50', borderColor: 'border-purple-200' }
    ];
  }
}
