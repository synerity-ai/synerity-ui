import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Carousel as SuiCarousel } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, FormsModule, SuiCarousel, Tabs],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss'
})
export class CarouselPage {
  activeTab = 'demo';
  
  // Demo data
  basicCarouselItems = [
    { src: 'https://picsum.photos/800/400?random=1', alt: 'Image 1', title: 'First Image', caption: 'This is the first image in the carousel' },
    { src: 'https://picsum.photos/800/400?random=2', alt: 'Image 2', title: 'Second Image', caption: 'This is the second image in the carousel' },
    { src: 'https://picsum.photos/800/400?random=3', alt: 'Image 3', title: 'Third Image', caption: 'This is the third image in the carousel' },
    { src: 'https://picsum.photos/800/400?random=4', alt: 'Image 4', title: 'Fourth Image', caption: 'This is the fourth image in the carousel' }
  ];
  
  autoplayCarouselItems = [
    { src: 'https://picsum.photos/800/400?random=5', alt: 'Auto Image 1', title: 'Auto Image 1', caption: 'Autoplay carousel image 1' },
    { src: 'https://picsum.photos/800/400?random=6', alt: 'Auto Image 2', title: 'Auto Image 2', caption: 'Autoplay carousel image 2' },
    { src: 'https://picsum.photos/800/400?random=7', alt: 'Auto Image 3', title: 'Auto Image 3', caption: 'Autoplay carousel image 3' }
  ];
  
  noIndicatorsCarouselItems = [
    { src: 'https://picsum.photos/800/400?random=8', alt: 'No Indicators 1', title: 'No Indicators 1', caption: 'Carousel without indicators' },
    { src: 'https://picsum.photos/800/400?random=9', alt: 'No Indicators 2', title: 'No Indicators 2', caption: 'Carousel without indicators' }
  ];
  
  noNavigatorsCarouselItems = [
    { src: 'https://picsum.photos/800/400?random=10', alt: 'No Navigators 1', title: 'No Navigators 1', caption: 'Carousel without navigators' },
    { src: 'https://picsum.photos/800/400?random=11', alt: 'No Navigators 2', title: 'No Navigators 2', caption: 'Carousel without navigators' }
  ];
  
  // Interactive demo
  interactiveActiveIndex = 0;
  interactiveCircular = true;
  interactiveAutoplayInterval = 0;
  interactiveShowIndicators = true;
  interactiveShowNavigators = true;
  interactiveItems = [
    { src: 'https://picsum.photos/800/400?random=12', alt: 'Interactive 1', title: 'Interactive Image 1', caption: 'Interactive carousel image 1' },
    { src: 'https://picsum.photos/800/400?random=13', alt: 'Interactive 2', title: 'Interactive Image 2', caption: 'Interactive carousel image 2' },
    { src: 'https://picsum.photos/800/400?random=14', alt: 'Interactive 3', title: 'Interactive Image 3', caption: 'Interactive carousel image 3' }
  ];
  
  // Code visibility states
  showBasicCarouselCode = false;
  showAutoplayCarouselCode = false;
  showNoIndicatorsCarouselCode = false;
  showNoNavigatorsCarouselCode = false;
  showInteractiveDemoCode = false;
  
  // Action log
  actionLog: string[] = [];
  
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
      case 'noIndicatorsCarousel':
        this.showNoIndicatorsCarouselCode = !this.showNoIndicatorsCarouselCode;
        break;
      case 'noNavigatorsCarousel':
        this.showNoNavigatorsCarouselCode = !this.showNoNavigatorsCarouselCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onAction(action: string) {
    this.actionLog.unshift(`${new Date().toLocaleTimeString()}: ${action}`);
    if (this.actionLog.length > 10) {
      this.actionLog = this.actionLog.slice(0, 10);
    }
  }
  
  onCarouselPageChange(index: number) {
    this.onAction(`Page changed to ${index + 1}`);
  }
  
  // Helper methods
  getCarouselStatus(): { status: string; color: string; icon: string } {
    return { status: 'Ready', color: 'text-green-600', icon: '🎠' };
  }
  
  // Quick actions
  clearActionLog() {
    this.actionLog = [];
  }
  
  toggleCircular() {
    this.interactiveCircular = !this.interactiveCircular;
  }
  
  toggleAutoplay() {
    this.interactiveAutoplayInterval = this.interactiveAutoplayInterval > 0 ? 0 : 3000;
  }
  
  toggleIndicators() {
    this.interactiveShowIndicators = !this.interactiveShowIndicators;
  }
  
  toggleNavigators() {
    this.interactiveShowNavigators = !this.interactiveShowNavigators;
  }
  
  addRandomItem() {
    const randomId = Math.floor(Math.random() * 1000);
    this.interactiveItems.push({
      src: `https://picsum.photos/800/400?random=${randomId}`,
      alt: `Random Image ${randomId}`,
      title: `Random Image ${randomId}`,
      caption: `Random carousel image ${randomId}`
    });
  }
  
  removeLastItem() {
    if (this.interactiveItems.length > 1) {
      this.interactiveItems.pop();
    }
  }
}
