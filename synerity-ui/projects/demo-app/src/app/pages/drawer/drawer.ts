import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-drawer',
  imports: [CommonModule, FormsModule, Tabs],
  templateUrl: './drawer.html',
  styleUrl: './drawer.scss'
})
export class DrawerPage {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicDrawerCode = false;
  showPositionedDrawerCode = false;
  showCustomStylingCode = false;

  // Drawer states
  leftDrawerVisible = false;
  rightDrawerVisible = false;
  topDrawerVisible = false;
  bottomDrawerVisible = false;
  modalDrawerVisible = false;
  nonModalDrawerVisible = false;

  // Drawer configurations
  leftDrawerConfig = {
    position: 'left' as const,
    modal: true,
    closable: true,
    width: '300px'
  };

  rightDrawerConfig = {
    position: 'right' as const,
    modal: true,
    closable: true,
    width: '350px'
  };

  topDrawerConfig = {
    position: 'top' as const,
    modal: true,
    closable: true,
    height: '250px'
  };

  bottomDrawerConfig = {
    position: 'bottom' as const,
    modal: true,
    closable: true,
    height: '300px'
  };

  modalDrawerConfig = {
    position: 'left' as const,
    modal: true,
    closable: true,
    width: '400px'
  };

  nonModalDrawerConfig = {
    position: 'right' as const,
    modal: false,
    closable: true,
    width: '300px'
  };

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicDrawer':
        this.showBasicDrawerCode = !this.showBasicDrawerCode;
        break;
      case 'positionedDrawer':
        this.showPositionedDrawerCode = !this.showPositionedDrawerCode;
        break;
      case 'customStyling':
        this.showCustomStylingCode = !this.showCustomStylingCode;
        break;
    }
  }

  // Drawer actions
  showLeftDrawer(): void {
    this.leftDrawerVisible = true;
  }

  showRightDrawer(): void {
    this.rightDrawerVisible = true;
  }

  showTopDrawer(): void {
    this.topDrawerVisible = true;
  }

  showBottomDrawer(): void {
    this.bottomDrawerVisible = true;
  }

  showModalDrawer(): void {
    this.modalDrawerVisible = true;
  }

  showNonModalDrawer(): void {
    this.nonModalDrawerVisible = true;
  }

  onDrawerShow(): void {
    console.log('Drawer shown');
  }

  onDrawerHide(): void {
    console.log('Drawer hidden');
  }

  closeDrawer(drawerType: string): void {
    switch (drawerType) {
      case 'left':
        this.leftDrawerVisible = false;
        break;
      case 'right':
        this.rightDrawerVisible = false;
        break;
      case 'top':
        this.topDrawerVisible = false;
        break;
      case 'bottom':
        this.bottomDrawerVisible = false;
        break;
      case 'modal':
        this.modalDrawerVisible = false;
        break;
      case 'nonModal':
        this.nonModalDrawerVisible = false;
        break;
    }
  }
}