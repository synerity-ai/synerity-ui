import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  Table, 
  Paginator, 
  DataView, 
  Tree, 
  TreeTable, 
  Timeline, 
  VirtualScroller,
  OrgChart,
  OrderList,
  PickList
} from 'ui-lib';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [
    CommonModule,
    Table, 
    Paginator, 
    DataView, 
    Tree, 
    TreeTable, 
    Timeline, 
    VirtualScroller,
    OrgChart,
    OrderList,
    PickList
  ],
  templateUrl: './data.html',
  styleUrl: './data.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Data {
  // Math object for template access
  Math = Math;

  // Table data
  tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Developer', status: 'Active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Tester', status: 'Active' }
  ];

  tableColumns = [
    { field: 'id', header: 'ID', sortable: true },
    { field: 'name', header: 'Name', sortable: true },
    { field: 'email', header: 'Email', sortable: true },
    { field: 'role', header: 'Role', sortable: true },
    { field: 'status', header: 'Status', sortable: true }
  ];

  // Tree data
  treeData = [
    {
      key: 'documents',
      label: 'Documents',
      data: 'Documents Folder',
      icon: 'pi pi-folder',
      children: [
        {
          key: 'work',
          label: 'Work',
          data: 'Work Folder',
          icon: 'pi pi-folder',
          children: [
            { key: 'expenses', label: 'Expenses.doc', icon: 'pi pi-file', data: 'Expenses Document' },
            { key: 'resume', label: 'Resume.pdf', icon: 'pi pi-file', data: 'Resume Document' }
          ]
        },
        {
          key: 'home',
          label: 'Home',
          data: 'Home Folder',
          icon: 'pi pi-folder',
          children: [
            { key: 'invoices', label: 'Invoices.txt', icon: 'pi pi-file', data: 'Invoices for this month' }
          ]
        }
      ]
    },
    {
      key: 'pictures',
      label: 'Pictures',
      data: 'Pictures Folder',
      icon: 'pi pi-folder',
      children: [
        { key: 'barcelona', label: 'barcelona.jpg', icon: 'pi pi-image', data: 'Barcelona Photo' },
        { key: 'logo', label: 'logo.jpg', icon: 'pi pi-image', data: 'PrimeFaces Logo' },
        { key: 'primeui', label: 'primeui.png', icon: 'pi pi-image', data: 'PrimeUI Logo' }
      ]
    }
  ];

  // Timeline data
  timelineData = [
    {
      status: 'Ordered',
      date: '15/10/2020 10:30',
      icon: 'pi pi-shopping-cart',
      color: '#9C27B0',
      image: 'game-controller.jpg'
    },
    {
      status: 'Processing',
      date: '15/10/2020 14:00',
      icon: 'pi pi-cog',
      color: '#673AB7'
    },
    {
      status: 'Shipped',
      date: '15/10/2020 16:15',
      icon: 'pi pi-shopping-cart',
      color: '#FF9800'
    },
    {
      status: 'Delivered',
      date: '16/10/2020 10:00',
      icon: 'pi pi-check',
      color: '#607D8B'
    }
  ];

  // Org chart data
  orgChartData = [
    {
      key: 'ceo',
      label: 'CEO',
      type: 'person',
      styleClass: 'p-person',
      expanded: true,
      data: { name: 'Walter White', avatar: 'walter.jpg' },
      children: [
        {
          key: 'cfo',
          label: 'CFO',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: { name: 'Saul Goodman', avatar: 'saul.jpg' },
          children: [
            {
              key: 'tax',
              label: 'Tax',
              styleClass: 'department-cfo'
            },
            {
              key: 'legal',
              label: 'Legal',
              styleClass: 'department-cfo'
            }
          ]
        },
        {
          key: 'coo',
          label: 'COO',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: { name: 'Mike E.', avatar: 'mike.jpg' },
          children: [
            {
              key: 'operations',
              label: 'Operations',
              styleClass: 'department-coo'
            }
          ]
        },
        {
          key: 'cto',
          label: 'CTO',
          type: 'person',
          styleClass: 'p-person',
          expanded: true,
          data: { name: 'Jesse Pinkman', avatar: 'jesse.jpg' },
          children: [
            {
              key: 'development',
              label: 'Development',
              styleClass: 'department-cto'
            },
            {
              key: 'qa',
              label: 'QA',
              styleClass: 'department-cto'
            },
            {
              key: 'rd',
              label: 'R&D',
              styleClass: 'department-cto'
            }
          ]
        }
      ]
    }
  ];

  // Order list data
  orderListData = [
    { label: 'San Francisco', value: 'SF' },
    { label: 'London', value: 'LDN' },
    { label: 'Paris', value: 'PRS' },
    { label: 'Istanbul', value: 'IST' },
    { label: 'Berlin', value: 'BRL' },
    { label: 'Barcelona', value: 'BRC' },
    { label: 'Rome', value: 'RM' }
  ];

  // Pick list data
  sourceItems = [
    { label: 'San Francisco', value: 'SF' },
    { label: 'London', value: 'LDN' },
    { label: 'Paris', value: 'PRS' },
    { label: 'Istanbul', value: 'IST' },
    { label: 'Berlin', value: 'BRL' },
    { label: 'Barcelona', value: 'BRC' },
    { label: 'Rome', value: 'RM' }
  ];

  targetItems: any[] = [];

  // Pagination
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 100;

  // Data view
  dataViewLayout: 'list' | 'grid' = 'list';
  dataViewData = [
    { name: 'Product 1', price: 100, category: 'Electronics' },
    { name: 'Product 2', price: 200, category: 'Clothing' },
    { name: 'Product 3', price: 150, category: 'Electronics' },
    { name: 'Product 4', price: 75, category: 'Books' }
  ];

  // Virtual scroller data
  virtualScrollerData = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    description: `Description for item ${i + 1}`
  }));

  // Event handlers
  onPageChange(event: any) {
    this.currentPage = event.page + 1;
    console.log('Page changed to:', this.currentPage);
  }

  onSort(event: any) {
    console.log('Sort event:', event);
  }

  onRowSelect(event: any) {
    console.log('Row selected:', event);
  }

  onNodeSelect(event: any) {
    console.log('Node selected:', event);
  }

  onTimelineEvent(event: any) {
    console.log('Timeline event:', event);
  }

  onDataViewLayoutChange(layout: 'list' | 'grid') {
    this.dataViewLayout = layout;
  }
}
