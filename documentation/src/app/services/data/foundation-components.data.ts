import { ComponentModel } from '../../models/component.model';

export const foundationComponents: ComponentModel[] = [
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
  {
        id: 'accordion',
        name: 'Accordion',
        category: 'Foundation',
        description: 'Collapsible content panels',
        examples: [
          {
            name: 'Basic Accordion',
            description: 'Simple accordion with single expansion',
            code: `<sui-accordion [tabs]="basicTabs" [activeIndex]="basicActiveIndex" (onActiveIndexChange)="onBasicActiveIndexChange($event)">
  </sui-accordion>`,
            tsCode: `basicTabs = [
    {
      header: 'Getting Started',
      content: '<p>Learn the basics of our platform and how to get started with your first project.</p>'
    },
    {
      header: 'Configuration',
      content: '<p>Configure your settings and preferences to customize your experience.</p>'
    },
    {
      header: 'Privacy & Security',
      content: '<p>Control your privacy settings and security options.</p>'
    }
  ];
  
  basicActiveIndex: number = 0;
  
  onBasicActiveIndexChange(event: number | number[]): void {
    this.basicActiveIndex = event as number;
  }`
          },
          {
            name: 'Multiple Expansion',
            description: 'Accordion that allows multiple panels to be open simultaneously',
            code: `<sui-accordion [tabs]="multipleTabs" [multiple]="true" [activeIndex]="multipleActiveIndex" (onActiveIndexChange)="onMultipleActiveIndexChange($event)">
  </sui-accordion>`,
            tsCode: `multipleTabs = [
    {
      header: 'Account Settings',
      content: '<p>Manage your account preferences and personal information.</p>'
    },
    {
      header: 'Notifications',
      content: '<p>Configure how and when you receive notifications.</p>'
    },
    {
      header: 'Billing',
      content: '<p>View and manage your billing information and subscription.</p>'
    }
  ];
  
  multipleActiveIndex: number[] = [0, 2];
  
  onMultipleActiveIndexChange(event: number | number[]): void {
    this.multipleActiveIndex = event as number[];
  }`
          },
          {
            name: 'Bordered Variant',
            description: 'Accordion with bordered styling for better visual separation',
            code: `<sui-accordion [tabs]="borderedTabs" variant="bordered" [activeIndex]="borderedActiveIndex" (onActiveIndexChange)="onBorderedActiveIndexChange($event)">
  </sui-accordion>`,
            tsCode: `borderedTabs = [
    {
      header: 'Project Management',
      content: '<p>Organize and track your projects with our comprehensive project management tools.</p>'
    },
    {
      header: 'Team Collaboration',
      content: '<p>Work together with your team using our collaboration features.</p>'
    },
    {
      header: 'Analytics & Reporting',
      content: '<p>Gain insights into your performance with detailed analytics and customizable reports.</p>'
    }
  ];
  
  borderedActiveIndex: number = 1;
  
  onBorderedActiveIndexChange(event: number | number[]): void {
    this.borderedActiveIndex = event as number;
  }`
          }
        ],
        props: [
          {
            name: 'tabs',
            type: 'AccordionTab[]',
            required: true,
            default: '[]',
            description: 'Array of accordion tab objects with header and content'
          },
          {
            name: 'activeIndex',
            type: 'number | number[]',
            required: false,
            default: '0',
            description: 'Index of active tab(s). Use number for single expansion, number[] for multiple'
          },
          {
            name: 'multiple',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Allow multiple tabs to be open simultaneously'
          },
          {
            name: 'variant',
            type: 'string',
            required: false,
            default: '"default"',
            description: 'Visual variant: "default", "bordered", "minimal"'
          },
          {
            name: 'size',
            type: 'string',
            required: false,
            default: '"medium"',
            description: 'Size variant: "small", "medium", "large"'
          }
        ],
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
        description: 'Checkbox input component with multiple variants and states',
        examples: [
          {
            name: 'Basic Checkbox',
            description: 'Simple checkbox with basic functionality',
            code: `<sui-checkbox 
  [(ngModel)]="basicChecked" 
  label="Basic Checkbox">
</sui-checkbox>`,
            tsCode: `export class CheckboxComponent {
  basicChecked = false;
}`
          },
          {
            name: 'Size Variations',
            description: 'Checkboxes available in different sizes',
            code: `<sui-checkbox 
  [cssClass]="'checkbox-sm'"
  label="Small Checkbox">
</sui-checkbox>

<sui-checkbox 
  [cssClass]="'checkbox-lg'"
  label="Large Checkbox">
</sui-checkbox>`,
            tsCode: `export class CheckboxComponent {
  // Size variants: sm, normal, lg, xl
  // Use cssClass="checkbox-{size}" to apply sizes
}`
          },
          {
            name: 'Color Variants',
            description: 'Checkboxes available in different color themes',
            code: `<sui-checkbox 
  [cssClass]="'checkbox-primary'"
  label="Primary Checkbox">
</sui-checkbox>

<sui-checkbox 
  [cssClass]="'checkbox-success'"
  label="Success Checkbox">
</sui-checkbox>`,
            tsCode: `export class CheckboxComponent {
  // Color variants: primary, secondary, success, warning, danger
  // Use cssClass="checkbox-{color}" to apply colors
}`
          },
          {
            name: 'Form Integration',
            description: 'Checkboxes integrated within a form with validation',
            code: `<form (ngSubmit)="submitForm()">
  <sui-checkbox 
    [(ngModel)]="formData.acceptTerms" 
    label="I accept the terms and conditions"
    name="acceptTerms"
    required>
  </sui-checkbox>
  
  <sui-checkbox 
    [(ngModel)]="formData.subscribeNewsletter" 
    label="Subscribe to newsletter"
    name="subscribeNewsletter">
  </sui-checkbox>
</form>`,
            tsCode: `export class CheckboxComponent {
  formData = {
    acceptTerms: false,
    subscribeNewsletter: true
  };
  
  submitForm(): void {
    console.log('Form submitted:', this.formData);
  }
}`
          },
          {
            name: 'Todo List Example',
            description: 'Interactive todo list with progress tracking',
            code: `<div class="todo-container">
  <div class="todo-header">
    <h4>Tasks (\${getCompletedTodosCount()}/\${getTotalTodosCount()})</h4>
    <div class="progress-bar">
      <div class="progress-fill" [style.width.%]="getTodoProgress()"></div>
    </div>
  </div>
  
  <div class="todo-list">
    <div *ngFor="let todo of todos" class="todo-item">
      <sui-checkbox 
        [(ngModel)]="todo.completed"
        [label]="todo.name">
      </sui-checkbox>
    </div>
  </div>
</div>`,
            tsCode: `interface Task {
  id: string;
  name: string;
  completed: boolean;
}

export class CheckboxComponent {
  todos: Task[] = [
    { id: '1', name: 'Complete project documentation', completed: false },
    { id: '2', name: 'Review code changes', completed: true },
    { id: '3', name: 'Update dependencies', completed: false }
  ];
  
  getCompletedTodosCount(): number {
    return this.todos.filter(todo => todo.completed).length;
  }
  
  getTotalTodosCount(): number {
    return this.todos.length;
  }
  
  getTodoProgress(): number {
    return (this.getCompletedTodosCount() / this.getTotalTodosCount()) * 100;
  }
}`
          },
          {
            name: 'Settings Panel',
            description: 'Checkboxes organized in a settings panel layout',
            code: `<div class="settings-panel">
  <div class="settings-section">
    <h4>Notifications</h4>
    <div class="settings-options">
      <sui-checkbox 
        [(ngModel)]="settings.notifications.email" 
        label="Email notifications">
      </sui-checkbox>
      <sui-checkbox 
        [(ngModel)]="settings.notifications.push" 
        label="Push notifications">
      </sui-checkbox>
    </div>
  </div>
</div>`,
            tsCode: `export class CheckboxComponent {
  settings = {
    notifications: {
      email: true,
      push: false,
      sms: true
    },
    privacy: {
      profileVisible: true,
      dataSharing: false,
      analytics: true
    }
  };
}`
          },
          {
            name: 'Custom Styling',
            description: 'Checkboxes with custom styling and effects',
            code: `<sui-checkbox 
  [cssClass]="'checkbox-enhanced'"
  label="Enhanced Checkbox">
</sui-checkbox>

<sui-checkbox 
  [cssClass]="'checkbox-animated'"
  label="Animated Checkbox">
</sui-checkbox>

<sui-checkbox 
  [cssClass]="'checkbox-glow'"
  label="Glow Effect">
</sui-checkbox>`,
            tsCode: `export class CheckboxComponent {
  // Custom styling options:
  // - checkbox-enhanced: Enhanced appearance
  // - checkbox-animated: Hover animations
  // - checkbox-glow: Focus glow effect
  // - checkbox-rounded: Rounded corners
  // - checkbox-borderless: No border
  // - checkbox-shadow: Drop shadow
  // - checkbox-gradient: Gradient background
}`
          }
        ],
        props: [
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Whether the checkbox is disabled',
            required: false
          },
          {
            name: 'name',
            type: 'string',
            default: '""',
            description: 'Name attribute for the checkbox input',
            required: false
          },
          {
            name: 'value',
            type: 'unknown',
            default: 'true',
            description: 'Value of the checkbox when checked',
            required: false
          },
          {
            name: 'inputId',
            type: 'string',
            default: '""',
            description: 'ID attribute for the checkbox input',
            required: false
          },
          {
            name: 'cssClass',
            type: 'string',
            default: '""',
            description: 'Additional CSS classes to apply to the checkbox',
            required: false
          },
          {
            name: 'label',
            type: 'string',
            default: '""',
            description: 'Label text for the checkbox',
            required: false
          },
          {
            name: 'indeterminate',
            type: 'boolean',
            default: 'false',
            description: 'Whether the checkbox is in indeterminate state',
            required: false
          }
        ],
        usage: 'Use checkboxes for multiple selection in forms, settings panels, and interactive lists.',
        tags: ['form', 'input', 'selection', 'interactive']
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
        description: 'Radio button input component with multiple variants and states',
        examples: [
          {
            name: 'Basic Radio Button',
            description: 'Simple radio buttons with basic functionality',
            code: `<sui-radio-button 
  name="basic-group"
  value="option1"
  inputId="option1"
  label="Option 1"
  [(ngModel)]="selectedValue">
</sui-radio-button>`,
            tsCode: `export class RadioButtonComponent {
  selectedValue = 'option1';
}`
          },
          {
            name: 'Size Variations',
            description: 'Radio buttons available in different sizes',
            code: `<sui-radio-button 
  name="size-group"
  value="small"
  inputId="size-small"
  label="Small Radio Button"
  cssClass="radio-sm"
  [(ngModel)]="sizeValue">
</sui-radio-button>

<sui-radio-button 
  name="size-group"
  value="large"
  inputId="size-large"
  label="Large Radio Button"
  cssClass="radio-lg"
  [(ngModel)]="sizeValue">
</sui-radio-button>`,
            tsCode: `export class RadioButtonComponent {
  sizeValue = 'small';
  // Size variants: sm, normal, lg, xl
  // Use cssClass="radio-{size}" to apply sizes
}`
          },
          {
            name: 'Color Variants',
            description: 'Radio buttons available in different color themes',
            code: `<sui-radio-button 
  name="color-group"
  value="primary"
  inputId="color-primary"
  label="Primary Radio Button"
  cssClass="radio-primary"
  [(ngModel)]="colorValue">
</sui-radio-button>

<sui-radio-button 
  name="color-group"
  value="success"
  inputId="color-success"
  label="Success Radio Button"
  cssClass="radio-success"
  [(ngModel)]="colorValue">
</sui-radio-button>`,
            tsCode: `export class RadioButtonComponent {
  colorValue = 'primary';
  // Color variants: primary, secondary, success, warning, danger
  // Use cssClass="radio-{color}" to apply colors
}`
          },
          {
            name: 'Form Integration',
            description: 'Radio buttons integrated within a form with validation',
            code: `<form (ngSubmit)="submitForm()">
  <div class="form-group">
    <h4>Preferred Contact Method</h4>
    <sui-radio-button 
      name="contact"
      value="email"
      inputId="contact-email"
      label="Email"
      [(ngModel)]="formData.preferredContact"
      required>
    </sui-radio-button>
    <sui-radio-button 
      name="contact"
      value="phone"
      inputId="contact-phone"
      label="Phone"
      [(ngModel)]="formData.preferredContact"
      required>
    </sui-radio-button>
  </div>
</form>`,
            tsCode: `export class RadioButtonComponent {
  formData = {
    preferredContact: 'email'
  };
  
  submitForm(): void {
    console.log('Form submitted:', this.formData);
  }
}`
          },
          {
            name: 'Survey Example',
            description: 'Interactive survey with progress tracking using radio buttons',
            code: `<div class="survey-container">
  <div class="survey-header">
    <h4>User Experience Survey</h4>
    <div class="progress-bar">
      <div class="progress-fill" [style.width.%]="getSurveyProgress()"></div>
    </div>
  </div>
  
  <form class="survey-form">
    <div class="survey-question">
      <h5>What is your age range?</h5>
      <sui-radio-button 
        name="age-range"
        value="18-25"
        inputId="age-18-25"
        label="18-25 years"
        [(ngModel)]="surveyData.ageRange">
      </sui-radio-button>
    </div>
  </form>
</div>`,
            tsCode: `export class RadioButtonComponent {
  surveyData = {
    ageRange: '',
    experience: '',
    satisfaction: ''
  };
  
  getSurveyProgress(): number {
    const fields = ['ageRange', 'experience', 'satisfaction'];
    const completed = fields.filter(field => this.surveyData[field] !== '').length;
    return (completed / fields.length) * 100;
  }
}`
          },
          {
            name: 'Settings Panel',
            description: 'Radio buttons organized in a settings panel layout',
            code: `<div class="settings-panel">
  <div class="settings-section">
    <h4>Language</h4>
    <sui-radio-button 
      name="language"
      value="en"
      inputId="lang-en"
      label="English"
      [(ngModel)]="settings.language">
    </sui-radio-button>
    <sui-radio-button 
      name="language"
      value="es"
      inputId="lang-es"
      label="Español"
      [(ngModel)]="settings.language">
    </sui-radio-button>
  </div>
</div>`,
            tsCode: `export class RadioButtonComponent {
  settings = {
    language: 'en',
    currency: 'usd',
    timezone: 'utc'
  };
}`
          },
          {
            name: 'Payment Method Selection',
            description: 'Radio buttons for selecting payment methods with descriptions',
            code: `<div class="payment-container">
  <div class="payment-methods">
    <div class="payment-option">
      <sui-radio-button 
        name="payment-method"
        value="card"
        inputId="payment-card"
        label="Credit/Debit Card"
        [(ngModel)]="selectedPaymentMethod">
      </sui-radio-button>
      <div class="payment-description">
        <span>Visa, Mastercard, American Express</span>
      </div>
    </div>
  </div>
</div>`,
            tsCode: `export class RadioButtonComponent {
  selectedPaymentMethod = 'card';
  
  paymentMethods = [
    { value: 'card', label: 'Credit/Debit Card', description: 'Visa, Mastercard, American Express' },
    { value: 'paypal', label: 'PayPal', description: 'Pay with your PayPal account' },
    { value: 'bank', label: 'Bank Transfer', description: 'Direct bank transfer' }
  ];
}`
          },
          {
            name: 'Custom Styling',
            description: 'Radio buttons with custom styling and effects',
            code: `<sui-radio-button 
  name="custom-style"
  value="enhanced"
  inputId="style-enhanced"
  label="Enhanced Radio Button"
  cssClass="radio-enhanced"
  [(ngModel)]="customValue">
</sui-radio-button>

<sui-radio-button 
  name="custom-style"
  value="animated"
  inputId="style-animated"
  label="Animated Radio Button"
  cssClass="radio-animated"
  [(ngModel)]="customValue">
</sui-radio-button>`,
            tsCode: `export class RadioButtonComponent {
  customValue = 'enhanced';
  // Custom styling options:
  // - radio-enhanced: Enhanced appearance
  // - radio-animated: Hover animations
  // - radio-glow: Focus glow effect
  // - radio-shadow: Drop shadow
  // - radio-gradient: Gradient background
}`
          }
        ],
        props: [
          {
            name: 'name',
            type: 'string',
            default: '""',
            description: 'Name attribute for the radio button group',
            required: true
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Whether the radio button is disabled',
            required: false
          },
          {
            name: 'value',
            type: 'unknown',
            default: 'null',
            description: 'Value of the radio button when selected',
            required: true
          },
          {
            name: 'inputId',
            type: 'string',
            default: '""',
            description: 'ID attribute for the radio button input',
            required: false
          },
          {
            name: 'label',
            type: 'string',
            default: '""',
            description: 'Label text for the radio button',
            required: false
          },
          {
            name: 'cssClass',
            type: 'string',
            default: '""',
            description: 'Additional CSS classes to apply to the radio button',
            required: false
          }
        ],
        usage: 'Use radio buttons for single selection in forms, settings panels, surveys, and payment method selection.',
        tags: ['form', 'input', 'selection', 'interactive']
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
    description: 'Advanced dropdown selection component with search, multi-select, and loading states',
    examples: [
      {
        name: 'Basic Select',
        description: 'Simple select component with basic functionality and placeholder',
        code: `<sui-select
  placeholder="Choose an option"
  [options]="basicOptions"
  [(ngModel)]="basicSelectedValue"
  [clearable]="true">
</sui-select>`,
        tsCode: `export class SelectComponent {
  basicSelectedValue: string | null = null;
  basicOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Disabled Option', value: 'disabled', disabled: true }
  ];
}`
      },
      {
        name: 'Size Variations',
        description: 'Select components available in different sizes',
        code: `<sui-select
  placeholder="Small Select"
  [options]="options"
  [(ngModel)]="selectedValue"
  class="sm">
</sui-select>

<sui-select
  placeholder="Normal Select"
  [options]="options"
  [(ngModel)]="selectedValue">
</sui-select>

<sui-select
  placeholder="Large Select"
  [options]="options"
  [(ngModel)]="selectedValue"
  class="lg">
</sui-select>`
      },
      {
        name: 'Form Integration',
        description: 'Select components integrated within a form with validation and dependent fields',
        code: `<form class="space-y-6" (ngSubmit)="submitForm()">
  <div class="form-group">
    <label class="form-label">Country</label>
    <sui-select
      placeholder="Select your country"
      [options]="countries"
      [(ngModel)]="formData.country"
      name="country"
      inputId="country"
      (change)="onCountryChange()"
      [loading]="isLoadingCountries"
      required>
    </sui-select>
  </div>
  
  <div class="form-group">
    <label class="form-label">City</label>
    <sui-select
      placeholder="Select your city"
      [options]="getCitiesForCountry()"
      [(ngModel)]="formData.city"
      name="city"
      inputId="city"
      [disabled]="!formData.country"
      [loading]="isLoadingCities"
      required>
    </sui-select>
  </div>
</form>`,
        tsCode: `export class SelectComponent {
  formData = {
    country: '',
    city: ''
  };
  
  countries = [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' }
  ];
  
  cities: { [key: string]: any[] } = {
    us: [
      { label: 'New York', value: 'ny' },
      { label: 'Los Angeles', value: 'la' }
    ],
    ca: [
      { label: 'Toronto', value: 'toronto' },
      { label: 'Vancouver', value: 'vancouver' }
    ]
  };
  
  getCitiesForCountry() {
    if (!this.formData.country) return [];
    return this.cities[this.formData.country] || [];
  }
  
  onCountryChange() {
    this.formData.city = '';
  }
}`
      },
      {
        name: 'Multi-Select with Search',
        description: 'Multi-select component with search functionality and select all options',
        code: `<sui-select
  placeholder="Select your skills"
  [options]="skills"
  [(ngModel)]="selectedSkills"
  [multiple]="true"
  [searchable]="true"
  [selectAll]="true"
  name="skills"
  inputId="skills"
  searchPlaceholder="Search skills..."
  [maxDisplayItems]="2">
</sui-select>`,
        tsCode: `export class SelectComponent {
  selectedSkills: string[] = [];
  skills = [
    { label: 'JavaScript', value: 'js', category: 'Frontend' },
    { label: 'TypeScript', value: 'ts', category: 'Frontend' },
    { label: 'Angular', value: 'angular', category: 'Frontend' },
    { label: 'Node.js', value: 'node', category: 'Backend' }
  ];
}`
      },
      {
        name: 'Product Selection',
        description: 'Multi-select component for product selection with pricing information',
        code: `<sui-select
  placeholder="Select products"
  [options]="products"
  [(ngModel)]="selectedProducts"
  [multiple]="true"
  [searchable]="true"
  [selectAll]="true"
  name="products"
  inputId="products"
  searchPlaceholder="Search products..."
  [maxDisplayItems]="3">
</sui-select>

<div class="selected-products-display" *ngIf="selectedProducts.length > 0">
  <div class="products-summary">
    <h5>Selected Products (\${selectedProducts.length}):</h5>
    <div class="total-price">Total: $\${getTotalPrice()}</div>
  </div>
</div>`,
        tsCode: `export class SelectComponent {
  selectedProducts: string[] = [];
  products = [
    { label: 'MacBook Pro', value: 'macbook', category: 'Electronics', price: 2499 },
    { label: 'iPhone 15', value: 'iphone', category: 'Electronics', price: 799 },
    { label: 'iPad Air', value: 'ipad', category: 'Electronics', price: 599 }
  ];
  
  getTotalPrice(): number {
    return this.getSelectedProducts().reduce((total, product) => total + product.price, 0);
  }
  
  getSelectedProducts() {
    return this.products.filter(product => this.selectedProducts.includes(product.value));
  }
}`
      },
      {
        name: 'Loading States',
        description: 'Select components with loading states for async data',
        code: `<sui-select
  placeholder="Loading countries..."
  [options]="countries"
  [(ngModel)]="selectedCountry"
  [loading]="isLoadingCountries"
  name="countries-loading"
  inputId="countries-loading">
</sui-select>

<sui-button (click)="loadCountries()" size="sm" variant="outline">
  \${isLoadingCountries ? 'Loading...' : 'Load Countries'}
</sui-button>`,
        tsCode: `export class SelectComponent {
  selectedCountry: string | null = null;
  isLoadingCountries = false;
  countries = [];
  
  loadCountries() {
    this.isLoadingCountries = true;
    // Simulate API call
    setTimeout(() => {
      this.isLoadingCountries = false;
    }, 2000);
  }
}`
      },
      {
        name: 'Custom Styling',
        description: 'Select components with custom styling and effects',
        code: `<sui-select
  placeholder="Enhanced Select"
  [options]="customOptions"
  [(ngModel)]="customSelectedValue"
  [clearable]="true"
  class="enhanced">
</sui-select>

<sui-select
  placeholder="Searchable Select"
  [options]="languages"
  [(ngModel)]="selectedLanguage"
  [searchable]="true"
  searchPlaceholder="Search languages..."
  class="searchable">
</sui-select>

<sui-select
  placeholder="Multi-Select with Custom Display"
  [options]="skills"
  [(ngModel)]="selectedSkills"
  [multiple]="true"
  [searchable]="true"
  [selectAll]="true"
  [maxDisplayItems]="1"
  [showSelectedCount]="true"
  class="multi-select">
</sui-select>`,
        tsCode: `export class SelectComponent {
  customSelectedValue: string | null = null;
  selectedLanguage: string | null = null;
  selectedSkills: string[] = [];
  
  customOptions = [
    { label: 'Enhanced Option', value: 'enhanced' },
    { label: 'Animated Option', value: 'animated' },
    { label: 'Glow Effect', value: 'glow' }
  ];
  
  languages = [
    { label: 'English', value: 'en' },
    { label: 'Spanish', value: 'es' },
    { label: 'French', value: 'fr' }
  ];
  
  skills = [
    { label: 'JavaScript', value: 'js' },
    { label: 'TypeScript', value: 'ts' },
    { label: 'Angular', value: 'angular' }
  ];
}`
      }
    ],
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the select is disabled',
        required: false
      },
      {
        name: 'name',
        type: 'string',
        default: '""',
        description: 'Name attribute for the select element',
        required: false
      },
      {
        name: 'inputId',
        type: 'string',
        default: '""',
        description: 'ID attribute for the select element',
        required: false
      },
      {
        name: 'placeholder',
        type: 'string | null',
        default: 'null',
        description: 'Placeholder text when no option is selected',
        required: false
      },
      {
        name: 'options',
        type: 'Array<{label: string; value: unknown; disabled?: boolean}>',
        default: '[]',
        description: 'Array of options to display in the dropdown',
        required: true
      },
      {
        name: 'searchable',
        type: 'boolean',
        default: 'false',
        description: 'Whether the select has search functionality',
        required: false
      },
      {
        name: 'clearable',
        type: 'boolean',
        default: 'false',
        description: 'Whether the select has a clear button',
        required: false
      },
      {
        name: 'multiple',
        type: 'boolean',
        default: 'false',
        description: 'Whether multiple options can be selected',
        required: false
      },
      {
        name: 'selectAll',
        type: 'boolean',
        default: 'false',
        description: 'Whether to show select all/clear all buttons (multi-select only)',
        required: false
      },
      {
        name: 'maxDisplayItems',
        type: 'number',
        default: '3',
        description: 'Maximum number of items to display before showing count (multi-select only)',
        required: false
      },
      {
        name: 'showSelectedCount',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show selected count in display text (multi-select only)',
        required: false
      },
      {
        name: 'searchPlaceholder',
        type: 'string',
        default: '"Search..."',
        description: 'Placeholder text for the search input',
        required: false
      },
      {
        name: 'noResultsText',
        type: 'string',
        default: '"No results found"',
        description: 'Text to display when no search results are found',
        required: false
      },
      {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        description: 'Whether the select is in loading state',
        required: false
      }
    ],
    usage: 'Use select components for single or multiple selection from options in forms, settings panels, data filtering, and complex user interfaces.',
    tags: ['form', 'input', 'selection', 'interactive', 'search', 'multi-select']
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
        description: 'Tabbed content component for organizing content into multiple panels',
        examples: [
          {
            name: 'Basic Tabs',
            code: `<sui-tabs [tabs]="tabs" [activeIndex]="activeIndex" (onActiveIndexChange)="onTabChange($event)">
    <div *ngIf="activeIndex === 0">Tab 1 content</div>
    <div *ngIf="activeIndex === 1">Tab 2 content</div>
  </sui-tabs>`,
            description: 'Basic tabs with simple content'
          },
          {
            name: 'Tabs with Icons',
            code: `<sui-tabs [tabs]="iconTabs" [activeIndex]="activeIndex">
    <!-- Tab content -->
  </sui-tabs>`,
            description: 'Tabs enhanced with icons'
          },
          {
            name: 'Closable Tabs',
            code: `<sui-tabs [tabs]="closableTabs" [activeIndex]="activeIndex" (onTabClose)="onTabClose($event)">
    <!-- Tab content -->
  </sui-tabs>`,
            description: 'Tabs that can be closed by users'
          },
          {
            name: 'Different Orientations',
            code: `<sui-tabs [tabs]="tabs" orientation="left">
    <!-- Tab content -->
  </sui-tabs>`,
            description: 'Tabs positioned on different sides'
          }
        ],
        props: [
          {
            name: 'tabs',
            type: 'Array<{header: string, content?: any, disabled?: boolean, closable?: boolean, icon?: string}>',
            default: '[]',
            description: 'Array of tab objects with header, content, and options',
            required: true
          },
          {
            name: 'activeIndex',
            type: 'number',
            default: '0',
            description: 'Index of the currently active tab',
            required: false
          },
          {
            name: 'orientation',
            type: 'string',
            default: 'top',
            description: 'Tab orientation (top, bottom, left, right)',
            required: false
          },
          {
            name: 'scrollable',
            type: 'boolean',
            default: 'false',
            description: 'Whether tabs should be scrollable when they overflow',
            required: false
          },
          {
            name: 'style',
            type: 'any',
            default: '{}',
            description: 'Inline styles for the tabs container',
            required: false
          },
          {
            name: 'styleClass',
            type: 'string',
            default: '""',
            description: 'CSS class names for the tabs container',
            required: false
          }
        ],
        events: [
          {
            name: 'onActiveIndexChange',
            type: 'EventEmitter<number>',
            description: 'Emitted when the active tab index changes'
          },
          {
            name: 'onTabClose',
            type: 'EventEmitter<number>',
            description: 'Emitted when a tab is closed (only for closable tabs)'
          }
        ],
        usage: 'Use tabs to organize content into multiple panels. Perfect for settings pages, dashboards, and any interface that needs to group related content.',
        tags: ['navigation', 'content', 'layout', 'panels']
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
  {
        id: 'tooltip',
        name: 'Tooltip',
        category: 'Foundation',
        description: 'Contextual information component that displays helpful text when users hover, focus, or click on elements',
        examples: [
          {
            name: 'Basic Tooltip',
            code: `<sui-tooltip [tooltip]="'This is a basic tooltip'">
    <sui-button variant="primary">Hover me</sui-button>
  </sui-tooltip>`,
            description: 'Basic tooltip that appears on hover'
          },
          {
            name: 'Different Positions',
            code: `<!-- Top position -->
  <sui-tooltip [tooltip]="'Tooltip on top'" position="top">
    <sui-button variant="secondary">Top</sui-button>
  </sui-tooltip>
  
  <!-- Bottom position -->
  <sui-tooltip [tooltip]="'Tooltip on bottom'" position="bottom">
    <sui-button variant="secondary">Bottom</sui-button>
  </sui-tooltip>
  
  <!-- Left position -->
  <sui-tooltip [tooltip]="'Tooltip on left'" position="left">
    <sui-button variant="secondary">Left</sui-button>
  </sui-tooltip>
  
  <!-- Right position -->
  <sui-tooltip [tooltip]="'Tooltip on right'" position="right">
    <sui-button variant="secondary">Right</sui-button>
  </sui-tooltip>`,
            description: 'Tooltips positioned on different sides of the target element'
          },
          {
            name: 'Theme Variants',
            code: `<!-- Primary theme -->
  <sui-tooltip [tooltip]="'Primary tooltip'" styleClass="sui-tooltip-primary">
    <sui-button variant="primary">Primary</sui-button>
  </sui-tooltip>
  
  <!-- Success theme -->
  <sui-tooltip [tooltip]="'Success tooltip'" styleClass="sui-tooltip-success">
    <sui-button variant="success">Success</sui-button>
  </sui-tooltip>
  
  <!-- Warning theme -->
  <sui-tooltip [tooltip]="'Warning tooltip'" styleClass="sui-tooltip-warning">
    <sui-button variant="warning">Warning</sui-button>
  </sui-tooltip>
  
  <!-- Error theme -->
  <sui-tooltip [tooltip]="'Error tooltip'" styleClass="sui-tooltip-error">
    <sui-button variant="danger">Error</sui-button>
  </sui-tooltip>
  
  <!-- Light theme -->
  <sui-tooltip [tooltip]="'Light tooltip'" styleClass="sui-tooltip-light">
    <sui-button variant="outline">Light</sui-button>
  </sui-tooltip>`,
            description: 'Tooltips with different color themes'
          },
          {
            name: 'Size Variants',
            code: `<!-- Small tooltip -->
  <sui-tooltip [tooltip]="'Small tooltip'" styleClass="sui-tooltip-sm">
    <sui-button variant="secondary" size="sm">Small</sui-button>
  </sui-tooltip>
  
  <!-- Default tooltip -->
  <sui-tooltip [tooltip]="'Default tooltip'">
    <sui-button variant="secondary">Default</sui-button>
  </sui-tooltip>
  
  <!-- Large tooltip -->
  <sui-tooltip [tooltip]="'Large tooltip with more content'" styleClass="sui-tooltip-lg">
    <sui-button variant="secondary" size="lg">Large</sui-button>
  </sui-tooltip>`,
            description: 'Tooltips with different sizes and padding'
          },
          {
            name: 'Long Content',
            code: `<sui-tooltip [tooltip]="'This is a longer tooltip that demonstrates how the component handles text that might wrap to multiple lines and provides helpful information to users.'" position="top">
    <sui-button variant="primary">Long Tooltip</sui-button>
  </sui-tooltip>`,
            description: 'Tooltip with longer text content that wraps to multiple lines'
          },
          {
            name: 'HTML Content',
            code: `<sui-tooltip [tooltip]="'This tooltip contains <strong>HTML content</strong> and <em>formatting</em>.'" position="top">
    <sui-button variant="primary">HTML Tooltip</sui-button>
  </sui-tooltip>`,
            description: 'Tooltip with HTML content and formatting'
          },
          {
            name: 'Interactive Examples',
            code: `<!-- Hover tooltip -->
  <sui-tooltip [tooltip]="'Hover tooltip'" position="top">
    <sui-button variant="primary">Hover</sui-button>
  </sui-tooltip>
  
  <!-- Focus tooltip -->
  <sui-tooltip [tooltip]="'Focus tooltip'" position="top">
    <button class="px-4 py-2 bg-blue-600 text-white rounded">Focus</button>
  </sui-tooltip>`,
            description: 'Tooltips triggered by different user interactions'
          },
          {
            name: 'Form Integration',
            code: `<!-- Input with tooltip -->
  <sui-tooltip [tooltip]="'Enter your email address'" position="right">
    <input type="email" placeholder="Email" class="px-3 py-2 border rounded">
  </sui-tooltip>
  
  <!-- Button with tooltip -->
  <sui-tooltip [tooltip]="'Click to submit the form'" position="top">
    <sui-button variant="primary">Submit</sui-button>
  </sui-tooltip>`,
            description: 'Tooltips integrated with form elements for better UX'
          },
          {
            name: 'Disabled State',
            code: `<sui-tooltip [tooltip]="'This tooltip is disabled'" [disabled]="true">
    <sui-button variant="secondary" [disabled]="true">Disabled</sui-button>
  </sui-tooltip>`,
            description: 'Tooltip in disabled state that does not show'
          },
          {
            name: 'Custom Styling',
            code: `<sui-tooltip 
    [tooltip]="'Custom styled tooltip'" 
    position="top"
    styleClass="sui-tooltip-primary"
    [style]="{'font-size': '16px', 'border-radius': '12px'}">
    <sui-button variant="primary">Custom Style</sui-button>
  </sui-tooltip>`,
            description: 'Tooltip with custom styling and CSS classes'
          },
          {
            name: 'Event Handling',
            code: `<sui-tooltip 
    [tooltip]="'Tooltip with events'" 
    position="top"
    (onShow)="onTooltipShow()"
    (onHide)="onTooltipHide()">
    <sui-button variant="primary">Event Tooltip</sui-button>
  </sui-tooltip>`,
            description: 'Tooltip with event handlers for show/hide events'
          },
          {
            name: 'Delay Configuration',
            code: `<!-- Fast tooltip -->
  <sui-tooltip [tooltip]="'Fast tooltip'" [showDelay]="0" [hideDelay]="0">
    <sui-button variant="secondary">Fast</sui-button>
  </sui-tooltip>
  
  <!-- Delayed tooltip -->
  <sui-tooltip [tooltip]="'Delayed tooltip'" [showDelay]="500" [hideDelay]="200">
    <sui-button variant="secondary">Delayed</sui-button>
  </sui-tooltip>`,
            description: 'Tooltips with custom show and hide delays'
          }
        ],
        props: [
          {
            name: 'tooltip',
            type: 'string',
            default: '""',
            description: 'The text content to display in the tooltip',
            required: true
          },
          {
            name: 'position',
            type: 'string',
            default: 'top',
            description: 'Position of the tooltip relative to the target element (top, bottom, left, right)',
            required: false
          },
          {
            name: 'showDelay',
            type: 'number',
            default: '0',
            description: 'Delay in milliseconds before showing the tooltip',
            required: false
          },
          {
            name: 'hideDelay',
            type: 'number',
            default: '0',
            description: 'Delay in milliseconds before hiding the tooltip',
            required: false
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Whether the tooltip is disabled and will not show',
            required: false
          },
          {
            name: 'style',
            type: 'any',
            default: '{}',
            description: 'Inline styles for the tooltip',
            required: false
          },
          {
            name: 'styleClass',
            type: 'string',
            default: '""',
            description: 'CSS class names for the tooltip (e.g., sui-tooltip-primary, sui-tooltip-sm)',
            required: false
          }
        ],
        events: [
          {
            name: 'onShow',
            type: 'EventEmitter<void>',
            description: 'Emitted when the tooltip is shown'
          },
          {
            name: 'onHide',
            type: 'EventEmitter<void>',
            description: 'Emitted when the tooltip is hidden'
          }
        ],
        usage: 'Use tooltips to provide contextual information, help text, or additional details about UI elements. Perfect for form fields, buttons, icons, and any interface element that benefits from additional explanation. Tooltips improve user experience by providing guidance without cluttering the interface.',
        tags: ['tooltip', 'help', 'context', 'information', 'hover', 'focus']
      },
];
