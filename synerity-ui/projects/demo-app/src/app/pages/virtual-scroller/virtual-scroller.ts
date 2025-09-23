import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs } from '../../shared/tabs/tabs';
import { VirtualScroller as SuiVirtualScroller } from '../../../../../ui-lib/src/lib/virtual-scroller/virtual-scroller';

@Component({
  selector: 'app-virtual-scroller',
  standalone: true,
  imports: [CommonModule, Tabs, SuiVirtualScroller],
  templateUrl: './virtual-scroller.html',
  styleUrl: './virtual-scroller.scss'
})
export class VirtualScrollerComponent {
  activeTab = 'demo';
  showBasicVirtualScrollerCode = false;
  showHorizontalVirtualScrollerCode = false;
  showLazyVirtualScrollerCode = false;
  visibleRange = '0 - 0';
  isLoading = false;

  // Large dataset for basic virtual scroller
  largeDataset = Array.from({ length: 10000 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    description: `This is a description for item number ${i + 1}`,
    category: ['Technology', 'Business', 'Science', 'Arts', 'Sports'][i % 5]
  }));

  // Horizontal dataset
  horizontalDataset = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    title: `Card ${i + 1}`,
    subtitle: `Subtitle ${i + 1}`
  }));

  // Lazy loading dataset
  lazyDataset = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: ['Admin', 'User', 'Moderator', 'Guest'][i % 4]
  }));

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicVirtualScroller':
        this.showBasicVirtualScrollerCode = !this.showBasicVirtualScrollerCode;
        break;
      case 'horizontalVirtualScroller':
        this.showHorizontalVirtualScrollerCode = !this.showHorizontalVirtualScrollerCode;
        break;
      case 'lazyVirtualScroller':
        this.showLazyVirtualScrollerCode = !this.showLazyVirtualScrollerCode;
        break;
    }
  }

  onScrollIndexChange(event: any): void {
    this.visibleRange = `${event.first} - ${event.last}`;
  }

  onHorizontalScrollIndexChange(event: any): void {
    console.log('Horizontal scroll index change:', event);
  }

  onLazyLoad(event: any): void {
    console.log('Lazy load event:', event);
    // Simulate loading more data
    this.isLoading = true;
    setTimeout(() => {
      const newItems = Array.from({ length: 25 }, (_, i) => ({
        id: this.lazyDataset.length + i + 1,
        name: `User ${this.lazyDataset.length + i + 1}`,
        email: `user${this.lazyDataset.length + i + 1}@example.com`,
        role: ['Admin', 'User', 'Moderator', 'Guest'][(this.lazyDataset.length + i) % 4]
      }));
      this.lazyDataset = [...this.lazyDataset, ...newItems];
      this.isLoading = false;
    }, 1000);
  }

  loadMoreItems(): void {
    this.onLazyLoad({ first: 0, last: this.lazyDataset.length });
  }
}
