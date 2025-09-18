import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Breadcrumb as SuiBreadcrumb } from '../../../../../ui-lib/src/lib/breadcrumb/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule, FormsModule, Tabs, SuiBreadcrumb],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss'
})
export class BreadcrumbComponent {
  activeTab = 'demo';
  
  // Demo data
  breadcrumbItems = [
    { label: 'Home', icon: 'pi pi-home' },
    { label: 'Products', icon: 'pi pi-box' },
    { label: 'Electronics', icon: 'pi pi-mobile' },
    { label: 'Smartphones', icon: 'pi pi-mobile' }
  ];
  
  simpleBreadcrumbItems = [
    { label: 'Home' },
    { label: 'Products' },
    { label: 'Electronics' },
    { label: 'Smartphones' }
  ];
  
  // Code visibility states
  showBasicBreadcrumbCode = false;
  showIconBreadcrumbCode = false;
  showCustomBreadcrumbCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicBreadcrumb':
        this.showBasicBreadcrumbCode = !this.showBasicBreadcrumbCode;
        break;
      case 'iconBreadcrumb':
        this.showIconBreadcrumbCode = !this.showIconBreadcrumbCode;
        break;
      case 'customBreadcrumb':
        this.showCustomBreadcrumbCode = !this.showCustomBreadcrumbCode;
        break;
    }
  }
  
  // Breadcrumb demo methods
  onBreadcrumbItemClick(event: any) {
    console.log('Breadcrumb item clicked:', event);
  }
}
