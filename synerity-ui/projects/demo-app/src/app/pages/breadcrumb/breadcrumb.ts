import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, Breadcrumb, Tabs],
  templateUrl: './breadcrumb.html',
  styleUrls: ['./breadcrumb.scss']
})
export class BreadcrumbComponent {
  activeTab = 'demo';
  showBasicBreadcrumbCode = false;
  showBreadcrumbVariantsCode = false;
  showBreadcrumbStatesCode = false;

  // Demo data
  basicModel = [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/products' },
    { label: 'Electronics', url: '/products/electronics' },
    { label: 'Smartphones' }
  ];

  customModel = [
    { label: 'Dashboard', url: '/dashboard', icon: '🏠' },
    { label: 'Projects', url: '/projects', icon: '📁' },
    { label: 'Current Project', url: '/projects/current', icon: '📋' },
    { label: 'Tasks', icon: '✅' }
  ];

  iconModel = [
    { label: 'Home', icon: '🏠' },
    { label: 'Library', icon: '📚' },
    { label: 'Data', icon: '💾' },
    { label: 'Documents', icon: '📄' }
  ];

  homeItem = {
    label: 'Home',
    icon: '🏠',
    url: '/'
  };

  longPathModel = [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/products' },
    { label: 'Electronics', url: '/products/electronics' },
    { label: 'Computers', url: '/products/electronics/computers' },
    { label: 'Laptops', url: '/products/electronics/computers/laptops' },
    { label: 'Gaming Laptops', url: '/products/electronics/computers/laptops/gaming' },
    { label: 'High-End Gaming Laptops' }
  ];

  onTabChange(tabId: string): void {
    this.activeTab = tabId;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicBreadcrumbCode = !this.showBasicBreadcrumbCode;
        break;
      case 'variants':
        this.showBreadcrumbVariantsCode = !this.showBreadcrumbVariantsCode;
        break;
      case 'states':
        this.showBreadcrumbStatesCode = !this.showBreadcrumbStatesCode;
        break;
    }
  }

  onBreadcrumbClick(item: any): void {
    console.log('Breadcrumb clicked:', item);
    if (item.url) {
      // In a real app, you would navigate to the URL
      console.log('Navigating to:', item.url);
    }
  }

  onHomeClick(): void {
    console.log('Home clicked');
  }
}