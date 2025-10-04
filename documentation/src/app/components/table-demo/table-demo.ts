import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-table-demo',
  standalone: true,
  imports: [CommonModule, Table],
  templateUrl: './table-demo.html',
  styleUrl: './table-demo.scss'
})
export class TableDemoComponent {
  @Input() currentExample!: ComponentExample;

  // Sample data for different examples
  sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30, department: 'Engineering', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28, department: 'Marketing', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 35, department: 'Sales', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', age: 32, department: 'Engineering', status: 'Active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', age: 29, department: 'HR', status: 'Active' }
  ];

  largeDataset = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    age: 25 + (i % 30),
    department: ['Engineering', 'Marketing', 'Sales', 'HR'][i % 4],
    status: i % 3 === 0 ? 'Inactive' : 'Active',
    salary: 50000 + (i * 1000)
  }));

  productData = [
    { id: 1, product: 'Laptop', category: 'Electronics', price: 999.99, stock: 50, rating: 4.5 },
    { id: 2, product: 'Mouse', category: 'Electronics', price: 29.99, stock: 200, rating: 4.2 },
    { id: 3, product: 'Keyboard', category: 'Electronics', price: 79.99, stock: 150, rating: 4.3 },
    { id: 4, product: 'Monitor', category: 'Electronics', price: 299.99, stock: 75, rating: 4.4 },
    { id: 5, product: 'Headphones', category: 'Audio', price: 149.99, stock: 100, rating: 4.6 }
  ];

  columns = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'name', header: 'Name', sortable: true, filterable: true },
    { field: 'email', header: 'Email', sortable: true, filterable: true },
    { field: 'age', header: 'Age', sortable: true },
    { field: 'department', header: 'Department', sortable: true, filterable: true },
    { field: 'status', header: 'Status', sortable: true, filterable: true }
  ];

  productColumns = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'product', header: 'Product', sortable: true, filterable: true },
    { field: 'category', header: 'Category', sortable: true, filterable: true },
    { field: 'price', header: 'Price', sortable: true },
    { field: 'stock', header: 'Stock', sortable: true },
    { field: 'rating', header: 'Rating', sortable: true }
  ];

  selectedRows: any[] = [];
  selectedSingleRow: any = null;

  onSort(event: any): void {
    console.log('Sort event:', event);
    // Handle sorting logic here
  }

  onFilter(event: any): void {
    console.log('Filter event:', event);
    // Handle filtering logic here
  }

  onRowSelect(row: any): void {
    console.log('Row selected:', row);
  }

  onRowUnselect(row: any): void {
    console.log('Row unselected:', row);
  }

  onSelectionChange(selection: any[]): void {
    console.log('Selection changed:', selection);
  }
}