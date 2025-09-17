import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Select as SuiSelect } from '../../../../../ui-lib/src/lib/select/select';

@Component({
  selector: 'app-select',
  imports: [CommonModule, FormsModule, Tabs, SuiSelect],
  templateUrl: './select.html',
  styleUrl: './select.scss'
})
export class Select {
  activeTab = 'demo';
  
  // Demo data
  basicSelect = '';
  multiSelect: string[] = [];
  advancedMultiSelect: string[] = [];
  searchableSelect = '';
  disabledSelect = 'option2';
  groupedSelect = '';
  customSelect1 = '';
  customSelect2 = '';
  
  // Options data
  basicOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' }
  ];
  
  multiOptions = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
    { value: 'strawberry', label: 'Strawberry' }
  ];

  advancedOptions = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'mx', label: 'Mexico' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' },
    { value: 'it', label: 'Italy' },
    { value: 'es', label: 'Spain' },
    { value: 'jp', label: 'Japan' },
    { value: 'kr', label: 'South Korea' },
    { value: 'cn', label: 'China' },
    { value: 'in', label: 'India' },
    { value: 'au', label: 'Australia' },
    { value: 'br', label: 'Brazil' },
    { value: 'ar', label: 'Argentina' },
    { value: 'ru', label: 'Russia' },
    { value: 'za', label: 'South Africa' },
    { value: 'ng', label: 'Nigeria' },
    { value: 'eg', label: 'Egypt' },
    { value: 'tr', label: 'Turkey' }
  ];
  
  searchableOptions = [
    { value: 'newyork', label: 'New York' },
    { value: 'london', label: 'London' },
    { value: 'paris', label: 'Paris' },
    { value: 'tokyo', label: 'Tokyo' },
    { value: 'sydney', label: 'Sydney' },
    { value: 'berlin', label: 'Berlin' },
    { value: 'madrid', label: 'Madrid' },
    { value: 'rome', label: 'Rome' }
  ];
  
  disabledOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];
  
  groupedOptions = [
    {
      group: 'Fruits',
      options: [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' }
      ]
    },
    {
      group: 'Vegetables',
      options: [
        { value: 'carrot', label: 'Carrot' },
        { value: 'broccoli', label: 'Broccoli' },
        { value: 'spinach', label: 'Spinach' }
      ]
    }
  ];
  
  // Flattened grouped options for sui-select
  get flattenedGroupedOptions() {
    return this.groupedOptions.flatMap(group => group.options);
  }
  
  // Code visibility states
  showBasicSelectCode = false;
  showMultiSelectCode = false;
  showAdvancedMultiSelectCode = false;
  showSearchableSelectCode = false;
  showDisabledSelectCode = false;
  showGroupedSelectCode = false;
  showCustomSelectCode = false;
  
  // Event handlers
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicSelect':
        this.showBasicSelectCode = !this.showBasicSelectCode;
        break;
      case 'multiSelect':
        this.showMultiSelectCode = !this.showMultiSelectCode;
        break;
      case 'advancedMultiSelect':
        this.showAdvancedMultiSelectCode = !this.showAdvancedMultiSelectCode;
        break;
      case 'searchableSelect':
        this.showSearchableSelectCode = !this.showSearchableSelectCode;
        break;
      case 'disabledSelect':
        this.showDisabledSelectCode = !this.showDisabledSelectCode;
        break;
      case 'groupedSelect':
        this.showGroupedSelectCode = !this.showGroupedSelectCode;
        break;
      case 'customSelect':
        this.showCustomSelectCode = !this.showCustomSelectCode;
        break;
    }
  }
  
  onBasicSelectChange(value: unknown) {
    this.basicSelect = value as string;
  }
  
  onMultiSelectChange(value: unknown) {
    this.multiSelect = value as string[];
  }

  onAdvancedMultiSelectChange(value: unknown) {
    this.advancedMultiSelect = value as string[];
  }
  
  onSearchableSelectChange(value: unknown) {
    this.searchableSelect = value as string;
  }
  
  onGroupedSelectChange(value: unknown) {
    this.groupedSelect = value as string;
  }
  
  onCustomSelect1Change(value: unknown) {
    this.customSelect1 = value as string;
  }
  
  onCustomSelect2Change(value: unknown) {
    this.customSelect2 = value as string;
  }
  
  // Utility methods
  getSelectedLabel(value: string, options: any[]): string {
    const option = options.find(opt => opt.value === value);
    return option ? option.label : value;
  }
  
  getSelectedLabels(selectedValues: string[], options: any[]): string {
    return selectedValues.map(value => 
      options.find(option => option.value === value)?.label || value
    ).join(', ');
  }
  
  getGroupedOptionLabel(value: string): string {
    for (const group of this.groupedOptions) {
      const option = group.options.find(opt => opt.value === value);
      if (option) return option.label;
    }
    return value;
  }
}
