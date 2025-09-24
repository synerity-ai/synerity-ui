import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { ScrollTop as SuiScrollTop } from 'ui-lib';

@Component({
  selector: 'app-scrolltop',
  standalone: true,
  imports: [CommonModule, FormsModule, AppTabs, SuiScrollTop],
  templateUrl: './scrolltop.html',
  styleUrl: './scrolltop.scss'
})
export class ScrolltopComponent {
  activeTab = 'demo';

  // Code visibility states
  showBasicScrollTopCode = false;
  showCustomScrollTopCode = false;
  showThresholdScrollTopCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicScrollTopCode = !this.showBasicScrollTopCode;
        break;
      case 'custom':
        this.showCustomScrollTopCode = !this.showCustomScrollTopCode;
        break;
      case 'threshold':
        this.showThresholdScrollTopCode = !this.showThresholdScrollTopCode;
        break;
    }
  }
}
