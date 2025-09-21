import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Toolbar as SuiToolbar } from 'ui-lib';

@Component({
  selector: 'app-toolbar',
  imports: [CommonModule, FormsModule, Tabs, SuiToolbar],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})
export class Toolbar {
  activeTab = 'demo';
  
  // Demo data
  toolbarItems = [
    { label: 'New', icon: '📄', command: () => this.newDocument() },
    { label: 'Open', icon: '📂', command: () => this.openDocument() },
    { label: 'Save', icon: '💾', command: () => this.saveDocument() },
    { separator: true },
    { label: 'Cut', icon: '✂️', command: () => this.cut() },
    { label: 'Copy', icon: '📋', command: () => this.copy() },
    { label: 'Paste', icon: '📌', command: () => this.paste() }
  ];
  
  // Code visibility states
  showBasicToolbarCode = false;
  showCustomToolbarCode = false;
  showGroupedToolbarCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicToolbar':
        this.showBasicToolbarCode = !this.showBasicToolbarCode;
        break;
      case 'customToolbar':
        this.showCustomToolbarCode = !this.showCustomToolbarCode;
        break;
      case 'groupedToolbar':
        this.showGroupedToolbarCode = !this.showGroupedToolbarCode;
        break;
    }
  }
  
  // Toolbar demo methods
  newDocument() {
    console.log('New document created');
  }
  
  openDocument() {
    console.log('Opening document');
  }
  
  saveDocument() {
    console.log('Document saved');
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
}
