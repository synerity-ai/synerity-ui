import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '@synerity/ui';

@Component({
  selector: 'app-su-breadcrumb-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Breadcrumb],
  templateUrl: './su-breadcrumb-demo.html',
  styleUrl: './su-breadcrumb-demo.scss'
})
export class SuBreadcrumbDemo {
  // Basic breadcrumb data
  basicBreadcrumbs = [
    { label: 'Dashboard', url: '/dashboard' },
    { label: 'Settings', url: '/settings' },
    { label: 'Profile' }
  ];

  // Breadcrumb with icons
  iconBreadcrumbs = [
    { label: 'Products', url: '/products', icon: '📦' },
    { label: 'Electronics', url: '/products/electronics', icon: '💻' },
    { label: 'Smartphones', icon: '📱' }
  ];

  // Custom home configuration
  customHome = { label: '🏠 Dashboard', url: '/dashboard' };

  // Disabled breadcrumb
  disabledBreadcrumbs = [
    { label: 'Step 1', url: '/step1' },
    { label: 'Step 2', url: '/step2' },
    { label: 'Step 3', disabled: true },
    { label: 'Step 4' }
  ];

  // Interactive breadcrumb (for command handling)
  interactiveBreadcrumbs = [
    { label: 'Home', command: () => this.handleNavigation('home') },
    { label: 'Users', command: () => this.handleNavigation('users') },
    { label: 'John Doe', command: () => this.handleNavigation('user-detail') }
  ];

  // Current breadcrumb style variant
  currentStyle = 'default';
  
  // Current home configuration
  currentHome = 'default';

  // Style variants - defined as property to avoid recreating on every change detection
  styleVariants = [
    { value: 'default', label: 'Default' },
    { value: 'compact', label: 'Compact' },
    { value: 'large', label: 'Large' }
  ];

  // Home variants - defined as property to avoid recreating on every change detection
  homeVariants = [
    { value: 'default', label: 'Default Home' },
    { value: 'custom', label: 'Custom Home' },
    { value: 'icon-only', label: 'Icon Only' }
  ];

  handleNavigation(route: string): void {
    console.log(`Navigating to: ${route}`);
    alert(`Would navigate to: ${route}`);
  }

  onBreadcrumbClick(event: any): void {
    console.log('Breadcrumb clicked:', event);
  }

  getBreadcrumbStyle(): any {
    switch (this.currentStyle) {
      case 'compact':
        return { fontSize: '0.75rem', padding: '0.25rem 0' };
      case 'large':
        return { fontSize: '1.125rem', padding: '0.5rem 0' };
      default:
        return {};
    }
  }

  getHomeConfig(): any {
    switch (this.currentHome) {
      case 'custom':
        return this.customHome;
      case 'icon-only':
        return { label: '', icon: '🏠', url: '/home' };
      default:
        return { label: 'Home', icon: '🏠' };
    }
  }
}