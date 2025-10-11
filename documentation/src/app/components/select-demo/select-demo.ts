import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Select, Button } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface ProductOption extends SelectOption {
  price: number;
}

@Component({
  selector: 'app-select-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Select, Button],
  templateUrl: './select-demo.html',
  styleUrl: './select-demo.scss'
})
export class SelectDemoComponent implements OnChanges {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Reset state when example changes
    if (changes['currentExample']) {
      this.selectedValue = null;
      this.multiSelectedValue = [];
      this.selectedProducts = [];
      this.formData = { country: '', city: '' };
      this.isLoadingCountries = false;
      this.customSelectedValue = null;
      this.selectedLanguage = null;
    }
  }

  // Basic state
  selectedValue: string | null = null;
  multiSelectedValue: string[] = [];
  selectedProducts: string[] = [];
  isLoadingCountries = false;
  customSelectedValue: string | null = null;
  selectedLanguage: string | null = null;

  // Form data
  formData = {
    country: '',
    city: ''
  };

  // Options
  basicOptions: SelectOption[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
    { label: 'Disabled Option', value: 'disabled', disabled: true }
  ];

  countries: SelectOption[] = [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Germany', value: 'de' },
    { label: 'France', value: 'fr' }
  ];

  cities: { [key: string]: SelectOption[] } = {
    us: [
      { label: 'New York', value: 'ny' },
      { label: 'Los Angeles', value: 'la' },
      { label: 'Chicago', value: 'chicago' },
      { label: 'Houston', value: 'houston' }
    ],
    ca: [
      { label: 'Toronto', value: 'toronto' },
      { label: 'Vancouver', value: 'vancouver' },
      { label: 'Montreal', value: 'montreal' }
    ],
    uk: [
      { label: 'London', value: 'london' },
      { label: 'Manchester', value: 'manchester' },
      { label: 'Birmingham', value: 'birmingham' }
    ],
    de: [
      { label: 'Berlin', value: 'berlin' },
      { label: 'Munich', value: 'munich' },
      { label: 'Hamburg', value: 'hamburg' }
    ],
    fr: [
      { label: 'Paris', value: 'paris' },
      { label: 'Lyon', value: 'lyon' },
      { label: 'Marseille', value: 'marseille' }
    ]
  };

  skills: SelectOption[] = [
    { label: 'JavaScript', value: 'js' },
    { label: 'TypeScript', value: 'ts' },
    { label: 'Angular', value: 'angular' },
    { label: 'React', value: 'react' },
    { label: 'Vue.js', value: 'vue' },
    { label: 'Node.js', value: 'node' },
    { label: 'Python', value: 'python' },
    { label: 'Java', value: 'java' }
  ];

  products: ProductOption[] = [
    { label: 'MacBook Pro 16"', value: 'macbook', price: 2499 },
    { label: 'iPhone 15 Pro', value: 'iphone', price: 999 },
    { label: 'iPad Air', value: 'ipad', price: 599 },
    { label: 'Apple Watch', value: 'watch', price: 399 },
    { label: 'AirPods Pro', value: 'airpods', price: 249 }
  ];

  customOptions: SelectOption[] = [
    { label: 'Enhanced Option', value: 'enhanced' },
    { label: 'Animated Option', value: 'animated' },
    { label: 'Glow Effect', value: 'glow' }
  ];

  languages: SelectOption[] = [
    { label: 'English', value: 'en' },
    { label: 'Spanish', value: 'es' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Italian', value: 'it' },
    { label: 'Portuguese', value: 'pt' }
  ];

  // Methods
  getCitiesForCountry(): SelectOption[] {
    if (!this.formData.country) return [];
    return this.cities[this.formData.country] || [];
  }

  onCountryChange(): void {
    this.formData.city = '';
  }

  getCountryLabel(): string {
    const country = this.countries.find(c => c.value === this.formData.country);
    return country ? country.label : '';
  }

  getCityLabel(): string {
    const cities = this.getCitiesForCountry();
    const city = cities.find(c => c.value === this.formData.city);
    return city ? city.label : '';
  }

  getTotalPrice(): number {
    return this.products
      .filter(product => this.selectedProducts.includes(product.value))
      .reduce((total, product) => total + product.price, 0);
  }

  toggleLoading(): void {
    this.isLoadingCountries = !this.isLoadingCountries;
  }
}
