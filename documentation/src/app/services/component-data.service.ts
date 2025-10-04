import { Injectable, signal } from '@angular/core';
import { ComponentModel } from '../models/component.model';

@Injectable({
  providedIn: 'root'
})
export class ComponentDataService {
  private readonly _components = signal<ComponentModel[]>([
    {
      id: 'button',
      name: 'Button',
      category: 'Foundation',
      description: 'Interactive button component with multiple variants and sizes',
        examples: [
          {
            name: 'Primary Button',
            code: '<sui-button variant="primary">Click me</sui-button>',
            description: 'Default primary button'
          },
          {
            name: 'Secondary Button',
            code: '<sui-button variant="secondary">Click me</sui-button>',
            description: 'Secondary button variant'
          },
          {
            name: 'Outline Button',
            code: '<sui-button variant="outline">Click me</sui-button>',
            description: 'Button with outline style'
          },
          {
            name: 'Disabled Button',
            code: '<sui-button [disabled]="true">Disabled</sui-button>',
            description: 'Disabled button state'
          }
        ],
      props: [
        {
          name: 'variant',
          type: 'string',
          default: 'primary',
          description: 'Button variant (primary, secondary, outline, ghost, danger)',
          required: false
        },
        {
          name: 'size',
          type: 'string',
          default: 'md',
          description: 'Button size (sm, md, lg)',
          required: false
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          description: 'Whether the button is disabled',
          required: false
        },
        {
          name: 'loading',
          type: 'boolean',
          default: 'false',
          description: 'Whether the button is in loading state',
          required: false
        },
        {
          name: 'type',
          type: 'string',
          default: 'button',
          description: 'Button type (button, submit, reset)',
          required: false
        },
        {
          name: 'fullWidth',
          type: 'boolean',
          default: 'false',
          description: 'Whether the button spans full width',
          required: false
        },
        {
          name: 'icon',
          type: 'string',
          default: 'null',
          description: 'Icon name to display in the button',
          required: false
        },
        {
          name: 'iconPosition',
          type: 'string',
          default: 'left',
          description: 'Position of the icon (left, right)',
          required: false
        }
      ],
      usage: 'Use buttons for user interactions like submitting forms, navigating, or triggering actions.',
      tags: ['interactive', 'form', 'navigation']
    },
    // Foundation Components
    {
      id: 'card',
      name: 'Card',
      category: 'Foundation',
      description: 'Container component for displaying content in a structured format',
      examples: [
        {
          name: 'Basic Card',
          code: '<sui-card header="Card Title" subheader="Card subtitle">\n  <p>This is the card content. It can contain any HTML elements.</p>\n</sui-card>',
          description: 'Basic card with header and content'
        },
        {
          name: 'Card Variants',
          code: '<div class="grid grid-cols-1 md:grid-cols-3 gap-4">\n  <sui-card variant="default" header="Default">Default card</sui-card>\n  <sui-card variant="outlined" header="Outlined">Outlined card</sui-card>\n  <sui-card variant="elevated" header="Elevated">Elevated card</sui-card>\n</div>',
          description: 'Different card variants'
        },
        {
          name: 'Card Sizes',
          code: '<div class="grid grid-cols-1 md:grid-cols-3 gap-4">\n  <sui-card size="sm" header="Small Card">Small card content</sui-card>\n  <sui-card size="md" header="Medium Card">Medium card content</sui-card>\n  <sui-card size="lg" header="Large Card">Large card content</sui-card>\n</div>',
          description: 'Different card sizes displayed side by side'
        },
        {
          name: 'Clickable Card',
          code: '<sui-card \n  header="Clickable Card" \n  subheader="Click anywhere on the card"\n  [clickable]="true"\n  [hoverable]="true"\n  (click)="onCardClick($event)">\n  <p>This card is clickable and has hover effects.</p>\n</sui-card>',
          description: 'Interactive card with click and hover effects'
        },
        {
          name: 'Card with Footer',
          code: '<sui-card \n  header="Card with Footer" \n  [showFooter]="true">\n  <p>Card content goes here.</p>\n  <div slot="footer">\n    <sui-button variant="primary">Action</sui-button>\n  </div>\n</sui-card>',
          description: 'Card with footer section'
        },
        {
          name: 'Loading Card',
          code: '<sui-card \n  header="Loading Card" \n  [loading]="true">\n  <p>This card is in a loading state.</p>\n</sui-card>',
          description: 'Card with loading state'
        },
        {
          name: 'Disabled Card',
          code: '<sui-card \n  header="Disabled Card" \n  [disabled]="true"\n  [clickable]="true">\n  <p>This card is disabled and cannot be interacted with.</p>\n</sui-card>',
          description: 'Disabled card state'
        }
      ],
      props: [
        {
          name: 'variant',
          type: 'string',
          default: 'default',
          description: 'Card variant (default, outlined, elevated, filled)',
          required: false
        },
        {
          name: 'size',
          type: 'string',
          default: 'md',
          description: 'Card size (sm, md, lg)',
          required: false
        },
        {
          name: 'header',
          type: 'string',
          default: 'null',
          description: 'Card header text',
          required: false
        },
        {
          name: 'subheader',
          type: 'string',
          default: 'null',
          description: 'Card subheader text',
          required: false
        },
        {
          name: 'clickable',
          type: 'boolean',
          default: 'false',
          description: 'Whether the card is clickable',
          required: false
        },
        {
          name: 'hoverable',
          type: 'boolean',
          default: 'false',
          description: 'Whether the card has hover effects',
          required: false
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          description: 'Whether the card is disabled',
          required: false
        },
        {
          name: 'loading',
          type: 'boolean',
          default: 'false',
          description: 'Whether the card is in loading state',
          required: false
        },
        {
          name: 'showHeader',
          type: 'boolean',
          default: 'true',
          description: 'Whether to show the header',
          required: false
        },
        {
          name: 'showFooter',
          type: 'boolean',
          default: 'false',
          description: 'Whether to show the footer',
          required: false
        },
        {
          name: 'borderless',
          type: 'boolean',
          default: 'false',
          description: 'Whether to remove card borders',
          required: false
        }
      ],
      usage: 'Use cards to display related content in a structured format. Cards are versatile containers that can hold various types of content and support different interaction states.',
      tags: ['container', 'layout', 'content']
    },
    {
      id: 'input',
      name: 'Input',
      category: 'Foundation',
      description: 'Text input component for user data entry with comprehensive features',
      examples: [
        {
          name: 'Basic Input',
          code: '<sui-input-text placeholder="Enter your name" label="Name"></sui-input-text>',
          description: 'Basic text input with label'
        },
        {
          name: 'Input Variants',
          code: '<div class="space-y-4 w-full max-w-md">\n  <sui-input-text variant="default" placeholder="Default input" label="Default"></sui-input-text>\n  <sui-input-text variant="filled" placeholder="Filled input" label="Filled"></sui-input-text>\n  <sui-input-text variant="outlined" placeholder="Outlined input" label="Outlined"></sui-input-text>\n</div>',
          description: 'Different input variants'
        },
        {
          name: 'Input Sizes',
          code: '<div class="space-y-4 w-full max-w-md">\n  <sui-input-text size="sm" placeholder="Small input" label="Small"></sui-input-text>\n  <sui-input-text size="md" placeholder="Medium input" label="Medium"></sui-input-text>\n  <sui-input-text size="lg" placeholder="Large input" label="Large"></sui-input-text>\n</div>',
          description: 'Different input sizes'
        },
        {
          name: 'Input Types',
          code: '<div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">\n  <sui-input-text type="text" placeholder="Enter text" label="Text"></sui-input-text>\n  <sui-input-text type="email" placeholder="Enter email" label="Email"></sui-input-text>\n  <sui-input-text type="password" placeholder="Enter password" label="Password" [showPasswordToggle]="true"></sui-input-text>\n  <sui-input-text type="tel" placeholder="Enter phone" label="Phone"></sui-input-text>\n</div>',
          description: 'Different input types including password with toggle'
        },
        {
          name: 'Input States',
          code: '<div class="space-y-4 w-full max-w-md">\n  <sui-input-text placeholder="Normal input" label="Normal"></sui-input-text>\n  <sui-input-text placeholder="Disabled input" label="Disabled" [disabled]="true"></sui-input-text>\n  <sui-input-text placeholder="Readonly input" label="Readonly" [readonly]="true" value="Read-only value"></sui-input-text>\n  <sui-input-text placeholder="Required input" label="Required" [required]="true"></sui-input-text>\n</div>',
          description: 'Different input states'
        },
        {
          name: 'Validation States',
          code: '<div class="space-y-4 w-full max-w-md">\n  <sui-input-text placeholder="Valid input" label="Valid" validationState="valid" value="Valid value"></sui-input-text>\n  <sui-input-text placeholder="Invalid input" label="Invalid" validationState="invalid" errorMessage="This field is required"></sui-input-text>\n  <sui-input-text placeholder="Input with helper" label="With Helper" helperText="This is helpful information"></sui-input-text>\n</div>',
          description: 'Input validation and helper states'
        },
        {
          name: 'Input with Prefix/Suffix',
          code: '<div class="space-y-4 w-full max-w-md">\n  <sui-input-text placeholder="Enter amount" label="Price" prefix="$"></sui-input-text>\n  <sui-input-text placeholder="Enter domain" label="Website" suffix=".com"></sui-input-text>\n  <sui-input-text placeholder="Search..." label="Search" prefix="🔍" [clearable]="true"></sui-input-text>\n</div>',
          description: 'Input with prefixes, suffixes, and clear button'
        }
      ],
      props: [
        {
          name: 'placeholder',
          type: 'string',
          default: 'null',
          description: 'Input placeholder text',
          required: false
        },
        {
          name: 'label',
          type: 'string',
          default: 'null',
          description: 'Input label text',
          required: false
        },
        {
          name: 'variant',
          type: 'string',
          default: 'default',
          description: 'Input variant (default, filled, outlined)',
          required: false
        },
        {
          name: 'size',
          type: 'string',
          default: 'md',
          description: 'Input size (sm, md, lg)',
          required: false
        },
        {
          name: 'type',
          type: 'string',
          default: 'text',
          description: 'Input type (text, email, password, tel, url)',
          required: false
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          description: 'Whether the input is disabled',
          required: false
        },
        {
          name: 'readonly',
          type: 'boolean',
          default: 'false',
          description: 'Whether the input is readonly',
          required: false
        },
        {
          name: 'required',
          type: 'boolean',
          default: 'false',
          description: 'Whether the input is required',
          required: false
        },
        {
          name: 'validationState',
          type: 'string',
          default: 'none',
          description: 'Validation state (none, valid, invalid)',
          required: false
        },
        {
          name: 'errorMessage',
          type: 'string',
          default: 'null',
          description: 'Error message to display',
          required: false
        },
        {
          name: 'helperText',
          type: 'string',
          default: 'null',
          description: 'Helper text to display',
          required: false
        },
        {
          name: 'prefix',
          type: 'string',
          default: 'null',
          description: 'Prefix text or icon',
          required: false
        },
        {
          name: 'suffix',
          type: 'string',
          default: 'null',
          description: 'Suffix text or icon',
          required: false
        },
        {
          name: 'clearable',
          type: 'boolean',
          default: 'false',
          description: 'Whether to show clear button',
          required: false
        },
        {
          name: 'showPasswordToggle',
          type: 'boolean',
          default: 'false',
          description: 'Whether to show password visibility toggle',
          required: false
        },
        {
          name: 'maxlength',
          type: 'number',
          default: 'null',
          description: 'Maximum character length',
          required: false
        },
        {
          name: 'autocomplete',
          type: 'string',
          default: 'null',
          description: 'Autocomplete attribute',
          required: false
        }
      ],
      usage: 'Use inputs for text data entry in forms. The input component supports various types, validation states, and interactive features like password toggles and clear buttons.',
      tags: ['form', 'input', 'validation']
    },
    // Form Components
    {
      id: 'auto-complete',
      name: 'Auto Complete',
      category: 'Form',
      description: 'Input component with autocomplete functionality',
      examples: [
        {
          name: 'Basic Auto Complete',
          code: '<sui-auto-complete [suggestions]="suggestions"></sui-auto-complete>',
          description: 'Basic autocomplete input'
        }
      ],
      props: [
        {
          name: 'suggestions',
          type: 'string[]',
          default: '[]',
          description: 'Array of suggestion strings',
          required: true
        }
      ],
      usage: 'Use autocomplete for inputs with predefined suggestions.',
      tags: ['form', 'input', 'autocomplete']
    },
    // Data Components
    {
      id: 'table',
      name: 'Table',
      category: 'Data',
      description: 'Data table component for displaying tabular data',
      examples: [
        {
          name: 'Basic Table',
          code: '<sui-table [value]="data"></sui-table>',
          description: 'Basic data table'
        }
      ],
      props: [
        {
          name: 'value',
          type: 'any[]',
          default: '[]',
          description: 'Array of data objects',
          required: true
        }
      ],
      usage: 'Use tables to display structured data in rows and columns.',
      tags: ['data', 'table', 'grid']
    },
    // Layout Components
    {
      id: 'panel',
      name: 'Panel',
      category: 'Layout',
      description: 'Panel component for grouping content',
      examples: [
        {
          name: 'Basic Panel',
          code: '<sui-panel header="Panel Title">Panel content</sui-panel>',
          description: 'Basic panel with header'
        }
      ],
      props: [
        {
          name: 'header',
          type: 'string',
          default: 'null',
          description: 'Panel header text',
          required: false
        }
      ],
      usage: 'Use panels to group related content and actions.',
      tags: ['layout', 'container']
    },
    // Navigation Components
    {
      id: 'menu',
      name: 'Menu',
      category: 'Navigation',
      description: 'Navigation menu component',
      examples: [
        {
          name: 'Basic Menu',
          code: '<sui-menu [model]="menuItems"></sui-menu>',
          description: 'Basic navigation menu'
        }
      ],
      props: [
        {
          name: 'model',
          type: 'MenuItem[]',
          default: '[]',
          description: 'Array of menu items',
          required: true
        }
      ],
      usage: 'Use menus for navigation and application structure.',
      tags: ['navigation', 'menu']
    },
    // Media Components
    {
      id: 'carousel',
      name: 'Carousel',
      category: 'Media',
      description: 'Carousel component for displaying images or content',
      examples: [
        {
          name: 'Basic Carousel',
          code: '<sui-carousel [value]="images"></sui-carousel>',
          description: 'Basic image carousel'
        }
      ],
      props: [
        {
          name: 'value',
          type: 'any[]',
          default: '[]',
          description: 'Array of carousel items',
          required: true
        }
      ],
      usage: 'Use carousels to display multiple images or content in a slideshow.',
      tags: ['media', 'carousel', 'slideshow']
    },
    // Messages Components
    {
      id: 'toast',
      name: 'Toast',
      category: 'Messages',
      description: 'Toast notification component',
      examples: [
        {
          name: 'Success Toast',
          code: '<sui-toast severity="success" summary="Success" detail="Operation completed"></sui-toast>',
          description: 'Success notification toast'
        }
      ],
      props: [
        {
          name: 'severity',
          type: 'string',
          default: 'info',
          description: 'Toast severity level',
          required: false
        }
      ],
      usage: 'Use toasts to display temporary messages to users.',
      tags: ['notification', 'message', 'toast']
    },
    // Overlay Components
    {
      id: 'dialog',
      name: 'Dialog',
      category: 'Overlay',
      description: 'Modal dialog component',
      examples: [
        {
          name: 'Basic Dialog',
          code: '<sui-dialog header="Dialog Title" [visible]="showDialog">Dialog content</sui-dialog>',
          description: 'Basic modal dialog'
        }
      ],
      props: [
        {
          name: 'visible',
          type: 'boolean',
          default: 'false',
          description: 'Whether dialog is visible',
          required: true
        }
      ],
      usage: 'Use dialogs to display modal content and forms.',
      tags: ['modal', 'dialog', 'overlay']
    },
    // Progress Components
    {
      id: 'progress-bar',
      name: 'Progress Bar',
      category: 'Progress',
      description: 'Progress bar component for showing completion status',
      examples: [
        {
          name: 'Basic Progress Bar',
          code: '<sui-progress-bar [value]="50"></sui-progress-bar>',
          description: 'Basic progress bar at 50%'
        }
      ],
      props: [
        {
          name: 'value',
          type: 'number',
          default: '0',
          description: 'Progress value (0-100)',
          required: true
        }
      ],
      usage: 'Use progress bars to show completion status of operations.',
      tags: ['progress', 'loading', 'status']
    },
    // Additional Foundation Components
    {
      id: 'accordion',
      name: 'Accordion',
      category: 'Foundation',
      description: 'Collapsible content panels',
      examples: [],
      props: [],
      usage: 'Use accordions to organize content in collapsible sections.',
      tags: ['collapsible', 'content']
    },
    {
      id: 'avatar',
      name: 'Avatar',
      category: 'Foundation',
      description: 'User profile image component',
      examples: [],
      props: [],
      usage: 'Use avatars to display user profile images.',
      tags: ['profile', 'image']
    },
    {
      id: 'badge',
      name: 'Badge',
      category: 'Foundation',
      description: 'Small status indicator',
      examples: [],
      props: [],
      usage: 'Use badges to show status or count information.',
      tags: ['status', 'indicator']
    },
    {
      id: 'breadcrumb',
      name: 'Breadcrumb',
      category: 'Foundation',
      description: 'Navigation breadcrumb component',
      examples: [],
      props: [],
      usage: 'Use breadcrumbs to show navigation hierarchy.',
      tags: ['navigation', 'hierarchy']
    },
    {
      id: 'checkbox',
      name: 'Checkbox',
      category: 'Foundation',
      description: 'Checkbox input component',
      examples: [],
      props: [],
      usage: 'Use checkboxes for multiple selection in forms.',
      tags: ['form', 'input']
    },
    {
      id: 'color-picker',
      name: 'Color Picker',
      category: 'Foundation',
      description: 'Color selection component',
      examples: [],
      props: [],
      usage: 'Use color pickers for color selection in forms.',
      tags: ['form', 'color']
    },
    {
      id: 'date-picker',
      name: 'Date Picker',
      category: 'Foundation',
      description: 'Date selection component',
      examples: [],
      props: [],
      usage: 'Use date pickers for date selection in forms.',
      tags: ['form', 'date']
    },
    {
      id: 'editor',
      name: 'Editor',
      category: 'Foundation',
      description: 'Rich text editor component',
      examples: [],
      props: [],
      usage: 'Use editors for rich text input.',
      tags: ['form', 'editor']
    },
    {
      id: 'knob',
      name: 'Knob',
      category: 'Foundation',
      description: 'Circular input component',
      examples: [],
      props: [],
      usage: 'Use knobs for circular value input.',
      tags: ['form', 'input']
    },
    {
      id: 'radio-button',
      name: 'Radio Button',
      category: 'Foundation',
      description: 'Radio button input component',
      examples: [],
      props: [],
      usage: 'Use radio buttons for single selection in forms.',
      tags: ['form', 'input']
    },
    {
      id: 'rating',
      name: 'Rating',
      category: 'Foundation',
      description: 'Star rating component',
      examples: [],
      props: [],
      usage: 'Use ratings for user feedback and reviews.',
      tags: ['form', 'rating']
    },
    {
      id: 'select',
      name: 'Select',
      category: 'Foundation',
      description: 'Dropdown selection component',
      examples: [],
      props: [],
      usage: 'Use selects for single selection from options.',
      tags: ['form', 'input']
    },
    {
      id: 'select-button',
      name: 'Select Button',
      category: 'Foundation',
      description: 'Button group selection component',
      examples: [],
      props: [],
      usage: 'Use select buttons for multiple choice selection.',
      tags: ['form', 'input']
    },
    {
      id: 'slider',
      name: 'Slider',
      category: 'Foundation',
      description: 'Range slider component',
      examples: [],
      props: [],
      usage: 'Use sliders for range value selection.',
      tags: ['form', 'input']
    },
    {
      id: 'tabs',
      name: 'Tabs',
      category: 'Foundation',
      description: 'Tabbed content component',
      examples: [],
      props: [],
      usage: 'Use tabs to organize content in panels.',
      tags: ['navigation', 'content']
    },
    {
      id: 'toggle-switch',
      name: 'Toggle Switch',
      category: 'Foundation',
      description: 'Toggle switch component',
      examples: [],
      props: [],
      usage: 'Use toggle switches for on/off states.',
      tags: ['form', 'input']
    },
    // Additional Form Components
    {
      id: 'auto-focus',
      name: 'Auto Focus',
      category: 'Form',
      description: 'Automatic focus management',
      examples: [],
      props: [],
      usage: 'Use auto focus for automatic focus management.',
      tags: ['form', 'focus']
    },
    {
      id: 'cascade-select',
      name: 'Cascade Select',
      category: 'Form',
      description: 'Hierarchical selection component',
      examples: [],
      props: [],
      usage: 'Use cascade selects for hierarchical data selection.',
      tags: ['form', 'input']
    },
    {
      id: 'chip',
      name: 'Chip',
      category: 'Form',
      description: 'Small input chip component',
      examples: [],
      props: [],
      usage: 'Use chips for tag-like input elements.',
      tags: ['form', 'input']
    },
    {
      id: 'float-label',
      name: 'Float Label',
      category: 'Form',
      description: 'Floating label input component',
      examples: [],
      props: [],
      usage: 'Use float labels for modern input styling.',
      tags: ['form', 'input']
    },
    {
      id: 'icon-field',
      name: 'Icon Field',
      category: 'Form',
      description: 'Input with icon component',
      examples: [],
      props: [],
      usage: 'Use icon fields for inputs with icons.',
      tags: ['form', 'input']
    },
    {
      id: 'ift-label',
      name: 'IFT Label',
      category: 'Form',
      description: 'Input field with label component',
      examples: [],
      props: [],
      usage: 'Use IFT labels for labeled input fields.',
      tags: ['form', 'input']
    },
    {
      id: 'ifta-label',
      name: 'IFTA Label',
      category: 'Form',
      description: 'Input field with text area label component',
      examples: [],
      props: [],
      usage: 'Use IFTA labels for labeled text areas.',
      tags: ['form', 'input']
    },
    {
      id: 'input-group',
      name: 'Input Group',
      category: 'Form',
      description: 'Grouped input component',
      examples: [],
      props: [],
      usage: 'Use input groups for related input fields.',
      tags: ['form', 'input']
    },
    {
      id: 'input-mask',
      name: 'Input Mask',
      category: 'Form',
      description: 'Masked input component',
      examples: [],
      props: [],
      usage: 'Use input masks for formatted input.',
      tags: ['form', 'input']
    },
    {
      id: 'input-number',
      name: 'Input Number',
      category: 'Form',
      description: 'Numeric input component',
      examples: [],
      props: [],
      usage: 'Use input numbers for numeric input.',
      tags: ['form', 'input']
    },
    {
      id: 'input-otp',
      name: 'Input OTP',
      category: 'Form',
      description: 'One-time password input component',
      examples: [],
      props: [],
      usage: 'Use OTP inputs for verification codes.',
      tags: ['form', 'input']
    },
    {
      id: 'key-filter',
      name: 'Key Filter',
      category: 'Form',
      description: 'Keyboard input filter component',
      examples: [],
      props: [],
      usage: 'Use key filters to restrict input characters.',
      tags: ['form', 'input']
    },
    {
      id: 'listbox',
      name: 'Listbox',
      category: 'Form',
      description: 'List selection component',
      examples: [],
      props: [],
      usage: 'Use listboxes for list-based selection.',
      tags: ['form', 'input']
    },
    {
      id: 'password',
      name: 'Password',
      category: 'Form',
      description: 'Password input component',
      examples: [],
      props: [],
      usage: 'Use password inputs for secure text entry.',
      tags: ['form', 'input']
    },
    {
      id: 'textarea',
      name: 'Textarea',
      category: 'Form',
      description: 'Multi-line text input component',
      examples: [],
      props: [],
      usage: 'Use textareas for multi-line text input.',
      tags: ['form', 'input']
    },
    {
      id: 'toggle-button',
      name: 'Toggle Button',
      category: 'Form',
      description: 'Toggle button component',
      examples: [],
      props: [],
      usage: 'Use toggle buttons for on/off states.',
      tags: ['form', 'input']
    },
    {
      id: 'tree-select',
      name: 'Tree Select',
      category: 'Form',
      description: 'Tree-based selection component',
      examples: [],
      props: [],
      usage: 'Use tree selects for hierarchical selection.',
      tags: ['form', 'input']
    },
    // Additional Data Components
    {
      id: 'data-view',
      name: 'Data View',
      category: 'Data',
      description: 'Data display component',
      examples: [],
      props: [],
      usage: 'Use data views for displaying data collections.',
      tags: ['data', 'display']
    },
    {
      id: 'order-list',
      name: 'Order List',
      category: 'Data',
      description: 'Reorderable list component',
      examples: [],
      props: [],
      usage: 'Use order lists for reorderable items.',
      tags: ['data', 'list']
    },
    {
      id: 'paginator',
      name: 'Paginator',
      category: 'Data',
      description: 'Pagination component',
      examples: [],
      props: [],
      usage: 'Use paginators for data pagination.',
      tags: ['data', 'navigation']
    },
    {
      id: 'pick-list',
      name: 'Pick List',
      category: 'Data',
      description: 'Dual list selection component',
      examples: [],
      props: [],
      usage: 'Use pick lists for dual list selection.',
      tags: ['data', 'selection']
    },
    {
      id: 'tree',
      name: 'Tree',
      category: 'Data',
      description: 'Tree structure component',
      examples: [],
      props: [],
      usage: 'Use trees for hierarchical data display.',
      tags: ['data', 'hierarchy']
    },
    {
      id: 'tree-table',
      name: 'Tree Table',
      category: 'Data',
      description: 'Tree table component',
      examples: [],
      props: [],
      usage: 'Use tree tables for hierarchical tabular data.',
      tags: ['data', 'table']
    },
    {
      id: 'timeline',
      name: 'Timeline',
      category: 'Data',
      description: 'Timeline component',
      examples: [],
      props: [],
      usage: 'Use timelines for chronological data display.',
      tags: ['data', 'timeline']
    },
    {
      id: 'upload',
      name: 'Upload',
      category: 'Data',
      description: 'File upload component',
      examples: [],
      props: [],
      usage: 'Use uploads for file upload functionality.',
      tags: ['data', 'upload']
    },
    {
      id: 'meter-group',
      name: 'Meter Group',
      category: 'Data',
      description: 'Meter group component',
      examples: [],
      props: [],
      usage: 'Use meter groups for grouped meter displays.',
      tags: ['data', 'meter']
    },
    {
      id: 'org-chart',
      name: 'Org Chart',
      category: 'Data',
      description: 'Organization chart component',
      examples: [],
      props: [],
      usage: 'Use org charts for organizational structure display.',
      tags: ['data', 'chart']
    },
    {
      id: 'virtual-scroller',
      name: 'Virtual Scroller',
      category: 'Data',
      description: 'Virtual scrolling component',
      examples: [],
      props: [],
      usage: 'Use virtual scrollers for large data sets.',
      tags: ['data', 'performance']
    },
    // Additional Layout Components
    {
      id: 'divider',
      name: 'Divider',
      category: 'Layout',
      description: 'Content divider component',
      examples: [],
      props: [],
      usage: 'Use dividers to separate content sections.',
      tags: ['layout', 'separator']
    },
    {
      id: 'fieldset',
      name: 'Fieldset',
      category: 'Layout',
      description: 'Form fieldset component',
      examples: [],
      props: [],
      usage: 'Use fieldsets to group form fields.',
      tags: ['layout', 'form']
    },
    {
      id: 'fluid',
      name: 'Fluid',
      category: 'Layout',
      description: 'Fluid layout component',
      examples: [],
      props: [],
      usage: 'Use fluid layouts for responsive design.',
      tags: ['layout', 'responsive']
    },
    {
      id: 'splitter',
      name: 'Splitter',
      category: 'Layout',
      description: 'Resizable splitter component',
      examples: [],
      props: [],
      usage: 'Use splitters for resizable panels.',
      tags: ['layout', 'resizable']
    },
    {
      id: 'stepper',
      name: 'Stepper',
      category: 'Layout',
      description: 'Step navigation component',
      examples: [],
      props: [],
      usage: 'Use steppers for step-by-step processes.',
      tags: ['layout', 'navigation']
    },
    {
      id: 'toolbar',
      name: 'Toolbar',
      category: 'Layout',
      description: 'Toolbar component',
      examples: [],
      props: [],
      usage: 'Use toolbars for action buttons and controls.',
      tags: ['layout', 'actions']
    },
    // Additional Navigation Components
    {
      id: 'context-menu',
      name: 'Context Menu',
      category: 'Navigation',
      description: 'Right-click context menu component',
      examples: [],
      props: [],
      usage: 'Use context menus for right-click actions.',
      tags: ['navigation', 'menu']
    },
    {
      id: 'dock',
      name: 'Dock',
      category: 'Navigation',
      description: 'Dock navigation component',
      examples: [],
      props: [],
      usage: 'Use docks for application navigation.',
      tags: ['navigation', 'dock']
    },
    {
      id: 'menubar',
      name: 'Menubar',
      category: 'Navigation',
      description: 'Menu bar component',
      examples: [],
      props: [],
      usage: 'Use menubars for application menus.',
      tags: ['navigation', 'menu']
    },
    {
      id: 'mega-menu',
      name: 'Mega Menu',
      category: 'Navigation',
      description: 'Large menu component',
      examples: [],
      props: [],
      usage: 'Use mega menus for complex navigation.',
      tags: ['navigation', 'menu']
    },
    {
      id: 'panel-menu',
      name: 'Panel Menu',
      category: 'Navigation',
      description: 'Panel-based menu component',
      examples: [],
      props: [],
      usage: 'Use panel menus for sidebar navigation.',
      tags: ['navigation', 'menu']
    },
    {
      id: 'tiered-menu',
      name: 'Tiered Menu',
      category: 'Navigation',
      description: 'Multi-level menu component',
      examples: [],
      props: [],
      usage: 'Use tiered menus for hierarchical navigation.',
      tags: ['navigation', 'menu']
    },
    // Additional Media Components
    {
      id: 'galleria',
      name: 'Galleria',
      category: 'Media',
      description: 'Image gallery component',
      examples: [],
      props: [],
      usage: 'Use gallerias for image galleries.',
      tags: ['media', 'gallery']
    },
    {
      id: 'image',
      name: 'Image',
      category: 'Media',
      description: 'Image display component',
      examples: [],
      props: [],
      usage: 'Use images for displaying pictures.',
      tags: ['media', 'image']
    },
    {
      id: 'image-compare',
      name: 'Image Compare',
      category: 'Media',
      description: 'Image comparison component',
      examples: [],
      props: [],
      usage: 'Use image compare for before/after comparisons.',
      tags: ['media', 'compare']
    },
    // File Components
    {
      id: 'file-upload-advanced',
      name: 'File Upload Advanced',
      category: 'File',
      description: 'Advanced file upload component',
      examples: [],
      props: [],
      usage: 'Use advanced file uploads for complex file handling.',
      tags: ['file', 'upload']
    },
    // Additional Messages Components
    {
      id: 'confirm-dialog',
      name: 'Confirm Dialog',
      category: 'Messages',
      description: 'Confirmation dialog component',
      examples: [],
      props: [],
      usage: 'Use confirm dialogs for user confirmations.',
      tags: ['message', 'dialog']
    },
    {
      id: 'confirm-popup',
      name: 'Confirm Popup',
      category: 'Messages',
      description: 'Confirmation popup component',
      examples: [],
      props: [],
      usage: 'Use confirm popups for quick confirmations.',
      tags: ['message', 'popup']
    },
    {
      id: 'message',
      name: 'Message',
      category: 'Messages',
      description: 'Message display component',
      examples: [],
      props: [],
      usage: 'Use messages for user notifications.',
      tags: ['message', 'notification']
    },
    // Additional Overlay Components
    {
      id: 'block-ui',
      name: 'Block UI',
      category: 'Overlay',
      description: 'UI blocking component',
      examples: [],
      props: [],
      usage: 'Use block UI to prevent user interaction.',
      tags: ['overlay', 'block']
    },
    {
      id: 'captcha',
      name: 'Captcha',
      category: 'Overlay',
      description: 'Captcha verification component',
      examples: [],
      props: [],
      usage: 'Use captchas for bot verification.',
      tags: ['overlay', 'security']
    },
    {
      id: 'drawer',
      name: 'Drawer',
      category: 'Overlay',
      description: 'Sliding drawer component',
      examples: [],
      props: [],
      usage: 'Use drawers for sliding panels.',
      tags: ['overlay', 'drawer']
    },
    {
      id: 'dynamic-dialog',
      name: 'Dynamic Dialog',
      category: 'Overlay',
      description: 'Dynamic dialog component',
      examples: [],
      props: [],
      usage: 'Use dynamic dialogs for programmatic dialogs.',
      tags: ['overlay', 'dialog']
    },
    {
      id: 'overlay-panel',
      name: 'Overlay Panel',
      category: 'Overlay',
      description: 'Overlay panel component',
      examples: [],
      props: [],
      usage: 'Use overlay panels for contextual content.',
      tags: ['overlay', 'panel']
    },
    {
      id: 'popover',
      name: 'Popover',
      category: 'Overlay',
      description: 'Popover component',
      examples: [],
      props: [],
      usage: 'Use popovers for contextual information.',
      tags: ['overlay', 'popover']
    },
    {
      id: 'tooltip',
      name: 'Tooltip',
      category: 'Overlay',
      description: 'Tooltip component',
      examples: [],
      props: [],
      usage: 'Use tooltips for helpful hints.',
      tags: ['overlay', 'tooltip']
    },
    // Additional Progress Components
    {
      id: 'progress-spinner',
      name: 'Progress Spinner',
      category: 'Progress',
      description: 'Loading spinner component',
      examples: [],
      props: [],
      usage: 'Use progress spinners for loading states.',
      tags: ['progress', 'loading']
    },
    {
      id: 'skeleton',
      name: 'Skeleton',
      category: 'Progress',
      description: 'Content skeleton component',
      examples: [],
      props: [],
      usage: 'Use skeletons for loading placeholders.',
      tags: ['progress', 'loading']
    },
    // Utility Components
    {
      id: 'animate-on-scroll',
      name: 'Animate On Scroll',
      category: 'Utility',
      description: 'Scroll animation component',
      examples: [],
      props: [],
      usage: 'Use animate on scroll for scroll-triggered animations.',
      tags: ['utility', 'animation']
    },
    {
      id: 'focus-trap',
      name: 'Focus Trap',
      category: 'Utility',
      description: 'Focus management component',
      examples: [],
      props: [],
      usage: 'Use focus traps for modal focus management.',
      tags: ['utility', 'focus']
    },
    {
      id: 'inplace',
      name: 'Inplace',
      category: 'Utility',
      description: 'Inline editing component',
      examples: [],
      props: [],
      usage: 'Use inplace for inline editing.',
      tags: ['utility', 'editing']
    },
    {
      id: 'ripple',
      name: 'Ripple',
      category: 'Utility',
      description: 'Ripple effect component',
      examples: [],
      props: [],
      usage: 'Use ripples for touch feedback.',
      tags: ['utility', 'effect']
    },
    {
      id: 'scroll-panel',
      name: 'Scroll Panel',
      category: 'Utility',
      description: 'Custom scrollbar component',
      examples: [],
      props: [],
      usage: 'Use scroll panels for custom scrollbars.',
      tags: ['utility', 'scroll']
    },
    {
      id: 'scroll-top',
      name: 'Scroll Top',
      category: 'Utility',
      description: 'Scroll to top component',
      examples: [],
      props: [],
      usage: 'Use scroll top for quick page navigation.',
      tags: ['utility', 'navigation']
    },
    {
      id: 'speed-dial',
      name: 'Speed Dial',
      category: 'Utility',
      description: 'Floating action button component',
      examples: [],
      props: [],
      usage: 'Use speed dials for quick actions.',
      tags: ['utility', 'actions']
    },
    {
      id: 'split-button',
      name: 'Split Button',
      category: 'Utility',
      description: 'Split button component',
      examples: [],
      props: [],
      usage: 'Use split buttons for primary and secondary actions.',
      tags: ['utility', 'button']
    },
    {
      id: 'style-class',
      name: 'Style Class',
      category: 'Utility',
      description: 'CSS class management component',
      examples: [],
      props: [],
      usage: 'Use style class for dynamic CSS classes.',
      tags: ['utility', 'styling']
    },
    {
      id: 'terminal',
      name: 'Terminal',
      category: 'Utility',
      description: 'Terminal emulator component',
      examples: [],
      props: [],
      usage: 'Use terminals for command line interfaces.',
      tags: ['utility', 'terminal']
    }
  ]);

  private readonly _categories = signal<string[]>([
    'Foundation',
    'Form', 
    'Data',
    'Layout',
    'Navigation',
    'Media',
    'File',
    'Messages',
    'Overlay',
    'Progress',
    'Utility'
  ]);

  readonly components = this._components.asReadonly();
  readonly categories = this._categories.asReadonly();

  getComponent(id: string): ComponentModel | undefined {
    return this._components().find(component => component.id === id);
  }

  getComponentsByCategory(category: string): ComponentModel[] {
    return this._components().filter(component => component.category === category);
  }

  searchComponents(query: string): ComponentModel[] {
    const lowercaseQuery = query.toLowerCase();
    return this._components().filter(component => 
      component.name.toLowerCase().includes(lowercaseQuery) ||
      component.description.toLowerCase().includes(lowercaseQuery) ||
      component.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }

  getRelatedComponents(componentId: string): ComponentModel[] {
    const component = this.getComponent(componentId);
    if (!component) return [];
    
    return this._components().filter(c => 
      c.id !== componentId && 
      c.category === component.category
    ).slice(0, 3);
  }
}
