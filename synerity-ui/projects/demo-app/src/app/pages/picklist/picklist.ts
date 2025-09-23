import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs } from '../../shared/tabs/tabs';
import { PickList as SuiPickList } from '../../../../../ui-lib/src/lib/pick-list/pick-list';

@Component({
  selector: 'app-picklist',
  standalone: true,
  imports: [CommonModule, Tabs, SuiPickList],
  templateUrl: './picklist.html',
  styleUrl: './picklist.scss'
})
export class PicklistComponent {
  activeTab = 'demo';
  showBasicPickListCode = false;
  showCustomPickListCode = false;

  // Basic picklist data
  sourceItems = [
    { id: 1, label: 'Apple', name: 'Apple' },
    { id: 2, label: 'Banana', name: 'Banana' },
    { id: 3, label: 'Cherry', name: 'Cherry' },
    { id: 4, label: 'Date', name: 'Date' },
    { id: 5, label: 'Elderberry', name: 'Elderberry' },
    { id: 6, label: 'Fig', name: 'Fig' },
    { id: 7, label: 'Grape', name: 'Grape' },
    { id: 8, label: 'Honeydew', name: 'Honeydew' }
  ];

  targetItems = [
    { id: 9, label: 'Kiwi', name: 'Kiwi' },
    { id: 10, label: 'Lemon', name: 'Lemon' }
  ];

  // Custom picklist data
  customSourceItems = [
    { id: 1, label: 'Read Users', name: 'Read Users' },
    { id: 2, label: 'Write Users', name: 'Write Users' },
    { id: 3, label: 'Delete Users', name: 'Delete Users' },
    { id: 4, label: 'Read Posts', name: 'Read Posts' },
    { id: 5, label: 'Write Posts', name: 'Write Posts' },
    { id: 6, label: 'Delete Posts', name: 'Delete Posts' },
    { id: 7, label: 'Manage Settings', name: 'Manage Settings' },
    { id: 8, label: 'View Analytics', name: 'View Analytics' }
  ];

  customTargetItems = [
    { id: 9, label: 'Read Profile', name: 'Read Profile' },
    { id: 10, label: 'Update Profile', name: 'Update Profile' }
  ];

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicPickList':
        this.showBasicPickListCode = !this.showBasicPickListCode;
        break;
      case 'customPickList':
        this.showCustomPickListCode = !this.showCustomPickListCode;
        break;
    }
  }

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
}