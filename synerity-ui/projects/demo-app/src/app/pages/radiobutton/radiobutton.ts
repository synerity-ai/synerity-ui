import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { RadioButton as SuiRadioButton } from '../../../../../ui-lib/src/lib/radio-button/radio-button';

@Component({
  selector: 'app-radiobutton',
  imports: [CommonModule, FormsModule, Tabs, SuiRadioButton],
  templateUrl: './radiobutton.html',
  styleUrl: './radiobutton.scss'
})
export class Radiobutton {
  activeTab = 'demo';
  
  // Demo data
  basicRadio = 'option1';
  checkedRadio = 'checked';
  disabledCheckedRadio = 'disabled-checked';
  disabledRadio = 'option2';
  readonlyRadio = 'option1';
  
  // Multiple radio groups
  selectedColor = 'red';
  selectedSize = 'medium';
  selectedPayment = 'credit';
  
  colorOptions = [
    { value: 'red', label: 'Red', description: 'Vibrant red color' },
    { value: 'blue', label: 'Blue', description: 'Classic blue color' },
    { value: 'green', label: 'Green', description: 'Natural green color' },
    { value: 'yellow', label: 'Yellow', description: 'Bright yellow color' }
  ];
  
  sizeOptions = [
    { value: 'small', label: 'Small', description: 'Compact size' },
    { value: 'medium', label: 'Medium', description: 'Standard size' },
    { value: 'large', label: 'Large', description: 'Spacious size' },
    { value: 'xlarge', label: 'Extra Large', description: 'Maximum size' }
  ];
  
  paymentOptions = [
    { value: 'credit', label: 'Credit Card', description: 'Pay with credit card' },
    { value: 'debit', label: 'Debit Card', description: 'Pay with debit card' },
    { value: 'paypal', label: 'PayPal', description: 'Pay with PayPal' },
    { value: 'bank', label: 'Bank Transfer', description: 'Direct bank transfer' }
  ];
  
  // Radio button sizes
  smallRadio = 'option1';
  mediumRadio = 'option2';
  largeRadio = 'option1';
  
  // Radio button variants
  primaryRadio = 'option1';
  secondaryRadio = 'option2';
  successRadio = 'option1';
  warningRadio = 'option2';
  dangerRadio = 'option1';
  
  // Interactive demo
  interactiveValue = 'option1';
  interactiveDisabled = false;
  interactiveReadonly = false;
  interactiveSize = 'md';
  interactiveVariant = 'primary';
  interactiveLabel = 'Interactive Radio Button';
  interactiveDescription = 'This is an interactive radio button for demonstration.';
  interactiveOptions = [
    { value: 'option1', label: 'Option 1', description: 'First option' },
    { value: 'option2', label: 'Option 2', description: 'Second option' },
    { value: 'option3', label: 'Option 3', description: 'Third option' }
  ];
  
  // Code visibility states
  showBasicRadioCode = false;
  showRadioStatesCode = false;
  showRadioSizesCode = false;
  showRadioVariantsCode = false;
  showMultipleRadioGroupsCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicRadio':
        this.showBasicRadioCode = !this.showBasicRadioCode;
        break;
      case 'radioStates':
        this.showRadioStatesCode = !this.showRadioStatesCode;
        break;
      case 'radioSizes':
        this.showRadioSizesCode = !this.showRadioSizesCode;
        break;
      case 'radioVariants':
        this.showRadioVariantsCode = !this.showRadioVariantsCode;
        break;
      case 'multipleRadioGroups':
        this.showMultipleRadioGroupsCode = !this.showMultipleRadioGroupsCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  // Radio button demo methods
  onRadioChange(value: unknown) {
    const stringValue = value as string;
    console.log('Radio changed:', stringValue);
  }
  
  onColorChange(value: unknown) {
    const stringValue = value as string;
    this.selectedColor = stringValue;
    console.log('Color selected:', stringValue);
  }
  
  onSizeChange(value: unknown) {
    const stringValue = value as string;
    this.selectedSize = stringValue;
    console.log('Size selected:', stringValue);
  }
  
  onPaymentChange(value: unknown) {
    const stringValue = value as string;
    this.selectedPayment = stringValue;
    console.log('Payment method selected:', stringValue);
  }
  
  // Interactive demo methods
  updateInteractiveValue(value: unknown) {
    const stringValue = value as string;
    this.interactiveValue = stringValue;
  }
  
  toggleDisabled() {
    this.interactiveDisabled = !this.interactiveDisabled;
  }
  
  toggleReadonly() {
    this.interactiveReadonly = !this.interactiveReadonly;
  }
  
  updateSize(size: string) {
    this.interactiveSize = size;
  }
  
  updateVariant(variant: string) {
    this.interactiveVariant = variant;
  }
  
  resetInteractive() {
    this.interactiveValue = 'option1';
    this.interactiveDisabled = false;
    this.interactiveReadonly = false;
    this.interactiveSize = 'md';
    this.interactiveVariant = 'primary';
  }
}
