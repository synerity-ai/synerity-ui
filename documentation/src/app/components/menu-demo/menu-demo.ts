import { Component, Input } from '@angular/core';
import { Menu, Button } from '@synerity/ui';
import { CommonModule } from '@angular/common';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-menu-demo',
  standalone: true,
  imports: [CommonModule, Menu, Button],
  templateUrl: './menu-demo.html',
  styleUrl: './menu-demo.scss'
})
export class MenuDemoComponent {
  @Input() currentExample: ComponentExample | null = null;

  // Basic Menu
  basicMenuItems = [
    { label: 'Home', icon: '🏠' },
    { label: 'About', icon: 'ℹ️' },
    { label: 'Contact', icon: '📧' }
  ];

  // Menu with Icons
  iconMenuItems = [
    { label: 'Dashboard', icon: '📊' },
    { label: 'Analytics', icon: '📈' },
    { label: 'Reports', icon: '📋' },
    { separator: true } as any,
    { label: 'Settings', icon: '⚙️' },
    { label: 'Profile', icon: '👤' }
  ];

  // Menu with Submenus
  submenuItems = [
    {
      label: 'File',
      icon: '📄',
      items: [
        { label: 'New', icon: '➕' },
        { label: 'Open', icon: '📂' },
        { label: 'Save', icon: '💾' }
      ]
    },
    {
      label: 'Edit',
      icon: '✏️',
      items: [
        { label: 'Cut', icon: '✂️' },
        { label: 'Copy', icon: '📋' },
        { label: 'Paste', icon: '📌' }
      ]
    },
    {
      label: 'View',
      icon: '👁️',
      items: [
        { label: 'Zoom In', icon: '🔍+' },
        { label: 'Zoom Out', icon: '🔍-' },
        { label: 'Reset Zoom', icon: '🎯' }
      ]
    }
  ];

  // Disabled Menu
  disabledMenuItems = [
    { label: 'Available', icon: '✅' },
    { label: 'Disabled Item', icon: '❌', disabled: true },
    { label: 'Another Available', icon: '✅' },
    { separator: true } as any,
    { label: 'Coming Soon', icon: '⏳', disabled: true }
  ];

  // Popup Menu
  popupMenuItems = [
    { label: 'Edit', icon: '✏️' },
    { label: 'Duplicate', icon: '📋' },
    { label: 'Delete', icon: '🗑️' },
    { separator: true } as any,
    { label: 'Share', icon: '📤' }
  ];

  // Size variants
  smallMenuItems = [
    { label: 'Item 1', icon: '1️⃣' },
    { label: 'Item 2', icon: '2️⃣' },
    { label: 'Item 3', icon: '3️⃣' }
  ];

  largeMenuItems = [
    { label: 'Large Item One', icon: '🔴' },
    { label: 'Large Item Two', icon: '🟢' },
    { label: 'Large Item Three', icon: '🔵' }
  ];

  // Menu references for popup
  popupMenu: any;

  onMenuItemClick(item: any): void {
    console.log('Menu item clicked:', item);
  }

  showPopupMenu(event: Event): void {
    if (this.popupMenu) {
      this.popupMenu.show(event);
    }
  }

  onBasicItemClick(item: any): void {
    console.log('Basic menu item clicked:', item);
  }

  onIconItemClick(item: any): void {
    console.log('Icon menu item clicked:', item);
  }

  onSubmenuItemClick(item: any): void {
    console.log('Submenu item clicked:', item);
  }

  onDisabledItemClick(item: any): void {
    console.log('Disabled menu item clicked:', item);
  }

  onPopupItemClick(item: any): void {
    console.log('Popup menu item clicked:', item);
  }

  onSmallItemClick(item: any): void {
    console.log('Small menu item clicked:', item);
  }

  onLargeItemClick(item: any): void {
    console.log('Large menu item clicked:', item);
  }
}