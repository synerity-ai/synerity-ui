import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderList } from '@synerity/ui';

interface Task {
  label: string;
  priority: string;
}

@Component({
  selector: 'app-su-order-list-demo',
  imports: [CommonModule, FormsModule, OrderList],
  templateUrl: './su-order-list-demo.html',
  styleUrl: './su-order-list-demo.scss'
})
export class SuOrderListDemo {
  tasks: Task[] = [
    { label: 'Design Homepage Mockup', priority: 'High' },
    { label: 'Implement User Authentication', priority: 'High' },
    { label: 'Write Unit Tests', priority: 'Medium' },
    { label: 'Update Documentation', priority: 'Low' },
    { label: 'Code Review PR #123', priority: 'High' },
    { label: 'Fix Bug #456', priority: 'Medium' },
    { label: 'Refactor API Endpoints', priority: 'Low' },
    { label: 'Deploy to Staging', priority: 'Medium' }
  ];

  features: any[] = [
    { label: 'Dark Mode Support' },
    { label: 'Multi-language Support' },
    { label: 'Real-time Notifications' },
    { label: 'Advanced Search' },
    { label: 'Export to PDF' },
    { label: 'Keyboard Shortcuts' }
  ];

  selectedTasks: any[] = [];

  handleReorder(event: any): void {
    console.log('List reordered:', event);
  }

  handleSelectionChange(event: any): void {
    console.log('Selection changed:', event);
    this.selectedTasks = event;
  }
}
