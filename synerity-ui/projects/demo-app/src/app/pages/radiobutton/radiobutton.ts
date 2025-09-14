import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioButton as SuiRadioButton } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-radiobutton',
  imports: [CommonModule, FormsModule, SuiRadioButton, Tabs],
  templateUrl: './radiobutton.html',
  styleUrl: './radiobutton.scss'
})
export class RadioButtonPage {
  activeTab = 'demo';
  
  // Demo data
  selectedColor = 'blue';
  selectedSize = 'medium';
  selectedPayment = 'credit';
  selectedLanguage = 'typescript';
  selectedDisabled = 'option1';
  interactiveSelection = '';
  interactiveName = 'demo-radio';
  interactiveDisabled = false;
  
  // Options for different groups
  colorOptions = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
    { value: 'yellow', label: 'Yellow' }
  ];
  
  sizeOptions = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
    { value: 'xlarge', label: 'Extra Large' }
  ];
  
  paymentOptions = [
    { value: 'credit', label: 'Credit Card' },
    { value: 'debit', label: 'Debit Card' },
    { value: 'paypal', label: 'PayPal' },
    { value: 'bank', label: 'Bank Transfer' }
  ];
  
  languageOptions = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' }
  ];
  
  // Code visibility states
  showBasicRadioCode = false;
  showRadioGroupCode = false;
  showDisabledRadioCode = false;
  showRadioVariantsCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicRadio':
        this.showBasicRadioCode = !this.showBasicRadioCode;
        break;
      case 'radioGroup':
        this.showRadioGroupCode = !this.showRadioGroupCode;
        break;
      case 'disabledRadio':
        this.showDisabledRadioCode = !this.showDisabledRadioCode;
        break;
      case 'radioVariants':
        this.showRadioVariantsCode = !this.showRadioVariantsCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onRadioChange(value: any, field: string) {
    console.log(`${field} changed to:`, value);
  }
}
