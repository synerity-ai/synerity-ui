import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { InputNumber as SuiInputNumber } from '../../../../../ui-lib/src/lib/input-number/input-number';

@Component({
  selector: 'app-inputnumber',
  imports: [CommonModule, FormsModule, Tabs, SuiInputNumber],
  templateUrl: './inputnumber.html',
  styleUrl: './inputnumber.scss'
})
export class Inputnumber {
  activeTab = 'demo';
  
  // Demo data
  basicNumber: number | null = null;
  minMaxNumber: number | null = null;
  stepNumber: number | null = null;
  disabledNumber: number | null = 42;
  readonlyNumber: number | null = 100;
  requiredNumber: number | null = null;
  placeholderNumber: number | null = null;
  decimalNumber: number | null = null;
  
  // Interactive demo data
  interactiveValue: number | null = null;
  interactiveMin = 0;
  interactiveMax = 100;
  interactiveStep = 1;
  interactiveDisabled = false;
  interactiveReadonly = false;
  interactiveRequired = false;
  interactivePlaceholder = 'Enter a number...';
  
  // Code visibility states
  showBasicNumberCode = false;
  showMinMaxNumberCode = false;
  showStepNumberCode = false;
  showNumberStatesCode = false;
  showDecimalNumberCode = false;
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
      case 'numberStates':
        this.showNumberStatesCode = !this.showNumberStatesCode;
        break;
      case 'decimalNumber':
        this.showDecimalNumberCode = !this.showDecimalNumberCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  // Number input demo methods
  onNumberChange(value: number | null) {
    console.log('Number changed:', value);
  }
  
  onInteractiveNumberChange(value: number | null) {
    this.interactiveValue = value;
    console.log('Interactive number changed:', value);
  }
  
  onNumberFocus() {
    console.log('Number input focused');
  }
  
  onNumberBlur() {
    console.log('Number input blurred');
  }
  
  // Utility methods
  formatNumber(value: number | null): string {
    if (value === null) return 'No value';
    return value.toString();
  }
  
  isValidNumber(value: number | null): boolean {
    return value !== null && !isNaN(value);
  }
  
  getNumberStatus(value: number | null): string {
    if (value === null) return 'Empty';
    if (isNaN(value)) return 'Invalid';
    return 'Valid';
  }
}
