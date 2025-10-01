import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CascadeSelect } from '@synerity/ui';

@Component({
  selector: 'app-su-cascade-select-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CascadeSelect],
  templateUrl: './su-cascade-select-demo.html',
  styleUrl: './su-cascade-select-demo.scss'
})
export class SuCascadeSelectDemo {
  // Basic cascade select
  locationValue: any = null;
  locationPlaceholders = ['Select Country', 'Select State', 'Select City'];
  locationOptions = [
    {
      label: 'United States',
      value: 'us',
      children: [
        {
          label: 'California',
          value: 'ca',
          children: [
            { label: 'Los Angeles', value: 'la' },
            { label: 'San Francisco', value: 'sf' },
            { label: 'San Diego', value: 'sd' }
          ]
        },
        {
          label: 'Texas',
          value: 'tx',
          children: [
            { label: 'Houston', value: 'hou' },
            { label: 'Dallas', value: 'dal' },
            { label: 'Austin', value: 'aus' }
          ]
        },
        {
          label: 'New York',
          value: 'ny',
          children: [
            { label: 'New York City', value: 'nyc' },
            { label: 'Buffalo', value: 'buf' },
            { label: 'Rochester', value: 'roc' }
          ]
        }
      ]
    },
    {
      label: 'Canada',
      value: 'ca',
      children: [
        {
          label: 'Ontario',
          value: 'on',
          children: [
            { label: 'Toronto', value: 'tor' },
            { label: 'Ottawa', value: 'ott' }
          ]
        },
        {
          label: 'British Columbia',
          value: 'bc',
          children: [
            { label: 'Vancouver', value: 'van' },
            { label: 'Victoria', value: 'vic' }
          ]
        }
      ]
    }
  ];

  // Product categories
  productValue: any = null;
  productPlaceholders = ['Category', 'Subcategory', 'Product'];
  productOptions = [
    {
      label: 'Electronics',
      value: 'electronics',
      children: [
        {
          label: 'Computers',
          value: 'computers',
          children: [
            { label: 'Laptops', value: 'laptops' },
            { label: 'Desktops', value: 'desktops' },
            { label: 'Tablets', value: 'tablets' }
          ]
        },
        {
          label: 'Phones',
          value: 'phones',
          children: [
            { label: 'Smartphones', value: 'smartphones' },
            { label: 'Feature Phones', value: 'feature-phones' }
          ]
        }
      ]
    },
    {
      label: 'Clothing',
      value: 'clothing',
      children: [
        {
          label: 'Men',
          value: 'men',
          children: [
            { label: 'Shirts', value: 'men-shirts' },
            { label: 'Pants', value: 'men-pants' }
          ]
        },
        {
          label: 'Women',
          value: 'women',
          children: [
            { label: 'Dresses', value: 'women-dresses' },
            { label: 'Tops', value: 'women-tops' }
          ]
        }
      ]
    }
  ];

  // Disabled example
  disabledValue: any = 'locked';
  disabledPlaceholders = ['Region', 'Country'];
  disabledOptions = [
    {
      label: 'Europe',
      value: 'eu',
      children: [
        { label: 'Germany', value: 'de' },
        { label: 'France', value: 'fr' }
      ]
    }
  ];

  // Event handlers
  onCascadeChange(value: any): void {
    console.log('Cascade select changed:', value);
  }

  // Reset values
  resetValues(): void {
    this.locationValue = null;
    this.productValue = null;
  }
}
