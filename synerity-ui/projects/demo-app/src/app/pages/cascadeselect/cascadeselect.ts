import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { CascadeSelect as SuiCascadeSelect } from '../../../../../ui-lib/src/lib/cascade-select/cascade-select';

@Component({
  selector: 'app-cascadeselect',
  imports: [CommonModule, FormsModule, Tabs, SuiCascadeSelect],
  templateUrl: './cascadeselect.html',
  styleUrl: './cascadeselect.scss'
})
export class Cascadeselect {
  activeTab = 'demo';
  
  // Demo data
  basicCascadeSelect: unknown = null;
  countryCascadeSelect: unknown = null;
  categoryCascadeSelect: unknown = null;
  disabledCascadeSelect: unknown = null;
  
  // Interactive demo data
  interactiveValue: unknown = null;
  interactiveDisabled = false;
  interactiveOptions: Array<{ label: string; value?: unknown; children?: any[] }> = [];
  
  // Code visibility states
  showBasicCascadeSelectCode = false;
  showCountryCascadeSelectCode = false;
  showCategoryCascadeSelectCode = false;
  showCascadeSelectStatesCode = false;
  showInteractiveDemoCode = false;
  
  // Sample data
  countryOptions: Array<{ label: string; value?: unknown; children?: any[] }> = [
    {
      label: 'North America',
      children: [
        { label: 'United States', value: 'US' },
        { label: 'Canada', value: 'CA' },
        { label: 'Mexico', value: 'MX' }
      ]
    },
    {
      label: 'Europe',
      children: [
        { label: 'United Kingdom', value: 'UK' },
        { label: 'France', value: 'FR' },
        { label: 'Germany', value: 'DE' },
        { label: 'Italy', value: 'IT' }
      ]
    },
    {
      label: 'Asia',
      children: [
        { label: 'Japan', value: 'JP' },
        { label: 'China', value: 'CN' },
        { label: 'India', value: 'IN' },
        { label: 'South Korea', value: 'KR' }
      ]
    }
  ];
  
  categoryOptions: Array<{ label: string; value?: unknown; children?: any[] }> = [
    {
      label: 'Electronics',
      children: [
        {
          label: 'Computers',
          children: [
            { label: 'Laptops', value: 'laptops' },
            { label: 'Desktops', value: 'desktops' },
            { label: 'Tablets', value: 'tablets' }
          ]
        },
        {
          label: 'Mobile',
          children: [
            { label: 'Smartphones', value: 'smartphones' },
            { label: 'Accessories', value: 'mobile-accessories' }
          ]
        }
      ]
    },
    {
      label: 'Clothing',
      children: [
        {
          label: 'Men',
          children: [
            { label: 'Shirts', value: 'men-shirts' },
            { label: 'Pants', value: 'men-pants' },
            { label: 'Shoes', value: 'men-shoes' }
          ]
        },
        {
          label: 'Women',
          children: [
            { label: 'Dresses', value: 'women-dresses' },
            { label: 'Tops', value: 'women-tops' },
            { label: 'Shoes', value: 'women-shoes' }
          ]
        }
      ]
    }
  ];
  
  constructor() {
    this.interactiveOptions = this.countryOptions;
  }
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicCascadeSelect':
        this.showBasicCascadeSelectCode = !this.showBasicCascadeSelectCode;
        break;
      case 'countryCascadeSelect':
        this.showCountryCascadeSelectCode = !this.showCountryCascadeSelectCode;
        break;
      case 'categoryCascadeSelect':
        this.showCategoryCascadeSelectCode = !this.showCategoryCascadeSelectCode;
        break;
      case 'cascadeSelectStates':
        this.showCascadeSelectStatesCode = !this.showCascadeSelectStatesCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  // CascadeSelect demo methods
  onCascadeSelectChange(value: unknown) {
    console.log('CascadeSelect changed:', value);
  }
  
  onInteractiveCascadeSelectChange(value: unknown) {
    this.interactiveValue = value;
    console.log('Interactive cascade select changed:', value);
  }
  
  // Helper methods for interactive demo
  setInteractiveOptions(options: Array<{ label: string; value?: unknown; children?: any[] }>) {
    this.interactiveOptions = options;
    this.interactiveValue = null; // Reset value when changing options
  }
  
  resetCascadeSelect() {
    this.interactiveValue = null;
    this.interactiveDisabled = false;
    this.interactiveOptions = this.countryOptions;
  }
  
  // Utility methods
  formatCascadeSelectValue(value: unknown): string {
    return value ? String(value) : 'None selected';
  }
  
  isValidCascadeSelectValue(value: unknown): boolean {
    return value !== null && value !== undefined;
  }
  
  getCascadeSelectStatus(value: unknown): string {
    return value ? 'Selected' : 'Not selected';
  }
  
  getInteractivePlaceholders(): string[] {
    if (this.interactiveOptions === this.countryOptions) {
      return ['Select Region', 'Select Country'];
    } else if (this.interactiveOptions === this.categoryOptions) {
      return ['Select Category', 'Select Subcategory', 'Select Item'];
    }
    return ['Select Level 1', 'Select Level 2'];
  }
}