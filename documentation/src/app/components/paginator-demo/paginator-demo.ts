import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paginator } from '@synerity/ui';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: string;
}

@Component({
  selector: 'app-paginator-demo',
  standalone: true,
  imports: [CommonModule, Paginator],
  templateUrl: './paginator-demo.html',
  styleUrls: ['./paginator-demo.scss']
})
export class PaginatorDemo {
  @Input() currentExample: any;

  // Expose Math for template
  Math = Math;

  getCurrentExample() {
    return this.currentExample || { name: 'Basic Paginator' };
  }

  // Generate sample products
  allProducts: Product[] = this.generateProducts(120);
  
  // Basic pagination
  totalRecords = 120;
  rows = 10;
  first = 0;
  currentPage = 0;

  // Large dataset
  allLargeProducts: Product[] = this.generateProducts(1000);
  largeTotalRecords = 1000;
  largeRows = 25;
  largeFirst = 0;
  largeCurrentPage = 0;

  // Custom page sizes
  customTotalRecords = 120;
  customRows = 15;
  customFirst = 0;
  customCurrentPage = 0;
  customRowsPerPageOptions = [10, 15, 25, 50, 100];

  // Minimal paginator
  minimalTotalRecords = 120;
  minimalRows = 20;
  minimalFirst = 0;
  minimalCurrentPage = 0;

  generateProducts(count: number): Product[] {
    const categories = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports', 'Toys'];
    const statuses = ['In Stock', 'Low Stock', 'Out of Stock'];
    const products: Product[] = [];
    
    for (let i = 0; i < count; i++) {
      products.push({
        id: i + 1,
        name: `Product ${i + 1}`,
        category: categories[Math.floor(Math.random() * categories.length)],
        price: Math.floor(Math.random() * 1000) + 10,
        stock: Math.floor(Math.random() * 100),
        status: statuses[Math.floor(Math.random() * statuses.length)]
      });
    }
    
    return products;
  }

  get displayedProducts(): Product[] {
    const start = this.first;
    const end = this.first + this.rows;
    return this.allProducts.slice(start, end);
  }

  get displayedLargeProducts(): Product[] {
    const start = this.largeFirst;
    const end = this.largeFirst + this.largeRows;
    return this.allLargeProducts.slice(start, end);
  }

  get displayedCustomProducts(): Product[] {
    const start = this.customFirst;
    const end = this.customFirst + this.customRows;
    return this.allProducts.slice(start, end);
  }

  get displayedMinimalProducts(): Product[] {
    const start = this.minimalFirst;
    const end = this.minimalFirst + this.minimalRows;
    return this.allProducts.slice(start, end);
  }

  onPageChange(event: any): void {
    console.log('Page changed:', event);
    this.first = event.first;
    this.rows = event.rows;
    this.currentPage = event.page;
  }

  onLargePageChange(event: any): void {
    console.log('Large page changed:', event);
    this.largeFirst = event.first;
    this.largeRows = event.rows;
    this.largeCurrentPage = event.page;
  }

  onCustomPageChange(event: any): void {
    console.log('Custom page changed:', event);
    this.customFirst = event.first;
    this.customRows = event.rows;
    this.customCurrentPage = event.page;
  }

  onMinimalPageChange(event: any): void {
    console.log('Minimal page changed:', event);
    this.minimalFirst = event.first;
    this.minimalRows = event.rows;
    this.minimalCurrentPage = event.page;
  }

  get currentPageInfo(): string {
    const start = this.first + 1;
    const end = Math.min(this.first + this.rows, this.totalRecords);
    return `Showing ${start}-${end} of ${this.totalRecords} records`;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'In Stock':
        return 'bg-green-100 text-green-800';
      case 'Low Stock':
        return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
}
