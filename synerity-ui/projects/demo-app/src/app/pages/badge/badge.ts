import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Badge as SuiBadge } from '../../../../../ui-lib/src/lib/badge/badge';

@Component({
  selector: 'app-badge',
  imports: [CommonModule, FormsModule, Tabs, SuiBadge],
  templateUrl: './badge.html',
  styleUrl: './badge.scss'
})
export class Badge {
  activeTab = 'demo';
  
  // Demo data
  badgeCount = 5;
  badgeText = 'New';
  
  // Code visibility states
  showBasicBadgeCode = false;
  showBadgeVariantsCode = false;
  showBadgePositionsCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicBadge':
        this.showBasicBadgeCode = !this.showBasicBadgeCode;
        break;
      case 'badgeVariants':
        this.showBadgeVariantsCode = !this.showBadgeVariantsCode;
        break;
      case 'badgePositions':
        this.showBadgePositionsCode = !this.showBadgePositionsCode;
        break;
    }
  }
}
