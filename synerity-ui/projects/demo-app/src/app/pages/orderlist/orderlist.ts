import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { OrderList as SuiOrderList } from '../../../../../ui-lib/src/lib/order-list/order-list';

@Component({
  selector: 'app-orderlist',
  imports: [CommonModule, FormsModule, Tabs, SuiOrderList],
  templateUrl: './orderlist.html',
  styleUrl: './orderlist.scss'
})
export class OrderlistComponent {
  activeTab = 'demo';
  showBasicCode = false;
  showDragDropCode = false;
  showFilterCode = false;

  // Demo data
  basicItems = [
    { id: 1, name: 'Item 1', description: 'Description for item 1' },
    { id: 2, name: 'Item 2', description: 'Description for item 2' },
    { id: 3, name: 'Item 3', description: 'Description for item 3' },
    { id: 4, name: 'Item 4', description: 'Description for item 4' },
    { id: 5, name: 'Item 5', description: 'Description for item 5' }
  ];

  dragDropItems = [
    { id: 1, name: 'Drag Item 1', description: 'This item can be reordered' },
    { id: 2, name: 'Drag Item 2', description: 'Drag and drop to reorder' },
    { id: 3, name: 'Drag Item 3', description: 'Use drag handles to move items' },
    { id: 4, name: 'Drag Item 4', description: 'Items maintain their data' },
    { id: 5, name: 'Drag Item 5', description: 'Reorder functionality enabled' }
  ];

  filterItems = [
    { id: 1, name: 'Apple', description: 'Red fruit' },
    { id: 2, name: 'Banana', description: 'Yellow fruit' },
    { id: 3, name: 'Orange', description: 'Citrus fruit' },
    { id: 4, name: 'Grape', description: 'Small round fruit' },
    { id: 5, name: 'Strawberry', description: 'Red berry fruit' },
    { id: 6, name: 'Blueberry', description: 'Blue berry fruit' },
    { id: 7, name: 'Pineapple', description: 'Tropical fruit' },
    { id: 8, name: 'Mango', description: 'Sweet tropical fruit' }
  ];

  selectedItems: any[] = [];

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'dragdrop':
        this.showDragDropCode = !this.showDragDropCode;
        break;
      case 'filter':
        this.showFilterCode = !this.showFilterCode;
        break;
    }
  }

  onReorder(event: any): void {
    console.log('Items reordered:', event);
  }

  onSelectionChange(event: any): void {
    console.log('Selection changed:', event);
    this.selectedItems = event;
  }

  getSelectedItemsText(): string {
    if (this.selectedItems.length === 0) return 'No items selected';
    return this.selectedItems.map(item => item.name).join(', ');
  }
}
