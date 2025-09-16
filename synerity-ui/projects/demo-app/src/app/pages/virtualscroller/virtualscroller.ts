import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { VirtualScroller } from 'ui-lib';

@Component({
  selector: 'app-virtualscroller',
  imports: [CommonModule, FormsModule, Tabs, VirtualScroller],
  templateUrl: './virtualscroller.html',
  styleUrl: './virtualscroller.scss'
})
export class VirtualscrollerPage {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicVirtualScrollerCode = false;
  showHorizontalVirtualScrollerCode = false;
  showLazyVirtualScrollerCode = false;
  showCustomItemSizeCode = false;

  // Basic virtual scroller data
  basicVirtualScrollerData = Array.from({ length: 10000 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    description: `This is item number ${i + 1} in the virtual scroller`,
    category: ['Electronics', 'Clothing', 'Books', 'Home', 'Sports'][i % 5],
    price: Math.floor(Math.random() * 1000) + 10
  }));

  // Horizontal virtual scroller data
  horizontalVirtualScrollerData = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    title: `Card ${i + 1}`,
    content: `Content for card ${i + 1}`,
    color: ['bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-purple-100'][i % 5]
  }));

  // Lazy virtual scroller data
  lazyVirtualScrollerData: any[] = [];
  lazyLoading = false;

  // Custom item size data
  customItemSizeData = Array.from({ length: 5000 }, (_, i) => ({
    id: i + 1,
    title: `Large Item ${i + 1}`,
    description: `This is a larger item with more content to demonstrate custom item sizing in the virtual scroller. Item ${i + 1} contains detailed information.`,
    details: `Additional details for item ${i + 1}`,
    status: ['Active', 'Inactive', 'Pending', 'Completed'][i % 4],
    priority: ['High', 'Medium', 'Low'][i % 3]
  }));

  constructor() {
    // Initialize lazy data with first 100 items
    this.lazyVirtualScrollerData = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: `Lazy Item ${i + 1}`,
      description: `This item was loaded lazily`,
      loaded: true
    }));
  }

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicVirtualScroller':
        this.showBasicVirtualScrollerCode = !this.showBasicVirtualScrollerCode;
        break;
      case 'horizontalVirtualScroller':
        this.showHorizontalVirtualScrollerCode = !this.showHorizontalVirtualScrollerCode;
        break;
      case 'lazyVirtualScroller':
        this.showLazyVirtualScrollerCode = !this.showLazyVirtualScrollerCode;
        break;
      case 'customItemSize':
        this.showCustomItemSizeCode = !this.showCustomItemSizeCode;
        break;
    }
  }

  onLazyLoad(event: any): void {
    console.log('Lazy load event:', event);
    
    if (this.lazyLoading) return;
    
    this.lazyLoading = true;
    
    // Simulate API call
    setTimeout(() => {
      const newItems = Array.from({ length: 50 }, (_, i) => ({
        id: this.lazyVirtualScrollerData.length + i + 1,
        name: `Lazy Item ${this.lazyVirtualScrollerData.length + i + 1}`,
        description: `This item was loaded lazily`,
        loaded: true
      }));
      
      this.lazyVirtualScrollerData = [...this.lazyVirtualScrollerData, ...newItems];
      this.lazyLoading = false;
    }, 1000);
  }

  onScroll(event: any): void {
    console.log('Scroll event:', event);
  }

  onScrollIndexChange(event: any): void {
    console.log('Scroll index change:', event);
  }
}