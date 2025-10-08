import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentExample } from '../../models/component.model';
import { Breadcrumb } from '@synerity/ui';

@Component({
  selector: 'app-breadcrumb-demo',
  imports: [CommonModule, Breadcrumb],
  templateUrl: './breadcrumb-demo.html',
  styleUrl: './breadcrumb-demo.scss'
})
export class BreadcrumbDemo {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Demo data for different breadcrumb examples
  basicBreadcrumbItems = [
    { label: 'Home', url: '#' },
    { label: 'Products', url: '#' },
    { label: 'Electronics', url: '#' },
    { label: 'Smartphones' }
  ];

  breadcrumbWithIcons = [
    { label: 'Dashboard', url: '#', icon: '📊' },
    { label: 'Projects', url: '#', icon: '📁' },
    { label: 'Current Project', icon: '⚡' }
  ];

  breadcrumbWithDisabled = [
    { label: 'Home', url: '#' },
    { label: 'Admin Panel', disabled: true },
    { label: 'Settings', url: '#' },
    { label: 'User Management' }
  ];

  longBreadcrumbItems = [
    { label: 'Home', url: '#' },
    { label: 'Documentation', url: '#' },
    { label: 'Components', url: '#' },
    { label: 'Navigation', url: '#' },
    { label: 'Breadcrumb', url: '#' },
    { label: 'Examples', url: '#' },
    { label: 'Advanced Usage' }
  ];

  breadcrumbWithCommands = [
    { label: 'Home', command: () => this.navigateToHome() },
    { label: 'Products', command: () => this.navigateToProducts() },
    { label: 'Category', command: () => this.navigateToCategory() },
    { label: 'Current Item' }
  ];

  customHomeItem = {
    label: '🏠 Dashboard',
    url: '#',
    icon: '🏠'
  };

  commandHomeItem = {
    label: 'Home',
    command: () => this.navigateToHome()
  };

  // Demo methods
  navigateToHome(): void {
    console.log('Navigating to Home');
    alert('Navigated to Home');
  }

  navigateToProducts(): void {
    console.log('Navigating to Products');
    alert('Navigated to Products');
  }

  navigateToCategory(): void {
    console.log('Navigating to Category');
    alert('Navigated to Category');
  }

  onItemClick(event: any): void {
    console.log('Breadcrumb item clicked:', event);
  }
}
