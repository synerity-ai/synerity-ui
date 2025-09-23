import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Popover as SuiPopover } from 'ui-lib';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiPopover],
  templateUrl: './popover.html',
  styleUrl: './popover.scss'
})
export class PopoverComponent {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicPopoverCode = false;
  showSidePopoverCode = false;
  showArrowPopoverCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicPopover':
        this.showBasicPopoverCode = !this.showBasicPopoverCode;
        break;
      case 'sidePopover':
        this.showSidePopoverCode = !this.showSidePopoverCode;
        break;
      case 'arrowPopover':
        this.showArrowPopoverCode = !this.showArrowPopoverCode;
        break;
    }
  }
}
