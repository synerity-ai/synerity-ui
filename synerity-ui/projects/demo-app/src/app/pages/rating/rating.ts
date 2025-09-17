import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Rating as SuiRating } from '../../../../../ui-lib/src/lib/rating/rating';

@Component({
  selector: 'app-rating',
  imports: [CommonModule, FormsModule, Tabs, SuiRating],
  templateUrl: './rating.html',
  styleUrl: './rating.scss'
})
export class Rating {
  activeTab = 'demo';
  
  // Demo data
  basicRating = 3;
  maxRating = 5;
  disabledRating = 4;
  readonlyRating = 5;
  noClearRating = 2;
  customMaxRating = 3;
  
  // Interactive demo data
  interactiveValue = 3;
  interactiveMax = 5;
  interactiveDisabled = false;
  interactiveReadonly = false;
  interactiveAllowClear = true;
  
  // Code visibility states
  showBasicRatingCode = false;
  showMaxRatingCode = false;
  showRatingStatesCode = false;
  showCustomMaxRatingCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicRating':
        this.showBasicRatingCode = !this.showBasicRatingCode;
        break;
      case 'maxRating':
        this.showMaxRatingCode = !this.showMaxRatingCode;
        break;
      case 'ratingStates':
        this.showRatingStatesCode = !this.showRatingStatesCode;
        break;
      case 'customMaxRating':
        this.showCustomMaxRatingCode = !this.showCustomMaxRatingCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  // Rating demo methods
  onRatingChange(value: number) {
    console.log('Rating changed:', value);
  }
  
  onInteractiveRatingChange(value: number) {
    this.interactiveValue = value;
    console.log('Interactive rating changed:', value);
  }
  
  onRatingFocus() {
    console.log('Rating focused');
  }
  
  onRatingBlur() {
    console.log('Rating blurred');
  }
  
  // Utility methods
  formatRatingValue(value: number): string {
    return value.toString();
  }
  
  isValidRatingValue(value: number): boolean {
    return !isNaN(value) && value >= 0 && value <= this.interactiveMax;
  }
  
  getRatingStatus(value: number): string {
    if (isNaN(value)) return 'Invalid rating';
    if (value < 0) return 'Below minimum';
    if (value > this.interactiveMax) return 'Above maximum';
    return 'Valid rating';
  }
  
  // Helper methods for interactive demo
  setMaxValue(value: number) {
    this.interactiveMax = value;
  }
  
  resetRating() {
    this.interactiveValue = 0;
    this.interactiveMax = 5;
    this.interactiveDisabled = false;
    this.interactiveReadonly = false;
    this.interactiveAllowClear = true;
  }
}