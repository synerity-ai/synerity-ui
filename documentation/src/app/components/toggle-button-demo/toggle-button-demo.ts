import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToggleButton, ToggleButtonOption } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

interface ToggleButtonVariant {
  options: ToggleButtonOption[];
  disabled: boolean;
  loading: boolean;
  multiple: boolean;
  size: 'sm' | 'md' | 'lg';
  theme: 'light' | 'dark';
  color: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink';
  style: 'default' | 'outline' | 'ghost';
  shape: 'default' | 'rounded' | 'pill';
  label: string;
  helperText: string;
  errorText: string;
  compact: boolean;
  spacious: boolean;
  animated: boolean;
  bounce: boolean;
  glow: boolean;
  description: string;
  value: unknown;
  values: unknown[];
}

@Component({
  selector: 'app-toggle-button-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ToggleButton],
  templateUrl: './toggle-button-demo.html',
  styleUrl: './toggle-button-demo.scss'
})
export class ToggleButtonDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Basic toggle button examples
  basicToggleButtons: ToggleButtonVariant[] = [
    {
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'default',
      style: 'default',
      shape: 'default',
      label: 'Basic Toggle Button',
      helperText: 'Select an option from the toggle buttons',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Simple toggle button group with basic options',
      value: 'option1',
      values: []
    },
    {
      options: [
        { label: 'Bold', value: 'bold', icon: 'B' },
        { label: 'Italic', value: 'italic', icon: 'I' },
        { label: 'Underline', value: 'underline', icon: 'U' }
      ],
      disabled: false,
      loading: false,
      multiple: true,
      size: 'md',
      theme: 'light',
      color: 'default',
      style: 'default',
      shape: 'default',
      label: 'Multi-Select with Icons',
      helperText: 'Select multiple formatting options',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Multi-select toggle buttons with icons',
      value: null,
      values: ['bold', 'italic']
    },
    {
      options: [
        { label: 'Free Plan', value: 'free', description: 'Basic features', badge: 'Free' },
        { label: 'Pro Plan', value: 'pro', description: 'Advanced features', badge: '$9/mo' },
        { label: 'Enterprise', value: 'enterprise', description: 'Full features', badge: '$29/mo' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'default',
      style: 'default',
      shape: 'default',
      label: 'With Descriptions & Badges',
      helperText: 'Choose your subscription plan',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Toggle buttons with descriptions and badges',
      value: 'pro',
      values: []
    }
  ];

  // Size variations
  sizeVariants: ToggleButtonVariant[] = [
    {
      options: [
        { label: 'Small 1', value: 'small1' },
        { label: 'Small 2', value: 'small2' },
        { label: 'Small 3', value: 'small3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'sm',
      theme: 'light',
      color: 'default',
      style: 'default',
      shape: 'default',
      label: 'Small Size',
      helperText: '',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Compact toggle buttons for space-constrained layouts',
      value: 'small1',
      values: []
    },
    {
      options: [
        { label: 'Medium 1', value: 'medium1' },
        { label: 'Medium 2', value: 'medium2' },
        { label: 'Medium 3', value: 'medium3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'default',
      style: 'default',
      shape: 'default',
      label: 'Medium Size',
      helperText: '',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Standard toggle button size for most use cases',
      value: 'medium1',
      values: []
    },
    {
      options: [
        { label: 'Large 1', value: 'large1' },
        { label: 'Large 2', value: 'large2' },
        { label: 'Large 3', value: 'large3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'lg',
      theme: 'light',
      color: 'default',
      style: 'default',
      shape: 'default',
      label: 'Large Size',
      helperText: '',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Larger toggle buttons for better accessibility and touch interaction',
      value: 'large1',
      values: []
    }
  ];

  // Color themes
  colorThemes: ToggleButtonVariant[] = [
    {
      options: [
        { label: 'Default 1', value: 'default1' },
        { label: 'Default 2', value: 'default2' },
        { label: 'Default 3', value: 'default3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'default',
      style: 'default',
      shape: 'default',
      label: 'Default Color',
      helperText: '',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Standard gray colored toggle buttons',
      value: 'default1',
      values: []
    },
    {
      options: [
        { label: 'Primary 1', value: 'primary1' },
        { label: 'Primary 2', value: 'primary2' },
        { label: 'Primary 3', value: 'primary3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'primary',
      style: 'default',
      shape: 'default',
      label: 'Primary Color',
      helperText: '',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Blue colored toggle buttons',
      value: 'primary1',
      values: []
    },
    {
      options: [
        { label: 'Success 1', value: 'success1' },
        { label: 'Success 2', value: 'success2' },
        { label: 'Success 3', value: 'success3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'success',
      style: 'default',
      shape: 'default',
      label: 'Success Color',
      helperText: '',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Green colored toggle buttons',
      value: 'success1',
      values: []
    },
    {
      options: [
        { label: 'Warning 1', value: 'warning1' },
        { label: 'Warning 2', value: 'warning2' },
        { label: 'Warning 3', value: 'warning3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'warning',
      style: 'default',
      shape: 'default',
      label: 'Warning Color',
      helperText: '',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Orange colored toggle buttons',
      value: 'warning1',
      values: []
    },
    {
      options: [
        { label: 'Danger 1', value: 'danger1' },
        { label: 'Danger 2', value: 'danger2' },
        { label: 'Danger 3', value: 'danger3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'danger',
      style: 'default',
      shape: 'default',
      label: 'Danger Color',
      helperText: '',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Red colored toggle buttons',
      value: 'danger1',
      values: []
    },
    {
      options: [
        { label: 'Purple 1', value: 'purple1' },
        { label: 'Purple 2', value: 'purple2' },
        { label: 'Purple 3', value: 'purple3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'purple',
      style: 'default',
      shape: 'default',
      label: 'Purple Color',
      helperText: '',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Purple colored toggle buttons',
      value: 'purple1',
      values: []
    },
    {
      options: [
        { label: 'Pink 1', value: 'pink1' },
        { label: 'Pink 2', value: 'pink2' },
        { label: 'Pink 3', value: 'pink3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'pink',
      style: 'default',
      shape: 'default',
      label: 'Pink Color',
      helperText: '',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Pink colored toggle buttons',
      value: 'pink1',
      values: []
    }
  ];

  // Style variations
  styleVariants: ToggleButtonVariant[] = [
    {
      options: [
        { label: 'Default 1', value: 'default1' },
        { label: 'Default 2', value: 'default2' },
        { label: 'Default 3', value: 'default3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'primary',
      style: 'default',
      shape: 'default',
      label: 'Default Style',
      helperText: '',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Default filled style toggle buttons',
      value: 'default1',
      values: []
    },
    {
      options: [
        { label: 'Outline 1', value: 'outline1' },
        { label: 'Outline 2', value: 'outline2' },
        { label: 'Outline 3', value: 'outline3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'primary',
      style: 'outline',
      shape: 'default',
      label: 'Outline Style',
      helperText: '',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Outline style toggle buttons',
      value: 'outline1',
      values: []
    },
    {
      options: [
        { label: 'Ghost 1', value: 'ghost1' },
        { label: 'Ghost 2', value: 'ghost2' },
        { label: 'Ghost 3', value: 'ghost3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'primary',
      style: 'ghost',
      shape: 'default',
      label: 'Ghost Style',
      helperText: '',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Ghost style toggle buttons',
      value: 'ghost1',
      values: []
    }
  ];

  // Shape variations
  shapeVariants: ToggleButtonVariant[] = [
    {
      options: [
        { label: 'Default 1', value: 'default1' },
        { label: 'Default 2', value: 'default2' },
        { label: 'Default 3', value: 'default3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'primary',
      style: 'default',
      shape: 'default',
      label: 'Default Shape',
      helperText: '',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Default rectangular shape toggle buttons',
      value: 'default1',
      values: []
    },
    {
      options: [
        { label: 'Rounded 1', value: 'rounded1' },
        { label: 'Rounded 2', value: 'rounded2' },
        { label: 'Rounded 3', value: 'rounded3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'primary',
      style: 'default',
      shape: 'rounded',
      label: 'Rounded Shape',
      helperText: '',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Rounded shape toggle buttons',
      value: 'rounded1',
      values: []
    },
    {
      options: [
        { label: 'Pill 1', value: 'pill1' },
        { label: 'Pill 2', value: 'pill2' },
        { label: 'Pill 3', value: 'pill3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'primary',
      style: 'default',
      shape: 'pill',
      label: 'Pill Shape',
      helperText: '',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Pill shape toggle buttons',
      value: 'pill1',
      values: []
    }
  ];

  // State examples
  stateExamples: ToggleButtonVariant[] = [
    {
      options: [
        { label: 'Interactive 1', value: 'interactive1' },
        { label: 'Interactive 2', value: 'interactive2' },
        { label: 'Interactive 3', value: 'interactive3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'default',
      style: 'default',
      shape: 'default',
      label: 'Interactive',
      helperText: 'Standard interactive toggle buttons',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Standard interactive toggle buttons',
      value: 'interactive1',
      values: []
    },
    {
      options: [
        { label: 'Disabled 1', value: 'disabled1' },
        { label: 'Disabled 2', value: 'disabled2' },
        { label: 'Disabled 3', value: 'disabled3' }
      ],
      disabled: true,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'default',
      style: 'default',
      shape: 'default',
      label: 'Disabled',
      helperText: 'Toggle buttons are disabled',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Disabled toggle buttons',
      value: 'disabled1',
      values: []
    },
    {
      options: [
        { label: 'Loading 1', value: 'loading1' },
        { label: 'Loading 2', value: 'loading2' },
        { label: 'Loading 3', value: 'loading3' }
      ],
      disabled: false,
      loading: true,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'default',
      style: 'default',
      shape: 'default',
      label: 'Loading',
      helperText: 'Loading options...',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Toggle buttons in loading state',
      value: 'loading1',
      values: []
    }
  ];

  // Layout options
  layoutOptions: ToggleButtonVariant[] = [
    {
      options: [
        { label: 'Compact 1', value: 'compact1' },
        { label: 'Compact 2', value: 'compact2' },
        { label: 'Compact 3', value: 'compact3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'default',
      style: 'default',
      shape: 'default',
      label: 'Compact',
      helperText: 'Reduced padding and spacing',
      errorText: '',
      compact: true,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Compact layout with reduced spacing',
      value: 'compact1',
      values: []
    },
    {
      options: [
        { label: 'Spacious 1', value: 'spacious1' },
        { label: 'Spacious 2', value: 'spacious2' },
        { label: 'Spacious 3', value: 'spacious3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'default',
      style: 'default',
      shape: 'default',
      label: 'Spacious',
      helperText: 'Increased padding and spacing',
      errorText: '',
      compact: false,
      spacious: true,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Spacious layout with increased spacing',
      value: 'spacious1',
      values: []
    }
  ];

  // Animation effects
  animationEffects: ToggleButtonVariant[] = [
    {
      options: [
        { label: 'Animated 1', value: 'animated1' },
        { label: 'Animated 2', value: 'animated2' },
        { label: 'Animated 3', value: 'animated3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'primary',
      style: 'default',
      shape: 'default',
      label: 'Animated',
      helperText: 'Smooth hover animations',
      errorText: '',
      compact: false,
      spacious: false,
      animated: true,
      bounce: false,
      glow: false,
      description: 'Toggle buttons with smooth animations',
      value: 'animated1',
      values: []
    },
    {
      options: [
        { label: 'Bounce 1', value: 'bounce1' },
        { label: 'Bounce 2', value: 'bounce2' },
        { label: 'Bounce 3', value: 'bounce3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'success',
      style: 'default',
      shape: 'default',
      label: 'Bounce',
      helperText: 'Bounce animation on hover',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: true,
      glow: false,
      description: 'Toggle buttons with bounce animation',
      value: 'bounce1',
      values: []
    },
    {
      options: [
        { label: 'Glow 1', value: 'glow1' },
        { label: 'Glow 2', value: 'glow2' },
        { label: 'Glow 3', value: 'glow3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'warning',
      style: 'default',
      shape: 'default',
      label: 'Glow',
      helperText: 'Glowing effect on focus',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: true,
      description: 'Toggle buttons with glow effect',
      value: 'glow1',
      values: []
    },
    {
      options: [
        { label: 'All Effects 1', value: 'all1' },
        { label: 'All Effects 2', value: 'all2' },
        { label: 'All Effects 3', value: 'all3' }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      size: 'md',
      theme: 'light',
      color: 'danger',
      style: 'default',
      shape: 'default',
      label: 'All Effects',
      helperText: 'Combined animation effects',
      errorText: '',
      compact: false,
      spacious: false,
      animated: true,
      bounce: true,
      glow: true,
      description: 'Toggle buttons with all animation effects',
      value: 'all1',
      values: []
    }
  ];

  // Real-world examples
  textEditor: ToggleButtonVariant = {
    options: [
      { label: 'Bold', value: 'bold', icon: 'B' },
      { label: 'Italic', value: 'italic', icon: 'I' },
      { label: 'Underline', value: 'underline', icon: 'U' },
      { label: 'Strike', value: 'strike', icon: 'S' }
    ],
    disabled: false,
    loading: false,
    multiple: true,
    size: 'sm',
    theme: 'light',
    color: 'default',
    style: 'outline',
    shape: 'default',
    label: 'Text Formatting',
    helperText: 'Select text formatting options',
    errorText: '',
    compact: false,
    spacious: false,
    animated: false,
    bounce: false,
    glow: false,
    description: 'Text editor formatting toolbar',
    value: null,
    values: ['bold', 'italic']
  };

  viewSelector: ToggleButtonVariant = {
    options: [
      { label: 'Grid', value: 'grid', icon: '⊞' },
      { label: 'List', value: 'list', icon: '☰' },
      { label: 'Card', value: 'card', icon: '⊡' }
    ],
    disabled: false,
    loading: false,
    multiple: false,
    size: 'md',
    theme: 'light',
    color: 'primary',
    style: 'default',
    shape: 'rounded',
    label: 'View Mode',
    helperText: 'Choose how to display items',
    errorText: '',
    compact: false,
    spacious: false,
    animated: true,
    bounce: false,
    glow: false,
    description: 'View mode selector for content display',
    value: 'grid',
    values: []
  };

  onToggleButtonChange(value: unknown, toggleButton: ToggleButtonVariant): void {
    if (toggleButton.multiple) {
      toggleButton.values = Array.isArray(value) ? value : [];
    } else {
      toggleButton.value = value;
    }
    console.log(`${toggleButton.label} changed to:`, value);
  }

  onToggleButtonModelChange(value: unknown, toggleButton: ToggleButtonVariant): void {
    if (toggleButton.multiple) {
      toggleButton.values = Array.isArray(value) ? value : [];
    } else {
      toggleButton.value = value;
    }
    console.log(`${toggleButton.label} model changed to:`, value);
  }

  onToggleButtonSelect(option: ToggleButtonOption, toggleButton: ToggleButtonVariant): void {
    console.log(`${toggleButton.label} selected:`, option);
  }

  onToggleButtonFocus(index: number, toggleButton: ToggleButtonVariant): void {
    console.log(`${toggleButton.label} focused on index:`, index);
  }

  onToggleButtonBlur(toggleButton: ToggleButtonVariant): void {
    console.log(`${toggleButton.label} blurred`);
  }

  getToggleButtonStatus(toggleButton: ToggleButtonVariant): string {
    if (toggleButton.disabled) return 'Disabled';
    if (toggleButton.loading) return 'Loading';
    return 'Interactive';
  }

  getToggleButtonStatusColor(toggleButton: ToggleButtonVariant): string {
    if (toggleButton.disabled) return 'text-gray-500';
    if (toggleButton.loading) return 'text-yellow-600';
    return 'text-green-600';
  }

  getSelectedText(toggleButton: ToggleButtonVariant): string {
    if (toggleButton.multiple) {
      const selected = toggleButton.values;
      if (selected.length === 0) return 'No selection';
      if (selected.length === 1) {
        const option = toggleButton.options.find(opt => opt.value === selected[0]);
        return option ? option.label : 'Unknown';
      }
      return `${selected.length} items selected`;
    } else {
      const option = toggleButton.options.find(opt => opt.value === toggleButton.value);
      return option ? option.label : 'No selection';
    }
  }
}