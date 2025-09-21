import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { TreeTable as SuiTreeTable } from '../../../../../ui-lib/src/lib/tree-table/tree-table';

@Component({
  selector: 'app-tree-table',
  imports: [CommonModule, FormsModule, Tabs, SuiTreeTable],
  templateUrl: './tree-table.html',
  styleUrl: './tree-table.scss'
})
export class TreeTableComponent {
  activeTab = 'demo';
  showBasicCode = false;
  showSelectionCode = false;
  showCustomCode = false;

  // Demo data
  basicTreeTableData = [
    {
      key: '0',
      data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder',
        date: '2023-01-01'
      },
      children: [
        {
          key: '0-0',
          data: {
            name: 'Angular',
            size: '25kb',
            type: 'Folder',
            date: '2023-01-15'
          },
          children: [
            {
              key: '0-0-0',
              data: {
                name: 'angular.app',
                size: '10kb',
                type: 'Application',
                date: '2023-01-20'
              }
            },
            {
              key: '0-0-1',
              data: {
                name: 'cli.app',
                size: '10kb',
                type: 'Application',
                date: '2023-01-22'
              }
            }
          ]
        },
        {
          key: '0-1',
          data: {
            name: 'React',
            size: '25kb',
            type: 'Folder',
            date: '2023-01-16'
          },
          children: [
            {
              key: '0-1-0',
              data: {
                name: 'react.app',
                size: '10kb',
                type: 'Application',
                date: '2023-01-21'
              }
            }
          ]
        }
      ]
    },
    {
      key: '1',
      data: {
        name: 'Cloud',
        size: '20kb',
        type: 'Folder',
        date: '2023-02-01'
      },
      children: [
        {
          key: '1-0',
          data: {
            name: 'Backup-1.zip',
            size: '10kb',
            type: 'Archive',
            date: '2023-02-05'
          }
        },
        {
          key: '1-1',
          data: {
            name: 'Backup-2.zip',
            size: '10kb',
            type: 'Archive',
            date: '2023-02-06'
          }
        }
      ]
    }
  ];

  columns = [
    { field: 'name', header: 'Name', sortable: true },
    { field: 'size', header: 'Size', sortable: true },
    { field: 'type', header: 'Type', sortable: true },
    { field: 'date', header: 'Date', sortable: true }
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

  onSort(event: any): void {
    console.log('Sort event:', event);
  }

  getSelectedNodesText(): string {
    if (this.selectedNodes.length === 0) return 'No nodes selected';
    return this.selectedNodes.map(node => node.data.name).join(', ');
  }
}
