import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Tooltip as SuiTooltip } from 'ui-lib';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiTooltip],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss'
})
export class TooltipComponent {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicTooltipCode = false;
  showCustomTooltipCode = false;
  showDisabledTooltipCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicTooltip':
        this.showBasicTooltipCode = !this.showBasicTooltipCode;
        break;
      case 'customTooltip':
        this.showCustomTooltipCode = !this.showCustomTooltipCode;
        break;
      case 'disabledTooltip':
        this.showDisabledTooltipCode = !this.showDisabledTooltipCode;
        break;
    }
  }
}