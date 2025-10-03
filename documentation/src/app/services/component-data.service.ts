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
          code: '<sui-card>Card content</sui-card>',
          description: 'Basic card component'
        }
      ],
      props: [
        {
          name: 'title',
          type: 'string',
          default: 'null',
          description: 'Card title',
          required: false
        }
      ],
      usage: 'Use cards to display related content in a structured format.',
      tags: ['container', 'layout']
    },
    {
      id: 'input',
      name: 'Input',
      category: 'Foundation',
      description: 'Text input component for user data entry',
      examples: [
        {
          name: 'Basic Input',
          code: '<sui-input placeholder="Enter text"></sui-input>',
          description: 'Basic text input'
        }
      ],
      props: [
        {
          name: 'placeholder',
          type: 'string',
          default: 'null',
          description: 'Input placeholder text',
          required: false
        }
      ],
      usage: 'Use inputs for text data entry in forms.',
      tags: ['form', 'input']
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
