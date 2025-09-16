import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { OrderList } from 'ui-lib';

@Component({
  selector: 'app-orderlist',
  imports: [CommonModule, FormsModule, Tabs, OrderList],
  templateUrl: './orderlist.html',
  styleUrl: './orderlist.scss'
})
export class Orderlist {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicOrderListCode = false;
  showWithFilterCode = false;
  showCustomStylingCode = false;
  showComplexDataCode = false;

  // Basic items
  basicItems = [
    'Complete project documentation',
    'Review code changes',
    'Update dependencies',
    'Write unit tests',
    'Deploy to staging'
  ];

  // Filter items
  filterItems = [
    { label: 'Laptop', category: 'Electronics', price: '$999' },
    { label: 'Mouse', category: 'Electronics', price: '$29' },
    { label: 'Keyboard', category: 'Electronics', price: '$79' },
    { label: 'Monitor', category: 'Electronics', price: '$299' },
    { label: 'Desk', category: 'Furniture', price: '$199' },
    { label: 'Chair', category: 'Furniture', price: '$149' }
  ];

  // Styled items
  styledItems = [
    { label: 'Critical Bug Fix', priority: 'high', status: 'pending' },
    { label: 'Feature Implementation', priority: 'medium', status: 'in-progress' },
    { label: 'Code Review', priority: 'low', status: 'completed' },
    { label: 'Documentation Update', priority: 'medium', status: 'pending' }
  ];

  // Complex items
  complexItems = [
    { 
      name: 'John Doe', 
      role: 'Senior Developer', 
      department: 'Engineering',
      experience: '5 years'
    },
    { 
      name: 'Jane Smith', 
      role: 'UI/UX Designer', 
      department: 'Design',
      experience: '3 years'
    },
    { 
      name: 'Mike Johnson', 
      role: 'Product Manager', 
      department: 'Product',
      experience: '7 years'
    },
    { 
      name: 'Sarah Wilson', 
      role: 'QA Engineer', 
      department: 'Quality Assurance',
      experience: '4 years'
    },
    { 
      name: 'David Brown', 
      role: 'DevOps Engineer', 
      department: 'Engineering',
      experience: '6 years'
    }
  ];

  // Custom list style
  customListStyle = {
    maxHeight: '300px',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    padding: '16px'
  };

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicOrderList':
        this.showBasicOrderListCode = !this.showBasicOrderListCode;
        break;
      case 'withFilter':
        this.showWithFilterCode = !this.showWithFilterCode;
        break;
      case 'customStyling':
        this.showCustomStylingCode = !this.showCustomStylingCode;
        break;
      case 'complexData':
        this.showComplexDataCode = !this.showComplexDataCode;
        break;
    }
  }

  onReorder(event: any): void {
    console.log('Items reordered:', event);
  }

  onSelectionChange(selectedItems: any[]): void {
    console.log('Selection changed:', selectedItems);
  }
}