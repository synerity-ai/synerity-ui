import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Table as SuiTable } from '../../../../../ui-lib/src/lib/table/table';

@Component({
  selector: 'app-table',
  imports: [CommonModule, FormsModule, Tabs, SuiTable],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class Table {
  activeTab = 'demo';
  
  // Demo data
  sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Moderator', status: 'Active' }
  ];
  
  columns = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'name', header: 'Name', sortable: true, filterable: true },
    { field: 'email', header: 'Email', sortable: true, filterable: true },
    { field: 'role', header: 'Role', sortable: true, filterable: true },
    { field: 'status', header: 'Status', sortable: true, filterable: true }
  ];
  
  // Code visibility states
  showBasicTableCode = false;
  showSortableTableCode = false;
  showFilterableTableCode = false;
  showSelectableTableCode = false;
  showPaginatedTableCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicTable':
        this.showBasicTableCode = !this.showBasicTableCode;
        break;
      case 'sortableTable':
        this.showSortableTableCode = !this.showSortableTableCode;
        break;
      case 'filterableTable':
        this.showFilterableTableCode = !this.showFilterableTableCode;
        break;
      case 'selectableTable':
        this.showSelectableTableCode = !this.showSelectableTableCode;
        break;
      case 'paginatedTable':
        this.showPaginatedTableCode = !this.showPaginatedTableCode;
        break;
    }
  }
  
  // Table demo methods
  onSort(event: any) {
    console.log('Sort event:', event);
  }
  
  onFilter(event: any) {
    console.log('Filter event:', event);
  }
  
  onRowSelect(row: any) {
    console.log('Row selected:', row);
  }
  
  onRowUnselect(row: any) {
    console.log('Row unselected:', row);
  }
}
