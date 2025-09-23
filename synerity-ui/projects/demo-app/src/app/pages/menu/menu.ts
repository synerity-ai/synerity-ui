import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Menu as SuiMenu } from 'ui-lib';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiMenu],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class MenuComponent {
  activeTab = 'demo';
  lastClickedItem: any = null;

  basicMenuItems = [
    { label: 'Home', icon: '🏠', command: () => this.executeAction('Home') },
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

  popupMenuItems = [
    { label: 'Profile', icon: '👤', command: () => this.executeAction('Profile') },
    { label: 'Settings', icon: '⚙️', command: () => this.executeAction('Settings') },
    { label: '', separator: true },
    { label: 'Logout', icon: '🚪', command: () => this.executeAction('Logout') }
  ];

  // Code visibility toggles
  showBasicMenuCode = false;
  showSubmenuMenuCode = false;
  showIconMenuCode = false;

  // Icon menu items for the third example
  iconMenuItems = [
    { label: 'Dashboard', icon: '📊', command: () => this.executeAction('Dashboard') },
    { label: 'Users', icon: '👥', command: () => this.executeAction('Users') },
    { label: 'Settings', icon: '⚙️', command: () => this.executeAction('Settings') },
    { label: 'Reports', icon: '📈', command: () => this.executeAction('Reports') },
    { label: 'Help', icon: '❓', command: () => this.executeAction('Help') }
  ];

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
      case 'iconMenu':
        this.showIconMenuCode = !this.showIconMenuCode;
        break;
    }
  }

  onMenuItemClick(item: any): void {
    this.lastClickedItem = item;
    console.log('Menu item clicked:', item);
  }

  executeAction(action: string): void {
    console.log(`${action} action executed`);
  }
}