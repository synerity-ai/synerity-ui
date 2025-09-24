import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { BlockUi as SuiBlockUi } from 'ui-lib';

@Component({
  selector: 'app-blockui',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiBlockUi],
  templateUrl: './blockui.html',
  styleUrl: './blockui.scss'
})
export class BlockUiComponent {
  activeTab = 'demo';
  
  // Demo data
  isBlocked = false;
  customMessage = 'Processing your request...';
  showSpinner = true;
  
  // Code visibility states
  showBasicBlockUiCode = false;
  showCustomBlockUiCode = false;
  showNoSpinnerBlockUiCode = false;
  
  onTabChange(tab: string): void {
    this.activeTab = tab;
  }
  
  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicBlockUiCode = !this.showBasicBlockUiCode;
        break;
      case 'custom':
        this.showCustomBlockUiCode = !this.showCustomBlockUiCode;
        break;
      case 'nospinner':
        this.showNoSpinnerBlockUiCode = !this.showNoSpinnerBlockUiCode;
        break;
    }
  }
  
  toggleBlock(): void {
    this.isBlocked = !this.isBlocked;
  }
  
  simulateLoading(): void {
    this.isBlocked = true;
    setTimeout(() => {
      this.isBlocked = false;
    }, 3000);
  }
}