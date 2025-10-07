import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

interface FloatLabelVariant {
  label: string;
  for: string;
  required: boolean;
  disabled: boolean;
  size: 'sm' | 'md' | 'lg';
  state: 'default' | 'error' | 'success' | 'warning';
  animated: boolean;
  bounce: boolean;
  rtl: boolean;
  placeholder: string;
  helperText: string;
  errorText: string;
  successText: string;
  warningText: string;
  value: string;
  description: string;
}

@Component({
  selector: 'app-float-label-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, FloatLabel],
  templateUrl: './float-label-demo.html',
  styleUrl: './float-label-demo.scss'
})
export class FloatLabelDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Basic float label examples
  basicFloatLabels: FloatLabelVariant[] = [
    {
      label: 'Email Address',
      for: 'email-basic',
      required: false,
      disabled: false,
      size: 'md',
      state: 'default',
      animated: false,
      bounce: false,
      rtl: false,
      placeholder: 'Enter your email',
      helperText: 'We\'ll never share your email',
      errorText: '',
      successText: '',
      warningText: '',
      value: '',
      description: 'Basic float label with email input'
    },
    {
      label: 'Full Name',
      for: 'name-required',
      required: true,
      disabled: false,
      size: 'md',
      state: 'default',
      animated: false,
      bounce: false,
      rtl: false,
      placeholder: 'Enter your full name',
      helperText: 'First and last name',
      errorText: '',
      successText: '',
      warningText: '',
      value: '',
      description: 'Required float label with validation'
    },
    {
      label: 'Phone Number',
      for: 'phone-disabled',
      required: false,
      disabled: true,
      size: 'md',
      state: 'default',
      animated: false,
      bounce: false,
      rtl: false,
      placeholder: 'Enter phone number',
      helperText: 'Optional contact number',
      errorText: '',
      successText: '',
      warningText: '',
      value: '+1 (555) 123-4567',
      description: 'Disabled float label with pre-filled value'
    }
  ];

  // Size variations
  sizeVariants: FloatLabelVariant[] = [
    {
      label: 'Small Input',
      for: 'input-sm',
      required: false,
      disabled: false,
      size: 'sm',
      state: 'default',
      animated: false,
      bounce: false,
      rtl: false,
      placeholder: 'Small size',
      helperText: 'Compact input field',
      errorText: '',
      successText: '',
      warningText: '',
      value: '',
      description: 'Small size float label for compact layouts'
    },
    {
      label: 'Medium Input',
      for: 'input-md',
      required: false,
      disabled: false,
      size: 'md',
      state: 'default',
      animated: false,
      bounce: false,
      rtl: false,
      placeholder: 'Medium size',
      helperText: 'Standard input field',
      errorText: '',
      successText: '',
      warningText: '',
      value: '',
      description: 'Medium size float label for standard use'
    },
    {
      label: 'Large Input',
      for: 'input-lg',
      required: false,
      disabled: false,
      size: 'lg',
      state: 'default',
      animated: false,
      bounce: false,
      rtl: false,
      placeholder: 'Large size',
      helperText: 'Large input field for better accessibility',
      errorText: '',
      successText: '',
      warningText: '',
      value: '',
      description: 'Large size float label for better touch interaction'
    }
  ];

  // State variations
  stateVariants: FloatLabelVariant[] = [
    {
      label: 'Default State',
      for: 'input-default',
      required: false,
      disabled: false,
      size: 'md',
      state: 'default',
      animated: false,
      bounce: false,
      rtl: false,
      placeholder: 'Default state',
      helperText: 'Normal input field',
      errorText: '',
      successText: '',
      warningText: '',
      value: '',
      description: 'Default state float label'
    },
    {
      label: 'Error State',
      for: 'input-error',
      required: false,
      disabled: false,
      size: 'md',
      state: 'error',
      animated: false,
      bounce: false,
      rtl: false,
      placeholder: 'Error state',
      helperText: '',
      errorText: 'This field is required',
      successText: '',
      warningText: '',
      value: '',
      description: 'Error state float label with validation message'
    },
    {
      label: 'Success State',
      for: 'input-success',
      required: false,
      disabled: false,
      size: 'md',
      state: 'success',
      animated: false,
      bounce: false,
      rtl: false,
      placeholder: 'Success state',
      helperText: '',
      errorText: '',
      successText: 'Field is valid',
      warningText: '',
      value: 'valid@email.com',
      description: 'Success state float label with valid input'
    },
    {
      label: 'Warning State',
      for: 'input-warning',
      required: false,
      disabled: false,
      size: 'md',
      state: 'warning',
      animated: false,
      bounce: false,
      rtl: false,
      placeholder: 'Warning state',
      helperText: '',
      errorText: '',
      successText: '',
      warningText: 'Please review this field',
      value: 'warning@',
      description: 'Warning state float label with caution message'
    }
  ];

  // Animation variations
  animationVariants: FloatLabelVariant[] = [
    {
      label: 'Animated Label',
      for: 'input-animated',
      required: false,
      disabled: false,
      size: 'md',
      state: 'default',
      animated: true,
      bounce: false,
      rtl: false,
      placeholder: 'Smooth animation',
      helperText: 'Smooth transition effects',
      errorText: '',
      successText: '',
      warningText: '',
      value: '',
      description: 'Float label with smooth animation effects'
    },
    {
      label: 'Bounce Label',
      for: 'input-bounce',
      required: false,
      disabled: false,
      size: 'md',
      state: 'default',
      animated: false,
      bounce: true,
      rtl: false,
      placeholder: 'Bounce animation',
      helperText: 'Bouncy transition effects',
      errorText: '',
      successText: '',
      warningText: '',
      value: '',
      description: 'Float label with bounce animation effects'
    },
    {
      label: 'All Animations',
      for: 'input-all-animations',
      required: false,
      disabled: false,
      size: 'md',
      state: 'default',
      animated: true,
      bounce: true,
      rtl: false,
      placeholder: 'All animations',
      helperText: 'Combined animation effects',
      errorText: '',
      successText: '',
      warningText: '',
      value: '',
      description: 'Float label with all animation effects'
    }
  ];

  // RTL support
  rtlVariants: FloatLabelVariant[] = [
    {
      label: 'LTR Input',
      for: 'input-ltr',
      required: false,
      disabled: false,
      size: 'md',
      state: 'default',
      animated: false,
      bounce: false,
      rtl: false,
      placeholder: 'Left to right',
      helperText: 'Standard left-to-right layout',
      errorText: '',
      successText: '',
      warningText: '',
      value: '',
      description: 'Left-to-right float label layout'
    },
    {
      label: 'RTL Input',
      for: 'input-rtl',
      required: false,
      disabled: false,
      size: 'md',
      state: 'default',
      animated: false,
      bounce: false,
      rtl: true,
      placeholder: 'Right to left',
      helperText: 'Right-to-left layout for Arabic/Hebrew',
      errorText: '',
      successText: '',
      warningText: '',
      value: '',
      description: 'Right-to-left float label layout'
    }
  ];

  // Real-world examples
  contactForm: FloatLabelVariant[] = [
    {
      label: 'First Name',
      for: 'first-name',
      required: true,
      disabled: false,
      size: 'md',
      state: 'default',
      animated: true,
      bounce: false,
      rtl: false,
      placeholder: 'Enter first name',
      helperText: 'Your given name',
      errorText: 'First name is required',
      successText: '',
      warningText: '',
      value: '',
      description: 'Contact form first name field'
    },
    {
      label: 'Last Name',
      for: 'last-name',
      required: true,
      disabled: false,
      size: 'md',
      state: 'default',
      animated: true,
      bounce: false,
      rtl: false,
      placeholder: 'Enter last name',
      helperText: 'Your family name',
      errorText: 'Last name is required',
      successText: '',
      warningText: '',
      value: '',
      description: 'Contact form last name field'
    },
    {
      label: 'Email Address',
      for: 'contact-email',
      required: true,
      disabled: false,
      size: 'md',
      state: 'default',
      animated: true,
      bounce: false,
      rtl: false,
      placeholder: 'Enter email address',
      helperText: 'We\'ll use this to contact you',
      errorText: 'Please enter a valid email',
      successText: 'Email looks good',
      warningText: '',
      value: '',
      description: 'Contact form email field'
    },
    {
      label: 'Phone Number',
      for: 'contact-phone',
      required: false,
      disabled: false,
      size: 'md',
      state: 'default',
      animated: true,
      bounce: false,
      rtl: false,
      placeholder: 'Enter phone number',
      helperText: 'Optional contact number',
      errorText: '',
      successText: '',
      warningText: '',
      value: '',
      description: 'Contact form phone field'
    }
  ];

  onFloatLabelChange(value: string, floatLabel: FloatLabelVariant): void {
    floatLabel.value = value;
    console.log(`${floatLabel.label} changed to:`, value);
  }

  onFloatLabelFocus(floatLabel: FloatLabelVariant): void {
    console.log(`${floatLabel.label} focused`);
  }

  onFloatLabelBlur(floatLabel: FloatLabelVariant): void {
    console.log(`${floatLabel.label} blurred`);
  }

  getFloatLabelStatus(floatLabel: FloatLabelVariant): string {
    if (floatLabel.disabled) return 'Disabled';
    if (floatLabel.state === 'error') return 'Error';
    if (floatLabel.state === 'success') return 'Success';
    if (floatLabel.state === 'warning') return 'Warning';
    return 'Interactive';
  }

  getFloatLabelStatusColor(floatLabel: FloatLabelVariant): string {
    if (floatLabel.disabled) return 'text-gray-500';
    if (floatLabel.state === 'error') return 'text-red-600';
    if (floatLabel.state === 'success') return 'text-green-600';
    if (floatLabel.state === 'warning') return 'text-yellow-600';
    return 'text-blue-600';
  }

  getCurrentValue(floatLabel: FloatLabelVariant): string {
    return floatLabel.value || 'Empty';
  }
}
