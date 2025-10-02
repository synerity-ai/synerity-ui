import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface MenubarItem {
  label?: string;
  icon?: string;
  command?: () => void;
  disabled?: boolean;
  separator?: boolean;
  items?: MenubarItem[];
}

@Component({
  selector: 'app-su-menubar-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './su-menubar-demo.html',
  styleUrl: './su-menubar-demo.scss'
})
export class SuMenubarDemo {
  // Sample menubar items
  basicMenubarItems: MenubarItem[] = [
    {
      label: 'File',
      items: [
        { label: 'New', icon: '📄', command: () => this.showMessage('New file created') },
        { label: 'Open', icon: '📁', command: () => this.showMessage('File opened') },
        { label: 'Save', icon: '💾', command: () => this.showMessage('File saved') },
        { separator: true },
        { label: 'Exit', icon: '🚪', command: () => this.showMessage('Application exit') }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: '↶', command: () => this.showMessage('Undo action') },
        { label: 'Redo', icon: '↷', command: () => this.showMessage('Redo action') },
        { separator: true },
        { label: 'Cut', icon: '✂️', command: () => this.showMessage('Cut to clipboard') },
        { label: 'Copy', icon: '📋', command: () => this.showMessage('Copied to clipboard') },
        { label: 'Paste', icon: '📄', command: () => this.showMessage('Pasted from clipboard') }
      ]
    },
    {
      label: 'View',
      items: [
        { label: 'Zoom In', icon: '🔍+', command: () => this.showMessage('Zoomed in') },
        { label: 'Zoom Out', icon: '🔍-', command: () => this.showMessage('Zoomed out') },
        { label: 'Reset Zoom', icon: '🔍', command: () => this.showMessage('Zoom reset') },
        { separator: true },
        { label: 'Fullscreen', icon: '⛶', command: () => this.showMessage('Toggled fullscreen') }
      ]
    },
    {
      label: 'Help',
      items: [
        { label: 'Documentation', icon: '📚', command: () => this.showMessage('Opening documentation') },
        { label: 'Keyboard Shortcuts', icon: '⌨️', command: () => this.showMessage('Showing shortcuts') },
        { separator: true },
        { label: 'About', icon: 'ℹ️', command: () => this.showMessage('About dialog') }
      ]
    }
  ];

  appMenubarItems: MenubarItem[] = [
    {
      label: 'Dashboard',
      icon: '📊',
      command: () => this.showMessage('Navigating to Dashboard')
    },
    {
      label: 'Projects',
      items: [
        { label: 'Create Project', icon: '➕', command: () => this.showMessage('Creating new project') },
        { label: 'Open Project', icon: '📂', command: () => this.showMessage('Opening project') },
        { separator: true },
        { label: 'Recent Projects', icon: '🕒', command: () => this.showMessage('Showing recent projects') }
      ]
    },
    {
      label: 'Tools',
      items: [
        { label: 'Settings', icon: '⚙️', command: () => this.showMessage('Opening settings') },
        { label: 'Preferences', icon: '🎛️', command: () => this.showMessage('Opening preferences') },
        { separator: true },
        { label: 'Extensions', icon: '🔌', command: () => this.showMessage('Managing extensions') }
      ]
    },
    {
      label: 'Account',
      items: [
        { label: 'Profile', icon: '👤', command: () => this.showMessage('Viewing profile') },
        { label: 'Notifications', icon: '🔔', command: () => this.showMessage('Checking notifications') },
        { separator: true },
        { label: 'Sign Out', icon: '🚪', command: () => this.showMessage('Signing out') }
      ]
    }
  ];

  // Demo properties
  selectedVariant = 'default';
  selectedSize = 'md';
  showIcons = true;
  disabled = false;

  // Available options for demo controls
  variants = [
    { value: 'default', label: 'Default' },
    { value: 'primary', label: 'Primary' },
    { value: 'dark', label: 'Dark' }
  ];

  sizes = [
    { value: 'compact', label: 'Compact' },
    { value: 'md', label: 'Medium' },
    { value: 'large', label: 'Large' }
  ];

  // Menubar event handlers
  onItemClick(item: MenubarItem): void {
    console.log('Menubar item clicked:', item.label);
    if (item.command) {
      item.command();
    }
  }

  private showMessage(message: string): void {
    alert(message);
  }

  // Template helpers
  getBasicMenubarItems(): MenubarItem[] {
    return this.basicMenubarItems;
  }

  getAppMenubarItems(): MenubarItem[] {
    return this.appMenubarItems;
  }

  getMenubarClass(): string {
    let classes = 'sui-menubar';
    
    // Variant class
    if (this.selectedVariant !== 'default') {
      classes += ` sui-menubar-${this.selectedVariant}`;
    }
    
    // Size class
    if (this.selectedSize !== 'md') {
      classes += ` sui-menubar-${this.selectedSize}`;
    }
    
    return classes;
  }
}