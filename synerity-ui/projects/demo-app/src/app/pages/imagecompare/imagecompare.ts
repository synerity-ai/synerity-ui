import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageCompare as SuiImageCompare } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-imagecompare',
  imports: [CommonModule, FormsModule, SuiImageCompare, Tabs],
  templateUrl: './imagecompare.html',
  styleUrl: './imagecompare.scss'
})
export class ImageComparePage {
  activeTab = 'demo';
  
  // Demo data
  basicBeforeSrc = 'https://picsum.photos/600/400?random=1';
  basicAfterSrc = 'https://picsum.photos/600/400?random=2';
  basicBeforeAlt = 'Before Image';
  basicAfterAlt = 'After Image';
  
  horizontalBeforeSrc = 'https://picsum.photos/600/400?random=3';
  horizontalAfterSrc = 'https://picsum.photos/600/400?random=4';
  horizontalBeforeAlt = 'Original';
  horizontalAfterAlt = 'Enhanced';
  
  verticalBeforeSrc = 'https://picsum.photos/400/600?random=5';
  verticalAfterSrc = 'https://picsum.photos/400/600?random=6';
  verticalBeforeAlt = 'Before';
  verticalAfterAlt = 'After';
  
  customBeforeSrc = 'https://picsum.photos/500/350?random=7';
  customAfterSrc = 'https://picsum.photos/500/350?random=8';
  customBeforeAlt = 'Original Design';
  customAfterAlt = 'Updated Design';
  
  // Interactive demo
  interactiveBeforeSrc = 'https://picsum.photos/600/400?random=9';
  interactiveAfterSrc = 'https://picsum.photos/600/400?random=10';
  interactiveBeforeAlt = 'Interactive Before';
  interactiveAfterAlt = 'Interactive After';
  interactiveOrientation: 'horizontal' | 'vertical' = 'horizontal';
  interactiveSliderPosition = 50;
  
  // Code visibility states
  showBasicImageCompareCode = false;
  showHorizontalImageCompareCode = false;
  showVerticalImageCompareCode = false;
  showCustomImageCompareCode = false;
  showInteractiveDemoCode = false;
  
  // Action log
  actionLog: string[] = [];
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicImageCompare':
        this.showBasicImageCompareCode = !this.showBasicImageCompareCode;
        break;
      case 'horizontalImageCompare':
        this.showHorizontalImageCompareCode = !this.showHorizontalImageCompareCode;
        break;
      case 'verticalImageCompare':
        this.showVerticalImageCompareCode = !this.showVerticalImageCompareCode;
        break;
      case 'customImageCompare':
        this.showCustomImageCompareCode = !this.showCustomImageCompareCode;
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
  
  onSliderMove() {
    this.onAction(`Slider moved to ${Math.round(this.interactiveSliderPosition)}%`);
  }
  
  // Helper methods
  getImageCompareStatus(): { status: string; color: string; icon: string } {
    return { status: 'Ready', color: 'text-green-600', icon: '🔄' };
  }
  
  // Quick actions
  clearActionLog() {
    this.actionLog = [];
  }
  
  toggleOrientation() {
    this.interactiveOrientation = this.interactiveOrientation === 'horizontal' ? 'vertical' : 'horizontal';
    this.onAction(`Orientation changed to ${this.interactiveOrientation}`);
  }
  
  resetSlider() {
    this.interactiveSliderPosition = 50;
    this.onAction('Slider reset to center');
  }
  
  setRandomImages() {
    const randomId1 = Math.floor(Math.random() * 1000);
    const randomId2 = Math.floor(Math.random() * 1000);
    this.interactiveBeforeSrc = `https://picsum.photos/600/400?random=${randomId1}`;
    this.interactiveAfterSrc = `https://picsum.photos/600/400?random=${randomId2}`;
    this.onAction('Random images loaded');
  }
  
  setSliderPosition(position: number) {
    this.interactiveSliderPosition = position;
    this.onAction(`Slider set to ${position}%`);
  }
}
