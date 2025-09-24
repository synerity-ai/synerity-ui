import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { ImageCompare as SuiImageCompare } from 'ui-lib';

@Component({
  selector: 'app-imagecompare',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiImageCompare],
  templateUrl: './imagecompare.html',
  styleUrl: './imagecompare.scss'
})
export class ImageCompareComponent {
  activeTab = 'demo';
  
  // Demo data
  beforeImageSrc = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  afterImageSrc = 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  beforeImageAlt = 'Before - Mountain landscape';
  afterImageAlt = 'After - Forest path';
  
  // Code visibility states
  showBasicImageCompareCode = false;
  showCustomImageCompareCode = false;
  showVerticalImageCompareCode = false;
  
  onTabChange(tab: string): void {
    this.activeTab = tab;
  }
  
  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicImageCompareCode = !this.showBasicImageCompareCode;
        break;
      case 'custom':
        this.showCustomImageCompareCode = !this.showCustomImageCompareCode;
        break;
      case 'vertical':
        this.showVerticalImageCompareCode = !this.showVerticalImageCompareCode;
        break;
    }
  }
  
  // Image compare demo methods
  onImageCompareChange(event: any) {
    console.log('Image compare changed:', event);
  }
}