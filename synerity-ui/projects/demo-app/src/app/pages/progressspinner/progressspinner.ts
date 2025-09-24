import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { ProgressSpinner as SuiProgressSpinner } from 'ui-lib';

@Component({
  selector: 'app-progressspinner',
  standalone: true,
  imports: [CommonModule, FormsModule, AppTabs, SuiProgressSpinner],
  templateUrl: './progressspinner.html',
  styleUrl: './progressspinner.scss'
})
export class ProgressspinnerComponent {
  activeTab = 'demo';
  showBasicCode = false;
  showSizeCode = false;
  showCustomCode = false;

  // Demo data
  isLoading = false;
  loadingMessage = 'Loading...';

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'size':
        this.showSizeCode = !this.showSizeCode;
        break;
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
    }
  }

  startLoading(): void {
    this.isLoading = true;
    this.loadingMessage = 'Processing...';
    
    // Simulate loading for 3 seconds
    setTimeout(() => {
      this.isLoading = false;
      this.loadingMessage = 'Loading complete!';
    }, 3000);
  }

  startCustomLoading(): void {
    this.isLoading = true;
    this.loadingMessage = 'Custom loading...';
    
    // Simulate loading for 5 seconds
    setTimeout(() => {
      this.isLoading = false;
      this.loadingMessage = 'Custom loading complete!';
    }, 5000);
  }
}
