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
    { label: 'Home', lucideIcon: 'home' },
    { label: 'About', lucideIcon: 'info' },
    { label: 'Contact', lucideIcon: 'mail' }
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
    { label: 'Dashboard', lucideIcon: 'layout-dashboard', highlight: true },
    { label: 'Analytics', lucideIcon: 'bar-chart-3', badge: '12' },
    { label: 'Reports', lucideIcon: 'file-text', tooltip: 'Generate reports' },
    { separator: true },
    { label: 'Settings', lucideIcon: 'settings' },
    { label: 'Profile', lucideIcon: 'user', badge: 'New' }
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
      lucideIcon: 'file',
      items: [
        { label: 'New', lucideIcon: 'plus' },
        { label: 'Open', lucideIcon: 'folder-open' },
        { label: 'Save', lucideIcon: 'save' }
      ]
    },
    {
      label: 'Edit',
      lucideIcon: 'edit',
      items: [
        { label: 'Cut', lucideIcon: 'scissors' },
        { label: 'Copy', lucideIcon: 'copy' },
        { label: 'Paste', lucideIcon: 'clipboard' }
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
