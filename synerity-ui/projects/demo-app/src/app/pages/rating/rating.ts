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
export class Rating {
  activeTab = 'demo';
  
  // Demo data
  basicRating = 3;
  maxRating = 4;
  readonlyRating = 5;
  disabledRating = 2;
  clearableRating = 0;
  interactiveRating = 0;
  
  // Code visibility states
  showBasicUsageCode = false;
  showRatingFeaturesCode = false;
  showRatingStatesCode = false;
  showRatingSizesCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  onRatingChange(value: number, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Code toggle methods
  toggleCode(section: string) {
    switch(section) {
      case 'basicUsage': this.showBasicUsageCode = !this.showBasicUsageCode; break;
      case 'ratingFeatures': this.showRatingFeaturesCode = !this.showRatingFeaturesCode; break;
      case 'ratingStates': this.showRatingStatesCode = !this.showRatingStatesCode; break;
      case 'ratingSizes': this.showRatingSizesCode = !this.showRatingSizesCode; break;
      case 'interactiveDemo': this.showInteractiveDemoCode = !this.showInteractiveDemoCode; break;
    }
  }
}
