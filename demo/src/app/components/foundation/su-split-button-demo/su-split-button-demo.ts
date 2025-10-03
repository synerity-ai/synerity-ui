import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SplitButton } from '@synerity/ui';

@Component({
  selector: 'app-su-split-button-demo',
  imports: [CommonModule, FormsModule, SplitButton],
  templateUrl: './su-split-button-demo.html',
  styleUrl: './su-split-button-demo.scss'
})
export class SuSplitButtonDemo {
  // Split button configurations
  splitButtonConfigs = [
    {
      id: 'basic',
      label: 'Save',
      icon: '💾',
      buttonStyle: 'primary' as const,
      items: [
        { label: 'Save', icon: '💾', command: () => this.onItemClick('Save') },
        { label: 'Save As', icon: '📁', command: () => this.onItemClick('Save As') },
        { label: 'Save All', icon: '💾', command: () => this.onItemClick('Save All') }
      ]
    },
    {
      id: 'actions',
      label: 'Actions',
      icon: '⚡',
      buttonStyle: 'success' as const,
      items: [
        { label: 'Create', icon: '➕', command: () => this.onItemClick('Create') },
        { label: 'Edit', icon: '✏️', command: () => this.onItemClick('Edit') },
        { label: 'Delete', icon: '🗑️', command: () => this.onItemClick('Delete') }
      ]
    }
  ];

  // Style options
  styles = [
    { value: 'primary', label: 'Primary' },
    { value: 'secondary', label: 'Secondary' },
    { value: 'success', label: 'Success' },
    { value: 'info', label: 'Info' },
    { value: 'warning', label: 'Warning' },
    { value: 'help', label: 'Help' },
    { value: 'danger', label: 'Danger' }
  ];

  // Size options
  sizes = [
    { value: 'small', label: 'Small' },
    { value: 'normal', label: 'Normal' },
    { value: 'large', label: 'Large' }
  ];

  selectedStyle: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger' = 'primary';
  selectedSize = 'normal';
  disabled = false;
  label = 'Save';
  icon = '💾';

  // Split button items
  splitButtonItems = [
    { label: 'Save', icon: '💾', command: () => this.onItemClick('Save') },
    { label: 'Save As', icon: '📁', command: () => this.onItemClick('Save As') },
    { label: 'Save All', icon: '💾', command: () => this.onItemClick('Save All') },
    { separator: true },
    { label: 'Export', icon: '📤', command: () => this.onItemClick('Export') }
  ];

  // Event tracking
  mainClickCount = 0;
  itemClickCount = 0;
  lastClickedItem = '';

  // Event handlers
  onMainClick(): void {
    this.mainClickCount++;
    console.log('Main button clicked');
  }

  onItemClick(item: string): void {
    this.itemClickCount++;
    this.lastClickedItem = item;
    console.log('Split button item clicked:', item);
  }

  onSplitButtonItemClick(item: any): void {
    this.onItemClick(item.label || 'Unknown');
  }

  // Get split button class
  getSplitButtonClass(): string {
    let classes = 'sui-split-button';
    
    if (this.selectedSize !== 'normal') {
      classes += ` sui-split-button--${this.selectedSize}`;
    }
    
    return classes;
  }

  // Get split button style
  getSplitButtonStyle(): any {
    return {};
  }

  // Reset counters
  resetCounters(): void {
    this.mainClickCount = 0;
    this.itemClickCount = 0;
    this.lastClickedItem = '';
  }

  // Get configuration description
  getConfigDescription(): string {
    let description = `Style: ${this.selectedStyle}`;
    description += ` • Size: ${this.selectedSize}`;
    description += ` • Disabled: ${this.disabled ? 'Yes' : 'No'}`;
    return description;
  }

  // Sample split button items for different use cases
  getFileItems() {
    return [
      { label: 'New', icon: '📄', command: () => this.onItemClick('New File') },
      { label: 'Open', icon: '📂', command: () => this.onItemClick('Open File') },
      { label: 'Save', icon: '💾', command: () => this.onItemClick('Save File') },
      { separator: true },
      { label: 'Export', icon: '📤', command: () => this.onItemClick('Export File') }
    ];
  }

  getEditItems() {
    return [
      { label: 'Cut', icon: '✂️', command: () => this.onItemClick('Cut') },
      { label: 'Copy', icon: '📋', command: () => this.onItemClick('Copy') },
      { label: 'Paste', icon: '📋', command: () => this.onItemClick('Paste') },
      { separator: true },
      { label: 'Undo', icon: '↶', command: () => this.onItemClick('Undo') },
      { label: 'Redo', icon: '↷', command: () => this.onItemClick('Redo') }
    ];
  }

  getViewItems() {
    return [
      { label: 'Zoom In', icon: '🔍+', command: () => this.onItemClick('Zoom In') },
      { label: 'Zoom Out', icon: '🔍-', command: () => this.onItemClick('Zoom Out') },
      { label: 'Reset Zoom', icon: '🔍', command: () => this.onItemClick('Reset Zoom') },
      { separator: true },
      { label: 'Full Screen', icon: '⛶', command: () => this.onItemClick('Full Screen') }
    ];
  }

  getDeleteItems() {
    return [
      { label: 'Delete', icon: '🗑️', command: () => this.onItemClick('Delete') },
      { label: 'Delete All', icon: '🗑️', command: () => this.onItemClick('Delete All') },
      { separator: true },
      { label: 'Archive', icon: '📦', command: () => this.onItemClick('Archive') }
    ];
  }

  getUserProfileItems() {
    return [
      { label: 'View Profile', icon: '👤', command: () => this.onItemClick('View Profile') },
      { label: 'Edit Profile', icon: '✏️', command: () => this.onItemClick('Edit Profile') },
      { label: 'Settings', icon: '⚙️', command: () => this.onItemClick('Settings') },
      { separator: true },
      { label: 'Logout', icon: '🚪', command: () => this.onItemClick('Logout') }
    ];
  }
}
