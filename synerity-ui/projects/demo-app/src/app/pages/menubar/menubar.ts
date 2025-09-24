import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Menubar as SuiMenubar } from 'ui-lib';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiMenubar],
  templateUrl: './menubar.html',
  styleUrl: './menubar.scss'
})
export class MenubarComponent {
  activeTab = 'demo';
  lastClickedItem: any = null;

  basicMenubarItems = [
    { label: 'Home', icon: '🏠', command: () => this.executeAction('Home') },
    { label: 'About', icon: 'ℹ️', command: () => this.executeAction('About') },
    { label: 'Contact', icon: '📞', command: () => this.executeAction('Contact') },
    { label: 'Services', icon: '⚙️', command: () => this.executeAction('Services') }
  ];

  menubarWithSubmenus = [
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

  menubarWithDisabledItems = [
    { label: 'Enabled Item', icon: '✅', command: () => this.executeAction('Enabled Item') },
    { label: 'Disabled Item', icon: '❌', disabled: true },
    { label: 'Another Enabled', icon: '✅', command: () => this.executeAction('Another Enabled') },
    { label: '', separator: true },
    { label: 'Last Item', icon: '🏁', command: () => this.executeAction('Last Item') }
  ];

  // Code visibility toggles
  showBasicMenubarCode = false;
  showSubmenuMenubarCode = false;
  showDisabledMenubarCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicMenubar':
        this.showBasicMenubarCode = !this.showBasicMenubarCode;
        break;
      case 'submenuMenubar':
        this.showSubmenuMenubarCode = !this.showSubmenuMenubarCode;
        break;
      case 'disabledMenubar':
        this.showDisabledMenubarCode = !this.showDisabledMenubarCode;
        break;
    }
  }

  onMenubarItemClick(item: any): void {
    this.lastClickedItem = item;
    console.log('Menubar item clicked:', item);
  }

  executeAction(action: string): void {
    console.log(`${action} action executed`);
  }
}