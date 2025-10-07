import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Badge } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'danger';
  count: number;
  timestamp: string;
}

interface StatusItem {
  name: string;
  status: 'online' | 'offline' | 'busy' | 'away';
  count: number;
}

interface TaskItem {
  id: string;
  title: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'pending' | 'in-progress' | 'completed';
  assignee: string;
}

interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'active' | 'inactive' | 'discontinued';
}

@Component({
  selector: 'app-badge-demo',
  standalone: true,
  imports: [CommonModule, NgFor, Badge],
  templateUrl: './badge-demo.html',
  styleUrl: './badge-demo.scss'
})
export class BadgeDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Basic badges
  basicBadges = [
    { value: 'New', severity: 'info' as const },
    { value: 'Success', severity: 'success' as const },
    { value: 'Warning', severity: 'warning' as const },
    { value: 'Error', severity: 'danger' as const },
    { value: 'Contrast', severity: 'contrast' as const }
  ];

  // Size variations
  sizeVariants: Array<{size: 'small' | 'normal' | 'large', label: string}> = [
    { size: 'small', label: 'Small' },
    { size: 'normal', label: 'Normal' },
    { size: 'large', label: 'Large' }
  ];

  // Number badges
  numberBadges = [
    { value: 1, severity: 'info' as const },
    { value: 5, severity: 'success' as const },
    { value: 12, severity: 'warning' as const },
    { value: 99, severity: 'danger' as const },
    { value: 150, severity: 'contrast' as const }
  ];

  // Dot badges (no value)
  dotBadges = [
    { severity: 'info' as const, label: 'Info' },
    { severity: 'success' as const, label: 'Success' },
    { severity: 'warning' as const, label: 'Warning' },
    { severity: 'danger' as const, label: 'Danger' },
    { severity: 'contrast' as const, label: 'Contrast' }
  ];

  // Notification items
  notifications: NotificationItem[] = [
    {
      id: '1',
      title: 'New Message',
      message: 'You have received a new message from John Doe',
      type: 'info',
      count: 3,
      timestamp: '2 min ago'
    },
    {
      id: '2',
      title: 'Task Completed',
      message: 'Your project has been successfully completed',
      type: 'success',
      count: 1,
      timestamp: '5 min ago'
    },
    {
      id: '3',
      title: 'Warning Alert',
      message: 'System maintenance scheduled for tonight',
      type: 'warning',
      count: 2,
      timestamp: '10 min ago'
    },
    {
      id: '4',
      title: 'Error Report',
      message: 'Failed to process payment for order #12345',
      type: 'danger',
      count: 1,
      timestamp: '15 min ago'
    }
  ];

  // Status indicators
  statusItems: StatusItem[] = [
    { name: 'John Doe', status: 'online', count: 0 },
    { name: 'Jane Smith', status: 'away', count: 2 },
    { name: 'Mike Johnson', status: 'busy', count: 5 },
    { name: 'Sarah Wilson', status: 'offline', count: 0 }
  ];

  // Task management
  tasks: TaskItem[] = [
    {
      id: '1',
      title: 'Design new homepage',
      priority: 'high',
      status: 'in-progress',
      assignee: 'Alice'
    },
    {
      id: '2',
      title: 'Fix login bug',
      priority: 'urgent',
      status: 'pending',
      assignee: 'Bob'
    },
    {
      id: '3',
      title: 'Update documentation',
      priority: 'medium',
      status: 'completed',
      assignee: 'Carol'
    },
    {
      id: '4',
      title: 'Code review',
      priority: 'low',
      status: 'pending',
      assignee: 'David'
    }
  ];

  // Product inventory
  products: ProductItem[] = [
    {
      id: '1',
      name: 'Wireless Headphones',
      category: 'Electronics',
      price: 99.99,
      stock: 25,
      status: 'active'
    },
    {
      id: '2',
      name: 'Smart Watch',
      category: 'Electronics',
      price: 199.99,
      stock: 0,
      status: 'inactive'
    },
    {
      id: '3',
      name: 'Laptop Stand',
      category: 'Accessories',
      price: 49.99,
      stock: 5,
      status: 'active'
    },
    {
      id: '4',
      name: 'Old Model Phone',
      category: 'Electronics',
      price: 299.99,
      stock: 0,
      status: 'discontinued'
    }
  ];

  // Methods
  getSeverityColor(severity: string): string {
    switch (severity) {
      case 'info': return '#1e40af';
      case 'success': return '#166534';
      case 'warning': return '#92400e';
      case 'danger': return '#991b1b';
      case 'contrast': return '#1f2937';
      default: return '#6b7280';
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'online': return '#10b981';
      case 'away': return '#f59e0b';
      case 'busy': return '#ef4444';
      case 'offline': return '#6b7280';
      default: return '#6b7280';
    }
  }

  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'low': return '#6b7280';
      case 'medium': return '#3b82f6';
      case 'high': return '#f59e0b';
      case 'urgent': return '#ef4444';
      default: return '#6b7280';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'online': return 'Online';
      case 'away': return 'Away';
      case 'busy': return 'Busy';
      case 'offline': return 'Offline';
      default: return 'Unknown';
    }
  }

  getPriorityLabel(priority: string): string {
    switch (priority) {
      case 'low': return 'Low';
      case 'medium': return 'Medium';
      case 'high': return 'High';
      case 'urgent': return 'Urgent';
      default: return 'Unknown';
    }
  }

  getTaskStatusColor(status: string): string {
    switch (status) {
      case 'pending': return '#6b7280';
      case 'in-progress': return '#3b82f6';
      case 'completed': return '#10b981';
      default: return '#6b7280';
    }
  }

  getProductStatusColor(status: string): string {
    switch (status) {
      case 'active': return '#10b981';
      case 'inactive': return '#f59e0b';
      case 'discontinued': return '#ef4444';
      default: return '#6b7280';
    }
  }

  getStockStatus(stock: number): { severity: 'success' | 'warning' | 'danger', label: string } {
    if (stock === 0) {
      return { severity: 'danger', label: 'Out of Stock' };
    } else if (stock < 10) {
      return { severity: 'warning', label: 'Low Stock' };
    } else {
      return { severity: 'success', label: 'In Stock' };
    }
  }
}
