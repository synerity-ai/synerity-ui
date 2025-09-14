import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Image as SuiImage } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-image',
  imports: [CommonModule, FormsModule, SuiImage, Tabs],
  templateUrl: './image.html',
  styleUrl: './image.scss'
})
export class ImagePage {
  activeTab = 'demo';
  
  // Demo data
  basicImageSrc = 'https://picsum.photos/400/300?random=1';
  basicImageAlt = 'Basic Image';
  
  previewImageSrc = 'https://picsum.photos/400/300?random=2';
  previewImageAlt = 'Preview Image';
  
  zoomImageSrc = 'https://picsum.photos/400/300?random=3';
  zoomImageAlt = 'Zoom Image';
  
  errorImageSrc = 'https://invalid-url.com/image.jpg';
  errorImageAlt = 'Error Image';
  
  // Interactive demo
  interactiveSrc = 'https://picsum.photos/400/300?random=4';
  interactiveAlt = 'Interactive Image';
  interactiveWidth = '400px';
  interactiveHeight = '300px';
  interactivePreview = false;
  interactiveZoom = false;
  interactiveLoading: 'lazy' | 'eager' = 'lazy';
  
  // Code visibility states
  showBasicImageCode = false;
  showPreviewImageCode = false;
  showZoomImageCode = false;
  showErrorImageCode = false;
  showInteractiveDemoCode = false;
  
  // Action log
  actionLog: string[] = [];
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicImage':
        this.showBasicImageCode = !this.showBasicImageCode;
        break;
      case 'previewImage':
        this.showPreviewImageCode = !this.showPreviewImageCode;
        break;
      case 'zoomImage':
        this.showZoomImageCode = !this.showZoomImageCode;
        break;
      case 'errorImage':
        this.showErrorImageCode = !this.showErrorImageCode;
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
  
  onImageLoad(event: Event) {
    this.onAction('Image loaded successfully');
  }
  
  onImageError(event: Event) {
    this.onAction('Image failed to load');
  }
  
  // Helper methods
  getImageStatus(): { status: string; color: string; icon: string } {
    return { status: 'Ready', color: 'text-green-600', icon: '🖼️' };
  }
  
  // Quick actions
  clearActionLog() {
    this.actionLog = [];
  }
  
  setRandomImage() {
    const randomId = Math.floor(Math.random() * 1000);
    this.interactiveSrc = `https://picsum.photos/400/300?random=${randomId}`;
    this.interactiveAlt = `Random Image ${randomId}`;
  }
  
  togglePreview() {
    this.interactivePreview = !this.interactivePreview;
  }
  
  toggleZoom() {
    this.interactiveZoom = !this.interactiveZoom;
  }
  
  toggleLoading() {
    this.interactiveLoading = this.interactiveLoading === 'lazy' ? 'eager' : 'lazy';
  }
  
  setRandomSize() {
    const sizes = [
      { width: '200px', height: '150px' },
      { width: '400px', height: '300px' },
      { width: '600px', height: '400px' },
      { width: '300px', height: '200px' }
    ];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    this.interactiveWidth = randomSize.width;
    this.interactiveHeight = randomSize.height;
  }
}
