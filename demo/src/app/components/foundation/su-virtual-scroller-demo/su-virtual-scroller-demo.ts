import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VirtualScroller } from '@synerity/ui';

@Component({
  selector: 'app-su-virtual-scroller-demo',
  imports: [CommonModule, FormsModule, VirtualScroller],
  templateUrl: './su-virtual-scroller-demo.html',
  styleUrl: './su-virtual-scroller-demo.scss'
})
export class SuVirtualScrollerDemo {
  // Generate 10,000 items for virtual scrolling performance test
  items = Array.from({ length: 10000 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    description: `This is the description for item number ${i + 1}`,
    category: ['Electronics', 'Furniture', 'Stationery', 'Clothing'][i % 4]
  }));

  // Smaller dataset for horizontal scrolling
  horizontalItems = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Card ${i + 1}`,
    value: Math.floor(Math.random() * 1000)
  }));

  handleScroll(event: any): void {
    console.log('Scroll event:', event);
  }

  handleScrollIndexChange(event: any): void {
    console.log('Visible index range:', event);
  }
}
