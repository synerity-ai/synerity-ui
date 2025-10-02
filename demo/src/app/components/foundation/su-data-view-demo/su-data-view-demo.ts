import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataView } from '@synerity/ui';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  inStock: boolean;
}

@Component({
  selector: 'app-su-data-view-demo',
  imports: [CommonModule, FormsModule, DataView],
  templateUrl: './su-data-view-demo.html',
  styleUrl: './su-data-view-demo.scss'
})
export class SuDataViewDemo {
  @ViewChild('listItem') listItemTemplate!: TemplateRef<any>;
  @ViewChild('gridItem') gridItemTemplate!: TemplateRef<any>;

  layout: 'list' | 'grid' = 'list';
  
  products: Product[] = [
    { id: 1, name: 'Wireless Mouse', category: 'Electronics', price: 29.99, rating: 4.5, image: '🖱️', inStock: true },
    { id: 2, name: 'USB-C Cable', category: 'Electronics', price: 12.99, rating: 4.2, image: '🔌', inStock: true },
    { id: 3, name: 'Laptop Stand', category: 'Accessories', price: 49.99, rating: 4.8, image: '💻', inStock: true },
    { id: 4, name: 'Mechanical Keyboard', category: 'Electronics', price: 89.99, rating: 4.7, image: '⌨️', inStock: false },
    { id: 5, name: 'Desk Lamp', category: 'Furniture', price: 34.99, rating: 4.3, image: '💡', inStock: true },
    { id: 6, name: 'Office Chair', category: 'Furniture', price: 199.99, rating: 4.6, image: '🪑', inStock: true },
    { id: 7, name: 'Notebook', category: 'Stationery', price: 5.99, rating: 4.1, image: '📓', inStock: true },
    { id: 8, name: 'Pen Set', category: 'Stationery', price: 14.99, rating: 4.4, image: '✒️', inStock: true },
    { id: 9, name: 'Monitor', category: 'Electronics', price: 299.99, rating: 4.9, image: '🖥️', inStock: false },
    { id: 10, name: 'Headphones', category: 'Electronics', price: 79.99, rating: 4.5, image: '🎧', inStock: true },
    { id: 11, name: 'Webcam', category: 'Electronics', price: 59.99, rating: 4.3, image: '📹', inStock: true },
    { id: 12, name: 'Smartphone', category: 'Electronics', price: 699.99, rating: 4.8, image: '📱', inStock: true }
  ];

  switchLayout(newLayout: 'list' | 'grid'): void {
    this.layout = newLayout;
  }
}
