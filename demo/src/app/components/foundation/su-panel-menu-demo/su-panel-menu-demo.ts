import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PanelMenuItem {
  label?: string;
  icon?: string;
  command?: () => void;
  disabled?: boolean;
  separator?: boolean;
  expanded?: boolean;
  items?: PanelMenuItem[];
}

@Component({
  selector: 'app-su-panel-menu-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './su-panel-menu-demo.html',
  styleUrl: './su-panel-menu-demo.scss'
})
export class SuPanelMenuDemo {
  // Sample panel menu items
  basicPanelMenuItems: PanelMenuItem[] = [
    {
      label: 'Dashboard',
      icon: '📊',
      command: () => this.showMessage('Navigating to Dashboard')
    },
    {
      label: 'Projects',
      icon: '📁',
      items: [
        { label: 'Create Project', icon: '➕', command: () => this.showMessage('Creating new project') },
        { label: 'Open Project', icon: '📂', command: () => this.showMessage('Opening project') },
        { separator: true },
        { label: 'Recent Projects', icon: '🕒', command: () => this.showMessage('Showing recent projects') }
      ]
    },
    {
      label: 'Tools',
      icon: '🔧',
      items: [
        { label: 'Settings', icon: '⚙️', command: () => this.showMessage('Opening settings') },
        { label: 'Preferences', icon: '🎛️', command: () => this.showMessage('Opening preferences') },
        { separator: true },
        { label: 'Extensions', icon: '🔌', command: () => this.showMessage('Managing extensions') }
      ]
    },
    { separator: true },
    {
      label: 'Help',
      icon: '❓',
      items: [
        { label: 'Documentation', icon: '📚', command: () => this.showMessage('Opening documentation') },
        { label: 'Support', icon: '🆘', command: () => this.showMessage('Getting support') },
        { separator: true },
        { label: 'About', icon: 'ℹ️', command: () => this.showMessage('About dialog') }
      ]
    }
  ];

  navigationPanelMenuItems: PanelMenuItem[] = [
    {
      label: 'Home',
      icon: '🏠',
      command: () => this.showMessage('Going to Home')
    },
    {
      label: 'Products',
      icon: '📦',
      items: [
        { label: 'Electronics', icon: '💻', command: () => this.showMessage('Browse Electronics') },
        { label: 'Clothing', icon: '👕', command: () => this.showMessage('Browse Clothing') },
        { label: 'Books', icon: '📚', command: () => this.showMessage('Browse Books') },
        { separator: true },
        { label: 'New Arrivals', icon: '🆕', command: () => this.showMessage('View New Arrivals') }
      ]
    },
    {
      label: 'Services',
      icon: '🛠️',
      items: [
        { label: 'Consulting', icon: '💼', command: () => this.showMessage('Consulting Services') },
        { label: 'Support', icon: '🎧', command: () => this.showMessage('Customer Support') },
        { label: 'Training', icon: '🎓', command: () => this.showMessage('Training Programs') }
      ]
    },
    {
      label: 'Contact',
      icon: '📞',
      command: () => this.showMessage('Contact Us')
    }
  ];

  // Demo properties
  selectedVariant = 'default';
  selectedSize = 'md';
  selectedWidth = 'md';
  multiple = false;
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

  widths = [
    { value: 'narrow', label: 'Narrow' },
    { value: 'md', label: 'Medium' },
    { value: 'wide', label: 'Wide' },
    { value: 'full', label: 'Full Width' }
  ];

  // Panel menu event handlers
  onItemClick(item: PanelMenuItem): void {
    console.log('Panel menu item clicked:', item.label);
    if (item.command) {
      item.command();
    }
  }

  private showMessage(message: string): void {
    alert(message);
  }

  // Template helpers
  getBasicPanelMenuItems(): PanelMenuItem[] {
    return this.basicPanelMenuItems;
  }

  getNavigationPanelMenuItems(): PanelMenuItem[] {
    return this.navigationPanelMenuItems;
  }

  getPanelMenuClass(): string {
    let classes = 'sui-panel-menu';
    
    // Variant class
    if (this.selectedVariant !== 'default') {
      classes += ` sui-panel-menu-${this.selectedVariant}`;
    }
    
    // Size class
    if (this.selectedSize !== 'md') {
      classes += ` sui-panel-menu-${this.selectedSize}`;
    }
    
    // Width class
    if (this.selectedWidth !== 'md') {
      classes += ` sui-panel-menu-${this.selectedWidth}`;
    }
    
    return classes;
  }

  hasSubmenu(item: PanelMenuItem): boolean {
    return !!(item.items && item.items.length > 0);
  }
}