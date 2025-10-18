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
        description: 'Interactive password input component with toggle visibility and clean, simple design matching input-text styles',
        examples: [
          {
            name: 'Basic Password',
            code: '<sui-password\n  [(ngModel)]="password"\n  label="Password"\n  placeholder="Enter password">\n</sui-password>',
            description: 'Simple password input with toggle visibility'
          },
          {
            name: 'Size Variations',
            code: '<div class="space-y-4">\n  <sui-password [(ngModel)]="password" size="sm" label="Small"></sui-password>\n  <sui-password [(ngModel)]="password" size="md" label="Medium"></sui-password>\n  <sui-password [(ngModel)]="password" size="lg" label="Large"></sui-password>\n</div>',
            description: 'Password input components in different sizes'
          },
          {
            name: 'With Constraints',
            code: '<div class="space-y-4">\n  <sui-password [(ngModel)]="password" [minLength]="8" label="Password" helperText="Must be at least 8 characters"></sui-password>\n  <sui-password [(ngModel)]="password" [maxLength]="50" label="Password" helperText="Must be no more than 50 characters"></sui-password>\n  <sui-password [(ngModel)]="password" [minLength]="8" [maxLength]="50" label="Password" helperText="8-50 characters required"></sui-password>\n</div>',
            description: 'Password inputs with min/max length constraints'
          },
          {
            name: 'State Examples',
            code: '<div class="space-y-4">\n  <sui-password [(ngModel)]="password" label="Interactive"></sui-password>\n  <sui-password [(ngModel)]="password" [readonly]="true" label="Read-only"></sui-password>\n  <sui-password [(ngModel)]="password" [disabled]="true" label="Disabled"></sui-password>\n</div>',
            description: 'Password input components in different states'
          },
          {
            name: 'Registration Form',
            code: '<div class="space-y-6">\n  <sui-password\n    [(ngModel)]="password"\n    label="Password"\n    [minLength]="8"\n    helperText="Minimum 8 characters required">\n  </sui-password>\n  <sui-password\n    [(ngModel)]="confirmPassword"\n    label="Confirm Password"\n    helperText="Re-enter your password">\n  </sui-password>\n</div>',
            description: 'Registration form with password and confirmation'
          }
        ],
        props: [
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
            name: 'name',
            type: 'string',
            default: "''",
            description: 'Name attribute for the input',
            required: false
          },
          {
            name: 'inputId',
            type: 'string',
            default: 'auto-generated',
            description: 'ID for the input element',
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
            name: 'toggleMask',
            type: 'boolean',
            default: 'true',
            description: 'Whether to show the Show/Hide toggle button',
            required: false
          },
          {
            name: 'size',
            type: "'sm' | 'md' | 'lg'",
            default: "'md'",
            description: 'Size of the input component',
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
        description: 'Interactive listbox component with single/multi-select and clean, simple design',
        examples: [
          {
            name: 'Basic Listbox',
            code: '<sui-listbox\n  [options]="options"\n  [(ngModel)]="selectedValue"\n  label="Select Option">\n</sui-listbox>',
            description: 'Simple listbox with basic options'
          },
          {
            name: 'Size Variations',
            code: '<div class="space-y-4">\n  <sui-listbox [options]="options" size="sm" label="Small"></sui-listbox>\n  <sui-listbox [options]="options" size="md" label="Medium"></sui-listbox>\n  <sui-listbox [options]="options" size="lg" label="Large"></sui-listbox>\n</div>',
            description: 'Listbox components in different sizes'
          },
          {
            name: 'State Examples',
            code: '<div class="space-y-4">\n  <sui-listbox [options]="options" label="Interactive"></sui-listbox>\n  <sui-listbox [options]="options" [disabled]="true" label="Disabled"></sui-listbox>\n</div>',
            description: 'Listbox components in different states'
          },
          {
            name: 'Multi-Select',
            code: '<sui-listbox\n  [options]="options"\n  [multiSelect]="true"\n  [(ngModel)]="selectedValues"\n  label="Select Multiple">\n</sui-listbox>',
            description: 'Multi-select listbox for selecting multiple options'
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
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Whether the listbox is disabled',
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
            name: 'size',
            type: "'sm' | 'md' | 'lg'",
            default: "'md'",
            description: 'Size of the listbox component',
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
            description: 'Emitted when an option is selected (single-select only)'
          }
        ],
        usage: 'Use listbox components for single or multi-select scenarios, option selection, and any situation where you need to display a list of selectable items with clean, simple styling.',
        tags: ['listbox', 'select', 'form', 'control', 'interactive', 'accessibility', 'multi-select']
      },
      {
        id: 'auto-focus',
        name: 'Auto Focus',
        category: 'Form',
        description: 'Directive that automatically focuses an input element when the component loads',
        examples: [
          {
            name: 'Basic Auto Focus',
            code: '<sui-auto-focus>\n  <sui-input-text\n    [(ngModel)]="value"\n    label="Auto-focused Input"\n    placeholder="This input has auto focus">\n  </sui-input-text>\n</sui-auto-focus>',
            description: 'Input field with automatic focus on load'
          }
        ],
        props: [],
        usage: 'Use the suiAutoFocus directive on any input element to automatically focus it when the component loads. Useful for forms and search fields.',
        tags: ['form', 'focus', 'directive', 'accessibility']
      },
  {
        id: 'cascade-select',
        name: 'Cascade Select',
        category: 'Form',
        description: 'Hierarchical selection component for nested categories',
        examples: [
          {
            name: 'Basic Cascade Select',
            code: '<sui-cascade-select\n  [options]="options"\n  [levelsPlaceholder]="[\'Category\', \'Subcategory\', \'Item\']"\n  [(ngModel)]="selectedValue"\n  name="category">\n</sui-cascade-select>',
            description: 'Hierarchical selection with multiple dropdown levels'
          },
          {
            name: 'Two Levels',
            code: '<sui-cascade-select\n  [options]="locationOptions"\n  [levelsPlaceholder]="[\'Country\', \'City\']"\n  [(ngModel)]="selectedLocation"\n  name="location">\n</sui-cascade-select>',
            description: 'Cascade select with two hierarchy levels'
          },
          {
            name: 'With Disabled State',
            code: '<sui-cascade-select\n  [options]="options"\n  [levelsPlaceholder]="[\'Category\', \'Subcategory\']"\n  [(ngModel)]="selectedValue"\n  [disabled]="true"\n  name="category">\n</sui-cascade-select>',
            description: 'Cascade select in disabled state'
          },
          {
            name: 'Product Categories',
            code: '<sui-cascade-select\n  [options]="productCategories"\n  [levelsPlaceholder]="[\'Department\', \'Category\', \'Product\']"\n  [(ngModel)]="selectedProduct"\n  name="product">\n</sui-cascade-select>',
            description: 'Product category selection for e-commerce'
          }
        ],
        props: [],
        usage: 'Use cascade select for hierarchical data selection like categories, locations, or organizational structures.',
        tags: ['form', 'select', 'hierarchical', 'dropdown']
      },
  {
        id: 'float-label',
        name: 'Float Label',
        category: 'Form',
        description: 'Floating label input component for modern form styling',
        examples: [
          {
            name: 'Basic Float Label',
            code: '<sui-float-label label="Email Address" for="email">\n  <input type="email" id="email" placeholder="Enter your email">\n</sui-float-label>',
            description: 'Basic float label with email input'
          },
          {
            name: 'Size Variations',
            code: '<sui-float-label label="Small" size="sm" for="input-sm">\n  <input type="text" id="input-sm">\n</sui-float-label>',
            description: 'Float labels in small, medium, and large sizes'
          },
          {
            name: 'With States',
            code: '<sui-float-label label="Error State" state="error" errorText="This field is required" for="error">\n  <input type="text" id="error">\n</sui-float-label>',
            description: 'Float labels with error, success, and warning states'
          },
          {
            name: 'Contact Form',
            code: '<sui-float-label label="Full Name" required animated for="name">\n  <input type="text" id="name">\n</sui-float-label>',
            description: 'Complete contact form with animated float labels'
          }
        ],
        props: [],
        usage: 'Use float labels for modern input styling with smooth label animations.',
        tags: ['form', 'input', 'label', 'animation']
      },
  {
        id: 'icon-field',
        name: 'Icon Field',
        category: 'Form',
        description: 'Input wrapper component that adds icons to input fields',
        examples: [
          {
            name: 'Basic Icon Field',
            code: '<sui-icon-field icon="🔍" position="left">\n  <sui-input-text placeholder="Search..."></sui-input-text>\n</sui-icon-field>',
            description: 'Input field with icon on the left'
          },
          {
            name: 'Icon Positions',
            code: '<sui-icon-field icon="✓" position="right">\n  <sui-input-text placeholder="Phone"></sui-input-text>\n</sui-icon-field>',
            description: 'Icon can be positioned left or right'
          },
          {
            name: 'Different Sizes',
            code: '<sui-icon-field icon="🔍" size="small">\n  <sui-input-text size="sm"></sui-input-text>\n</sui-icon-field>',
            description: 'Small, normal, and large sizes'
          },
          {
            name: 'Form Example',
            code: '<sui-icon-field icon="📧" position="left">\n  <sui-input-text placeholder="Email"></sui-input-text>\n</sui-icon-field>',
            description: 'Complete form with icon fields'
          }
        ],
        props: [],
        usage: 'Use icon fields to add visual context to input fields like search, email, password, etc.',
        tags: ['form', 'input', 'icon', 'wrapper']
      },
  {
        id: 'ift-label',
        name: 'IFT Label',
        category: 'Form',
        description: 'Conditional label component that displays different labels based on a condition',
        examples: [
          {
            name: 'Basic IFT Label',
            code: '<sui-ift-label\n  [condition]="isActive"\n  trueLabel="✓ Active"\n  falseLabel="✗ Inactive">\n</sui-ift-label>',
            description: 'Simple conditional label showing active/inactive states'
          },
          {
            name: 'Status Indicators',
            code: '<sui-ift-label\n  [condition]="isOnline"\n  trueLabel="🟢 Online"\n  falseLabel="🔴 Offline">\n</sui-ift-label>',
            description: 'Status labels with icons and colors'
          },
          {
            name: 'Permission Labels',
            code: '<sui-ift-label\n  [condition]="hasPermission"\n  trueLabel="🔓 Access Granted"\n  falseLabel="🔒 Access Denied">\n</sui-ift-label>',
            description: 'Permission status with lock icons'
          },
          {
            name: 'Form Validation',
            code: '<sui-ift-label\n  [condition]="isPremium"\n  trueLabel="All features unlocked"\n  falseLabel="Upgrade to unlock">\n</sui-ift-label>',
            description: 'Settings form with conditional descriptions'
          }
        ],
        props: [],
        usage: 'Use IFT Label for conditional text display based on boolean conditions - perfect for status indicators, permissions, and dynamic labels.',
        tags: ['form', 'label', 'conditional', 'status']
      },
  {
        id: 'ifta-label',
        name: 'IFTA Label',
        category: 'Form',
        description: 'If-Then-Else-Alt conditional label with three-way condition support',
        examples: [
          {
            name: 'Basic IFTA Label',
            code: '<sui-ifta-label\n  [condition]="isActive"\n  trueLabel="✓ Active"\n  falseLabel="✗ Inactive"\n  altLabel="⚠ Unknown">\n</sui-ifta-label>',
            description: 'Conditional label with alternative state'
          },
          {
            name: 'Verification Status',
            code: '<sui-ifta-label\n  [condition]="isVerified"\n  trueLabel="✓ Verified"\n  falseLabel="⚠ Pending"\n  altLabel="✗ Failed">\n</sui-ifta-label>',
            description: 'Account verification with three states'
          },
          {
            name: 'Access Control',
            code: '<sui-ifta-label\n  [condition]="hasAccess"\n  trueLabel="🔓 Full Access"\n  falseLabel="🔒 Restricted"\n  altLabel="⚠ Limited">\n</sui-ifta-label>',
            description: 'Access control with multiple states'
          },
          {
            name: 'Payment Status',
            code: '<sui-ifta-label\n  [condition]="isPaid"\n  trueLabel="✓ Paid"\n  falseLabel="⚠ Unpaid"\n  altLabel="❌ Failed">\n</sui-ifta-label>',
            description: 'Payment status with multiple conditions'
          }
        ],
        props: [],
        usage: 'Use IFTA Label when you need to display three different states based on a condition - extends IFT Label with an alternative label option.',
        tags: ['form', 'label', 'conditional', 'status', 'three-state']
      },
  {
        id: 'input-group',
        name: 'Input Group',
        category: 'Form',
        description: 'Wrapper component for grouping input fields with prefixes and suffixes',
        examples: [
          {
            name: 'Basic Input Group',
            code: '<sui-input-group>\n  <span>@</span>\n  <sui-input-text placeholder="username"></sui-input-text>\n</sui-input-group>',
            description: 'Input with prefix addon'
          },
          {
            name: 'With Prefix & Suffix',
            code: '<sui-input-group>\n  <span>https://</span>\n  <sui-input-text placeholder="example"></sui-input-text>\n  <span>.com</span>\n</sui-input-group>',
            description: 'Input with both prefix and suffix'
          },
          {
            name: 'Different Sizes',
            code: '<sui-input-group size="small">\n  <span>$</span>\n  <sui-input-text></sui-input-text>\n</sui-input-group>',
            description: 'Small, normal, and large input groups'
          },
          {
            name: 'Form Examples',
            code: '<sui-input-group>\n  <span>📧</span>\n  <sui-input-text placeholder="email"></sui-input-text>\n  <span>@domain.com</span>\n</sui-input-group>',
            description: 'Real-world form with input groups'
          }
        ],
        props: [],
        usage: 'Use input groups to add prefixes, suffixes, or addons to input fields - perfect for URLs, prices, usernames, etc.',
        tags: ['form', 'input', 'wrapper', 'addon']
      },
  {
        id: 'input-mask',
        name: 'Input Mask',
        category: 'Form',
        description: 'Input component with format masking for structured data entry',
        examples: [
          {
            name: 'Phone Number Mask',
            code: '<sui-input-mask\n  mask="(999) 999-9999"\n  placeholder="(555) 123-4567">\n</sui-input-mask>',
            description: 'Phone number with formatting'
          },
          {
            name: 'Date Mask',
            code: '<sui-input-mask\n  mask="99/99/9999"\n  placeholder="MM/DD/YYYY">\n</sui-input-mask>',
            description: 'Date input with mask format'
          },
          {
            name: 'SSN Mask',
            code: '<sui-input-mask\n  mask="999-99-9999"\n  placeholder="123-45-6789">\n</sui-input-mask>',
            description: 'Social Security Number format'
          },
          {
            name: 'Credit Card Mask',
            code: '<sui-input-mask\n  mask="9999 9999 9999 9999"\n  placeholder="Card number">\n</sui-input-mask>',
            description: 'Payment form with card masks'
          }
        ],
        props: [],
        usage: 'Use input mask for formatted data entry like phone numbers, dates, SSN, credit cards. Mask: 9=digit, A=letter, *=alphanumeric.',
        tags: ['form', 'input', 'mask', 'format', 'validation']
      },
  {
        id: 'input-otp',
        name: 'Input OTP',
        category: 'Form',
        description: 'One-time password input with auto-focus and paste support',
        examples: [
          {
            name: 'Basic OTP Input',
            code: '<sui-input-otp\n  [(ngModel)]="otpValue"\n  [length]="6"\n  (complete)="onComplete($event)">\n</sui-input-otp>',
            description: '6-digit verification code input'
          },
          {
            name: 'Different Lengths',
            code: '<sui-input-otp [length]="4"></sui-input-otp>\n<sui-input-otp [length]="6"></sui-input-otp>\n<sui-input-otp [length]="8"></sui-input-otp>',
            description: '4, 6, and 8-digit OTP inputs'
          },
          {
            name: 'Alphanumeric OTP',
            code: '<sui-input-otp\n  [length]="6"\n  [numericOnly]="false"\n  inputType="text">\n</sui-input-otp>',
            description: 'Alphanumeric verification code'
          },
          {
            name: 'Two-Factor Authentication',
            code: '<sui-input-otp\n  [(ngModel)]="code"\n  [length]="6"\n  (complete)="verify($event)">\n</sui-input-otp>',
            description: 'Complete 2FA verification flow'
          }
        ],
        props: [],
        usage: 'Use OTP inputs for two-factor authentication, email verification, and security codes. Supports auto-focus, paste, and completion events.',
        tags: ['form', 'input', 'otp', 'verification', 'security', '2fa']
      },
  {
        id: 'key-filter',
        name: 'Key Filter',
        category: 'Form',
        description: 'Input component that filters keyboard input to allow only specific characters',
        examples: [
          {
            name: 'Integer Only',
            code: '<sui-key-filter\n  pattern="int"\n  placeholder="Digits only">\n</sui-key-filter>',
            description: 'Only allows digits 0-9'
          },
          {
            name: 'Pattern Types',
            code: '<sui-key-filter pattern="int"></sui-key-filter>\n<sui-key-filter pattern="num"></sui-key-filter>\n<sui-key-filter pattern="alpha"></sui-key-filter>\n<sui-key-filter pattern="alphanum"></sui-key-filter>',
            description: 'Built-in patterns: int, num, alpha, alphanum'
          },
          {
            name: 'Custom Pattern',
            code: '<sui-key-filter\n  pattern="[A-Fa-f0-9]"\n  placeholder="Hex only">\n</sui-key-filter>',
            description: 'Custom regex pattern for hex values'
          },
          {
            name: 'Form Validation',
            code: '<sui-key-filter\n  pattern="alphanum"\n  placeholder="Username">\n</sui-key-filter>',
            description: 'Registration form with filtered inputs'
          }
        ],
        props: [],
        usage: 'Use key filter to restrict user input to specific character types - integers, numbers, letters, alphanumeric, or custom regex patterns.',
        tags: ['form', 'input', 'filter', 'validation', 'pattern']
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
            code: '<sui-tree-select\n  [options]="options"\n  [(ngModel)]="selectedValue"\n  placeholder="Select a folder...">\n</sui-tree-select>',
            description: 'Simple hierarchical selection'
          },
          {
            name: 'Multi-Select Tree',
            code: '<sui-tree-select\n  [options]="options"\n  [(ngModel)]="selectedValues"\n  [multiple]="true"\n  placeholder="Select technologies...">\n</sui-tree-select>',
            description: 'Multi-select with tree structure'
          },
          {
            name: 'Searchable Tree',
            code: '<sui-tree-select\n  [options]="options"\n  [(ngModel)]="selectedValue"\n  [searchable]="true"\n  [clearable]="true"\n  placeholder="Search and select...">\n</sui-tree-select>',
            description: 'Tree with search and clear functionality'
          },
          {
            name: 'Product Categories',
            code: '<sui-tree-select\n  [options]="categories"\n  [(ngModel)]="selected"\n  [multiple]="true"\n  [searchable]="true">\n</sui-tree-select>',
            description: 'E-commerce category selection'
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
