import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs } from '../../shared/tabs/tabs';
import { Tree as SuiTree } from '../../../../../ui-lib/src/lib/tree/tree';

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [CommonModule, Tabs, SuiTree],
  templateUrl: './tree.html',
  styleUrl: './tree.scss'
})
export class TreeComponent {
  activeTab = 'demo';
  showBasicTreeCode = false;
  showSelectionTreeCode = false;
  selectedNodes: any[] = [];

  // Basic tree data
  basicTreeData = [
    {
      key: 'documents',
      label: 'Documents',
      expanded: true,
      children: [
        {
          key: 'work',
          label: 'Work',
          expanded: false,
          children: [
            { key: 'project1', label: 'Project 1' },
            { key: 'project2', label: 'Project 2' }
          ]
        },
        {
          key: 'personal',
          label: 'Personal',
          expanded: false,
          children: [
            { key: 'photos', label: 'Photos' },
            { key: 'videos', label: 'Videos' }
          ]
        }
      ]
    },
    {
      key: 'applications',
      label: 'Applications',
      expanded: false,
      children: [
        { key: 'app1', label: 'Application 1' },
        { key: 'app2', label: 'Application 2' },
        { key: 'app3', label: 'Application 3' }
      ]
    }
  ];

  // Selection tree data
  selectionTreeData = [
    {
      key: 'permissions',
      label: 'User Permissions',
      expanded: true,
      children: [
        {
          key: 'admin',
          label: 'Admin',
          expanded: false,
          children: [
            { key: 'admin-users', label: 'Manage Users' },
            { key: 'admin-settings', label: 'System Settings' }
          ]
        },
        {
          key: 'user',
          label: 'User',
          expanded: false,
          children: [
            { key: 'user-profile', label: 'View Profile' },
            { key: 'user-edit', label: 'Edit Profile' }
          ]
        }
      ]
    },
    {
      key: 'modules',
      label: 'Modules',
      expanded: false,
      children: [
        { key: 'dashboard', label: 'Dashboard' },
        { key: 'reports', label: 'Reports' },
        { key: 'analytics', label: 'Analytics' }
      ]
    }
  ];

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicTree':
        this.showBasicTreeCode = !this.showBasicTreeCode;
        break;
      case 'selectionTree':
        this.showSelectionTreeCode = !this.showSelectionTreeCode;
        break;
    }
  }

  onNodeSelect(node: any): void {
    console.log('Node selected:', node);
  }

  onNodeExpand(node: any): void {
    console.log('Node expanded:', node);
  }

  onNodeCollapse(node: any): void {
    console.log('Node collapsed:', node);
  }

  onSelectionChange(selection: any[]): void {
    this.selectedNodes = selection;
    console.log('Selection changed:', selection);
  }

  clearSelection(): void {
    this.selectedNodes = [];
  }
}