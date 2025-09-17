import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { ScrollPanel as SuiScrollPanel } from '../../../../../ui-lib/src/lib/scroll-panel/scroll-panel';

@Component({
  selector: 'app-scrollpanel',
  imports: [CommonModule, FormsModule, Tabs, SuiScrollPanel],
  templateUrl: './scrollpanel.html',
  styleUrl: './scrollpanel.scss'
})
export class ScrollPanel {
  activeTab = 'demo';
  
  // Demo data
  longContent = Array.from({ length: 50 }, (_, i) => `Content item ${i + 1}`).join('\n\n');
  
  // Code visibility states
  showBasicScrollPanelCode = false;
  showCustomScrollPanelCode = false;
  showHorizontalScrollPanelCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicScrollPanel':
        this.showBasicScrollPanelCode = !this.showBasicScrollPanelCode;
        break;
      case 'customScrollPanel':
        this.showCustomScrollPanelCode = !this.showCustomScrollPanelCode;
        break;
      case 'horizontalScrollPanel':
        this.showHorizontalScrollPanelCode = !this.showHorizontalScrollPanelCode;
        break;
    }
  }
}
