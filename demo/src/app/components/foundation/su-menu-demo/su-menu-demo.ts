import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Menu } from '@synerity/ui';

@Component({
  selector: 'app-su-menu-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Menu],
  templateUrl: './su-menu-demo.html',
  styleUrl: './su-menu-demo.scss'
})
export class SuMenuDemo {
  selectedStyle = 'default';
  selectedSize = 'default';
  isMenuVisible = false;

  styles = [
    { value: 'default', label: 'Default' },
    { value: 'outlined', label: 'Outlined' },
    { value: 'filled', label: 'Filled' },
    { value: 'floating', label: 'Floating' }
  ];

  sizes = [
    { value: 'default', label: 'Default' },
    { value: 'sm', label: 'Small' },
    { value: 'lg', label: 'Large' }
  ];

  // Basic menu items
  basicMenuItems = [
    { label: 'Dashboard', icon: '📊', command: () => this.handleMenuClick('Dashboard') },
    { label: 'Profile', icon: '👤', command: () => this.handleMenuClick('Profile') },
    { label: '', separator: true },
    { label: 'Settings', icon: '⚙️', command: () => this.handleMenuClick('Settings') },
    { label: 'Help', icon: '❓', command: () => this.handleMenuClick('Help') }
  ];

  // Menu with submenu
  submenuItems = [
    { 
      label: 'File', 
      icon: '📄',
      items: [
        { label: 'New', icon: '📄', command: () => this.handleMenuClick('New File') },
        { label: 'Open', icon: '📁', command: () => this.handleMenuClick('Open File') },
        { label: 'Save', icon: '💾', command: () => this.handleMenuClick('Save File') },
        { label: '', separator: true },
        { label: 'Exit', icon: '🚪', command: () => this.handleMenuClick('Exit') }
      ]
    },
    { 
      label: 'Edit', 
      icon: '✏️',
      items: [
        { label: 'Undo', icon: '↶', command: () => this.handleMenuClick('Undo') },
        { label: 'Redo', icon: '↷', command: () => this.handleMenuClick('Redo') },
        { label: '', separator: true },
        { label: 'Cut', icon: '✂️', command: () => this.handleMenuClick('Cut') },
        { label: 'Copy', icon: '📋', command: () => this.handleMenuClick('Copy') },
        { label: 'Paste', icon: '📌', command: () => this.handleMenuClick('Paste') }
      ]
    },
    { 
      label: 'View', 
      icon: '👁️',
      items: [
        { label: 'Zoom In', icon: '🔍+', command: () => this.handleMenuClick('Zoom In') },
        { label: 'Zoom Out', icon: '🔍-', command: () => this.handleMenuClick('Zoom Out') },
        { label: '', separator: true },
        { label: 'Fullscreen', icon: '⛶', command: () => this.handleMenuClick('Fullscreen') }
      ]
    }
  ];

  // Context menu items
  contextMenuItems = [
    { label: 'Copy', icon: '📋', command: () => this.handleMenuClick('Copy') },
    { label: 'Paste', icon: '📌', command: () => this.handleMenuClick('Paste') },
    { separator: true },
    { label: 'Cut', icon: '✂️', command: () => this.handleMenuClick('Cut') },
    { label: 'Delete', icon: '🗑️', command: () => this.handleMenuClick('Delete') }
  ];

  // Disabled menu items
  disabledMenuItems = [
    { label: 'Available', icon: '✅', command: () => this.handleMenuClick('Available') },
    { label: 'Disabled Item', icon: '❌', disabled: true },
    { separator: true },
    { label: 'Another Available', icon: '✅', command: () => this.handleMenuClick('Another Available') }
  ];

  // User menu items
  userMenuItems = [
    { label: 'My Profile', icon: '👤', command: () => this.handleMenuClick('Profile') },
    { label: 'Account Settings', icon: '⚙️', command: () => this.handleMenuClick('Settings') },
    { separator: true },
    { label: 'Sign Out', icon: '🚪', command: () => this.handleMenuClick('Sign Out') }
  ];

  handleMenuClick(action: string): void {
    console.log(`Menu action: ${action}`);
    alert(`Menu action: ${action}`);
  }

  onMenuClick(event: any): void {
    console.log('Menu item clicked:', event);
  }

  getMenuClass(): string {
    let classes = '';
    if (this.selectedStyle !== 'default') {
      classes += ` sui-menu-${this.selectedStyle}`;
    }
    if (this.selectedSize !== 'default') {
      classes += ` sui-menu-${this.selectedSize}`;
    }
    return classes.trim();
  }

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
