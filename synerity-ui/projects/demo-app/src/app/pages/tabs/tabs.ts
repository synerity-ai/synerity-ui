import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Tabs as SuiTabs } from '../../../../../ui-lib/src/lib/tabs/tabs';

@Component({
  selector: 'app-tabs-demo',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiTabs],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss'
})
export class TabsDemoComponent {
  activeTab = 'demo';
  showBasicTabsCode = false;
  showIconTabsCode = false;
  showClosableTabsCode = false;

  // Basic tabs
  basicActiveIndex = 0;
  basicTabs = [
    { header: 'First Tab' },
    { header: 'Second Tab' },
    { header: 'Third Tab' }
  ];

  // Icon tabs
  iconActiveIndex = 0;
  iconTabs = [
    { header: 'Dashboard', icon: '📊' },
    { header: 'Users', icon: '👥' },
    { header: 'Settings', icon: '⚙️' }
  ];

  // Closable tabs
  closableActiveIndex = 0;
  closableTabs = [
    { header: 'Tab 1', closable: true },
    { header: 'Tab 2', closable: true },
    { header: 'Tab 3', closable: true }
  ];

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicTabs':
        this.showBasicTabsCode = !this.showBasicTabsCode;
        break;
      case 'iconTabs':
        this.showIconTabsCode = !this.showIconTabsCode;
        break;
      case 'closableTabs':
        this.showClosableTabsCode = !this.showClosableTabsCode;
        break;
    }
  }

  onBasicActiveIndexChange(index: number): void {
    this.basicActiveIndex = index;
  }

  onIconActiveIndexChange(index: number): void {
    this.iconActiveIndex = index;
  }

  onClosableActiveIndexChange(index: number): void {
    this.closableActiveIndex = index;
  }

  onTabClose(index: number): void {
    console.log('Tab closed:', index);
    // Adjust active index if needed
    if (this.closableActiveIndex >= this.closableTabs.length) {
      this.closableActiveIndex = Math.max(0, this.closableTabs.length - 1);
    }
  }

  addNewTab(): void {
    const newTabNumber = this.closableTabs.length + 1;
    this.closableTabs.push({ 
      header: `Tab ${newTabNumber}`, 
      closable: true 
    });
    this.closableActiveIndex = this.closableTabs.length - 1;
  }
}