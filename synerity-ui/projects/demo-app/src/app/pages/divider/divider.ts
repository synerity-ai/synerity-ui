import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Divider as SuiDivider } from '../../../../../ui-lib/src/lib/divider/divider';

@Component({
  selector: 'app-divider',
  imports: [CommonModule, FormsModule, Tabs, SuiDivider],
  templateUrl: './divider.html',
  styleUrl: './divider.scss'
})
export class Divider {
  activeTab = 'demo';
  
  // Code visibility states
  showBasicDividerCode = false;
  showVerticalDividerCode = false;
  showTextDividerCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicDivider':
        this.showBasicDividerCode = !this.showBasicDividerCode;
        break;
      case 'verticalDivider':
        this.showVerticalDividerCode = !this.showVerticalDividerCode;
        break;
      case 'textDivider':
        this.showTextDividerCode = !this.showTextDividerCode;
        break;
    }
  }
}
