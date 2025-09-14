import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputNumber as SuiInputNumber } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-inputnumber',
  imports: [CommonModule, FormsModule, SuiInputNumber, Tabs],
  templateUrl: './inputnumber.html',
  styleUrl: './inputnumber.scss'
})
export class InputNumberPage {
  activeTab = 'demo';
  
  // Demo data
  basicNumber: number | null = null;
  minMaxNumber: number | null = 50;
  stepNumber: number | null = 5;
  disabledNumber: number | null = 100;
  placeholderNumber: number | null = null;
  interactiveNumber: number | null = null;
  interactiveMin = 0;
  interactiveMax = 100;
  interactiveStep = 1;
  interactivePlaceholder = 'Enter a number...';
  interactiveDisabled = false;
  
  // Code visibility states
  showBasicNumberCode = false;
  showMinMaxNumberCode = false;
  showStepNumberCode = false;
  showDisabledNumberCode = false;
  showPlaceholderNumberCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicNumber':
        this.showBasicNumberCode = !this.showBasicNumberCode;
        break;
      case 'minMaxNumber':
        this.showMinMaxNumberCode = !this.showMinMaxNumberCode;
        break;
      case 'stepNumber':
        this.showStepNumberCode = !this.showStepNumberCode;
        break;
      case 'disabledNumber':
        this.showDisabledNumberCode = !this.showDisabledNumberCode;
        break;
      case 'placeholderNumber':
        this.showPlaceholderNumberCode = !this.showPlaceholderNumberCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onNumberChange(value: number | null, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Helper methods for validation
  isValidNumber(value: number | null): boolean {
    return value !== null && !isNaN(value);
  }
  
  getNumberStatus(value: number | null, min?: number, max?: number): { status: string; color: string } {
    if (!this.isValidNumber(value)) return { status: 'Invalid', color: 'text-red-600' };
    
    if (min !== undefined && value! < min) return { status: 'Below minimum', color: 'text-red-600' };
    if (max !== undefined && value! > max) return { status: 'Above maximum', color: 'text-red-600' };
    
    return { status: 'Valid', color: 'text-green-600' };
  }
}
