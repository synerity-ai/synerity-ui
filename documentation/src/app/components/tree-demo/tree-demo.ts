import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tree } from '@synerity/ui';

interface TreeNode {
  key: string;
  label: string;
  data?: any;
  children?: TreeNode[];
  expanded?: boolean;
  selectable?: boolean;
}

@Component({
  selector: 'app-tree-demo',
  standalone: true,
  imports: [CommonModule, Tree],
  templateUrl: './tree-demo.html',
  styleUrls: ['./tree-demo.scss']
})
export class TreeDemo {
  @Input() currentExample: any;

  getCurrentExample() {
    return this.currentExample || { name: 'Basic Tree' };
  }

  // Basic file system tree
  fileSystem: TreeNode[] = [
    {
      key: '0',
      label: 'Documents',
      data: 'Documents Folder',
      expanded: true,
      children: [
        {
          key: '0-0',
          label: 'Work',
          data: 'Work Folder',
          children: [
            { key: '0-0-0', label: 'Project.docx', data: 'Project Document' },
            { key: '0-0-1', label: 'Report.pdf', data: 'Report File' }
          ]
        },
        {
          key: '0-1',
          label: 'Personal',
          data: 'Personal Folder',
          children: [
            { key: '0-1-0', label: 'Resume.pdf', data: 'Resume' },
            { key: '0-1-1', label: 'Photo.jpg', data: 'Photo' }
          ]
        }
      ]
    },
    {
      key: '1',
      label: 'Pictures',
      data: 'Pictures Folder',
      children: [
        { key: '1-0', label: 'Vacation.jpg', data: 'Vacation Photo' },
        { key: '1-1', label: 'Family.png', data: 'Family Photo' }
      ]
    }
  ];

  // Organization tree
  organization: TreeNode[] = [
    {
      key: '0',
      label: 'CEO',
      data: 'Chief Executive Officer',
      expanded: true,
      children: [
        {
          key: '0-0',
          label: 'CTO',
          data: 'Chief Technology Officer',
          expanded: true,
          children: [
            { key: '0-0-0', label: 'Engineering Manager', data: 'Engineering' },
            { key: '0-0-1', label: 'DevOps Lead', data: 'DevOps' }
          ]
        },
        {
          key: '0-1',
          label: 'CFO',
          data: 'Chief Financial Officer',
          children: [
            { key: '0-1-0', label: 'Accounting Manager', data: 'Accounting' },
            { key: '0-1-1', label: 'Finance Analyst', data: 'Finance' }
          ]
        }
      ]
    }
  ];

  // Product categories tree
  categories: TreeNode[] = [
    {
      key: '0',
      label: 'Electronics',
      data: 'Electronics Category',
      children: [
        {
          key: '0-0',
          label: 'Computers',
          data: 'Computers',
          children: [
            { key: '0-0-0', label: 'Laptops', data: 'Laptops' },
            { key: '0-0-1', label: 'Desktops', data: 'Desktops' }
          ]
        },
        {
          key: '0-1',
          label: 'Phones',
          data: 'Phones',
          children: [
            { key: '0-1-0', label: 'Smartphones', data: 'Smartphones' },
            { key: '0-1-1', label: 'Feature Phones', data: 'Feature Phones' }
          ]
        }
      ]
    },
    {
      key: '1',
      label: 'Clothing',
      data: 'Clothing Category',
      children: [
        { key: '1-0', label: 'Men', data: 'Men Clothing' },
        { key: '1-1', label: 'Women', data: 'Women Clothing' },
        { key: '1-2', label: 'Kids', data: 'Kids Clothing' }
      ]
    }
  ];

  // Single selection tree
  singleSelectionTree: TreeNode[] = JSON.parse(JSON.stringify(this.fileSystem));
  
  // Multiple selection tree
  multipleSelectionTree: TreeNode[] = JSON.parse(JSON.stringify(this.organization));
  
  // Checkbox tree
  checkboxTree: TreeNode[] = JSON.parse(JSON.stringify(this.categories));
  
  // With filter tree
  filterTree: TreeNode[] = JSON.parse(JSON.stringify(this.fileSystem));

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

  onSelectionChange(nodes: any[]): void {
    this.selectedNodes = nodes;
    console.log('Selection changed:', nodes);
  }
}
