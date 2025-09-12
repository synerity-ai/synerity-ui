import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputText as SuiInputText } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-inputtext',
  imports: [CommonModule, FormsModule, SuiInputText, Tabs],
  templateUrl: './inputtext.html',
  styleUrl: './inputtext.scss'
})
export class Inputtext {
  activeTab = 'demo';
  
  // Demo data
  basicValue = '';
  placeholderValue = '';
  disabledValue = 'Disabled input';
  readonlyValue = 'Read-only input';
  requiredValue = '';
  maxLengthValue = '';
  patternValue = '';
  emailValue = '';
  passwordValue = '';
  telValue = '';
  urlValue = '';
  
  // Validation states
  validValue = 'Valid input';
  invalidValue = 'Invalid input';
  
  // Sizes
  smallValue = '';
  mediumValue = '';
  largeValue = '';
  
  // Variants
  defaultValue = '';
  filledValue = '';
  outlinedValue = '';
  
  // With icons
  prefixValue = '';
  suffixValue = '';
  
  // Clearable
  clearableValue = 'Clearable text';
  
  // Event handlers
  onInputChange(event: any) {
    console.log('Input changed:', event);
  }
  
  onInputFocus(event: any) {
    console.log('Input focused:', event);
  }
  
  onInputBlur(event: any) {
    console.log('Input blurred:', event);
  }
  
  onClear() {
    console.log('Input cleared');
    this.clearableValue = '';
  }
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
}
