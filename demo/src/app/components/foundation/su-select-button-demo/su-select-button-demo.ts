import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectButton } from '@synerity/ui';

@Component({
  selector: 'app-su-select-button-demo',
  imports: [CommonModule, FormsModule, SelectButton],
  templateUrl: './su-select-button-demo.html',
  styleUrl: './su-select-button-demo.scss'
})
export class SuSelectButtonDemo {
  // Basic select button states
  basicSelected: string | null = null;
  disabledSelected: string | null = 'option2';
  
  // Size options
  sizeSelected: string | null = null;
  
  // Theme options
  themeSelected: string | null = null;
  
  // Payment method options
  paymentSelected: string | null = null;
  
  // Subscription plan options
  planSelected: string | null = null;
  
  // Options for select button components
  basicOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4 (Disabled)', value: 'option4', disabled: true }
  ];

  sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
    { label: 'Extra Large', value: 'xl' }
  ];

  themeOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
    { label: 'Auto', value: 'auto' },
    { label: 'High Contrast', value: 'contrast' }
  ];

  paymentOptions = [
    { label: '💳 Credit Card', value: 'credit' },
    { label: '🏦 Bank Transfer', value: 'bank' },
    { label: '📱 PayPal', value: 'paypal' },
    { label: '💰 Cryptocurrency', value: 'crypto' },
    { label: '📄 Invoice', value: 'invoice' }
  ];

  planOptions = [
    { label: 'Free', value: 'free' },
    { label: 'Basic', value: 'basic' },
    { label: 'Pro', value: 'pro' },
    { label: 'Enterprise', value: 'enterprise' }
  ];

  // Form integration
  formData = {
    size: null as string | null,
    theme: null as string | null,
    payment: null as string | null,
    plan: null as string | null
  };

  // Methods for demo interactions
  onSelectButtonChange(value: any, type: string) {
    console.log(`${type} select button changed to:`, value);
    
    // Update the corresponding form data
    switch(type) {
      case 'size':
        this.formData.size = value;
        break;
      case 'theme':
        this.formData.theme = value;
        break;
      case 'payment':
        this.formData.payment = value;
        break;
      case 'plan':
        this.formData.plan = value;
        break;
    }
  }

  resetForm() {
    this.formData = {
      size: null,
      theme: null,
      payment: null,
      plan: null
    };
    this.sizeSelected = null;
    this.themeSelected = null;
    this.paymentSelected = null;
    this.planSelected = null;
  }

  setDefaultValues() {
    this.sizeSelected = 'medium';
    this.themeSelected = 'dark';
    this.paymentSelected = 'credit';
    this.planSelected = 'pro';
  }

  clearAllSelections() {
    this.basicSelected = null;
    this.sizeSelected = null;
    this.themeSelected = null;
    this.paymentSelected = null;
    this.planSelected = null;
  }
}
