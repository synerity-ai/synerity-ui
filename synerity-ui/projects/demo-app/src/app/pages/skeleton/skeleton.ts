import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Skeleton as SuiSkeleton } from '../../../../../ui-lib/src/lib/skeleton/skeleton';

@Component({
  selector: 'app-skeleton',
  imports: [CommonModule, FormsModule, Tabs, SuiSkeleton],
  templateUrl: './skeleton.html',
  styleUrl: './skeleton.scss'
})
export class SkeletonComponent {
  activeTab = 'demo';
  
  // Demo data
  skeletonWidth = '100%';
  skeletonHeight = '1rem';
  skeletonShape = 'rectangle';
  
  // Code visibility states
  showBasicSkeletonCode = false;
  showCustomSkeletonCode = false;
  showAnimationSkeletonCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicSkeleton':
        this.showBasicSkeletonCode = !this.showBasicSkeletonCode;
        break;
      case 'customSkeleton':
        this.showCustomSkeletonCode = !this.showCustomSkeletonCode;
        break;
      case 'animationSkeleton':
        this.showAnimationSkeletonCode = !this.showAnimationSkeletonCode;
        break;
    }
  }
  
  // Skeleton demo methods
  onSkeletonClick(event: any) {
    console.log('Skeleton clicked:', event);
  }
}
