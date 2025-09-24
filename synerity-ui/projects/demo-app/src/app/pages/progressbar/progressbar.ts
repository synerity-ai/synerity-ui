import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { ProgressBar as SuiProgressBar } from 'ui-lib';

@Component({
  selector: 'app-progressbar',
  standalone: true,
  imports: [CommonModule, FormsModule, AppTabs, SuiProgressBar],
  templateUrl: './progressbar.html',
  styleUrl: './progressbar.scss'
})
export class ProgressBarComponent {
  activeTab = 'demo';
  
  // Demo data
  progressValue = 45;
  progressMax = 100;
  progressIndeterminate = false;
  
  // Code visibility states
  showBasicProgressCode = false;
  showIndeterminateProgressCode = false;
  showCustomProgressCode = false;
  
  onTabChange(tab: string): void {
    this.activeTab = tab;
  }
  
  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicProgressCode = !this.showBasicProgressCode;
        break;
      case 'indeterminate':
        this.showIndeterminateProgressCode = !this.showIndeterminateProgressCode;
        break;
      case 'custom':
        this.showCustomProgressCode = !this.showCustomProgressCode;
        break;
    }
  }
  
  // Progress demo methods
  startProgress(): void {
    this.progressValue = 0;
    const interval = setInterval(() => {
      this.progressValue += 10;
      if (this.progressValue >= 100) {
        clearInterval(interval);
      }
    }, 200);
  }
  
  toggleIndeterminate(): void {
    this.progressIndeterminate = !this.progressIndeterminate;
  }
}
