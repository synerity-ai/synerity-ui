import { ComponentModel } from '../../models/component.model';

export const dataComponents: ComponentModel[] = [
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
];
