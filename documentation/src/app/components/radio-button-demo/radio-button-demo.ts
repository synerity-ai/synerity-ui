import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioButton, Button } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

interface RadioOption {
  id: string;
  value: string;
  label: string;
  description?: string;
}

interface RadioGroup {
  name: string;
  options: RadioOption[];
  selectedValue: string;
}

@Component({
  selector: 'app-radio-button-demo',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule, RadioButton, Button],
  templateUrl: './radio-button-demo.html',
  styleUrl: './radio-button-demo.scss'
})
export class RadioButtonDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Basic radio button state
  basicSelectedValue = 'option1';
  basicOptions = [
    { id: 'basic-1', value: 'option1', label: 'Option 1' },
    { id: 'basic-2', value: 'option2', label: 'Option 2' },
    { id: 'basic-3', value: 'option3', label: 'Option 3' }
  ];

  // Size variations
  sizeVariants = [
    { size: 'sm', label: 'Small Radio Button' },
    { size: 'normal', label: 'Normal Radio Button' },
    { size: 'lg', label: 'Large Radio Button' },
    { size: 'xl', label: 'Extra Large Radio Button' }
  ];
  sizeSelectedValue = 'normal';

  // Color variants
  colorVariants = [
    { color: 'primary', label: 'Primary Radio Button' },
    { color: 'secondary', label: 'Secondary Radio Button' },
    { color: 'success', label: 'Success Radio Button' },
    { color: 'warning', label: 'Warning Radio Button' },
    { color: 'danger', label: 'Danger Radio Button' }
  ];
  colorSelectedValue = 'primary';

  // Form integration
  formData = {
    preferredContact: 'email',
    notificationFrequency: 'daily',
    theme: 'light'
  };

  // Survey example
  surveyData = {
    ageRange: '',
    experience: '',
    satisfaction: '',
    recommendation: ''
  };

  ageRanges = [
    { id: 'age-18-25', value: '18-25', label: '18-25 years' },
    { id: 'age-26-35', value: '26-35', label: '26-35 years' },
    { id: 'age-36-45', value: '36-45', label: '36-45 years' },
    { id: 'age-46-55', value: '46-55', label: '46-55 years' },
    { id: 'age-55+', value: '55+', label: '55+ years' }
  ];

  experienceLevels = [
    { id: 'exp-beginner', value: 'beginner', label: 'Beginner', description: 'Just getting started' },
    { id: 'exp-intermediate', value: 'intermediate', label: 'Intermediate', description: 'Some experience' },
    { id: 'exp-advanced', value: 'advanced', label: 'Advanced', description: 'Very experienced' },
    { id: 'exp-expert', value: 'expert', label: 'Expert', description: 'Professional level' }
  ];

  satisfactionLevels = [
    { id: 'sat-very-dissatisfied', value: 'very-dissatisfied', label: 'Very Dissatisfied' },
    { id: 'sat-dissatisfied', value: 'dissatisfied', label: 'Dissatisfied' },
    { id: 'sat-neutral', value: 'neutral', label: 'Neutral' },
    { id: 'sat-satisfied', value: 'satisfied', label: 'Satisfied' },
    { id: 'sat-very-satisfied', value: 'very-satisfied', label: 'Very Satisfied' }
  ];

  // Settings panel example
  settings = {
    language: 'en',
    currency: 'usd',
    timezone: 'utc',
    dateFormat: 'mm/dd/yyyy'
  };

  languages = [
    { id: 'lang-en', value: 'en', label: 'English' },
    { id: 'lang-es', value: 'es', label: 'Español' },
    { id: 'lang-fr', value: 'fr', label: 'Français' },
    { id: 'lang-de', value: 'de', label: 'Deutsch' },
    { id: 'lang-ja', value: 'ja', label: '日本語' }
  ];

  currencies = [
    { id: 'curr-usd', value: 'usd', label: 'USD ($)' },
    { id: 'curr-eur', value: 'eur', label: 'EUR (€)' },
    { id: 'curr-gbp', value: 'gbp', label: 'GBP (£)' },
    { id: 'curr-jpy', value: 'jpy', label: 'JPY (¥)' },
    { id: 'curr-cad', value: 'cad', label: 'CAD (C$)' }
  ];

  timezones = [
    { id: 'tz-utc', value: 'utc', label: 'UTC (Coordinated Universal Time)' },
    { id: 'tz-est', value: 'est', label: 'EST (Eastern Standard Time)' },
    { id: 'tz-pst', value: 'pst', label: 'PST (Pacific Standard Time)' },
    { id: 'tz-gmt', value: 'gmt', label: 'GMT (Greenwich Mean Time)' },
    { id: 'tz-cet', value: 'cet', label: 'CET (Central European Time)' }
  ];

  dateFormats = [
    { id: 'date-mm-dd-yyyy', value: 'mm/dd/yyyy', label: 'MM/DD/YYYY' },
    { id: 'date-dd-mm-yyyy', value: 'dd/mm/yyyy', label: 'DD/MM/YYYY' },
    { id: 'date-yyyy-mm-dd', value: 'yyyy-mm-dd', label: 'YYYY-MM-DD' },
    { id: 'date-mm-dd-yy', value: 'mm/dd/yy', label: 'MM/DD/YY' }
  ];

  // Custom styling examples
  customStyles = [
    { style: 'enhanced', label: 'Enhanced Radio Button' },
    { style: 'animated', label: 'Animated Radio Button' },
    { style: 'glow', label: 'Glow Effect' },
    { style: 'shadow', label: 'Shadow Effect' },
    { style: 'gradient', label: 'Gradient Background' }
  ];
  customSelectedValue = 'enhanced';

  // Payment method example
  paymentMethods = [
    { id: 'payment-card', value: 'card', label: 'Credit/Debit Card', description: 'Visa, Mastercard, American Express' },
    { id: 'payment-paypal', value: 'paypal', label: 'PayPal', description: 'Pay with your PayPal account' },
    { id: 'payment-bank', value: 'bank', label: 'Bank Transfer', description: 'Direct bank transfer' },
    { id: 'payment-crypto', value: 'crypto', label: 'Cryptocurrency', description: 'Bitcoin, Ethereum, etc.' }
  ];
  selectedPaymentMethod = 'card';

  // Methods
  resetForm(): void {
    this.formData = {
      preferredContact: 'email',
      notificationFrequency: 'daily',
      theme: 'light'
    };
  }

  submitForm(): void {
    console.log('Form submitted:', this.formData);
  }

  resetSurvey(): void {
    this.surveyData = {
      ageRange: '',
      experience: '',
      satisfaction: '',
      recommendation: ''
    };
  }

  submitSurvey(): void {
    console.log('Survey submitted:', this.surveyData);
  }

  isSurveyComplete(): boolean {
    return this.surveyData.ageRange !== '' && 
           this.surveyData.experience !== '' && 
           this.surveyData.satisfaction !== '' && 
           this.surveyData.recommendation !== '';
  }

  getSurveyProgress(): number {
    const fields = ['ageRange', 'experience', 'satisfaction', 'recommendation'];
    const completed = fields.filter(field => this.surveyData[field as keyof typeof this.surveyData] !== '').length;
    return (completed / fields.length) * 100;
  }

  getSelectedOptionLabel(options: RadioOption[], selectedValue: string): string {
    const option = options.find(opt => opt.value === selectedValue);
    return option ? option.label : 'None selected';
  }

  getSelectedOptionDescription(options: RadioOption[], selectedValue: string): string {
    const option = options.find(opt => opt.value === selectedValue);
    return option ? (option.description || '') : '';
  }

  // Expose Math for template usage
  Math = Math;
}