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
              code: '<sui-button variant="primary">Primary</sui-button>',
              description: 'Default primary button with solid background'
            },
            {
              name: 'Secondary Button',
              code: '<sui-button variant="secondary">Secondary</sui-button>',
              description: 'Secondary button with muted appearance'
            },
            {
              name: 'Outline Button',
              code: '<sui-button variant="outline">Outline</sui-button>',
              description: 'Button with outline style and transparent background'
            },
            {
              name: 'Ghost Button',
              code: '<sui-button variant="ghost">Ghost</sui-button>',
              description: 'Subtle button with no border or background'
            },
            {
              name: 'Danger Button',
              code: '<sui-button variant="danger">Danger</sui-button>',
              description: 'Button for destructive actions'
            },
            {
              name: 'Small Size',
              code: '<sui-button size="sm">Small</sui-button>',
              description: 'Small button size'
            },
            {
              name: 'Medium Size',
              code: '<sui-button size="md">Medium</sui-button>',
              description: 'Medium button size (default)'
            },
            {
              name: 'Large Size',
              code: '<sui-button size="lg">Large</sui-button>',
              description: 'Large button size'
            },
            {
              name: 'Disabled State',
              code: '<sui-button [disabled]="true">Disabled</sui-button>',
              description: 'Button in disabled state'
            },
            {
              name: 'Loading State',
              code: '<sui-button [loading]="true">Loading</sui-button>',
              description: 'Button showing loading indicator'
            },
            {
              name: 'Full Width',
              code: '<sui-button [fullWidth]="true">Full Width</sui-button>',
              description: 'Button that spans the full width of its container'
            },
            {
              name: 'With Icon',
              code: '<sui-button icon="pi pi-check">With Icon</sui-button>',
              description: 'Button with icon on the left'
            },
            {
              name: 'Icon Right',
              code: '<sui-button icon="pi pi-arrow-right" iconPosition="right">Next</sui-button>',
              description: 'Button with icon on the right'
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
        events: [
          {
            name: 'click',
            type: 'EventEmitter<MouseEvent>',
            description: 'Emitted when the button is clicked'
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
        events: [
          {
            name: 'click',
            type: 'EventEmitter<MouseEvent>',
            description: 'Emitted when the card is clicked (only if clickable is true)'
          },
          {
            name: 'headerClick',
            type: 'EventEmitter<MouseEvent>',
            description: 'Emitted when the card header is clicked'
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
        events: [
          {
            name: 'blur',
            type: 'EventEmitter<FocusEvent>',
            description: 'Emitted when the input loses focus'
          },
          {
            name: 'focus',
            type: 'EventEmitter<FocusEvent>',
            description: 'Emitted when the input gains focus'
          },
          {
            name: 'input',
            type: 'EventEmitter<Event>',
            description: 'Emitted when the input value changes'
          },
          {
            name: 'clear',
            type: 'EventEmitter<void>',
            description: 'Emitted when the clear button is clicked'
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
        events: [
          {
            name: 'onOpen',
            type: 'EventEmitter<{index: number}>',
            description: 'Emitted when an accordion tab is opened'
          },
          {
            name: 'onClose',
            type: 'EventEmitter<{index: number}>',
            description: 'Emitted when an accordion tab is closed'
          },
          {
            name: 'onActiveIndexChange',
            type: 'EventEmitter<number | number[]>',
            description: 'Emitted when the active tab index changes'
          }
        ],
        usage: 'Use accordions to organize content in collapsible sections.',
        tags: ['collapsible', 'content']
      },
  {
    id: 'avatar',
    name: 'Avatar',
    category: 'Foundation',
    description: 'User profile image component with support for images, initials, icons, and status indicators',
    examples: [
      {
        name: 'Basic Avatar',
        description: 'Simple avatar components with images, initials, and icons',
        code: `<sui-avatar
  image="https://example.com/user.jpg"
  label="John Doe"
  size="normal"
  shape="circle">
</sui-avatar>

<sui-avatar
  label="Jane Smith"
  size="normal"
  shape="circle">
</sui-avatar>

<sui-avatar
  icon="👤"
  size="normal"
  shape="circle">
</sui-avatar>`,
        tsCode: `export class AvatarComponent {
  users = [
    { name: 'John Doe', image: 'https://example.com/user.jpg' },
    { name: 'Jane Smith' },
    { icon: '👤', label: 'User' }
  ];
}`
      },
      {
        name: 'Size Variations',
        description: 'Avatar components available in different sizes',
        code: `<sui-avatar
  image="https://example.com/user.jpg"
  label="John Doe"
  size="small"
  shape="circle">
</sui-avatar>

<sui-avatar
  image="https://example.com/user.jpg"
  label="John Doe"
  size="normal"
  shape="circle">
</sui-avatar>

<sui-avatar
  image="https://example.com/user.jpg"
  label="John Doe"
  size="large"
  shape="circle">
</sui-avatar>

<sui-avatar
  image="https://example.com/user.jpg"
  label="John Doe"
  size="xlarge"
  shape="circle">
</sui-avatar>`
      },
      {
        name: 'Shape Variations',
        description: 'Avatar components available in different shapes',
        code: `<sui-avatar
  image="https://example.com/user.jpg"
  label="John Doe"
  size="large"
  shape="circle">
</sui-avatar>

<sui-avatar
  image="https://example.com/user.jpg"
  label="John Doe"
  size="large"
  shape="square">
</sui-avatar>`
      },
      {
        name: 'Status Indicators',
        description: 'Avatars with status indicators showing user availability',
        code: `<div class="avatar-with-status">
  <sui-avatar
    image="https://example.com/user.jpg"
    label="John Doe"
    size="normal"
    shape="circle">
  </sui-avatar>
  <div class="status-indicator online"></div>
</div>

<div class="avatar-with-status">
  <sui-avatar
    label="Jane Smith"
    size="normal"
    shape="circle">
  </sui-avatar>
  <div class="status-indicator busy"></div>
</div>`,
        tsCode: `export class AvatarComponent {
  users = [
    { name: 'John Doe', image: 'https://example.com/user.jpg', status: 'online' },
    { name: 'Jane Smith', status: 'busy' },
    { name: 'Bob Wilson', status: 'away' },
    { name: 'Alice Brown', status: 'offline' }
  ];
  
  getStatusColor(status: string): string {
    switch (status) {
      case 'online': return '#10b981';
      case 'busy': return '#ef4444';
      case 'away': return '#f59e0b';
      case 'offline': return '#6b7280';
      default: return '#6b7280';
    }
  }
}`
      },
      {
        name: 'Avatar Groups',
        description: 'Grouped avatars for team displays and user lists',
        code: `<div class="sui-avatar-group">
  <sui-avatar
    *ngFor="let member of teamMembers"
    [image]="member.image"
    [label]="member.name"
    size="normal"
    shape="circle">
  </sui-avatar>
</div>

<div class="team-info">
  <span class="team-count">+{{ teamMembers.length }} team members</span>
</div>`,
        tsCode: `export class AvatarComponent {
  teamMembers = [
    { name: 'Emma Thompson', image: 'https://example.com/emma.jpg' },
    { name: 'James Rodriguez', image: 'https://example.com/james.jpg' },
    { name: 'Lisa Chen' },
    { name: 'Michael Brown', image: 'https://example.com/michael.jpg' }
  ];
}`
      },
      {
        name: 'Custom Styling',
        description: 'Avatars with custom colors and styling',
        code: `<sui-avatar
  label="Alex Green"
  size="large"
  shape="circle"
  [style]="{'background-color': '#10b981'}">
</sui-avatar>

<sui-avatar
  label="Blue Sky"
  size="large"
  shape="circle"
  [style]="{'background-color': '#3b82f6'}">
</sui-avatar>

<sui-avatar
  image="https://example.com/user.jpg"
  label="John Doe"
  size="xlarge"
  shape="circle"
  styleClass="custom-border">
</sui-avatar>`,
        tsCode: `export class AvatarComponent {
  customAvatars = [
    { name: 'Alex Green', color: '#10b981' },
    { name: 'Blue Sky', color: '#3b82f6' },
    { name: 'Red Rose', color: '#ef4444' }
  ];
}`
      }
    ],
    props: [
      {
        name: 'image',
        type: 'string',
        default: '""',
        description: 'URL of the user profile image',
        required: false
      },
      {
        name: 'label',
        type: 'string',
        default: '""',
        description: 'User name for generating initials when no image is provided',
        required: false
      },
      {
        name: 'icon',
        type: 'string',
        default: '""',
        description: 'Icon to display when no image or label is provided',
        required: false
      },
      {
        name: 'size',
        type: '"small" | "normal" | "large" | "xlarge"',
        default: '"normal"',
        description: 'Size of the avatar component',
        required: false
      },
      {
        name: 'shape',
        type: '"square" | "circle"',
        default: '"circle"',
        description: 'Shape of the avatar component',
        required: false
      },
      {
        name: 'style',
        type: 'any',
        default: '{}',
        description: 'Inline styles to apply to the avatar',
        required: false
      },
      {
        name: 'styleClass',
        type: 'string',
        default: '""',
        description: 'CSS class to apply to the avatar',
        required: false
      }
    ],
    events: [],
    usage: 'Use avatar components to display user profile images, initials, or icons in user interfaces, team displays, user lists, and profile sections.',
    tags: ['profile', 'image', 'user', 'team', 'status', 'display']
  },
  {
    id: 'badge',
    name: 'Badge',
    category: 'Foundation',
    description: 'Small status indicator component for displaying counts, status, and notifications',
    examples: [
      {
        name: 'Info Badge',
        description: 'Badge with info severity (blue)',
        code: `<sui-badge value="New" severity="info"></sui-badge>`
      },
      {
        name: 'Success Badge',
        description: 'Badge with success severity (green)',
        code: `<sui-badge value="Success" severity="success"></sui-badge>`
      },
      {
        name: 'Warning Badge',
        description: 'Badge with warning severity (orange)',
        code: `<sui-badge value="Warning" severity="warning"></sui-badge>`
      },
      {
        name: 'Danger Badge',
        description: 'Badge with danger severity (red)',
        code: `<sui-badge value="Error" severity="danger"></sui-badge>`
      },
      {
        name: 'Contrast Badge',
        description: 'Badge with contrast severity (gray)',
        code: `<sui-badge value="Contrast" severity="contrast"></sui-badge>`
      },
      {
        name: 'Small Size',
        description: 'Badge with small size',
        code: `<sui-badge value="Small" severity="info" size="small"></sui-badge>`
      },
      {
        name: 'Normal Size',
        description: 'Badge with normal size (default)',
        code: `<sui-badge value="Normal" severity="info" size="normal"></sui-badge>`
      },
      {
        name: 'Large Size',
        description: 'Badge with large size',
        code: `<sui-badge value="Large" severity="info" size="large"></sui-badge>`
      },
      {
        name: 'Number Badge',
        description: 'Badge displaying a numeric value',
        code: `<sui-badge [value]="5" severity="info"></sui-badge>`
      },
      {
        name: 'Large Number',
        description: 'Badge displaying a large number',
        code: `<sui-badge [value]="99" severity="danger"></sui-badge>`
      },
      {
        name: 'Dot Info',
        description: 'Dot indicator with info severity',
        code: `<sui-badge severity="info" styleClass="sui-badge-dot"></sui-badge>`
      },
      {
        name: 'Dot Success',
        description: 'Dot indicator with success severity',
        code: `<sui-badge severity="success" styleClass="sui-badge-dot"></sui-badge>`
      },
      {
        name: 'Dot Warning',
        description: 'Dot indicator with warning severity',
        code: `<sui-badge severity="warning" styleClass="sui-badge-dot"></sui-badge>`
      },
      {
        name: 'Dot Danger',
        description: 'Dot indicator with danger severity',
        code: `<sui-badge severity="danger" styleClass="sui-badge-dot"></sui-badge>`
      },
      {
        name: 'With Icon',
        description: 'Badge displayed alongside text',
        code: `<div class="flex items-center gap-3">
  <span class="text-gray-700 font-medium">Messages</span>
  <sui-badge [value]="12" severity="danger" size="small"></sui-badge>
</div>`
      },
      {
        name: 'Notification Badge',
        description: 'Badge positioned on an icon',
        code: `<div class="relative inline-block">
  <button class="p-3 bg-gray-100 rounded-lg">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
    </svg>
  </button>
  <div class="absolute -top-1 -right-1">
    <sui-badge [value]="5" severity="danger" size="small"></sui-badge>
  </div>
</div>`
      },
      {
        name: 'User Status',
        description: 'Badge showing user status',
        code: `<div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
  <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
    JD
  </div>
  <div class="flex-1">
    <div class="font-medium text-gray-900">John Doe</div>
    <div class="text-sm text-gray-500">Software Engineer</div>
  </div>
  <sui-badge value="Online" severity="success" size="small"></sui-badge>
</div>`
      },
      {
        name: 'Multiple Badges',
        description: 'Multiple badges as tags',
        code: `<div class="flex flex-wrap gap-2">
  <sui-badge value="React" severity="info" size="small"></sui-badge>
  <sui-badge value="TypeScript" severity="info" size="small"></sui-badge>
  <sui-badge value="Angular" severity="danger" size="small"></sui-badge>
  <sui-badge value="Vue" severity="success" size="small"></sui-badge>
  <sui-badge value="Node.js" severity="warning" size="small"></sui-badge>
</div>`
      }
    ],
    props: [
      {
        name: 'value',
        type: 'string | number',
        default: '""',
        description: 'Text or number content to display in the badge',
        required: false
      },
      {
        name: 'severity',
        type: '"info" | "success" | "warning" | "danger" | "contrast"',
        default: '"info"',
        description: 'Severity level of the badge determining its color scheme',
        required: false
      },
      {
        name: 'size',
        type: '"small" | "normal" | "large"',
        default: '"normal"',
        description: 'Size of the badge component',
        required: false
      },
      {
        name: 'style',
        type: 'any',
        default: '{}',
        description: 'Inline styles to apply to the badge',
        required: false
      },
      {
        name: 'styleClass',
        type: 'string',
        default: '""',
        description: 'CSS class to apply to the badge (use "sui-badge-dot" for dot indicators)',
        required: false
      }
    ],
    events: [],
    usage: 'Use badge components to display status indicators, notification counts, priority levels, and other small pieces of information in user interfaces, navigation bars, lists, and data tables.',
    tags: ['status', 'indicator', 'notification', 'count', 'priority', 'alert']
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
    id: 'date-picker',
    name: 'Date Picker',
    category: 'Foundation',
    description: 'Comprehensive date selection component with calendar, time picker, and range selection capabilities',
    examples: [
      {
        name: 'Basic Date Picker',
        description: 'Simple date picker components for date selection with different sizes and states',
        code: `<sui-date-picker
  [value]="selectedDate"
  placeholder="Select date"
  size="normal"
  variant="dropdown"
  (onChange)="onDateChange($event)">
</sui-date-picker>

<sui-date-picker
  [value]="new Date()"
  placeholder="With default value"
  size="normal"
  variant="dropdown">
</sui-date-picker>

<sui-date-picker
  [value]="null"
  placeholder="Compact size"
  size="compact"
  variant="dropdown">
</sui-date-picker>`,
        tsCode: `export class DatePickerComponent {
  selectedDate: Date | null = null;
  
  onDateChange(date: Date | null): void {
    this.selectedDate = date;
    console.log('Date changed:', date);
  }
}`
      },
      {
        name: 'Variant Types',
        description: 'Different display variants for date picker components including dropdown, inline, and range selection',
        code: `<sui-date-picker
  [value]="selectedDate"
  placeholder="Dropdown picker"
  size="normal"
  variant="dropdown">
</sui-date-picker>

<sui-date-picker
  [value]="selectedDate"
  placeholder="Inline picker"
  size="normal"
  variant="inline">
</sui-date-picker>

<sui-date-picker
  [value]="dateRange"
  placeholder="Date range"
  size="normal"
  variant="range">
</sui-date-picker>`,
        tsCode: `export class DatePickerComponent {
  selectedDate: Date | null = null;
  dateRange: { start: Date | null; end: Date | null } | null = null;
}`
      },
      {
        name: 'Time Picker',
        description: 'Date picker components with time selection in 12-hour and 24-hour formats',
        code: `<sui-date-picker
  [value]="dateTime"
  placeholder="Date and time"
  size="normal"
  variant="dropdown"
  [showTime]="true"
  timeFormat="24">
</sui-date-picker>

<sui-date-picker
  [value]="dateTime"
  placeholder="Date and time"
  size="normal"
  variant="dropdown"
  [showTime]="true"
  timeFormat="12">
</sui-date-picker>`,
        tsCode: `export class DatePickerComponent {
  dateTime: Date | null = null;
}`
      },
      {
        name: 'Constrained Dates',
        description: 'Date picker components with date constraints and limitations for business rules',
        code: `<sui-date-picker
  [value]="futureDate"
  placeholder="Future dates only"
  size="normal"
  variant="dropdown"
  [minDate]="new Date()">
</sui-date-picker>

<sui-date-picker
  [value]="pastDate"
  placeholder="Past dates only"
  size="normal"
  variant="dropdown"
  [maxDate]="new Date()">
</sui-date-picker>

<sui-date-picker
  [value]="monthDate"
  placeholder="This month only"
  size="normal"
  variant="dropdown"
  [minDate]="getMonthStart()"
  [maxDate]="getMonthEnd()">
</sui-date-picker>`,
        tsCode: `export class DatePickerComponent {
  futureDate: Date | null = null;
  pastDate: Date | null = null;
  monthDate: Date | null = null;
  
  getMonthStart(): Date {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  }
  
  getMonthEnd(): Date {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }
}`
      },
      {
        name: 'Form Integration',
        description: 'Date picker components integrated into forms for data collection and validation',
        code: `<form class="event-form">
  <div class="form-field">
    <label>Event Start Date</label>
    <sui-date-picker
      [value]="formData.startDate"
      placeholder="Select start date"
      size="normal"
      variant="dropdown"
      required="true"
      (onChange)="formData.startDate = $event">
    </sui-date-picker>
  </div>
  
  <div class="form-field">
    <label>Event End Date</label>
    <sui-date-picker
      [value]="formData.endDate"
      placeholder="Select end date"
      size="normal"
      variant="dropdown"
      [minDate]="formData.startDate"
      (onChange)="formData.endDate = $event">
    </sui-date-picker>
  </div>
  
  <div class="form-field">
    <label>Reminder Date</label>
    <sui-date-picker
      [value]="formData.reminderDate"
      placeholder="Set reminder"
      size="normal"
      variant="dropdown"
      [maxDate]="formData.startDate"
      (onChange)="formData.reminderDate = $event">
    </sui-date-picker>
  </div>
</form>`,
        tsCode: `export class DatePickerComponent {
  formData = {
    startDate: null as Date | null,
    endDate: null as Date | null,
    reminderDate: null as Date | null
  };
}`
      },
      {
        name: 'Booking System',
        description: 'Date picker components used in booking and reservation systems for check-in/check-out dates',
        code: `<div class="booking-form">
  <h4>Hotel Booking</h4>
  <div class="booking-row">
    <div class="booking-field">
      <label>Check-in Date</label>
      <sui-date-picker
        [value]="bookingData.checkIn"
        placeholder="Select check-in date"
        size="normal"
        variant="dropdown"
        [minDate]="new Date()"
        (onChange)="bookingData.checkIn = $event">
      </sui-date-picker>
    </div>
    
    <div class="booking-field">
      <label>Check-out Date</label>
      <sui-date-picker
        [value]="bookingData.checkOut"
        placeholder="Select check-out date"
        size="normal"
        variant="dropdown"
        [minDate]="bookingData.checkIn || new Date()"
        (onChange)="bookingData.checkOut = $event">
      </sui-date-picker>
    </div>
  </div>
  
  <div class="booking-details">
    <div class="booking-info">
      <span>Guests: {{ bookingData.guestCount }}</span>
      <span>Room: {{ bookingData.roomType }}</span>
    </div>
    <div class="booking-result">
      <p *ngIf="bookingData.checkIn && bookingData.checkOut">
        Duration: {{ getDuration(bookingData.checkIn, bookingData.checkOut) }} nights
      </p>
    </div>
  </div>
</div>`,
        tsCode: `export class DatePickerComponent {
  bookingData = {
    checkIn: null as Date | null,
    checkOut: null as Date | null,
    guestCount: 2,
    roomType: 'Standard'
  };
  
  getDuration(startDate: Date, endDate: Date): number {
    const timeDiff = endDate.getTime() - startDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }
}`
      },
      {
        name: 'Task Management',
        description: 'Date picker components used in task and project management systems for due dates and timelines',
        code: `<div class="task-form">
  <h4>Project Task</h4>
  <div class="task-field">
    <label>Task Start Date</label>
    <sui-date-picker
      [value]="taskData.startDate"
      placeholder="Select start date"
      size="normal"
      variant="dropdown"
      (onChange)="taskData.startDate = $event">
    </sui-date-picker>
  </div>
  
  <div class="task-field">
    <label>Due Date</label>
    <sui-date-picker
      [value]="taskData.dueDate"
      placeholder="Select due date"
      size="normal"
      variant="dropdown"
      [minDate]="taskData.startDate || new Date()"
      required="true"
      (onChange)="taskData.dueDate = $event">
    </sui-date-picker>
  </div>
  
  <div class="task-meta">
    <div class="task-info">
      <span>Priority: {{ taskData.priority }}</span>
      <span>Status: {{ taskData.status }}</span>
    </div>
    <div class="task-timeline">
      <p *ngIf="taskData.startDate && taskData.dueDate">
        Duration: {{ getDuration(taskData.startDate, taskData.dueDate) }} days
      </p>
    </div>
  </div>
</div>`,
        tsCode: `export class DatePickerComponent {
  taskData = {
    dueDate: null as Date | null,
    startDate: null as Date | null,
    priority: 'Medium',
    status: 'Pending'
  };
  
  getDuration(startDate: Date, endDate: Date): number {
    const timeDiff = endDate.getTime() - startDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }
}`
      }
    ],
    props: [
      {
        name: 'value',
        type: 'Date | null | { start: Date | null; end: Date | null } | null',
        default: 'null',
        description: 'Selected date value or date range for range variant',
        required: false
      },
      {
        name: 'placeholder',
        type: 'string',
        default: '"Select date"',
        description: 'Placeholder text displayed when no date is selected',
        required: false
      },
      {
        name: 'size',
        type: '"normal" | "compact"',
        default: '"normal"',
        description: 'Size of the date picker component',
        required: false
      },
      {
        name: 'variant',
        type: '"dropdown" | "inline" | "range"',
        default: '"dropdown"',
        description: 'Display variant of the date picker',
        required: false
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the date picker is disabled',
        required: false
      },
      {
        name: 'readonly',
        type: 'boolean',
        default: 'false',
        description: 'Whether the date picker is readonly',
        required: false
      },
      {
        name: 'required',
        type: 'boolean',
        default: 'false',
        description: 'Whether the date picker is required',
        required: false
      },
      {
        name: 'showTime',
        type: 'boolean',
        default: 'false',
        description: 'Whether to show time selection',
        required: false
      },
      {
        name: 'timeFormat',
        type: '"12" | "24"',
        default: '"24"',
        description: 'Time format for time picker',
        required: false
      },
      {
        name: 'minDate',
        type: 'Date | null',
        default: 'null',
        description: 'Minimum selectable date',
        required: false
      },
      {
        name: 'maxDate',
        type: 'Date | null',
        default: 'null',
        description: 'Maximum selectable date',
        required: false
      },
      {
        name: 'disabledDates',
        type: 'Date[]',
        default: '[]',
        description: 'Array of disabled dates',
        required: false
      },
      {
        name: 'disabledDays',
        type: 'number[]',
        default: '[]',
        description: 'Array of disabled days of week (0=Sunday, 1=Monday, etc.)',
        required: false
      },
      {
        name: 'firstDayOfWeek',
        type: 'number',
        default: '0',
        description: 'First day of the week (0=Sunday, 1=Monday, etc.)',
        required: false
      },
      {
        name: 'showWeekNumbers',
        type: 'boolean',
        default: 'false',
        description: 'Whether to show week numbers',
        required: false
      },
      {
        name: 'showTodayButton',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show today button',
        required: false
      },
      {
        name: 'showClearButton',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show clear button',
        required: false
      },
      {
        name: 'dateFormat',
        type: 'string',
        default: '"MM/dd/yyyy"',
        description: 'Date format string',
        required: false
      },
      {
        name: 'style',
        type: 'any',
        default: '{}',
        description: 'Inline styles to apply to the date picker',
        required: false
      },
      {
        name: 'styleClass',
        type: 'string',
        default: '""',
        description: 'CSS class to apply to the date picker',
        required: false
      }
    ],
    usage: 'Use date picker components for date selection in forms, booking systems, task management, event planning, and any application requiring date input with calendar navigation, time selection, and date range capabilities.',
    tags: ['form', 'date', 'calendar', 'time', 'range', 'booking', 'task', 'event', 'schedule']
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
    description: 'Star rating component for collecting user feedback and displaying ratings',
    examples: [
      {
        name: 'Basic Rating',
        code: '<sui-rating [(ngModel)]="rating" [max]="5"></sui-rating>',
        description: 'Simple 5-star rating component'
      },
      {
        name: 'Size Variants',
        code: '<sui-rating size="small" [(ngModel)]="rating1"></sui-rating>\n<sui-rating size="medium" [(ngModel)]="rating2"></sui-rating>\n<sui-rating size="large" [(ngModel)]="rating3"></sui-rating>',
        description: 'Rating components in different sizes'
      },
      {
        name: 'Color Variants',
        code: '<sui-rating color="gold" [(ngModel)]="rating1"></sui-rating>\n<sui-rating color="red" [(ngModel)]="rating2"></sui-rating>\n<sui-rating color="blue" [(ngModel)]="rating3"></sui-rating>',
        description: 'Rating components with different colors'
      },
      {
        name: 'Read-only State',
        code: '<sui-rating [readonly]="true" [value]="4" [max]="5"></sui-rating>',
        description: 'Display-only rating for showing existing ratings'
      },
      {
        name: 'Disabled State',
        code: '<sui-rating [disabled]="true" [value]="3" [max]="5"></sui-rating>',
        description: 'Disabled rating component'
      },
      {
        name: 'With Value Display',
        code: '<sui-rating [(ngModel)]="rating" [max]="5" [showValue]="true"></sui-rating>',
        description: 'Rating with numerical value display'
      }
    ],
    props: [
      {
        name: 'value',
        type: 'number',
        default: '0',
        description: 'Current rating value',
        required: false
      },
      {
        name: 'max',
        type: 'number',
        default: '5',
        description: 'Maximum rating value',
        required: false
      },
      {
        name: 'size',
        type: 'string',
        default: 'medium',
        description: 'Size of the rating stars (small, medium, large)',
        required: false
      },
      {
        name: 'color',
        type: 'string',
        default: 'gold',
        description: 'Color theme for the stars',
        required: false
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the rating is disabled',
        required: false
      },
      {
        name: 'readonly',
        type: 'boolean',
        default: 'false',
        description: 'Whether the rating is read-only',
        required: false
      },
      {
        name: 'showValue',
        type: 'boolean',
        default: 'false',
        description: 'Whether to show the numerical value',
        required: false
      },
      {
        name: 'allowClear',
        type: 'boolean',
        default: 'true',
        description: 'Whether clicking the same star clears the rating',
        required: false
      }
    ],
    events: [
      {
        name: 'change',
        type: 'EventEmitter<number>',
        description: 'Emitted when the rating value changes'
      }
    ],
    usage: 'Use rating components for collecting user feedback, product reviews, service ratings, and displaying quality scores.',
    tags: ['form', 'rating', 'feedback', 'review', 'interactive']
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
    description: 'Button group selection component for choosing between multiple options',
    examples: [
      {
        name: 'Basic Select Button',
        code: '<sui-select-button [options]="options" [(ngModel)]="selectedValue"></sui-select-button>',
        description: 'Simple button group for single selection'
      },
      {
        name: 'Multiple Selection',
        code: '<sui-select-button [options]="options" [(ngModel)]="selectedValues" [multiple]="true"></sui-select-button>',
        description: 'Allow selecting multiple options'
      },
      {
        name: 'Size Variants',
        code: '<sui-select-button size="small" [options]="options" [(ngModel)]="value1"></sui-select-button>\n<sui-select-button size="medium" [options]="options" [(ngModel)]="value2"></sui-select-button>\n<sui-select-button size="large" [options]="options" [(ngModel)]="value3"></sui-select-button>',
        description: 'Button groups in different sizes'
      },
      {
        name: 'Disabled State',
        code: '<sui-select-button [disabled]="true" [options]="options" [value]="selectedValue"></sui-select-button>',
        description: 'Disabled button group'
      }
    ],
    props: [
      {
        name: 'options',
        type: 'any[]',
        default: '[]',
        description: 'Array of options to display',
        required: true
      },
      {
        name: 'value',
        type: 'any',
        default: 'null',
        description: 'Selected value(s)',
        required: false
      },
      {
        name: 'multiple',
        type: 'boolean',
        default: 'false',
        description: 'Whether multiple selection is allowed',
        required: false
      },
      {
        name: 'size',
        type: 'string',
        default: 'medium',
        description: 'Size of the buttons (small, medium, large)',
        required: false
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the component is disabled',
        required: false
      }
    ],
    events: [
      {
        name: 'onChange',
        type: 'EventEmitter<any>',
        description: 'Emitted when the selection changes'
      }
    ],
    usage: 'Use select buttons for choosing between a small set of mutually exclusive or multiple options in forms and filters.',
    tags: ['form', 'selection', 'button', 'toggle', 'interactive']
  },
  {
    id: 'toggle-switch',
    name: 'Toggle Switch',
    category: 'Foundation',
    description: 'Toggle switch component for binary on/off states',
    examples: [
      {
        name: 'Basic Toggle',
        code: '<sui-toggle-switch [(ngModel)]="isEnabled"></sui-toggle-switch>',
        description: 'Simple on/off toggle switch'
      },
      {
        name: 'With Labels',
        code: '<sui-toggle-switch [(ngModel)]="isEnabled" onLabel="On" offLabel="Off"></sui-toggle-switch>',
        description: 'Toggle with custom on/off labels'
      },
      {
        name: 'Size Variants',
        code: '<sui-toggle-switch size="small" [(ngModel)]="value1"></sui-toggle-switch>\n<sui-toggle-switch size="medium" [(ngModel)]="value2"></sui-toggle-switch>\n<sui-toggle-switch size="large" [(ngModel)]="value3"></sui-toggle-switch>',
        description: 'Toggle switches in different sizes'
      },
      {
        name: 'Disabled State',
        code: '<sui-toggle-switch [disabled]="true" [value]="true"></sui-toggle-switch>',
        description: 'Disabled toggle switch'
      },
      {
        name: 'Color Variants',
        code: '<sui-toggle-switch color="primary" [(ngModel)]="value1"></sui-toggle-switch>\n<sui-toggle-switch color="success" [(ngModel)]="value2"></sui-toggle-switch>\n<sui-toggle-switch color="danger" [(ngModel)]="value3"></sui-toggle-switch>',
        description: 'Toggle switches with different colors'
      }
    ],
    props: [
      {
        name: 'value',
        type: 'boolean',
        default: 'false',
        description: 'Current toggle state',
        required: false
      },
      {
        name: 'size',
        type: 'string',
        default: 'medium',
        description: 'Size of the toggle (small, medium, large)',
        required: false
      },
      {
        name: 'color',
        type: 'string',
        default: 'primary',
        description: 'Color theme for the toggle',
        required: false
      },
      {
        name: 'onLabel',
        type: 'string',
        default: '""',
        description: 'Label to show when toggle is on',
        required: false
      },
      {
        name: 'offLabel',
        type: 'string',
        default: '""',
        description: 'Label to show when toggle is off',
        required: false
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the toggle is disabled',
        required: false
      }
    ],
    events: [
      {
        name: 'onChange',
        type: 'EventEmitter<boolean>',
        description: 'Emitted when the toggle state changes'
      }
    ],
    usage: 'Use toggle switches for binary on/off settings, feature toggles, preferences, and any scenario requiring clear state indication.',
    tags: ['form', 'input', 'toggle', 'switch', 'binary', 'interactive']
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
  {
        id: 'breadcrumb',
        name: 'Breadcrumb',
        category: 'Foundation',
        description: 'Navigation breadcrumb component for showing current page hierarchy',
        examples: [
          {
            name: 'Basic Breadcrumb',
            code: '<sui-breadcrumb \n  [model]="[\n    { label: \'Home\', url: \'#\' },\n    { label: \'Products\', url: \'#\' },\n    { label: \'Electronics\', url: \'#\' },\n    { label: \'Smartphones\' }\n  ]"\n  [home]="{ label: \'Home\', url: \'#\' }"\n  (onItemClick)="onItemClick($event)">\n</sui-breadcrumb>',
            tsCode: `export class BreadcrumbComponent {
    onItemClick(event: any): void {
      console.log('Breadcrumb item clicked:', event);
    }
  }`,
            description: 'Basic breadcrumb navigation showing page hierarchy'
          },
          {
            name: 'With Icons',
            code: '<sui-breadcrumb \n  [model]="[\n    { label: \'Dashboard\', url: \'#\', icon: \'📊\' },\n    { label: \'Projects\', url: \'#\', icon: \'📁\' },\n    { label: \'Current Project\', icon: \'⚡\' }\n  ]"\n  [home]="{ label: \'🏠 Home\', url: \'#\' }"\n  (onItemClick)="onItemClick($event)">\n</sui-breadcrumb>',
            description: 'Breadcrumb with icons for better visual representation'
          },
          {
            name: 'With Disabled Items',
            code: '<sui-breadcrumb \n  [model]="[\n    { label: \'Home\', url: \'#\' },\n    { label: \'Admin Panel\', disabled: true },\n    { label: \'Settings\', url: \'#\' },\n    { label: \'User Management\' }\n  ]"\n  [home]="{ label: \'Home\', url: \'#\' }"\n  (onItemClick)="onItemClick($event)">\n</sui-breadcrumb>',
            description: 'Breadcrumb with disabled items to prevent navigation'
          },
          {
            name: 'With Commands',
            code: '<sui-breadcrumb \n  [model]="[\n    { label: \'Home\', command: () => navigateToHome() },\n    { label: \'Products\', command: () => navigateToProducts() },\n    { label: \'Category\', command: () => navigateToCategory() },\n    { label: \'Current Item\' }\n  ]"\n  [home]="{ label: \'Home\', command: () => navigateToHome() }"\n  (onItemClick)="onItemClick($event)">\n</sui-breadcrumb>',
            tsCode: `export class BreadcrumbComponent {
    navigateToHome(): void {
      console.log('Navigating to Home');
    }
    
    navigateToProducts(): void {
      console.log('Navigating to Products');
    }
    
    navigateToCategory(): void {
      console.log('Navigating to Category');
    }
    
    onItemClick(event: any): void {
      console.log('Breadcrumb item clicked:', event);
    }
  }`,
            description: 'Breadcrumb items with custom command functions'
          },
          {
            name: 'Custom Home Item',
            code: '<sui-breadcrumb \n  [model]="breadcrumbItems"\n  [home]="{ label: \'🏠 Dashboard\', url: \'#\', icon: \'🏠\' }"\n  (onItemClick)="onItemClick($event)">\n</sui-breadcrumb>',
            description: 'Custom home item with different label and icon'
          },
          {
            name: 'Custom Styling',
            code: '<sui-breadcrumb \n  [model]="breadcrumbItems"\n  [home]="{ label: \'🏠 Home\', url: \'#\' }"\n  styleClass="custom-breadcrumb"\n  [style]="{\n    \'--breadcrumb-text\': \'#8b5cf6\',\n    \'--breadcrumb-link-hover\': \'#7c3aed\',\n    \'--breadcrumb-separator-color\': \'#a78bfa\'\n  }"\n  (onItemClick)="onItemClick($event)">\n</sui-breadcrumb>',
            description: 'Custom styled breadcrumb with CSS variables'
          }
        ],
        props: [
          {
            name: 'model',
            type: 'Array<BreadcrumbItem>',
            default: '[]',
            description: 'Array of breadcrumb items to display',
            required: false
          },
          {
            name: 'home',
            type: 'BreadcrumbItem',
            default: '{ label: "Home", icon: "🏠" }',
            description: 'Home item configuration',
            required: false
          },
          {
            name: 'style',
            type: 'object',
            default: '{}',
            description: 'Inline styles for the breadcrumb',
            required: false
          },
          {
            name: 'styleClass',
            type: 'string',
            default: '""',
            description: 'CSS class names for custom styling',
            required: false
          }
        ],
        events: [
          {
            name: 'onItemClick',
            type: 'EventEmitter<{item: BreadcrumbItem, index: number}>',
            description: 'Emitted when a breadcrumb item is clicked'
          }
        ],
        usage: 'Use breadcrumbs to show users their current location within a website or application hierarchy. They provide a clear path from the current page back to the home page and help users understand the site structure. Perfect for e-commerce sites, documentation, file systems, and any multi-level navigation structure.',
        tags: ['breadcrumb', 'navigation', 'hierarchy', 'path', 'location', 'navigation']
      },
  {
        id: 'color-picker',
        name: 'Color Picker',
        category: 'Foundation',
        description: 'Interactive color picker component for selecting colors with preset options',
        examples: [
          {
            name: 'Basic Color Picker',
            code: '<sui-color-picker \n  [(ngModel)]="selectedColor"\n  (onChange)="onColorChange($event)"\n  (onSelect)="onColorSelect($event)">\n</sui-color-picker>',
            tsCode: `export class ColorPickerComponent {
    selectedColor = '#3b82f6';
    
    onColorChange(color: string): void {
      console.log('Color changed to:', color);
    }
    
    onColorSelect(color: string): void {
      console.log('Color selected:', color);
    }
  }`,
            description: 'Basic color picker with default styling and preset colors'
          },
          {
            name: 'Size Variants',
            code: '<sui-color-picker size="small" [(ngModel)]="color1"></sui-color-picker>\n<sui-color-picker size="medium" [(ngModel)]="color2"></sui-color-picker>\n<sui-color-picker size="large" [(ngModel)]="color3"></sui-color-picker>',
            description: 'Color pickers in different sizes: small, medium, and large'
          },
          {
            name: 'Disabled State',
            code: '<sui-color-picker \n  [disabled]="true"\n  [(ngModel)]="selectedColor">\n</sui-color-picker>',
            description: 'Color picker in disabled state - cannot be interacted with'
          },
          {
            name: 'Inline Mode',
            code: '<sui-color-picker \n  [inline]="true"\n  [(ngModel)]="selectedColor"\n  (onChange)="onColorChange($event)">\n</sui-color-picker>',
            description: 'Color picker displayed inline without a dropdown panel'
          },
          {
            name: 'Custom Styling',
            code: '<sui-color-picker \n  [(ngModel)]="selectedColor"\n  styleClass="custom-color-picker"\n  [style]="{\n    \'--color-picker-border\': \'#ec4899\',\n    \'--color-picker-border-hover\': \'#be185d\',\n    \'--color-picker-shadow-focus\': \'0 0 0 3px rgba(236, 72, 153, 0.1)\'\n  }"\n  (onChange)="onColorChange($event)">\n</sui-color-picker>',
            description: 'Color picker with custom styling using CSS variables'
          },
          {
            name: 'Form Integration',
            code: '<form>\n  <div class="form-group">\n    <label>Brand Color</label>\n    <sui-color-picker \n      [(ngModel)]="brandColor"\n      name="brandColor"\n      required>\n    </sui-color-picker>\n  </div>\n</form>',
            tsCode: `export class ColorPickerComponent {
    brandColor = '#3b82f6';
    
    saveColors(): void {
      console.log('Brand color:', this.brandColor);
    }
  }`,
            description: 'Color picker integrated with Angular forms for validation'
          }
        ],
        props: [
          {
            name: 'value',
            type: 'string',
            default: '#000000',
            description: 'The selected color value in hex format',
            required: false
          },
          {
            name: 'format',
            type: 'string',
            default: 'hex',
            description: 'Color format: hex, rgb, or hsl',
            required: false
          },
          {
            name: 'inline',
            type: 'boolean',
            default: 'false',
            description: 'Whether to display the color picker inline',
            required: false
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Whether the color picker is disabled',
            required: false
          },
          {
            name: 'size',
            type: 'string',
            default: 'medium',
            description: 'Size of the color picker: small, medium, or large',
            required: false
          },
          {
            name: 'style',
            type: 'object',
            default: '{}',
            description: 'Inline styles for the color picker',
            required: false
          },
          {
            name: 'styleClass',
            type: 'string',
            default: '""',
            description: 'CSS class names for custom styling',
            required: false
          }
        ],
        events: [
          {
            name: 'onChange',
            type: 'EventEmitter<string>',
            description: 'Emitted when the color value changes'
          },
          {
            name: 'onSelect',
            type: 'EventEmitter<string>',
            description: 'Emitted when a color is selected'
          }
        ],
        usage: 'Use color pickers to allow users to select colors for themes, branding, customizations, or any color-based input. Perfect for design tools, theme builders, form inputs, and any application that requires color selection. The component supports multiple formats, sizes, and can be integrated with Angular forms.',
        tags: ['color', 'picker', 'input', 'form', 'theme', 'design']
      },
      {
        id: 'editor',
        name: 'Editor',
        category: 'Foundation',
        description: 'Rich text editor with full formatting capabilities and toolbar',
        examples: [
          {
            name: 'Basic Editor',
            code: '<sui-editor [value]="content" [height]="\'200px\'" [showToolbar]="true" placeholder="Start typing..."></sui-editor>',
            description: 'Standard rich text editor with toolbar'
          },
          {
            name: 'Size Variants',
            code: '<sui-editor [height]="\'150px\'"></sui-editor>\n<sui-editor [height]="\'300px\'"></sui-editor>',
            description: 'Different height variants for various use cases'
          },
          {
            name: 'Disabled State',
            code: '<sui-editor [disabled]="true" [value]="content"></sui-editor>',
            description: 'Editor in disabled state'
          },
          {
            name: 'Readonly State',
            code: '<sui-editor [readonly]="true" [showToolbar]="false" [value]="content"></sui-editor>',
            description: 'Editor in readonly mode without toolbar'
          },
          {
            name: 'Dark Theme',
            code: '<sui-editor [theme]="\'dark\'" [value]="content"></sui-editor>',
            description: 'Editor with dark theme'
          },
          {
            name: 'Custom Styling',
            code: '<sui-editor [styleClass]="\'custom-editor\'" [value]="content"></sui-editor>',
            description: 'Editor with custom CSS variables'
          },
          {
            name: 'Form Integration',
            code: '<sui-editor [value]="formContent" (onChange)="onContentChange($event)"></sui-editor>',
            description: 'Editor integrated with Angular forms'
          },
          {
            name: 'Minimal Toolbar',
            code: '<sui-editor [showToolbar]="false" [value]="content"></sui-editor>',
            description: 'Editor without toolbar for simple use cases'
          }
        ],
        props: [
          {
            name: 'value',
            type: 'string',
            default: '',
            description: 'The content of the editor',
            required: false
          },
          {
            name: 'placeholder',
            type: 'string',
            default: 'Enter text...',
            description: 'Placeholder text when editor is empty',
            required: false
          },
          {
            name: 'height',
            type: 'string',
            default: '200px',
            description: 'Height of the editor',
            required: false
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Whether the editor is disabled',
            required: false
          },
          {
            name: 'readonly',
            type: 'boolean',
            default: 'false',
            description: 'Whether the editor is in readonly mode',
            required: false
          },
          {
            name: 'showToolbar',
            type: 'boolean',
            default: 'true',
            description: 'Whether to show the formatting toolbar',
            required: false
          },
          {
            name: 'theme',
            type: 'string',
            default: 'light',
            description: 'Theme of the editor (light, dark)',
            required: false
          },
          {
            name: 'styleClass',
            type: 'string',
            default: '',
            description: 'Additional CSS classes for custom styling',
            required: false
          },
          {
            name: 'style',
            type: 'object',
            default: '{}',
            description: 'Inline styles for the editor',
            required: false
          }
        ],
        events: [
          {
            name: 'onChange',
            type: 'string',
            description: 'Emitted when the content changes'
          },
          {
            name: 'onFocus',
            type: 'void',
            description: 'Emitted when the editor gains focus'
          },
          {
            name: 'onBlur',
            type: 'void',
            description: 'Emitted when the editor loses focus'
          }
        ],
        usage: 'Use the Editor component for rich text editing with formatting capabilities. It supports bold, italic, underline, lists, headings, links, and more. Perfect for content creation, comments, and any text input that needs formatting.',
        tags: ['editor', 'rich-text', 'formatting', 'toolbar', 'content', 'form', 'input']
      },
      {
        id: 'knob',
        name: 'Knob',
        category: 'Foundation',
        description: 'Circular knob control for precise value adjustment with visual feedback',
        examples: [
          {
            name: 'Basic Knob',
            code: '<sui-knob\n  [value]="basicValue"\n  [min]="0"\n  [max]="100"\n  [step]="1"\n  [size]="100"\n  [strokeWidth]="14"\n  [showValue]="true"\n  [showTicks]="true"\n  [tickCount]="12"\n  label="Volume"\n  unit="%"\n  (onChange)="onValueChange($event)"\n></sui-knob>',
            tsCode: `export class KnobComponent {
  basicValue = 50;

  onValueChange(value: number): void {
    console.log('Value changed:', value);
    this.basicValue = value;
  }

  resetValue(): void {
    this.basicValue = 50;
  }

  setRandomValue(): void {
    this.basicValue = Math.floor(Math.random() * 101);
  }
}`,
            description: 'Standard knob control with value display'
          },
          {
            name: 'Size Variants',
            code: '<sui-knob [value]="smallValue" [size]="80"></sui-knob>\n<sui-knob [value]="mediumValue" [size]="120"></sui-knob>\n<sui-knob [value]="largeValue" [size]="160"></sui-knob>',
            tsCode: `export class KnobComponent {
  smallValue = 25;
  mediumValue = 75;
  largeValue = 60;
}`,
            description: 'Different size variants for various use cases'
          },
          {
            name: 'Disabled State',
            code: '<sui-knob\n  [value]="disabledValue"\n  [disabled]="true"\n  [size]="100"\n  [showValue]="true"\n  [showTicks]="true"\n  label="Disabled"\n></sui-knob>',
            tsCode: `export class KnobComponent {
  disabledValue = 30;
}`,
            description: 'Knob in disabled state'
          },
          {
            name: 'Readonly State',
            code: '<sui-knob\n  [value]="readonlyValue"\n  [readonly]="true"\n  [size]="100"\n  [showValue]="true"\n  [showTicks]="true"\n  label="Readonly"\n></sui-knob>',
            tsCode: `export class KnobComponent {
  readonlyValue = 80;
}`,
            description: 'Knob in readonly mode'
          },
          {
            name: 'Custom Range',
            code: '<sui-knob\n  [value]="customValue"\n  [min]="customMin"\n  [max]="customMax"\n  [step]="customStep"\n  [size]="120"\n  [strokeWidth]="16"\n  [showValue]="true"\n  [showTicks]="true"\n  [tickCount]="10"\n  label="Custom Range"\n  unit="pts"\n></sui-knob>',
            tsCode: `export class KnobComponent {
  customValue = 45;
  customMin = 0;
  customMax = 200;
  customStep = 5;
}`,
            description: 'Knob with custom minimum, maximum, and step values'
          },
          {
            name: 'Color Variants',
            code: '<sui-knob\n  [value]="redValue"\n  [size]="100"\n  [style]="getCustomColorStyle(\'#ef4444\')"\n  [showValue]="true"\n  [showTicks]="true"\n  label="Red"\n></sui-knob>',
            tsCode: `export class KnobComponent {
  redValue = 40;
  greenValue = 70;
  yellowValue = 85;
  purpleValue = 55;

  getCustomColorStyle(color: string): any {
    return {
      '--sui-knob-primary': color,
      '--sui-knob-primary-hover': this.darkenColor(color, 0.2)
    };
  }

  private darkenColor(color: string, amount: number): string {
    const colors: { [key: string]: string } = {
      '#ef4444': '#dc2626',
      '#10b981': '#059669',
      '#f59e0b': '#d97706',
      '#8b5cf6': '#7c3aed'
    };
    return colors[color] || color;
  }
}`,
            description: 'Knob with custom color themes'
          },
          {
            name: 'Form Integration',
            code: '<sui-knob\n  [value]="formValue"\n  [size]="120"\n  [strokeWidth]="16"\n  [showValue]="true"\n  [showTicks]="true"\n  [tickCount]="10"\n  label="Form Control"\n  unit="%"\n  (onChange)="onFormValueChange()"\n></sui-knob>',
            tsCode: `export class KnobComponent {
  formValue = 65;
  formValid = true;

  onFormValueChange(): void {
    this.validateForm();
  }

  validateForm(): void {
    this.formValid = this.formValue >= 0 && this.formValue <= 100;
  }
}`,
            description: 'Knob integrated with Angular forms'
          },
          {
            name: 'Minimal Display',
            code: '<sui-knob\n  [value]="basicValue"\n  [size]="100"\n  [strokeWidth]="12"\n  [showValue]="false"\n  [showTicks]="false"\n  label="Minimal"\n></sui-knob>',
            tsCode: `export class KnobComponent {
  basicValue = 50;
}`,
            description: 'Knob with minimal visual elements'
          }
        ],
        props: [
          {
            name: 'value',
            type: 'number',
            default: '0',
            description: 'The current value of the knob',
            required: false
          },
          {
            name: 'min',
            type: 'number',
            default: '0',
            description: 'Minimum value of the knob',
            required: false
          },
          {
            name: 'max',
            type: 'number',
            default: '100',
            description: 'Maximum value of the knob',
            required: false
          },
          {
            name: 'step',
            type: 'number',
            default: '1',
            description: 'Step size for value changes',
            required: false
          },
          {
            name: 'size',
            type: 'number',
            default: '100',
            description: 'Size of the knob in pixels',
            required: false
          },
          {
            name: 'strokeWidth',
            type: 'number',
            default: '14',
            description: 'Width of the progress stroke',
            required: false
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Whether the knob is disabled',
            required: false
          },
          {
            name: 'readonly',
            type: 'boolean',
            default: 'false',
            description: 'Whether the knob is in readonly mode',
            required: false
          },
          {
            name: 'showValue',
            type: 'boolean',
            default: 'true',
            description: 'Whether to show the value in the center',
            required: false
          },
          {
            name: 'showTicks',
            type: 'boolean',
            default: 'true',
            description: 'Whether to show tick marks',
            required: false
          },
          {
            name: 'tickCount',
            type: 'number',
            default: '12',
            description: 'Number of tick marks to display',
            required: false
          },
          {
            name: 'label',
            type: 'string',
            default: '',
            description: 'Label text below the knob',
            required: false
          },
          {
            name: 'unit',
            type: 'string',
            default: '',
            description: 'Unit text displayed with the value',
            required: false
          },
          {
            name: 'styleClass',
            type: 'string',
            default: '',
            description: 'Additional CSS classes for custom styling',
            required: false
          },
          {
            name: 'style',
            type: 'object',
            default: '{}',
            description: 'Inline styles for the knob',
            required: false
          }
        ],
        events: [
          {
            name: 'onChange',
            type: 'number',
            description: 'Emitted when the value changes'
          }
        ],
        usage: 'Use the Knob component for precise value adjustment in a circular interface. Perfect for volume controls, settings panels, data visualization, and any application requiring smooth value input with visual feedback.',
        tags: ['knob', 'control', 'circular', 'value', 'input', 'interactive', 'visual']
      },
];
