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
    { label: 'Home', lucideIcon: 'home' },
    { label: 'About', lucideIcon: 'info' },
    { label: 'Contact', lucideIcon: 'mail' }
  ];

  // Menu with Icons
  iconMenuItems = [
    { label: 'Dashboard', lucideIcon: 'layout-dashboard', highlight: true },
    { label: 'Analytics', lucideIcon: 'bar-chart-3', badge: '12' },
    { label: 'Reports', lucideIcon: 'file-text', tooltip: 'Generate reports' },
    { separator: true } as any,
    { label: 'Settings', lucideIcon: 'settings' },
    { label: 'Profile', lucideIcon: 'user', badge: 'New' }
  ];

  // Menu with Submenus
  submenuItems = [
    {
      label: 'File',
      lucideIcon: 'file',
      items: [
        { label: 'New', lucideIcon: 'plus' },
        { label: 'Open', lucideIcon: 'folder-open' },
        { label: 'Save', lucideIcon: 'save' }
      ]
    },
    {
      label: 'Edit',
      lucideIcon: 'edit',
      items: [
        { label: 'Cut', lucideIcon: 'scissors' },
        { label: 'Copy', lucideIcon: 'copy' },
        { label: 'Paste', lucideIcon: 'clipboard' }
      ]
    },
    {
      label: 'View',
      lucideIcon: 'eye',
      items: [
        { label: 'Zoom In', lucideIcon: 'zoom-in' },
        { label: 'Zoom Out', lucideIcon: 'zoom-out' },
        { label: 'Reset Zoom', lucideIcon: 'maximize' }
      ]
    }
  ];

  // Disabled Menu
  disabledMenuItems = [
    { label: 'Available', lucideIcon: 'check' },
    { label: 'Disabled Item', lucideIcon: 'x', disabled: true },
    { label: 'Another Available', lucideIcon: 'check' },
    { separator: true } as any,
    { label: 'Coming Soon', lucideIcon: 'clock', disabled: true }
  ];

  // Popup Menu
  popupMenuItems = [
    { label: 'Edit', lucideIcon: 'edit' },
    { label: 'Duplicate', lucideIcon: 'copy' },
    { label: 'Delete', lucideIcon: 'trash-2' },
    { separator: true } as any,
    { label: 'Share', lucideIcon: 'share-2' }
  ];

  // Size variants
  smallMenuItems = [
    { label: 'Item 1', lucideIcon: 'circle' },
    { label: 'Item 2', lucideIcon: 'circle' },
    { label: 'Item 3', lucideIcon: 'circle' }
  ];

  largeMenuItems = [
    { label: 'Large Item One', lucideIcon: 'square' },
    { label: 'Large Item Two', lucideIcon: 'square' },
    { label: 'Large Item Three', lucideIcon: 'square' }
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