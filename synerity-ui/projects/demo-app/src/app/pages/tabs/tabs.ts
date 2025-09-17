import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs as SharedTabs } from '../../shared/tabs/tabs';
import { Tabs as SuiTabs } from '../../../../../ui-lib/src/lib/tabs/tabs';

@Component({
  selector: 'app-tabs',
  imports: [CommonModule, FormsModule, SharedTabs, SuiTabs],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss'
})
export class TabsComponent {
  activeTab = 'demo';
  
  // Demo data
  tabsData = [
    { header: 'Tab 1', content: 'Content for Tab 1' },
    { header: 'Tab 2', content: 'Content for Tab 2' },
    { header: 'Tab 3', content: 'Content for Tab 3' }
  ];
  
  activeTabIndex = 0;
  
  // Code visibility states
  showBasicTabsCode = false;
  showVerticalTabsCode = false;
  showClosableTabsCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicTabs':
        this.showBasicTabsCode = !this.showBasicTabsCode;
        break;
      case 'verticalTabs':
        this.showVerticalTabsCode = !this.showVerticalTabsCode;
        break;
      case 'closableTabs':
        this.showClosableTabsCode = !this.showClosableTabsCode;
        break;
    }
  }
  
  // Tabs demo methods
  onTabSelect(event: any) {
    this.activeTabIndex = event;
  }
  
  closeTab(index: number) {
    this.tabsData.splice(index, 1);
    if (this.activeTabIndex >= this.tabsData.length) {
      this.activeTabIndex = this.tabsData.length - 1;
    }
  }
}
