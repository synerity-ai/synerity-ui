import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Galleria as SuiGalleria } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-galleria',
  imports: [CommonModule, FormsModule, SuiGalleria, Tabs],
  templateUrl: './galleria.html',
  styleUrl: './galleria.scss'
})
export class GalleriaPage {
  activeTab = 'demo';
  
  // Demo data
  basicGalleriaItems = [
    { 
      src: 'https://picsum.photos/800/600?random=1', 
      alt: 'Gallery Image 1', 
      title: 'First Gallery Image', 
      caption: 'This is the first image in the gallery',
      thumbnailSrc: 'https://picsum.photos/150/100?random=1'
    },
    { 
      src: 'https://picsum.photos/800/600?random=2', 
      alt: 'Gallery Image 2', 
      title: 'Second Gallery Image', 
      caption: 'This is the second image in the gallery',
      thumbnailSrc: 'https://picsum.photos/150/100?random=2'
    },
    { 
      src: 'https://picsum.photos/800/600?random=3', 
      alt: 'Gallery Image 3', 
      title: 'Third Gallery Image', 
      caption: 'This is the third image in the gallery',
      thumbnailSrc: 'https://picsum.photos/150/100?random=3'
    },
    { 
      src: 'https://picsum.photos/800/600?random=4', 
      alt: 'Gallery Image 4', 
      title: 'Fourth Gallery Image', 
      caption: 'This is the fourth image in the gallery',
      thumbnailSrc: 'https://picsum.photos/150/100?random=4'
    }
  ];
  
  noThumbnailsGalleriaItems = [
    { 
      src: 'https://picsum.photos/800/600?random=5', 
      alt: 'No Thumbnails 1', 
      title: 'No Thumbnails 1', 
      caption: 'Gallery without thumbnails'
    },
    { 
      src: 'https://picsum.photos/800/600?random=6', 
      alt: 'No Thumbnails 2', 
      title: 'No Thumbnails 2', 
      caption: 'Gallery without thumbnails'
    }
  ];
  
  noIndicatorsGalleriaItems = [
    { 
      src: 'https://picsum.photos/800/600?random=7', 
      alt: 'No Indicators 1', 
      title: 'No Indicators 1', 
      caption: 'Gallery without indicators',
      thumbnailSrc: 'https://picsum.photos/150/100?random=7'
    },
    { 
      src: 'https://picsum.photos/800/600?random=8', 
      alt: 'No Indicators 2', 
      title: 'No Indicators 2', 
      caption: 'Gallery without indicators',
      thumbnailSrc: 'https://picsum.photos/150/100?random=8'
    }
  ];
  
  // Interactive demo
  interactiveVisible = false;
  interactiveActiveIndex = 0;
  interactiveShowThumbnails = true;
  interactiveShowIndicators = true;
  interactiveCircular = true;
  interactiveFullScreen = false;
  interactiveItems = [
    { 
      src: 'https://picsum.photos/800/600?random=9', 
      alt: 'Interactive 1', 
      title: 'Interactive Image 1', 
      caption: 'Interactive gallery image 1',
      thumbnailSrc: 'https://picsum.photos/150/100?random=9'
    },
    { 
      src: 'https://picsum.photos/800/600?random=10', 
      alt: 'Interactive 2', 
      title: 'Interactive Image 2', 
      caption: 'Interactive gallery image 2',
      thumbnailSrc: 'https://picsum.photos/150/100?random=10'
    },
    { 
      src: 'https://picsum.photos/800/600?random=11', 
      alt: 'Interactive 3', 
      title: 'Interactive Image 3', 
      caption: 'Interactive gallery image 3',
      thumbnailSrc: 'https://picsum.photos/150/100?random=11'
    }
  ];
  
  // Code visibility states
  showBasicGalleriaCode = false;
  showNoThumbnailsGalleriaCode = false;
  showNoIndicatorsGalleriaCode = false;
  showInteractiveDemoCode = false;
  
  // Action log
  actionLog: string[] = [];
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicGalleria':
        this.showBasicGalleriaCode = !this.showBasicGalleriaCode;
        break;
      case 'noThumbnailsGalleria':
        this.showNoThumbnailsGalleriaCode = !this.showNoThumbnailsGalleriaCode;
        break;
      case 'noIndicatorsGalleria':
        this.showNoIndicatorsGalleriaCode = !this.showNoIndicatorsGalleriaCode;
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
  
  onGalleriaImageChange(index: number) {
    this.onAction(`Image changed to ${index + 1}`);
  }
  
  onGalleriaShow() {
    this.onAction('Gallery opened');
  }
  
  onGalleriaHide() {
    this.onAction('Gallery closed');
  }
  
  // Helper methods
  getGalleriaStatus(): { status: string; color: string; icon: string } {
    return { status: 'Ready', color: 'text-green-600', icon: '🖼️' };
  }
  
  // Quick actions
  clearActionLog() {
    this.actionLog = [];
  }
  
  toggleThumbnails() {
    this.interactiveShowThumbnails = !this.interactiveShowThumbnails;
  }
  
  toggleIndicators() {
    this.interactiveShowIndicators = !this.interactiveShowIndicators;
  }
  
  toggleCircular() {
    this.interactiveCircular = !this.interactiveCircular;
  }
  
  toggleFullScreen() {
    this.interactiveFullScreen = !this.interactiveFullScreen;
  }
  
  openGallery(index: number = 0) {
    this.interactiveActiveIndex = index;
    this.interactiveVisible = true;
  }
  
  closeGallery() {
    this.interactiveVisible = false;
  }
  
  addRandomItem() {
    const randomId = Math.floor(Math.random() * 1000);
    this.interactiveItems.push({
      src: `https://picsum.photos/800/600?random=${randomId}`,
      alt: `Random Gallery ${randomId}`,
      title: `Random Gallery ${randomId}`,
      caption: `Random gallery image ${randomId}`,
      thumbnailSrc: `https://picsum.photos/150/100?random=${randomId}`
    });
  }
  
  removeLastItem() {
    if (this.interactiveItems.length > 1) {
      this.interactiveItems.pop();
    }
  }
}
