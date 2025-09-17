import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { ProgressBar as SuiProgressBar } from '../../../../../ui-lib/src/lib/progress-bar/progress-bar';

@Component({
  selector: 'app-progressbar',
  imports: [CommonModule, FormsModule, Tabs, SuiProgressBar],
  templateUrl: './progressbar.html',
  styleUrl: './progressbar.scss'
})
export class Progressbar {
  activeTab = 'demo';
  
  // Demo data
  progressValue = 45;
  progressMax = 100;
  progressIndeterminate = false;
  
  // Code visibility states
  showBasicProgressCode = false;
  showIndeterminateProgressCode = false;
  showCustomProgressCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicProgress':
        this.showBasicProgressCode = !this.showBasicProgressCode;
        break;
      case 'indeterminateProgress':
        this.showIndeterminateProgressCode = !this.showIndeterminateProgressCode;
        break;
      case 'customProgress':
        this.showCustomProgressCode = !this.showCustomProgressCode;
        break;
    }
  }
  
  // Progress demo methods
  startProgress() {
    this.progressValue = 0;
    const interval = setInterval(() => {
      this.progressValue += 10;
      if (this.progressValue >= 100) {
        clearInterval(interval);
      }
    }, 200);
  }
  
  toggleIndeterminate() {
    this.progressIndeterminate = !this.progressIndeterminate;
  }
}
