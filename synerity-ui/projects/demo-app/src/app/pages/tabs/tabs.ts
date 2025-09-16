import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs as SharedTabs } from '../../shared/tabs/tabs';
import { Tabs } from 'ui-lib';

@Component({
  selector: 'app-tabs',
  imports: [CommonModule, FormsModule, SharedTabs, Tabs],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss'
})
export class TabsPage {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicTabsCode = false;
  showClosableTabsCode = false;
  showDisabledTabsCode = false;
  showCustomStylingCode = false;

  // Tabs configurations
  basicTabs = [
    { header: 'Home', icon: '🏠' },
    { header: 'Profile', icon: '👤' },
    { header: 'Settings', icon: '⚙️' }
  ];

  closableTabs = [
    { header: 'Tab 1', closable: true },
    { header: 'Tab 2', closable: true },
    { header: 'Tab 3', closable: true }
  ];

  disabledTabs = [
    { header: 'Active Tab' },
    { header: 'Disabled Tab', disabled: true },
    { header: 'Another Active Tab' }
  ];

  currentBasicTabIndex = 0;
  currentClosableTabIndex = 0;
  currentDisabledTabIndex = 0;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicTabs':
        this.showBasicTabsCode = !this.showBasicTabsCode;
        break;
      case 'closableTabs':
        this.showClosableTabsCode = !this.showClosableTabsCode;
        break;
      case 'disabledTabs':
        this.showDisabledTabsCode = !this.showDisabledTabsCode;
        break;
      case 'customStyling':
        this.showCustomStylingCode = !this.showCustomStylingCode;
        break;
    }
  }

  onBasicActiveIndexChange(index: number): void {
    this.currentBasicTabIndex = index;
    console.log('Basic tabs active index changed:', index);
  }

  onClosableActiveIndexChange(index: number): void {
    this.currentClosableTabIndex = index;
    console.log('Closable tabs active index changed:', index);
  }

  onDisabledActiveIndexChange(index: number): void {
    this.currentDisabledTabIndex = index;
    console.log('Disabled tabs active index changed:', index);
  }

  onTabClose(index: number): void {
    console.log('Tab closed:', index);
  }

  addNewTab(): void {
    const newTabNumber = this.closableTabs.length + 1;
    this.closableTabs.push({ 
      header: `Tab ${newTabNumber}`, 
      closable: true 
    });
    this.currentClosableTabIndex = this.closableTabs.length - 1;
  }
}