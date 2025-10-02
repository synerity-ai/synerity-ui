import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TieredMenuItem {
  label?: string;
  icon?: string;
  command?: () => void;
  disabled?: boolean;
  separator?: boolean;
  items?: TieredMenuItem[];
}

@Component({
  selector: 'app-su-tiered-menu-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './su-tiered-menu-demo.html',
  styleUrl: './su-tiered-menu-demo.scss'
})
export class SuTieredMenuDemo {
  // Sample tiered menu items
  basicTieredMenuItems: TieredMenuItem[] = [
    {
      label: 'File',
      icon: '📄',
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
      icon: '✏️',
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
      icon: '👁️',
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
      icon: '❓',
      items: [
        { label: 'Documentation', icon: '📚', command: () => this.showMessage('Opening documentation') },
        { label: 'Keyboard Shortcuts', icon: '⌨️', command: () => this.showMessage('Showing shortcuts') },
        { separator: true },
        { label: 'About', icon: 'ℹ️', command: () => this.showMessage('About dialog') }
      ]
    }
  ];

  webTieredMenuItems: TieredMenuItem[] = [
    {
      label: 'Products',
      icon: '📦',
      items: [
        { label: 'Electronics', icon: '💻', command: () => this.showMessage('Browse Electronics') },
        { label: 'Clothing', icon: '👕', command: () => this.showMessage('Browse Clothing') },
        { label: 'Books', icon: '📚', command: () => this.showMessage('Browse Books') },
        { separator: true },
        { label: 'New Arrivals', icon: '🆕', command: () => this.showMessage('View New Arrivals') },
        { label: 'Best Sellers', icon: '🏆', command: () => this.showMessage('View Best Sellers') }
      ]
    },
    {
      label: 'Services',
      icon: '🛠️',
      items: [
        { label: 'Consulting', icon: '💼', command: () => this.showMessage('Consulting Services') },
        { label: 'Support', icon: '🎧', command: () => this.showMessage('Customer Support') },
        { label: 'Training', icon: '🎓', command: () => this.showMessage('Training Programs') },
        { separator: true },
        { label: 'Custom Solutions', icon: '⚙️', command: () => this.showMessage('Custom Solutions') }
      ]
    },
    {
      label: 'Company',
      icon: '🏢',
      items: [
        { label: 'About Us', icon: 'ℹ️', command: () => this.showMessage('About our company') },
        { label: 'Careers', icon: '💼', command: () => this.showMessage('Viewing careers') },
        { label: 'News', icon: '📰', command: () => this.showMessage('Company news') },
        { separator: true },
        { label: 'Contact', icon: '📞', command: () => this.showMessage('Contacting us') }
      ]
    }
  ];

  // Demo properties
  selectedVariant = 'default';
  selectedSize = 'md';
  selectedOrientation = 'horizontal';
  popup = false;
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

  orientations = [
    { value: 'horizontal', label: 'Horizontal' },
    { value: 'vertical', label: 'Vertical' }
  ];

  // Tiered menu event handlers
  onItemClick(item: TieredMenuItem): void {
    console.log('Tiered menu item clicked:', item.label);
    if (item.command) {
      item.command();
    }
  }

  onItemMouseEnter(item: TieredMenuItem): void {
    // Handle mouse enter for hover effects
  }

  onItemMouseLeave(): void {
    // Handle mouse leave
  }

  private showMessage(message: string): void {
    alert(message);
  }

  // Template helpers
  getBasicTieredMenuItems(): TieredMenuItem[] {
    return this.basicTieredMenuItems;
  }

  getWebTieredMenuItems(): TieredMenuItem[] {
    return this.webTieredMenuItems;
  }

  getTieredMenuClass(): string {
    let classes = 'sui-tiered-menu';
    
    // Orientation class
    if (this.selectedOrientation !== 'horizontal') {
      classes += ` sui-tiered-menu-${this.selectedOrientation}`;
    }
    
    // Variant class
    if (this.selectedVariant !== 'default') {
      classes += ` sui-tiered-menu-${this.selectedVariant}`;
    }
    
    // Size class
    if (this.selectedSize !== 'md') {
      classes += ` sui-tiered-menu-${this.selectedSize}`;
    }
    
    // Popup mode
    if (this.popup) {
      classes += ` sui-tiered-menu-popup`;
    }
    
    return classes;
  }

  hasSubmenu(item: TieredMenuItem): boolean {
    return !!(item.items && item.items.length > 0);
  }
}