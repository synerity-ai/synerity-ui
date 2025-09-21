import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Checkbox as SuiCheckbox } from '../../../../../ui-lib/src/lib/checkbox/checkbox';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule, Tabs, SuiCheckbox],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss'
})
export class CheckboxComponent {
  activeTab = 'demo';
  showBasicCode = false;
  showGroupCode = false;
  showCustomCode = false;

  // Demo data
  basicChecked = false;
  indeterminateChecked = false;
  disabledChecked = true;
  
  // Checkbox group data
  selectedItems: string[] = [];
  allItems = [
    { id: 'item1', label: 'Option 1', checked: false },
    { id: 'item2', label: 'Option 2', checked: false },
    { id: 'item3', label: 'Option 3', checked: false }
  ];

  // Custom checkbox data
  customChecked = false;
  customDisabled = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'group':
        this.showGroupCode = !this.showGroupCode;
        break;
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
    }
  }

  onBasicChange(checked: boolean): void {
    console.log('Basic checkbox changed:', checked);
    this.basicChecked = checked;
  }

  onIndeterminateChange(checked: boolean): void {
    console.log('Indeterminate checkbox changed:', checked);
    this.indeterminateChecked = checked;
  }

  onDisabledChange(checked: boolean): void {
    console.log('Disabled checkbox changed:', checked);
    this.disabledChecked = checked;
  }

  onItemChange(item: any, checked: boolean): void {
    console.log('Item changed:', item.label, checked);
    item.checked = checked;
    
    if (checked) {
      if (!this.selectedItems.includes(item.id)) {
        this.selectedItems.push(item.id);
      }
    } else {
      this.selectedItems = this.selectedItems.filter(id => id !== item.id);
    }
  }

  onSelectAllChange(checked: boolean): void {
    console.log('Select all changed:', checked);
    this.allItems.forEach(item => {
      item.checked = checked;
    });
    
    if (checked) {
      this.selectedItems = this.allItems.map(item => item.id);
    } else {
      this.selectedItems = [];
    }
  }

  onCustomChange(checked: boolean): void {
    console.log('Custom checkbox changed:', checked);
    this.customChecked = checked;
  }

  get allSelected(): boolean {
    return this.allItems.every(item => item.checked);
  }

  get someSelected(): boolean {
    return this.allItems.some(item => item.checked) && !this.allSelected;
  }
}