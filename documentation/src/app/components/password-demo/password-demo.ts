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
  loading: boolean;
  toggleMask: boolean;
  showStrength: boolean;
  size: 'small' | 'medium' | 'large';
  theme: 'light' | 'dark';
  color: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink';
  label: string;
  helperText: string;
  errorText: string;
  icon: string;
  compact: boolean;
  spacious: boolean;
  animated: boolean;
  bounce: boolean;
  glow: boolean;
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
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Basic Password',
      helperText: '',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Simple password input with toggle visibility'
    },
    {
      value: '',
      minLength: 8,
      maxLength: null,
      placeholder: 'Min 8 characters',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'With Min Length',
      helperText: 'Password must be at least 8 characters',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Password input with minimum length requirement'
    },
    {
      value: '',
      minLength: null,
      maxLength: 50,
      placeholder: 'Max 50 characters',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'With Max Length',
      helperText: 'Password must be no more than 50 characters',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Password input with maximum length constraint'
    }
  ];

  // Size variations
  sizeVariants: PasswordVariant[] = [
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'Small',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'small',
      theme: 'light',
      color: 'default',
      label: 'Small Size',
      helperText: '',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Compact password input'
    },
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'Medium',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Medium Size',
      helperText: '',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Standard password input size'
    },
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'Large',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'large',
      theme: 'light',
      color: 'default',
      label: 'Large Size',
      helperText: '',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Larger password input for easier interaction'
    }
  ];

  // Color themes
  colorThemes: PasswordVariant[] = [
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'Default',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Default Color',
      helperText: '',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Standard gray colored input'
    },
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'Primary',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'primary',
      label: 'Primary Color',
      helperText: '',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Blue colored input'
    },
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'Success',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'success',
      label: 'Success Color',
      helperText: '',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Green colored input'
    },
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'Warning',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'warning',
      label: 'Warning Color',
      helperText: '',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Orange colored input'
    },
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'Danger',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'danger',
      label: 'Danger Color',
      helperText: '',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Red colored input'
    },
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'Purple',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'purple',
      label: 'Purple Color',
      helperText: '',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Purple colored input'
    },
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'Pink',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'pink',
      label: 'Pink Color',
      helperText: '',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Pink colored input'
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
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Interactive',
      helperText: 'Standard interactive password input',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Standard interactive password input'
    },
    {
      value: 'readonly123',
      minLength: null,
      maxLength: null,
      placeholder: 'Read-only',
      disabled: false,
      readonly: true,
      loading: false,
      toggleMask: false,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Read-only',
      helperText: 'Password cannot be changed',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Read-only password input'
    },
    {
      value: 'disabled123',
      minLength: null,
      maxLength: null,
      placeholder: 'Disabled',
      disabled: true,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Disabled',
      helperText: 'Input is disabled',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Disabled password input'
    },
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'Loading',
      disabled: false,
      readonly: false,
      loading: true,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Loading',
      helperText: 'Processing...',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Password input in loading state'
    }
  ];

  // Layout options
  layoutOptions: PasswordVariant[] = [
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'Compact',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Compact',
      helperText: 'Reduced padding and spacing',
      errorText: '',
      icon: '',
      compact: true,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Compact layout with reduced spacing'
    },
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'Spacious',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Spacious',
      helperText: 'Increased padding and spacing',
      errorText: '',
      icon: '',
      compact: false,
      spacious: true,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Spacious layout with increased spacing'
    },
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'With Icon',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'With Icon',
      helperText: 'Input with icon',
      errorText: '',
      icon: '🔒',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Password input with icon'
    },
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'No Toggle',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: false,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'No Toggle',
      helperText: 'Input without toggle button',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Password input without toggle button'
    }
  ];

  // Animation effects
  animationEffects: PasswordVariant[] = [
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'Animated',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'primary',
      label: 'Animated',
      helperText: 'Smooth hover animations',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: true,
      bounce: false,
      glow: false,
      description: 'Password input with smooth animations'
    },
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'Bounce',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'success',
      label: 'Bounce',
      helperText: 'Bounce animation on button hover',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: true,
      glow: false,
      description: 'Password input with bounce animation'
    },
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'Glow',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'warning',
      label: 'Glow',
      helperText: 'Glowing effect on focus',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: true,
      description: 'Password input with glow effect'
    },
    {
      value: '',
      minLength: null,
      maxLength: null,
      placeholder: 'All Effects',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: false,
      size: 'medium',
      theme: 'light',
      color: 'danger',
      label: 'All Effects',
      helperText: 'Combined animation effects',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: true,
      bounce: true,
      glow: true,
      description: 'Password input with all animation effects'
    }
  ];

  // Password strength examples
  strengthExamples: PasswordVariant[] = [
    {
      value: 'weak',
      minLength: 8,
      maxLength: null,
      placeholder: 'Weak password',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Weak Password',
      helperText: 'Try a stronger password',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Password with weak strength indicator'
    },
    {
      value: 'Medium123',
      minLength: 8,
      maxLength: null,
      placeholder: 'Medium password',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Medium Password',
      helperText: 'Good, but could be stronger',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Password with medium strength indicator'
    },
    {
      value: 'StrongP@ssw0rd!',
      minLength: 8,
      maxLength: null,
      placeholder: 'Strong password',
      disabled: false,
      readonly: false,
      loading: false,
      toggleMask: true,
      showStrength: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Strong Password',
      helperText: 'Excellent password strength',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Password with strong strength indicator'
    }
  ];

  // Real-world examples
  loginPassword: PasswordVariant = {
    value: '',
    minLength: 6,
    maxLength: null,
    placeholder: 'Enter your password',
    disabled: false,
    readonly: false,
    loading: false,
    toggleMask: true,
    showStrength: false,
    size: 'medium',
    theme: 'light',
    color: 'primary',
    label: 'Password',
    helperText: 'Enter your account password',
    errorText: '',
    icon: '🔒',
    compact: false,
    spacious: false,
    animated: true,
    bounce: false,
    glow: false,
    description: 'Login form password input'
  };

  signupPassword: PasswordVariant = {
    value: '',
    minLength: 8,
    maxLength: 50,
    placeholder: 'Create a strong password',
    disabled: false,
    readonly: false,
    loading: false,
    toggleMask: true,
    showStrength: true,
    size: 'medium',
    theme: 'light',
    color: 'success',
    label: 'New Password',
    helperText: 'Must be at least 8 characters with mixed case, numbers, and symbols',
    errorText: '',
    icon: '🔐',
    compact: false,
    spacious: false,
    animated: false,
    bounce: false,
    glow: false,
    description: 'Signup form password input with strength indicator'
  };

  confirmPassword: PasswordVariant = {
    value: '',
    minLength: 8,
    maxLength: 50,
    placeholder: 'Confirm your password',
    disabled: false,
    readonly: false,
    loading: false,
    toggleMask: true,
    showStrength: false,
    size: 'medium',
    theme: 'light',
    color: 'warning',
    label: 'Confirm Password',
    helperText: 'Re-enter your password to confirm',
    errorText: '',
    icon: '🔑',
    compact: false,
    spacious: false,
    animated: false,
    bounce: false,
    glow: false,
    description: 'Password confirmation input'
  };

  onPasswordChange(value: string, input: PasswordVariant): void {
    input.value = value;
    console.log(`${input.label} changed to:`, value);
  }

  onToggleVisibility(visible: boolean, input: PasswordVariant): void {
    console.log(`${input.label} visibility toggled:`, visible);
  }

  getInputStatus(input: PasswordVariant): string {
    if (input.disabled) return 'Disabled';
    if (input.readonly) return 'Read-only';
    if (input.loading) return 'Loading';
    return 'Interactive';
  }

  getInputStatusColor(input: PasswordVariant): string {
    if (input.disabled) return 'text-gray-500';
    if (input.readonly) return 'text-blue-600';
    if (input.loading) return 'text-yellow-600';
    return 'text-green-600';
  }

  getPasswordStrengthColor(input: PasswordVariant): string {
    if (!input.value) return 'text-gray-400';
    
    const length = input.value.length;
    const hasLower = /[a-z]/.test(input.value);
    const hasUpper = /[A-Z]/.test(input.value);
    const hasNumber = /\d/.test(input.value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(input.value);
    
    let score = 0;
    if (length >= 8) score++;
    if (length >= 12) score++;
    if (hasLower) score++;
    if (hasUpper) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;
    
    if (score < 3) return 'text-red-600';
    if (score < 5) return 'text-yellow-600';
    return 'text-green-600';
  }

  getPasswordStrengthText(input: PasswordVariant): string {
    if (!input.value) return 'No password';
    
    const length = input.value.length;
    const hasLower = /[a-z]/.test(input.value);
    const hasUpper = /[A-Z]/.test(input.value);
    const hasNumber = /\d/.test(input.value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(input.value);
    
    let score = 0;
    if (length >= 8) score++;
    if (length >= 12) score++;
    if (hasLower) score++;
    if (hasUpper) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;
    
    if (score < 3) return 'Weak';
    if (score < 5) return 'Medium';
    return 'Strong';
  }
}