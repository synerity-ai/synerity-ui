import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderList } from '@synerity/ui';

interface Task {
  id: number;
  label: string;
  priority?: string;
}

@Component({
  selector: 'app-order-list-demo',
  standalone: true,
  imports: [CommonModule, OrderList],
  templateUrl: './order-list-demo.html',
  styleUrls: ['./order-list-demo.scss']
})
export class OrderListDemo {
  @Input() currentExample: any;

  getCurrentExample() {
    return this.currentExample || { name: 'Basic Order List' };
  }

  // Basic tasks
  basicTasks: Task[] = [
    { id: 1, label: 'Complete project proposal' },
    { id: 2, label: 'Review pull requests' },
    { id: 3, label: 'Update documentation' },
    { id: 4, label: 'Fix reported bugs' },
    { id: 5, label: 'Deploy to production' }
  ];

  // Priority tasks
  priorityTasks: Task[] = [
    { id: 1, label: 'Critical bug fix', priority: 'high' },
    { id: 2, label: 'Client meeting preparation', priority: 'high' },
    { id: 3, label: 'Code review', priority: 'medium' },
    { id: 4, label: 'Update readme', priority: 'low' },
    { id: 5, label: 'Team sync meeting', priority: 'medium' }
  ];

  // Features list
  features: Task[] = [
    { id: 1, label: 'User authentication' },
    { id: 2, label: 'Dashboard analytics' },
    { id: 3, label: 'File upload system' },
    { id: 4, label: 'Email notifications' },
    { id: 5, label: 'Search functionality' },
    { id: 6, label: 'Export to PDF' },
    { id: 7, label: 'Multi-language support' },
    { id: 8, label: 'Dark mode toggle' }
  ];

  // Products list
  products: Task[] = [
    { id: 1, label: 'Laptop - $1,299' },
    { id: 2, label: 'Wireless Mouse - $29' },
    { id: 3, label: 'Mechanical Keyboard - $149' },
    { id: 4, label: 'Monitor 27" - $399' },
    { id: 5, label: 'USB-C Hub - $49' }
  ];

  // Empty list
  emptyList: Task[] = [];

  // Selected items tracking
  selectedItems: any[] = [];

  onReorder(event: any): void {
    console.log('List reordered:', event);
  }

  onSelectionChange(items: any[]): void {
    this.selectedItems = items;
    console.log('Selected items:', items);
  }

  resetOrder(): void {
    this.basicTasks = [
      { id: 1, label: 'Complete project proposal' },
      { id: 2, label: 'Review pull requests' },
      { id: 3, label: 'Update documentation' },
      { id: 4, label: 'Fix reported bugs' },
      { id: 5, label: 'Deploy to production' }
    ];
  }
}
