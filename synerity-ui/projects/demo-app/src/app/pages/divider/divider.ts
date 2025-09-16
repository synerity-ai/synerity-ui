import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Divider } from 'ui-lib';

@Component({
  selector: 'app-divider',
  imports: [CommonModule, FormsModule, Tabs, Divider],
  templateUrl: './divider.html',
  styleUrl: './divider.scss'
})
export class DividerPage {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicDividerCode = false;
  showVerticalDividerCode = false;
  showAlignmentCode = false;
  showCustomStylingCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicDivider':
        this.showBasicDividerCode = !this.showBasicDividerCode;
        break;
      case 'verticalDivider':
        this.showVerticalDividerCode = !this.showVerticalDividerCode;
        break;
      case 'alignment':
        this.showAlignmentCode = !this.showAlignmentCode;
        break;
      case 'customStyling':
        this.showCustomStylingCode = !this.showCustomStylingCode;
        break;
    }
  }
}