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
        description: 'Flexible data display component with list and grid layouts, custom templates, and pagination support',
        examples: [
          {
            name: 'List Layout',
            code: `<sui-data-view [value]="products" layout="list">
  <ng-template let-product>
    <div class="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
      <div class="text-4xl">{{ product.image }}</div>
      <div class="flex-1">
        <h3 class="text-lg font-semibold">{{ product.name }}</h3>
        <p class="text-sm text-gray-600">{{ product.description }}</p>
        <span class="text-xl font-bold text-blue-600">\${{ product.price }}</span>
      </div>
    </div>
  </ng-template>
</sui-data-view>`,
            tsCode: `export class DataViewComponent {
  products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'Premium noise-cancelling wireless headphones',
      price: 299.99,
      image: '🎧'
    },
    {
      id: 2,
      name: 'Smart Watch',
      description: 'Fitness tracking smartwatch with GPS',
      price: 199.99,
      image: '⌚'
    }
  ];
}`,
            description: 'Display data in a vertical list layout with custom item templates'
          },
          {
            name: 'Grid Layout',
            code: `<sui-data-view [value]="products" layout="grid">
  <ng-template let-product>
    <div class="border border-gray-200 rounded-lg p-4">
      <div class="text-5xl text-center mb-3">{{ product.image }}</div>
      <h3 class="text-lg font-semibold text-center">{{ product.name }}</h3>
      <p class="text-sm text-gray-600 text-center">{{ product.description }}</p>
      <div class="text-xl font-bold text-blue-600 text-center">\${{ product.price }}</div>
    </div>
  </ng-template>
</sui-data-view>`,
            tsCode: `export class DataViewComponent {
  products = [
    { id: 1, name: 'Wireless Headphones', description: 'Premium headphones', price: 299.99, image: '🎧' },
    { id: 2, name: 'Smart Watch', description: 'Fitness tracker', price: 199.99, image: '⌚' },
    { id: 3, name: 'Laptop Backpack', description: 'Water-resistant backpack', price: 49.99, image: '🎒' }
  ];
}`,
            description: 'Display data in a responsive grid layout'
          },
          {
            name: 'With Pagination',
            code: `<sui-data-view 
  [value]="largeDataset" 
  [layout]="currentLayout"
  [paginator]="true"
  [rows]="6"
  [first]="currentPage"
  (onPage)="onPageChange($event)">
  <ng-template let-product>
    <div class="border rounded-lg p-4">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <span>\${{ product.price }}</span>
    </div>
  </ng-template>
</sui-data-view>`,
            tsCode: `export class DataViewComponent {
  largeDataset: Product[] = [];
  currentLayout: 'list' | 'grid' = 'list';
  currentPage = 0;

  constructor() {
    // Generate large dataset
    for (let i = 0; i < 20; i++) {
      this.largeDataset.push({
        id: i + 1,
        name: \`Product \${i + 1}\`,
        description: \`Description for product \${i + 1}\`,
        price: Math.floor(Math.random() * 500) + 50
      });
    }
  }

  onPageChange(event: any): void {
    this.currentPage = event.first;
    console.log('Page changed:', event);
  }

  toggleLayout(): void {
    this.currentLayout = this.currentLayout === 'list' ? 'grid' : 'list';
  }
}`,
            description: 'Data view with pagination for large datasets'
          },
          {
            name: 'Empty State',
            code: `<sui-data-view 
  [value]="emptyData" 
  layout="list"
  emptyMessage="No products found. Please try again later.">
</sui-data-view>`,
            tsCode: `export class DataViewComponent {
  emptyData: any[] = [];
}`,
            description: 'Display empty state when no data is available'
          },
          {
            name: 'Compact List',
            code: `<sui-data-view [value]="products" layout="list">
  <ng-template let-product>
    <div class="flex items-center justify-between p-3 border-b hover:bg-gray-50">
      <div class="flex items-center gap-3">
        <span class="text-2xl">{{ product.image }}</span>
        <div>
          <h4 class="font-medium">{{ product.name }}</h4>
          <p class="text-xs text-gray-500">{{ product.category }}</p>
        </div>
      </div>
      <div class="text-right">
        <div class="font-bold">\${{ product.price }}</div>
        <div class="text-xs text-gray-500">{{ product.stock }} units</div>
      </div>
    </div>
  </ng-template>
</sui-data-view>`,
            tsCode: `export class DataViewComponent {
  products = [
    { id: 1, name: 'Wireless Headphones', price: 299.99, category: 'Electronics', stock: 25, image: '🎧' },
    { id: 2, name: 'Smart Watch', price: 199.99, category: 'Electronics', stock: 15, image: '⌚' }
  ];
}`,
            description: 'Compact list layout for displaying data in a condensed format'
          },
          {
            name: 'Card Grid',
            code: `<sui-data-view [value]="products" layout="grid">
  <ng-template let-product>
    <div class="bg-white border rounded-xl p-6 hover:shadow-xl transition-all">
      <div class="flex justify-between items-start mb-4">
        <div class="text-5xl">{{ product.image }}</div>
        <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
          {{ product.category }}
        </span>
      </div>
      <h3 class="text-xl font-bold mb-2">{{ product.name }}</h3>
      <p class="text-sm text-gray-600 mb-4">{{ product.description }}</p>
      <div class="flex justify-between items-center">
        <span class="text-2xl font-bold text-blue-600">\${{ product.price }}</span>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  </ng-template>
</sui-data-view>`,
            tsCode: `export class DataViewComponent {
  products = [
    { 
      id: 1, 
      name: 'Wireless Headphones', 
      description: 'Premium noise-cancelling wireless headphones',
      price: 299.99, 
      category: 'Electronics',
      image: '🎧' 
    }
  ];
}`,
            description: 'Rich card-based grid layout with actions'
          }
        ],
        props: [
          {
            name: 'value',
            type: 'any[]',
            default: '[]',
            description: 'Array of data to display',
            required: false
          },
          {
            name: 'layout',
            type: '"list" | "grid"',
            default: '"list"',
            description: 'Layout mode for displaying data',
            required: false
          },
          {
            name: 'paginator',
            type: 'boolean',
            default: 'false',
            description: 'Whether to enable pagination',
            required: false
          },
          {
            name: 'rows',
            type: 'number',
            default: '0',
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
            name: 'emptyMessage',
            type: 'string',
            default: '"No records found"',
            description: 'Message to display when no data is available',
            required: false
          },
          {
            name: 'itemTemplate',
            type: 'TemplateRef<any>',
            default: 'null',
            description: 'Template for rendering each item',
            required: false
          },
          {
            name: 'onPage',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback to invoke when page changes',
            required: false
          },
          {
            name: 'onLazyLoad',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback to invoke for lazy loading',
            required: false
          }
        ],
        usage: 'Use data views for displaying data collections in flexible list or grid layouts. Supports custom templates, pagination, and empty states for versatile data presentation.',
        tags: ['data', 'display', 'list', 'grid', 'pagination', 'template']
      },
  {
        id: 'order-list',
        name: 'Order List',
        category: 'Data',
        description: 'Interactive list component for reordering items with drag controls, selection, and filtering capabilities',
        examples: [
          {
            name: 'Basic Order List',
            code: `<sui-order-list
  [value]="basicTasks"
  header="Task Priority List"
  (onReorder)="onReorder($event)"
  (onSelectionChange)="onSelectionChange($event)">
</sui-order-list>`,
            tsCode: `export class OrderListComponent {
  basicTasks = [
    { id: 1, label: 'Complete project proposal' },
    { id: 2, label: 'Review pull requests' },
    { id: 3, label: 'Update documentation' },
    { id: 4, label: 'Fix reported bugs' },
    { id: 5, label: 'Deploy to production' }
  ];

  onReorder(event: any): void {
    console.log('List reordered:', event);
  }

  onSelectionChange(items: any[]): void {
    console.log('Selected items:', items);
  }
}`,
            description: 'Basic reorderable list with header and event handlers'
          },
          {
            name: 'With Filter',
            code: `<sui-order-list
  [value]="features"
  header="Features Backlog"
  [filter]="true"
  filterPlaceholder="Search features..."
  (onReorder)="onReorder($event)">
</sui-order-list>`,
            tsCode: `export class OrderListComponent {
  features = [
    { id: 1, label: 'User authentication' },
    { id: 2, label: 'Dashboard analytics' },
    { id: 3, label: 'File upload system' },
    { id: 4, label: 'Email notifications' },
    { id: 5, label: 'Search functionality' }
  ];

  onReorder(event: any): void {
    console.log('List reordered:', event);
  }
}`,
            description: 'Order list with built-in search filter'
          },
          {
            name: 'Without Header',
            code: `<sui-order-list
  [value]="products"
  (onReorder)="onReorder($event)"
  (onSelectionChange)="onSelectionChange($event)">
</sui-order-list>`,
            tsCode: `export class OrderListComponent {
  products = [
    { id: 1, label: 'Laptop - $1,299' },
    { id: 2, label: 'Wireless Mouse - $29' },
    { id: 3, label: 'Mechanical Keyboard - $149' },
    { id: 4, label: 'Monitor 27" - $399' }
  ];

  onReorder(event: any): void {
    console.log('List reordered:', event);
  }

  onSelectionChange(items: any[]): void {
    console.log('Selected items:', items);
  }
}`,
            description: 'Minimal order list without header'
          },
          {
            name: 'Custom Height',
            code: `<sui-order-list
  [value]="features"
  header="Feature List"
  [listStyle]="{ 'max-height': '300px', 'overflow-y': 'auto' }"
  [filter]="true"
  (onReorder)="onReorder($event)">
</sui-order-list>`,
            tsCode: `export class OrderListComponent {
  features = [
    { id: 1, label: 'User authentication' },
    { id: 2, label: 'Dashboard analytics' },
    { id: 3, label: 'File upload system' },
    { id: 4, label: 'Email notifications' },
    { id: 5, label: 'Search functionality' },
    { id: 6, label: 'Export to PDF' },
    { id: 7, label: 'Multi-language support' },
    { id: 8, label: 'Dark mode toggle' }
  ];

  onReorder(event: any): void {
    console.log('List reordered:', event);
  }
}`,
            description: 'Order list with custom height and scrolling'
          },
          {
            name: 'With Selection Tracking',
            code: `<sui-order-list
  [value]="priorityTasks"
  header="Priority Tasks"
  (onReorder)="onReorder($event)"
  (onSelectionChange)="onSelectionChange($event)">
</sui-order-list>

<div class="mt-4 p-4 bg-gray-50 rounded-lg">
  <h4 class="font-semibold mb-2">Selected Tasks</h4>
  <ul>
    <li *ngFor="let item of selectedItems">{{ item.label }}</li>
  </ul>
</div>`,
            tsCode: `export class OrderListComponent {
  priorityTasks = [
    { id: 1, label: 'Critical bug fix', priority: 'high' },
    { id: 2, label: 'Client meeting preparation', priority: 'high' },
    { id: 3, label: 'Code review', priority: 'medium' },
    { id: 4, label: 'Update readme', priority: 'low' }
  ];

  selectedItems: any[] = [];

  onReorder(event: any): void {
    console.log('List reordered:', event);
  }

  onSelectionChange(items: any[]): void {
    this.selectedItems = items;
    console.log('Selected items:', items);
  }
}`,
            description: 'Order list with selection tracking display'
          },
          {
            name: 'Empty State',
            code: `<sui-order-list
  [value]="emptyList"
  header="Empty List"
  [filter]="true"
  filterPlaceholder="Search...">
</sui-order-list>`,
            tsCode: `export class OrderListComponent {
  emptyList: any[] = [];
}`,
            description: 'Order list showing empty state'
          }
        ],
        props: [
          {
            name: 'value',
            type: 'any[]',
            default: '[]',
            description: 'Array of items to display in the list',
            required: true
          },
          {
            name: 'header',
            type: 'string',
            default: '""',
            description: 'Header text to display above the list',
            required: false
          },
          {
            name: 'listStyle',
            type: 'any',
            default: '{}',
            description: 'Custom styles to apply to the list container',
            required: false
          },
          {
            name: 'dragdrop',
            type: 'boolean',
            default: 'false',
            description: 'Enable drag and drop reordering',
            required: false
          },
          {
            name: 'filter',
            type: 'boolean',
            default: 'false',
            description: 'Enable search filter',
            required: false
          },
          {
            name: 'filterPlaceholder',
            type: 'string',
            default: '"Search"',
            description: 'Placeholder text for filter input',
            required: false
          },
          {
            name: 'onReorder',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback fired when items are reordered',
            required: false
          },
          {
            name: 'onSelectionChange',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback fired when item selection changes',
            required: false
          }
        ],
        usage: 'Use order lists for reorderable items with up/down controls. Supports filtering, selection, and custom styling. Perfect for task management, priority lists, and drag-free reordering.',
        tags: ['data', 'list', 'reorder', 'sortable', 'filter', 'selection']
      },
  {
        id: 'paginator',
        name: 'Paginator',
        category: 'Data',
        description: 'Pagination component for navigating through large datasets with customizable page sizes and navigation controls',
        examples: [
          {
            name: 'Basic Paginator',
            code: `<sui-paginator
  [totalRecords]="totalRecords"
  [rows]="rows"
  [rowsPerPageOptions]="[5, 10, 20, 30]"
  (onPageChange)="onPageChange($event)">
</sui-paginator>`,
            tsCode: `export class PaginatorComponent {
  totalRecords = 120;
  rows = 5;
  first = 0;

  onPageChange(event: any): void {
    console.log('Page changed:', event);
    this.first = event.first;
    this.rows = event.rows;
  }

  get currentPageInfo(): string {
    const start = this.first + 1;
    const end = Math.min(this.first + this.rows, this.totalRecords);
    return \`Showing \${start}-\${end} of \${this.totalRecords} records\`;
  }
}`,
            description: 'Basic pagination with page size options'
          },
          {
            name: 'With Page Report',
            code: `<sui-paginator
  [totalRecords]="totalRecords"
  [rows]="rows"
  [showCurrentPageReport]="true"
  currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
  (onPageChange)="onPageChange($event)">
</sui-paginator>`,
            tsCode: `export class PaginatorComponent {
  totalRecords = 120;
  rows = 5;

  onPageChange(event: any): void {
    console.log('Page changed:', event);
  }
}`,
            description: 'Paginator with custom page report template'
          },
          {
            name: 'Large Dataset',
            code: `<sui-paginator
  [totalRecords]="1000"
  [rows]="25"
  [pageLinkSize]="7"
  [rowsPerPageOptions]="[25, 50, 100, 200]"
  [showCurrentPageReport]="true"
  currentPageReportTemplate="Page {currentPage} of {totalPages}"
  (onPageChange)="onPageChange($event)">
</sui-paginator>`,
            tsCode: `export class PaginatorComponent {
  largeTotalRecords = 1000;
  largeRows = 25;
  largeFirst = 0;

  onPageChange(event: any): void {
    console.log('Large page changed:', event);
    this.largeFirst = event.first;
    this.largeRows = event.rows;
  }
}`,
            description: 'Pagination for large datasets with more page links'
          },
          {
            name: 'Custom Page Sizes',
            code: `<sui-paginator
  [totalRecords]="totalRecords"
  [rows]="15"
  [rowsPerPageOptions]="[10, 15, 25, 50, 100]"
  [showCurrentPageReport]="true"
  currentPageReportTemplate="{first}-{last} of {totalRecords} items"
  (onPageChange)="onPageChange($event)">
</sui-paginator>`,
            tsCode: `export class PaginatorComponent {
  totalRecords = 120;
  customRows = 15;
  customFirst = 0;
  customRowsPerPageOptions = [10, 15, 25, 50, 100];

  onPageChange(event: any): void {
    this.customFirst = event.first;
    this.customRows = event.rows;
  }
}`,
            description: 'Custom page size options for flexible pagination'
          },
          {
            name: 'Without Row Options',
            code: `<sui-paginator
  [totalRecords]="totalRecords"
  [rows]="rows"
  [showRowsPerPageOptions]="false"
  (onPageChange)="onPageChange($event)">
</sui-paginator>`,
            tsCode: `export class PaginatorComponent {
  totalRecords = 120;
  rows = 10;

  onPageChange(event: any): void {
    console.log('Page changed:', event);
  }
}`,
            description: 'Paginator without rows per page dropdown'
          },
          {
            name: 'Minimal Style',
            code: `<sui-paginator
  [totalRecords]="totalRecords"
  [rows]="20"
  [showFirstLastIcon]="false"
  [showRowsPerPageOptions]="false"
  [pageLinkSize]="3"
  (onPageChange)="onPageChange($event)">
</sui-paginator>`,
            tsCode: `export class PaginatorComponent {
  totalRecords = 120;
  minimalRows = 20;

  onPageChange(event: any): void {
    console.log('Minimal page changed:', event);
  }
}`,
            description: 'Minimal paginator without first/last buttons and row options'
          }
        ],
        props: [
          {
            name: 'rows',
            type: 'number',
            default: '10',
            description: 'Number of rows to display per page',
            required: false
          },
          {
            name: 'totalRecords',
            type: 'number',
            default: '0',
            description: 'Total number of records in the dataset',
            required: true
          },
          {
            name: 'pageLinkSize',
            type: 'number',
            default: '5',
            description: 'Number of page links to display',
            required: false
          },
          {
            name: 'rowsPerPageOptions',
            type: 'number[]',
            default: '[5, 10, 20, 30]',
            description: 'Array of options for rows per page dropdown',
            required: false
          },
          {
            name: 'showCurrentPageReport',
            type: 'boolean',
            default: 'false',
            description: 'Whether to display current page report',
            required: false
          },
          {
            name: 'currentPageReportTemplate',
            type: 'string',
            default: '"({currentPage} of {totalPages})"',
            description: 'Template string for current page report. Supports {currentPage}, {totalPages}, {first}, {last}, {totalRecords}',
            required: false
          },
          {
            name: 'showFirstLastIcon',
            type: 'boolean',
            default: 'true',
            description: 'Whether to display first and last page buttons',
            required: false
          },
          {
            name: 'showPageLinks',
            type: 'boolean',
            default: 'true',
            description: 'Whether to display page number links',
            required: false
          },
          {
            name: 'showRowsPerPageOptions',
            type: 'boolean',
            default: 'true',
            description: 'Whether to display rows per page dropdown',
            required: false
          },
          {
            name: 'alwaysShow',
            type: 'boolean',
            default: 'true',
            description: 'Whether to show paginator even when there is only one page',
            required: false
          },
          {
            name: 'onPageChange',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback fired when page changes. Returns {first, rows, page, pageCount}',
            required: false
          }
        ],
        usage: 'Use paginators for navigating through large datasets. Supports customizable page sizes, page reports, and navigation controls. Perfect for tables, lists, and data grids.',
        tags: ['data', 'navigation', 'pagination', 'paging', 'table']
      },
  {
        id: 'pick-list',
        name: 'Pick List',
        category: 'Data',
        description: 'Dual list component for transferring items between source and target lists with filtering and selection support',
        examples: [
          {
            name: 'Basic Pick List',
            code: `<sui-pick-list
  [source]="sourceSkills"
  [target]="targetSkills"
  sourceHeader="Available Skills"
  targetHeader="Your Skills"
  (onMoveToTarget)="onMoveToTarget($event)"
  (onMoveToSource)="onMoveToSource($event)"
  (onMoveAllToTarget)="onMoveAllToTarget($event)"
  (onMoveAllToSource)="onMoveAllToSource($event)">
</sui-pick-list>`,
            tsCode: `export class PickListComponent {
  sourceSkills = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'TypeScript' },
    { id: 3, name: 'Python' },
    { id: 4, name: 'Java' },
    { id: 5, name: 'C++' }
  ];
  targetSkills = [];

  onMoveToTarget(event: any): void {
    console.log('Moved to target:', event);
  }

  onMoveToSource(event: any): void {
    console.log('Moved to source:', event);
  }

  onMoveAllToTarget(event: any): void {
    console.log('Moved all to target:', event);
  }

  onMoveAllToSource(event: any): void {
    console.log('Moved all to source:', event);
  }
}`,
            description: 'Basic dual list with transfer controls'
          },
          {
            name: 'With Filter',
            code: `<sui-pick-list
  [source]="sourceMembers"
  [target]="targetMembers"
  sourceHeader="All Team Members"
  targetHeader="Project Team"
  [filter]="true"
  filterPlaceholder="Search members..."
  (onMoveToTarget)="onMoveToTarget($event)"
  (onMoveToSource)="onMoveToSource($event)">
</sui-pick-list>`,
            tsCode: `export class PickListComponent {
  sourceMembers = [
    { id: 1, name: 'Alice Johnson' },
    { id: 2, name: 'Bob Smith' },
    { id: 3, name: 'Charlie Brown' },
    { id: 4, name: 'Diana Prince' }
  ];
  targetMembers = [];

  onMoveToTarget(event: any): void {
    console.log('Moved to target:', event);
  }

  onMoveToSource(event: any): void {
    console.log('Moved to source:', event);
  }
}`,
            description: 'Pick list with search filtering enabled'
          },
          {
            name: 'Without Filter',
            code: `<sui-pick-list
  [source]="sourceCities"
  [target]="targetCities"
  sourceHeader="Available Cities"
  targetHeader="Selected Cities"
  [filter]="false"
  (onMoveToTarget)="onMoveToTarget($event)"
  (onMoveToSource)="onMoveToSource($event)">
</sui-pick-list>`,
            tsCode: `export class PickListComponent {
  sourceCities = [
    { id: 1, name: 'New York' },
    { id: 2, name: 'Los Angeles' },
    { id: 3, name: 'Chicago' },
    { id: 4, name: 'Houston' }
  ];
  targetCities = [];

  onMoveToTarget(event: any): void {
    console.log('Moved to target:', event);
  }

  onMoveToSource(event: any): void {
    console.log('Moved to source:', event);
  }
}`,
            description: 'Pick list without filter functionality'
          },
          {
            name: 'Pre-populated',
            code: `<sui-pick-list
  [source]="sourceFeatures"
  [target]="targetFeatures"
  sourceHeader="Available Features"
  targetHeader="Enabled Features"
  [filter]="true"
  filterPlaceholder="Search features..."
  (onMoveToTarget)="onMoveToTarget($event)"
  (onMoveToSource)="onMoveToSource($event)">
</sui-pick-list>`,
            tsCode: `export class PickListComponent {
  sourceFeatures = [
    { id: 1, name: 'User Management' },
    { id: 2, name: 'Email Notifications' },
    { id: 3, name: 'Export to PDF' }
  ];
  targetFeatures = [
    { id: 4, name: 'Dashboard Analytics' },
    { id: 5, name: 'Search Functionality' },
    { id: 6, name: 'File Upload' }
  ];

  onMoveToTarget(event: any): void {
    console.log('Moved to target:', event);
  }

  onMoveToSource(event: any): void {
    console.log('Moved to source:', event);
  }
}`,
            description: 'Pick list with both source and target pre-populated'
          },
          {
            name: 'With Categories',
            code: `<sui-pick-list
  [source]="sourceProducts"
  [target]="targetProducts"
  sourceHeader="Product Catalog"
  targetHeader="Shopping Cart"
  [filter]="true"
  filterPlaceholder="Search products..."
  (onMoveToTarget)="onMoveToTarget($event)"
  (onMoveToSource)="onMoveToSource($event)">
</sui-pick-list>`,
            tsCode: `export class PickListComponent {
  sourceProducts = [
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'Mouse', category: 'Electronics' },
    { id: 3, name: 'Desk Chair', category: 'Furniture' },
    { id: 4, name: 'Notebook', category: 'Stationery' }
  ];
  targetProducts = [];

  onMoveToTarget(event: any): void {
    console.log('Moved to target:', event);
  }

  onMoveToSource(event: any): void {
    console.log('Moved to source:', event);
  }
}`,
            description: 'Pick list with categorized items'
          },
          {
            name: 'Minimal Style',
            code: `<sui-pick-list
  [source]="sourceTags"
  [target]="targetTags"
  sourceHeader="Available Tags"
  targetHeader="Active Tags"
  [filter]="false"
  (onMoveToTarget)="onMoveToTarget($event)"
  (onMoveToSource)="onMoveToSource($event)">
</sui-pick-list>`,
            tsCode: `export class PickListComponent {
  sourceTags = [
    { id: 1, name: 'urgent' },
    { id: 2, name: 'important' },
    { id: 3, name: 'low-priority' },
    { id: 4, name: 'bug' },
    { id: 5, name: 'feature' }
  ];
  targetTags = [];

  onMoveToTarget(event: any): void {
    console.log('Moved to target:', event);
  }

  onMoveToSource(event: any): void {
    console.log('Moved to source:', event);
  }
}`,
            description: 'Minimal pick list for simple tag selection'
          }
        ],
        props: [
          {
            name: 'source',
            type: 'any[]',
            default: '[]',
            description: 'Array of items in the source list',
            required: true
          },
          {
            name: 'target',
            type: 'any[]',
            default: '[]',
            description: 'Array of items in the target list',
            required: true
          },
          {
            name: 'sourceHeader',
            type: 'string',
            default: '"Available"',
            description: 'Header text for source list',
            required: false
          },
          {
            name: 'targetHeader',
            type: 'string',
            default: '"Selected"',
            description: 'Header text for target list',
            required: false
          },
          {
            name: 'filter',
            type: 'boolean',
            default: 'true',
            description: 'Enable search filter for both lists',
            required: false
          },
          {
            name: 'filterPlaceholder',
            type: 'string',
            default: '"Search"',
            description: 'Placeholder text for filter inputs',
            required: false
          },
          {
            name: 'dragdrop',
            type: 'boolean',
            default: 'false',
            description: 'Enable drag and drop functionality',
            required: false
          },
          {
            name: 'showSourceControls',
            type: 'boolean',
            default: 'true',
            description: 'Show buttons to move items to target',
            required: false
          },
          {
            name: 'showTargetControls',
            type: 'boolean',
            default: 'true',
            description: 'Show buttons to move items to source',
            required: false
          },
          {
            name: 'onMoveToTarget',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback when items are moved to target list',
            required: false
          },
          {
            name: 'onMoveToSource',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback when items are moved to source list',
            required: false
          },
          {
            name: 'onMoveAllToTarget',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback when all items are moved to target',
            required: false
          },
          {
            name: 'onMoveAllToSource',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback when all items are moved to source',
            required: false
          }
        ],
        usage: 'Use pick lists for dual list selection where users need to move items between available and selected lists. Perfect for role assignments, feature selection, and permission management.',
        tags: ['data', 'selection', 'dual-list', 'transfer', 'picklist']
      },
  {
        id: 'tree',
        name: 'Tree',
        category: 'Data',
        description: 'Hierarchical tree component for displaying nested data structures with expand/collapse, selection, and filtering capabilities',
        examples: [
          {
            name: 'Basic Tree',
            code: `<sui-tree
  [value]="fileSystem"
  (onNodeSelect)="onNodeSelect($event)"
  (onNodeExpand)="onNodeExpand($event)"
  (onNodeCollapse)="onNodeCollapse($event)">
</sui-tree>`,
            tsCode: `export class TreeComponent {
  fileSystem = [
    {
      key: '0',
      label: 'Documents',
      expanded: true,
      children: [
        {
          key: '0-0',
          label: 'Work',
          children: [
            { key: '0-0-0', label: 'Project.docx' },
            { key: '0-0-1', label: 'Report.pdf' }
          ]
        },
        { key: '0-1', label: 'Personal' }
      ]
    },
    {
      key: '1',
      label: 'Pictures',
      children: [
        { key: '1-0', label: 'Vacation.jpg' },
        { key: '1-1', label: 'Family.png' }
      ]
    }
  ];

  onNodeSelect(node: any): void {
    console.log('Node selected:', node);
  }

  onNodeExpand(node: any): void {
    console.log('Node expanded:', node);
  }

  onNodeCollapse(node: any): void {
    console.log('Node collapsed:', node);
  }
}`,
            description: 'Basic tree structure with expandable nodes'
          },
          {
            name: 'Single Selection',
            code: `<sui-tree
  [value]="singleSelectionTree"
  selectionMode="single"
  (onNodeSelect)="onNodeSelect($event)"
  (onSelectionChange)="onSelectionChange($event)">
</sui-tree>`,
            tsCode: `export class TreeComponent {
  singleSelectionTree = [
    {
      key: '0',
      label: 'Documents',
      expanded: true,
      children: [
        { key: '0-0', label: 'Work' },
        { key: '0-1', label: 'Personal' }
      ]
    }
  ];

  onNodeSelect(node: any): void {
    console.log('Node selected:', node);
  }

  onSelectionChange(nodes: any[]): void {
    console.log('Selection changed:', nodes);
  }
}`,
            description: 'Tree with single node selection'
          },
          {
            name: 'Multiple Selection',
            code: `<sui-tree
  [value]="multipleSelectionTree"
  selectionMode="multiple"
  (onSelectionChange)="onSelectionChange($event)">
</sui-tree>`,
            tsCode: `export class TreeComponent {
  multipleSelectionTree = [
    {
      key: '0',
      label: 'CEO',
      expanded: true,
      children: [
        {
          key: '0-0',
          label: 'CTO',
          children: [
            { key: '0-0-0', label: 'Engineering Manager' }
          ]
        },
        { key: '0-1', label: 'CFO' }
      ]
    }
  ];

  onSelectionChange(nodes: any[]): void {
    console.log('Selected nodes:', nodes);
  }
}`,
            description: 'Tree with multiple node selection'
          },
          {
            name: 'With Checkbox',
            code: `<sui-tree
  [value]="checkboxTree"
  selectionMode="checkbox"
  (onSelectionChange)="onSelectionChange($event)">
</sui-tree>`,
            tsCode: `export class TreeComponent {
  checkboxTree = [
    {
      key: '0',
      label: 'Electronics',
      children: [
        { key: '0-0', label: 'Computers' },
        { key: '0-1', label: 'Phones' }
      ]
    },
    {
      key: '1',
      label: 'Clothing',
      children: [
        { key: '1-0', label: 'Men' },
        { key: '1-1', label: 'Women' }
      ]
    }
  ];

  onSelectionChange(nodes: any[]): void {
    console.log('Selected nodes:', nodes);
  }
}`,
            description: 'Tree with checkbox selection for multi-select'
          },
          {
            name: 'With Filter',
            code: `<sui-tree
  [value]="filterTree"
  [filter]="true"
  filterPlaceholder="Search files and folders..."
  (onNodeSelect)="onNodeSelect($event)">
</sui-tree>`,
            tsCode: `export class TreeComponent {
  filterTree = [
    {
      key: '0',
      label: 'Documents',
      expanded: true,
      children: [
        { key: '0-0', label: 'Work' },
        { key: '0-1', label: 'Personal' }
      ]
    }
  ];

  onNodeSelect(node: any): void {
    console.log('Node selected:', node);
  }
}`,
            description: 'Tree with search filter to find nodes'
          },
          {
            name: 'Collapsed by Default',
            code: `<sui-tree
  [value]="categories"
  (onNodeExpand)="onNodeExpand($event)"
  (onNodeCollapse)="onNodeCollapse($event)">
</sui-tree>`,
            tsCode: `export class TreeComponent {
  categories = [
    {
      key: '0',
      label: 'Electronics',
      children: [
        { key: '0-0', label: 'Computers' },
        { key: '0-1', label: 'Phones' }
      ]
    },
    {
      key: '1',
      label: 'Clothing',
      children: [
        { key: '1-0', label: 'Men' },
        { key: '1-1', label: 'Women' }
      ]
    }
  ];

  onNodeExpand(node: any): void {
    console.log('Node expanded:', node);
  }

  onNodeCollapse(node: any): void {
    console.log('Node collapsed:', node);
  }
}`,
            description: 'Tree with all nodes collapsed by default'
          }
        ],
        props: [
          {
            name: 'value',
            type: 'TreeNode[]',
            default: '[]',
            description: 'Array of tree nodes. Each node should have: key, label, data, children, expanded',
            required: true
          },
          {
            name: 'selectionMode',
            type: '"single" | "multiple" | "checkbox" | null',
            default: 'null',
            description: 'Selection mode for tree nodes',
            required: false
          },
          {
            name: 'metaKeySelection',
            type: 'boolean',
            default: 'true',
            description: 'Whether to use meta key for multiple selection',
            required: false
          },
          {
            name: 'propagateSelectionUp',
            type: 'boolean',
            default: 'true',
            description: 'Whether selection propagates to parent nodes',
            required: false
          },
          {
            name: 'propagateSelectionDown',
            type: 'boolean',
            default: 'true',
            description: 'Whether selection propagates to child nodes',
            required: false
          },
          {
            name: 'filter',
            type: 'boolean',
            default: 'false',
            description: 'Enable search filter for nodes',
            required: false
          },
          {
            name: 'filterPlaceholder',
            type: 'string',
            default: '"Search"',
            description: 'Placeholder text for filter input',
            required: false
          },
          {
            name: 'filterBy',
            type: 'string',
            default: '"label"',
            description: 'Node property to filter by',
            required: false
          },
          {
            name: 'onNodeSelect',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback when a node is selected',
            required: false
          },
          {
            name: 'onNodeUnselect',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback when a node is unselected',
            required: false
          },
          {
            name: 'onNodeExpand',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback when a node is expanded',
            required: false
          },
          {
            name: 'onNodeCollapse',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback when a node is collapsed',
            required: false
          },
          {
            name: 'onSelectionChange',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback when selection changes, returns array of selected nodes',
            required: false
          }
        ],
        usage: 'Use trees for displaying hierarchical data structures like file systems, organization charts, category trees, and navigation menus. Supports expand/collapse, selection, and filtering.',
        tags: ['data', 'hierarchy', 'tree', 'nested', 'expandable', 'collapsible']
      },
  {
        id: 'tree-table',
        name: 'Tree Table',
        category: 'Data',
        description: 'Hierarchical table component for displaying nested data with expand/collapse, sorting, and selection capabilities in a tabular format',
        examples: [
          {
            name: 'Basic Tree Table',
            code: `<sui-tree-table
  [value]="fileSystem"
  [columns]="fileColumns"
  (onNodeExpand)="onNodeExpand($event)"
  (onNodeCollapse)="onNodeCollapse($event)">
</sui-tree-table>`,
            tsCode: `export class TreeTableComponent {
  fileColumns = [
    { field: 'name', header: 'Name', sortable: true },
    { field: 'size', header: 'Size', sortable: true },
    { field: 'type', header: 'Type', sortable: false },
    { field: 'modified', header: 'Modified', sortable: true }
  ];

  fileSystem = [
    {
      key: '0',
      data: { name: 'Documents', size: '75 MB', type: 'Folder', modified: '2024-01-15' },
      expanded: true,
      children: [
        {
          key: '0-0',
          data: { name: 'Work', size: '50 MB', type: 'Folder', modified: '2024-01-14' },
          children: [
            { key: '0-0-0', data: { name: 'Project.docx', size: '2.4 MB', type: 'Document', modified: '2024-01-10' } }
          ]
        }
      ]
    }
  ];

  onNodeExpand(node: any): void {
    console.log('Node expanded:', node);
  }

  onNodeCollapse(node: any): void {
    console.log('Node collapsed:', node);
  }
}`,
            description: 'Basic hierarchical table with file system data'
          },
          {
            name: 'With Sorting',
            code: `<sui-tree-table
  [value]="fileSystem"
  [columns]="fileColumns"
  (onSort)="onSort($event)"
  (onNodeExpand)="onNodeExpand($event)">
</sui-tree-table>`,
            tsCode: `export class TreeTableComponent {
  fileColumns = [
    { field: 'name', header: 'Name', sortable: true },
    { field: 'size', header: 'Size', sortable: true },
    { field: 'modified', header: 'Modified', sortable: true }
  ];

  fileSystem = [
    {
      key: '0',
      data: { name: 'Documents', size: '75 MB', modified: '2024-01-15' },
      expanded: true,
      children: [
        { key: '0-0', data: { name: 'Project.docx', size: '2.4 MB', modified: '2024-01-10' } }
      ]
    }
  ];

  onSort(event: any): void {
    console.log('Sort:', event);
  }

  onNodeExpand(node: any): void {
    console.log('Node expanded:', node);
  }
}`,
            description: 'Tree table with sortable columns'
          },
          {
            name: 'Single Selection',
            code: `<sui-tree-table
  [value]="organization"
  [columns]="orgColumns"
  selectionMode="single"
  (onNodeSelect)="onNodeSelect($event)"
  (onSelectionChange)="onSelectionChange($event)">
</sui-tree-table>`,
            tsCode: `export class TreeTableComponent {
  orgColumns = [
    { field: 'name', header: 'Employee', sortable: true },
    { field: 'title', header: 'Title' },
    { field: 'department', header: 'Department' }
  ];

  organization = [
    {
      key: '0',
      data: { name: 'John Doe', title: 'CEO', department: 'Executive' },
      expanded: true,
      children: [
        { key: '0-0', data: { name: 'Jane Smith', title: 'CTO', department: 'Technology' } }
      ]
    }
  ];

  onNodeSelect(node: any): void {
    console.log('Node selected:', node);
  }

  onSelectionChange(nodes: any[]): void {
    console.log('Selection changed:', nodes);
  }
}`,
            description: 'Tree table with single row selection'
          },
          {
            name: 'Multiple Selection',
            code: `<sui-tree-table
  [value]="organization"
  [columns]="orgColumns"
  selectionMode="multiple"
  (onSelectionChange)="onSelectionChange($event)">
</sui-tree-table>`,
            tsCode: `export class TreeTableComponent {
  orgColumns = [
    { field: 'name', header: 'Employee' },
    { field: 'title', header: 'Title' },
    { field: 'email', header: 'Email' }
  ];

  organization = [
    {
      key: '0',
      data: { name: 'John Doe', title: 'CEO', email: 'john@company.com' },
      expanded: true,
      children: [
        { key: '0-0', data: { name: 'Jane Smith', title: 'CTO', email: 'jane@company.com' } }
      ]
    }
  ];

  onSelectionChange(nodes: any[]): void {
    console.log('Selected nodes:', nodes);
  }
}`,
            description: 'Tree table with multiple row selection'
          },
          {
            name: 'With Checkbox',
            code: `<sui-tree-table
  [value]="products"
  [columns]="productColumns"
  selectionMode="checkbox"
  (onSelectionChange)="onSelectionChange($event)">
</sui-tree-table>`,
            tsCode: `export class TreeTableComponent {
  productColumns = [
    { field: 'name', header: 'Product', sortable: true },
    { field: 'price', header: 'Price', sortable: true },
    { field: 'stock', header: 'Stock', sortable: true }
  ];

  products = [
    {
      key: '0',
      data: { name: 'Electronics', price: '-', stock: '-' },
      expanded: true,
      children: [
        {
          key: '0-0',
          data: { name: 'Computers', price: '-', stock: '-' },
          children: [
            { key: '0-0-0', data: { name: 'Laptop', price: '$1,299', stock: '25' } }
          ]
        }
      ]
    }
  ];

  onSelectionChange(nodes: any[]): void {
    console.log('Selected nodes:', nodes);
  }
}`,
            description: 'Tree table with checkbox selection'
          },
          {
            name: 'Collapsed by Default',
            code: `<sui-tree-table
  [value]="collapsedData"
  [columns]="fileColumns"
  (onNodeExpand)="onNodeExpand($event)"
  (onNodeCollapse)="onNodeCollapse($event)">
</sui-tree-table>`,
            tsCode: `export class TreeTableComponent {
  fileColumns = [
    { field: 'name', header: 'Name' },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' }
  ];

  collapsedData = [
    {
      key: '0',
      data: { name: 'Documents', size: '75 MB', type: 'Folder' },
      expanded: false,
      children: [
        { key: '0-0', data: { name: 'Work', size: '50 MB', type: 'Folder' } }
      ]
    }
  ];

  onNodeExpand(node: any): void {
    console.log('Node expanded:', node);
  }

  onNodeCollapse(node: any): void {
    console.log('Node collapsed:', node);
  }
}`,
            description: 'Tree table with all nodes collapsed initially'
          }
        ],
        props: [
          {
            name: 'value',
            type: 'TreeTableNode[]',
            default: '[]',
            description: 'Array of tree table nodes. Each node should have: key, data (object with column values), children, expanded',
            required: true
          },
          {
            name: 'columns',
            type: 'Column[]',
            default: '[]',
            description: 'Array of column definitions with field, header, sortable properties',
            required: true
          },
          {
            name: 'selectionMode',
            type: '"single" | "multiple" | "checkbox" | null',
            default: 'null',
            description: 'Selection mode for table rows',
            required: false
          },
          {
            name: 'metaKeySelection',
            type: 'boolean',
            default: 'true',
            description: 'Whether to use meta key for multiple selection',
            required: false
          },
          {
            name: 'propagateSelectionUp',
            type: 'boolean',
            default: 'true',
            description: 'Whether selection propagates to parent nodes',
            required: false
          },
          {
            name: 'propagateSelectionDown',
            type: 'boolean',
            default: 'true',
            description: 'Whether selection propagates to child nodes',
            required: false
          },
          {
            name: 'sortField',
            type: 'string',
            default: '""',
            description: 'Current sort field',
            required: false
          },
          {
            name: 'sortOrder',
            type: '"asc" | "desc"',
            default: '"asc"',
            description: 'Current sort order',
            required: false
          },
          {
            name: 'emptyMessage',
            type: 'string',
            default: '"No records found"',
            description: 'Message to display when no data',
            required: false
          },
          {
            name: 'onNodeSelect',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback when a node is selected',
            required: false
          },
          {
            name: 'onNodeUnselect',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback when a node is unselected',
            required: false
          },
          {
            name: 'onNodeExpand',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback when a node is expanded',
            required: false
          },
          {
            name: 'onNodeCollapse',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback when a node is collapsed',
            required: false
          },
          {
            name: 'onSort',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback when column is sorted',
            required: false
          },
          {
            name: 'onSelectionChange',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback when selection changes',
            required: false
          }
        ],
        usage: 'Use tree tables for displaying hierarchical data in tabular format. Perfect for file explorers, organizational structures, product categories with details, and nested data that needs columnar display with sorting.',
        tags: ['data', 'table', 'tree', 'hierarchy', 'nested', 'sortable']
      },
  {
        id: 'timeline',
        name: 'Timeline',
        category: 'Data',
        description: 'Timeline component for displaying chronological events with various layouts, status indicators, and custom icons',
        examples: [
          {
            name: 'Basic Timeline',
            code: `<sui-timeline
  [value]="projectEvents"
  align="left"
  layout="vertical"
  (onEventClick)="onEventClick($event)">
</sui-timeline>`,
            tsCode: `export class TimelineComponent {
  projectEvents = [
    {
      status: 'completed',
      content: 'Project kickoff meeting completed',
      date: 'January 15, 2024'
    },
    {
      status: 'completed',
      content: 'Requirements gathering and analysis done',
      date: 'January 22, 2024'
    },
    {
      status: 'success',
      content: 'Development phase in progress',
      date: 'February 12, 2024'
    },
    {
      status: 'warning',
      content: 'Testing and QA scheduled',
      date: 'March 1, 2024'
    }
  ];

  onEventClick(event: any): void {
    console.log('Event clicked:', event);
  }
}`,
            description: 'Basic vertical timeline with status-based styling'
          },
          {
            name: 'With Icons',
            code: `<sui-timeline
  [value]="orderEvents"
  align="left"
  layout="vertical"
  (onEventClick)="onEventClick($event)">
</sui-timeline>`,
            tsCode: `export class TimelineComponent {
  orderEvents = [
    {
      status: 'completed',
      icon: '📦',
      content: 'Order placed successfully',
      date: '10:00 AM'
    },
    {
      status: 'completed',
      icon: '✓',
      content: 'Payment confirmed',
      date: '10:05 AM'
    },
    {
      status: 'success',
      icon: '🚚',
      content: 'Out for delivery',
      date: '2:00 PM'
    },
    {
      status: 'warning',
      icon: '📍',
      content: 'Expected delivery',
      date: '5:00 PM'
    }
  ];

  onEventClick(event: any): void {
    console.log('Event clicked:', event);
  }
}`,
            description: 'Timeline with custom icons for each event'
          },
          {
            name: 'Right Aligned',
            code: `<sui-timeline
  [value]="projectEvents"
  align="right"
  layout="vertical"
  (onEventClick)="onEventClick($event)">
</sui-timeline>`,
            tsCode: `export class TimelineComponent {
  projectEvents = [
    {
      status: 'completed',
      content: 'Project kickoff meeting completed',
      date: 'January 15, 2024'
    },
    {
      status: 'success',
      content: 'Development phase in progress',
      date: 'February 12, 2024'
    }
  ];

  onEventClick(event: any): void {
    console.log('Event clicked:', event);
  }
}`,
            description: 'Timeline with content aligned to the right'
          },
          {
            name: 'Alternate',
            code: `<sui-timeline
  [value]="alternateEvents"
  align="alternate"
  layout="vertical"
  (onEventClick)="onEventClick($event)">
</sui-timeline>`,
            tsCode: `export class TimelineComponent {
  alternateEvents = [
    {
      status: 'completed',
      icon: '🎯',
      content: 'Project planning completed',
      date: 'Week 1'
    },
    {
      status: 'completed',
      icon: '💻',
      content: 'Development started',
      date: 'Week 2'
    },
    {
      status: 'success',
      icon: '🚀',
      content: 'Beta release deployed',
      date: 'Week 6'
    },
    {
      status: 'warning',
      icon: '📊',
      content: 'Final testing pending',
      date: 'Week 8'
    }
  ];

  onEventClick(event: any): void {
    console.log('Event clicked:', event);
  }
}`,
            description: 'Timeline with alternating left/right content'
          },
          {
            name: 'Horizontal',
            code: `<sui-timeline
  [value]="horizontalEvents"
  layout="horizontal"
  (onEventClick)="onEventClick($event)">
</sui-timeline>`,
            tsCode: `export class TimelineComponent {
  horizontalEvents = [
    {
      status: 'completed',
      content: 'Registered',
      date: 'Step 1'
    },
    {
      status: 'completed',
      content: 'Verified',
      date: 'Step 2'
    },
    {
      status: 'success',
      content: 'In Progress',
      date: 'Step 3'
    },
    {
      status: 'warning',
      content: 'Review',
      date: 'Step 4'
    }
  ];

  onEventClick(event: any): void {
    console.log('Event clicked:', event);
  }
}`,
            description: 'Horizontal timeline for step-by-step processes'
          },
          {
            name: 'Activity Log',
            code: `<sui-timeline
  [value]="activityEvents"
  align="left"
  layout="vertical"
  (onEventClick)="onEventClick($event)">
</sui-timeline>`,
            tsCode: `export class TimelineComponent {
  activityEvents = [
    {
      status: 'success',
      icon: '👤',
      content: 'User logged in',
      date: '2 minutes ago'
    },
    {
      status: 'completed',
      icon: '📝',
      content: 'Document uploaded',
      date: '15 minutes ago'
    },
    {
      status: 'warning',
      icon: '⚠️',
      content: 'Password change required',
      date: '3 hours ago'
    },
    {
      status: 'error',
      icon: '❌',
      content: 'Login failed',
      date: '5 hours ago'
    }
  ];

  onEventClick(event: any): void {
    console.log('Event clicked:', event);
  }
}`,
            description: 'Timeline showing user activity log with various status types'
          }
        ],
        props: [
          {
            name: 'value',
            type: 'TimelineEvent[]',
            default: '[]',
            description: 'Array of timeline events. Each event can have: status, content, date, icon, color',
            required: true
          },
          {
            name: 'align',
            type: '"left" | "right" | "alternate"',
            default: '"left"',
            description: 'Alignment of timeline content',
            required: false
          },
          {
            name: 'layout',
            type: '"vertical" | "horizontal"',
            default: '"vertical"',
            description: 'Layout orientation of timeline',
            required: false
          },
          {
            name: 'dataKey',
            type: 'string',
            default: '""',
            description: 'Unique identifier field for events',
            required: false
          },
          {
            name: 'onEventClick',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback when an event is clicked',
            required: false
          }
        ],
        usage: 'Use timelines for displaying chronological events, project milestones, order tracking, activity logs, and process steps. Supports vertical/horizontal layouts, left/right/alternate alignment, and custom icons.',
        tags: ['data', 'timeline', 'chronological', 'events', 'milestones', 'history']
      },
  {
        id: 'upload',
        name: 'Upload',
        category: 'Data',
        description: 'File upload component with drag-and-drop support, file validation, progress tracking, and multiple file handling',
        examples: [
          {
            name: 'Basic Upload',
            code: `<sui-upload
  (onUpload)="onUpload($event)"
  (onSelect)="onSelect($event)"
  (onRemove)="onRemove($event)">
</sui-upload>`,
            tsCode: `export class UploadComponent {
  onUpload(event: any): void {
    console.log('Files uploaded:', event);
  }

  onSelect(event: any): void {
    console.log('Files selected:', event);
  }

  onRemove(event: any): void {
    console.log('File removed:', event);
  }
}`,
            description: 'Basic file upload with drag-and-drop support'
          },
          {
            name: 'Multiple Files',
            code: `<sui-upload
  [multiple]="true"
  (onUpload)="onUpload($event)"
  (onSelect)="onSelect($event)"
  (onRemove)="onRemove($event)">
</sui-upload>`,
            tsCode: `export class UploadComponent {
  onUpload(event: any): void {
    console.log('Files uploaded:', event);
  }

  onSelect(event: any): void {
    console.log('Files selected:', event);
  }

  onRemove(event: any): void {
    console.log('File removed:', event);
  }
}`,
            description: 'Upload multiple files at once'
          },
          {
            name: 'Image Only',
            code: `<sui-upload
  [multiple]="true"
  accept="image/*"
  (onUpload)="onUpload($event)"
  (onSelect)="onSelect($event)"
  (onError)="onError($event)">
</sui-upload>`,
            tsCode: `export class UploadComponent {
  onUpload(event: any): void {
    console.log('Images uploaded:', event);
  }

  onSelect(event: any): void {
    console.log('Images selected:', event);
  }

  onError(event: any): void {
    console.error('Upload error:', event);
    alert(\`Error: \${event.error}\`);
  }
}`,
            description: 'Accept only image files (jpg, png, gif, etc.)'
          },
          {
            name: 'With File Size Limit',
            code: `<sui-upload
  [multiple]="true"
  [maxFileSize]="5242880"
  (onUpload)="onUpload($event)"
  (onSelect)="onSelect($event)"
  (onError)="onError($event)">
</sui-upload>`,
            tsCode: `export class UploadComponent {
  onUpload(event: any): void {
    console.log('Files uploaded:', event);
  }

  onSelect(event: any): void {
    console.log('Files selected:', event);
  }

  onError(event: any): void {
    console.error('Upload error:', event);
    alert(\`Error: \${event.error}\`);
  }
}`,
            description: 'Limit file size to 5 MB (5,242,880 bytes)'
          },
          {
            name: 'Auto Upload',
            code: `<sui-upload
  [multiple]="true"
  [auto]="true"
  (onUpload)="onUpload($event)"
  (onSelect)="onSelect($event)"
  (onProgress)="onProgress($event)">
</sui-upload>`,
            tsCode: `export class UploadComponent {
  onUpload(event: any): void {
    console.log('Files uploaded:', event);
  }

  onSelect(event: any): void {
    console.log('Files selected:', event);
  }

  onProgress(event: any): void {
    console.log('Upload progress:', event);
  }
}`,
            description: 'Automatically upload files when selected'
          },
          {
            name: 'Documents Only',
            code: `<sui-upload
  [multiple]="true"
  accept=".pdf,.doc,.docx,.xls,.xlsx"
  (onUpload)="onUpload($event)"
  (onSelect)="onSelect($event)"
  (onError)="onError($event)">
</sui-upload>`,
            tsCode: `export class UploadComponent {
  onUpload(event: any): void {
    console.log('Documents uploaded:', event);
  }

  onSelect(event: any): void {
    console.log('Documents selected:', event);
  }

  onError(event: any): void {
    console.error('Upload error:', event);
    alert(\`Error: \${event.error}\`);
  }
}`,
            description: 'Accept only document files (PDF, Word, Excel)'
          }
        ],
        props: [
          {
            name: 'multiple',
            type: 'boolean',
            default: 'false',
            description: 'Allow multiple file selection',
            required: false
          },
          {
            name: 'accept',
            type: 'string',
            default: '""',
            description: 'Accepted file types (e.g., "image/*", ".pdf,.doc")',
            required: false
          },
          {
            name: 'maxFileSize',
            type: 'number',
            default: '0',
            description: 'Maximum file size in bytes (0 = no limit)',
            required: false
          },
          {
            name: 'disabled',
            type: 'boolean',
            default: 'false',
            description: 'Disable the upload component',
            required: false
          },
          {
            name: 'auto',
            type: 'boolean',
            default: 'false',
            description: 'Automatically upload files when selected',
            required: false
          },
          {
            name: 'customUpload',
            type: 'boolean',
            default: 'false',
            description: 'Use custom upload logic instead of built-in',
            required: false
          },
          {
            name: 'style',
            type: 'any',
            default: '{}',
            description: 'Inline styles for the component',
            required: false
          },
          {
            name: 'styleClass',
            type: 'string',
            default: '""',
            description: 'CSS class for styling',
            required: false
          },
          {
            name: 'onUpload',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback when files are uploaded',
            required: false
          },
          {
            name: 'onBeforeUpload',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback before upload starts',
            required: false
          },
          {
            name: 'onProgress',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback for upload progress updates',
            required: false
          },
          {
            name: 'onError',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback when upload error occurs',
            required: false
          },
          {
            name: 'onSelect',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback when files are selected',
            required: false
          },
          {
            name: 'onRemove',
            type: 'EventEmitter<any>',
            default: '-',
            description: 'Callback when a file is removed',
            required: false
          }
        ],
        usage: 'Use upload component for file upload functionality with drag-and-drop support. Supports file validation (type and size), multiple files, auto-upload, and custom upload handlers. Perfect for forms, profile pictures, document management, and bulk file uploads.',
        tags: ['data', 'upload', 'file', 'drag-drop', 'form']
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
