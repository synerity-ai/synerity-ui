import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { StyleClass as SuiStyleClass } from 'ui-lib';

@Component({
  selector: 'app-styleclass',
  standalone: true,
  imports: [CommonModule, FormsModule, AppTabs, SuiStyleClass],
  templateUrl: './styleclass.html',
  styleUrl: './styleclass.scss'
})
export class StyleclassComponent {
  activeTab = 'demo';
  showBasicCode = false;
  showToggleCode = false;
  showCustomCode = false;

  // Demo data
  isActive = false;
  isHighlighted = false;
  isAnimated = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'toggle':
        this.showToggleCode = !this.showToggleCode;
        break;
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
    }
  }

  toggleActive(): void {
    this.isActive = !this.isActive;
  }

  toggleHighlight(): void {
    this.isHighlighted = !this.isHighlighted;
  }

  toggleAnimation(): void {
    this.isAnimated = !this.isAnimated;
  }

  addHighlight(): void {
    // This will be handled by the StyleClass component
  }

  removeHighlight(): void {
    // This will be handled by the StyleClass component
  }

  toggleSize(): void {
    // This will be handled by the StyleClass component
  }

  customOperation(): void {
    // This will be handled by the StyleClass component
  }

  rotateElement(): void {
    // This will be handled by the StyleClass component
  }
}
