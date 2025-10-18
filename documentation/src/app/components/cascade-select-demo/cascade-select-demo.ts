import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CascadeSelect } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

interface CascadeVariant {
  value: any;
  options: any[];
  levelsPlaceholder: string[];
  disabled: boolean;
  name: string;
  description: string;
}

@Component({
  selector: 'app-cascade-select-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, CascadeSelect],
  templateUrl: './cascade-select-demo.html',
  styleUrl: './cascade-select-demo.scss'
})
export class CascadeSelectDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Basic cascade select
  basicCascade: CascadeVariant = {
    value: null,
    levelsPlaceholder: ['Category', 'Subcategory', 'Item'],
    disabled: false,
    name: 'basic',
    description: 'Three-level hierarchical selection',
    options: [
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
              { label: 'Skirts', value: 'women-skirts' }
            ]
          }
        ]
      }
    ]
  };

  // Two levels
  twoLevels: CascadeVariant = {
    value: null,
    levelsPlaceholder: ['Country', 'City'],
    disabled: false,
    name: 'two-levels',
    description: 'Two-level location selection',
    options: [
      {
        label: 'United States',
        value: 'us',
        children: [
          { label: 'New York', value: 'ny' },
          { label: 'Los Angeles', value: 'la' },
          { label: 'Chicago', value: 'chicago' }
        ]
      },
      {
        label: 'United Kingdom',
        value: 'uk',
        children: [
          { label: 'London', value: 'london' },
          { label: 'Manchester', value: 'manchester' },
          { label: 'Birmingham', value: 'birmingham' }
        ]
      },
      {
        label: 'Canada',
        value: 'canada',
        children: [
          { label: 'Toronto', value: 'toronto' },
          { label: 'Vancouver', value: 'vancouver' },
          { label: 'Montreal', value: 'montreal' }
        ]
      }
    ]
  };

  // Disabled state
  disabledCascade: CascadeVariant = {
    value: null,
    levelsPlaceholder: ['Category', 'Subcategory'],
    disabled: true,
    name: 'disabled',
    description: 'Cascade select in disabled state',
    options: [
      {
        label: 'Category 1',
        value: 'cat1',
        children: [
          { label: 'Subcategory 1', value: 'sub1' },
          { label: 'Subcategory 2', value: 'sub2' }
        ]
      }
    ]
  };

  // Product categories
  productCascade: CascadeVariant = {
    value: null,
    levelsPlaceholder: ['Department', 'Category', 'Product'],
    disabled: false,
    name: 'products',
    description: 'E-commerce product category selection',
    options: [
      {
        label: 'Home & Garden',
        value: 'home',
        children: [
          {
            label: 'Furniture',
            value: 'furniture',
            children: [
              { label: 'Chairs', value: 'chairs' },
              { label: 'Tables', value: 'tables' },
              { label: 'Sofas', value: 'sofas' }
            ]
          },
          {
            label: 'Decor',
            value: 'decor',
            children: [
              { label: 'Lamps', value: 'lamps' },
              { label: 'Rugs', value: 'rugs' },
              { label: 'Art', value: 'art' }
            ]
          }
        ]
      },
      {
        label: 'Sports & Outdoors',
        value: 'sports',
        children: [
          {
            label: 'Exercise',
            value: 'exercise',
            children: [
              { label: 'Weights', value: 'weights' },
              { label: 'Cardio', value: 'cardio' },
              { label: 'Yoga', value: 'yoga' }
            ]
          }
        ]
      }
    ]
  };
}
