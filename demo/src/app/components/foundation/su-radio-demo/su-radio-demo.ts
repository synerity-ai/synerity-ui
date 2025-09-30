import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioButton } from '@synerity/ui';

@Component({
  selector: 'app-su-radio-demo',
  imports: [CommonModule, FormsModule, RadioButton],
  templateUrl: './su-radio-demo.html',
  styleUrl: './su-radio-demo.scss'
})
export class SuRadioDemo {
  // Basic radio button states
  basicSelected = 'option1';
  disabledSelected = 'option2';
  
  // Radio button groups
  selectedSize = 'medium';
  selectedTheme = 'light';
  selectedPayment = 'credit';
  selectedPlan = 'basic';
  
  // Options for radio button groups
  sizeOptions = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' }
  ];

  themeOptions = [
    { value: 'light', label: 'Light Theme' },
    { value: 'dark', label: 'Dark Theme' },
    { value: 'auto', label: 'Auto (System)' }
  ];

  paymentOptions = [
    { value: 'credit', label: 'Credit Card' },
    { value: 'debit', label: 'Debit Card' },
    { value: 'paypal', label: 'PayPal' },
    { value: 'bank', label: 'Bank Transfer' }
  ];

  planOptions = [
    { value: 'basic', label: 'Basic Plan - $9/month' },
    { value: 'pro', label: 'Pro Plan - $29/month' },
    { value: 'enterprise', label: 'Enterprise Plan - $99/month' }
  ];

  // Form integration
  formData = {
    selectedSize: 'medium',
    selectedTheme: 'light',
    selectedPayment: 'credit',
    selectedPlan: 'basic'
  };

  // Methods for demo interactions
  onRadioChange(value: string, type: string) {
    console.log(`${type} radio changed to:`, value);
    
    // Update the corresponding form data
    switch(type) {
      case 'size':
        this.formData.selectedSize = value;
        break;
      case 'theme':
        this.formData.selectedTheme = value;
        break;
      case 'payment':
        this.formData.selectedPayment = value;
        break;
      case 'plan':
        this.formData.selectedPlan = value;
        break;
    }
  }

  resetForm() {
    this.formData = {
      selectedSize: 'medium',
      selectedTheme: 'light',
      selectedPayment: 'credit',
      selectedPlan: 'basic'
    };
    this.selectedSize = 'medium';
    this.selectedTheme = 'light';
    this.selectedPayment = 'credit';
    this.selectedPlan = 'basic';
  }

  selectDefault() {
    this.selectedSize = 'large';
    this.selectedTheme = 'dark';
    this.selectedPayment = 'paypal';
    this.selectedPlan = 'pro';
  }
}
