import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-overlaypanel',
  imports: [CommonModule, FormsModule, Tabs],
  templateUrl: './overlaypanel.html',
  styleUrl: './overlaypanel.scss'
})
export class Overlaypanel {
  activeTab = 'demo';
  
  // Demo data
  overlayPanelVisible = false;
  
  // Code visibility states
  showBasicOverlayPanelCode = false;
  showCustomOverlayPanelCode = false;
  showEventOverlayPanelCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicOverlayPanel':
        this.showBasicOverlayPanelCode = !this.showBasicOverlayPanelCode;
        break;
      case 'customOverlayPanel':
        this.showCustomOverlayPanelCode = !this.showCustomOverlayPanelCode;
        break;
      case 'eventOverlayPanel':
        this.showEventOverlayPanelCode = !this.showEventOverlayPanelCode;
        break;
    }
  }
  
  // Overlay panel demo methods
  onOverlayPanelShow(event: any) {
    console.log('Overlay panel shown:', event);
  }
  
  onOverlayPanelHide(event: any) {
    console.log('Overlay panel hidden:', event);
  }
  
  toggleOverlayPanel(event: any) {
    this.overlayPanelVisible = !this.overlayPanelVisible;
  }
}
