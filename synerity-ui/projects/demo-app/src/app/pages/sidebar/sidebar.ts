import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from 'ui-lib';

interface SidebarMenuItem {
  label?: string;
  icon?: string;
  routerLink?: string;
  items?: SidebarMenuItem[];
  disabled?: boolean;
  separator?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, Sidebar],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent {
  activeTab = 0;
  showBasicSidebar = false;
  showPositionedSidebar = false;
  showModalSidebar = false;
  showCustomSidebar = false;

  showBasicCode = false;
  showPositionedCode = false;
  showModalCode = false;
  showCustomCode = false;

  sidebarItems: SidebarMenuItem[] = [
    {
      label: 'Dashboard',
      icon: '🏠',
      routerLink: '/dashboard'
    },
    {
      label: 'Products',
      icon: '📦',
      items: [
        {
          label: 'All Products',
          routerLink: '/products'
        },
        {
          label: 'Categories',
          routerLink: '/products/categories'
        },
        {
          label: 'Inventory',
          routerLink: '/products/inventory'
        }
      ]
    },
    {
      label: 'Orders',
      icon: '📋',
      routerLink: '/orders'
    },
    {
      separator: true
    },
    {
      label: 'Settings',
      icon: '⚙️',
      items: [
        {
          label: 'General',
          routerLink: '/settings/general'
        },
        {
          label: 'Security',
          routerLink: '/settings/security'
        },
        {
          label: 'Notifications',
          routerLink: '/settings/notifications'
        }
      ]
    },
    {
      label: 'Help',
      icon: '❓',
      routerLink: '/help'
    },
    {
      label: 'Disabled Item',
      icon: '🚫',
      disabled: true
    }
  ];

  onTabChange(index: number): void {
    this.activeTab = index;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'positioned':
        this.showPositionedCode = !this.showPositionedCode;
        break;
      case 'modal':
        this.showModalCode = !this.showModalCode;
        break;
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
    }
  }

  toggleBasicSidebar(): void {
    this.showBasicSidebar = !this.showBasicSidebar;
  }

  togglePositionedSidebar(): void {
    this.showPositionedSidebar = !this.showPositionedSidebar;
  }

  toggleModalSidebar(): void {
    this.showModalSidebar = !this.showModalSidebar;
  }

  toggleCustomSidebar(): void {
    this.showCustomSidebar = !this.showCustomSidebar;
  }

  closeModalSidebar(): void {
    this.showModalSidebar = false;
  }

  onShow(): void {
    console.log('Sidebar shown');
  }

  onHide(): void {
    console.log('Sidebar hidden');
  }
}