import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chip } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

interface ChipVariant {
  label: string;
  icon: string;
  image: string;
  removable: boolean;
  disabled: boolean;
  clickable: boolean;
  size: 'small' | 'medium' | 'large';
  theme: 'light' | 'dark';
  color: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink';
  variant: 'default' | 'outline' | 'filled' | 'soft';
  compact: boolean;
  spacious: boolean;
  rounded: boolean;
  square: boolean;
  animated: boolean;
  bounce: boolean;
  glow: boolean;
  description: string;
}

@Component({
  selector: 'app-chip-demo',
  standalone: true,
  imports: [CommonModule, Chip],
  templateUrl: './chip-demo.html',
  styleUrl: './chip-demo.scss'
})
export class ChipDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Basic chips
  basicChips: ChipVariant[] = [
    {
      label: 'Basic Chip',
      icon: '',
      image: '',
      removable: false,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Simple chip component'
    },
    {
      label: 'Removable Chip',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Chip with remove button'
    },
    {
      label: 'Clickable Chip',
      icon: '',
      image: '',
      removable: false,
      disabled: false,
      clickable: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Interactive clickable chip'
    }
  ];

  // Size variations
  sizeVariants: ChipVariant[] = [
    {
      label: 'Small Chip',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'small',
      theme: 'light',
      color: 'default',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Compact chip size'
    },
    {
      label: 'Medium Chip',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Standard chip size'
    },
    {
      label: 'Large Chip',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'large',
      theme: 'light',
      color: 'default',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Larger chip size'
    }
  ];

  // Color themes
  colorThemes: ChipVariant[] = [
    {
      label: 'Default',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Default gray colored chip'
    },
    {
      label: 'Primary',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'primary',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Blue colored chip'
    },
    {
      label: 'Success',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'success',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Green colored chip'
    },
    {
      label: 'Warning',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'warning',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Orange colored chip'
    },
    {
      label: 'Danger',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'danger',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Red colored chip'
    },
    {
      label: 'Purple',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'purple',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Purple colored chip'
    },
    {
      label: 'Pink',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'pink',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Pink colored chip'
    }
  ];

  // Variant styles
  variantStyles: ChipVariant[] = [
    {
      label: 'Default',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'primary',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Standard filled chip'
    },
    {
      label: 'Outline',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'primary',
      variant: 'outline',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Outlined chip with transparent background'
    },
    {
      label: 'Filled',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'primary',
      variant: 'filled',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Solid filled chip without border'
    },
    {
      label: 'Soft',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'primary',
      variant: 'soft',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Soft chip without border or shadow'
    }
  ];

  // Layout options
  layoutOptions: ChipVariant[] = [
    {
      label: 'Compact',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      variant: 'default',
      compact: true,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Reduced padding and spacing'
    },
    {
      label: 'Spacious',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      variant: 'default',
      compact: false,
      spacious: true,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Increased padding and spacing'
    },
    {
      label: 'Rounded',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: true,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'More rounded corners'
    },
    {
      label: 'Square',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: true,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Square corners'
    }
  ];

  // State examples
  stateExamples: ChipVariant[] = [
    {
      label: 'Interactive',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Standard interactive chip'
    },
    {
      label: 'Disabled',
      icon: '',
      image: '',
      removable: true,
      disabled: true,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Disabled chip that cannot be interacted with'
    }
  ];

  // Animation effects
  animationEffects: ChipVariant[] = [
    {
      label: 'Animated',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: true,
      size: 'medium',
      theme: 'light',
      color: 'primary',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: true,
      bounce: false,
      glow: false,
      description: 'Smooth hover animations'
    },
    {
      label: 'Bounce',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: true,
      size: 'medium',
      theme: 'light',
      color: 'success',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: true,
      glow: false,
      description: 'Bounce animation on hover'
    },
    {
      label: 'Glow',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: true,
      size: 'medium',
      theme: 'light',
      color: 'warning',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: true,
      description: 'Glowing effect on hover'
    },
    {
      label: 'All Effects',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: true,
      size: 'medium',
      theme: 'light',
      color: 'danger',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: true,
      bounce: true,
      glow: true,
      description: 'Combined animation effects'
    }
  ];

  // Icon and image examples
  iconImageExamples: ChipVariant[] = [
    {
      label: 'User',
      icon: '👤',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'primary',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Chip with icon'
    },
    {
      label: 'Email',
      icon: '📧',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'success',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Chip with emoji icon'
    },
    {
      label: 'John Doe',
      icon: '',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Chip with user avatar image'
    },
    {
      label: 'Product',
      icon: '',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=32&h=32&fit=crop',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'warning',
      variant: 'default',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Chip with product image'
    }
  ];

  // Real-world examples
  tagChips: ChipVariant[] = [
    {
      label: 'JavaScript',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: true,
      size: 'small',
      theme: 'light',
      color: 'primary',
      variant: 'soft',
      compact: true,
      spacious: false,
      rounded: false,
      square: false,
      animated: true,
      bounce: false,
      glow: false,
      description: 'Programming language tag'
    },
    {
      label: 'React',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: true,
      size: 'small',
      theme: 'light',
      color: 'success',
      variant: 'soft',
      compact: true,
      spacious: false,
      rounded: false,
      square: false,
      animated: true,
      bounce: false,
      glow: false,
      description: 'Framework tag'
    },
    {
      label: 'TypeScript',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: true,
      size: 'small',
      theme: 'light',
      color: 'warning',
      variant: 'soft',
      compact: true,
      spacious: false,
      rounded: false,
      square: false,
      animated: true,
      bounce: false,
      glow: false,
      description: 'Language tag'
    }
  ];

  filterChips: ChipVariant[] = [
    {
      label: 'Price: $0-$50',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      variant: 'outline',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Price filter chip'
    },
    {
      label: 'Category: Electronics',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'primary',
      variant: 'outline',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Category filter chip'
    },
    {
      label: 'Brand: Apple',
      icon: '',
      image: '',
      removable: true,
      disabled: false,
      clickable: false,
      size: 'medium',
      theme: 'light',
      color: 'success',
      variant: 'outline',
      compact: false,
      spacious: false,
      rounded: false,
      square: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Brand filter chip'
    }
  ];

  onChipRemove(chip: ChipVariant): void {
    console.log('Removed chip:', chip.label);
    // In a real application, you would remove the chip from the array
  }

  onChipClick(chip: ChipVariant): void {
    console.log('Clicked chip:', chip.label);
    // In a real application, you would handle the click event
  }

  getChipStatus(chip: ChipVariant): string {
    if (chip.disabled) return 'Disabled';
    if (chip.clickable) return 'Clickable';
    if (chip.removable) return 'Removable';
    return 'Static';
  }

  getChipStatusColor(chip: ChipVariant): string {
    if (chip.disabled) return 'text-gray-500';
    if (chip.clickable) return 'text-blue-600';
    if (chip.removable) return 'text-green-600';
    return 'text-gray-600';
  }
}