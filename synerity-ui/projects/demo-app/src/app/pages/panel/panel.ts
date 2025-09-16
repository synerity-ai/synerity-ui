import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Panel } from 'ui-lib';

@Component({
  selector: 'app-panel',
  imports: [CommonModule, FormsModule, Tabs, Panel],
  templateUrl: './panel.html',
  styleUrl: './panel.scss'
})
export class PanelPage {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicPanelCode = false;
  showToggleablePanelCode = false;
  showNoHeaderPanelCode = false;
  showCustomStylingCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicPanel':
        this.showBasicPanelCode = !this.showBasicPanelCode;
        break;
      case 'toggleablePanel':
        this.showToggleablePanelCode = !this.showToggleablePanelCode;
        break;
      case 'noHeaderPanel':
        this.showNoHeaderPanelCode = !this.showNoHeaderPanelCode;
        break;
      case 'customStyling':
        this.showCustomStylingCode = !this.showCustomStylingCode;
        break;
    }
  }

  onPanelToggle(event: any): void {
    console.log('Panel toggled:', event);
  }
}