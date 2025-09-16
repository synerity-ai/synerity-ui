import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Tree } from 'ui-lib';

@Component({
  selector: 'app-tree',
  imports: [CommonModule, FormsModule, Tabs, Tree],
  templateUrl: './tree.html',
  styleUrl: './tree.scss'
})
export class TreePage {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicTreeCode = false;
  showSelectionTreeCode = false;
  showFilterTreeCode = false;
  showCheckboxTreeCode = false;

  // Basic tree data
  basicTreeData = [
    {
      key: '1',
      label: 'Documents',
      children: [
        {
          key: '1-1',
          label: 'Work',
          children: [
            { key: '1-1-1', label: 'Expenses.doc' },
            { key: '1-1-2', label: 'Resume.pdf' }
          ]
        },
        {
          key: '1-2',
          label: 'Home',
          children: [
            { key: '1-2-1', label: 'Invoices' },
            { key: '1-2-2', label: 'Photos' }
          ]
        }
      ]
    },
    {
      key: '2',
      label: 'Pictures',
      children: [
        { key: '2-1', label: 'barcelona.jpg' },
        { key: '2-2', label: 'logo.png' },
        { key: '2-3', label: 'primeui.png' }
      ]
    },
    {
      key: '3',
      label: 'Movies',
      children: [
        { key: '3-1', label: 'Al Pacino' },
        { key: '3-2', label: 'Robert De Niro' }
      ]
    }
  ];

  // Selection tree data
  selectionTreeData = [
    {
      key: '1',
      label: 'Company',
      children: [
        {
          key: '1-1',
          label: 'Development',
          children: [
            { key: '1-1-1', label: 'Frontend Team' },
            { key: '1-1-2', label: 'Backend Team' },
            { key: '1-1-3', label: 'DevOps Team' }
          ]
        },
        {
          key: '1-2',
          label: 'Marketing',
          children: [
            { key: '1-2-1', label: 'Digital Marketing' },
            { key: '1-2-2', label: 'Content Marketing' }
          ]
        },
        {
          key: '1-3',
          label: 'Sales',
          children: [
            { key: '1-3-1', label: 'Enterprise Sales' },
            { key: '1-3-2', label: 'SMB Sales' }
          ]
        }
      ]
    }
  ];

  // Filter tree data
  filterTreeData = [
    {
      key: '1',
      label: 'Products',
      children: [
        {
          key: '1-1',
          label: 'Electronics',
          children: [
            { key: '1-1-1', label: 'Smartphones' },
            { key: '1-1-2', label: 'Laptops' },
            { key: '1-1-3', label: 'Tablets' }
          ]
        },
        {
          key: '1-2',
          label: 'Clothing',
          children: [
            { key: '1-2-1', label: 'Men\'s Clothing' },
            { key: '1-2-2', label: 'Women\'s Clothing' },
            { key: '1-2-3', label: 'Kids\' Clothing' }
          ]
        },
        {
          key: '1-3',
          label: 'Books',
          children: [
            { key: '1-3-1', label: 'Fiction' },
            { key: '1-3-2', label: 'Non-Fiction' },
            { key: '1-3-3', label: 'Educational' }
          ]
        }
      ]
    }
  ];

  // Checkbox tree data
  checkboxTreeData = [
    {
      key: '1',
      label: 'Project Structure',
      children: [
        {
          key: '1-1',
          label: 'src',
          children: [
            {
              key: '1-1-1',
              label: 'components',
              children: [
                { key: '1-1-1-1', label: 'Button.tsx' },
                { key: '1-1-1-2', label: 'Input.tsx' },
                { key: '1-1-1-3', label: 'Modal.tsx' }
              ]
            },
            {
              key: '1-1-2',
              label: 'pages',
              children: [
                { key: '1-1-2-1', label: 'Home.tsx' },
                { key: '1-1-2-2', label: 'About.tsx' },
                { key: '1-1-2-3', label: 'Contact.tsx' }
              ]
            },
            {
              key: '1-1-3',
              label: 'utils',
              children: [
                { key: '1-1-3-1', label: 'helpers.ts' },
                { key: '1-1-3-2', label: 'constants.ts' }
              ]
            }
          ]
        },
        {
          key: '1-2',
          label: 'public',
          children: [
            { key: '1-2-1', label: 'index.html' },
            { key: '1-2-2', label: 'favicon.ico' }
          ]
        }
      ]
    }
  ];

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicTree':
        this.showBasicTreeCode = !this.showBasicTreeCode;
        break;
      case 'selectionTree':
        this.showSelectionTreeCode = !this.showSelectionTreeCode;
        break;
      case 'filterTree':
        this.showFilterTreeCode = !this.showFilterTreeCode;
        break;
      case 'checkboxTree':
        this.showCheckboxTreeCode = !this.showCheckboxTreeCode;
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

  onSelectionChange(selection: any[]): void {
    console.log('Selection changed:', selection);
  }
}