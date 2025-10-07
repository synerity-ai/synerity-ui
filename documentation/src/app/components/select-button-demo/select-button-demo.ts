import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectButton, SelectButtonOption } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

interface SelectButtonVariant {
  options: SelectButtonOption[];
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
  selector: 'app-select-button-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectButton],
  templateUrl: './select-button-demo.html',
  styleUrl: './select-button-demo.scss'
})
export class SelectButtonDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Basic select button examples
  basicSelectButtons: SelectButtonVariant[] = [
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
      label: 'Basic Select Button',
      helperText: 'Select an option from the buttons',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Simple select button group with basic options',
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
      description: 'Multi-select buttons with icons',
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
      description: 'Select buttons with descriptions and badges',
      value: 'pro',
      values: []
    }
  ];

  // Size variations
  sizeVariants: SelectButtonVariant[] = [
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
      description: 'Compact select buttons for space-constrained layouts',
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
      description: 'Standard select button size for most use cases',
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
      description: 'Larger select buttons for better accessibility and touch interaction',
      value: 'large1',
      values: []
    }
  ];

  // Color themes
  colorThemes: SelectButtonVariant[] = [
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
      description: 'Standard gray colored select buttons',
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
      description: 'Blue colored select buttons',
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
      description: 'Green colored select buttons',
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
      description: 'Orange colored select buttons',
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
      description: 'Red colored select buttons',
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
      description: 'Purple colored select buttons',
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
      description: 'Pink colored select buttons',
      value: 'pink1',
      values: []
    }
  ];

  // Style variations
  styleVariants: SelectButtonVariant[] = [
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
      description: 'Default filled style select buttons',
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
      description: 'Outline style select buttons',
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
      description: 'Ghost style select buttons',
      value: 'ghost1',
      values: []
    }
  ];

  // Shape variations
  shapeVariants: SelectButtonVariant[] = [
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
      description: 'Default rectangular shape select buttons',
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
      description: 'Rounded shape select buttons',
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
      description: 'Pill shape select buttons',
      value: 'pill1',
      values: []
    }
  ];

  // State examples
  stateExamples: SelectButtonVariant[] = [
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
      helperText: 'Standard interactive select buttons',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Standard interactive select buttons',
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
      helperText: 'Select buttons are disabled',
      errorText: '',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Disabled select buttons',
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
      description: 'Select buttons in loading state',
      value: 'loading1',
      values: []
    }
  ];

  // Layout options
  layoutOptions: SelectButtonVariant[] = [
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
  animationEffects: SelectButtonVariant[] = [
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
      description: 'Select buttons with smooth animations',
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
      description: 'Select buttons with bounce animation',
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
      description: 'Select buttons with glow effect',
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
      description: 'Select buttons with all animation effects',
      value: 'all1',
      values: []
    }
  ];

  // Real-world examples
  textEditor: SelectButtonVariant = {
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

  viewSelector: SelectButtonVariant = {
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

  onSelectButtonChange(value: unknown, selectButton: SelectButtonVariant): void {
    if (selectButton.multiple) {
      selectButton.values = Array.isArray(value) ? value : [];
    } else {
      selectButton.value = value;
    }
    console.log(`${selectButton.label} changed to:`, value);
  }

  onSelectButtonModelChange(value: unknown, selectButton: SelectButtonVariant): void {
    if (selectButton.multiple) {
      selectButton.values = Array.isArray(value) ? value : [];
    } else {
      selectButton.value = value;
    }
    console.log(`${selectButton.label} model changed to:`, value);
  }

  onSelectButtonSelect(option: SelectButtonOption, selectButton: SelectButtonVariant): void {
    console.log(`${selectButton.label} selected:`, option);
  }

  onSelectButtonFocus(index: number, selectButton: SelectButtonVariant): void {
    console.log(`${selectButton.label} focused on index:`, index);
  }

  onSelectButtonBlur(selectButton: SelectButtonVariant): void {
    console.log(`${selectButton.label} blurred`);
  }

  getSelectButtonStatus(selectButton: SelectButtonVariant): string {
    if (selectButton.disabled) return 'Disabled';
    if (selectButton.loading) return 'Loading';
    return 'Interactive';
  }

  getSelectButtonStatusColor(selectButton: SelectButtonVariant): string {
    if (selectButton.disabled) return 'text-gray-500';
    if (selectButton.loading) return 'text-yellow-600';
    return 'text-green-600';
  }

  getSelectedText(selectButton: SelectButtonVariant): string {
    if (selectButton.multiple) {
      const selected = selectButton.values;
      if (selected.length === 0) return 'No selection';
      if (selected.length === 1) {
        const option = selectButton.options.find(opt => opt.value === selected[0]);
        return option ? option.label : 'Unknown';
      }
      return `${selected.length} items selected`;
    } else {
      const option = selectButton.options.find(opt => opt.value === selectButton.value);
      return option ? option.label : 'No selection';
    }
  }
}
