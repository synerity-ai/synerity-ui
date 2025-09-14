import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Badge as SuiBadge } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-badge',
  imports: [CommonModule, FormsModule, SuiBadge, Tabs],
  templateUrl: './badge.html',
  styleUrl: './badge.scss'
})
export class Badge {
  activeTab = 'demo';
  
  // Demo data
  badgeValue = '5';
  badgeSeverity: 'info' | 'success' | 'warning' | 'danger' | 'contrast' = 'info';
  
  // Code visibility states
  showBasicBadgesCode = false;
  showBadgeSeveritiesCode = false;
  showBadgeSizesCode = false;
  showBadgeNumbersCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  // Code toggle methods
  toggleCode(section: string) {
    switch(section) {
      case 'basicBadges':
        this.showBasicBadgesCode = !this.showBasicBadgesCode;
        break;
      case 'badgeSeverities':
        this.showBadgeSeveritiesCode = !this.showBadgeSeveritiesCode;
        break;
      case 'badgeSizes':
        this.showBadgeSizesCode = !this.showBadgeSizesCode;
        break;
      case 'badgeNumbers':
        this.showBadgeNumbersCode = !this.showBadgeNumbersCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
}
