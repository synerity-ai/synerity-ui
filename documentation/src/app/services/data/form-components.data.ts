import { ComponentModel } from '../../models/component.model';

export const formComponents: ComponentModel[] = [
  {
        id: 'auto-complete',
        name: 'Auto Complete',
        category: 'Form',
        description: 'Auto complete input component with dropdown suggestions and keyboard navigation',
        examples: [
          {
            name: 'Basic',
            code: '<sui-auto-complete\n  [(ngModel)]="value"\n  [options]="[\'Apple\', \'Banana\', \'Cherry\']"\n  placeholder="Select a fruit...">\n</sui-auto-complete>',
            tsCode: `export class AutoCompleteComponent {
    basicValue = '';
    
    // String array options
    basicOptions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];
    
    onBasicChange(value: any): void {
      console.log('Basic value changed:', value);
    }
  }`,
            description: 'Basic auto complete with string array options'
          },
          {
            name: 'Object Options',
            code: '<sui-auto-complete\n  [(ngModel)]="value"\n  [options]="[{label: \'USA\', value: \'us\'}, {label: \'UK\', value: \'uk\'}]"\n  placeholder="Select a country...">\n</sui-auto-complete>',
            tsCode: `interface CountryOption {
    label: string;
    value: string;
  }
  
  export class AutoCompleteComponent {
    objectValue: any = null;
    
    // Object array options with label/value pairs
    objectOptions: CountryOption[] = [
      { label: 'United States', value: 'US' },
      { label: 'United Kingdom', value: 'UK' },
      { label: 'Canada', value: 'CA' },
      { label: 'Australia', value: 'AU' },
      { label: 'Germany', value: 'DE' },
      { label: 'France', value: 'FR' },
      { label: 'Japan', value: 'JP' },
      { label: 'China', value: 'CN' }
    ];
    
    onObjectChange(value: any): void {
      console.log('Object value changed:', value);
    }
  }`,
            description: 'Auto complete with object options containing label and value'
          },
          {
            name: 'Disabled',
            code: '<sui-auto-complete\n  [(ngModel)]="value"\n  [options]="[\'Option 1\', \'Option 2\']"\n  [disabled]="true"\n  placeholder="This is disabled">\n</sui-auto-complete>',
            tsCode: `export class AutoCompleteComponent {
    disabledValue = 'Disabled Value';
    
    // Disabled auto complete options
    disabledOptions = ['Option 1', 'Option 2', 'Option 3'];
  }`,
            description: 'Auto complete in disabled state'
          },
          {
            name: 'With Placeholder',
            code: '<sui-auto-complete\n  [(ngModel)]="value"\n  [options]="[\'New York\', \'Los Angeles\', \'Chicago\']"\n  placeholder="Search for your city...">\n</sui-auto-complete>',
            tsCode: `export class AutoCompleteComponent {
    placeholderValue = '';
    
    // City options with placeholder
    placeholderOptions = [
      'Search for a city...', 'New York', 'Los Angeles', 'Chicago', 
      'Houston', 'Phoenix', 'Philadelphia'
    ];
  }`,
            description: 'Auto complete with custom placeholder text'
          },
          {
            name: 'Minimum Length',
            code: '<sui-auto-complete\n  [(ngModel)]="value"\n  [options]="[\'Alpha\', \'Beta\', \'Gamma\']"\n  [minLength]="2"\n  placeholder="Type at least 2 characters...">\n</sui-auto-complete>',
            tsCode: `export class AutoCompleteComponent {
    minLengthValue = '';
    
    // Options for minimum length example
    minLengthOptions = [
      'Type at least 2 characters', 'Alpha', 'Beta', 'Gamma', 
      'Delta', 'Epsilon', 'Zeta', 'Eta'
    ];
  }`,
            description: 'Auto complete that requires minimum characters to show suggestions'
          },
          {
            name: 'With Clear Button',
            code: '<sui-auto-complete\n  [(ngModel)]="value"\n  [options]="[\'Option A\', \'Option B\', \'Option C\']"\n  placeholder="Type to search...">\n</sui-auto-complete>',
            tsCode: `export class AutoCompleteComponent {
    clearValue = '';
    
    // Options for clear button example
    clearOptions = ['Clear me', 'Option A', 'Option B', 'Option C'];
    
    onClearChange(value: any): void {
      console.log('Clear value changed:', value);
    }
    
    // Clear button appears automatically when value is not empty
  }`,
            description: 'Auto complete with clear button functionality'
          }
        ],
        props: [
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Whether the auto complete is disabled',
            required: false
          },
          {
            name: 'name',
            type: 'string',
            default: '""',
            description: 'Name attribute for the input',
            required: false
          },
          {
            name: 'inputId',
            type: 'string',
            default: '""',
            description: 'ID attribute for the input',
            required: false
          },
          {
            name: 'placeholder',
            type: 'string',
            default: '""',
            description: 'Placeholder text for the input',
            required: false
          },
          {
            name: 'minLength',
            type: 'number',
            default: '1',
            description: 'Minimum number of characters required to show suggestions',
            required: false
          },
          {
            name: 'options',
            type: 'Array<string | {label: string, value: unknown}>',
            default: '[]',
            description: 'Array of options for the auto complete',
            required: true
          }
        ],
        usage: 'Use auto complete for input fields where users need to select from a predefined list of options. Supports both string arrays and object arrays with label/value pairs.',
        tags: ['form', 'input', 'dropdown', 'autocomplete', 'search', 'selection']
      },
  {
        id: 'rating',
        name: 'Rating',
        category: 'Form',
        description: 'Interactive rating component with customizable stars, colors, animations, and accessibility features',
        examples: [
          {
            name: 'Basic Rating',
            code: '<sui-rating\n  [(ngModel)]="rating"\n  [max]="5"\n  [allowClear]="true">\n</sui-rating>',
            description: 'Simple 5-star rating component'
          },
          {
            name: 'Size Variations',
            code: '<div class="space-y-4">\n  <sui-rating [(ngModel)]="rating" size="small" [max]="5"></sui-rating>\n  <sui-rating [(ngModel)]="rating" size="medium" [max]="5"></sui-rating>\n  <sui-rating [(ngModel)]="rating" size="large" [max]="5"></sui-rating>\n</div>',
            description: 'Rating components in different sizes'
          },
          {
            name: 'Color Themes',
            code: '<div class="space-y-4">\n  <sui-rating [(ngModel)]="rating" color="default" [max]="5"></sui-rating>\n  <sui-rating [(ngModel)]="rating" color="primary" [max]="5"></sui-rating>\n  <sui-rating [(ngModel)]="rating" color="success" [max]="5"></sui-rating>\n  <sui-rating [(ngModel)]="rating" color="warning" [max]="5"></sui-rating>\n  <sui-rating [(ngModel)]="rating" color="danger" [max]="5"></sui-rating>\n</div>',
            description: 'Rating components with different color themes'
          },
          {
            name: 'Animation Effects',
            code: '<div class="space-y-4">\n  <sui-rating [(ngModel)]="rating" [animate]="true" [max]="5"></sui-rating>\n  <sui-rating [(ngModel)]="rating" [bounce]="true" [max]="5"></sui-rating>\n  <sui-rating [(ngModel)]="rating" [glow]="true" [max]="5"></sui-rating>\n</div>',
            description: 'Rating components with various animation effects'
          },
          {
            name: 'Layout Options',
            code: '<div class="space-y-4">\n  <sui-rating [(ngModel)]="rating" [showValue]="true" [max]="5"></sui-rating>\n  <sui-rating [(ngModel)]="rating" [compact]="true" [max]="5"></sui-rating>\n  <sui-rating [(ngModel)]="rating" [spacious]="true" [max]="5"></sui-rating>\n</div>',
            description: 'Rating components with different layout options'
          },
          {
            name: 'State Examples',
            code: '<div class="space-y-4">\n  <sui-rating [(ngModel)]="rating" [max]="5"></sui-rating>\n  <sui-rating [(ngModel)]="rating" [readonly]="true" [max]="5"></sui-rating>\n  <sui-rating [(ngModel)]="rating" [disabled]="true" [max]="5"></sui-rating>\n</div>',
            description: 'Rating components in different states'
          },
          {
            name: 'Product Review',
            code: '<div class="product-review">\n  <h3>Rate this product</h3>\n  <sui-rating\n    [(ngModel)]="productRating"\n    [max]="5"\n    [showValue]="true"\n    [animate]="true"\n    color="primary"\n    size="large">\n  </sui-rating>\n  <p class="rating-text">{{ getRatingText(productRating) }}</p>\n</div>',
            description: 'Product rating with enhanced features'
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
            description: 'Maximum number of stars',
            required: false
          },
          {
            name: 'size',
            type: "'small' | 'medium' | 'large'",
            default: "'medium'",
            description: 'Size of the rating component',
            required: false
          },
          {
            name: 'theme',
            type: "'light' | 'dark'",
            default: "'light'",
            description: 'Theme variant',
            required: false
          },
          {
            name: 'color',
            type: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink'",
            default: "'default'",
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
            name: 'allowClear',
            type: 'boolean',
            default: 'true',
            description: 'Whether clicking the same star clears the rating',
            required: false
          },
          {
            name: 'showValue',
            type: 'boolean',
            default: 'false',
            description: 'Whether to display the current value',
            required: false
          },
          {
            name: 'animate',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show pulse animation on hover',
            required: false
          },
          {
            name: 'bounce',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show bounce animation on hover',
            required: false
          },
          {
            name: 'glow',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show glow effect on filled stars',
            required: false
          },
          {
            name: 'compact',
            type: 'boolean',
            default: 'false',
            description: 'Whether to use compact spacing',
            required: false
          },
          {
            name: 'spacious',
            type: 'boolean',
            default: 'false',
            description: 'Whether to use spacious spacing',
            required: false
          },
          {
            name: 'ariaLabel',
            type: 'string',
            default: "'Rating'",
            description: 'Accessibility label for the rating',
            required: false
          },
          {
            name: 'ariaDescribedBy',
            type: 'string | null',
            default: 'null',
            description: 'ID of element that describes the rating',
            required: false
          }
        ],
        events: [
          {
            name: 'change',
            type: 'EventEmitter<number>',
            description: 'Emitted when the rating value changes'
          },
          {
            name: 'onRate',
            type: 'EventEmitter<number>',
            description: 'Emitted when a star is clicked'
          }
        ],
        usage: 'Use rating components for user feedback, product reviews, service ratings, and any scenario where you need to collect numerical ratings. Supports keyboard navigation and accessibility features.',
        tags: ['rating', 'form', 'input', 'stars', 'feedback', 'review', 'interactive']
      },
      {
        id: 'toggle-switch',
        name: 'Toggle Switch',
        category: 'Form',
        description: 'Interactive toggle switch component with customizable appearance, animations, and accessibility features',
        examples: [
          {
            name: 'Basic Toggle Switch',
            code: '<sui-toggle-switch\n  [(ngModel)]="enabled"\n  [label]="\'Enable Feature\'">\n</sui-toggle-switch>',
            description: 'Simple toggle switch component'
          },
          {
            name: 'Size Variations',
            code: '<div class="space-y-4">\n  <sui-toggle-switch [(ngModel)]="enabled" size="small" [label]="\'Small\'"></sui-toggle-switch>\n  <sui-toggle-switch [(ngModel)]="enabled" size="medium" [label]="\'Medium\'"></sui-toggle-switch>\n  <sui-toggle-switch [(ngModel)]="enabled" size="large" [label]="\'Large\'"></sui-toggle-switch>\n</div>',
            description: 'Toggle switch components in different sizes'
          },
          {
            name: 'Color Themes',
            code: '<div class="space-y-4">\n  <sui-toggle-switch [(ngModel)]="enabled" color="default" [label]="\'Default\'"></sui-toggle-switch>\n  <sui-toggle-switch [(ngModel)]="enabled" color="primary" [label]="\'Primary\'"></sui-toggle-switch>\n  <sui-toggle-switch [(ngModel)]="enabled" color="success" [label]="\'Success\'"></sui-toggle-switch>\n  <sui-toggle-switch [(ngModel)]="enabled" color="warning" [label]="\'Warning\'"></sui-toggle-switch>\n  <sui-toggle-switch [(ngModel)]="enabled" color="danger" [label]="\'Danger\'"></sui-toggle-switch>\n</div>',
            description: 'Toggle switch components with different color themes'
          },
          {
            name: 'Layout Options',
            code: '<div class="space-y-4">\n  <sui-toggle-switch [(ngModel)]="enabled" [showText]="true" [onText]="\'On\'" [offText]="\'Off\'" [label]="\'With Text\'"></sui-toggle-switch>\n  <sui-toggle-switch [(ngModel)]="enabled" [labelPosition]="\'left\'" [label]="\'Left Label\'"></sui-toggle-switch>\n  <sui-toggle-switch [(ngModel)]="enabled" [compact]="true" [label]="\'Compact\'"></sui-toggle-switch>\n  <sui-toggle-switch [(ngModel)]="enabled" [spacious]="true" [label]="\'Spacious\'"></sui-toggle-switch>\n</div>',
            description: 'Toggle switch components with different layout options'
          },
          {
            name: 'Animation Effects',
            code: '<div class="space-y-4">\n  <sui-toggle-switch [(ngModel)]="enabled" [animated]="true" [label]="\'Animated\'"></sui-toggle-switch>\n  <sui-toggle-switch [(ngModel)]="enabled" [bounce]="true" [label]="\'Bounce\'"></sui-toggle-switch>\n  <sui-toggle-switch [(ngModel)]="enabled" [glow]="true" [label]="\'Glow\'"></sui-toggle-switch>\n  <sui-toggle-switch [(ngModel)]="enabled" [animated]="true" [glow]="true" [label]="\'Animated + Glow\'"></sui-toggle-switch>\n</div>',
            description: 'Toggle switch components with various animation effects'
          },
          {
            name: 'State Examples',
            code: '<div class="space-y-4">\n  <sui-toggle-switch [(ngModel)]="enabled" [label]="\'Interactive\'"></sui-toggle-switch>\n  <sui-toggle-switch [(ngModel)]="enabled" [readonly]="true" [label]="\'Read-only\'"></sui-toggle-switch>\n  <sui-toggle-switch [(ngModel)]="enabled" [disabled]="true" [label]="\'Disabled\'"></sui-toggle-switch>\n  <sui-toggle-switch [(ngModel)]="enabled" [loading]="true" [label]="\'Loading\'"></sui-toggle-switch>\n</div>',
            description: 'Toggle switch components in different states'
          },
          {
            name: 'Settings Panel',
            code: '<div class="settings-panel">\n  <h3>App Settings</h3>\n  <sui-toggle-switch\n    [(ngModel)]="notifications"\n    [label]="\'Push Notifications\'"\n    [showText]="true"\n    [onText]="\'Enabled\'"\n    [offText]="\'Disabled\'"\n    [animated]="true"\n    color="primary">\n  </sui-toggle-switch>\n  <sui-toggle-switch\n    [(ngModel)]="darkMode"\n    [label]="\'Dark Mode\'"\n    [showText]="true"\n    [onText]="\'Dark\'"\n    [offText]="\'Light\'"\n    [animated]="true">\n  </sui-toggle-switch>\n</div>',
            description: 'Settings panel with multiple toggle switches'
          }
        ],
        props: [
          {
            name: 'checked',
            type: 'boolean',
            default: 'false',
            description: 'Current toggle state',
            required: false
          },
          {
            name: 'size',
            type: "'small' | 'medium' | 'large'",
            default: "'medium'",
            description: 'Size of the toggle switch component',
            required: false
          },
          {
            name: 'theme',
            type: "'light' | 'dark'",
            default: "'light'",
            description: 'Theme variant',
            required: false
          },
          {
            name: 'color',
            type: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink'",
            default: "'default'",
            description: 'Color theme for the toggle switch',
            required: false
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Whether the toggle switch is disabled',
            required: false
          },
          {
            name: 'readonly',
            type: 'boolean',
            default: 'false',
            description: 'Whether the toggle switch is read-only',
            required: false
          },
          {
            name: 'loading',
            type: 'boolean',
            default: 'false',
            description: 'Whether the toggle switch is in loading state',
            required: false
          },
          {
            name: 'showText',
            type: 'boolean',
            default: 'false',
            description: 'Whether to display text labels',
            required: false
          },
          {
            name: 'onText',
            type: 'string',
            default: "'On'",
            description: 'Text to display when toggle is on',
            required: false
          },
          {
            name: 'offText',
            type: 'string',
            default: "'Off'",
            description: 'Text to display when toggle is off',
            required: false
          },
          {
            name: 'label',
            type: 'string',
            default: "''",
            description: 'Label text for the toggle switch',
            required: false
          },
          {
            name: 'labelPosition',
            type: "'left' | 'right'",
            default: "'right'",
            description: 'Position of the label relative to the toggle',
            required: false
          },
          {
            name: 'compact',
            type: 'boolean',
            default: 'false',
            description: 'Whether to use compact spacing',
            required: false
          },
          {
            name: 'spacious',
            type: 'boolean',
            default: 'false',
            description: 'Whether to use spacious spacing',
            required: false
          },
          {
            name: 'animated',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show smooth animations',
            required: false
          },
          {
            name: 'bounce',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show bounce animation',
            required: false
          },
          {
            name: 'glow',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show glow effect when active',
            required: false
          },
          {
            name: 'ariaLabel',
            type: 'string',
            default: "'Toggle switch'",
            description: 'Accessibility label for the toggle switch',
            required: false
          },
          {
            name: 'ariaDescribedBy',
            type: 'string | null',
            default: 'null',
            description: 'ID of element that describes the toggle switch',
            required: false
          }
        ],
        events: [
          {
            name: 'change',
            type: 'EventEmitter<boolean>',
            description: 'Emitted when the toggle state changes'
          },
          {
            name: 'onToggle',
            type: 'EventEmitter<boolean>',
            description: 'Emitted when the toggle is clicked'
          }
        ],
        usage: 'Use toggle switch components for on/off settings, feature toggles, preferences, and any scenario where you need to switch between two states. Supports keyboard navigation and accessibility features.',
        tags: ['toggle', 'switch', 'form', 'input', 'control', 'interactive', 'accessibility', 'settings']
      },
      {
        id: 'chip',
        name: 'Chip',
        category: 'Form',
        description: 'Interactive chip component with customizable appearance, icons, images, and accessibility features',
        examples: [
          {
            name: 'Basic Chip',
            code: '<sui-chip [label]="\'Basic Chip\'"></sui-chip>',
            description: 'Simple chip component'
          },
          {
            name: 'Size Variations',
            code: '<div class="space-y-4">\n  <sui-chip [label]="\'Small\'" size="small"></sui-chip>\n  <sui-chip [label]="\'Medium\'" size="medium"></sui-chip>\n  <sui-chip [label]="\'Large\'" size="large"></sui-chip>\n</div>',
            description: 'Chip components in different sizes'
          },
          {
            name: 'Color Themes',
            code: '<div class="space-y-4">\n  <sui-chip [label]="\'Default\'" color="default"></sui-chip>\n  <sui-chip [label]="\'Primary\'" color="primary"></sui-chip>\n  <sui-chip [label]="\'Success\'" color="success"></sui-chip>\n  <sui-chip [label]="\'Warning\'" color="warning"></sui-chip>\n  <sui-chip [label]="\'Danger\'" color="danger"></sui-chip>\n</div>',
            description: 'Chip components with different color themes'
          },
          {
            name: 'Variant Styles',
            code: '<div class="space-y-4">\n  <sui-chip [label]="\'Default\'" variant="default" color="primary"></sui-chip>\n  <sui-chip [label]="\'Outline\'" variant="outline" color="primary"></sui-chip>\n  <sui-chip [label]="\'Filled\'" variant="filled" color="primary"></sui-chip>\n  <sui-chip [label]="\'Soft\'" variant="soft" color="primary"></sui-chip>\n</div>',
            description: 'Chip components with different visual variants'
          },
          {
            name: 'Interactive Features',
            code: '<div class="space-y-4">\n  <sui-chip [label]="\'Removable\'" [removable]="true"></sui-chip>\n  <sui-chip [label]="\'Clickable\'" [clickable]="true"></sui-chip>\n  <sui-chip [label]="\'With Icon\'" icon="👤" [removable]="true"></sui-chip>\n  <sui-chip [label]="\'With Image\'" [image]="\'avatar.jpg\'" [removable]="true"></sui-chip>\n</div>',
            description: 'Chip components with interactive features'
          },
          {
            name: 'Animation Effects',
            code: '<div class="space-y-4">\n  <sui-chip [label]="\'Animated\'" [animated]="true" [clickable]="true"></sui-chip>\n  <sui-chip [label]="\'Bounce\'" [bounce]="true" [clickable]="true"></sui-chip>\n  <sui-chip [label]="\'Glow\'" [glow]="true" [clickable]="true"></sui-chip>\n</div>',
            description: 'Chip components with various animation effects'
          },
          {
            name: 'Tag System',
            code: '<div class="tag-system">\n  <h3>Skills</h3>\n  <sui-chip [label]="\'JavaScript\'" color="primary" variant="soft" [removable]="true" [clickable]="true" size="small"></sui-chip>\n  <sui-chip [label]="\'React\'" color="success" variant="soft" [removable]="true" [clickable]="true" size="small"></sui-chip>\n  <sui-chip [label]="\'TypeScript\'" color="warning" variant="soft" [removable]="true" [clickable]="true" size="small"></sui-chip>\n</div>',
            description: 'Tag system for categorizing content or skills'
          }
        ],
        props: [
          {
            name: 'label',
            type: 'string',
            default: "''",
            description: 'Text content of the chip',
            required: false
          },
          {
            name: 'icon',
            type: 'string',
            default: "''",
            description: 'Icon or emoji to display in the chip',
            required: false
          },
          {
            name: 'image',
            type: 'string',
            default: "''",
            description: 'Image URL to display in the chip',
            required: false
          },
          {
            name: 'removable',
            type: 'boolean',
            default: 'false',
            description: 'Whether the chip can be removed',
            required: false
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Whether the chip is disabled',
            required: false
          },
          {
            name: 'clickable',
            type: 'boolean',
            default: 'false',
            description: 'Whether the chip is clickable',
            required: false
          },
          {
            name: 'size',
            type: "'small' | 'medium' | 'large'",
            default: "'medium'",
            description: 'Size of the chip component',
            required: false
          },
          {
            name: 'theme',
            type: "'light' | 'dark'",
            default: "'light'",
            description: 'Theme variant',
            required: false
          },
          {
            name: 'color',
            type: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink'",
            default: "'default'",
            description: 'Color theme for the chip',
            required: false
          },
          {
            name: 'variant',
            type: "'default' | 'outline' | 'filled' | 'soft'",
            default: "'default'",
            description: 'Visual variant of the chip',
            required: false
          },
          {
            name: 'compact',
            type: 'boolean',
            default: 'false',
            description: 'Whether to use compact spacing',
            required: false
          },
          {
            name: 'spacious',
            type: 'boolean',
            default: 'false',
            description: 'Whether to use spacious spacing',
            required: false
          },
          {
            name: 'rounded',
            type: 'boolean',
            default: 'false',
            description: 'Whether to use more rounded corners',
            required: false
          },
          {
            name: 'square',
            type: 'boolean',
            default: 'false',
            description: 'Whether to use square corners',
            required: false
          },
          {
            name: 'animated',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show smooth animations',
            required: false
          },
          {
            name: 'bounce',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show bounce animation on hover',
            required: false
          },
          {
            name: 'glow',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show glow effect on hover',
            required: false
          },
          {
            name: 'ariaLabel',
            type: 'string',
            default: "''",
            description: 'Accessibility label for the chip',
            required: false
          },
          {
            name: 'ariaDescribedBy',
            type: 'string | null',
            default: 'null',
            description: 'ID of element that describes the chip',
            required: false
          }
        ],
        events: [
          {
            name: 'onRemove',
            type: 'EventEmitter<void>',
            description: 'Emitted when the chip remove button is clicked'
          },
          {
            name: 'onClick',
            type: 'EventEmitter<void>',
            description: 'Emitted when the chip is clicked (if clickable)'
          }
        ],
        usage: 'Use chip components for tags, filters, user selections, categories, and any scenario where you need to display compact, interactive elements. Supports keyboard navigation and accessibility features.',
        tags: ['chip', 'tag', 'form', 'input', 'control', 'interactive', 'accessibility', 'filter', 'category']
      },
      {
        id: 'input-number',
        name: 'Input Number',
        category: 'Form',
        description: 'Interactive number input component with increment/decrement buttons, validation, and accessibility features',
        examples: [
          {
            name: 'Basic Input Number',
            code: '<sui-input-number\n  [(ngModel)]="quantity"\n  [label]="\'Quantity\'"\n  [min]="1"\n  [max]="100">\n</sui-input-number>',
            description: 'Simple number input with increment/decrement buttons'
          },
          {
            name: 'Size Variations',
            code: '<div class="space-y-4">\n  <sui-input-number [(ngModel)]="value" size="small" [label]="\'Small\'"></sui-input-number>\n  <sui-input-number [(ngModel)]="value" size="medium" [label]="\'Medium\'"></sui-input-number>\n  <sui-input-number [(ngModel)]="value" size="large" [label]="\'Large\'"></sui-input-number>\n</div>',
            description: 'Number input components in different sizes'
          },
          {
            name: 'Color Themes',
            code: '<div class="space-y-4">\n  <sui-input-number [(ngModel)]="value" color="default" [label]="\'Default\'"></sui-input-number>\n  <sui-input-number [(ngModel)]="value" color="primary" [label]="\'Primary\'"></sui-input-number>\n  <sui-input-number [(ngModel)]="value" color="success" [label]="\'Success\'"></sui-input-number>\n  <sui-input-number [(ngModel)]="value" color="warning" [label]="\'Warning\'"></sui-input-number>\n  <sui-input-number [(ngModel)]="value" color="danger" [label]="\'Danger\'"></sui-input-number>\n</div>',
            description: 'Number input components with different color themes'
          },
          {
            name: 'With Constraints',
            code: '<div class="space-y-4">\n  <sui-input-number [(ngModel)]="age" [min]="13" [max]="120" [label]="\'Age\'" [helperText]="\'Must be between 13 and 120\'"></sui-input-number>\n  <sui-input-number [(ngModel)]="price" [min]="0" [max]="9999.99" [step]="0.01" [label]="\'Price\'" [helperText]="\'Enter price in dollars\'"></sui-input-number>\n  <sui-input-number [(ngModel)]="rating" [min]="1" [max]="5" [step]="1" [label]="\'Rating\'" [helperText]="\'Rate from 1 to 5 stars\'"></sui-input-number>\n</div>',
            description: 'Number inputs with min/max constraints and decimal steps'
          },
          {
            name: 'State Examples',
            code: '<div class="space-y-4">\n  <sui-input-number [(ngModel)]="value" [label]="\'Interactive\'"></sui-input-number>\n  <sui-input-number [(ngModel)]="value" [readonly]="true" [label]="\'Read-only\'"></sui-input-number>\n  <sui-input-number [(ngModel)]="value" [disabled]="true" [label]="\'Disabled\'"></sui-input-number>\n  <sui-input-number [(ngModel)]="value" [loading]="true" [label]="\'Loading\'"></sui-input-number>\n</div>',
            description: 'Number input components in different states'
          },
          {
            name: 'Layout Options',
            code: '<div class="space-y-4">\n  <sui-input-number [(ngModel)]="value" [compact]="true" [label]="\'Compact\'"></sui-input-number>\n  <sui-input-number [(ngModel)]="value" [spacious]="true" [label]="\'Spacious\'"></sui-input-number>\n  <sui-input-number [(ngModel)]="value" icon="🔢" [label]="\'With Icon\'"></sui-input-number>\n  <sui-input-number [(ngModel)]="value" [showButtons]="false" [label]="\'No Buttons\'"></sui-input-number>\n</div>',
            description: 'Number input components with different layout options'
          },
          {
            name: 'Animation Effects',
            code: '<div class="space-y-4">\n  <sui-input-number [(ngModel)]="value" [animated]="true" [label]="\'Animated\'"></sui-input-number>\n  <sui-input-number [(ngModel)]="value" [bounce]="true" [label]="\'Bounce\'"></sui-input-number>\n  <sui-input-number [(ngModel)]="value" [glow]="true" [label]="\'Glow\'"></sui-input-number>\n  <sui-input-number [(ngModel)]="value" [animated]="true" [bounce]="true" [glow]="true" [label]="\'All Effects\'"></sui-input-number>\n</div>',
            description: 'Number input components with various animation effects'
          },
          {
            name: 'E-commerce Form',
            code: '<div class="ecommerce-form">\n  <h3>Product Configuration</h3>\n  <sui-input-number\n    [(ngModel)]="quantity"\n    [label]="\'Quantity\'"\n    [min]="1"\n    [max]="99"\n    [helperText]="\'Select quantity (1-99)\'"\n    color="primary"\n    [animated]="true">\n  </sui-input-number>\n  <sui-input-number\n    [(ngModel)]="price"\n    [label]="\'Price\'"\n    [min]="0"\n    [max]="9999.99"\n    [step]="0.01"\n    [helperText]="\'Enter price in dollars\'"\n    icon="$"\n    color="success">\n  </sui-input-number>\n</div>',
            description: 'E-commerce form with quantity and price inputs'
          }
        ],
        props: [
          {
            name: 'value',
            type: 'number | null',
            default: 'null',
            description: 'Current value of the input',
            required: false
          },
          {
            name: 'min',
            type: 'number | null',
            default: 'null',
            description: 'Minimum allowed value',
            required: false
          },
          {
            name: 'max',
            type: 'number | null',
            default: 'null',
            description: 'Maximum allowed value',
            required: false
          },
          {
            name: 'step',
            type: 'number',
            default: '1',
            description: 'Step increment for the input',
            required: false
          },
          {
            name: 'placeholder',
            type: 'string',
            default: "''",
            description: 'Placeholder text for the input',
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
            description: 'Whether the input is read-only',
            required: false
          },
          {
            name: 'loading',
            type: 'boolean',
            default: 'false',
            description: 'Whether the input is in loading state',
            required: false
          },
          {
            name: 'showButtons',
            type: 'boolean',
            default: 'true',
            description: 'Whether to show increment/decrement buttons',
            required: false
          },
          {
            name: 'size',
            type: "'small' | 'medium' | 'large'",
            default: "'medium'",
            description: 'Size of the input component',
            required: false
          },
          {
            name: 'theme',
            type: "'light' | 'dark'",
            default: "'light'",
            description: 'Theme variant',
            required: false
          },
          {
            name: 'color',
            type: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink'",
            default: "'default'",
            description: 'Color theme for the input',
            required: false
          },
          {
            name: 'label',
            type: 'string',
            default: "''",
            description: 'Label text for the input',
            required: false
          },
          {
            name: 'helperText',
            type: 'string',
            default: "''",
            description: 'Helper text displayed below the input',
            required: false
          },
          {
            name: 'errorText',
            type: 'string',
            default: "''",
            description: 'Error text displayed below the input',
            required: false
          },
          {
            name: 'icon',
            type: 'string',
            default: "''",
            description: 'Icon or emoji to display in the input',
            required: false
          },
          {
            name: 'compact',
            type: 'boolean',
            default: 'false',
            description: 'Whether to use compact spacing',
            required: false
          },
          {
            name: 'spacious',
            type: 'boolean',
            default: 'false',
            description: 'Whether to use spacious spacing',
            required: false
          },
          {
            name: 'animated',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show smooth animations',
            required: false
          },
          {
            name: 'bounce',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show bounce animation on button hover',
            required: false
          },
          {
            name: 'glow',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show glow effect on focus',
            required: false
          },
          {
            name: 'ariaLabel',
            type: 'string',
            default: "''",
            description: 'Accessibility label for the input',
            required: false
          },
          {
            name: 'ariaDescribedBy',
            type: 'string | null',
            default: 'null',
            description: 'ID of element that describes the input',
            required: false
          }
        ],
        events: [
          {
            name: 'change',
            type: 'EventEmitter<number | null>',
            description: 'Emitted when the input value changes'
          },
          {
            name: 'onIncrement',
            type: 'EventEmitter<number | null>',
            description: 'Emitted when the increment button is clicked'
          },
          {
            name: 'onDecrement',
            type: 'EventEmitter<number | null>',
            description: 'Emitted when the decrement button is clicked'
          }
        ],
        usage: 'Use number input components for quantity selectors, price inputs, age inputs, ratings, and any scenario where you need to input numeric values with constraints. Supports keyboard navigation, validation, and accessibility features.',
        tags: ['input', 'number', 'form', 'control', 'interactive', 'accessibility', 'validation', 'quantity', 'price']
      },
      {
        id: 'password',
        name: 'Password',
        category: 'Form',
        description: 'Interactive password input component with toggle visibility, strength indicator, and accessibility features',
        examples: [
          {
            name: 'Basic Password',
            code: '<sui-password\n  [(ngModel)]="password"\n  [label]="\'Password\'"\n  [placeholder]="\'Enter password\'">\n</sui-password>',
            description: 'Simple password input with toggle visibility'
          },
          {
            name: 'Size Variations',
            code: '<div class="space-y-4">\n  <sui-password [(ngModel)]="password" size="small" [label]="\'Small\'"></sui-password>\n  <sui-password [(ngModel)]="password" size="medium" [label]="\'Medium\'"></sui-password>\n  <sui-password [(ngModel)]="password" size="large" [label]="\'Large\'"></sui-password>\n</div>',
            description: 'Password input components in different sizes'
          },
          {
            name: 'Color Themes',
            code: '<div class="space-y-4">\n  <sui-password [(ngModel)]="password" color="default" [label]="\'Default\'"></sui-password>\n  <sui-password [(ngModel)]="password" color="primary" [label]="\'Primary\'"></sui-password>\n  <sui-password [(ngModel)]="password" color="success" [label]="\'Success\'"></sui-password>\n  <sui-password [(ngModel)]="password" color="warning" [label]="\'Warning\'"></sui-password>\n  <sui-password [(ngModel)]="password" color="danger" [label]="\'Danger\'"></sui-password>\n</div>',
            description: 'Password input components with different color themes'
          },
          {
            name: 'With Constraints',
            code: '<div class="space-y-4">\n  <sui-password [(ngModel)]="password" [minLength]="8" [label]="\'Password\'" [helperText]="\'Must be at least 8 characters\'"></sui-password>\n  <sui-password [(ngModel)]="password" [maxLength]="50" [label]="\'Password\'" [helperText]="\'Must be no more than 50 characters\'"></sui-password>\n  <sui-password [(ngModel)]="password" [minLength]="8" [maxLength]="50" [label]="\'Password\'" [helperText]="\'8-50 characters required\'"></sui-password>\n</div>',
            description: 'Password inputs with min/max length constraints'
          },
          {
            name: 'State Examples',
            code: '<div class="space-y-4">\n  <sui-password [(ngModel)]="password" [label]="\'Interactive\'"></sui-password>\n  <sui-password [(ngModel)]="password" [readonly]="true" [label]="\'Read-only\'"></sui-password>\n  <sui-password [(ngModel)]="password" [disabled]="true" [label]="\'Disabled\'"></sui-password>\n  <sui-password [(ngModel)]="password" [loading]="true" [label]="\'Loading\'"></sui-password>\n</div>',
            description: 'Password input components in different states'
          },
          {
            name: 'Layout Options',
            code: '<div class="space-y-4">\n  <sui-password [(ngModel)]="password" [compact]="true" [label]="\'Compact\'"></sui-password>\n  <sui-password [(ngModel)]="password" [spacious]="true" [label]="\'Spacious\'"></sui-password>\n  <sui-password [(ngModel)]="password" icon="🔒" [label]="\'With Icon\'"></sui-password>\n  <sui-password [(ngModel)]="password" [toggleMask]="false" [label]="\'No Toggle\'"></sui-password>\n</div>',
            description: 'Password input components with different layout options'
          },
          {
            name: 'Animation Effects',
            code: '<div class="space-y-4">\n  <sui-password [(ngModel)]="password" [animated]="true" [label]="\'Animated\'"></sui-password>\n  <sui-password [(ngModel)]="password" [bounce]="true" [label]="\'Bounce\'"></sui-password>\n  <sui-password [(ngModel)]="password" [glow]="true" [label]="\'Glow\'"></sui-password>\n  <sui-password [(ngModel)]="password" [animated]="true" [bounce]="true" [glow]="true" [label]="\'All Effects\'"></sui-password>\n</div>',
            description: 'Password input components with various animation effects'
          },
          {
            name: 'With Strength Indicator',
            code: '<div class="space-y-4">\n  <sui-password\n    [(ngModel)]="password"\n    [label]="\'Password\'"\n    [minLength]="8"\n    [showStrength]="true"\n    [helperText]="\'Must be at least 8 characters with mixed case, numbers, and symbols\'">\n  </sui-password>\n</div>',
            description: 'Password input with strength indicator'
          },
          {
            name: 'Login Form',
            code: '<div class="login-form">\n  <h3>User Login</h3>\n  <sui-password\n    [(ngModel)]="password"\n    [label]="\'Password\'"\n    [placeholder]="\'Enter your password\'"\n    [helperText]="\'Enter your account password\'"\n    icon="🔒"\n    color="primary"\n    [animated]="true">\n  </sui-password>\n</div>',
            description: 'Login form password input'
          }
        ],
        props: [
          {
            name: 'value',
            type: 'string',
            default: "''",
            description: 'Current value of the password input',
            required: false
          },
          {
            name: 'minLength',
            type: 'number | null',
            default: 'null',
            description: 'Minimum allowed password length',
            required: false
          },
          {
            name: 'maxLength',
            type: 'number | null',
            default: 'null',
            description: 'Maximum allowed password length',
            required: false
          },
          {
            name: 'placeholder',
            type: 'string',
            default: "''",
            description: 'Placeholder text for the input',
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
            description: 'Whether the input is read-only',
            required: false
          },
          {
            name: 'loading',
            type: 'boolean',
            default: 'false',
            description: 'Whether the input is in loading state',
            required: false
          },
          {
            name: 'toggleMask',
            type: 'boolean',
            default: 'true',
            description: 'Whether to show the toggle visibility button',
            required: false
          },
          {
            name: 'showStrength',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show password strength indicator',
            required: false
          },
          {
            name: 'size',
            type: "'small' | 'medium' | 'large'",
            default: "'medium'",
            description: 'Size of the input component',
            required: false
          },
          {
            name: 'theme',
            type: "'light' | 'dark'",
            default: "'light'",
            description: 'Theme variant',
            required: false
          },
          {
            name: 'color',
            type: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink'",
            default: "'default'",
            description: 'Color theme for the input',
            required: false
          },
          {
            name: 'label',
            type: 'string',
            default: "''",
            description: 'Label text for the input',
            required: false
          },
          {
            name: 'helperText',
            type: 'string',
            default: "''",
            description: 'Helper text displayed below the input',
            required: false
          },
          {
            name: 'errorText',
            type: 'string',
            default: "''",
            description: 'Error text displayed below the input',
            required: false
          },
          {
            name: 'icon',
            type: 'string',
            default: "''",
            description: 'Icon or emoji to display in the input',
            required: false
          },
          {
            name: 'compact',
            type: 'boolean',
            default: 'false',
            description: 'Whether to use compact spacing',
            required: false
          },
          {
            name: 'spacious',
            type: 'boolean',
            default: 'false',
            description: 'Whether to use spacious spacing',
            required: false
          },
          {
            name: 'animated',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show smooth animations',
            required: false
          },
          {
            name: 'bounce',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show bounce animation on button hover',
            required: false
          },
          {
            name: 'glow',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show glow effect on focus',
            required: false
          },
          {
            name: 'ariaLabel',
            type: 'string',
            default: "''",
            description: 'Accessibility label for the input',
            required: false
          },
          {
            name: 'ariaDescribedBy',
            type: 'string | null',
            default: 'null',
            description: 'ID of element that describes the input',
            required: false
          }
        ],
        events: [
          {
            name: 'change',
            type: 'EventEmitter<string>',
            description: 'Emitted when the password value changes'
          },
          {
            name: 'onToggle',
            type: 'EventEmitter<boolean>',
            description: 'Emitted when the visibility toggle is clicked'
          }
        ],
        usage: 'Use password input components for user authentication, account creation, password changes, and any scenario where you need to securely input passwords. Supports toggle visibility, strength indicators, validation, and accessibility features.',
        tags: ['password', 'input', 'form', 'control', 'interactive', 'accessibility', 'security', 'authentication', 'validation']
      },
      {
        id: 'listbox',
        name: 'Listbox',
        category: 'Form',
        description: 'Interactive listbox component with single/multi-select, grouping, icons, badges, and accessibility features',
        examples: [
          {
            name: 'Basic Listbox',
            code: '<sui-listbox\n  [options]="options"\n  [(ngModel)]="selectedValue"\n  [label]="\'Select Option\'">\n</sui-listbox>',
            description: 'Simple listbox with basic options'
          },
          {
            name: 'Size Variations',
            code: '<div class="space-y-4">\n  <sui-listbox [options]="options" size="small" [label]="\'Small\'"></sui-listbox>\n  <sui-listbox [options]="options" size="medium" [label]="\'Medium\'"></sui-listbox>\n  <sui-listbox [options]="options" size="large" [label]="\'Large\'"></sui-listbox>\n</div>',
            description: 'Listbox components in different sizes'
          },
          {
            name: 'Color Themes',
            code: '<div class="space-y-4">\n  <sui-listbox [options]="options" color="default" [label]="\'Default\'"></sui-listbox>\n  <sui-listbox [options]="options" color="primary" [label]="\'Primary\'"></sui-listbox>\n  <sui-listbox [options]="options" color="success" [label]="\'Success\'"></sui-listbox>\n  <sui-listbox [options]="options" color="warning" [label]="\'Warning\'"></sui-listbox>\n  <sui-listbox [options]="options" color="danger" [label]="\'Danger\'"></sui-listbox>\n</div>',
            description: 'Listbox components with different color themes'
          },
          {
            name: 'With Icons and Badges',
            code: '<sui-listbox\n  [options]="optionsWithIcons"\n  [(ngModel)]="selectedValue"\n  [label]="\'Options with Icons\'">\n</sui-listbox>',
            description: 'Listbox with icons and badges for each option'
          },
          {
            name: 'Multi-Select',
            code: '<sui-listbox\n  [options]="options"\n  [multiSelect]="true"\n  [(ngModel)]="selectedValues"\n  [label]="\'Select Multiple\'">\n</sui-listbox>',
            description: 'Multi-select listbox for selecting multiple options'
          },
          {
            name: 'Grouped Options',
            code: '<sui-listbox\n  [groups]="groupedOptions"\n  [showGroups]="true"\n  [(ngModel)]="selectedValue"\n  [label]="\'Grouped Options\'">\n</sui-listbox>',
            description: 'Listbox with grouped options organized by categories'
          },
          {
            name: 'State Examples',
            code: '<div class="space-y-4">\n  <sui-listbox [options]="options" [label]="\'Interactive\'"></sui-listbox>\n  <sui-listbox [options]="options" [disabled]="true" [label]="\'Disabled\'"></sui-listbox>\n  <sui-listbox [options]="options" [loading]="true" [label]="\'Loading\'"></sui-listbox>\n</div>',
            description: 'Listbox components in different states'
          },
          {
            name: 'Layout Options',
            code: '<div class="space-y-4">\n  <sui-listbox [options]="options" [compact]="true" [label]="\'Compact\'"></sui-listbox>\n  <sui-listbox [options]="options" [spacious]="true" [label]="\'Spacious\'"></sui-listbox>\n  <sui-listbox [options]="options" [maxHeight]="\'8rem\'" [label]="\'Limited Height\'"></sui-listbox>\n</div>',
            description: 'Listbox components with different layout options'
          },
          {
            name: 'Animation Effects',
            code: '<div class="space-y-4">\n  <sui-listbox [options]="options" [animated]="true" [label]="\'Animated\'"></sui-listbox>\n  <sui-listbox [options]="options" [bounce]="true" [label]="\'Bounce\'"></sui-listbox>\n  <sui-listbox [options]="options" [glow]="true" [label]="\'Glow\'"></sui-listbox>\n</div>',
            description: 'Listbox components with various animation effects'
          },
          {
            name: 'Country Selector',
            code: '<sui-listbox\n  [options]="countryOptions"\n  [(ngModel)]="selectedCountry"\n  [label]="\'Country\'"\n  [helperText]="\'Select your country\'"\n  [maxHeight]="\'10rem\'"\n  [animated]="true"\n  color="primary">\n</sui-listbox>',
            description: 'Country selection for user registration'
          }
        ],
        props: [
          {
            name: 'options',
            type: 'ListboxOption[]',
            default: '[]',
            description: 'Array of options to display in the listbox',
            required: false
          },
          {
            name: 'groups',
            type: 'ListboxGroup[]',
            default: '[]',
            description: 'Array of option groups for grouped display',
            required: false
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Whether the listbox is disabled',
            required: false
          },
          {
            name: 'loading',
            type: 'boolean',
            default: 'false',
            description: 'Whether the listbox is in loading state',
            required: false
          },
          {
            name: 'multiSelect',
            type: 'boolean',
            default: 'false',
            description: 'Whether multiple options can be selected',
            required: false
          },
          {
            name: 'showGroups',
            type: 'boolean',
            default: 'false',
            description: 'Whether to display options in groups',
            required: false
          },
          {
            name: 'size',
            type: "'small' | 'medium' | 'large'",
            default: "'medium'",
            description: 'Size of the listbox component',
            required: false
          },
          {
            name: 'theme',
            type: "'light' | 'dark'",
            default: "'light'",
            description: 'Theme variant',
            required: false
          },
          {
            name: 'color',
            type: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink'",
            default: "'default'",
            description: 'Color theme for the listbox',
            required: false
          },
          {
            name: 'label',
            type: 'string',
            default: "''",
            description: 'Label text for the listbox',
            required: false
          },
          {
            name: 'helperText',
            type: 'string',
            default: "''",
            description: 'Helper text displayed below the listbox',
            required: false
          },
          {
            name: 'errorText',
            type: 'string',
            default: "''",
            description: 'Error text displayed below the listbox',
            required: false
          },
          {
            name: 'placeholder',
            type: 'string',
            default: "'Select an option'",
            description: 'Placeholder text when no option is selected',
            required: false
          },
          {
            name: 'emptyText',
            type: 'string',
            default: "'No options available'",
            description: 'Text displayed when no options are available',
            required: false
          },
          {
            name: 'emptyDescription',
            type: 'string',
            default: "'Try adjusting your search or filters'",
            description: 'Description text for empty state',
            required: false
          },
          {
            name: 'emptyIcon',
            type: 'string',
            default: "'📋'",
            description: 'Icon displayed in empty state',
            required: false
          },
          {
            name: 'compact',
            type: 'boolean',
            default: 'false',
            description: 'Whether to use compact spacing',
            required: false
          },
          {
            name: 'spacious',
            type: 'boolean',
            default: 'false',
            description: 'Whether to use spacious spacing',
            required: false
          },
          {
            name: 'animated',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show smooth animations',
            required: false
          },
          {
            name: 'bounce',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show bounce animation on hover',
            required: false
          },
          {
            name: 'glow',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show glow effect on focus',
            required: false
          },
          {
            name: 'maxHeight',
            type: 'string',
            default: "''",
            description: 'Maximum height of the listbox container',
            required: false
          },
          {
            name: 'ariaLabel',
            type: 'string',
            default: "''",
            description: 'Accessibility label for the listbox',
            required: false
          },
          {
            name: 'ariaDescribedBy',
            type: 'string | null',
            default: 'null',
            description: 'ID of element that describes the listbox',
            required: false
          }
        ],
        events: [
          {
            name: 'change',
            type: 'EventEmitter<unknown>',
            description: 'Emitted when the selected value(s) change'
          },
          {
            name: 'onSelect',
            type: 'EventEmitter<ListboxOption>',
            description: 'Emitted when an option is selected'
          },
          {
            name: 'onFocus',
            type: 'EventEmitter<number>',
            description: 'Emitted when an option receives focus'
          },
          {
            name: 'onBlur',
            type: 'EventEmitter<void>',
            description: 'Emitted when the listbox loses focus'
          }
        ],
        usage: 'Use listbox components for single or multi-select scenarios, option selection, category filtering, and any situation where you need to display a list of selectable items. Supports keyboard navigation, grouping, icons, badges, and accessibility features.',
        tags: ['listbox', 'select', 'form', 'control', 'interactive', 'accessibility', 'multi-select', 'grouping', 'options']
      },
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
        description: 'Multi-line text input component with autosize, validation, and customization options',
        examples: [
          {
            name: 'Basic Textarea',
            code: `<sui-textarea
    [value]="value"
    placeholder="Enter your message here..."
    [rows]="4"
    (change)="onChange($event)">
  </sui-textarea>`,
            description: 'Basic textarea with placeholder and rows'
          },
          {
            name: 'Autosize Textarea',
            code: `<sui-textarea
    [value]="value"
    [autosize]="true"
    [rows]="3"
    (change)="onChange($event)">
  </sui-textarea>`,
            description: 'Textarea that automatically adjusts height based on content'
          },
          {
            name: 'Disabled Textarea',
            code: `<sui-textarea
    [value]="value"
    [disabled]="true"
    [rows]="3">
  </sui-textarea>`,
            description: 'Disabled textarea that cannot be edited'
          },
          {
            name: 'Different Sizes',
            code: `<sui-textarea [rows]="2">Small</sui-textarea>
  <sui-textarea [rows]="4">Medium</sui-textarea>
  <sui-textarea [rows]="6">Large</sui-textarea>`,
            description: 'Textareas with different row counts for various sizes'
          },
          {
            name: 'Form Validation',
            code: `<sui-textarea
    [value]="value"
    placeholder="Enter message (min 10 chars)"
    [rows]="4"
    (change)="onChange($event)">
  </sui-textarea>`,
            description: 'Textarea with validation and error handling'
          },
          {
            name: 'Character Count',
            code: `<sui-textarea
    [value]="value"
    placeholder="Type your message..."
    [rows]="4"
    (change)="onChange($event)">
  </sui-textarea>
  <div>{{ value.length }}/100 characters</div>`,
            description: 'Textarea with character count display'
          },
          {
            name: 'Resizable',
            code: `<sui-textarea
    [value]="value"
    [rows]="4"
    (change)="onChange($event)">
  </sui-textarea>`,
            description: 'Textarea that can be resized by the user'
          },
          {
            name: 'Custom Styling',
            code: `<sui-textarea
    [value]="value"
    styleClass="custom-textarea"
    [rows]="4"
    (change)="onChange($event)">
  </sui-textarea>`,
            description: 'Textarea with custom CSS styling'
          }
        ],
        props: [
          {
            name: 'value',
            type: 'string',
            default: '""',
            description: 'The value of the textarea',
            required: false
          },
          {
            name: 'placeholder',
            type: 'string',
            default: '""',
            description: 'Placeholder text shown when textarea is empty',
            required: false
          },
          {
            name: 'rows',
            type: 'number',
            default: '3',
            description: 'Number of visible text lines',
            required: false
          },
          {
            name: 'autosize',
            type: 'boolean',
            default: 'false',
            description: 'Whether the textarea should automatically adjust its height',
            required: false
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Whether the textarea is disabled',
            required: false
          },
          {
            name: 'name',
            type: 'string',
            default: '""',
            description: 'Name attribute for the textarea',
            required: false
          },
          {
            name: 'inputId',
            type: 'string',
            default: '""',
            description: 'ID attribute for the textarea',
            required: false
          }
        ],
        events: [
          {
            name: 'change',
            type: 'EventEmitter<string>',
            description: 'Emitted when the textarea value changes'
          }
        ],
        usage: 'Use textareas for multi-line text input such as comments, messages, descriptions, or any content that requires more than a single line. Perfect for forms, feedback systems, and content creation interfaces.',
        tags: ['form', 'input', 'multiline', 'text', 'validation']
      },
  {
        id: 'toggle-button',
        name: 'Toggle Button',
        category: 'Form',
        description: 'Interactive toggle button group component with single/multi-select, customizable appearance, animations, and accessibility features',
        examples: [
          {
            name: 'Basic Toggle Button',
            code: '<sui-toggle-button\n  [options]="options"\n  [(ngModel)]="selectedValue"\n  [label]="\'Select Option\'">\n</sui-toggle-button>',
            description: 'Simple toggle button group with basic options'
          },
          {
            name: 'Size Variations',
            code: '<div class="space-y-4">\n  <sui-toggle-button [options]="options" size="small" [label]="\'Small\'"></sui-toggle-button>\n  <sui-toggle-button [options]="options" size="medium" [label]="\'Medium\'"></sui-toggle-button>\n  <sui-toggle-button [options]="options" size="large" [label]="\'Large\'"></sui-toggle-button>\n</div>',
            description: 'Toggle button components in different sizes'
          },
          {
            name: 'Color Themes',
            code: '<div class="space-y-4">\n  <sui-toggle-button [options]="options" color="default" [label]="\'Default\'"></sui-toggle-button>\n  <sui-toggle-button [options]="options" color="primary" [label]="\'Primary\'"></sui-toggle-button>\n  <sui-toggle-button [options]="options" color="success" [label]="\'Success\'"></sui-toggle-button>\n  <sui-toggle-button [options]="options" color="warning" [label]="\'Warning\'"></sui-toggle-button>\n  <sui-toggle-button [options]="options" color="danger" [label]="\'Danger\'"></sui-toggle-button>\n</div>',
            description: 'Toggle button components with different color themes'
          },
          {
            name: 'Style Variations',
            code: '<div class="space-y-4">\n  <sui-toggle-button [options]="options" style="default" color="primary" [label]="\'Default\'"></sui-toggle-button>\n  <sui-toggle-button [options]="options" style="outline" color="primary" [label]="\'Outline\'"></sui-toggle-button>\n  <sui-toggle-button [options]="options" style="ghost" color="primary" [label]="\'Ghost\'"></sui-toggle-button>\n</div>',
            description: 'Toggle button components with different visual styles'
          },
          {
            name: 'Multi-Select',
            code: '<sui-toggle-button\n  [options]="options"\n  [multiple]="true"\n  [(ngModel)]="selectedValues"\n  [label]="\'Multi-Select\'">\n</sui-toggle-button>',
            description: 'Multi-select toggle button group for selecting multiple options'
          },
          {
            name: 'With Icons and Badges',
            code: '<sui-toggle-button\n  [options]="optionsWithIcons"\n  [(ngModel)]="selectedValue"\n  [label]="\'Options with Icons\'">\n</sui-toggle-button>',
            description: 'Toggle button group with icons and badges for each option'
          },
          {
            name: 'State Examples',
            code: '<div class="space-y-4">\n  <sui-toggle-button [options]="options" [label]="\'Interactive\'"></sui-toggle-button>\n  <sui-toggle-button [options]="options" [disabled]="true" [label]="\'Disabled\'"></sui-toggle-button>\n  <sui-toggle-button [options]="options" [loading]="true" [label]="\'Loading\'"></sui-toggle-button>\n</div>',
            description: 'Toggle button components in different states'
          },
          {
            name: 'Animation Effects',
            code: '<div class="space-y-4">\n  <sui-toggle-button [options]="options" [animated]="true" [label]="\'Animated\'"></sui-toggle-button>\n  <sui-toggle-button [options]="options" [bounce]="true" [label]="\'Bounce\'"></sui-toggle-button>\n  <sui-toggle-button [options]="options" [glow]="true" [label]="\'Glow\'"></sui-toggle-button>\n</div>',
            description: 'Toggle button components with various animation effects'
          },
          {
            name: 'Text Editor Toolbar',
            code: '<sui-toggle-button\n  [options]="textEditorOptions"\n  [multiple]="true"\n  [(ngModel)]="selectedFormats"\n  [label]="\'Text Formatting\'"\n  [helperText]="\'Select text formatting options\'"\n  size="small"\n  style="outline"\n  [animated]="true">\n</sui-toggle-button>',
            description: 'Text editor formatting toolbar with toggle buttons'
          }
        ],
        props: [
          {
            name: 'options',
            type: 'ToggleButtonOption[]',
            default: '[]',
            description: 'Array of options to display in the toggle button group',
            required: true
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Whether the toggle button group is disabled',
            required: false
          },
          {
            name: 'loading',
            type: 'boolean',
            default: 'false',
            description: 'Whether the toggle button group is in loading state',
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
            name: 'size',
            type: "'sm' | 'md' | 'lg'",
            default: "'md'",
            description: 'Size of the toggle button component',
            required: false
          },
          {
            name: 'theme',
            type: "'light' | 'dark'",
            default: "'light'",
            description: 'Theme variant',
            required: false
          },
          {
            name: 'color',
            type: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink'",
            default: "'default'",
            description: 'Color theme for the toggle button group',
            required: false
          },
          {
            name: 'style',
            type: "'default' | 'outline' | 'ghost'",
            default: "'default'",
            description: 'Visual style of the toggle buttons',
            required: false
          },
          {
            name: 'shape',
            type: "'default' | 'rounded' | 'pill'",
            default: "'default'",
            description: 'Shape of the toggle buttons',
            required: false
          },
          {
            name: 'label',
            type: 'string',
            default: "''",
            description: 'Label text for the toggle button group',
            required: false
          },
          {
            name: 'helperText',
            type: 'string',
            default: "''",
            description: 'Helper text displayed below the toggle button group',
            required: false
          },
          {
            name: 'errorText',
            type: 'string',
            default: "''",
            description: 'Error text displayed below the toggle button group',
            required: false
          },
          {
            name: 'compact',
            type: 'boolean',
            default: 'false',
            description: 'Whether to use compact spacing',
            required: false
          },
          {
            name: 'spacious',
            type: 'boolean',
            default: 'false',
            description: 'Whether to use spacious spacing',
            required: false
          },
          {
            name: 'animated',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show smooth animations',
            required: false
          },
          {
            name: 'bounce',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show bounce animation on hover',
            required: false
          },
          {
            name: 'glow',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show glow effect on focus',
            required: false
          },
          {
            name: 'ariaLabel',
            type: 'string',
            default: "''",
            description: 'Accessibility label for the toggle button group',
            required: false
          },
          {
            name: 'ariaDescribedBy',
            type: 'string | null',
            default: 'null',
            description: 'ID of element that describes the toggle button group',
            required: false
          }
        ],
        events: [
          {
            name: 'change',
            type: 'EventEmitter<unknown | unknown[]>',
            description: 'Emitted when the selected value(s) change'
          },
          {
            name: 'onSelect',
            type: 'EventEmitter<ToggleButtonOption>',
            description: 'Emitted when an option is selected'
          },
          {
            name: 'onFocus',
            type: 'EventEmitter<number>',
            description: 'Emitted when an option receives focus'
          },
          {
            name: 'onBlur',
            type: 'EventEmitter<void>',
            description: 'Emitted when the toggle button group loses focus'
          }
        ],
        usage: 'Use toggle button components for single or multi-select scenarios, option selection, feature toggles, view mode selection, and any situation where you need to display a group of selectable buttons. Supports keyboard navigation, animations, and accessibility features.',
        tags: ['toggle-button', 'form', 'input', 'control', 'interactive', 'accessibility', 'multi-select', 'selection', 'buttons']
      },
  {
        id: 'tree-select',
        name: 'Tree Select',
        category: 'Form',
        description: 'Interactive tree-based selection component with hierarchical options, search, multi-select, and comprehensive customization',
        examples: [
          {
            name: 'Basic Tree Select',
            code: '<sui-tree-select\n  [options]="options"\n  [(ngModel)]="selectedValue"\n  [label]="\'Select Option\'">\n</sui-tree-select>',
            description: 'Simple tree select with hierarchical options'
          },
          {
            name: 'Size Variations',
            code: '<div class="space-y-4">\n  <sui-tree-select [options]="options" size="small" [label]="\'Small\'"></sui-tree-select>\n  <sui-tree-select [options]="options" size="medium" [label]="\'Medium\'"></sui-tree-select>\n  <sui-tree-select [options]="options" size="large" [label]="\'Large\'"></sui-tree-select>\n</div>',
            description: 'Tree select components in different sizes'
          },
          {
            name: 'Color Themes',
            code: '<div class="space-y-4">\n  <sui-tree-select [options]="options" color="default" [label]="\'Default\'"></sui-tree-select>\n  <sui-tree-select [options]="options" color="primary" [label]="\'Primary\'"></sui-tree-select>\n  <sui-tree-select [options]="options" color="success" [label]="\'Success\'"></sui-tree-select>\n  <sui-tree-select [options]="options" color="warning" [label]="\'Warning\'"></sui-tree-select>\n  <sui-tree-select [options]="options" color="danger" [label]="\'Danger\'"></sui-tree-select>\n</div>',
            description: 'Tree select components with different color themes'
          },
          {
            name: 'Multi-Select with Search',
            code: '<sui-tree-select\n  [options]="options"\n  [multiple]="true"\n  [searchable]="true"\n  [clearable]="true"\n  [(ngModel)]="selectedValues"\n  [label]="\'Multi-Select with Search\'">\n</sui-tree-select>',
            description: 'Multi-select tree with search functionality'
          },
          {
            name: 'With Icons and Descriptions',
            code: '<sui-tree-select\n  [options]="optionsWithIcons"\n  [(ngModel)]="selectedValue"\n  [label]="\'Options with Icons\'">\n</sui-tree-select>',
            description: 'Tree select with icons and descriptions for each option'
          },
          {
            name: 'State Examples',
            code: '<div class="space-y-4">\n  <sui-tree-select [options]="options" [label]="\'Interactive\'"></sui-tree-select>\n  <sui-tree-select [options]="options" [disabled]="true" [label]="\'Disabled\'"></sui-tree-select>\n  <sui-tree-select [options]="options" [loading]="true" [label]="\'Loading\'"></sui-tree-select>\n</div>',
            description: 'Tree select components in different states'
          },
          {
            name: 'Layout Options',
            code: '<div class="space-y-4">\n  <sui-tree-select [options]="options" [compact]="true" [label]="\'Compact\'"></sui-tree-select>\n  <sui-tree-select [options]="options" [spacious]="true" [label]="\'Spacious\'"></sui-tree-select>\n  <sui-tree-select [options]="options" [maxHeight]="\'8rem\'" [label]="\'Limited Height\'"></sui-tree-select>\n</div>',
            description: 'Tree select components with different layout options'
          },
          {
            name: 'Animation Effects',
            code: '<div class="space-y-4">\n  <sui-tree-select [options]="options" [animated]="true" [label]="\'Animated\'"></sui-tree-select>\n  <sui-tree-select [options]="options" [bounce]="true" [label]="\'Bounce\'"></sui-tree-select>\n  <sui-tree-select [options]="options" [glow]="true" [label]="\'Glow\'"></sui-tree-select>\n</div>',
            description: 'Tree select components with various animation effects'
          },
          {
            name: 'File Explorer',
            code: '<sui-tree-select\n  [options]="fileSystemOptions"\n  [(ngModel)]="selectedPath"\n  [label]="\'File Explorer\'"\n  [searchable]="true"\n  [clearable]="true"\n  [animated]="true"\n  color="primary">\n</sui-tree-select>',
            description: 'File system navigation with hierarchical structure'
          }
        ],
        props: [
          {
            name: 'options',
            type: 'TreeSelectNode[]',
            default: '[]',
            description: 'Array of tree nodes to display in the tree select',
            required: false
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Whether the tree select is disabled',
            required: false
          },
          {
            name: 'loading',
            type: 'boolean',
            default: 'false',
            description: 'Whether the tree select is in loading state',
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
            name: 'searchable',
            type: 'boolean',
            default: 'false',
            description: 'Whether to enable search functionality',
            required: false
          },
          {
            name: 'clearable',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show clear button when value is selected',
            required: false
          },
          {
            name: 'size',
            type: "'small' | 'medium' | 'large'",
            default: "'medium'",
            description: 'Size of the tree select component',
            required: false
          },
          {
            name: 'theme',
            type: "'light' | 'dark'",
            default: "'light'",
            description: 'Theme variant',
            required: false
          },
          {
            name: 'color',
            type: "'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink'",
            default: "'default'",
            description: 'Color theme for the tree select',
            required: false
          },
          {
            name: 'label',
            type: 'string',
            default: "''",
            description: 'Label text for the tree select',
            required: false
          },
          {
            name: 'helperText',
            type: 'string',
            default: "''",
            description: 'Helper text displayed below the tree select',
            required: false
          },
          {
            name: 'errorText',
            type: 'string',
            default: "''",
            description: 'Error text displayed below the tree select',
            required: false
          },
          {
            name: 'placeholder',
            type: 'string',
            default: "'Select an option'",
            description: 'Placeholder text when no option is selected',
            required: false
          },
          {
            name: 'maxHeight',
            type: 'string',
            default: "'300px'",
            description: 'Maximum height of the dropdown',
            required: false
          },
          {
            name: 'compact',
            type: 'boolean',
            default: 'false',
            description: 'Whether to use compact spacing',
            required: false
          },
          {
            name: 'spacious',
            type: 'boolean',
            default: 'false',
            description: 'Whether to use spacious spacing',
            required: false
          },
          {
            name: 'animated',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show smooth animations',
            required: false
          },
          {
            name: 'bounce',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show bounce animation on hover',
            required: false
          },
          {
            name: 'glow',
            type: 'boolean',
            default: 'false',
            description: 'Whether to show glow effect on focus',
            required: false
          },
          {
            name: 'ariaLabel',
            type: 'string',
            default: "''",
            description: 'Accessibility label for the tree select',
            required: false
          },
          {
            name: 'ariaDescribedBy',
            type: 'string | null',
            default: 'null',
            description: 'ID of element that describes the tree select',
            required: false
          }
        ],
        events: [
          {
            name: 'change',
            type: 'EventEmitter<unknown>',
            description: 'Emitted when the selected value(s) change'
          },
          {
            name: 'onSelect',
            type: 'EventEmitter<TreeSelectNode>',
            description: 'Emitted when a node is selected'
          },
          {
            name: 'onExpand',
            type: 'EventEmitter<TreeSelectNode>',
            description: 'Emitted when a node is expanded'
          },
          {
            name: 'onCollapse',
            type: 'EventEmitter<TreeSelectNode>',
            description: 'Emitted when a node is collapsed'
          },
          {
            name: 'onFocus',
            type: 'EventEmitter<void>',
            description: 'Emitted when the tree select receives focus'
          },
          {
            name: 'onBlur',
            type: 'EventEmitter<void>',
            description: 'Emitted when the tree select loses focus'
          }
        ],
        usage: 'Use tree select components for hierarchical data selection, file system navigation, category selection, organizational charts, and any scenario where you need to select from nested or tree-structured data. Supports keyboard navigation, search, multi-select, and accessibility features.',
        tags: ['tree-select', 'form', 'input', 'hierarchical', 'selection', 'navigation', 'search', 'multi-select', 'accessibility']
      },
];
