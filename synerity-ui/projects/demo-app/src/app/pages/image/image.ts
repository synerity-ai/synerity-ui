import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Image as SuiImage } from '../../../../../ui-lib/src/lib/image/image';

@Component({
  selector: 'app-image',
  imports: [CommonModule, FormsModule, Tabs, SuiImage],
  templateUrl: './image.html',
  styleUrl: './image.scss'
})
export class ImageComponent {
  activeTab = 'demo';
  
  // Demo data
  imageSrc = 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Sample+Image';
  imageAlt = 'Sample Image';
  
  // Code visibility states
  showBasicImageCode = false;
  showPreviewImageCode = false;
  showCustomImageCode = false;
  
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
      case 'customImage':
        this.showCustomImageCode = !this.showCustomImageCode;
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
