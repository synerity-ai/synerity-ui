import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressBar as SuiProgressBar } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-progressbar',
  imports: [CommonModule, FormsModule, SuiProgressBar, Tabs],
  templateUrl: './progressbar.html',
  styleUrl: './progressbar.scss'
})
export class ProgressBarPage {
  activeTab = 'demo';
  
  // Progress bar examples
  basicProgress = 45;
  coloredProgress = 75;
  indeterminateProgress = 0;
  customProgress = 30;
  
  // Interactive demo
  interactiveProgress = 50;
  interactiveColor = '#3b82f6';
  interactiveShowValue = true;
  interactiveUnit = '%';
  
  // Code visibility states
  showBasicProgressCode = false;
  showColoredProgressCode = false;
  showIndeterminateProgressCode = false;
  showCustomProgressCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicProgress':
        this.showBasicProgressCode = !this.showBasicProgressCode;
        break;
      case 'coloredProgress':
        this.showColoredProgressCode = !this.showColoredProgressCode;
        break;
      case 'indeterminateProgress':
        this.showIndeterminateProgressCode = !this.showIndeterminateProgressCode;
        break;
      case 'customProgress':
        this.showCustomProgressCode = !this.showCustomProgressCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  // Simulate progress updates
  startIndeterminate() {
    this.indeterminateProgress = 0;
    // Simulate loading
    setTimeout(() => {
      this.indeterminateProgress = 100;
    }, 2000);
  }
}
