import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs } from '../../shared/tabs/tabs';
import { DataView } from 'ui-lib';

@Component({
  selector: 'app-dataview',
  imports: [CommonModule, Tabs, DataView],
  templateUrl: './dataview.html',
  styleUrl: './dataview.scss'
})
export class Dataview {
  activeTab = 'demo';
  showCode = {
    basic: false,
    grid: false
  };

  basicProducts = [
    { name: 'Laptop Pro', category: 'Electronics', price: 1299.99 },
    { name: 'Wireless Mouse', category: 'Accessories', price: 29.99 },
    { name: 'Mechanical Keyboard', category: 'Accessories', price: 149.99 },
    { name: 'Monitor 4K', category: 'Electronics', price: 399.99 },
    { name: 'USB-C Hub', category: 'Accessories', price: 79.99 }
  ];

  gridProducts = [
    { name: 'Smartphone', category: 'Electronics', price: 699.99, icon: '📱' },
    { name: 'Tablet', category: 'Electronics', price: 499.99, icon: '📱' },
    { name: 'Headphones', category: 'Audio', price: 199.99, icon: '🎧' },
    { name: 'Smart Watch', category: 'Wearables', price: 299.99, icon: '⌚' },
    { name: 'Camera', category: 'Electronics', price: 899.99, icon: '📷' },
    { name: 'Speaker', category: 'Audio', price: 149.99, icon: '🔊' }
  ];

  basicLayout: 'list' | 'grid' = 'list';
  basicEmptyMessage = 'No products available';

  onTabChange(tabId: string) {
    this.activeTab = tabId;
  }

  toggleCode(type: 'basic' | 'grid') {
    this.showCode[type] = !this.showCode[type];
  }
}
