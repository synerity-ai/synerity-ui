import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Galleria as SuiGalleria } from 'ui-lib';

@Component({
  selector: 'app-galleria',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiGalleria],
  templateUrl: './galleria.html',
  styleUrl: './galleria.scss'
})
export class GalleriaComponent {
  activeTab = 'demo';
  
  // Demo data
  galleriaItems = [
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      thumbnailSrc: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      alt: 'Mountain landscape',
      title: 'Mountain Adventure',
      caption: 'Explore the breathtaking beauty of mountain landscapes'
    },
    {
      src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      thumbnailSrc: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      alt: 'Forest path',
      title: 'Forest Trail',
      caption: 'Walk through serene forest paths'
    },
    {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      thumbnailSrc: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      alt: 'Ocean waves',
      title: 'Ocean Waves',
      caption: 'Feel the power of ocean waves'
    },
    {
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      thumbnailSrc: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      alt: 'Desert sunset',
      title: 'Desert Sunset',
      caption: 'Witness the magical colors of sunset'
    }
  ];

  simpleGalleriaItems = [
    {
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Forest canopy'
    },
    {
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Night sky'
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Mountain view'
    }
  ];

  thumbnailGalleriaItems = [
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      thumbnailSrc: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      alt: 'Mountain landscape',
      title: 'Mountain View'
    },
    {
      src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      thumbnailSrc: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      alt: 'Forest path',
      title: 'Forest Trail'
    },
    {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      thumbnailSrc: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      alt: 'Ocean waves',
      title: 'Ocean View'
    },
    {
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      thumbnailSrc: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      alt: 'Desert landscape',
      title: 'Desert Scene'
    }
  ];
  
  // Code visibility states
  showBasicGalleriaCode = false;
  showSimpleGalleriaCode = false;
  showThumbnailGalleriaCode = false;
  
  onTabChange(tab: string): void {
    this.activeTab = tab;
  }
  
  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicGalleriaCode = !this.showBasicGalleriaCode;
        break;
      case 'simple':
        this.showSimpleGalleriaCode = !this.showSimpleGalleriaCode;
        break;
      case 'thumbnail':
        this.showThumbnailGalleriaCode = !this.showThumbnailGalleriaCode;
        break;
    }
  }

  // Galleria control methods
  showGalleria(index: number = 0) {
    // This will be handled by the component template
  }
  
  // Galleria demo methods
  onGalleriaChange(event: any) {
    console.log('Galleria changed:', event);
  }
}
