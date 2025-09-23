import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs } from '../../shared/tabs/tabs';
import { Panel as SuiPanel } from '../../../../../ui-lib/src/lib/panel/panel';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule, Tabs, SuiPanel],
  templateUrl: './panel.html',
  styleUrl: './panel.scss'
})
export class PanelComponent {
  activeTab = 'demo';
  showBasicPanelCode = false;
  showToggleablePanelCode = false;
  showNoHeaderPanelCode = false;
  showMultiplePanelsCode = false;
  panelCollapsed = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicPanel':
        this.showBasicPanelCode = !this.showBasicPanelCode;
        break;
      case 'toggleablePanel':
        this.showToggleablePanelCode = !this.showToggleablePanelCode;
        break;
      case 'noHeaderPanel':
        this.showNoHeaderPanelCode = !this.showNoHeaderPanelCode;
        break;
      case 'multiplePanels':
        this.showMultiplePanelsCode = !this.showMultiplePanelsCode;
        break;
    }
  }

  onPanelToggle(event: any): void {
    this.panelCollapsed = event.collapsed;
    console.log('Panel toggled:', event);
  }
}