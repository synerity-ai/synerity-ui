import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Ripple as SuiRipple } from '../../../../../ui-lib/src/lib/ripple/ripple';

@Component({
  selector: 'app-ripple',
  standalone: true,
  imports: [CommonModule, FormsModule, Tabs, SuiRipple],
  templateUrl: './ripple.html',
  styleUrl: './ripple.scss'
})
export class RippleComponent {
  activeTab = 'demo';
  showBasicCode = false;
  showColorCode = false;
  showCustomCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'color':
        this.showColorCode = !this.showColorCode;
        break;
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
    }
  }

  onRippleClick(): void {
    console.log('Ripple effect triggered');
  }
}
