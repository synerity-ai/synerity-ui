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
      header: 'Slide 1',
      content: 'This is the first slide content with some description.',
      image: 'https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Slide+1',
      src: 'https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Slide+1'
    },
    {
      header: 'Slide 2',
      content: 'This is the second slide content with some description.',
      image: 'https://via.placeholder.com/800x400/10B981/FFFFFF?text=Slide+2',
      src: 'https://via.placeholder.com/800x400/10B981/FFFFFF?text=Slide+2'
    },
    {
      header: 'Slide 3',
      content: 'This is the third slide content with some description.',
      image: 'https://via.placeholder.com/800x400/F59E0B/FFFFFF?text=Slide+3',
      src: 'https://via.placeholder.com/800x400/F59E0B/FFFFFF?text=Slide+3'
    }
  ];
  
  // Code visibility states
  showBasicCarouselCode = false;
  showAutoplayCarouselCode = false;
  showCustomCarouselCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicCarousel':
        this.showBasicCarouselCode = !this.showBasicCarouselCode;
        break;
      case 'autoplayCarousel':
        this.showAutoplayCarouselCode = !this.showAutoplayCarouselCode;
        break;
      case 'customCarousel':
        this.showCustomCarouselCode = !this.showCustomCarouselCode;
        break;
    }
  }
  
  // Carousel demo methods
  onCarouselChange(event: any) {
    console.log('Carousel changed:', event);
  }
}
