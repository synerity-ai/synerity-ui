import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Tooltip as SuiTooltip } from '../../../../../ui-lib/src/lib/tooltip/tooltip';

@Component({
  selector: 'app-tooltip',
  imports: [CommonModule, FormsModule, Tabs, SuiTooltip],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss'
})
export class Tooltip {
  activeTab = 'demo';
  
  // Demo data
  tooltipText = 'This is a tooltip message';
  tooltipPosition = 'top';
  
  // Code visibility states
  showBasicTooltipCode = false;
  showPositionTooltipCode = false;
  showCustomTooltipCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicTooltip':
        this.showBasicTooltipCode = !this.showBasicTooltipCode;
        break;
      case 'positionTooltip':
        this.showPositionTooltipCode = !this.showPositionTooltipCode;
        break;
      case 'customTooltip':
        this.showCustomTooltipCode = !this.showCustomTooltipCode;
        break;
    }
  }
}
