import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputNumber } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

interface InputNumberVariant {
  value: number | null;
  min: number | null;
  max: number | null;
  step: number;
  placeholder: string;
  disabled: boolean;
  readonly: boolean;
  loading: boolean;
  showButtons: boolean;
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
  selector: 'app-input-number-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, InputNumber],
  templateUrl: './input-number-demo.html',
  styleUrl: './input-number-demo.scss'
})
export class InputNumberDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Basic input numbers
  basicInputNumbers: InputNumberVariant[] = [
    {
      value: 0,
      min: null,
      max: null,
      step: 1,
      placeholder: 'Enter number',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Basic Input Number',
      helperText: '',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Simple number input with increment/decrement buttons'
    },
    {
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: '0-10',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'With Min/Max',
      helperText: 'Value must be between 0 and 10',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Number input with minimum and maximum constraints'
    },
    {
      value: 0,
      min: null,
      max: null,
      step: 0.1,
      placeholder: 'Decimal',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Decimal Step',
      helperText: 'Increments by 0.1',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Number input with decimal step increments'
    }
  ];

  // Size variations
  sizeVariants: InputNumberVariant[] = [
    {
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'Small',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
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
      description: 'Compact number input'
    },
    {
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'Medium',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
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
      description: 'Standard number input size'
    },
    {
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'Large',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
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
      description: 'Larger number input for easier interaction'
    }
  ];

  // Color themes
  colorThemes: InputNumberVariant[] = [
    {
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'Default',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
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
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'Primary',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
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
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'Success',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
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
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'Warning',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
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
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'Danger',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
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
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'Purple',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
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
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'Pink',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
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
  stateExamples: InputNumberVariant[] = [
    {
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'Interactive',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Interactive',
      helperText: 'Standard interactive input',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Standard interactive number input'
    },
    {
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'Read-only',
      disabled: false,
      readonly: true,
      loading: false,
      showButtons: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Read-only',
      helperText: 'Value cannot be changed',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Read-only number input'
    },
    {
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'Disabled',
      disabled: true,
      readonly: false,
      loading: false,
      showButtons: true,
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
      description: 'Disabled number input'
    },
    {
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'Loading',
      disabled: false,
      readonly: false,
      loading: true,
      showButtons: true,
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
      description: 'Number input in loading state'
    }
  ];

  // Layout options
  layoutOptions: InputNumberVariant[] = [
    {
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'Compact',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
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
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'Spacious',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
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
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'With Icon',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'With Icon',
      helperText: 'Input with icon',
      errorText: '',
      icon: '🔢',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Number input with icon'
    },
    {
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'No Buttons',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'No Buttons',
      helperText: 'Input without increment/decrement buttons',
      errorText: '',
      icon: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Number input without buttons'
    }
  ];

  // Animation effects
  animationEffects: InputNumberVariant[] = [
    {
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'Animated',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
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
      description: 'Number input with smooth animations'
    },
    {
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'Bounce',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
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
      description: 'Number input with bounce animation'
    },
    {
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'Glow',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
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
      description: 'Number input with glow effect'
    },
    {
      value: 5,
      min: 0,
      max: 10,
      step: 1,
      placeholder: 'All Effects',
      disabled: false,
      readonly: false,
      loading: false,
      showButtons: true,
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
      description: 'Number input with all animation effects'
    }
  ];

  // Real-world examples
  quantityInput: InputNumberVariant = {
    value: 1,
    min: 1,
    max: 99,
    step: 1,
    placeholder: 'Qty',
    disabled: false,
    readonly: false,
    loading: false,
    showButtons: true,
    size: 'medium',
    theme: 'light',
    color: 'primary',
    label: 'Quantity',
    helperText: 'Select quantity (1-99)',
    errorText: '',
    icon: '',
    compact: false,
    spacious: false,
    animated: true,
    bounce: false,
    glow: false,
    description: 'Product quantity selector'
  };

  priceInput: InputNumberVariant = {
    value: 0,
    min: 0,
    max: 9999.99,
    step: 0.01,
    placeholder: '0.00',
    disabled: false,
    readonly: false,
    loading: false,
    showButtons: true,
    size: 'medium',
    theme: 'light',
    color: 'success',
    label: 'Price',
    helperText: 'Enter price in dollars',
    errorText: '',
    icon: '$',
    compact: false,
    spacious: false,
    animated: false,
    bounce: false,
    glow: false,
    description: 'Price input with decimal precision'
  };

  ageInput: InputNumberVariant = {
    value: 18,
    min: 13,
    max: 120,
    step: 1,
    placeholder: 'Age',
    disabled: false,
    readonly: false,
    loading: false,
    showButtons: true,
    size: 'medium',
    theme: 'light',
    color: 'default',
    label: 'Age',
    helperText: 'Must be between 13 and 120',
    errorText: '',
    icon: '',
    compact: false,
    spacious: false,
    animated: false,
    bounce: false,
    glow: false,
    description: 'Age input with validation'
  };

  ratingInput: InputNumberVariant = {
    value: 5,
    min: 1,
    max: 5,
    step: 1,
    placeholder: 'Rating',
    disabled: false,
    readonly: false,
    loading: false,
    showButtons: true,
    size: 'medium',
    theme: 'light',
    color: 'warning',
    label: 'Rating',
    helperText: 'Rate from 1 to 5 stars',
    errorText: '',
    icon: '⭐',
    compact: false,
    spacious: false,
    animated: true,
    bounce: true,
    glow: false,
    description: 'Rating input with star icon'
  };

  onValueChange(value: number | null, input: InputNumberVariant): void {
    input.value = value;
    console.log(`${input.label} changed to:`, value);
  }

  onIncrement(value: number | null, input: InputNumberVariant): void {
    console.log(`${input.label} incremented to:`, value);
  }

  onDecrement(value: number | null, input: InputNumberVariant): void {
    console.log(`${input.label} decremented to:`, value);
  }

  getInputStatus(input: InputNumberVariant): string {
    if (input.disabled) return 'Disabled';
    if (input.readonly) return 'Read-only';
    if (input.loading) return 'Loading';
    return 'Interactive';
  }

  getInputStatusColor(input: InputNumberVariant): string {
    if (input.disabled) return 'text-gray-500';
    if (input.readonly) return 'text-blue-600';
    if (input.loading) return 'text-yellow-600';
    return 'text-green-600';
  }
}