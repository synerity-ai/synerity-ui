import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Image as SuiImage } from 'ui-lib';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiImage],
  templateUrl: './image.html',
  styleUrl: './image.scss'
})
export class ImageComponent {
  activeTab = 'demo';
  
  // Demo data
  imageSrc = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  imageAlt = 'Mountain landscape';
  
  previewImageSrc = 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  previewImageAlt = 'Forest path';
  
  zoomImageSrc = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  zoomImageAlt = 'Ocean waves';
  
  errorImageSrc = 'https://invalid-url.com/image.jpg';
  errorImageAlt = 'Broken image';
  
  // Code visibility states
  showBasicImageCode = false;
  showPreviewImageCode = false;
  showZoomImageCode = false;
  showErrorImageCode = false;
  
  onTabChange(tab: string): void {
    this.activeTab = tab;
  }
  
  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicImageCode = !this.showBasicImageCode;
        break;
      case 'preview':
        this.showPreviewImageCode = !this.showPreviewImageCode;
        break;
      case 'zoom':
        this.showZoomImageCode = !this.showZoomImageCode;
        break;
      case 'error':
        this.showErrorImageCode = !this.showErrorImageCode;
        break;
    }
  }
  
  // Image demo methods
  onImageError(event: any) {
    console.log('Image error:', event);
  }
  
  onImageLoad(event: any) {
    console.log('Image loaded:', event);
  }
}
