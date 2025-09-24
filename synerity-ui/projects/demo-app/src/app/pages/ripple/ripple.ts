import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Ripple as SuiRipple } from 'ui-lib';

@Component({
  selector: 'app-ripple',
  standalone: true,
  imports: [CommonModule, FormsModule, AppTabs, SuiRipple],
  templateUrl: './ripple.html',
  styleUrl: './ripple.scss'
})
export class RippleComponent {
  activeTab = 'demo';

  // Code visibility states
  showBasicRippleCode = false;
  showColorRippleCode = false;
  showCustomRippleCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicRippleCode = !this.showBasicRippleCode;
        break;
      case 'color':
        this.showColorRippleCode = !this.showColorRippleCode;
        break;
      case 'custom':
        this.showCustomRippleCode = !this.showCustomRippleCode;
        break;
    }
  }

  onRippleClick(): void {
    console.log('Ripple effect triggered');
  }
}
