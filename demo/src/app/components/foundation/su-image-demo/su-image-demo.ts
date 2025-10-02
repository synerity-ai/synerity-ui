import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-su-image-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './su-image-demo.html',
  styleUrl: './su-image-demo.scss'
})
export class SuImageDemo {
  // Sample image URLs for demonstration
  sampleImages = [
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      alt: 'Mountain Landscape',
      description: 'Beautiful mountain landscape with clear sky'
    },
    {
      src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
      alt: 'Forest Path',
      description: 'Peaceful forest path with tall trees'
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      alt: 'Ocean Waves',
      description: 'Waves crashing on the shore at sunset'
    },
    {
      src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
      alt: 'City Skyline',
      description: 'Modern city skyline at night'
    }
  ];

  // Demo properties
  selectedImage = this.sampleImages[0];
  selectedVariant = 'default';
  selectedAspectRatio = 'auto';
  previewEnabled = true;
  zoomEnabled = true;
  showBorder = false;
  showShadow = false;
  loading = 'lazy';
  customWidth = '';
  customHeight = '';

  // Available options for demo controls
  variants = [
    { value: 'default', label: 'Default' },
    { value: 'rounded', label: 'Rounded' },
    { value: 'circle', label: 'Circle' },
    { value: 'shadow', label: 'Shadow' },
    { value: 'border', label: 'Border' }
  ];

  aspectRatios = [
    { value: 'auto', label: 'Auto' },
    { value: 'aspect-square', label: 'Square (1:1)' },
    { value: 'aspect-video', label: 'Video (16:9)' },
    { value: 'aspect-4-3', label: 'Standard (4:3)' },
    { value: 'aspect-16-9', label: 'Widescreen (16:9)' }
  ];

  hoverEffects = [
    { value: 'none', label: 'None' },
    { value: 'hover-scale', label: 'Scale' },
    { value: 'hover-shadow', label: 'Shadow' },
    { value: 'hover-brightness', label: 'Brightness' }
  ];

  loadingOptions = [
    { value: 'lazy', label: 'Lazy' },
    { value: 'eager', label: 'Eager' }
  ];

  selectedHoverEffect = 'hover-scale';

  // Image event handlers
  onImageLoad(event: Event): void {
    console.log('Image loaded successfully:', event);
  }

  onImageError(event: Event): void {
    console.log('Image failed to load:', event);
  }

  // Template helpers
  getSelectedImage(): any {
    return this.selectedImage;
  }

  getImageClass(): string {
    let classes = 'sui-image';
    
    // Variant class
    if (this.selectedVariant !== 'default') {
      classes += ` ${this.selectedVariant}`;
    }
    
    // Aspect ratio class
    if (this.selectedAspectRatio !== 'auto') {
      classes += ` ${this.selectedAspectRatio}`;
    }
    
    // Hover effect class
    if (this.selectedHoverEffect !== 'none') {
      classes += ` ${this.selectedHoverEffect}`;
    }
    
    // Zoom class
    if (this.zoomEnabled) {
      classes += ` sui-image-zoom`;
    }
    
    return classes;
  }

  getImageStyle(): any {
    const style: any = {};
    
    if (this.customWidth) {
      style.width = this.customWidth;
    }
    
    if (this.customHeight) {
      style.height = this.customHeight;
    }
    
    return style;
  }

  getImageProps(): any {
    return {
      src: this.selectedImage.src,
      alt: this.selectedImage.alt,
      preview: this.previewEnabled,
      zoom: this.zoomEnabled,
      loading: this.loading,
      style: this.getImageStyle(),
      styleClass: this.getImageClass()
    };
  }

  // Sample image methods
  getSampleImages(): any[] {
    return this.sampleImages;
  }

  selectImage(image: any): void {
    this.selectedImage = image;
  }
}