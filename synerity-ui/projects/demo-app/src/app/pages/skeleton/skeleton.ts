import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Skeleton } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-skeleton-page',
  standalone: true,
  imports: [CommonModule, FormsModule, Skeleton, Tabs],
  templateUrl: './skeleton.html',
  styleUrl: './skeleton.scss'
})
export class SkeletonPage {
  activeTab = 'demo';

  // Basic Skeleton
  basicWidth = '200px';
  basicHeight = '20px';
  basicBorderRadius = '4px';
  basicAnimation = true;

  // Custom Skeleton
  customWidth = '200px';
  customHeight = '40px';
  customBorderRadius = '8px';
  customAnimation = true;
  customStyle = { backgroundColor: '#f3f4f6' };
  customStyleClass = 'custom-skeleton';

  // Multiple Skeletons
  skeletons = [
    { label: 'Text Line', width: '100%', height: '16px', borderRadius: '4px', animation: true },
    { label: 'Avatar', width: '40px', height: '40px', borderRadius: '50%', animation: true },
    { label: 'Button', width: '80px', height: '32px', borderRadius: '6px', animation: true },
    { label: 'Card', width: '200px', height: '120px', borderRadius: '8px', animation: true }
  ];

  // Interactive Demo
  interactiveWidth = '180px';
  interactiveHeight = '25px';
  interactiveBorderRadius = '6px';
  interactiveAnimation = true;
  interactiveStyle = { backgroundColor: '#e5e7eb' };
  interactiveStyleClass = 'interactive-skeleton';

  // Code visibility
  showBasicSkeletonCode = false;
  showCustomSkeletonCode = false;
  showMultipleSkeletonsCode = false;
  showInteractiveDemoCode = false;

  // Action log
  actionLog: string[] = [];

  onTabChange(tabId: string) {
    this.activeTab = tabId;
  }

  toggleCode(example: string) {
    switch (example) {
      case 'basicSkeleton':
        this.showBasicSkeletonCode = !this.showBasicSkeletonCode;
        break;
      case 'customSkeleton':
        this.showCustomSkeletonCode = !this.showCustomSkeletonCode;
        break;
      case 'multipleSkeletons':
        this.showMultipleSkeletonsCode = !this.showMultipleSkeletonsCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }

  // Interactive Demo methods
  setRandomSize() {
    const widths = ['100px', '150px', '200px', '250px', '300px'];
    const heights = ['16px', '20px', '24px', '28px', '32px'];
    this.interactiveWidth = widths[Math.floor(Math.random() * widths.length)];
    this.interactiveHeight = heights[Math.floor(Math.random() * heights.length)];
    this.addToActionLog(`Size set to ${this.interactiveWidth} × ${this.interactiveHeight}`);
  }

  setRandomBorderRadius() {
    const radiuses = ['0px', '4px', '8px', '12px', '16px', '50%'];
    this.interactiveBorderRadius = radiuses[Math.floor(Math.random() * radiuses.length)];
    this.addToActionLog(`Border radius set to ${this.interactiveBorderRadius}`);
  }

  toggleAnimation() {
    this.interactiveAnimation = !this.interactiveAnimation;
    this.addToActionLog(`Animation ${this.interactiveAnimation ? 'enabled' : 'disabled'}`);
  }

  setRandomStyle() {
    const colors = ['#f3f4f6', '#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.interactiveStyle = { backgroundColor: randomColor };
    this.addToActionLog(`Style updated with color ${randomColor}`);
  }

  toggleAllAnimations() {
    const allAnimated = this.skeletons.every(s => s.animation);
    this.skeletons.forEach(s => {
      s.animation = !allAnimated;
    });
    this.addToActionLog(`All animations ${allAnimated ? 'disabled' : 'enabled'}`);
  }

  addToActionLog(action: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.actionLog.unshift(`[${timestamp}] ${action}`);
    if (this.actionLog.length > 10) {
      this.actionLog.pop();
    }
  }

  clearActionLog() {
    this.actionLog = [];
  }
}