import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Listbox, ListboxOption, ListboxGroup } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

interface ListboxVariant {
  options: ListboxOption[];
  groups: ListboxGroup[];
  disabled: boolean;
  loading: boolean;
  multiSelect: boolean;
  showGroups: boolean;
  size: 'small' | 'medium' | 'large';
  theme: 'light' | 'dark';
  color: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink';
  label: string;
  helperText: string;
  errorText: string;
  placeholder: string;
  emptyText: string;
  emptyDescription: string;
  emptyIcon: string;
  compact: boolean;
  spacious: boolean;
  animated: boolean;
  bounce: boolean;
  glow: boolean;
  maxHeight: string;
  description: string;
  value: unknown;
  values: unknown[];
}

@Component({
  selector: 'app-listbox-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Listbox],
  templateUrl: './listbox-demo.html',
  styleUrl: './listbox-demo.scss'
})
export class ListboxDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Basic listbox examples
  basicListboxes: ListboxVariant[] = [
    {
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
        { label: 'Option 4', value: 'option4' },
        { label: 'Option 5', value: 'option5' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Basic Listbox',
      helperText: 'Select an option from the list',
      errorText: '',
      placeholder: 'Select an option',
      emptyText: 'No options available',
      emptyDescription: 'Try adjusting your search or filters',
      emptyIcon: '📋',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Simple listbox with basic options',
      value: 'option1',
      values: []
    },
    {
      options: [
        { label: 'Apple', value: 'apple', icon: '🍎' },
        { label: 'Banana', value: 'banana', icon: '🍌' },
        { label: 'Cherry', value: 'cherry', icon: '🍒' },
        { label: 'Date', value: 'date', icon: '📅' },
        { label: 'Elderberry', value: 'elderberry', icon: '🫐' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'With Icons',
      helperText: 'Options with icons for better visual identification',
      errorText: '',
      placeholder: 'Select a fruit',
      emptyText: 'No fruits available',
      emptyDescription: 'Try adjusting your search or filters',
      emptyIcon: '🍎',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Listbox with icons for each option',
      value: 'apple',
      values: []
    },
    {
      options: [
        { label: 'Basic Plan', value: 'basic', description: 'Perfect for individuals', badge: 'Free' },
        { label: 'Pro Plan', value: 'pro', description: 'Great for small teams', badge: '$9/mo' },
        { label: 'Enterprise Plan', value: 'enterprise', description: 'For large organizations', badge: '$29/mo' },
        { label: 'Custom Plan', value: 'custom', description: 'Tailored to your needs', badge: 'Contact' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'With Descriptions & Badges',
      helperText: 'Options with detailed descriptions and badges',
      errorText: '',
      placeholder: 'Select a plan',
      emptyText: 'No plans available',
      emptyDescription: 'Try adjusting your search or filters',
      emptyIcon: '💼',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Listbox with descriptions and badges',
      value: 'pro',
      values: []
    }
  ];

  // Size variations
  sizeVariants: ListboxVariant[] = [
    {
      options: [
        { label: 'Small Option 1', value: 'small1' },
        { label: 'Small Option 2', value: 'small2' },
        { label: 'Small Option 3', value: 'small3' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'small',
      theme: 'light',
      color: 'default',
      label: 'Small Size',
      helperText: '',
      errorText: '',
      placeholder: 'Select option',
      emptyText: 'No options',
      emptyDescription: 'No options available',
      emptyIcon: '📋',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Compact listbox for space-constrained layouts',
      value: 'small1',
      values: []
    },
    {
      options: [
        { label: 'Medium Option 1', value: 'medium1' },
        { label: 'Medium Option 2', value: 'medium2' },
        { label: 'Medium Option 3', value: 'medium3' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Medium Size',
      helperText: '',
      errorText: '',
      placeholder: 'Select option',
      emptyText: 'No options',
      emptyDescription: 'No options available',
      emptyIcon: '📋',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Standard listbox size for most use cases',
      value: 'medium1',
      values: []
    },
    {
      options: [
        { label: 'Large Option 1', value: 'large1' },
        { label: 'Large Option 2', value: 'large2' },
        { label: 'Large Option 3', value: 'large3' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'large',
      theme: 'light',
      color: 'default',
      label: 'Large Size',
      helperText: '',
      errorText: '',
      placeholder: 'Select option',
      emptyText: 'No options',
      emptyDescription: 'No options available',
      emptyIcon: '📋',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Larger listbox for better accessibility and touch interaction',
      value: 'large1',
      values: []
    }
  ];

  // Color themes
  colorThemes: ListboxVariant[] = [
    {
      options: [
        { label: 'Default Option 1', value: 'default1' },
        { label: 'Default Option 2', value: 'default2' },
        { label: 'Default Option 3', value: 'default3' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Default Color',
      helperText: '',
      errorText: '',
      placeholder: 'Select option',
      emptyText: 'No options',
      emptyDescription: 'No options available',
      emptyIcon: '📋',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Standard gray colored listbox',
      value: 'default1',
      values: []
    },
    {
      options: [
        { label: 'Primary Option 1', value: 'primary1' },
        { label: 'Primary Option 2', value: 'primary2' },
        { label: 'Primary Option 3', value: 'primary3' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'primary',
      label: 'Primary Color',
      helperText: '',
      errorText: '',
      placeholder: 'Select option',
      emptyText: 'No options',
      emptyDescription: 'No options available',
      emptyIcon: '📋',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Blue colored listbox',
      value: 'primary1',
      values: []
    },
    {
      options: [
        { label: 'Success Option 1', value: 'success1' },
        { label: 'Success Option 2', value: 'success2' },
        { label: 'Success Option 3', value: 'success3' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'success',
      label: 'Success Color',
      helperText: '',
      errorText: '',
      placeholder: 'Select option',
      emptyText: 'No options',
      emptyDescription: 'No options available',
      emptyIcon: '📋',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Green colored listbox',
      value: 'success1',
      values: []
    },
    {
      options: [
        { label: 'Warning Option 1', value: 'warning1' },
        { label: 'Warning Option 2', value: 'warning2' },
        { label: 'Warning Option 3', value: 'warning3' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'warning',
      label: 'Warning Color',
      helperText: '',
      errorText: '',
      placeholder: 'Select option',
      emptyText: 'No options',
      emptyDescription: 'No options available',
      emptyIcon: '📋',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Orange colored listbox',
      value: 'warning1',
      values: []
    },
    {
      options: [
        { label: 'Danger Option 1', value: 'danger1' },
        { label: 'Danger Option 2', value: 'danger2' },
        { label: 'Danger Option 3', value: 'danger3' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'danger',
      label: 'Danger Color',
      helperText: '',
      errorText: '',
      placeholder: 'Select option',
      emptyText: 'No options',
      emptyDescription: 'No options available',
      emptyIcon: '📋',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Red colored listbox',
      value: 'danger1',
      values: []
    },
    {
      options: [
        { label: 'Purple Option 1', value: 'purple1' },
        { label: 'Purple Option 2', value: 'purple2' },
        { label: 'Purple Option 3', value: 'purple3' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'purple',
      label: 'Purple Color',
      helperText: '',
      errorText: '',
      placeholder: 'Select option',
      emptyText: 'No options',
      emptyDescription: 'No options available',
      emptyIcon: '📋',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Purple colored listbox',
      value: 'purple1',
      values: []
    },
    {
      options: [
        { label: 'Pink Option 1', value: 'pink1' },
        { label: 'Pink Option 2', value: 'pink2' },
        { label: 'Pink Option 3', value: 'pink3' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'pink',
      label: 'Pink Color',
      helperText: '',
      errorText: '',
      placeholder: 'Select option',
      emptyText: 'No options',
      emptyDescription: 'No options available',
      emptyIcon: '📋',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Pink colored listbox',
      value: 'pink1',
      values: []
    }
  ];

  // State examples
  stateExamples: ListboxVariant[] = [
    {
      options: [
        { label: 'Interactive Option 1', value: 'interactive1' },
        { label: 'Interactive Option 2', value: 'interactive2' },
        { label: 'Interactive Option 3', value: 'interactive3' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Interactive',
      helperText: 'Standard interactive listbox',
      errorText: '',
      placeholder: 'Select option',
      emptyText: 'No options',
      emptyDescription: 'No options available',
      emptyIcon: '📋',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Standard interactive listbox',
      value: 'interactive1',
      values: []
    },
    {
      options: [
        { label: 'Disabled Option 1', value: 'disabled1' },
        { label: 'Disabled Option 2', value: 'disabled2' },
        { label: 'Disabled Option 3', value: 'disabled3' }
      ],
      groups: [],
      disabled: true,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Disabled',
      helperText: 'Listbox is disabled',
      errorText: '',
      placeholder: 'Select option',
      emptyText: 'No options',
      emptyDescription: 'No options available',
      emptyIcon: '📋',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Disabled listbox',
      value: 'disabled1',
      values: []
    },
    {
      options: [
        { label: 'Loading Option 1', value: 'loading1' },
        { label: 'Loading Option 2', value: 'loading2' },
        { label: 'Loading Option 3', value: 'loading3' }
      ],
      groups: [],
      disabled: false,
      loading: true,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Loading',
      helperText: 'Loading options...',
      errorText: '',
      placeholder: 'Select option',
      emptyText: 'No options',
      emptyDescription: 'No options available',
      emptyIcon: '📋',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Listbox in loading state',
      value: 'loading1',
      values: []
    }
  ];

  // Layout options
  layoutOptions: ListboxVariant[] = [
    {
      options: [
        { label: 'Compact Option 1', value: 'compact1' },
        { label: 'Compact Option 2', value: 'compact2' },
        { label: 'Compact Option 3', value: 'compact3' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Compact',
      helperText: 'Reduced padding and spacing',
      errorText: '',
      placeholder: 'Select option',
      emptyText: 'No options',
      emptyDescription: 'No options available',
      emptyIcon: '📋',
      compact: true,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Compact layout with reduced spacing',
      value: 'compact1',
      values: []
    },
    {
      options: [
        { label: 'Spacious Option 1', value: 'spacious1' },
        { label: 'Spacious Option 2', value: 'spacious2' },
        { label: 'Spacious Option 3', value: 'spacious3' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Spacious',
      helperText: 'Increased padding and spacing',
      errorText: '',
      placeholder: 'Select option',
      emptyText: 'No options',
      emptyDescription: 'No options available',
      emptyIcon: '📋',
      compact: false,
      spacious: true,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Spacious layout with increased spacing',
      value: 'spacious1',
      values: []
    },
    {
      options: [
        { label: 'Limited Height Option 1', value: 'height1' },
        { label: 'Limited Height Option 2', value: 'height2' },
        { label: 'Limited Height Option 3', value: 'height3' },
        { label: 'Limited Height Option 4', value: 'height4' },
        { label: 'Limited Height Option 5', value: 'height5' },
        { label: 'Limited Height Option 6', value: 'height6' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Limited Height',
      helperText: 'Scrollable listbox with limited height',
      errorText: '',
      placeholder: 'Select option',
      emptyText: 'No options',
      emptyDescription: 'No options available',
      emptyIcon: '📋',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '8rem',
      description: 'Listbox with limited height and scrolling',
      value: 'height1',
      values: []
    }
  ];

  // Animation effects
  animationEffects: ListboxVariant[] = [
    {
      options: [
        { label: 'Animated Option 1', value: 'animated1' },
        { label: 'Animated Option 2', value: 'animated2' },
        { label: 'Animated Option 3', value: 'animated3' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'primary',
      label: 'Animated',
      helperText: 'Smooth hover animations',
      errorText: '',
      placeholder: 'Select option',
      emptyText: 'No options',
      emptyDescription: 'No options available',
      emptyIcon: '📋',
      compact: false,
      spacious: false,
      animated: true,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Listbox with smooth animations',
      value: 'animated1',
      values: []
    },
    {
      options: [
        { label: 'Bounce Option 1', value: 'bounce1' },
        { label: 'Bounce Option 2', value: 'bounce2' },
        { label: 'Bounce Option 3', value: 'bounce3' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'success',
      label: 'Bounce',
      helperText: 'Bounce animation on hover',
      errorText: '',
      placeholder: 'Select option',
      emptyText: 'No options',
      emptyDescription: 'No options available',
      emptyIcon: '📋',
      compact: false,
      spacious: false,
      animated: false,
      bounce: true,
      glow: false,
      maxHeight: '',
      description: 'Listbox with bounce animation',
      value: 'bounce1',
      values: []
    },
    {
      options: [
        { label: 'Glow Option 1', value: 'glow1' },
        { label: 'Glow Option 2', value: 'glow2' },
        { label: 'Glow Option 3', value: 'glow3' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'warning',
      label: 'Glow',
      helperText: 'Glowing effect on focus',
      errorText: '',
      placeholder: 'Select option',
      emptyText: 'No options',
      emptyDescription: 'No options available',
      emptyIcon: '📋',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: true,
      maxHeight: '',
      description: 'Listbox with glow effect',
      value: 'glow1',
      values: []
    },
    {
      options: [
        { label: 'All Effects Option 1', value: 'all1' },
        { label: 'All Effects Option 2', value: 'all2' },
        { label: 'All Effects Option 3', value: 'all3' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'danger',
      label: 'All Effects',
      helperText: 'Combined animation effects',
      errorText: '',
      placeholder: 'Select option',
      emptyText: 'No options',
      emptyDescription: 'No options available',
      emptyIcon: '📋',
      compact: false,
      spacious: false,
      animated: true,
      bounce: true,
      glow: true,
      maxHeight: '',
      description: 'Listbox with all animation effects',
      value: 'all1',
      values: []
    }
  ];

  // Multi-select examples
  multiSelectExamples: ListboxVariant[] = [
    {
      options: [
        { label: 'Feature 1', value: 'feature1', icon: '✨' },
        { label: 'Feature 2', value: 'feature2', icon: '🚀' },
        { label: 'Feature 3', value: 'feature3', icon: '💡' },
        { label: 'Feature 4', value: 'feature4', icon: '🔧' },
        { label: 'Feature 5', value: 'feature5', icon: '📊' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: true,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'primary',
      label: 'Multi-Select Features',
      helperText: 'Select multiple features',
      errorText: '',
      placeholder: 'Select features',
      emptyText: 'No features available',
      emptyDescription: 'Try adjusting your search or filters',
      emptyIcon: '✨',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Multi-select listbox for feature selection',
      value: null,
      values: ['feature1', 'feature3']
    },
    {
      options: [
        { label: 'Tag 1', value: 'tag1', badge: 'New' },
        { label: 'Tag 2', value: 'tag2', badge: 'Popular' },
        { label: 'Tag 3', value: 'tag3', badge: 'Trending' },
        { label: 'Tag 4', value: 'tag4', badge: 'Featured' },
        { label: 'Tag 5', value: 'tag5', badge: 'Hot' }
      ],
      groups: [],
      disabled: false,
      loading: false,
      multiSelect: true,
      showGroups: false,
      size: 'medium',
      theme: 'light',
      color: 'success',
      label: 'Multi-Select Tags',
      helperText: 'Select multiple tags',
      errorText: '',
      placeholder: 'Select tags',
      emptyText: 'No tags available',
      emptyDescription: 'Try adjusting your search or filters',
      emptyIcon: '🏷️',
      compact: false,
      spacious: false,
      animated: true,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Multi-select listbox with badges',
      value: null,
      values: ['tag2', 'tag4']
    }
  ];

  // Grouped examples
  groupedExamples: ListboxVariant[] = [
    {
      options: [],
      groups: [
        {
          label: 'Fruits',
          options: [
            { label: 'Apple', value: 'apple', icon: '🍎' },
            { label: 'Banana', value: 'banana', icon: '🍌' },
            { label: 'Cherry', value: 'cherry', icon: '🍒' }
          ]
        },
        {
          label: 'Vegetables',
          options: [
            { label: 'Carrot', value: 'carrot', icon: '🥕' },
            { label: 'Broccoli', value: 'broccoli', icon: '🥦' },
            { label: 'Spinach', value: 'spinach', icon: '🥬' }
          ]
        },
        {
          label: 'Grains',
          options: [
            { label: 'Rice', value: 'rice', icon: '🍚' },
            { label: 'Wheat', value: 'wheat', icon: '🌾' },
            { label: 'Oats', value: 'oats', icon: '🌾' }
          ]
        }
      ],
      disabled: false,
      loading: false,
      multiSelect: false,
      showGroups: true,
      size: 'medium',
      theme: 'light',
      color: 'default',
      label: 'Grouped Options',
      helperText: 'Options organized by categories',
      errorText: '',
      placeholder: 'Select a food item',
      emptyText: 'No food items available',
      emptyDescription: 'Try adjusting your search or filters',
      emptyIcon: '🍎',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      maxHeight: '',
      description: 'Listbox with grouped options',
      value: 'apple',
      values: []
    }
  ];

  // Real-world examples
  countrySelector: ListboxVariant = {
    options: [
      { label: 'United States', value: 'us', icon: '🇺🇸' },
      { label: 'Canada', value: 'ca', icon: '🇨🇦' },
      { label: 'United Kingdom', value: 'uk', icon: '🇬🇧' },
      { label: 'Germany', value: 'de', icon: '🇩🇪' },
      { label: 'France', value: 'fr', icon: '🇫🇷' },
      { label: 'Japan', value: 'jp', icon: '🇯🇵' },
      { label: 'Australia', value: 'au', icon: '🇦🇺' },
      { label: 'Brazil', value: 'br', icon: '🇧🇷' }
    ],
    groups: [],
    disabled: false,
    loading: false,
    multiSelect: false,
    showGroups: false,
    size: 'medium',
    theme: 'light',
    color: 'primary',
    label: 'Country',
    helperText: 'Select your country',
    errorText: '',
    placeholder: 'Select country',
    emptyText: 'No countries available',
    emptyDescription: 'Try adjusting your search or filters',
    emptyIcon: '🌍',
    compact: false,
    spacious: false,
    animated: true,
    bounce: false,
    glow: false,
    maxHeight: '10rem',
    description: 'Country selection for user registration',
    value: 'us',
    values: []
  };

  skillSelector: ListboxVariant = {
    options: [
      { label: 'JavaScript', value: 'js', description: 'Programming language', badge: 'Popular' },
      { label: 'TypeScript', value: 'ts', description: 'Typed JavaScript', badge: 'Modern' },
      { label: 'Angular', value: 'angular', description: 'Frontend framework', badge: 'Enterprise' },
      { label: 'React', value: 'react', description: 'UI library', badge: 'Popular' },
      { label: 'Vue.js', value: 'vue', description: 'Progressive framework', badge: 'Growing' },
      { label: 'Node.js', value: 'node', description: 'Backend runtime', badge: 'Server' },
      { label: 'Python', value: 'python', description: 'General purpose language', badge: 'Versatile' },
      { label: 'Java', value: 'java', description: 'Enterprise language', badge: 'Enterprise' }
    ],
    groups: [],
    disabled: false,
    loading: false,
    multiSelect: true,
    showGroups: false,
    size: 'medium',
    theme: 'light',
    color: 'success',
    label: 'Skills',
    helperText: 'Select your technical skills',
    errorText: '',
    placeholder: 'Select skills',
    emptyText: 'No skills available',
    emptyDescription: 'Try adjusting your search or filters',
    emptyIcon: '💻',
    compact: false,
    spacious: false,
    animated: false,
    bounce: false,
    glow: false,
    maxHeight: '12rem',
    description: 'Multi-select skill selector for developer profiles',
    value: null,
    values: ['js', 'angular', 'node']
  };

  onListboxChange(value: unknown, listbox: ListboxVariant): void {
    if (listbox.multiSelect) {
      listbox.values = Array.isArray(value) ? value : [];
    } else {
      listbox.value = value;
    }
    console.log(`${listbox.label} changed to:`, value);
  }

  onListboxModelChange(value: unknown, listbox: ListboxVariant): void {
    if (listbox.multiSelect) {
      listbox.values = Array.isArray(value) ? value : [];
    } else {
      listbox.value = value;
    }
    console.log(`${listbox.label} model changed to:`, value);
  }

  onListboxSelect(option: ListboxOption, listbox: ListboxVariant): void {
    console.log(`${listbox.label} selected:`, option);
  }

  onListboxFocus(index: number, listbox: ListboxVariant): void {
    console.log(`${listbox.label} focused on index:`, index);
  }

  onListboxBlur(listbox: ListboxVariant): void {
    console.log(`${listbox.label} blurred`);
  }

  getListboxStatus(listbox: ListboxVariant): string {
    if (listbox.disabled) return 'Disabled';
    if (listbox.loading) return 'Loading';
    return 'Interactive';
  }

  getListboxStatusColor(listbox: ListboxVariant): string {
    if (listbox.disabled) return 'text-gray-500';
    if (listbox.loading) return 'text-yellow-600';
    return 'text-green-600';
  }

  getSelectedText(listbox: ListboxVariant): string {
    if (listbox.multiSelect) {
      const selected = listbox.values;
      if (selected.length === 0) return 'No selection';
      if (selected.length === 1) {
        const option = listbox.options.find(opt => opt.value === selected[0]);
        return option ? option.label : 'Unknown';
      }
      return `${selected.length} items selected`;
    } else {
      const option = listbox.options.find(opt => opt.value === listbox.value);
      return option ? option.label : 'No selection';
    }
  }
}