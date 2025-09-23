import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs } from '../../shared/tabs/tabs';
import { Table as SuiTable } from '../../../../../ui-lib/src/lib/table/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, Tabs, SuiTable],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class TableComponent {
  activeTab = 'demo';
  showBasicTableCode = false;
  showSelectionTableCode = false;
  selectedRows: any[] = [];

  // Basic table data
  basicData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Moderator', status: 'Active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'Active' }
  ];

  basicColumns = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'name', header: 'Name', sortable: true, filterable: true },
    { field: 'email', header: 'Email', sortable: true, filterable: true },
    { field: 'role', header: 'Role', sortable: true, filterable: true },
    { field: 'status', header: 'Status', sortable: true, filterable: true }
  ];

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicTable':
        this.showBasicTableCode = !this.showBasicTableCode;
        break;
      case 'selectionTable':
        this.showSelectionTableCode = !this.showSelectionTableCode;
        break;
    }
  }

  onSelectionChange(selection: any[]): void {
    this.selectedRows = selection;
    console.log('Selected rows:', selection);
  }

  clearSelection(): void {
    this.selectedRows = [];
  }
}