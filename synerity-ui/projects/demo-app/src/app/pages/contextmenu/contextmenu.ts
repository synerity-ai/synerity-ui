import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
// import { ContextMenu } from '../../../../../ui-lib/src/lib/contextmenu/contextmenu';

@Component({
  selector: 'app-contextmenu',
  imports: [CommonModule, FormsModule, Tabs],
  templateUrl: './contextmenu.html',
  styleUrl: './contextmenu.scss'
})
export class Contextmenu {
  activeTab = 'demo';
  
  // Demo data
  contextMenuItems = [
    {
      label: 'Edit',
      icon: 'pi pi-pencil',
      command: () => this.editItem()
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => this.deleteItem()
    },
    { separator: true },
    {
      label: 'Copy',
      icon: 'pi pi-copy',
      command: () => this.copyItem()
    },
    {
      label: 'Paste',
      icon: 'pi pi-clone',
      command: () => this.pasteItem()
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
  
  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    // Context menu will be shown by the component
  }
}
