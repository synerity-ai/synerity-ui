import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { TieredMenu as SuiTieredMenu } from 'ui-lib';

@Component({
  selector: 'app-tieredmenu',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiTieredMenu],
  templateUrl: './tieredmenu.html',
  styleUrl: './tieredmenu.scss'
})
export class TieredmenuComponent {
  activeTab = 'demo';
  lastClickedItem: any = null;

  basicMenuItems = [
    { label: 'Home', icon: '🏠', command: () => this.executeAction('Home') },
    { label: 'Features', icon: '✨', command: () => this.executeAction('Features') },
    { label: 'Pricing', icon: '💰', command: () => this.executeAction('Pricing') },
    { label: 'About', icon: 'ℹ️', command: () => this.executeAction('About') },
    { label: 'Contact', icon: '📞', command: () => this.executeAction('Contact') }
  ];

  menuWithSubmenus = [
    {
      label: 'File',
      icon: '📁',
      items: [
        { label: 'New', icon: '📄', command: () => this.executeAction('New File') },
        { label: 'Open', icon: '📂', command: () => this.executeAction('Open File') },
        { label: 'Save', icon: '💾', command: () => this.executeAction('Save File') },
        { label: '', separator: true },
        { label: 'Exit', icon: '🚪', command: () => this.executeAction('Exit') }
      ]
    },
    {
      label: 'Edit',
      icon: '✏️',
      items: [
        { label: 'Undo', icon: '↶', command: () => this.executeAction('Undo') },
        { label: 'Redo', icon: '↷', command: () => this.executeAction('Redo') },
        { label: '', separator: true },
        { label: 'Cut', icon: '✂️', command: () => this.executeAction('Cut') },
        { label: 'Copy', icon: '📋', command: () => this.executeAction('Copy') },
        { label: 'Paste', icon: '📌', command: () => this.executeAction('Paste') }
      ]
    },
    {
      label: 'View',
      icon: '👁️',
      items: [
        { label: 'Zoom In', icon: '🔍+', command: () => this.executeAction('Zoom In') },
        { label: 'Zoom Out', icon: '🔍-', command: () => this.executeAction('Zoom Out') },
        { label: 'Reset Zoom', icon: '🔍', command: () => this.executeAction('Reset Zoom') }
      ]
    },
    {
      label: 'Help',
      icon: '❓',
      items: [
        { label: 'Documentation', icon: '📚', command: () => this.executeAction('Documentation') },
        { label: 'Support', icon: '🆘', command: () => this.executeAction('Support') },
        { label: 'About', icon: 'ℹ️', command: () => this.executeAction('About') }
      ]
    }
  ];

  menuWithDisabledItems = [
    { label: 'Enabled Item', icon: '✅', command: () => this.executeAction('Enabled Item') },
    { label: 'Disabled Item', icon: '❌', disabled: true },
    { label: 'Another Enabled', icon: '✅', command: () => this.executeAction('Another Enabled') },
    { label: '', separator: true },
    { label: 'Last Item', icon: '🏁', command: () => this.executeAction('Last Item') }
  ];

  nestedSubmenuItems = [
    {
      label: 'Products',
      icon: '📦',
      items: [
        { label: 'Electronics', icon: '📱', command: () => this.executeAction('Electronics') },
        { 
          label: 'Clothing', 
          icon: '👕',
          items: [
            { label: 'Men', icon: '👨', command: () => this.executeAction('Men Clothing') },
            { label: 'Women', icon: '👩', command: () => this.executeAction('Women Clothing') },
            { label: 'Kids', icon: '👶', command: () => this.executeAction('Kids Clothing') }
          ]
        },
        { 
          label: 'Books', 
          icon: '📚',
          items: [
            { label: 'Fiction', icon: '📖', command: () => this.executeAction('Fiction Books') },
            { label: 'Non-Fiction', icon: '📘', command: () => this.executeAction('Non-Fiction Books') }
          ]
        }
      ]
    },
    {
      label: 'Services',
      icon: '🔧',
      items: [
        { label: 'Consulting', icon: '💼', command: () => this.executeAction('Consulting') },
        { label: 'Support', icon: '🆘', command: () => this.executeAction('Support') }
      ]
    }
  ];

  showBasicMenuCode = false;
  showSubmenuMenuCode = false;
  showDisabledMenuCode = false;
  showNestedMenuCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicMenu':
        this.showBasicMenuCode = !this.showBasicMenuCode;
        break;
      case 'submenuMenu':
        this.showSubmenuMenuCode = !this.showSubmenuMenuCode;
        break;
      case 'disabledMenu':
        this.showDisabledMenuCode = !this.showDisabledMenuCode;
        break;
      case 'nestedMenu':
        this.showNestedMenuCode = !this.showNestedMenuCode;
        break;
    }
  }

  onMenuItemClick(item: any): void {
    this.lastClickedItem = item;
    console.log('TieredMenu item clicked:', item);
  }

  executeAction(action: string): void {
    console.log(`${action} action executed`);
  }
}