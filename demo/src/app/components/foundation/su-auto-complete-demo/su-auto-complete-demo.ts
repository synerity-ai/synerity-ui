import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoComplete } from '@synerity/ui';

@Component({
  selector: 'app-su-auto-complete-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, AutoComplete],
  templateUrl: './su-auto-complete-demo.html',
  styleUrl: './su-auto-complete-demo.scss'
})
export class SuAutoCompleteDemo {
  // Basic autocomplete
  basicValue = '';
  basicOptions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];

  // Country autocomplete
  countryValue = '';
  countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 
    'France', 'Italy', 'Spain', 'Japan', 'China', 'India', 'Brazil'
  ];

  // Object-based autocomplete
  cityValue = '';
  cities = [
    { label: 'New York', value: 'ny' },
    { label: 'Los Angeles', value: 'la' },
    { label: 'Chicago', value: 'chi' },
    { label: 'Houston', value: 'hou' },
    { label: 'Phoenix', value: 'phx' },
    { label: 'San Francisco', value: 'sf' },
    { label: 'Boston', value: 'bos' },
    { label: 'Seattle', value: 'sea' }
  ];

  // Email autocomplete
  emailValue = '';
  emailSuggestions = [
    'john.doe@example.com',
    'jane.smith@example.com',
    'bob.johnson@example.com',
    'alice.williams@example.com'
  ];

  // Product search
  productValue = '';
  products = [
    { label: 'Laptop - Dell XPS 15', value: 'dell-xps-15' },
    { label: 'Laptop - MacBook Pro', value: 'macbook-pro' },
    { label: 'Phone - iPhone 14', value: 'iphone-14' },
    { label: 'Phone - Samsung Galaxy', value: 'samsung-galaxy' },
    { label: 'Tablet - iPad Air', value: 'ipad-air' },
    { label: 'Headphones - Sony WH-1000XM4', value: 'sony-wh1000' }
  ];

  // Disabled state
  disabledValue = 'Cannot edit this';
  disabledOptions = ['Option 1', 'Option 2', 'Option 3'];

  // Min length example
  minLengthValue = '';
  minLengthOptions = [
    'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 
    'Ruby', 'Go', 'Rust', 'Swift', 'Kotlin'
  ];

  // Current configuration for interactive demo
  currentValue = '';
  currentMinLength = 1;
  currentDisabled = false;
  
  // Min length options - PROPERTY not method
  minLengthVariants = [
    { value: 1, label: '1 character' },
    { value: 2, label: '2 characters' },
    { value: 3, label: '3 characters' }
  ];

  // Event handlers
  onAutoCompleteChange(value: unknown): void {
    console.log('AutoComplete value changed:', value);
  }

  // Reset
  resetValues(): void {
    this.basicValue = '';
    this.countryValue = '';
    this.cityValue = '';
    this.emailValue = '';
    this.productValue = '';
    this.minLengthValue = '';
    this.currentValue = '';
  }
}
