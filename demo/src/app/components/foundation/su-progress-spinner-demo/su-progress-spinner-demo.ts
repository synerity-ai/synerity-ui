import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressSpinner } from '@synerity/ui';

@Component({
  selector: 'app-su-progress-spinner-demo',
  imports: [CommonModule, FormsModule, ProgressSpinner],
  templateUrl: './su-progress-spinner-demo.html',
  styleUrl: './su-progress-spinner-demo.scss'
})
export class SuProgressSpinnerDemo {
  // Spinner configurations
  spinnerConfigs = [
    {
      id: 'basic',
      size: 'normal' as const,
      strokeWidth: '2',
      animationDuration: '2s',
      styleClass: ''
    },
    {
      id: 'small',
      size: 'small' as const,
      strokeWidth: '1',
      animationDuration: '1.5s',
      styleClass: ''
    },
    {
      id: 'large',
      size: 'large' as const,
      strokeWidth: '3',
      animationDuration: '2.5s',
      styleClass: ''
    }
  ];

  // Size options
  sizes = [
    { value: 'small', label: 'Small' },
    { value: 'normal', label: 'Normal' },
    { value: 'large', label: 'Large' }
  ];

  // Color options
  colors = [
    { value: '', label: 'Default' },
    { value: 'primary', label: 'Primary' },
    { value: 'secondary', label: 'Secondary' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'error', label: 'Error' },
    { value: 'info', label: 'Info' }
  ];

  selectedSize: 'small' | 'normal' | 'large' = 'normal';
  selectedColor = '';
  strokeWidth = '2';
  animationDuration = '2s';
  customStyleClass = '';

  // Real-world examples
  isLoading = false;
  loadingText = 'Loading...';

  // Event handlers
  startLoading(): void {
    this.isLoading = true;
    this.loadingText = 'Processing your request...';
    
    // Simulate loading
    setTimeout(() => {
      this.isLoading = false;
      this.loadingText = 'Complete!';
    }, 3000);
  }

  stopLoading(): void {
    this.isLoading = false;
    this.loadingText = 'Stopped';
  }

  // Get current configuration
  getCurrentConfig(): any {
    return this.spinnerConfigs.find(config => config.id === 'basic') || this.spinnerConfigs[0];
  }

  // Get spinner class
  getSpinnerClass(): string {
    let classes = 'sui-progress-spinner';
    
    if (this.selectedSize) {
      classes += ` sui-progress-spinner-${this.selectedSize}`;
    }
    
    if (this.selectedColor) {
      classes += ` sui-progress-spinner--${this.selectedColor}`;
    }
    
    if (this.customStyleClass) {
      classes += ` ${this.customStyleClass}`;
    }
    
    return classes;
  }

  // Get spinner style
  getSpinnerStyle(): any {
    return {};
  }

  // Get circle style
  getCircleStyle(): any {
    return {
      strokeWidth: this.strokeWidth,
      fill: 'transparent',
      animationDuration: this.animationDuration
    };
  }

  // Get size value
  getSizeValue(): number {
    switch (this.selectedSize) {
      case 'small': return 20;
      case 'large': return 60;
      default: return 40;
    }
  }

  // Get radius
  getRadius(): number {
    return (this.getSizeValue() - parseInt(this.strokeWidth)) / 2;
  }

  // Get circumference
  getCircumference(): number {
    return 2 * Math.PI * this.getRadius();
  }
}
