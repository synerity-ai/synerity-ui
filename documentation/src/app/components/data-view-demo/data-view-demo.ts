import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataView } from '@synerity/ui';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  stock: number;
  image?: string;
}

@Component({
  selector: 'app-data-view-demo',
  standalone: true,
  imports: [CommonModule, DataView],
  templateUrl: './data-view-demo.html',
  styleUrls: ['./data-view-demo.scss']
})
export class DataViewDemo {
  @Input() currentExample: any;

  getCurrentExample() {
    return this.currentExample || { name: 'List Layout' };
  }

  // Sample products data
  products: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
      price: 299.99,
      category: 'Electronics',
      rating: 4.5,
      stock: 25,
      image: '🎧'
    },
    {
      id: 2,
      name: 'Smart Watch',
      description: 'Fitness tracking smartwatch with heart rate monitor and GPS',
      price: 199.99,
      category: 'Electronics',
      rating: 4.2,
      stock: 15,
      image: '⌚'
    },
    {
      id: 3,
      name: 'Laptop Backpack',
      description: 'Water-resistant backpack with padded laptop compartment',
      price: 49.99,
      category: 'Accessories',
      rating: 4.7,
      stock: 50,
      image: '🎒'
    },
    {
      id: 4,
      name: 'USB-C Hub',
      description: '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader',
      price: 39.99,
      category: 'Accessories',
      rating: 4.4,
      stock: 40,
      image: '🔌'
    },
    {
      id: 5,
      name: 'Mechanical Keyboard',
      description: 'RGB backlit mechanical keyboard with blue switches',
      price: 129.99,
      category: 'Peripherals',
      rating: 4.8,
      stock: 20,
      image: '⌨️'
    },
    {
      id: 6,
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse with precision tracking',
      price: 29.99,
      category: 'Peripherals',
      rating: 4.3,
      stock: 60,
      image: '🖱️'
    }
  ];

  // Paginated products
  paginatedProducts = [...this.products];
  currentLayout: 'list' | 'grid' = 'list';
  currentPage = 0;
  rowsPerPage = 3;

  // Empty data example
  emptyData: any[] = [];

  // Large dataset for pagination example
  largeDataset: Product[] = [];

  constructor() {
    // Generate large dataset for pagination
    for (let i = 0; i < 20; i++) {
      this.largeDataset.push({
        id: i + 7,
        name: `Product ${i + 7}`,
        description: `Description for product ${i + 7}`,
        price: Math.floor(Math.random() * 500) + 50,
        category: ['Electronics', 'Accessories', 'Peripherals'][Math.floor(Math.random() * 3)],
        rating: Math.floor(Math.random() * 5) + 1,
        stock: Math.floor(Math.random() * 100) + 10,
        image: ['🎧', '⌚', '🎒', '🔌', '⌨️', '🖱️'][Math.floor(Math.random() * 6)]
      });
    }
  }

  onPageChange(event: any): void {
    console.log('Page changed:', event);
    this.currentPage = event.first;
    this.rowsPerPage = event.rows;
  }

  toggleLayout(): void {
    this.currentLayout = this.currentLayout === 'list' ? 'grid' : 'list';
  }

  getRatingStars(rating: number): string {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    return '⭐'.repeat(fullStars) + (hasHalfStar ? '½' : '');
  }
}
