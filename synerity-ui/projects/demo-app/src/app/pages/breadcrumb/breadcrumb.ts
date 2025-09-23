import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Breadcrumb as SuiBreadcrumb } from 'ui-lib';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiBreadcrumb],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss'
})
export class BreadcrumbComponent {
  activeTab = 'demo';
  lastClickedItem: any = null;

  homeItem = { 
    label: 'Home', 
    icon: '🏠',
    url: '/' 
  };

  customHomeItem = { 
    label: 'Dashboard', 
    icon: '📊',
    url: '/dashboard' 
  };

  basicBreadcrumb = [
    { label: 'Products', url: '/products' },
    { label: 'Electronics', url: '/products/electronics' },
    { label: 'Smartphones', url: '/products/electronics/smartphones' },
    { label: 'iPhone 15' }
  ];

  iconBreadcrumb = [
    { label: 'Dashboard', icon: '📊', url: '/dashboard' },
    { label: 'Reports', icon: '📈', url: '/reports' },
    { label: 'Sales Report', icon: '💰', url: '/reports/sales' },
    { label: 'Monthly Summary', icon: '📅' }
  ];

  disabledBreadcrumb = [
    { label: 'Products', url: '/products' },
    { label: 'Electronics', disabled: true },
    { label: 'Smartphones', url: '/products/electronics/smartphones' },
    { label: 'iPhone 15' }
  ];

  longBreadcrumb = [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/products' },
    { label: 'Electronics', url: '/products/electronics' },
    { label: 'Mobile Devices', url: '/products/electronics/mobile' },
    { label: 'Smartphones', url: '/products/electronics/mobile/smartphones' },
    { label: 'Apple', url: '/products/electronics/mobile/smartphones/apple' },
    { label: 'iPhone 15 Pro Max' }
  ];

  // Code visibility toggles
  showBasicBreadcrumbCode = false;
  showIconBreadcrumbCode = false;
  showDisabledBreadcrumbCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicBreadcrumb':
        this.showBasicBreadcrumbCode = !this.showBasicBreadcrumbCode;
        break;
      case 'iconBreadcrumb':
        this.showIconBreadcrumbCode = !this.showIconBreadcrumbCode;
        break;
      case 'disabledBreadcrumb':
        this.showDisabledBreadcrumbCode = !this.showDisabledBreadcrumbCode;
        break;
    }
  }

  onBreadcrumbClick(event: any): void {
    this.lastClickedItem = event;
    console.log('Breadcrumb clicked:', event);
  }
}