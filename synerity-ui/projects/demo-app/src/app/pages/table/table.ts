import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Table as SuiTable } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-table',
  imports: [CommonModule, FormsModule, SuiTable, Tabs],
  templateUrl: './table.html',
  styleUrl: './table.scss'
})
export class Table {
  activeTab = 'demo';
  
  // Demo data
  tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30, status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25, status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 35, status: 'Active' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', age: 28, status: 'Pending' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', age: 32, status: 'Active' }
  ];
  
  tableColumns = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'name', header: 'Name', sortable: true, filterable: true },
    { field: 'email', header: 'Email', sortable: true, filterable: true },
    { field: 'age', header: 'Age', sortable: true },
    { field: 'status', header: 'Status', sortable: true, filterable: true }
  ];
  
  selectedRows: any[] = [];
  
  // Sortable columns configuration
  sortableColumns = [
    { field: 'name', header: 'Name', sortable: true },
    { field: 'email', header: 'Email', sortable: true },
    { field: 'role', header: 'Role', sortable: true },
    { field: 'department', header: 'Department', sortable: true },
    { field: 'status', header: 'Status', sortable: true }
  ];
  
  // Code visibility states
  showBasicTableCode = false;
  showSortableTableCode = false;
  showSelectableTableCode = false;
  showFilterableTableCode = false;
  showPaginatedTableCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  // Code toggle methods
  toggleCode(section: string) {
    switch(section) {
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
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onSort(event: any) {
    console.log('Sort event:', event);
  }
  
  onFilter(event: any) {
    console.log('Filter event:', event);
  }
  
  onRowSelect(event: any) {
    console.log('Row selected:', event);
  }
  
  onRowUnselect(event: any) {
    console.log('Row unselected:', event);
  }
  
  onSelectionChange(event: any) {
    console.log('Selection changed:', event);
  }
}
