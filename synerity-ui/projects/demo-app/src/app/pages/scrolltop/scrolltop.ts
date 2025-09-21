import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { ScrollTop as SuiScrollTop } from '../../../../../ui-lib/src/lib/scroll-top/scroll-top';

@Component({
  selector: 'app-scrolltop',
  standalone: true,
  imports: [CommonModule, FormsModule, Tabs, SuiScrollTop],
  templateUrl: './scrolltop.html',
  styleUrl: './scrolltop.scss'
})
export class ScrolltopComponent {
  activeTab = 'demo';
  showBasicCode = false;
  showCustomCode = false;
  showThresholdCode = false;

  // Demo data
  longContent = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Section ${i + 1}`,
    content: `This is the content for section ${i + 1}. Scroll down to see the scroll to top button appear. The button will show when you scroll past the threshold.`
  }));

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
      case 'threshold':
        this.showThresholdCode = !this.showThresholdCode;
        break;
    }
  }
}
