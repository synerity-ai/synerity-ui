import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { PickList as SuiPickList } from '../../../../../ui-lib/src/lib/pick-list/pick-list';

@Component({
  selector: 'app-picklist',
  imports: [CommonModule, FormsModule, Tabs, SuiPickList],
  templateUrl: './picklist.html',
  styleUrl: './picklist.scss'
})
export class PicklistComponent {
  activeTab = 'demo';
  showBasicCode = false;
  showDragDropCode = false;
  showCustomCode = false;

  // Demo data
  sourceItems = [
    { id: 1, name: 'Item 1', category: 'Category A' },
    { id: 2, name: 'Item 2', category: 'Category A' },
    { id: 3, name: 'Item 3', category: 'Category B' },
    { id: 4, name: 'Item 4', category: 'Category B' },
    { id: 5, name: 'Item 5', category: 'Category C' },
    { id: 6, name: 'Item 6', category: 'Category C' },
    { id: 7, name: 'Item 7', category: 'Category A' },
    { id: 8, name: 'Item 8', category: 'Category B' }
  ];

  targetItems = [
    { id: 9, name: 'Selected Item 1', category: 'Selected' },
    { id: 10, name: 'Selected Item 2', category: 'Selected' }
  ];

  dragDropSourceItems = [
    { id: 1, name: 'Drag Item 1', description: 'Can be dragged between lists' },
    { id: 2, name: 'Drag Item 2', description: 'Drag and drop functionality' },
    { id: 3, name: 'Drag Item 3', description: 'Visual feedback on drag' },
    { id: 4, name: 'Drag Item 4', description: 'Maintains item properties' },
    { id: 5, name: 'Drag Item 5', description: 'Smooth drag animations' }
  ];

  dragDropTargetItems = [
    { id: 6, name: 'Target Item 1', description: 'Already in target list' },
    { id: 7, name: 'Target Item 2', description: 'Can be moved back to source' }
  ];

  customSourceItems = [
    { id: 1, name: 'Product A', price: '$10.99', stock: 50 },
    { id: 2, name: 'Product B', price: '$15.99', stock: 30 },
    { id: 3, name: 'Product C', price: '$8.99', stock: 75 },
    { id: 4, name: 'Product D', price: '$12.99', stock: 20 },
    { id: 5, name: 'Product E', price: '$25.99', stock: 10 }
  ];

  customTargetItems = [
    { id: 6, name: 'Selected Product 1', price: '$19.99', stock: 5 }
  ];

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
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
    }
  }

  onMoveToTarget(event: any): void {
    console.log('Items moved to target:', event);
  }

  onMoveToSource(event: any): void {
    console.log('Items moved to source:', event);
  }

  onMoveAllToTarget(event: any): void {
    console.log('All items moved to target:', event);
  }

  onMoveAllToSource(event: any): void {
    console.log('All items moved to source:', event);
  }

  onSourceReorder(event: any): void {
    console.log('Source items reordered:', event);
  }

  onTargetReorder(event: any): void {
    console.log('Target items reordered:', event);
  }
}
