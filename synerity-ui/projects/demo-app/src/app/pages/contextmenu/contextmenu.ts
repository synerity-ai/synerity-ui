import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { ContextMenu as SuiContextMenu } from 'ui-lib';

@Component({
  selector: 'app-contextmenu',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiContextMenu],
  templateUrl: './contextmenu.html',
  styleUrl: './contextmenu.scss'
})
export class ContextMenuComponent {
  @ViewChild('contextMenu') contextMenu!: SuiContextMenu;
  @ViewChild('iconContextMenu') iconContextMenu!: SuiContextMenu;
  @ViewChild('submenuContextMenu') submenuContextMenu!: SuiContextMenu;
  @ViewChild('separatorContextMenu') separatorContextMenu!: SuiContextMenu;

  activeTab = 'demo';
  lastAction: string = '';

  contextMenuItems = [
    { label: 'Copy', command: () => this.executeAction('Copy') },
    { label: 'Paste', command: () => this.executeAction('Paste') },
    { label: 'Cut', command: () => this.executeAction('Cut') },
    { label: 'Delete', command: () => this.executeAction('Delete') }
  ];

  iconContextMenuItems = [
    { label: 'Copy', icon: '📋', command: () => this.executeAction('Copy') },
    { label: 'Paste', icon: '📄', command: () => this.executeAction('Paste') },
    { label: 'Cut', icon: '✂️', command: () => this.executeAction('Cut') },
    { label: 'Delete', icon: '🗑️', command: () => this.executeAction('Delete') }
  ];

  submenuContextMenuItems = [
    { 
      label: 'Edit', 
      icon: '✏️',
      items: [
        { label: 'Cut', command: () => this.executeAction('Cut') },
        { label: 'Copy', command: () => this.executeAction('Copy') },
        { label: 'Paste', command: () => this.executeAction('Paste') }
      ]
    },
    { 
      label: 'View', 
      icon: '👁️',
      items: [
        { label: 'Zoom In', command: () => this.executeAction('Zoom In') },
        { label: 'Zoom Out', command: () => this.executeAction('Zoom Out') },
        { label: 'Reset Zoom', command: () => this.executeAction('Reset Zoom') }
      ]
    },
    { label: 'Delete', icon: '🗑️', command: () => this.executeAction('Delete') }
  ];

  separatorContextMenuItems = [
    { label: 'Copy', command: () => this.executeAction('Copy') },
    { label: 'Paste', command: () => this.executeAction('Paste') },
    { separator: true },
    { label: 'Cut', command: () => this.executeAction('Cut') },
    { separator: true },
    { label: 'Delete', command: () => this.executeAction('Delete') }
  ];

  // Code visibility toggles
  showBasicContextMenuCode = false;
  showIconContextMenuCode = false;
  showSubmenuContextMenuCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicContextMenu':
        this.showBasicContextMenuCode = !this.showBasicContextMenuCode;
        break;
      case 'iconContextMenu':
        this.showIconContextMenuCode = !this.showIconContextMenuCode;
        break;
      case 'submenuContextMenu':
        this.showSubmenuContextMenuCode = !this.showSubmenuContextMenuCode;
        break;
    }
  }

  showContextMenu(event: MouseEvent): void {
    this.contextMenu.show(event);
  }

  showIconContextMenu(event: MouseEvent): void {
    this.iconContextMenu.show(event);
  }

  showSubmenuContextMenu(event: MouseEvent): void {
    this.submenuContextMenu.show(event);
  }

  showSeparatorContextMenu(event: MouseEvent): void {
    this.separatorContextMenu.show(event);
  }

  onContextMenuShow(): void {
    console.log('Context menu shown');
  }

  onContextMenuHide(): void {
    console.log('Context menu hidden');
  }

  onContextMenuClick(event: any): void {
    console.log('Context menu item clicked:', event);
  }

  executeAction(action: string): void {
    this.lastAction = `${action} action executed`;
    console.log(`${action} action executed`);
  }
}