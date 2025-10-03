import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressBar } from '@synerity/ui';

@Component({
  selector: 'app-su-progress-bar-demo',
  imports: [CommonModule, FormsModule, ProgressBar],
  templateUrl: './su-progress-bar-demo.html',
  styleUrl: './su-progress-bar-demo.scss'
})
export class SuProgressBarDemo {
  // Basic progress values
  basicValue = 0;
  animatedValue = 0;
  indeterminateValue = 0;

  // Progress configurations
  progressConfigs = [
    { value: 0, label: '0%' },
    { value: 25, label: '25%' },
    { value: 50, label: '50%' },
    { value: 75, label: '75%' },
    { value: 100, label: '100%' }
  ];

  // Color variants
  colorVariants = [
    { value: '', label: 'Default' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'error', label: 'Error' },
    { value: 'info', label: 'Info' }
  ];

  selectedColor = '';
  selectedValue = 50;

  // Size variants
  sizes = [
    { value: 'small', label: 'Small' },
    { value: 'default', label: 'Default' },
    { value: 'large', label: 'Large' }
  ];

  selectedSize = 'default';

  // Mode variants
  modes = [
    { value: 'determinate', label: 'Determinate' },
    { value: 'indeterminate', label: 'Indeterminate' }
  ];

  selectedMode: 'determinate' | 'indeterminate' = 'determinate';

  // Striped variant
  striped = false;

  // Animation settings
  animationInterval: any;
  isAnimating = false;

  // Real-world examples
  fileUploadProgress = 0;
  downloadProgress = 0;
  installationProgress = 0;

  // Event handlers
  onProgressChange(value: number): void {
    console.log('Progress changed to:', value);
  }

  // Animation controls
  startAnimation(): void {
    if (this.isAnimating) return;

    this.isAnimating = true;
    this.animatedValue = 0;

    this.animationInterval = setInterval(() => {
      this.animatedValue += Math.random() * 10;
      if (this.animatedValue >= 100) {
        this.animatedValue = 100;
        this.stopAnimation();
      }
    }, 200);
  }

  stopAnimation(): void {
    this.isAnimating = false;
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
      this.animationInterval = null;
    }
  }

  resetAnimation(): void {
    this.stopAnimation();
    this.animatedValue = 0;
  }

  // Real-world examples
  simulateFileUpload(): void {
    this.fileUploadProgress = 0;
    const interval = setInterval(() => {
      this.fileUploadProgress += Math.random() * 15;
      if (this.fileUploadProgress >= 100) {
        this.fileUploadProgress = 100;
        clearInterval(interval);
      }
    }, 300);
  }

  simulateDownload(): void {
    this.downloadProgress = 0;
    const interval = setInterval(() => {
      this.downloadProgress += Math.random() * 20;
      if (this.downloadProgress >= 100) {
        this.downloadProgress = 100;
        clearInterval(interval);
      }
    }, 250);
  }

  simulateInstallation(): void {
    this.installationProgress = 0;
    const interval = setInterval(() => {
      this.installationProgress += Math.random() * 8;
      if (this.installationProgress >= 100) {
        this.installationProgress = 100;
        clearInterval(interval);
      }
    }, 500);
  }

  // Get progress bar class
  getProgressBarClass(): string {
    let classes = 'sui-progress-bar';
    
    if (this.selectedSize !== 'default') {
      classes += ` sui-progress-bar--${this.selectedSize}`;
    }
    
    if (this.selectedColor) {
      classes += ` sui-progress-bar--${this.selectedColor}`;
    }
    
    if (this.striped) {
      classes += ' sui-progress-bar--striped';
    }
    
    return classes;
  }

  // Get progress bar style
  getProgressBarStyle(): any {
    return {};
  }

  // Get progress style
  getProgressStyle(): any {
    const style: any = {};
    
    if (this.selectedMode === 'determinate') {
      style.width = `${Math.min(100, Math.max(0, this.selectedValue))}%`;
    }
    
    if (this.selectedColor) {
      // Color will be handled by CSS classes
    }
    
    return style;
  }

  // Get display value
  getDisplayValue(): string {
    if (this.selectedMode === 'indeterminate') {
      return '';
    }
    return `${Math.round(this.selectedValue)}%`;
  }

  // Check if indeterminate
  isIndeterminate(): boolean {
    return this.selectedMode === 'indeterminate';
  }
}
