import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Carousel } from '@synerity/ui';

@Component({
  selector: 'app-su-carousel-demo',
  imports: [CommonModule, FormsModule, Carousel],
  templateUrl: './su-carousel-demo.html',
  styleUrl: './su-carousel-demo.scss'
})
export class SuCarouselDemo {
  // Product showcase images
  productImages = [
    {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=400&fit=crop',
      alt: 'Headphones',
      title: 'Premium Headphones',
      caption: 'High-quality wireless headphones with noise cancellation'
    },
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=400&fit=crop',
      alt: 'Smartwatch',
      title: 'Smart Watch',
      caption: 'Advanced fitness tracking and health monitoring'
    },
    {
      src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=400&fit=crop',
      alt: 'Running Shoes',
      title: 'Running Shoes',
      caption: 'Lightweight and comfortable for all-day wear'
    },
    {
      src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=400&fit=crop',
      alt: 'Camera',
      title: 'Professional Camera',
      caption: 'Capture stunning photos with professional quality'
    }
  ];

  // Travel destinations
  travelImages = [
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
      alt: 'Mountain Landscape',
      title: 'Mountain Adventure',
      caption: 'Explore breathtaking mountain ranges'
    },
    {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop',
      alt: 'Beach Scene',
      title: 'Tropical Paradise',
      caption: 'Relax on pristine beaches with crystal clear waters'
    },
    {
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop',
      alt: 'Forest Path',
      title: 'Forest Retreat',
      caption: 'Discover peaceful forest trails and wildlife'
    }
  ];

  // Simple images without captions
  simpleImages = [
    {
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
      alt: 'Nature 1'
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
      alt: 'Nature 2'
    },
    {
      src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=400&fit=crop',
      alt: 'Nature 3'
    }
  ];

  // Carousel configurations
  basicConfig = {
    activeIndex: 0,
    circular: true,
    autoplayInterval: 0,
    showIndicators: true,
    showNavigators: true
  };

  autoplayConfig = {
    activeIndex: 0,
    circular: true,
    autoplayInterval: 3000,
    showIndicators: true,
    showNavigators: true
  };

  noNavigationConfig = {
    activeIndex: 0,
    circular: true,
    autoplayInterval: 0,
    showIndicators: true,
    showNavigators: false
  };

  currentIndex = 0;
  selectedCarousel = 'basic';

  onPageChange(index: number): void {
    console.log('Page changed to:', index);
    this.currentIndex = index;
  }

  onCarouselChange(carousel: string): void {
    this.selectedCarousel = carousel;
  }
}