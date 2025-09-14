import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Rating as SuiRating } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-rating',
  imports: [CommonModule, FormsModule, SuiRating, Tabs],
  templateUrl: './rating.html',
  styleUrl: './rating.scss'
})
export class RatingPage {
  activeTab = 'demo';
  
  // Demo data
  basicRating = 3;
  maxRating = 4;
  readonlyRating = 5;
  disabledRating = 2;
  clearableRating = 0;
  interactiveRating = 0;
  interactiveMax = 5;
  interactiveAllowClear = true;
  interactiveDisabled = false;
  interactiveReadonly = false;
  
  // Code visibility states
  showBasicRatingCode = false;
  showMaxRatingCode = false;
  showReadonlyRatingCode = false;
  showDisabledRatingCode = false;
  showClearableRatingCode = false;
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
      case 'readonlyRating':
        this.showReadonlyRatingCode = !this.showReadonlyRatingCode;
        break;
      case 'disabledRating':
        this.showDisabledRatingCode = !this.showDisabledRatingCode;
        break;
      case 'clearableRating':
        this.showClearableRatingCode = !this.showClearableRatingCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onRatingChange(value: number, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Helper methods
  getRatingText(rating: number, max: number): string {
    if (rating === 0) return 'No rating';
    if (rating === 1) return 'Poor';
    if (rating === 2) return 'Fair';
    if (rating === 3) return 'Good';
    if (rating === 4) return 'Very Good';
    if (rating === 5) return 'Excellent';
    if (rating > 5) return 'Outstanding';
    return 'Rated';
  }
  
  getRatingColor(rating: number, max: number): string {
    const percentage = (rating / max) * 100;
    if (percentage <= 20) return 'text-red-600';
    if (percentage <= 40) return 'text-orange-600';
    if (percentage <= 60) return 'text-yellow-600';
    if (percentage <= 80) return 'text-blue-600';
    return 'text-green-600';
  }
  
  // Quick rating setters
  setRating(value: number) {
    this.interactiveRating = value;
  }
  
  // Preset ratings
  setPoor() { this.interactiveRating = 1; }
  setFair() { this.interactiveRating = 2; }
  setGood() { this.interactiveRating = 3; }
  setVeryGood() { this.interactiveRating = 4; }
  setExcellent() { this.interactiveRating = 5; }
  clearRating() { this.interactiveRating = 0; }
}
