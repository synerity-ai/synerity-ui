import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Drawer as SuiDrawer } from 'ui-lib';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiDrawer],
  templateUrl: './drawer.html',
  styleUrl: './drawer.scss'
})
export class DrawerComponent {
  activeTab = 'demo';
  showLeftDrawer = false;
  showRightDrawer = false;
  showTopDrawer = false;
  showBottomDrawer = false;

  // Code visibility toggles
  showLeftDrawerCode = false;
  showRightDrawerCode = false;
  showTopDrawerCode = false;
  showBottomDrawerCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'leftDrawer':
        this.showLeftDrawerCode = !this.showLeftDrawerCode;
        break;
      case 'rightDrawer':
        this.showRightDrawerCode = !this.showRightDrawerCode;
        break;
      case 'topDrawer':
        this.showTopDrawerCode = !this.showTopDrawerCode;
        break;
      case 'bottomDrawer':
        this.showBottomDrawerCode = !this.showBottomDrawerCode;
        break;
    }
  }
}
