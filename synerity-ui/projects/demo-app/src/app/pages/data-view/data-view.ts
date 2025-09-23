import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs } from '../../shared/tabs/tabs';
import { DataView as SuiDataView } from '../../../../../ui-lib/src/lib/data-view/data-view';

@Component({
  selector: 'app-data-view',
  standalone: true,
  imports: [CommonModule, Tabs, SuiDataView],
  templateUrl: './data-view.html',
  styleUrl: './data-view.scss'
})
export class DataViewComponent {
  @ViewChild('listItemTemplate') listItemTemplate!: TemplateRef<any>;
  @ViewChild('gridItemTemplate') gridItemTemplate!: TemplateRef<any>;

  activeTab = 'demo';
  showListLayoutCode = false;
  showGridLayoutCode = false;

  // Sample data
  sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'Active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', status: 'Pending' },
    { id: 6, name: 'Diana Prince', email: 'diana@example.com', status: 'Active' }
  ];

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'listLayout':
        this.showListLayoutCode = !this.showListLayoutCode;
        break;
      case 'gridLayout':
        this.showGridLayoutCode = !this.showGridLayoutCode;
        break;
    }
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