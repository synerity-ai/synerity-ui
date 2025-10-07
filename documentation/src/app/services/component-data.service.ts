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
    // Data Components
    {
      id: 'table',
      name: 'Table',
      category: 'Data',
      description: 'Data table component for displaying tabular data with sorting, filtering, and selection capabilities',
      examples: [
        {
          name: 'Basic Table',
          code: '<sui-table \n  [value]="sampleData" \n  [columns]="columns"\n  [showFilters]="false">\n</sui-table>',
          tsCode: `interface TableColumn {
  field: string;
  header: string;
  sortable?: boolean;
  filterable?: boolean;
}

interface TableData {
  id: number;
  name: string;
  email: string;
  age: number;
  department: string;
  status: string;
}

export class TableComponent {
  sampleData: TableData[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30, department: 'Engineering', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28, department: 'Marketing', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 35, department: 'Sales', status: 'Inactive' }
  ];

  columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'name', header: 'Name', sortable: true, filterable: true },
    { field: 'email', header: 'Email', sortable: true, filterable: true },
    { field: 'age', header: 'Age', sortable: true },
    { field: 'department', header: 'Department', sortable: true, filterable: true },
    { field: 'status', header: 'Status', sortable: true, filterable: true }
  ];
}`,
          description: 'Basic data table with sample data'
        },
        {
          name: 'Sortable Table',
          code: '<sui-table \n  [value]="sampleData" \n  [columns]="columns"\n  [showFilters]="false"\n  (onSort)="onSort($event)">\n</sui-table>',
          tsCode: `export class TableComponent {
  sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30, department: 'Engineering', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28, department: 'Marketing', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 35, department: 'Sales', status: 'Inactive' }
  ];
  
  columns = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'name', header: 'Name', sortable: true, filterable: true },
    { field: 'email', header: 'Email', sortable: true, filterable: true },
    { field: 'age', header: 'Age', sortable: true },
    { field: 'department', header: 'Department', sortable: true, filterable: true },
    { field: 'status', header: 'Status', sortable: true, filterable: true }
  ];

  onSort(event: any): void {
    console.log('Sort event:', event);
    // Handle sorting logic
  }
}`,
          description: 'Table with sortable columns'
        },
        {
          name: 'Filterable Table',
          code: '<sui-table \n  [value]="sampleData" \n  [columns]="columns"\n  [showFilters]="true"\n  (onFilter)="onFilter($event)">\n</sui-table>',
          tsCode: `export class TableComponent {
  sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30, department: 'Engineering', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28, department: 'Marketing', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 35, department: 'Sales', status: 'Inactive' }
  ];
  
  columns = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'name', header: 'Name', sortable: true, filterable: true },
    { field: 'email', header: 'Email', sortable: true, filterable: true },
    { field: 'age', header: 'Age', sortable: true },
    { field: 'department', header: 'Department', sortable: true, filterable: true },
    { field: 'status', header: 'Status', sortable: true, filterable: true }
  ];

  onFilter(event: any): void {
    console.log('Filter event:', event);
    // Handle filtering logic
  }
}`,
          description: 'Table with column filtering capabilities'
        },
        {
          name: 'Selectable Table (Single)',
          code: '<sui-table \n  [value]="sampleData" \n  [columns]="columns"\n  [showFilters]="false"\n  selectionMode="single"\n  (onRowSelect)="onRowSelect($event)"\n  (onSelectionChange)="onSelectionChange($event)">\n</sui-table>',
          tsCode: `export class TableComponent {
  sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30, department: 'Engineering', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28, department: 'Marketing', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 35, department: 'Sales', status: 'Inactive' }
  ];
  selectedRow: any = null;
  
  columns = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'name', header: 'Name', sortable: true, filterable: true },
    { field: 'email', header: 'Email', sortable: true, filterable: true },
    { field: 'age', header: 'Age', sortable: true },
    { field: 'department', header: 'Department', sortable: true, filterable: true },
    { field: 'status', header: 'Status', sortable: true, filterable: true }
  ];

  onRowSelect(event: any): void {
    this.selectedRow = event.data;
    console.log('Selected row:', event.data);
  }

  onSelectionChange(event: any): void {
    console.log('Selection changed:', event);
  }
}`,
          description: 'Table with single row selection'
        },
        {
          name: 'Selectable Table (Multiple)',
          code: '<sui-table \n  [value]="sampleData" \n  [columns]="columns"\n  [showFilters]="false"\n  selectionMode="multiple"\n  (onRowSelect)="onRowSelect($event)"\n  (onRowUnselect)="onRowUnselect($event)"\n  (onSelectionChange)="onSelectionChange($event)">\n</sui-table>',
          tsCode: `export class TableComponent {
  sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30, department: 'Engineering', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28, department: 'Marketing', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 35, department: 'Sales', status: 'Inactive' }
  ];
  selectedRows: any[] = [];
  
  columns = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'name', header: 'Name', sortable: true, filterable: true },
    { field: 'email', header: 'Email', sortable: true, filterable: true },
    { field: 'age', header: 'Age', sortable: true },
    { field: 'department', header: 'Department', sortable: true, filterable: true },
    { field: 'status', header: 'Status', sortable: true, filterable: true }
  ];

  onRowSelect(event: any): void {
    this.selectedRows.push(event.data);
    console.log('Row selected:', event.data);
  }

  onRowUnselect(event: any): void {
    this.selectedRows = this.selectedRows.filter(row => row.id !== event.data.id);
    console.log('Row unselected:', event.data);
  }

  onSelectionChange(event: any): void {
    this.selectedRows = event;
    console.log('Selection changed:', event);
  }
}`,
          description: 'Table with multiple row selection using checkboxes'
        },
        {
          name: 'Table with Pagination',
          code: '<sui-table \n  [value]="largeDataset" \n  [columns]="columns"\n  [showFilters]="false"\n  [paginator]="true"\n  [rows]="10"\n  [totalRecords]="largeDataset.length">\n</sui-table>',
          tsCode: `export class TableComponent {
  largeDataset = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: \`User \${i + 1}\`,
    email: \`user\${i + 1}@example.com\`,
    age: 25 + (i % 30),
    department: ['Engineering', 'Marketing', 'Sales', 'HR'][i % 4],
    status: i % 3 === 0 ? 'Inactive' : 'Active',
    salary: 50000 + (i * 1000)
  }));
  
  columns = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'name', header: 'Name', sortable: true, filterable: true },
    { field: 'email', header: 'Email', sortable: true, filterable: true },
    { field: 'age', header: 'Age', sortable: true },
    { field: 'department', header: 'Department', sortable: true, filterable: true },
    { field: 'status', header: 'Status', sortable: true, filterable: true }
  ];

  // Pagination is handled automatically by the table component
}`,
          description: 'Table with pagination for large datasets'
        },
        {
          name: 'Empty State Table',
          code: '<sui-table \n  [value]="[]" \n  [columns]="columns"\n  [showFilters]="false"\n  emptyMessage="No employees found">\n</sui-table>',
          tsCode: `export class TableComponent {
  emptyData: any[] = []; // Empty array to show empty state
  
  columns = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'name', header: 'Name', sortable: true, filterable: true },
    { field: 'email', header: 'Email', sortable: true, filterable: true },
    { field: 'age', header: 'Age', sortable: true },
    { field: 'department', header: 'Department', sortable: true, filterable: true },
    { field: 'status', header: 'Status', sortable: true, filterable: true }
  ];
}`,
          description: 'Table showing empty state when no data is available'
        },
        {
          name: 'Product Table',
          code: '<sui-table \n  [value]="productData" \n  [columns]="productColumns"\n  [showFilters]="false"\n  [paginator]="true"\n  [rows]="5">\n</sui-table>',
          tsCode: `interface Product {
  id: number;
  product: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
}

export class TableComponent {
  productData: Product[] = [
    { id: 1, product: 'Laptop', category: 'Electronics', price: 999.99, stock: 50, rating: 4.5 },
    { id: 2, product: 'Mouse', category: 'Electronics', price: 29.99, stock: 200, rating: 4.2 },
    { id: 3, product: 'Keyboard', category: 'Electronics', price: 79.99, stock: 150, rating: 4.3 },
    { id: 4, product: 'Monitor', category: 'Electronics', price: 299.99, stock: 75, rating: 4.4 },
    { id: 5, product: 'Headphones', category: 'Audio', price: 149.99, stock: 100, rating: 4.6 }
  ];

  productColumns = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'product', header: 'Product Name', sortable: true, filterable: true },
    { field: 'category', header: 'Category', sortable: true, filterable: true },
    { field: 'price', header: 'Price', sortable: true },
    { field: 'stock', header: 'Stock', sortable: true },
    { field: 'rating', header: 'Rating', sortable: true }
  ];
}`,
          description: 'Table with product data and pagination'
        }
      ],
      props: [
        {
          name: 'value',
          type: 'any[]',
          default: '[]',
          description: 'Array of data objects to display',
          required: true
        },
        {
          name: 'columns',
          type: 'Array<{field: string, header: string, sortable?: boolean, filterable?: boolean}>',
          default: '[]',
          description: 'Column definitions with field mappings and options',
          required: true
        },
        {
          name: 'paginator',
          type: 'boolean',
          default: 'false',
          description: 'Whether to show pagination controls',
          required: false
        },
        {
          name: 'rows',
          type: 'number',
          default: '10',
          description: 'Number of rows to display per page',
          required: false
        },
        {
          name: 'first',
          type: 'number',
          default: '0',
          description: 'Index of the first row to display',
          required: false
        },
        {
          name: 'totalRecords',
          type: 'number',
          default: '0',
          description: 'Total number of records for pagination',
          required: false
        },
        {
          name: 'sortField',
          type: 'string',
          default: '""',
          description: 'Field name for current sort',
          required: false
        },
        {
          name: 'sortOrder',
          type: '\'asc\' | \'desc\'',
          default: '\'asc\'',
          description: 'Sort order direction',
          required: false
        },
        {
          name: 'filterDelay',
          type: 'number',
          default: '300',
          description: 'Delay in milliseconds before filtering is applied',
          required: false
        },
        {
          name: 'showFilters',
          type: 'boolean',
          default: 'false',
          description: 'Whether to show filter inputs for filterable columns',
          required: false
        },
        {
          name: 'emptyMessage',
          type: 'string',
          default: '\'No records found\'',
          description: 'Message to display when no data is available',
          required: false
        },
        {
          name: 'selectionMode',
          type: '\'single\' | \'multiple\' | null',
          default: 'null',
          description: 'Row selection mode',
          required: false
        }
      ],
      usage: 'Use tables to display structured data in rows and columns. Tables support sorting, filtering, pagination, and row selection for interactive data management.',
      tags: ['data', 'table', 'grid', 'sorting', 'filtering', 'pagination']
    },
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
    // Layout Components
    {
      id: 'panel',
      name: 'Panel',
      category: 'Layout',
      description: 'Panel component for grouping content with collapsible functionality',
      examples: [
        {
          name: 'Basic',
          code: '<sui-panel \n  header="Basic Panel"\n  [collapsed]="basicCollapsed"\n  (onToggle)="onBasicToggle($event)">\n  <p>This is a basic panel with some content.</p>\n</sui-panel>',
          tsCode: `export class PanelComponent {
  basicCollapsed = false;

  onBasicToggle(event: any): void {
    console.log('Basic panel toggle:', event);
  }
}`,
          description: 'Basic panel with header and content'
        },
        {
          name: 'Toggleable',
          code: '<sui-panel \n  header="Toggleable Panel"\n  [toggleable]="true"\n  [collapsed]="toggleableCollapsed"\n  (onToggle)="onToggleableToggle($event)">\n  <p>This panel can be collapsed and expanded.</p>\n</sui-panel>',
          tsCode: `export class PanelComponent {
  toggleableCollapsed = false;

  onToggleableToggle(event: any): void {
    console.log('Toggleable panel toggle:', event);
  }
}`,
          description: 'Panel with toggle functionality'
        },
        {
          name: 'Without Header',
          code: '<sui-panel \n  [showHeader]="false">\n  <p>This panel doesn\'t have a header.</p>\n</sui-panel>',
          tsCode: `export class PanelComponent {
  // No header panel - just content
}`,
          description: 'Panel without header for simple containers'
        },
        {
          name: 'Custom Styled',
          code: '<sui-panel \n  header="Custom Styled Panel"\n  [toggleable]="true"\n  [collapsed]="customCollapsed"\n  styleClass="sui-panel-filled"\n  (onToggle)="onCustomToggle($event)">\n  <p>This panel uses custom styling.</p>\n</sui-panel>',
          tsCode: `export class PanelComponent {
  customCollapsed = false;

  onCustomToggle(event: any): void {
    console.log('Custom panel toggle:', event);
  }
}`,
          description: 'Panel with custom styling and CSS classes'
        },
        {
          name: 'Rich Content',
          code: '<sui-panel \n  header="Panel with Rich Content"\n  [toggleable]="true"\n  [collapsed]="contentCollapsed"\n  (onToggle)="onContentToggle($event)">\n  <div class="space-y-4">\n    <h4>Panel Content</h4>\n    <p>Rich content with multiple elements.</p>\n    <sui-button variant="primary" size="sm">Action Button</sui-button>\n  </div>\n</sui-panel>',
          tsCode: `export class PanelComponent {
  contentCollapsed = false;

  onContentToggle(event: any): void {
    console.log('Content panel toggle:', event);
  }
}`,
          description: 'Panel containing rich content with multiple elements'
        },
        {
          name: 'Small Size',
          code: '<sui-panel \n  header="Small Panel"\n  [toggleable]="true"\n  [collapsed]="smallCollapsed"\n  styleClass="sui-panel-sm"\n  (onToggle)="onSmallToggle($event)">\n  <p>This is a small panel.</p>\n</sui-panel>',
          tsCode: `export class PanelComponent {
  smallCollapsed = false;

  onSmallToggle(event: any): void {
    console.log('Small panel toggle:', event);
  }
}`,
          description: 'Small panel with reduced padding and font sizes'
        },
        {
          name: 'With Header and Footer',
          code: '<sui-panel \n  header="Panel with Footer"\n  footer="Footer text with actions"\n  [toggleable]="true"\n  [collapsed]="headerFooterCollapsed"\n  [showFooter]="true"\n  (onToggle)="onHeaderFooterToggle($event)">\n  <div>\n    <h4>Panel Content</h4>\n    <p>This panel demonstrates both header and footer functionality.</p>\n  </div>\n</sui-panel>',
          tsCode: `export class PanelComponent {
  headerFooterCollapsed = false;

  onHeaderFooterToggle(event: any): void {
    console.log('Header footer panel toggle:', event);
  }
}`,
          description: 'Panel with both header and footer sections with matching styling'
        }
      ],
      props: [
        {
          name: 'header',
          type: 'string',
          default: '""',
          description: 'Panel header text',
          required: false
        },
        {
          name: 'footer',
          type: 'string',
          default: '""',
          description: 'Panel footer text',
          required: false
        },
        {
          name: 'toggleable',
          type: 'boolean',
          default: 'false',
          description: 'Whether the panel can be collapsed/expanded',
          required: false
        },
        {
          name: 'collapsed',
          type: 'boolean',
          default: 'false',
          description: 'Whether the panel is collapsed',
          required: false
        },
        {
          name: 'showHeader',
          type: 'boolean',
          default: 'true',
          description: 'Whether to show the panel header',
          required: false
        },
        {
          name: 'showFooter',
          type: 'boolean',
          default: 'false',
          description: 'Whether to show the panel footer',
          required: false
        },
        {
          name: 'styleClass',
          type: 'string',
          default: '""',
          description: 'Additional CSS classes for styling',
          required: false
        },
        {
          name: 'style',
          type: 'object',
          default: '{}',
          description: 'Inline styles for the panel',
          required: false
        }
      ],
      usage: 'Use panels to group related content and actions. Panels can be collapsible, styled with custom CSS, and contain any type of content including forms, text, images, or other components.',
      tags: ['layout', 'container', 'collapsible', 'accordion', 'content']
    },
    // Navigation Components
    {
      id: 'menu',
      name: 'Menu',
      category: 'Navigation',
      description: 'Navigation menu component with support for icons, submenus, and popup functionality',
      examples: [
        {
          name: 'Basic',
          code: '<sui-menu \n  [model]="basicMenuItems"\n  variant="outlined"\n  (onItemClick)="onBasicItemClick($event)">\n</sui-menu>',
             tsCode: `export class MenuComponent {
   basicMenuItems = [
     { label: 'Home', icon: 'home' },
     { label: 'About', icon: 'info' },
     { label: 'Contact', icon: 'mail' }
   ];

   onBasicItemClick(item: any): void {
     console.log('Menu item clicked:', item);
   }
 }`,
          description: 'Basic navigation menu with simple items'
        },
        {
          name: 'With Icons',
          code: '<sui-menu \n  [model]="iconMenuItems"\n  variant="filled"\n  [glow]="true"\n  (onItemClick)="onIconItemClick($event)">\n</sui-menu>',
             tsCode: `export class MenuComponent {
   iconMenuItems = [
     { label: 'Dashboard', icon: 'layout-dashboard', highlight: true },
     { label: 'Analytics', icon: 'bar-chart-3', badge: '12' },
     { label: 'Reports', icon: 'file-text', tooltip: 'Generate reports' },
     { separator: true },
     { label: 'Settings', icon: 'settings' },
     { label: 'Profile', icon: 'user', badge: 'New' }
   ];

   onIconItemClick(item: any): void {
     console.log('Icon menu item clicked:', item);
   }
 }`,
          description: 'Menu with icons and separators'
        },
        {
          name: 'With Submenus',
          code: '<sui-menu \n  [model]="submenuItems"\n  (onItemClick)="onSubmenuItemClick($event)">\n</sui-menu>',
             tsCode: `export class MenuComponent {
   submenuItems = [
     {
       label: 'File',
       icon: 'file',
       items: [
         { label: 'New', icon: 'plus' },
         { label: 'Open', icon: 'folder-open' },
         { label: 'Save', icon: 'save' }
       ]
     },
     {
       label: 'Edit',
       icon: 'edit',
       items: [
         { label: 'Cut', icon: 'scissors' },
         { label: 'Copy', icon: 'copy' },
         { label: 'Paste', icon: 'clipboard' }
       ]
     }
   ];

   onSubmenuItemClick(item: any): void {
     console.log('Submenu item clicked:', item);
   }
 }`,
          description: 'Menu with nested submenu items'
        },
        {
          name: 'Disabled Items',
          code: '<sui-menu \n  [model]="disabledMenuItems"\n  (onItemClick)="onDisabledItemClick($event)">\n</sui-menu>',
          tsCode: `export class MenuComponent {
  disabledMenuItems = [
    { label: 'Available', icon: '✅' },
    { label: 'Disabled Item', icon: '❌', disabled: true },
    { label: 'Another Available', icon: '✅' },
    { separator: true },
    { label: 'Coming Soon', icon: '⏳', disabled: true }
  ];

  onDisabledItemClick(item: any): void {
    console.log('Disabled menu item clicked:', item);
  }
}`,
          description: 'Menu with disabled items and separators'
        },
        {
          name: 'Popup Menu',
          code: '<sui-button \n  variant="primary" \n  (click)="showPopupMenu($event)">\n  Right Click Me\n</sui-button>\n<sui-menu \n  #popupMenu\n  [model]="popupMenuItems"\n  [popup]="true"\n  (onItemClick)="onPopupItemClick($event)">\n</sui-menu>',
          tsCode: `export class MenuComponent {
  popupMenuItems = [
    { label: 'Edit', icon: '✏️' },
    { label: 'Duplicate', icon: '📋' },
    { label: 'Delete', icon: '🗑️' },
    { separator: true },
    { label: 'Share', icon: '📤' }
  ];

  popupMenu: any;

  showPopupMenu(event: Event): void {
    if (this.popupMenu) {
      this.popupMenu.show(event);
    }
  }

  onPopupItemClick(item: any): void {
    console.log('Popup menu item clicked:', item);
  }
}`,
          description: 'Popup menu triggered by button click'
        },
        {
          name: 'Small Size',
          code: '<sui-menu \n  [model]="smallMenuItems"\n  styleClass="sui-menu-sm"\n  (onItemClick)="onSmallItemClick($event)">\n</sui-menu>',
          tsCode: `export class MenuComponent {
  smallMenuItems = [
    { label: 'Item 1', icon: '1️⃣' },
    { label: 'Item 2', icon: '2️⃣' },
    { label: 'Item 3', icon: '3️⃣' }
  ];

  onSmallItemClick(item: any): void {
    console.log('Small menu item clicked:', item);
  }
}`,
          description: 'Small menu with reduced padding and font sizes'
        },
        {
          name: 'Large Size',
          code: '<sui-menu \n  [model]="largeMenuItems"\n  styleClass="sui-menu-lg"\n  (onItemClick)="onLargeItemClick($event)">\n</sui-menu>',
          tsCode: `export class MenuComponent {
  largeMenuItems = [
    { label: 'Large Item One', icon: '🔴' },
    { label: 'Large Item Two', icon: '🟢' },
    { label: 'Large Item Three', icon: '🔵' }
  ];

  onLargeItemClick(item: any): void {
    console.log('Large menu item clicked:', item);
  }
}`,
          description: 'Large menu with increased padding and font sizes'
        }
      ],
      props: [
        {
          name: 'model',
          type: 'MenuItem[]',
          default: '[]',
          description: 'Array of menu items with label, icon/lucideIcon, command, disabled, separator, items, badge, tooltip, and highlight properties',
          required: true
        },
        {
          name: 'popup',
          type: 'boolean',
          default: 'false',
          description: 'Whether the menu should be used as a popup menu',
          required: false
        },
        {
          name: 'variant',
          type: 'string',
          default: '"default"',
          description: 'Menu variant: "default", "outlined", or "filled"',
          required: false
        },
        {
          name: 'size',
          type: 'string',
          default: '"md"',
          description: 'Menu size: "sm", "md", or "lg"',
          required: false
        },
        {
          name: 'glow',
          type: 'boolean',
          default: 'false',
          description: 'Whether to add glow effect to the menu',
          required: false
        },
        {
          name: 'styleClass',
          type: 'string',
          default: '""',
          description: 'Additional CSS classes for styling',
          required: false
        },
        {
          name: 'style',
          type: 'object',
          default: '{}',
          description: 'Inline styles for the menu',
          required: false
        }
      ],
      usage: 'Use menus for navigation, context menus, and application structure. Menus support Lucide icons, separators, disabled items, submenus, badges, tooltips, highlights, and popup functionality with theme-aware styling and modern animations.',
      tags: ['navigation', 'menu', 'dropdown', 'context-menu', 'popup']
    },
    {
      id: 'dialog',
      name: 'Dialog',
      category: 'Overlay',
      description: 'Modal dialog component with header, content, and customizable features',
      examples: [
        {
          name: 'Basic',
          code: '<sui-button \n  variant="primary" \n  (click)="showDialog()">\n  Open Dialog\n</sui-button>\n\n<sui-dialog\n  [visible]="dialogVisible"\n  header="Basic Dialog"\n  (onShow)="onDialogShow()"\n  (onHide)="onDialogHide()">\n  <p>This is a basic dialog with header and content.</p>\n</sui-dialog>',
          tsCode: `export class DialogComponent {
  dialogVisible = false;

  showDialog(): void {
    this.dialogVisible = true;
  }

  onDialogShow(): void {
    console.log('Dialog shown');
  }

  onDialogHide(): void {
    console.log('Dialog hidden');
  }
}`,
          description: 'Basic dialog with header and content'
        },
        {
          name: 'Modal',
          code: '<sui-dialog\n  [visible]="modalVisible"\n  [modal]="true"\n  header="Modal Dialog"\n  (onHide)="onDialogHide()">\n  <p>This is a modal dialog that blocks background interaction.</p>\n</sui-dialog>',
          tsCode: `export class DialogComponent {
  modalVisible = false;

  showModal(): void {
    this.modalVisible = true;
  }

  onDialogHide(): void {
    console.log('Modal dialog hidden');
  }
}`,
          description: 'Modal dialog that blocks background interaction'
        },
        {
          name: 'Sizes',
          code: '<sui-dialog\n  [visible]="smallVisible"\n  header="Small Dialog"\n  size="sm">\n  <p>Small dialog with compact sizing.</p>\n</sui-dialog>\n\n<sui-dialog\n  [visible]="largeVisible"\n  header="Large Dialog"\n  size="lg">\n  <p>Large dialog with more space for content.</p>\n</sui-dialog>',
          tsCode: `export class DialogComponent {
  smallVisible = false;
  largeVisible = false;

  showSmall(): void {
    this.smallVisible = true;
  }

  showLarge(): void {
    this.largeVisible = true;
  }
}`,
          description: 'Different dialog sizes: small, medium, large, extra large, and full screen'
        },
        {
          name: 'Positions',
          code: '<sui-dialog\n  [visible]="topVisible"\n  header="Top Dialog"\n  position="top">\n  <p>Dialog positioned at the top.</p>\n</sui-dialog>\n\n<sui-dialog\n  [visible]="rightVisible"\n  header="Right Dialog"\n  position="right">\n  <p>Dialog positioned on the right.</p>\n</sui-dialog>',
          tsCode: `export class DialogComponent {
  topVisible = false;
  rightVisible = false;

  showTop(): void {
    this.topVisible = true;
  }

  showRight(): void {
    this.rightVisible = true;
  }
}`,
          description: 'Dialog positioning options: center, top, bottom, left, right, and corners'
        },
        {
          name: 'Advanced Features',
          code: '<sui-dialog\n  [visible]="maximizableVisible"\n  header="Maximizable Dialog"\n  [maximizable]="true"\n  (onMaximize)="onMaximize()"\n  (onUnmaximize)="onUnmaximize()">\n  <p>This dialog can be maximized to full screen.</p>\n</sui-dialog>\n\n<sui-dialog\n  [visible]="resizableVisible"\n  header="Resizable Dialog"\n  [resizable]="true">\n  <p>This dialog can be resized by dragging.</p>\n</sui-dialog>',
          tsCode: `export class DialogComponent {
  maximizableVisible = false;
  resizableVisible = false;

  showMaximizable(): void {
    this.maximizableVisible = true;
  }

  showResizable(): void {
    this.resizableVisible = true;
  }

  onMaximize(): void {
    console.log('Dialog maximized');
  }

  onUnmaximize(): void {
    console.log('Dialog unmaximized');
  }
}`,
          description: 'Advanced features: maximizable, resizable, and non-closable dialogs'
        }
      ],
      props: [
        {
          name: 'visible',
          type: 'boolean',
          default: 'false',
          description: 'Controls the visibility of the dialog',
          required: true
        },
        {
          name: 'header',
          type: 'string',
          default: '""',
          description: 'Header text for the dialog',
          required: false
        },
        {
          name: 'modal',
          type: 'boolean',
          default: 'true',
          description: 'Whether the dialog is modal (blocks background interaction)',
          required: false
        },
        {
          name: 'closable',
          type: 'boolean',
          default: 'true',
          description: 'Whether the dialog can be closed via the X button or backdrop click',
          required: false
        },
        {
          name: 'maximizable',
          type: 'boolean',
          default: 'false',
          description: 'Whether the dialog can be maximized to full screen',
          required: false
        },
        {
          name: 'resizable',
          type: 'boolean',
          default: 'false',
          description: 'Whether the dialog can be resized by dragging',
          required: false
        },
        {
          name: 'size',
          type: 'string',
          default: 'md',
          description: 'Size of the dialog: sm, md, lg, xl, or full',
          required: false
        },
        {
          name: 'position',
          type: 'string',
          default: 'center',
          description: 'Position of the dialog: center, top, bottom, left, right, top-left, top-right, bottom-left, or bottom-right',
          required: false
        },
        {
          name: 'width',
          type: 'string',
          default: 'auto',
          description: 'Custom width for the dialog',
          required: false
        },
        {
          name: 'height',
          type: 'string',
          default: 'auto',
          description: 'Custom height for the dialog',
          required: false
        },
        {
          name: 'style',
          type: 'object',
          default: '{}',
          description: 'Inline styles for the dialog',
          required: false
        },
        {
          name: 'styleClass',
          type: 'string',
          default: '""',
          description: 'CSS classes for the dialog',
          required: false
        }
      ],
      events: [
        {
          name: 'onShow',
          type: 'EventEmitter<void>',
          description: 'Callback to invoke when the dialog is shown.'
        },
        {
          name: 'onHide',
          type: 'EventEmitter<void>',
          description: 'Callback to invoke when the dialog is hidden.'
        },
        {
          name: 'onMaximize',
          type: 'EventEmitter<void>',
          description: 'Callback to invoke when the dialog is maximized.'
        },
        {
          name: 'onUnmaximize',
          type: 'EventEmitter<void>',
          description: 'Callback to invoke when the dialog is unmaximized.'
        }
      ],
      usage: 'Use dialogs for modal interactions, forms, confirmations, and displaying important information. Dialogs support multiple sizes, positions, and advanced features like maximization and resizing with theme-aware styling.',
      tags: ['overlay', 'modal', 'dialog', 'popup', 'form']
    },
    // Media Components
    {
      id: 'carousel',
      name: 'Carousel',
      category: 'Media',
      description: 'Interactive image carousel with navigation controls, indicators, and autoplay functionality',
      examples: [
        {
          name: 'Basic Carousel',
          code: '<sui-carousel [value]="images" [activeIndex]="currentIndex" [circular]="true" [showIndicators]="true" [showNavigators]="true" (onPageChange)="onPageChange($event)"></sui-carousel>',
          description: 'Basic image carousel with navigation controls'
        },
        {
          name: 'Autoplay Carousel',
          code: '<sui-carousel [value]="images" [autoplayInterval]="3000" [circular]="true" [showIndicators]="true" [showNavigators]="true"></sui-carousel>',
          description: 'Carousel with automatic slideshow functionality'
        },
        {
          name: 'Product Showcase',
          code: '<sui-carousel [value]="productImages" [circular]="true" [showIndicators]="true" [showNavigators]="true" styleClass="product-carousel"></sui-carousel>',
          description: 'Carousel for displaying product images with captions'
        },
        {
          name: 'Compact Size',
          code: '<sui-carousel [value]="images" styleClass="compact" [circular]="true" [showIndicators]="true" [showNavigators]="true"></sui-carousel>',
          description: 'Compact carousel with reduced size'
        },
        {
          name: 'Large Size',
          code: '<sui-carousel [value]="images" styleClass="large" [circular]="true" [showIndicators]="true" [showNavigators]="true"></sui-carousel>',
          description: 'Large carousel with increased size'
        },
        {
          name: 'Square Aspect',
          code: '<sui-carousel [value]="images" styleClass="square" [circular]="true" [showIndicators]="true" [showNavigators]="true"></sui-carousel>',
          description: 'Carousel with square aspect ratio'
        }
      ],
      props: [
        {
          name: 'value',
          type: 'CarouselItem[]',
          default: '[]',
          description: 'Array of carousel items with src, alt, title, and caption properties',
          required: true
        },
        {
          name: 'activeIndex',
          type: 'number',
          default: '0',
          description: 'Index of the currently active slide',
          required: false
        },
        {
          name: 'circular',
          type: 'boolean',
          default: 'true',
          description: 'Whether the carousel should loop infinitely',
          required: false
        },
        {
          name: 'autoplayInterval',
          type: 'number',
          default: '0',
          description: 'Auto-play interval in milliseconds (0 to disable)',
          required: false
        },
        {
          name: 'showIndicators',
          type: 'boolean',
          default: 'true',
          description: 'Whether to show dot indicators',
          required: false
        },
        {
          name: 'showNavigators',
          type: 'boolean',
          default: 'true',
          description: 'Whether to show navigation arrows',
          required: false
        },
        {
          name: 'style',
          type: 'object',
          default: '{}',
          description: 'Inline styles for the carousel',
          required: false
        },
        {
          name: 'styleClass',
          type: 'string',
          default: '""',
          description: 'CSS classes for the carousel (supports compact, large, square variants)',
          required: false
        }
      ],
      events: [
        {
          name: 'onPageChange',
          type: 'EventEmitter<number>',
          description: 'Callback to invoke when the active slide changes'
        }
      ],
      usage: 'Use carousels to display multiple images or content in an interactive slideshow. Perfect for product showcases, image galleries, and promotional content.',
      tags: ['media', 'carousel', 'slideshow', 'images', 'navigation']
    },
    // Messages Components
    {
      id: 'toast',
      name: 'Toast',
      category: 'Messages',
      description: 'Interactive toast notifications with different severity levels, positioning, and customization options',
      examples: [
        {
          name: 'Success Toast',
          code: 'this.toastService.add({ severity: "success", summary: "Success!", detail: "Operation completed successfully.", life: 3000, closable: true });',
          description: 'Success notification for completed actions'
        },
        {
          name: 'Info Toast',
          code: 'this.toastService.add({ severity: "info", summary: "Information", detail: "Here is some helpful information.", life: 4000, closable: true });',
          description: 'Informational messages for user guidance'
        },
        {
          name: 'Warning Toast',
          code: 'this.toastService.add({ severity: "warn", summary: "Warning", detail: "Please review your input.", life: 5000, closable: true });',
          description: 'Warning messages for potential issues'
        },
        {
          name: 'Error Toast',
          code: 'this.toastService.add({ severity: "error", summary: "Error", detail: "Something went wrong.", life: 6000, closable: true });',
          description: 'Error messages for failed operations'
        },
        {
          name: 'Persistent Toast',
          code: 'this.toastService.add({ severity: "info", summary: "Persistent Message", detail: "This toast will not auto-dismiss.", life: 0, closable: true });',
          description: 'Toast that requires manual dismissal'
        },
        {
          name: 'Non-Closable Toast',
          code: 'this.toastService.add({ severity: "info", summary: "System Message", detail: "Important system notification.", life: 3000, closable: false });',
          description: 'Toast that cannot be manually closed'
        }
      ],
      props: [
        {
          name: 'position',
          type: 'string',
          default: 'top-right',
          description: 'Position of the toast container (top-right, top-left, bottom-right, bottom-left, top-center, bottom-center)',
          required: false
        },
        {
          name: 'style',
          type: 'object',
          default: '{}',
          description: 'Inline styles for the toast container',
          required: false
        },
        {
          name: 'styleClass',
          type: 'string',
          default: '""',
          description: 'CSS classes for the toast container',
          required: false
        }
      ],
      events: [
        {
          name: 'onClose',
          type: 'EventEmitter<any>',
          description: 'Callback to invoke when a toast is closed'
        }
      ],
      usage: 'Use toasts to display temporary, non-blocking messages to users. Perfect for notifications, alerts, and feedback messages that don\'t require immediate user action.',
      tags: ['notification', 'message', 'toast', 'alert', 'feedback']
    },
    // Progress Components
    {
      id: 'progress-bar',
      name: 'Progress Bar',
      category: 'Progress',
      description: 'Visual indicator showing the completion status of an operation or process with multiple variants and customization options',
      examples: [
        {
          name: 'Basic Progress Bar',
          code: '<sui-progress-bar [value]="45" [showValue]="true" mode="determinate"></sui-progress-bar>',
          description: 'Standard progress bar with percentage display'
        },
        {
          name: 'Success Progress Bar',
          code: '<sui-progress-bar [value]="75" [showValue]="true" [color]="\'#10b981\'" styleClass="success"></sui-progress-bar>',
          description: 'Progress bar indicating successful completion'
        },
        {
          name: 'Indeterminate Progress Bar',
          code: '<sui-progress-bar mode="indeterminate" [showValue]="false" styleClass="info"></sui-progress-bar>',
          description: 'Progress bar for unknown duration operations'
        },
        {
          name: 'Animated Progress Bar',
          code: '<sui-progress-bar [value]="60" [showValue]="true" styleClass="animated"></sui-progress-bar>',
          description: 'Progress bar with animated stripes'
        },
        {
          name: 'Size Variations',
          code: '<div class="space-y-2">\n  <sui-progress-bar [value]="40" size="small" [showValue]="true"></sui-progress-bar>\n  <sui-progress-bar [value]="65" size="normal" [showValue]="true"></sui-progress-bar>\n  <sui-progress-bar [value]="80" size="large" [showValue]="true"></sui-progress-bar>\n</div>',
          description: 'Progress bars in different sizes'
        },
        {
          name: 'Custom Unit Display',
          code: '<sui-progress-bar [value]="2.4" [showValue]="true" unit="MB" [color]="\'#3b82f6\'"></sui-progress-bar>',
          description: 'Progress bar with custom unit (MB, seconds, etc.)'
        }
      ],
      props: [
        {
          name: 'value',
          type: 'number',
          default: '0',
          description: 'Progress value as a percentage (0-100)',
          required: false
        },
        {
          name: 'mode',
          type: 'string',
          default: 'determinate',
          description: 'Progress bar mode - determinate shows specific progress, indeterminate shows ongoing progress',
          required: false
        },
        {
          name: 'showValue',
          type: 'boolean',
          default: 'true',
          description: 'Whether to display the progress value',
          required: false
        },
        {
          name: 'unit',
          type: 'string',
          default: '%',
          description: 'Unit to display with the progress value',
          required: false
        },
        {
          name: 'color',
          type: 'string',
          default: '""',
          description: 'Custom color for the progress bar fill',
          required: false
        },
        {
          name: 'styleClass',
          type: 'string',
          default: '""',
          description: 'CSS classes for styling variants (success, warning, danger, info, animated)',
          required: false
        },
        {
          name: 'style',
          type: 'object',
          default: '{}',
          description: 'Inline styles for the progress bar',
          required: false
        }
      ],
      events: [],
      usage: 'Use progress bars to show the completion status of operations, file uploads, form submissions, or any process where users need to understand progress. Choose determinate mode for known progress and indeterminate for unknown duration operations.',
        tags: ['progress', 'indicator', 'completion', 'loading', 'feedback']
      },
      // Form Components
      {
        id: 'checkbox',
        name: 'Checkbox',
        category: 'Form',
        description: 'Interactive checkbox component with multiple variants, sizes, and styling options for forms and user interfaces',
        examples: [
          {
            name: 'Basic Checkbox',
            code: '<sui-checkbox [(ngModel)]="checked" label="Basic Checkbox"></sui-checkbox>',
            description: 'Simple checkbox with basic functionality'
          },
          {
            name: 'Size Variations',
            code: '<div class="space-y-2">\n  <sui-checkbox styleClass="checkbox-sm" label="Small Checkbox"></sui-checkbox>\n  <sui-checkbox styleClass="checkbox-lg" label="Large Checkbox"></sui-checkbox>\n  <sui-checkbox styleClass="checkbox-xl" label="Extra Large Checkbox"></sui-checkbox>\n</div>',
            description: 'Checkboxes in different sizes'
          },
          {
            name: 'Color Variants',
            code: '<div class="space-y-2">\n  <sui-checkbox styleClass="checkbox-primary" label="Primary Checkbox"></sui-checkbox>\n  <sui-checkbox styleClass="checkbox-success" label="Success Checkbox"></sui-checkbox>\n  <sui-checkbox styleClass="checkbox-warning" label="Warning Checkbox"></sui-checkbox>\n  <sui-checkbox styleClass="checkbox-danger" label="Danger Checkbox"></sui-checkbox>\n</div>',
            description: 'Checkboxes with different color themes'
          },
          {
            name: 'Form Integration',
            code: `
      // In your component
      formData = {
        acceptTerms: false,
        subscribeNewsletter: true,
        shareData: false
      };

      submitForm(): void {
        console.log('Form submitted:', this.formData);
      }

      // In your template
      <form (ngSubmit)="submitForm()">
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
        
        <sui-button type="submit" [disabled]="!formData.acceptTerms">
          Submit Form
        </sui-button>
      </form>
            `,
            tsCode: `
      // In your component
      formData = {
        acceptTerms: false,
        subscribeNewsletter: true,
        shareData: false
      };

      submitForm(): void {
        console.log('Form submitted:', this.formData);
      }
            `,
            description: 'Checkboxes integrated within a form with validation'
          },
          {
            name: 'Todo List Example',
            code: `
      // In your component
      interface Task {
        id: string;
        name: string;
        completed: boolean;
      }

      todos: Task[] = [
        { id: '1', name: 'Complete project documentation', completed: false },
        { id: '2', name: 'Review code changes', completed: true },
        { id: '3', name: 'Update dependencies', completed: false }
      ];

      toggleTaskCompletion(task: Task): void {
        task.completed = !task.completed;
      }

      getCompletedTodosCount(): number {
        return this.todos.filter(todo => todo.completed).length;
      }

      // In your template
      <div *ngFor="let todo of todos" class="todo-item">
        <sui-checkbox 
          [(ngModel)]="todo.completed"
          (change)="toggleTaskCompletion(todo)"
          [label]="todo.name">
        </sui-checkbox>
      </div>
      <div>Completed: {{ getCompletedTodosCount() }}/{{ todos.length }}</div>
            `,
            tsCode: `
      interface Task {
        id: string;
        name: string;
        completed: boolean;
      }

      todos: Task[] = [
        { id: '1', name: 'Complete project documentation', completed: false },
        { id: '2', name: 'Review code changes', completed: true },
        { id: '3', name: 'Update dependencies', completed: false }
      ];

      toggleTaskCompletion(task: Task): void {
        task.completed = !task.completed;
      }

      getCompletedTodosCount(): number {
        return this.todos.filter(todo => todo.completed).length;
      }
            `,
            description: 'Interactive todo list with progress tracking'
          },
          {
            name: 'Checkbox Groups',
            code: `
      // In your component
      interface CheckboxOption {
        id: string;
        label: string;
        value: string;
        checked: boolean;
      }

      interface CheckboxGroup {
        name: string;
        options: CheckboxOption[];
      }

      checkboxGroups: CheckboxGroup[] = [
        {
          name: 'Skills',
          options: [
            { id: 'skills-angular', label: 'Angular', value: 'angular', checked: true },
            { id: 'skills-react', label: 'React', value: 'react', checked: false },
            { id: 'skills-vue', label: 'Vue.js', value: 'vue', checked: true }
          ]
        }
      ];

      selectAll(group: CheckboxGroup): void {
        const allChecked = group.options.every(option => option.checked);
        group.options.forEach(option => option.checked = !allChecked);
      }

      // In your template
      <div *ngFor="let group of checkboxGroups" class="checkbox-group">
        <div class="group-header">
          <h4>{{ group.name }}</h4>
          <sui-button size="sm" (click)="selectAll(group)">Select All</sui-button>
        </div>
        <div *ngFor="let option of group.options">
          <sui-checkbox 
            [(ngModel)]="option.checked"
            [label]="option.label"
            [inputId]="option.id">
          </sui-checkbox>
        </div>
      </div>
            `,
            tsCode: `
      interface CheckboxOption {
        id: string;
        label: string;
        value: string;
        checked: boolean;
      }

      interface CheckboxGroup {
        name: string;
        options: CheckboxOption[];
      }

      checkboxGroups: CheckboxGroup[] = [
        {
          name: 'Skills',
          options: [
            { id: 'skills-angular', label: 'Angular', value: 'angular', checked: true },
            { id: 'skills-react', label: 'React', value: 'react', checked: false },
            { id: 'skills-vue', label: 'Vue.js', value: 'vue', checked: true }
          ]
        }
      ];

      selectAll(group: CheckboxGroup): void {
        const allChecked = group.options.every(option => option.checked);
        group.options.forEach(option => option.checked = !allChecked);
      }
            `,
            description: 'Multiple checkbox groups with select all functionality'
          },
          {
            name: 'Settings Panel',
            code: `
      // In your component
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

      // In your template
      <div class="settings-panel">
        <div class="settings-section">
          <h4>Notifications</h4>
          <sui-checkbox 
            [(ngModel)]="settings.notifications.email" 
            label="Email notifications">
          </sui-checkbox>
          <sui-checkbox 
            [(ngModel)]="settings.notifications.push" 
            label="Push notifications">
          </sui-checkbox>
        </div>
        
        <div class="settings-section">
          <h4>Privacy</h4>
          <sui-checkbox 
            [(ngModel)]="settings.privacy.profileVisible" 
            label="Make profile visible">
          </sui-checkbox>
          <sui-checkbox 
            [(ngModel)]="settings.privacy.dataSharing" 
            label="Allow data sharing">
          </sui-checkbox>
        </div>
      </div>
            `,
            tsCode: `
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
            `,
            description: 'Checkboxes organized in a settings panel layout'
          },
          {
            name: 'Custom Styling',
            code: '<div class="space-y-2">\n  <sui-checkbox styleClass="checkbox-enhanced" label="Enhanced Checkbox"></sui-checkbox>\n  <sui-checkbox styleClass="checkbox-animated" label="Animated Checkbox"></sui-checkbox>\n  <sui-checkbox styleClass="checkbox-glow" label="Glow Effect"></sui-checkbox>\n  <sui-checkbox styleClass="checkbox-rounded" label="Rounded Checkbox"></sui-checkbox>\n  <sui-checkbox styleClass="checkbox-borderless" label="Borderless Checkbox"></sui-checkbox>\n  <sui-checkbox styleClass="checkbox-shadow" label="Shadow Effect"></sui-checkbox>\n  <sui-checkbox styleClass="checkbox-gradient" label="Gradient Background"></sui-checkbox>\n</div>',
            description: 'Checkboxes with custom styling and effects'
          }
        ],
        props: [
          {
            name: 'ngModel',
            type: 'boolean',
            default: 'false',
            description: 'Two-way binding for the checkbox state',
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
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Whether the checkbox is disabled',
            required: false
          },
          {
            name: 'indeterminate',
            type: 'boolean',
            default: 'false',
            description: 'Whether the checkbox is in indeterminate state',
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
            description: 'ID attribute for the checkbox input',
            required: false
          },
          {
            name: 'cssClass',
            type: 'string',
            default: '""',
            description: 'CSS classes for styling variants (checkbox-sm, checkbox-lg, checkbox-primary, etc.)',
            required: false
          },
          {
            name: 'value',
            type: 'unknown',
            default: 'true',
            description: 'Value to be submitted when checkbox is checked',
            required: false
          }
        ],
        events: [
          {
            name: 'change',
            type: 'boolean',
            description: 'Emitted when the checkbox state changes'
          }
        ],
        usage: 'Use checkboxes for binary choices, form inputs, settings panels, and interactive lists. Choose appropriate size and color variants based on your design system.',
        tags: ['checkbox', 'form', 'input', 'boolean', 'interactive', 'selection']
      },
      {
        id: 'radio-button',
        name: 'Radio Button',
        category: 'Form',
        description: 'Single-choice radio button component with multiple variants, sizes, and styling options for exclusive selections',
        examples: [
          {
            name: 'Basic Radio Button',
            code: '<sui-radio-button name="group" value="option1" label="Option 1" [(ngModel)]="selectedValue"></sui-radio-button>\n<sui-radio-button name="group" value="option2" label="Option 2" [(ngModel)]="selectedValue"></sui-radio-button>',
            description: 'Simple radio buttons with basic functionality'
          },
          {
            name: 'Size Variations',
            code: '<div class="space-y-2">\n  <sui-radio-button cssClass="radio-sm" name="size-group" value="small" label="Small Radio Button"></sui-radio-button>\n  <sui-radio-button cssClass="radio-lg" name="size-group" value="large" label="Large Radio Button"></sui-radio-button>\n  <sui-radio-button cssClass="radio-xl" name="size-group" value="xlarge" label="Extra Large Radio Button"></sui-radio-button>\n</div>',
            description: 'Radio buttons in different sizes'
          },
          {
            name: 'Color Variants',
            code: '<div class="space-y-2">\n  <sui-radio-button cssClass="radio-primary" name="color-group" value="primary" label="Primary Radio Button"></sui-radio-button>\n  <sui-radio-button cssClass="radio-success" name="color-group" value="success" label="Success Radio Button"></sui-radio-button>\n  <sui-radio-button cssClass="radio-warning" name="color-group" value="warning" label="Warning Radio Button"></sui-radio-button>\n  <sui-radio-button cssClass="radio-danger" name="color-group" value="danger" label="Danger Radio Button"></sui-radio-button>\n</div>',
            description: 'Radio buttons with different color themes'
          },
          {
            name: 'Form Integration',
            code: `
      // In your component
      formData = {
        preferredContact: 'email',
        notificationFrequency: 'daily',
        theme: 'light'
      };

      submitForm(): void {
        console.log('Form submitted:', this.formData);
      }

      // In your template
      <form (ngSubmit)="submitForm()">
        <div class="form-group">
          <h4>Preferred Contact Method</h4>
          <sui-radio-button 
            name="contact" 
            value="email" 
            label="Email" 
            [(ngModel)]="formData.preferredContact">
          </sui-radio-button>
          <sui-radio-button 
            name="contact" 
            value="phone" 
            label="Phone" 
            [(ngModel)]="formData.preferredContact">
          </sui-radio-button>
        </div>
        
        <sui-button type="submit">Submit Form</sui-button>
      </form>
            `,
            tsCode: `
      // In your component
      formData = {
        preferredContact: 'email',
        notificationFrequency: 'daily',
        theme: 'light'
      };

      submitForm(): void {
        console.log('Form submitted:', this.formData);
      }
            `,
            description: 'Radio buttons integrated within a form with validation'
          },
          {
            name: 'Survey Example',
            code: `
      // In your component
      surveyData = {
        ageRange: '',
        experience: '',
        satisfaction: '',
        recommendation: ''
      };

      ageRanges = [
        { id: 'age-18-25', value: '18-25', label: '18-25 years' },
        { id: 'age-26-35', value: '26-35', label: '26-35 years' },
        { id: 'age-36-45', value: '36-45', label: '36-45 years' }
      ];

      getSurveyProgress(): number {
        const fields = ['ageRange', 'experience', 'satisfaction', 'recommendation'];
        const completed = fields.filter(field => this.surveyData[field] !== '').length;
        return (completed / fields.length) * 100;
      }

      // In your template
      <form (ngSubmit)="submitSurvey()">
        <div class="survey-question">
          <h5>What is your age range?</h5>
          <sui-radio-button 
            *ngFor="let option of ageRanges"
            name="age-range"
            [value]="option.value"
            [inputId]="option.id"
            [label]="option.label"
            [(ngModel)]="surveyData.ageRange">
          </sui-radio-button>
        </div>
        
        <div class="progress-bar">
          <div class="progress-fill" [style.width.%]="getSurveyProgress()"></div>
        </div>
        
        <sui-button type="submit">Submit Survey</sui-button>
      </form>
            `,
            tsCode: `
      // In your component
      surveyData = {
        ageRange: '',
        experience: '',
        satisfaction: '',
        recommendation: ''
      };

      ageRanges = [
        { id: 'age-18-25', value: '18-25', label: '18-25 years' },
        { id: 'age-26-35', value: '26-35', label: '26-35 years' },
        { id: 'age-36-45', value: '36-45', label: '36-45 years' }
      ];

      getSurveyProgress(): number {
        const fields = ['ageRange', 'experience', 'satisfaction', 'recommendation'];
        const completed = fields.filter(field => this.surveyData[field] !== '').length;
        return (completed / fields.length) * 100;
      }
            `,
            description: 'Interactive survey with progress tracking using radio buttons'
          },
          {
            name: 'Settings Panel',
            code: `
      // In your component
      settings = {
        language: 'en',
        currency: 'usd',
        timezone: 'utc',
        dateFormat: 'mm/dd/yyyy'
      };

      languages = [
        { id: 'lang-en', value: 'en', label: 'English' },
        { id: 'lang-es', value: 'es', label: 'Español' },
        { id: 'lang-fr', value: 'fr', label: 'Français' }
      ];

      // In your template
      <div class="settings-panel">
        <div class="settings-section">
          <h4>Language</h4>
          <sui-radio-button 
            *ngFor="let option of languages"
            name="language"
            [value]="option.value"
            [inputId]="option.id"
            [label]="option.label"
            [(ngModel)]="settings.language">
          </sui-radio-button>
        </div>
        
        <div class="settings-summary">
          <p><strong>Language:</strong> {{ getSelectedLabel(languages, settings.language) }}</p>
        </div>
      </div>
            `,
            tsCode: `
      // In your component
      settings = {
        language: 'en',
        currency: 'usd',
        timezone: 'utc',
        dateFormat: 'mm/dd/yyyy'
      };

      languages = [
        { id: 'lang-en', value: 'en', label: 'English' },
        { id: 'lang-es', value: 'es', label: 'Español' },
        { id: 'lang-fr', value: 'fr', label: 'Français' }
      ];

      getSelectedLabel(options: any[], selectedValue: string): string {
        const option = options.find(opt => opt.value === selectedValue);
        return option ? option.label : 'None selected';
      }
            `,
            description: 'Radio buttons organized in a settings panel layout'
          },
          {
            name: 'Payment Method Selection',
            code: `
      // In your component
      paymentMethods = [
        { id: 'payment-card', value: 'card', label: 'Credit/Debit Card', description: 'Visa, Mastercard, American Express' },
        { id: 'payment-paypal', value: 'paypal', label: 'PayPal', description: 'Pay with your PayPal account' },
        { id: 'payment-bank', value: 'bank', label: 'Bank Transfer', description: 'Direct bank transfer' }
      ];

      selectedPaymentMethod = 'card';

      // In your template
      <div class="payment-methods">
        <div *ngFor="let method of paymentMethods" class="payment-option">
          <sui-radio-button 
            name="payment-method"
            [value]="method.value"
            [inputId]="method.id"
            [label]="method.label"
            [(ngModel)]="selectedPaymentMethod">
          </sui-radio-button>
          <div class="payment-description">
            <span>{{ method.description }}</span>
          </div>
        </div>
      </div>
      
      <div class="payment-summary">
        <h5>Selected Payment Method:</h5>
        <strong>{{ getSelectedLabel(paymentMethods, selectedPaymentMethod) }}</strong>
      </div>
            `,
            tsCode: `
      // In your component
      paymentMethods = [
        { id: 'payment-card', value: 'card', label: 'Credit/Debit Card', description: 'Visa, Mastercard, American Express' },
        { id: 'payment-paypal', value: 'paypal', label: 'PayPal', description: 'Pay with your PayPal account' },
        { id: 'payment-bank', value: 'bank', label: 'Bank Transfer', description: 'Direct bank transfer' }
      ];

      selectedPaymentMethod = 'card';

      getSelectedLabel(options: any[], selectedValue: string): string {
        const option = options.find(opt => opt.value === selectedValue);
        return option ? option.label : 'None selected';
      }
            `,
            description: 'Radio buttons for selecting payment methods with descriptions'
          },
          {
            name: 'Custom Styling',
            code: '<div class="space-y-2">\n  <sui-radio-button cssClass="radio-enhanced" name="style-group" value="enhanced" label="Enhanced Radio Button"></sui-radio-button>\n  <sui-radio-button cssClass="radio-animated" name="style-group" value="animated" label="Animated Radio Button"></sui-radio-button>\n  <sui-radio-button cssClass="radio-glow" name="style-group" value="glow" label="Glow Effect"></sui-radio-button>\n  <sui-radio-button cssClass="radio-shadow" name="style-group" value="shadow" label="Shadow Effect"></sui-radio-button>\n  <sui-radio-button cssClass="radio-gradient" name="style-group" value="gradient" label="Gradient Background"></sui-radio-button>\n</div>',
            description: 'Radio buttons with custom styling and effects'
          }
        ],
        props: [
          {
            name: 'ngModel',
            type: 'unknown',
            default: 'null',
            description: 'Two-way binding for the selected radio button value',
            required: false
          },
          {
            name: 'name',
            type: 'string',
            default: '""',
            description: 'Name attribute for grouping radio buttons',
            required: false
          },
          {
            name: 'value',
            type: 'unknown',
            default: 'null',
            description: 'Value to be set when this radio button is selected',
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
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Whether the radio button is disabled',
            required: false
          },
          {
            name: 'inputId',
            type: 'string',
            default: '""',
            description: 'ID attribute for the radio button input',
            required: false
          },
          {
            name: 'cssClass',
            type: 'string',
            default: '""',
            description: 'CSS classes for styling variants (radio-sm, radio-lg, radio-primary, etc.)',
            required: false
          }
        ],
        events: [
          {
            name: 'change',
            type: 'unknown',
            description: 'Emitted when the radio button selection changes'
          }
        ],
        usage: 'Use radio buttons for single-choice selections in forms, surveys, settings panels, and any scenario requiring exclusive options. Group related radio buttons with the same name attribute.',
        tags: ['radio', 'form', 'input', 'selection', 'exclusive', 'choice']
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
