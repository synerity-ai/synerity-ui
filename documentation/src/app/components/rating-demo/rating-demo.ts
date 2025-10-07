import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Rating } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

interface RatingVariant {
  value: number;
  max: number;
  size: 'small' | 'medium' | 'large';
  theme: 'light' | 'dark';
  color: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink';
  disabled: boolean;
  readonly: boolean;
  allowClear: boolean;
  showValue: boolean;
  animate: boolean;
  bounce: boolean;
  glow: boolean;
  compact: boolean;
  spacious: boolean;
  label: string;
  description: string;
}

@Component({
  selector: 'app-rating-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Rating],
  templateUrl: './rating-demo.html',
  styleUrl: './rating-demo.scss'
})
export class RatingDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Basic rating examples
  basicRatings: RatingVariant[] = [
    {
      value: 0,
      max: 5,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: false,
      compact: false,
      spacious: false,
      label: 'Basic Rating',
      description: 'Simple 5-star rating'
    },
    {
      value: 3,
      max: 5,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: false,
      compact: false,
      spacious: false,
      label: 'With Default Value',
      description: 'Pre-selected with 3 stars'
    },
    {
      value: 0,
      max: 10,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: false,
      compact: false,
      spacious: false,
      label: '10-Star Rating',
      description: 'Extended rating scale'
    }
  ];

  // Size variations
  sizeVariants: RatingVariant[] = [
    {
      value: 3,
      max: 5,
      size: 'small',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: false,
      compact: false,
      spacious: false,
      label: 'Small Size',
      description: 'Compact rating display'
    },
    {
      value: 3,
      max: 5,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: false,
      compact: false,
      spacious: false,
      label: 'Medium Size',
      description: 'Standard rating size'
    },
    {
      value: 3,
      max: 5,
      size: 'large',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: false,
      compact: false,
      spacious: false,
      label: 'Large Size',
      description: 'Prominent rating display'
    }
  ];

  // Color variants
  colorVariants: RatingVariant[] = [
    {
      value: 4,
      max: 5,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: false,
      compact: false,
      spacious: false,
      label: 'Default Color',
      description: 'Standard yellow stars'
    },
    {
      value: 4,
      max: 5,
      size: 'medium',
      theme: 'light',
      color: 'primary',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: false,
      compact: false,
      spacious: false,
      label: 'Primary Color',
      description: 'Blue theme stars'
    },
    {
      value: 4,
      max: 5,
      size: 'medium',
      theme: 'light',
      color: 'success',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: false,
      compact: false,
      spacious: false,
      label: 'Success Color',
      description: 'Green theme stars'
    },
    {
      value: 4,
      max: 5,
      size: 'medium',
      theme: 'light',
      color: 'warning',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: false,
      compact: false,
      spacious: false,
      label: 'Warning Color',
      description: 'Orange theme stars'
    },
    {
      value: 4,
      max: 5,
      size: 'medium',
      theme: 'light',
      color: 'danger',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: false,
      compact: false,
      spacious: false,
      label: 'Danger Color',
      description: 'Red theme stars'
    },
    {
      value: 4,
      max: 5,
      size: 'medium',
      theme: 'light',
      color: 'purple',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: false,
      compact: false,
      spacious: false,
      label: 'Purple Color',
      description: 'Purple theme stars'
    },
    {
      value: 4,
      max: 5,
      size: 'medium',
      theme: 'light',
      color: 'pink',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: false,
      compact: false,
      spacious: false,
      label: 'Pink Color',
      description: 'Pink theme stars'
    }
  ];

  // State examples
  stateExamples: RatingVariant[] = [
    {
      value: 3,
      max: 5,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: false,
      compact: false,
      spacious: false,
      label: 'Interactive',
      description: 'Fully interactive rating'
    },
    {
      value: 3,
      max: 5,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: true,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: false,
      compact: false,
      spacious: false,
      label: 'Read Only',
      description: 'Display only, no interaction'
    },
    {
      value: 3,
      max: 5,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: true,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: false,
      compact: false,
      spacious: false,
      label: 'Disabled',
      description: 'Disabled state'
    }
  ];

  // Animation examples
  animationExamples: RatingVariant[] = [
    {
      value: 3,
      max: 5,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: true,
      bounce: false,
      glow: false,
      compact: false,
      spacious: false,
      label: 'Animated',
      description: 'Pulse animation on hover'
    },
    {
      value: 3,
      max: 5,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: true,
      glow: false,
      compact: false,
      spacious: false,
      label: 'Bounce Effect',
      description: 'Bounce animation on hover'
    },
    {
      value: 3,
      max: 5,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: true,
      compact: false,
      spacious: false,
      label: 'Glow Effect',
      description: 'Glowing filled stars'
    }
  ];

  // Layout examples
  layoutExamples: RatingVariant[] = [
    {
      value: 3,
      max: 5,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: true,
      animate: false,
      bounce: false,
      glow: false,
      compact: false,
      spacious: false,
      label: 'With Value Display',
      description: 'Shows current rating value'
    },
    {
      value: 3,
      max: 5,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: false,
      compact: true,
      spacious: false,
      label: 'Compact Layout',
      description: 'Tight spacing between stars'
    },
    {
      value: 3,
      max: 5,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: false,
      compact: false,
      spacious: true,
      label: 'Spacious Layout',
      description: 'Wide spacing between stars'
    }
  ];

  // Theme examples
  themeExamples: RatingVariant[] = [
    {
      value: 4,
      max: 5,
      size: 'medium',
      theme: 'light',
      color: 'default',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: false,
      compact: false,
      spacious: false,
      label: 'Light Theme',
      description: 'Light mode appearance'
    },
    {
      value: 4,
      max: 5,
      size: 'medium',
      theme: 'dark',
      color: 'default',
      disabled: false,
      readonly: false,
      allowClear: true,
      showValue: false,
      animate: false,
      bounce: false,
      glow: false,
      compact: false,
      spacious: false,
      label: 'Dark Theme',
      description: 'Dark mode appearance'
    }
  ];

  // Real-world examples
  productRating = {
    value: 4,
    max: 5,
    size: 'medium' as const,
    theme: 'light' as const,
    color: 'default' as const,
    disabled: false,
    readonly: false,
    allowClear: true,
    showValue: true,
    animate: false,
    bounce: false,
    glow: false,
    compact: false,
    spacious: false,
    label: 'Product Rating',
    description: 'Customer product review'
  };

  serviceRating = {
    value: 5,
    max: 5,
    size: 'large' as const,
    theme: 'light' as const,
    color: 'success' as const,
    disabled: false,
    readonly: false,
    allowClear: true,
    showValue: false,
    animate: true,
    bounce: false,
    glow: true,
    compact: false,
    spacious: false,
    label: 'Service Rating',
    description: 'Excellent service feedback'
  };

  movieRating = {
    value: 3,
    max: 5,
    size: 'medium' as const,
    theme: 'light' as const,
    color: 'warning' as const,
    disabled: false,
    readonly: false,
    allowClear: true,
    showValue: true,
    animate: false,
    bounce: false,
    glow: false,
    compact: false,
    spacious: false,
    label: 'Movie Rating',
    description: 'Film review rating'
  };

  // Event handlers
  onRatingChange(value: number, rating: RatingVariant): void {
    rating.value = value;
    console.log('Rating changed:', value);
  }

  // Utility methods
  getRatingText(value: number, max: number): string {
    if (value === 0) return 'No rating';
    if (value === 1) return 'Poor';
    if (value === 2) return 'Fair';
    if (value === 3) return 'Good';
    if (value === 4) return 'Very Good';
    if (value === 5) return 'Excellent';
    return `${value}/${max}`;
  }

  getRatingColor(value: number, max: number): string {
    const percentage = (value / max) * 100;
    if (percentage >= 80) return 'success';
    if (percentage >= 60) return 'warning';
    if (percentage >= 40) return 'primary';
    return 'default';
  }
}
