import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Carousel as SuiCarousel } from '../../../../../ui-lib/src/lib/carousel/carousel';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, FormsModule, Tabs, SuiCarousel],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss'
})
export class CarouselComponent {
  activeTab = 'demo';
  
  // Demo data
  carouselItems = [
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Mountain landscape',
      title: 'Mountain Adventure',
      caption: 'Explore the breathtaking beauty of mountain landscapes and embark on unforgettable adventures.'
    },
    {
      src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      alt: 'Forest path',
      title: 'Forest Trail',
      caption: 'Walk through serene forest paths and discover the peaceful beauty of nature.'
    },
    {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      alt: 'Ocean waves',
      title: 'Ocean Waves',
      caption: 'Feel the power and tranquility of ocean waves crashing against the shore.'
    },
    {
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      alt: 'Desert sunset',
      title: 'Desert Sunset',
      caption: 'Witness the magical colors of a desert sunset painting the sky.'
    }
  ];

  simpleCarouselItems = [
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Mountain view'
    },
    {
      src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Forest path'
    },
    {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Ocean waves'
    }
  ];

  autoplayCarouselItems = [
    {
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Desert landscape',
      title: 'Desert Adventure',
      caption: 'Experience the vast beauty of desert landscapes'
    },
    {
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Forest canopy',
      title: 'Forest Canopy',
      caption: 'Look up at the towering trees and their canopy'
    },
    {
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Night sky',
      title: 'Starry Night',
      caption: 'Gaze at the stars in the clear night sky'
    }
  ];
  
  // Code visibility states
  showBasicCarouselCode = false;
  showSimpleCarouselCode = false;
  showAutoplayCarouselCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicCarousel':
        this.showBasicCarouselCode = !this.showBasicCarouselCode;
        break;
      case 'simpleCarousel':
        this.showSimpleCarouselCode = !this.showSimpleCarouselCode;
        break;
      case 'autoplayCarousel':
        this.showAutoplayCarouselCode = !this.showAutoplayCarouselCode;
        break;
    }
  }
  
  // Carousel demo methods
  onCarouselChange(event: any) {
    console.log('Carousel changed:', event);
  }
}
