import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Galleria } from '@synerity/ui';

@Component({
  selector: 'app-su-galleria-demo',
  imports: [CommonModule, FormsModule, Galleria],
  templateUrl: './su-galleria-demo.html',
  styleUrl: './su-galleria-demo.scss'
})
export class SuGalleriaDemo {
  // High-resolution gallery images
  galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      alt: 'Mountain Landscape',
      title: 'Mountain Adventure',
      caption: 'Explore breathtaking mountain ranges and scenic vistas',
      thumbnailSrc: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop'
    },
    {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop',
      alt: 'Beach Scene',
      title: 'Tropical Paradise',
      caption: 'Relax on pristine beaches with crystal clear waters',
      thumbnailSrc: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=200&fit=crop'
    },
    {
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop',
      alt: 'Forest Path',
      title: 'Forest Retreat',
      caption: 'Discover peaceful forest trails and wildlife',
      thumbnailSrc: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&h=200&fit=crop'
    },
    {
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
      alt: 'Lake View',
      title: 'Serene Lake',
      caption: 'Peaceful lake views with perfect reflections',
      thumbnailSrc: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=200&fit=crop'
    },
    {
      src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&h=800&fit=crop',
      alt: 'Desert Sunset',
      title: 'Desert Sunset',
      caption: 'Stunning desert landscapes at golden hour',
      thumbnailSrc: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=200&h=200&fit=crop'
    }
  ];

  // Product showcase images
  productImages = [
    {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=800&fit=crop',
      alt: 'Headphones',
      title: 'Premium Headphones',
      caption: 'High-quality wireless headphones with noise cancellation',
      thumbnailSrc: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop'
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=800&fit=crop',
      alt: 'Smartwatch',
      title: 'Smart Watch',
      caption: 'Advanced fitness tracking and health monitoring',
      thumbnailSrc: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop'
    },
    {
      src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=800&fit=crop',
      alt: 'Running Shoes',
      title: 'Running Shoes',
      caption: 'Lightweight and comfortable for all-day wear',
      thumbnailSrc: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop'
    }
  ];

  // Simple images without thumbnails
  simpleImages = [
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      alt: 'Nature 1',
      title: 'Nature Scene 1'
    },
    {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop',
      alt: 'Nature 2',
      title: 'Nature Scene 2'
    },
    {
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop',
      alt: 'Nature 3',
      title: 'Nature Scene 3'
    }
  ];

  // Gallery state
  galleryVisible = false;
  currentImageIndex = 0;
  selectedGallery = 'gallery';

  // Configuration options
  showThumbnails = true;
  showIndicators = true;
  circular = true;
  fullScreen = false;

  showGallery(index: number = 0): void {
    this.currentImageIndex = index;
    this.galleryVisible = true;
    console.log('Gallery opened at index:', index);
  }

  hideGallery(): void {
    this.galleryVisible = false;
    console.log('Gallery closed');
  }

  onImageChange(index: number): void {
    console.log('Image changed to:', index);
    this.currentImageIndex = index;
  }

  onGalleryShow(): void {
    console.log('Gallery shown');
  }

  onGalleryHide(): void {
    console.log('Gallery hidden');
  }

  onGalleryChange(gallery: string): void {
    this.selectedGallery = gallery;
  }

  getSelectedImages(): any[] {
    switch (this.selectedGallery) {
      case 'products':
        return this.productImages;
      case 'simple':
        return this.simpleImages;
      default:
        return this.galleryImages;
    }
  }
}