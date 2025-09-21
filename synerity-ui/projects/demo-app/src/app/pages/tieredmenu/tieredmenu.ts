import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { TieredMenu as SuiTieredMenu } from '../../../../../ui-lib/src/lib/tiered-menu/tiered-menu';

@Component({
  selector: 'app-tieredmenu',
  imports: [CommonModule, FormsModule, Tabs, SuiTieredMenu],
  templateUrl: './tieredmenu.html',
  styleUrl: './tieredmenu.scss'
})
export class Tieredmenu {
  activeTab = 'demo';
  
  // Demo data
  tieredMenuItems = [
    {
      label: 'File',
      icon: '📁',
      items: [
        {
          label: 'New',
          icon: '➕',
          items: [
            { label: 'Document', icon: '📄' },
            { label: 'Spreadsheet', icon: '📊' },
            { label: 'Presentation', icon: '📽️' }
          ]
        },
        { label: 'Open', icon: '📂' },
        { label: 'Save', icon: '💾' },
        { label: 'Exit', icon: '❌' }
      ]
    },
    {
      label: 'Edit',
      icon: '✏️',
      items: [
        { label: 'Undo', icon: '↶' },
        { label: 'Redo', icon: '↷' },
        { label: 'Cut', icon: '✂️' },
        { label: 'Copy', icon: '📋' },
        { label: 'Paste', icon: '📌' }
      ]
    },
    {
      label: 'View',
      icon: '👁️',
      items: [
        { label: 'Zoom In', icon: '🔍➕' },
        { label: 'Zoom Out', icon: '🔍➖' },
        { label: 'Full Screen', icon: '⛶' }
      ]
    },
    {
      label: 'Help',
      icon: '❓',
      items: [
        { label: 'Documentation', icon: '📚' },
        { label: 'Support', icon: '🎧' }
      ]
    }
  ];

  simpleTieredMenuItems = [
    {
      label: 'Home',
      icon: '🏠'
    },
    {
      label: 'Products',
      icon: '📦',
      items: [
        { label: 'Electronics', icon: '📱' },
        { label: 'Clothing', icon: '👕' },
        { label: 'Books', icon: '📚' }
      ]
    },
    {
      label: 'About',
      icon: 'ℹ️'
    }
  ];

  nestedTieredMenuItems = [
    {
      label: 'Dashboard',
      icon: '📊',
      items: [
        {
          label: 'Analytics',
          icon: '📈',
          items: [
            { label: 'Sales Report', icon: '💰' },
            { label: 'User Activity', icon: '👥' },
            { label: 'Performance', icon: '⚡' }
          ]
        },
        {
          label: 'Settings',
          icon: '⚙️',
          items: [
            { label: 'General', icon: '🔧' },
            { label: 'Security', icon: '🔒' },
            { label: 'Notifications', icon: '🔔' }
          ]
        }
      ]
    }
  ];
  
  // Code visibility states
  showBasicTieredMenuCode = false;
  showSimpleTieredMenuCode = false;
  showNestedTieredMenuCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicTieredMenu':
        this.showBasicTieredMenuCode = !this.showBasicTieredMenuCode;
        break;
      case 'simpleTieredMenu':
        this.showSimpleTieredMenuCode = !this.showSimpleTieredMenuCode;
        break;
      case 'nestedTieredMenu':
        this.showNestedTieredMenuCode = !this.showNestedTieredMenuCode;
        break;
    }
  }
  
  // Tiered menu demo methods
  onTieredMenuItemClick(event: any) {
    console.log('Tiered menu item clicked:', event);
  }
}
