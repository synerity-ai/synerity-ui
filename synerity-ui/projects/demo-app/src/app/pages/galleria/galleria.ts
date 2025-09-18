import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Galleria as SuiGalleria } from '../../../../../ui-lib/src/lib/galleria/galleria';

@Component({
  selector: 'app-galleria',
  imports: [CommonModule, FormsModule, Tabs, SuiGalleria],
  templateUrl: './galleria.html',
  styleUrl: './galleria.scss'
})
export class GalleriaComponent {
  activeTab = 'demo';
  
  // Demo data
  galleriaItems = [
    {
      src: 'https://via.placeholder.com/800x600/3B82F6/FFFFFF?text=Image+1',
      thumbnailImageSrc: 'https://via.placeholder.com/150x100/3B82F6/FFFFFF?text=1',
      alt: 'Image 1',
      title: 'First Image'
    },
    {
      src: 'https://via.placeholder.com/800x600/10B981/FFFFFF?text=Image+2',
      thumbnailImageSrc: 'https://via.placeholder.com/150x100/10B981/FFFFFF?text=2',
      alt: 'Image 2',
      title: 'Second Image'
    },
    {
      src: 'https://via.placeholder.com/800x600/F59E0B/FFFFFF?text=Image+3',
      thumbnailImageSrc: 'https://via.placeholder.com/150x100/F59E0B/FFFFFF?text=3',
      alt: 'Image 3',
      title: 'Third Image'
    }
  ];
  
  // Code visibility states
  showBasicGalleriaCode = false;
  showThumbnailGalleriaCode = false;
  showCustomGalleriaCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicGalleria':
        this.showBasicGalleriaCode = !this.showBasicGalleriaCode;
        break;
      case 'thumbnailGalleria':
        this.showThumbnailGalleriaCode = !this.showThumbnailGalleriaCode;
        break;
      case 'customGalleria':
        this.showCustomGalleriaCode = !this.showCustomGalleriaCode;
        break;
    }
  }
  
  // Galleria demo methods
  onGalleriaChange(event: any) {
    console.log('Galleria changed:', event);
  }
}
