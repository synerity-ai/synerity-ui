import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualScroller } from '@synerity/ui';

@Component({
  selector: 'app-virtual-scroller-demo',
  standalone: true,
  imports: [CommonModule, VirtualScroller],
  templateUrl: './virtual-scroller-demo.html',
  styleUrls: ['./virtual-scroller-demo.scss']
})
export class VirtualScrollerDemo {
  @Input() currentExample: any;

  getCurrentExample() {
    return this.currentExample || { name: 'Basic Virtual Scroller' };
  }

  // Generate items
  items: any[] = [];
  largeDataset: any[] = [];
  products: any[] = [];
  messages: any[] = [];

  constructor() {
    // Basic items (100)
    this.items = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
      description: `Description for item ${i + 1}`
    }));

    // Large dataset (10,000 items)
    this.largeDataset = Array.from({ length: 10000 }, (_, i) => ({
      id: i + 1,
      name: `Record ${i + 1}`,
      value: Math.floor(Math.random() * 1000)
    }));

    // Products
    this.products = Array.from({ length: 500 }, (_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      price: (Math.random() * 100 + 10).toFixed(2),
      category: ['Electronics', 'Clothing', 'Food', 'Books'][i % 4]
    }));

    // Messages
    this.messages = Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      user: `User ${(i % 10) + 1}`,
      message: `This is message number ${i + 1}`,
      timestamp: new Date(Date.now() - i * 60000).toLocaleTimeString()
    }));
  }

  onLazyLoad(event: any): void {
    console.log('Lazy load:', event);
  }

  onScroll(event: any): void {
    console.log('Scroll event:', event);
  }

  onScrollIndexChange(event: any): void {
    console.log('Scroll index changed:', event);
  }
}
