import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { ContextMenu as SuiContextMenu } from '../../../../../ui-lib/src/lib/context-menu/context-menu';

@Component({
  selector: 'app-contextmenu',
  imports: [CommonModule, FormsModule, Tabs, SuiContextMenu],
  templateUrl: './contextmenu.html',
  styleUrl: './contextmenu.scss'
})
export class Contextmenu {
  @ViewChild('contextMenu') contextMenu!: SuiContextMenu;
  
  activeTab = 'demo';
  
  // Demo data
  contextMenuItems = [
    {
      label: 'Edit',
      icon: '✏️',
      command: () => this.editItem()
    },
    {
      label: 'Delete',
      icon: '🗑️',
      command: () => this.deleteItem()
    },
    { separator: true },
    {
      label: 'Copy',
      icon: '📋',
      command: () => this.copyItem()
    },
    {
      label: 'Paste',
      icon: '📌',
      command: () => this.pasteItem()
    }
  ];

  nestedContextMenuItems = [
    {
      label: 'Edit',
      icon: '✏️',
      items: [
        { label: 'Cut', icon: '✂️', command: () => this.cutItem() },
        { label: 'Copy', icon: '📋', command: () => this.copyItem() },
        { label: 'Paste', icon: '📌', command: () => this.pasteItem() }
      ]
    },
    {
      label: 'View',
      icon: '👁️',
      items: [
        { label: 'Details', icon: '📄', command: () => this.viewDetails() },
        { label: 'Properties', icon: '⚙️', command: () => this.viewProperties() }
      ]
    },
    { separator: true },
    {
      label: 'Delete',
      icon: '🗑️',
      command: () => this.deleteItem()
    }
  ];
  
  // Code visibility states
  showBasicContextMenuCode = false;
  showNestedContextMenuCode = false;
  showCustomContextMenuCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicContextMenu':
        this.showBasicContextMenuCode = !this.showBasicContextMenuCode;
        break;
      case 'nestedContextMenu':
        this.showNestedContextMenuCode = !this.showNestedContextMenuCode;
        break;
      case 'customContextMenu':
        this.showCustomContextMenuCode = !this.showCustomContextMenuCode;
        break;
    }
  }
  
  // Context menu demo methods
  editItem() {
    console.log('Edit item clicked');
  }
  
  deleteItem() {
    console.log('Delete item clicked');
  }
  
  copyItem() {
    console.log('Copy item clicked');
  }
  
  pasteItem() {
    console.log('Paste item clicked');
  }
  
  cutItem() {
    console.log('Cut item clicked');
  }
  
  viewDetails() {
    console.log('View details clicked');
  }
  
  viewProperties() {
    console.log('View properties clicked');
  }
  
  onContextMenu(event: MouseEvent) {
    this.contextMenu.show(event);
  }
  
  onNestedContextMenu(event: MouseEvent) {
    // This would use a different context menu instance for nested demo
    this.contextMenu.show(event);
  }
  
  onContextMenuShow() {
    console.log('Context menu shown');
  }
  
  onContextMenuHide() {
    console.log('Context menu hidden');
  }
}
