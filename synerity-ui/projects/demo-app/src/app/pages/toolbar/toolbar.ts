import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Toolbar } from 'ui-lib';

@Component({
  selector: 'app-toolbar',
  imports: [CommonModule, FormsModule, Tabs, Toolbar],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})
export class ToolbarPage {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicToolbarCode = false;
  showVerticalToolbarCode = false;
  showCustomStylingCode = false;

  // Toolbar configurations
  basicLeftItems = [
    { label: 'New', icon: '📄', command: () => this.handleNew() },
    { label: 'Open', icon: '📂', command: () => this.handleOpen() },
    { separator: true },
    { label: 'Save', icon: '💾', command: () => this.handleSave() },
    { label: 'Save As', icon: '💾', command: () => this.handleSaveAs() }
  ];

  basicRightItems = [
    { label: 'Undo', icon: '↶', command: () => this.handleUndo() },
    { label: 'Redo', icon: '↷', command: () => this.handleRedo() },
    { separator: true },
    { label: 'Help', icon: '❓', command: () => this.handleHelp() }
  ];

  verticalLeftItems = [
    { label: 'File', icon: '📁' },
    { label: 'Edit', icon: '✏️' },
    { label: 'View', icon: '👁️' },
    { label: 'Tools', icon: '🔧' },
    { separator: true },
    { label: 'Help', icon: '❓' }
  ];

  verticalRightItems = [
    { label: 'Settings', icon: '⚙️' },
    { label: 'Profile', icon: '👤' }
  ];

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicToolbar':
        this.showBasicToolbarCode = !this.showBasicToolbarCode;
        break;
      case 'verticalToolbar':
        this.showVerticalToolbarCode = !this.showVerticalToolbarCode;
        break;
      case 'customStyling':
        this.showCustomStylingCode = !this.showCustomStylingCode;
        break;
    }
  }

  onItemClick(item: any): void {
    console.log('Toolbar item clicked:', item);
  }

  // Toolbar action handlers
  handleNew(): void {
    console.log('New document created');
    alert('New document created!');
  }

  handleOpen(): void {
    console.log('Open document');
    alert('Open document dialog');
  }

  handleSave(): void {
    console.log('Document saved');
    alert('Document saved!');
  }

  handleSaveAs(): void {
    console.log('Save as dialog');
    alert('Save as dialog opened');
  }

  handleUndo(): void {
    console.log('Undo action');
    alert('Undo performed');
  }

  handleRedo(): void {
    console.log('Redo action');
    alert('Redo performed');
  }

  handleHelp(): void {
    console.log('Help opened');
    alert('Help documentation opened');
  }
}