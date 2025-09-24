import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { AnimateOnScroll as SuiAnimateOnScroll } from 'ui-lib';

@Component({
  selector: 'app-animateonscroll',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiAnimateOnScroll],
  templateUrl: './animateonscroll.html',
  styleUrl: './animateonscroll.scss'
})
export class AnimateOnScrollComponent {
  activeTab = 'demo';
  
  // Demo data
  demoItems = [
    { id: 1, title: 'Card 1', content: 'This card will animate when it comes into view.' },
    { id: 2, title: 'Card 2', content: 'Scroll down to see the animation effect.' },
    { id: 3, title: 'Card 3', content: 'Each card has a different animation delay.' },
    { id: 4, title: 'Card 4', content: 'The animation triggers based on scroll position.' },
    { id: 5, title: 'Card 5', content: 'You can customize the animation type and timing.' },
    { id: 6, title: 'Card 6', content: 'Perfect for creating engaging user experiences.' }
  ];
  
  // Code visibility states
  showBasicAnimateCode = false;
  showCustomAnimateCode = false;
  showMultipleAnimateCode = false;
  
  onTabChange(tab: string): void {
    this.activeTab = tab;
  }
  
  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicAnimateCode = !this.showBasicAnimateCode;
        break;
      case 'custom':
        this.showCustomAnimateCode = !this.showCustomAnimateCode;
        break;
      case 'multiple':
        this.showMultipleAnimateCode = !this.showMultipleAnimateCode;
        break;
    }
  }
}