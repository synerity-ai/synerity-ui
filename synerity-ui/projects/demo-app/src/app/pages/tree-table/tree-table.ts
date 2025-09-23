import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs } from '../../shared/tabs/tabs';
import { TreeTable as SuiTreeTable } from '../../../../../ui-lib/src/lib/tree-table/tree-table';

@Component({
  selector: 'app-tree-table',
  standalone: true,
  imports: [CommonModule, Tabs, SuiTreeTable],
  templateUrl: './tree-table.html',
  styleUrl: './tree-table.scss'
})
export class TreeTableComponent {
  activeTab = 'demo';
  showBasicTreeTableCode = false;
  showSelectionTreeTableCode = false;
  selectedNodes: any[] = [];

  // Tree table columns
  treeTableColumns = [
    { field: 'name', header: 'Name', sortable: true },
    { field: 'size', header: 'Size', sortable: true },
    { field: 'type', header: 'Type', sortable: true },
    { field: 'modified', header: 'Modified', sortable: true }
  ];

  // Basic tree table data
  basicTreeTableData = [
    {
      key: 'documents',
      data: { name: 'Documents', size: '--', type: 'Folder', modified: '2024-01-15' },
      expanded: true,
      children: [
        {
          key: 'work',
          data: { name: 'Work', size: '--', type: 'Folder', modified: '2024-01-14' },
          expanded: false,
          children: [
            {
              key: 'project1',
              data: { name: 'Project 1', size: '2.5 MB', type: 'Folder', modified: '2024-01-13' }
            },
            {
              key: 'project2',
              data: { name: 'Project 2', size: '1.8 MB', type: 'Folder', modified: '2024-01-12' }
            }
          ]
        },
        {
          key: 'personal',
          data: { name: 'Personal', size: '--', type: 'Folder', modified: '2024-01-11' },
          expanded: false,
          children: [
            {
              key: 'photos',
              data: { name: 'Photos', size: '15.2 MB', type: 'Folder', modified: '2024-01-10' }
            },
            {
              key: 'videos',
              data: { name: 'Videos', size: '45.7 MB', type: 'Folder', modified: '2024-01-09' }
            }
          ]
        }
      ]
    },
    {
      key: 'applications',
      data: { name: 'Applications', size: '--', type: 'Folder', modified: '2024-01-08' },
      expanded: false,
      children: [
        {
          key: 'app1',
          data: { name: 'Application 1', size: '125 MB', type: 'Application', modified: '2024-01-07' }
        },
        {
          key: 'app2',
          data: { name: 'Application 2', size: '89 MB', type: 'Application', modified: '2024-01-06' }
        }
      ]
    }
  ];

  // Selection tree table data
  selectionTreeTableData = [
    {
      key: 'permissions',
      data: { name: 'User Permissions', size: '--', type: 'Category', modified: '2024-01-15' },
      expanded: true,
      children: [
        {
          key: 'admin',
          data: { name: 'Admin', size: '--', type: 'Group', modified: '2024-01-14' },
          expanded: false,
          children: [
            {
              key: 'admin-users',
              data: { name: 'Manage Users', size: '--', type: 'Permission', modified: '2024-01-13' }
            },
            {
              key: 'admin-settings',
              data: { name: 'System Settings', size: '--', type: 'Permission', modified: '2024-01-12' }
            }
          ]
        },
        {
          key: 'user',
          data: { name: 'User', size: '--', type: 'Group', modified: '2024-01-11' },
          expanded: false,
          children: [
            {
              key: 'user-profile',
              data: { name: 'View Profile', size: '--', type: 'Permission', modified: '2024-01-10' }
            },
            {
              key: 'user-edit',
              data: { name: 'Edit Profile', size: '--', type: 'Permission', modified: '2024-01-09' }
            }
          ]
        }
      ]
    }
  ];

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicTreeTable':
        this.showBasicTreeTableCode = !this.showBasicTreeTableCode;
        break;
      case 'selectionTreeTable':
        this.showSelectionTreeTableCode = !this.showSelectionTreeTableCode;
        break;
    }
  }

  onNodeSelect(node: any): void {
    console.log('Node selected:', node);
  }

  onNodeExpand(node: any): void {
    console.log('Node expanded:', node);
  }

  onSort(event: any): void {
    console.log('Sort event:', event);
  }

  onSelectionChange(selection: any[]): void {
    this.selectedNodes = selection;
    console.log('Selection changed:', selection);
  }

  clearSelection(): void {
    this.selectedNodes = [];
  }
}