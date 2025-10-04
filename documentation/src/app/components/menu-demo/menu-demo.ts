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
    { label: 'Home', icon: 'home' },
    { label: 'About', icon: 'info' },
    { label: 'Contact', icon: 'mail' }
  ];

  // Menu with Icons
  iconMenuItems = [
    { label: 'Dashboard', icon: 'layout-dashboard', highlight: true },
    { label: 'Analytics', icon: 'bar-chart-3', badge: '12' },
    { label: 'Reports', icon: 'file-text', tooltip: 'Generate reports' },
    { separator: true } as any,
    { label: 'Settings', icon: 'settings' },
    { label: 'Profile', icon: 'user', badge: 'New' }
  ];

  // Menu with Submenus
  submenuItems = [
    {
      label: 'File',
      icon: 'file',
      items: [
        { label: 'New', icon: 'plus' },
        { label: 'Open', icon: 'folder-open' },
        { label: 'Save', icon: 'save' }
      ]
    },
    {
      label: 'Edit',
      icon: 'edit',
      items: [
        { label: 'Cut', icon: 'scissors' },
        { label: 'Copy', icon: 'copy' },
        { label: 'Paste', icon: 'clipboard' }
      ]
    },
    {
      label: 'View',
      icon: 'eye',
      items: [
        { label: 'Zoom In', icon: 'zoom-in' },
        { label: 'Zoom Out', icon: 'zoom-out' },
        { label: 'Reset Zoom', icon: 'maximize' }
      ]
    }
  ];

  // Disabled Menu
  disabledMenuItems = [
    { label: 'Available', icon: 'check' },
    { label: 'Disabled Item', icon: 'x', disabled: true },
    { label: 'Another Available', icon: 'check' },
    { separator: true } as any,
    { label: 'Coming Soon', icon: 'clock', disabled: true }
  ];

  // Popup Menu
  popupMenuItems = [
    { label: 'Edit', icon: 'edit' },
    { label: 'Duplicate', icon: 'copy' },
    { label: 'Delete', icon: 'trash-2' },
    { separator: true } as any,
    { label: 'Share', icon: 'share-2' }
  ];

  // Size variants
  smallMenuItems = [
    { label: 'Item 1', icon: 'circle' },
    { label: 'Item 2', icon: 'circle' },
    { label: 'Item 3', icon: 'circle' }
  ];

  largeMenuItems = [
    { label: 'Large Item One', icon: 'square' },
    { label: 'Large Item Two', icon: 'square' },
    { label: 'Large Item Three', icon: 'square' }
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