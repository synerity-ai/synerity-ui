import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, FormsModule, Tabs],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class SidebarComponent {
  activeTab = 'demo';
  
  // Demo data
  sidebarVisible = false;
  sidebarPosition = 'left';
  
  // Code visibility states
  showBasicSidebarCode = false;
  showCustomSidebarCode = false;
  showEventSidebarCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicSidebar':
        this.showBasicSidebarCode = !this.showBasicSidebarCode;
        break;
      case 'customSidebar':
        this.showCustomSidebarCode = !this.showCustomSidebarCode;
        break;
      case 'eventSidebar':
        this.showEventSidebarCode = !this.showEventSidebarCode;
        break;
    }
  }
  
  // Sidebar demo methods
  onSidebarShow(event: any) {
    console.log('Sidebar shown:', event);
  }
  
  onSidebarHide(event: any) {
    console.log('Sidebar hidden:', event);
  }
  
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
