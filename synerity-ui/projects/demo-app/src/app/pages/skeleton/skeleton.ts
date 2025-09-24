import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Skeleton as SuiSkeleton } from 'ui-lib';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [CommonModule, FormsModule, AppTabs, SuiSkeleton],
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
  showShapeSkeletonCode = false;
  showAnimationSkeletonCode = false;
  showLayoutSkeletonCode = false;
  
  onTabChange(tab: string): void {
    this.activeTab = tab;
  }
  
  toggleCode(example: string): void {
    switch (example) {
      case 'basic':
        this.showBasicSkeletonCode = !this.showBasicSkeletonCode;
        break;
      case 'shape':
        this.showShapeSkeletonCode = !this.showShapeSkeletonCode;
        break;
      case 'animation':
        this.showAnimationSkeletonCode = !this.showAnimationSkeletonCode;
        break;
      case 'layout':
        this.showLayoutSkeletonCode = !this.showLayoutSkeletonCode;
        break;
    }
  }
  
  // Skeleton demo methods
  onSkeletonClick(event: any): void {
    console.log('Skeleton clicked:', event);
  }
}
