import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { PanelMenu as SuiPanelMenu } from 'ui-lib';

@Component({
  selector: 'app-panelmenu',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiPanelMenu],
  templateUrl: './panelmenu.html',
  styleUrl: './panelmenu.scss'
})
export class PanelmenuComponent {
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
      expanded: false,
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
      expanded: false,
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
      expanded: false,
      items: [
        { label: 'Zoom In', icon: '🔍+', command: () => this.executeAction('Zoom In') },
        { label: 'Zoom Out', icon: '🔍-', command: () => this.executeAction('Zoom Out') },
        { label: 'Reset Zoom', icon: '🔍', command: () => this.executeAction('Reset Zoom') }
      ]
    },
    {
      label: 'Help',
      icon: '❓',
      expanded: false,
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

  multipleExpandedItems = [
    {
      label: 'Documents',
      icon: '📄',
      expanded: false,
      items: [
        { label: 'Work', icon: '💼', command: () => this.executeAction('Work Documents') },
        { label: 'Personal', icon: '👤', command: () => this.executeAction('Personal Documents') }
      ]
    },
    {
      label: 'Pictures',
      icon: '🖼️',
      expanded: false,
      items: [
        { label: 'Vacation', icon: '🏖️', command: () => this.executeAction('Vacation Photos') },
        { label: 'Family', icon: '👨‍👩‍👧‍👦', command: () => this.executeAction('Family Photos') }
      ]
    },
    {
      label: 'Music',
      icon: '🎵',
      expanded: false,
      items: [
        { label: 'Rock', icon: '🎸', command: () => this.executeAction('Rock Music') },
        { label: 'Jazz', icon: '🎷', command: () => this.executeAction('Jazz Music') }
      ]
    }
  ];

  showBasicMenuCode = false;
  showSubmenuMenuCode = false;
  showDisabledMenuCode = false;
  showMultipleMenuCode = false;

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
      case 'multipleMenu':
        this.showMultipleMenuCode = !this.showMultipleMenuCode;
        break;
    }
  }

  onMenuItemClick(item: any): void {
    this.lastClickedItem = item;
    console.log('PanelMenu item clicked:', item);
  }

  executeAction(action: string): void {
    console.log(`${action} action executed`);
  }
}
