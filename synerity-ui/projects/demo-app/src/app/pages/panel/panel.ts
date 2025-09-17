import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Panel as SuiPanel } from '../../../../../ui-lib/src/lib/panel/panel';

@Component({
  selector: 'app-panel',
  imports: [CommonModule, FormsModule, Tabs, SuiPanel],
  templateUrl: './panel.html',
  styleUrl: './panel.scss'
})
export class Panel {
  activeTab = 'demo';
  
  // Demo data
  panelCollapsed = false;
  panelToggleable = true;
  
  // Code visibility states
  showBasicPanelCode = false;
  showCollapsiblePanelCode = false;
  showCustomPanelCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicPanel':
        this.showBasicPanelCode = !this.showBasicPanelCode;
        break;
      case 'collapsiblePanel':
        this.showCollapsiblePanelCode = !this.showCollapsiblePanelCode;
        break;
      case 'customPanel':
        this.showCustomPanelCode = !this.showCustomPanelCode;
        break;
    }
  }
  
  // Panel demo methods
  togglePanel() {
    this.panelCollapsed = !this.panelCollapsed;
  }
}
