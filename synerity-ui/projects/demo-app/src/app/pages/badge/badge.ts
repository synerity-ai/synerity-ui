import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Badge as SuiBadge } from 'ui-lib';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiBadge],
  templateUrl: './badge.html',
  styleUrl: './badge.scss'
})
export class BadgeComponent {
  activeTab = 'demo';
  
  // Demo data
  badgeCount = 5;
  badgeText = 'New';
  
  // Code visibility states
  showBasicBadgeCode = false;
  showBadgeVariantsCode = false;
  showBadgeSizesCode = false;
  
  onTabChange(tab: string): void {
    this.activeTab = tab;
  }
  
  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicBadgeCode = !this.showBasicBadgeCode;
        break;
      case 'variants':
        this.showBadgeVariantsCode = !this.showBadgeVariantsCode;
        break;
      case 'sizes':
        this.showBadgeSizesCode = !this.showBadgeSizesCode;
        break;
    }
  }
}