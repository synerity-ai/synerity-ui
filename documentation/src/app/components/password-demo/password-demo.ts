import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Password } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

interface PasswordVariant {
  value: string;
  minLength: number | null;
  maxLength: number | null;
  placeholder: string;
  disabled: boolean;
  readonly: boolean;
  toggleMask: boolean;
  size: 'sm' | 'md' | 'lg';
  label: string;
  helperText: string;
  errorText: string;
  description: string;
}

@Component({
  selector: 'app-password-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Password],
  templateUrl: './password-demo.html',
  styleUrl: './password-demo.scss'
})
export class PasswordDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Basic password inputs
  basicPasswords: PasswordVariant[] = [
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'Enter password',
      disabled: false,
      readonly: false,
      toggleMask: true,
      size: 'md',
      label: 'Basic Password',
      helperText: 'Click Show/Hide to toggle visibility',
      errorText: '',
      description: 'Simple password input with toggle visibility'
    },
    {
      value: '',
      minLength: 8,
      maxLength: null,
      placeholder: 'Min 8 characters',
      disabled: false,
      readonly: false,
      toggleMask: true,
      size: 'md',
      label: 'With Min Length',
      helperText: 'Password must be at least 8 characters',
      errorText: '',
      description: 'Password input with minimum length requirement'
    },
    {
      value: '',
      minLength: null,
      maxLength: 50,
      placeholder: 'Max 50 characters',
      disabled: false,
      readonly: false,
      toggleMask: true,
      size: 'md',
      label: 'With Max Length',
      helperText: 'Password must be no more than 50 characters',
      errorText: '',
      description: 'Password input with maximum length constraint'
    }
  ];

  // Size variations
  sizeVariants: PasswordVariant[] = [
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'Small password',
      disabled: false,
      readonly: false,
      toggleMask: true,
      size: 'sm',
      label: 'Small Size',
      helperText: 'Compact password input',
      errorText: '',
      description: 'Compact password input'
    },
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'Medium password',
      disabled: false,
      readonly: false,
      toggleMask: true,
      size: 'md',
      label: 'Medium Size',
      helperText: 'Standard password input',
      errorText: '',
      description: 'Standard password input size'
    },
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'Large password',
      disabled: false,
      readonly: false,
      toggleMask: true,
      size: 'lg',
      label: 'Large Size',
      helperText: 'Larger password input',
      errorText: '',
      description: 'Larger password input for easier interaction'
    }
  ];

  // State examples
  stateExamples: PasswordVariant[] = [
    {
      value: 'password123',
      minLength: null,
      maxLength: null,
      placeholder: 'Interactive',
      disabled: false,
      readonly: false,
      toggleMask: true,
      size: 'md',
      label: 'Interactive',
      helperText: 'Standard interactive password input',
      errorText: '',
      description: 'Standard interactive password input'
    },
    {
      value: 'readonly123',
      minLength: null,
      maxLength: null,
      placeholder: 'Read-only',
      disabled: false,
      readonly: true,
      toggleMask: false,
      size: 'md',
      label: 'Read-only',
      helperText: 'Password cannot be changed',
      errorText: '',
      description: 'Read-only password input'
    },
    {
      value: 'disabled123',
      minLength: null,
      maxLength: null,
      placeholder: 'Disabled',
      disabled: true,
      readonly: false,
      toggleMask: true,
      size: 'md',
      label: 'Disabled',
      helperText: 'Input is disabled',
      errorText: '',
      description: 'Disabled password input'
    }
  ];

  // Real-world examples
  signupPassword: PasswordVariant = {
    value: '',
    minLength: 8,
    maxLength: 50,
    placeholder: 'Create a strong password',
    disabled: false,
    readonly: false,
    toggleMask: true,
    size: 'md',
    label: 'New Password',
    helperText: 'Must be at least 8 characters',
    errorText: '',
    description: 'Signup form password input'
  };

  confirmPassword: PasswordVariant = {
    value: '',
    minLength: 8,
    maxLength: 50,
    placeholder: 'Confirm your password',
    disabled: false,
    readonly: false,
    toggleMask: true,
    size: 'md',
    label: 'Confirm Password',
    helperText: 'Re-enter your password to confirm',
    errorText: '',
    description: 'Password confirmation input'
  };

  getInputStatusColor(input: PasswordVariant): string {
    if (input.disabled) return 'text-gray-500';
    if (input.readonly) return 'text-blue-600';
    return 'text-green-600';
  }
}
