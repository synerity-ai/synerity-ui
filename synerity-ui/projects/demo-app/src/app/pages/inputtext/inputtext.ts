import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { InputText as SuiInputText } from '../../../../../ui-lib/src/lib/input-text/input-text';

@Component({
  selector: 'app-inputtext',
  imports: [CommonModule, FormsModule, Tabs, SuiInputText],
  templateUrl: './inputtext.html',
  styleUrl: './inputtext.scss'
})
export class Inputtext {
  activeTab = 'demo';
  
  // Demo data
  basicInput = '';
  placeholderInput = '';
  disabledInput = 'This input is disabled';
  readonlyInput = 'This input is read-only';
  errorInput = '';
  successInput = '';
  warningInput = '';
  
  // Interactive demo
  interactiveValue = '';
  interactivePlaceholder = 'Type something here...';
  interactiveDisabled = false;
  interactiveReadonly = false;
  interactiveRequired = false;
  interactiveMaxLength = 50;
  
  // Code visibility states
  showBasicInputCode = false;
  showInputStatesCode = false;
  showInputSizesCode = false;
  showInputValidationCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicInput':
        this.showBasicInputCode = !this.showBasicInputCode;
        break;
      case 'inputStates':
        this.showInputStatesCode = !this.showInputStatesCode;
        break;
      case 'inputSizes':
        this.showInputSizesCode = !this.showInputSizesCode;
        break;
      case 'inputValidation':
        this.showInputValidationCode = !this.showInputValidationCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  // Input demo methods
  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log('Input changed:', target.value);
  }
  
  onInputFocus() {
    console.log('Input focused');
  }
  
  onInputBlur() {
    console.log('Input blurred');
  }
  
  clearInput() {
    this.interactiveValue = '';
  }
  
  setSampleText() {
    this.interactiveValue = 'This is sample text for the input field.';
  }
  
  toggleDisabled() {
    this.interactiveDisabled = !this.interactiveDisabled;
  }
  
  toggleReadonly() {
    this.interactiveReadonly = !this.interactiveReadonly;
  }
  
  toggleRequired() {
    this.interactiveRequired = !this.interactiveRequired;
  }
}
