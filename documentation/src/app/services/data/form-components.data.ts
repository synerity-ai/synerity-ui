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
          id: 'select',
          name: 'Select',
          category: 'Form',
          description: 'Advanced select component with single/multi-select, search, loading states, and comprehensive customization options',
          examples: [
            {
              name: 'Basic Select',
              code: '<sui-select\n  placeholder="Choose an option"\n  [options]="options"\n  [(ngModel)]="selectedValue"\n  clearable="true">\n</sui-select>',
              description: 'Simple select component with basic functionality'
            },
            {
              name: 'Size Variations',
              code: '<div class="space-y-2">\n  <sui-select placeholder="Small Select" [options]="options" class="sm"></sui-select>\n  <sui-select placeholder="Normal Select" [options]="options" class="normal"></sui-select>\n  <sui-select placeholder="Large Select" [options]="options" class="lg"></sui-select>\n</div>',
              description: 'Select components in different sizes'
            },
            {
              name: 'Form Integration',
              code: `
        // In your component
        formData = {
          country: '',
          city: '',
          language: '',
          timezone: '',
          currency: ''
        };
  
        countries = [
          { label: 'United States', value: 'us' },
          { label: 'Canada', value: 'ca' },
          { label: 'United Kingdom', value: 'uk' }
        ];
  
        onCountryChange(): void {
          this.formData.city = ''; // Reset city when country changes
        }
  
        // In your template
        <form (ngSubmit)="submitForm()">
          <div class="form-group">
            <label class="form-label">Country</label>
            <sui-select
              placeholder="Select your country"
              [options]="countries"
              [(ngModel)]="formData.country"
              (change)="onCountryChange()"
              required>
            </sui-select>
          </div>
          
          <sui-button type="submit">Submit Form</sui-button>
        </form>
              `,
              tsCode: `
        // In your component
        formData = {
          country: '',
          city: '',
          language: '',
          timezone: '',
          currency: ''
        };
  
        countries = [
          { label: 'United States', value: 'us' },
          { label: 'Canada', value: 'ca' },
          { label: 'United Kingdom', value: 'uk' }
        ];
  
        onCountryChange(): void {
          this.formData.city = ''; // Reset city when country changes
        }
              `,
              description: 'Select components integrated within a form with dependent fields'
            },
            {
              name: 'Multi-Select with Search',
              code: `
        // In your component
        selectedSkills: string[] = [];
        
        skills = [
          { label: 'JavaScript', value: 'js' },
          { label: 'TypeScript', value: 'ts' },
          { label: 'Angular', value: 'angular' },
          { label: 'React', value: 'react' },
          { label: 'Node.js', value: 'node' }
        ];
  
        // In your template
        <sui-select
          placeholder="Select your skills"
          [options]="skills"
          [(ngModel)]="selectedSkills"
          [multiple]="true"
          [searchable]="true"
          [selectAll]="true"
          searchPlaceholder="Search skills..."
          [maxDisplayItems]="2">
        </sui-select>
              `,
              tsCode: `
        // In your component
        selectedSkills: string[] = [];
        
        skills = [
          { label: 'JavaScript', value: 'js' },
          { label: 'TypeScript', value: 'ts' },
          { label: 'Angular', value: 'angular' },
          { label: 'React', value: 'react' },
          { label: 'Node.js', value: 'node' }
        ];
              `,
              description: 'Multi-select component with search functionality and select all options'
            },
            {
              name: 'Product Selection',
              code: `
        // In your component
        selectedProducts: string[] = [];
        
        products = [
          { label: 'MacBook Pro', value: 'macbook', category: 'Electronics', price: 2499 },
          { label: 'iPhone 15', value: 'iphone', category: 'Electronics', price: 799 },
          { label: 'iPad Air', value: 'ipad', category: 'Electronics', price: 599 }
        ];
  
        getTotalPrice(): number {
          return this.getSelectedProducts().reduce((total, product) => total + product.price, 0);
        }
  
        // In your template
        <sui-select
          placeholder="Select products"
          [options]="products"
          [(ngModel)]="selectedProducts"
          [multiple]="true"
          [searchable]="true"
          [selectAll]="true"
          searchPlaceholder="Search products..."
          [maxDisplayItems]="3">
        </sui-select>
        
        <div *ngIf="selectedProducts.length > 0">
          <h5>Selected Products (&#123;&#123; selectedProducts.length &#125;&#125;):</h5>
          <div>Total: $&#123;&#123; getTotalPrice() &#125;&#125;</div>
        </div>
              `,
              tsCode: `
        // In your component
        selectedProducts: string[] = [];
        
        products = [
          { label: 'MacBook Pro', value: 'macbook', category: 'Electronics', price: 2499 },
          { label: 'iPhone 15', value: 'iphone', category: 'Electronics', price: 799 },
          { label: 'iPad Air', value: 'ipad', category: 'Electronics', price: 599 }
        ];
  
        getTotalPrice(): number {
          return this.getSelectedProducts().reduce((total, product) => total + product.price, 0);
        }
              `,
              description: 'Multi-select component for product selection with pricing information'
            },
            {
              name: 'Loading States',
              code: `
        // In your component
        isLoadingCountries = false;
        isLoadingCities = false;
  
        loadCountries(): void {
          this.isLoadingCountries = true;
          // Simulate API call
          setTimeout(() => {
            this.isLoadingCountries = false;
          }, 2000);
        }
  
        // In your template
        <sui-select
          placeholder="Loading countries..."
          [options]="countries"
          [(ngModel)]="selectedCountry"
          [loading]="isLoadingCountries">
        </sui-select>
        
        <sui-button (click)="loadCountries()">
          {{ isLoadingCountries ? 'Loading...' : 'Load Countries' }}
        </sui-button>
              `,
              tsCode: `
        // In your component
        isLoadingCountries = false;
  
        loadCountries(): void {
          this.isLoadingCountries = true;
          // Simulate API call
          setTimeout(() => {
            this.isLoadingCountries = false;
          }, 2000);
        }
              `,
              description: 'Select components with loading states for async data'
            },
            {
              name: 'Custom Styling',
              code: '<div class="space-y-2">\n  <sui-select placeholder="Enhanced Select" [options]="options" clearable="true" class="enhanced"></sui-select>\n  <sui-select placeholder="Searchable Select" [options]="options" [searchable]="true" class="searchable"></sui-select>\n  <sui-select placeholder="Multi-Select" [options]="options" [multiple]="true" [searchable]="true" [selectAll]="true" class="multi-select"></sui-select>\n</div>',
              description: 'Select components with custom styling and effects'
            }
          ],
          props: [
            {
              name: 'ngModel',
              type: 'unknown | unknown[]',
              default: 'null',
              description: 'Two-way binding for selected value(s)',
              required: false
            },
            {
              name: 'options',
              type: 'Array<{label: string, value: unknown, disabled?: boolean}>',
              default: '[]',
              description: 'Array of options to display',
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
              name: 'disabled',
              type: 'boolean',
              default: 'false',
              description: 'Whether the select is disabled',
              required: false
            },
            {
              name: 'multiple',
              type: 'boolean',
              default: 'false',
              description: 'Enable multi-select mode',
              required: false
            },
            {
              name: 'searchable',
              type: 'boolean',
              default: 'false',
              description: 'Enable search functionality',
              required: false
            },
            {
              name: 'clearable',
              type: 'boolean',
              default: 'false',
              description: 'Show clear button when value is selected',
              required: false
            },
            {
              name: 'selectAll',
              type: 'boolean',
              default: 'false',
              description: 'Show select all/clear all buttons in multi-select mode',
              required: false
            },
            {
              name: 'loading',
              type: 'boolean',
              default: 'false',
              description: 'Show loading state',
              required: false
            },
            {
              name: 'maxDisplayItems',
              type: 'number',
              default: '3',
              description: 'Maximum number of items to display in multi-select',
              required: false
            },
            {
              name: 'showSelectedCount',
              type: 'boolean',
              default: 'true',
              description: 'Show selected count in multi-select mode',
              required: false
            },
            {
              name: 'searchPlaceholder',
              type: 'string',
              default: '"Search..."',
              description: 'Placeholder text for search input',
              required: false
            },
            {
              name: 'noResultsText',
              type: 'string',
              default: '"No results found"',
              description: 'Text to show when no search results are found',
              required: false
            },
            {
              name: 'name',
              type: 'string',
              default: '""',
              description: 'Name attribute for form submission',
              required: false
            },
            {
              name: 'inputId',
              type: 'string',
              default: '""',
              description: 'ID attribute for the select input',
              required: false
            }
          ],
          events: [
            {
              name: 'change',
              type: 'unknown | unknown[]',
              description: 'Emitted when the selection changes'
            }
          ],
          usage: 'Use select components for single or multiple choice selections in forms, data filtering, and any scenario requiring dropdown selection. Choose appropriate features based on your use case.',
          tags: ['select', 'form', 'input', 'dropdown', 'multi-select', 'searchable', 'selection']
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
];
