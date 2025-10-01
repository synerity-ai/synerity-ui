import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeSelect } from '@synerity/ui';

@Component({
  selector: 'app-su-tree-select-demo',
  imports: [CommonModule, FormsModule, TreeSelect],
  templateUrl: './su-tree-select-demo.html',
  styleUrl: './su-tree-select-demo.scss'
})
export class SuTreeSelectDemo {
  // Selected values
  selectedLocation: any = null;
  selectedCategory: any = null;
  selectedDepartment: any = null;
  
  // Hierarchical data
  locations = [
    {
      label: 'United States',
      children: [
        { label: 'California', value: 'CA' },
        { label: 'New York', value: 'NY' },
        { label: 'Texas', value: 'TX' }
      ]
    },
    {
      label: 'Europe',
      children: [
        { label: 'United Kingdom', value: 'UK' },
        { label: 'Germany', value: 'DE' },
        { label: 'France', value: 'FR' }
      ]
    },
    {
      label: 'Asia',
      children: [
        { label: 'Japan', value: 'JP' },
        { label: 'China', value: 'CN' },
        { label: 'India', value: 'IN' }
      ]
    }
  ];
  
  categories = [
    {
      label: 'Electronics',
      children: [
        { label: 'Smartphones', value: 'smartphones' },
        { label: 'Laptops', value: 'laptops' },
        { label: 'Tablets', value: 'tablets' }
      ]
    },
    {
      label: 'Clothing',
      children: [
        { label: 'Men', value: 'men' },
        { label: 'Women', value: 'women' },
        { label: 'Kids', value: 'kids' }
      ]
    },
    {
      label: 'Home & Garden',
      children: [
        { label: 'Furniture', value: 'furniture' },
        { label: 'Kitchen', value: 'kitchen' },
        { label: 'Outdoor', value: 'outdoor' }
      ]
    }
  ];
  
  departments = [
    {
      label: 'Engineering',
      children: [
        { label: 'Frontend', value: 'frontend' },
        { label: 'Backend', value: 'backend' },
        { label: 'DevOps', value: 'devops' }
      ]
    },
    {
      label: 'Product',
      children: [
        { label: 'Design', value: 'design' },
        { label: 'Management', value: 'management' },
        { label: 'Research', value: 'research' }
      ]
    }
  ];
  
  handleChange(value: any): void {
    console.log('Selection changed:', value);
  }
}
