import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs } from '../../shared/tabs/tabs';
import { OrderList as SuiOrderList } from '../../../../../ui-lib/src/lib/order-list/order-list';

@Component({
  selector: 'app-orderlist',
  standalone: true,
  imports: [CommonModule, Tabs, SuiOrderList],
  templateUrl: './orderlist.html',
  styleUrl: './orderlist.scss'
})
export class OrderlistComponent {
  activeTab = 'demo';
  showBasicOrderListCode = false;
  showSelectionOrderListCode = false;
  selectedItems: any[] = [];

  // Basic items
  basicItems = [
    { id: 1, label: 'Design new logo', name: 'Design new logo' },
    { id: 2, label: 'Update website content', name: 'Update website content' },
    { id: 3, label: 'Review user feedback', name: 'Review user feedback' },
    { id: 4, label: 'Plan marketing campaign', name: 'Plan marketing campaign' },
    { id: 5, label: 'Optimize database queries', name: 'Optimize database queries' }
  ];

  // Selection items
  selectionItems = [
    { id: 1, label: 'High Priority Task', name: 'High Priority Task' },
    { id: 2, label: 'Medium Priority Task', name: 'Medium Priority Task' },
    { id: 3, label: 'Low Priority Task', name: 'Low Priority Task' },
    { id: 4, label: 'Urgent Bug Fix', name: 'Urgent Bug Fix' },
    { id: 5, label: 'Feature Request', name: 'Feature Request' }
  ];

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicOrderList':
        this.showBasicOrderListCode = !this.showBasicOrderListCode;
        break;
      case 'selectionOrderList':
        this.showSelectionOrderListCode = !this.showSelectionOrderListCode;
        break;
    }
  }

  onReorder(event: any): void {
    console.log('Items reordered:', event);
    // Update the original array with the new order
    if (event.direction === 'up') {
      // Handle up movement
    } else if (event.direction === 'down') {
      // Handle down movement
    }
  }

  onSelectionChange(selection: any[]): void {
    this.selectedItems = selection;
    console.log('Selection changed:', selection);
  }

  clearSelection(): void {
    this.selectedItems = [];
  }
}