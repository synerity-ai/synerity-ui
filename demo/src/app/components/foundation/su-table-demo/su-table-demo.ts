import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Table } from '@synerity/ui';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
}

@Component({
  selector: 'app-su-table-demo',
  imports: [CommonModule, FormsModule, Table],
  templateUrl: './su-table-demo.html',
  styleUrl: './su-table-demo.scss'
})
export class SuTableDemo {
  products: Product[] = [
    { id: 1, name: 'Wireless Mouse', category: 'Electronics', price: 29.99, stock: 45, rating: 4.5 },
    { id: 2, name: 'USB-C Cable', category: 'Electronics', price: 12.99, stock: 120, rating: 4.2 },
    { id: 3, name: 'Laptop Stand', category: 'Accessories', price: 49.99, stock: 30, rating: 4.8 },
    { id: 4, name: 'Mechanical Keyboard', category: 'Electronics', price: 89.99, stock: 15, rating: 4.7 },
    { id: 5, name: 'Desk Lamp', category: 'Furniture', price: 34.99, stock: 60, rating: 4.3 },
    { id: 6, name: 'Office Chair', category: 'Furniture', price: 199.99, stock: 8, rating: 4.6 },
    { id: 7, name: 'Notebook', category: 'Stationery', price: 5.99, stock: 200, rating: 4.1 },
    { id: 8, name: 'Pen Set', category: 'Stationery', price: 14.99, stock: 85, rating: 4.4 },
    { id: 9, name: 'Monitor', category: 'Electronics', price: 299.99, stock: 12, rating: 4.9 },
    { id: 10, name: 'Headphones', category: 'Electronics', price: 79.99, stock: 25, rating: 4.5 }
  ];

  columns = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'name', header: 'Product Name', sortable: true, filterable: true },
    { field: 'category', header: 'Category', sortable: true, filterable: true },
    { field: 'price', header: 'Price ($)', sortable: true },
    { field: 'stock', header: 'Stock', sortable: true },
    { field: 'rating', header: 'Rating', sortable: true }
  ];

  selectedProducts: any[] = [];
  sortedProducts: Product[] = [...this.products];

  handleSort(event: any): void {
    console.log('Sort event:', event);
    const { field, order } = event;
    
    this.sortedProducts = [...this.products].sort((a: any, b: any) => {
      const aVal = a[field];
      const bVal = b[field];
      
      if (aVal < bVal) return order === 'asc' ? -1 : 1;
      if (aVal > bVal) return order === 'asc' ? 1 : -1;
      return 0;
    });
  }

  handleFilter(event: any): void {
    console.log('Filter event:', event);
  }

  handleRowSelect(event: any): void {
    console.log('Row selected:', event);
  }

  handleSelectionChange(event: any): void {
    console.log('Selection changed:', event);
    this.selectedProducts = event;
  }
}
