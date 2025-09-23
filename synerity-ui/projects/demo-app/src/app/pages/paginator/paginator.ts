import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs } from '../../shared/tabs/tabs';
import { Paginator as SuiPaginator } from '../../../../../ui-lib/src/lib/paginator/paginator';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule, Tabs, SuiPaginator],
  templateUrl: './paginator.html',
  styleUrl: './paginator.scss'
})
export class PaginatorComponent {
  activeTab = 'demo';
  showBasicPaginatorCode = false;
  showCustomPaginatorCode = false;
  showTablePaginatorCode = false;
  
  // Table data for pagination demo
  currentRows = 5;
  currentFirst = 0;
  
  tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'Active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', status: 'Pending' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', status: 'Active' },
    { id: 7, name: 'Eve Adams', email: 'eve@example.com', status: 'Active' },
    { id: 8, name: 'Frank Miller', email: 'frank@example.com', status: 'Inactive' },
    { id: 9, name: 'Grace Lee', email: 'grace@example.com', status: 'Active' },
    { id: 10, name: 'Henry Davis', email: 'henry@example.com', status: 'Pending' },
    { id: 11, name: 'Ivy Chen', email: 'ivy@example.com', status: 'Active' },
    { id: 12, name: 'Jack Wilson', email: 'jack@example.com', status: 'Active' },
    { id: 13, name: 'Kate Brown', email: 'kate@example.com', status: 'Inactive' },
    { id: 14, name: 'Liam Taylor', email: 'liam@example.com', status: 'Active' },
    { id: 15, name: 'Mia Anderson', email: 'mia@example.com', status: 'Pending' }
  ];

  get paginatedData() {
    return this.tableData.slice(this.currentFirst, this.currentFirst + this.currentRows);
  }

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicPaginator':
        this.showBasicPaginatorCode = !this.showBasicPaginatorCode;
        break;
      case 'customPaginator':
        this.showCustomPaginatorCode = !this.showCustomPaginatorCode;
        break;
      case 'tablePaginator':
        this.showTablePaginatorCode = !this.showTablePaginatorCode;
        break;
    }
  }

  onPageChange(event: any): void {
    console.log('Page changed:', event);
  }

  onTablePageChange(event: any): void {
    this.currentFirst = event.first;
    this.currentRows = event.rows;
    console.log('Table page changed:', event);
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
}
