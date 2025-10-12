import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeTable } from '@synerity/ui';

interface TreeTableNode {
  key: string;
  data: any;
  children?: TreeTableNode[];
  expanded?: boolean;
}

interface Column {
  field: string;
  header: string;
  sortable?: boolean;
}

@Component({
  selector: 'app-tree-table-demo',
  standalone: true,
  imports: [CommonModule, TreeTable],
  templateUrl: './tree-table-demo.html',
  styleUrls: ['./tree-table-demo.scss']
})
export class TreeTableDemo {
  @Input() currentExample: any;

  getCurrentExample() {
    return this.currentExample || { name: 'Basic Tree Table' };
  }

  // File system columns
  fileColumns: Column[] = [
    { field: 'name', header: 'Name', sortable: true },
    { field: 'size', header: 'Size', sortable: true },
    { field: 'type', header: 'Type', sortable: false },
    { field: 'modified', header: 'Modified', sortable: true }
  ];

  // File system data
  fileSystem: TreeTableNode[] = [
    {
      key: '0',
      data: { name: 'Documents', size: '75 MB', type: 'Folder', modified: '2024-01-15' },
      expanded: true,
      children: [
        {
          key: '0-0',
          data: { name: 'Work', size: '50 MB', type: 'Folder', modified: '2024-01-14' },
          children: [
            { key: '0-0-0', data: { name: 'Project.docx', size: '2.4 MB', type: 'Document', modified: '2024-01-10' } },
            { key: '0-0-1', data: { name: 'Report.pdf', size: '1.8 MB', type: 'PDF', modified: '2024-01-12' } }
          ]
        },
        {
          key: '0-1',
          data: { name: 'Personal', size: '25 MB', type: 'Folder', modified: '2024-01-13' },
          children: [
            { key: '0-1-0', data: { name: 'Resume.pdf', size: '500 KB', type: 'PDF', modified: '2024-01-05' } }
          ]
        }
      ]
    },
    {
      key: '1',
      data: { name: 'Pictures', size: '120 MB', type: 'Folder', modified: '2024-01-16' },
      children: [
        { key: '1-0', data: { name: 'Vacation.jpg', size: '4.2 MB', type: 'Image', modified: '2024-01-01' } },
        { key: '1-1', data: { name: 'Family.png', size: '3.8 MB', type: 'Image', modified: '2024-01-03' } }
      ]
    }
  ];

  // Organization columns
  orgColumns: Column[] = [
    { field: 'name', header: 'Employee', sortable: true },
    { field: 'title', header: 'Title', sortable: false },
    { field: 'department', header: 'Department', sortable: true },
    { field: 'email', header: 'Email', sortable: false }
  ];

  // Organization data
  organization: TreeTableNode[] = [
    {
      key: '0',
      data: { name: 'John Doe', title: 'CEO', department: 'Executive', email: 'john@company.com' },
      expanded: true,
      children: [
        {
          key: '0-0',
          data: { name: 'Jane Smith', title: 'CTO', department: 'Technology', email: 'jane@company.com' },
          children: [
            { key: '0-0-0', data: { name: 'Bob Johnson', title: 'Engineering Manager', department: 'Engineering', email: 'bob@company.com' } },
            { key: '0-0-1', data: { name: 'Alice Brown', title: 'DevOps Lead', department: 'Operations', email: 'alice@company.com' } }
          ]
        },
        {
          key: '0-1',
          data: { name: 'Mike Davis', title: 'CFO', department: 'Finance', email: 'mike@company.com' },
          children: [
            { key: '0-1-0', data: { name: 'Sarah Wilson', title: 'Accounting Manager', department: 'Accounting', email: 'sarah@company.com' } }
          ]
        }
      ]
    }
  ];

  // Product columns
  productColumns: Column[] = [
    { field: 'name', header: 'Product', sortable: true },
    { field: 'price', header: 'Price', sortable: true },
    { field: 'stock', header: 'Stock', sortable: true }
  ];

  // Product data
  products: TreeTableNode[] = [
    {
      key: '0',
      data: { name: 'Electronics', price: '-', stock: '-' },
      expanded: true,
      children: [
        {
          key: '0-0',
          data: { name: 'Computers', price: '-', stock: '-' },
          children: [
            { key: '0-0-0', data: { name: 'Laptop Pro 15"', price: '$1,299', stock: '25' } },
            { key: '0-0-1', data: { name: 'Desktop Tower', price: '$899', stock: '15' } }
          ]
        },
        {
          key: '0-1',
          data: { name: 'Accessories', price: '-', stock: '-' },
          children: [
            { key: '0-1-0', data: { name: 'Wireless Mouse', price: '$29', stock: '150' } },
            { key: '0-1-1', data: { name: 'Keyboard', price: '$79', stock: '80' } }
          ]
        }
      ]
    }
  ];

  // Collapsed data
  collapsedData: TreeTableNode[] = JSON.parse(JSON.stringify(this.fileSystem.map(node => ({ ...node, expanded: false }))));

  selectedNodes: any[] = [];

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
    console.log('Sort:', event);
  }

  onSelectionChange(nodes: any[]): void {
    this.selectedNodes = nodes;
    console.log('Selection changed:', nodes);
  }
}
