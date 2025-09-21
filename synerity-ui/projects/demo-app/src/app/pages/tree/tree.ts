import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Tree as SuiTree } from '../../../../../ui-lib/src/lib/tree/tree';

@Component({
  selector: 'app-tree',
  imports: [CommonModule, FormsModule, Tabs, SuiTree],
  templateUrl: './tree.html',
  styleUrl: './tree.scss'
})
export class TreeComponent {
  activeTab = 'demo';
  showBasicCode = false;
  showSelectionCode = false;
  showCustomCode = false;

  // Demo data
  basicTreeData = [
    {
      key: '0',
      label: 'Documents',
      data: 'Documents Folder',
      children: [
        {
          key: '0-0',
          label: 'Work',
          data: 'Work Folder',
          children: [
            { key: '0-0-0', label: 'Expenses.doc', data: 'Expenses Document' },
            { key: '0-0-1', label: 'Resume.pdf', data: 'Resume Document' }
          ]
        },
        {
          key: '0-1',
          label: 'Home',
          data: 'Home Folder',
          children: [
            { key: '0-1-0', label: 'Invoices.txt', data: 'Invoices for this month' }
          ]
        }
      ]
    },
    {
      key: '1',
      label: 'Pictures',
      data: 'Pictures Folder',
      children: [
        { key: '1-0', label: 'barcelona.jpg', data: 'Barcelona Photo' },
        { key: '1-1', label: 'logo.jpg', data: 'PrimeFaces Logo' },
        { key: '1-2', label: 'primeui.png', data: 'PrimeUI Logo' }
      ]
    },
    {
      key: '2',
      label: 'Movies',
      data: 'Movies Folder',
      children: [
        {
          key: '2-0',
          label: 'Al Pacino',
          data: 'Pacino Movies',
          children: [
            { key: '2-0-0', label: 'Scarface', data: 'Scarface Movie' },
            { key: '2-0-1', label: 'Serpico', data: 'Serpico Movie' }
          ]
        },
        {
          key: '2-1',
          label: 'Robert De Niro',
          data: 'De Niro Movies',
          children: [
            { key: '2-1-0', label: 'Goodfellas', data: 'Goodfellas Movie' },
            { key: '2-1-1', label: 'Untouchables', data: 'Untouchables Movie' }
          ]
        }
      ]
    }
  ];

  selectionTreeData = [
    {
      key: '0',
      label: 'Documents',
      data: 'Documents Folder',
      selectable: true,
      children: [
        {
          key: '0-0',
          label: 'Work',
          data: 'Work Folder',
          selectable: true,
          children: [
            { key: '0-0-0', label: 'Expenses.doc', data: 'Expenses Document', selectable: true },
            { key: '0-0-1', label: 'Resume.pdf', data: 'Resume Document', selectable: true }
          ]
        },
        {
          key: '0-1',
          label: 'Home',
          data: 'Home Folder',
          selectable: true,
          children: [
            { key: '0-1-0', label: 'Invoices.txt', data: 'Invoices for this month', selectable: true }
          ]
        }
      ]
    },
    {
      key: '1',
      label: 'Pictures',
      data: 'Pictures Folder',
      selectable: true,
      children: [
        { key: '1-0', label: 'barcelona.jpg', data: 'Barcelona Photo', selectable: true },
        { key: '1-1', label: 'logo.jpg', data: 'PrimeFaces Logo', selectable: true }
      ]
    }
  ];

  selectedNodes: any[] = [];
  selectedNode: any = null;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'selection':
        this.showSelectionCode = !this.showSelectionCode;
        break;
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
    }
  }

  onNodeSelect(event: any): void {
    console.log('Node selected:', event);
    this.selectedNode = event;
  }

  onNodeUnselect(event: any): void {
    console.log('Node unselected:', event);
    this.selectedNode = null;
  }

  onSelectionChange(event: any): void {
    console.log('Selection changed:', event);
    this.selectedNodes = event;
  }

  onNodeExpand(event: any): void {
    console.log('Node expanded:', event);
  }

  onNodeCollapse(event: any): void {
    console.log('Node collapsed:', event);
  }

  getSelectedNodesText(): string {
    if (this.selectedNodes.length === 0) return 'No nodes selected';
    return this.selectedNodes.map(node => node.label).join(', ');
  }
}
