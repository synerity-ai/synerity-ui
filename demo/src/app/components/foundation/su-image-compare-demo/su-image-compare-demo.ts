import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-su-image-compare-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './su-image-compare-demo.html',
  styleUrl: './su-image-compare-demo.scss'
})
export class SuImageCompareDemo {
  // Sample image pairs for demonstration
  sampleImagePairs = [
    {
      beforeSrc: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      afterSrc: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop',
      beforeAlt: 'Before: Mountain Landscape',
      afterAlt: 'After: Forest Path',
      title: 'Landscape Comparison'
    },
    {
      beforeSrc: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop',
      afterSrc: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      beforeAlt: 'Before: Forest Path',
      afterAlt: 'After: Mountain Landscape',
      title: 'Nature Comparison'
    },
    {
      beforeSrc: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      afterSrc: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop',
      beforeAlt: 'Before: Day Scene',
      afterAlt: 'After: Evening Scene',
      title: 'Time of Day Comparison'
    }
  ];

  // Demo properties
  selectedImagePair = this.sampleImagePairs[0];
  selectedOrientation = 'horizontal';
  sliderPosition = 50;
  customBeforeSrc = '';
  customAfterSrc = '';
  customBeforeAlt = 'Before Image';
  customAfterAlt = 'After Image';

  // Available options for demo controls
  orientations = [
    { value: 'horizontal', label: 'Horizontal' },
    { value: 'vertical', label: 'Vertical' }
  ];

  // Image Compare event handlers
  onSliderChange(event: any): void {
    this.sliderPosition = event.target.value;
  }

  onOrientationChange(): void {
    // Reset slider position when orientation changes
    this.sliderPosition = 50;
  }

  // Template helpers
  getSelectedImagePair(): any {
    return this.selectedImagePair;
  }

  getImageCompareClass(): string {
    return `sui-image-compare sui-image-compare-${this.selectedOrientation}`;
  }

  getImageCompareStyle(): any {
    return {};
  }

  getSliderStyle(): any {
    if (this.selectedOrientation === 'horizontal') {
      return {
        left: `calc(${this.sliderPosition}% - 2px)`
      };
    } else {
      return {
        top: `calc(${this.sliderPosition}% - 2px)`
      };
    }
  }

  getBeforeImageStyle(): any {
    if (this.selectedOrientation === 'horizontal') {
      return {
        clipPath: `inset(0 ${100 - this.sliderPosition}% 0 0)`
      };
    } else {
      return {
        clipPath: `inset(0 0 ${100 - this.sliderPosition}% 0)`
      };
    }
  }

  getImageCompareProps(): any {
    return {
      beforeSrc: this.customBeforeSrc || this.selectedImagePair.beforeSrc,
      afterSrc: this.customAfterSrc || this.selectedImagePair.afterSrc,
      beforeAlt: this.customBeforeAlt || this.selectedImagePair.beforeAlt,
      afterAlt: this.customAfterAlt || this.selectedImagePair.afterAlt,
      orientation: this.selectedOrientation,
      sliderPosition: this.sliderPosition,
      style: this.getImageCompareStyle(),
      styleClass: this.getImageCompareClass()
    };
  }

  // Sample image pair methods
  getSampleImagePairs(): any[] {
    return this.sampleImagePairs;
  }

  selectImagePair(pair: any): void {
    this.selectedImagePair = pair;
    this.sliderPosition = 50; // Reset slider position
  }

  // Utility methods
  hasBeforeImage(): boolean {
    return !!(this.customBeforeSrc || this.selectedImagePair.beforeSrc);
  }

  hasAfterImage(): boolean {
    return !!(this.customAfterSrc || this.selectedImagePair.afterSrc);
  }

  isHorizontal(): boolean {
    return this.selectedOrientation === 'horizontal';
  }

  isVertical(): boolean {
    return this.selectedOrientation === 'vertical';
  }

  // Reset methods
  resetToDefault(): void {
    this.selectedImagePair = this.sampleImagePairs[0];
    this.selectedOrientation = 'horizontal';
    this.sliderPosition = 50;
    this.customBeforeSrc = '';
    this.customAfterSrc = '';
    this.customBeforeAlt = 'Before Image';
    this.customAfterAlt = 'After Image';
  }
}