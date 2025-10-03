import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Skeleton } from '@synerity/ui';

@Component({
  selector: 'app-su-skeleton-demo',
  imports: [CommonModule, FormsModule, Skeleton],
  templateUrl: './su-skeleton-demo.html',
  styleUrl: './su-skeleton-demo.scss'
})
export class SuSkeletonDemo {
  // Skeleton configurations
  skeletonConfigs = [
    {
      id: 'basic',
      width: '100%',
      height: '1rem',
      borderRadius: '4px',
      animation: true
    },
    {
      id: 'circle',
      width: '3rem',
      height: '3rem',
      borderRadius: '50%',
      animation: true
    },
    {
      id: 'square',
      width: '4rem',
      height: '4rem',
      borderRadius: '0',
      animation: true
    }
  ];

  // Shape options
  shapes = [
    { value: 'default', label: 'Default' },
    { value: 'circle', label: 'Circle' },
    { value: 'square', label: 'Square' },
    { value: 'rounded', label: 'Rounded' }
  ];

  // Size options
  sizes = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
    { value: 'xlarge', label: 'Extra Large' }
  ];

  // Color options
  colors = [
    { value: '', label: 'Default' },
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'primary', label: 'Primary' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'error', label: 'Error' }
  ];

  selectedShape = 'default';
  selectedSize = 'medium';
  selectedColor = '';
  customWidth = '100%';
  customHeight = '1rem';
  customBorderRadius = '4px';
  animation = true;

  // Real-world examples
  showContent = false;
  isLoading = false;

  // Event handlers
  toggleContent(): void {
    this.showContent = !this.showContent;
  }

  simulateLoading(): void {
    this.isLoading = true;
    this.showContent = false;
    
    setTimeout(() => {
      this.isLoading = false;
      this.showContent = true;
    }, 2000);
  }

  // Get current configuration
  getCurrentConfig(): any {
    return this.skeletonConfigs.find(config => config.id === 'basic') || this.skeletonConfigs[0];
  }

  // Get skeleton class
  getSkeletonClass(): string {
    let classes = 'sui-skeleton';
    
    if (this.animation) {
      classes += ' sui-skeleton-animated';
    }
    
    if (this.selectedShape !== 'default') {
      classes += ` sui-skeleton--${this.selectedShape}`;
    }
    
    if (this.selectedSize !== 'medium') {
      classes += ` sui-skeleton--${this.selectedSize}`;
    }
    
    if (this.selectedColor) {
      classes += ` sui-skeleton--${this.selectedColor}`;
    }
    
    return classes;
  }

  // Get skeleton style
  getSkeletonStyle(): any {
    return {
      width: this.customWidth,
      height: this.customHeight,
      borderRadius: this.customBorderRadius
    };
  }

  // Get size dimensions
  getSizeDimensions(): { width: string, height: string } {
    switch (this.selectedSize) {
      case 'small':
        return { width: '2rem', height: '0.5rem' };
      case 'large':
        return { width: '6rem', height: '1.5rem' };
      case 'xlarge':
        return { width: '8rem', height: '2rem' };
      default:
        return { width: '4rem', height: '1rem' };
    }
  }

  // Get shape dimensions
  getShapeDimensions(): { width: string, height: string, borderRadius: string } {
    switch (this.selectedShape) {
      case 'circle':
        return { width: '3rem', height: '3rem', borderRadius: '50%' };
      case 'square':
        return { width: '4rem', height: '4rem', borderRadius: '0' };
      case 'rounded':
        return { width: '4rem', height: '1rem', borderRadius: '8px' };
      default:
        return { width: '4rem', height: '1rem', borderRadius: '4px' };
    }
  }
}
