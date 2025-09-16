import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { PickList } from 'ui-lib';

@Component({
  selector: 'app-picklist',
  imports: [CommonModule, FormsModule, Tabs, PickList],
  templateUrl: './picklist.html',
  styleUrl: './picklist.scss'
})
export class Picklist {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicPickListCode = false;
  showCustomHeadersCode = false;
  showNoFilterCode = false;
  showComplexDataCode = false;

  // Basic pick list data
  basicSource = [
    'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'
  ];
  basicTarget: string[] = [];

  // Custom headers data
  customSource = [
    { name: 'John Doe', role: 'Developer' },
    { name: 'Jane Smith', role: 'Designer' },
    { name: 'Mike Johnson', role: 'Manager' },
    { name: 'Sarah Wilson', role: 'Analyst' },
    { name: 'David Brown', role: 'Tester' }
  ];
  customTarget: any[] = [];

  // No filter data
  noFilterSource = [
    'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'
  ];
  noFilterTarget: string[] = [];

  // Complex data
  complexSource = [
    { 
      id: 1, 
      name: 'Product A', 
      category: 'Electronics', 
      price: 299.99,
      description: 'High-quality electronic device'
    },
    { 
      id: 2, 
      name: 'Product B', 
      category: 'Clothing', 
      price: 49.99,
      description: 'Comfortable clothing item'
    },
    { 
      id: 3, 
      name: 'Product C', 
      category: 'Books', 
      price: 19.99,
      description: 'Educational book'
    },
    { 
      id: 4, 
      name: 'Product D', 
      category: 'Home', 
      price: 199.99,
      description: 'Home improvement item'
    },
    { 
      id: 5, 
      name: 'Product E', 
      category: 'Sports', 
      price: 79.99,
      description: 'Sports equipment'
    }
  ];
  complexTarget: any[] = [];

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicPickList':
        this.showBasicPickListCode = !this.showBasicPickListCode;
        break;
      case 'customHeaders':
        this.showCustomHeadersCode = !this.showCustomHeadersCode;
        break;
      case 'noFilter':
        this.showNoFilterCode = !this.showNoFilterCode;
        break;
      case 'complexData':
        this.showComplexDataCode = !this.showComplexDataCode;
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