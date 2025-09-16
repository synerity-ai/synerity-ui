import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { TreeTable } from 'ui-lib';

@Component({
  selector: 'app-treetable',
  imports: [CommonModule, FormsModule, Tabs, TreeTable],
  templateUrl: './treetable.html',
  styleUrl: './treetable.scss'
})
export class TreetablePage {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicTreeTableCode = false;
  showSelectionTreeTableCode = false;
  showSortableTreeTableCode = false;
  showComplexTreeTableCode = false;

  // Basic tree table data
  basicTreeTableData = [
    {
      key: '1',
      data: { name: 'Documents', size: '75 KB', type: 'Folder' },
      children: [
        {
          key: '1-1',
          data: { name: 'Work', size: '55 KB', type: 'Folder' },
          children: [
            { key: '1-1-1', data: { name: 'Expenses.doc', size: '30 KB', type: 'Document' } },
            { key: '1-1-2', data: { name: 'Resume.pdf', size: '25 KB', type: 'Document' } }
          ]
        },
        {
          key: '1-2',
          data: { name: 'Home', size: '20 KB', type: 'Folder' },
          children: [
            { key: '1-2-1', data: { name: 'Invoices', size: '20 KB', type: 'Folder' } }
          ]
        }
      ]
    },
    {
      key: '2',
      data: { name: 'Pictures', size: '150 KB', type: 'Folder' },
      children: [
        { key: '2-1', data: { name: 'barcelona.jpg', size: '90 KB', type: 'Picture' } },
        { key: '2-2', data: { name: 'logo.png', size: '30 KB', type: 'Picture' } },
        { key: '2-3', data: { name: 'primeui.png', size: '30 KB', type: 'Picture' } }
      ]
    }
  ];

  basicColumns = [
    { field: 'name', header: 'Name', sortable: true },
    { field: 'size', header: 'Size', sortable: true },
    { field: 'type', header: 'Type', sortable: true }
  ];

  // Selection tree table data
  selectionTreeTableData = [
    {
      key: '1',
      data: { department: 'Engineering', manager: 'John Doe', employees: 25, budget: '$500K' },
      children: [
        {
          key: '1-1',
          data: { department: 'Frontend', manager: 'Jane Smith', employees: 8, budget: '$150K' },
          children: [
            { key: '1-1-1', data: { department: 'React Team', manager: 'Mike Johnson', employees: 4, budget: '$80K' } },
            { key: '1-1-2', data: { department: 'Vue Team', manager: 'Sarah Wilson', employees: 4, budget: '$70K' } }
          ]
        },
        {
          key: '1-2',
          data: { department: 'Backend', manager: 'David Brown', employees: 12, budget: '$250K' },
          children: [
            { key: '1-2-1', data: { department: 'API Team', manager: 'Lisa Davis', employees: 6, budget: '$120K' } },
            { key: '1-2-2', data: { department: 'Database Team', manager: 'Tom Wilson', employees: 6, budget: '$130K' } }
          ]
        },
        {
          key: '1-3',
          data: { department: 'DevOps', manager: 'Alex Chen', employees: 5, budget: '$100K' }
        }
      ]
    }
  ];

  selectionColumns = [
    { field: 'department', header: 'Department', sortable: true },
    { field: 'manager', header: 'Manager', sortable: true },
    { field: 'employees', header: 'Employees', sortable: true },
    { field: 'budget', header: 'Budget', sortable: true }
  ];

  // Sortable tree table data
  sortableTreeTableData = [
    {
      key: '1',
      data: { product: 'Electronics', category: 'Technology', price: '$0', stock: 0 },
      children: [
        {
          key: '1-1',
          data: { product: 'Smartphones', category: 'Mobile', price: '$0', stock: 0 },
          children: [
            { key: '1-1-1', data: { product: 'iPhone 15', category: 'Mobile', price: '$999', stock: 50 } },
            { key: '1-1-2', data: { product: 'Samsung Galaxy', category: 'Mobile', price: '$899', stock: 30 } },
            { key: '1-1-3', data: { product: 'Google Pixel', category: 'Mobile', price: '$699', stock: 25 } }
          ]
        },
        {
          key: '1-2',
          data: { product: 'Laptops', category: 'Computers', price: '$0', stock: 0 },
          children: [
            { key: '1-2-1', data: { product: 'MacBook Pro', category: 'Computers', price: '$1999', stock: 15 } },
            { key: '1-2-2', data: { product: 'Dell XPS', category: 'Computers', price: '$1299', stock: 20 } }
          ]
        }
      ]
    }
  ];

  sortableColumns = [
    { field: 'product', header: 'Product', sortable: true },
    { field: 'category', header: 'Category', sortable: true },
    { field: 'price', header: 'Price', sortable: true },
    { field: 'stock', header: 'Stock', sortable: true }
  ];

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicTreeTable':
        this.showBasicTreeTableCode = !this.showBasicTreeTableCode;
        break;
      case 'selectionTreeTable':
        this.showSelectionTreeTableCode = !this.showSelectionTreeTableCode;
        break;
      case 'sortableTreeTable':
        this.showSortableTreeTableCode = !this.showSortableTreeTableCode;
        break;
      case 'complexTreeTable':
        this.showComplexTreeTableCode = !this.showComplexTreeTableCode;
        break;
    }
  }

  onNodeSelect(node: any): void {
    console.log('Node selected:', node);
  }

  onNodeUnselect(node: any): void {
    console.log('Node unselected:', node);
  }

  onNodeExpand(node: any): void {
    console.log('Node expanded:', node);
  }

  onNodeCollapse(node: any): void {
    console.log('Node collapsed:', node);
  }

  onSort(event: any): void {
    console.log('Sort event:', event);
  }

  onSelectionChange(selection: any[]): void {
    console.log('Selection changed:', selection);
  }
}