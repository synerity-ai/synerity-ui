import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Menu as SuiMenu } from '../../../../../ui-lib/src/lib/menu/menu';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, FormsModule, Tabs, SuiMenu],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  activeTab = 'demo';
  
  // Demo data
  menuItems = [
    {
      label: 'File',
      icon: '📁',
      items: [
        { label: 'New', icon: '📄', command: () => this.newFile() },
        { label: 'Open', icon: '📂', command: () => this.openFile() },
        { label: 'Save', icon: '💾', command: () => this.saveFile() },
        { separator: true },
        { label: 'Exit', icon: '🚪', command: () => this.exit() }
      ]
    },
    {
      label: 'Edit',
      icon: '✏️',
      items: [
        { label: 'Cut', icon: '✂️', command: () => this.cut() },
        { label: 'Copy', icon: '📋', command: () => this.copy() },
        { label: 'Paste', icon: '📌', command: () => this.paste() }
      ]
    },
    {
      label: 'View',
      icon: '👁️',
      items: [
        { label: 'Zoom In', icon: '🔍', command: () => this.zoomIn() },
        { label: 'Zoom Out', icon: '🔍', command: () => this.zoomOut() },
        { label: 'Reset Zoom', icon: '🎯', command: () => this.resetZoom() }
      ]
    }
  ];
  
  // Code visibility states
  showBasicMenuCode = false;
  showContextMenuCode = false;
  showCustomMenuCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicMenu':
        this.showBasicMenuCode = !this.showBasicMenuCode;
        break;
      case 'contextMenu':
        this.showContextMenuCode = !this.showContextMenuCode;
        break;
      case 'customMenu':
        this.showCustomMenuCode = !this.showCustomMenuCode;
        break;
    }
  }
  
  // Menu demo methods
  newFile() {
    console.log('New file created');
  }
  
  openFile() {
    console.log('Opening file');
  }
  
  saveFile() {
    console.log('File saved');
  }
  
  exit() {
    console.log('Exiting application');
  }
  
  cut() {
    console.log('Cut operation');
  }
  
  copy() {
    console.log('Copy operation');
  }
  
  paste() {
    console.log('Paste operation');
  }
  
  zoomIn() {
    console.log('Zooming in');
  }
  
  zoomOut() {
    console.log('Zooming out');
  }
  
  resetZoom() {
    console.log('Resetting zoom');
  }
}
