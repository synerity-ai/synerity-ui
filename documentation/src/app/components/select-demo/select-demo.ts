import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Select, Button } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface Country {
  label: string;
  value: string;
  flag: string;
  continent: string;
}

interface Product {
  label: string;
  value: string;
  category: string;
  price: number;
}

interface Skill {
  label: string;
  value: string;
  level: string;
  category: string;
}

@Component({
  selector: 'app-select-demo',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule, Select, Button],
  templateUrl: './select-demo.html',
  styleUrl: './select-demo.scss'
})
export class SelectDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Basic select state
  basicSelectedValue: string | null = null;
  basicOptions: SelectOption[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Disabled Option', value: 'disabled', disabled: true }
  ];

  // Size variations
  sizeVariants = [
    { size: 'sm', label: 'Small Select' },
    { size: 'normal', label: 'Normal Select' },
    { size: 'lg', label: 'Large Select' }
  ];
  sizeSelectedValue: string | null = null;

  // Form integration
  formData = {
    country: '',
    city: '',
    language: '',
    timezone: '',
    currency: ''
  };

  // Country selection
  countries: Country[] = [
    { label: 'United States', value: 'us', flag: '🇺🇸', continent: 'North America' },
    { label: 'Canada', value: 'ca', flag: '🇨🇦', continent: 'North America' },
    { label: 'United Kingdom', value: 'uk', flag: '🇬🇧', continent: 'Europe' },
    { label: 'Germany', value: 'de', flag: '🇩🇪', continent: 'Europe' },
    { label: 'France', value: 'fr', flag: '🇫🇷', continent: 'Europe' },
    { label: 'Japan', value: 'jp', flag: '🇯🇵', continent: 'Asia' },
    { label: 'Australia', value: 'au', flag: '🇦🇺', continent: 'Oceania' },
    { label: 'Brazil', value: 'br', flag: '🇧🇷', continent: 'South America' }
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
      { label: 'Montreal', value: 'montreal' },
      { label: 'Calgary', value: 'calgary' }
    ],
    uk: [
      { label: 'London', value: 'london' },
      { label: 'Manchester', value: 'manchester' },
      { label: 'Birmingham', value: 'birmingham' },
      { label: 'Glasgow', value: 'glasgow' }
    ],
    de: [
      { label: 'Berlin', value: 'berlin' },
      { label: 'Munich', value: 'munich' },
      { label: 'Hamburg', value: 'hamburg' },
      { label: 'Frankfurt', value: 'frankfurt' }
    ],
    fr: [
      { label: 'Paris', value: 'paris' },
      { label: 'Lyon', value: 'lyon' },
      { label: 'Marseille', value: 'marseille' },
      { label: 'Toulouse', value: 'toulouse' }
    ],
    jp: [
      { label: 'Tokyo', value: 'tokyo' },
      { label: 'Osaka', value: 'osaka' },
      { label: 'Kyoto', value: 'kyoto' },
      { label: 'Yokohama', value: 'yokohama' }
    ],
    au: [
      { label: 'Sydney', value: 'sydney' },
      { label: 'Melbourne', value: 'melbourne' },
      { label: 'Brisbane', value: 'brisbane' },
      { label: 'Perth', value: 'perth' }
    ],
    br: [
      { label: 'São Paulo', value: 'saopaulo' },
      { label: 'Rio de Janeiro', value: 'rio' },
      { label: 'Brasília', value: 'brasilia' },
      { label: 'Salvador', value: 'salvador' }
    ]
  };

  languages: SelectOption[] = [
    { label: 'English', value: 'en' },
    { label: 'Spanish', value: 'es' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Japanese', value: 'ja' },
    { label: 'Chinese', value: 'zh' },
    { label: 'Portuguese', value: 'pt' },
    { label: 'Italian', value: 'it' }
  ];

  timezones: SelectOption[] = [
    { label: 'UTC (Coordinated Universal Time)', value: 'utc' },
    { label: 'EST (Eastern Standard Time)', value: 'est' },
    { label: 'PST (Pacific Standard Time)', value: 'pst' },
    { label: 'GMT (Greenwich Mean Time)', value: 'gmt' },
    { label: 'CET (Central European Time)', value: 'cet' },
    { label: 'JST (Japan Standard Time)', value: 'jst' },
    { label: 'AEST (Australian Eastern Standard Time)', value: 'aest' }
  ];

  currencies: SelectOption[] = [
    { label: 'USD ($)', value: 'usd' },
    { label: 'EUR (€)', value: 'eur' },
    { label: 'GBP (£)', value: 'gbp' },
    { label: 'JPY (¥)', value: 'jpy' },
    { label: 'CAD (C$)', value: 'cad' },
    { label: 'AUD (A$)', value: 'aud' },
    { label: 'BRL (R$)', value: 'brl' }
  ];

  // Multi-select examples
  selectedSkills: string[] = [];
  skills: Skill[] = [
    { label: 'JavaScript', value: 'js', level: 'Advanced', category: 'Frontend' },
    { label: 'TypeScript', value: 'ts', level: 'Advanced', category: 'Frontend' },
    { label: 'Angular', value: 'angular', level: 'Expert', category: 'Frontend' },
    { label: 'React', value: 'react', level: 'Intermediate', category: 'Frontend' },
    { label: 'Vue.js', value: 'vue', level: 'Intermediate', category: 'Frontend' },
    { label: 'Node.js', value: 'node', level: 'Advanced', category: 'Backend' },
    { label: 'Python', value: 'python', level: 'Advanced', category: 'Backend' },
    { label: 'Java', value: 'java', level: 'Intermediate', category: 'Backend' },
    { label: 'C#', value: 'csharp', level: 'Intermediate', category: 'Backend' },
    { label: 'Go', value: 'go', level: 'Beginner', category: 'Backend' },
    { label: 'Docker', value: 'docker', level: 'Advanced', category: 'DevOps' },
    { label: 'Kubernetes', value: 'k8s', level: 'Intermediate', category: 'DevOps' },
    { label: 'AWS', value: 'aws', level: 'Advanced', category: 'Cloud' },
    { label: 'Azure', value: 'azure', level: 'Intermediate', category: 'Cloud' }
  ];

  selectedProducts: string[] = [];
  products: Product[] = [
    { label: 'MacBook Pro', value: 'macbook', category: 'Electronics', price: 2499 },
    { label: 'iPhone 15', value: 'iphone', category: 'Electronics', price: 799 },
    { label: 'iPad Air', value: 'ipad', category: 'Electronics', price: 599 },
    { label: 'AirPods Pro', value: 'airpods', category: 'Audio', price: 249 },
    { label: 'Apple Watch', value: 'watch', category: 'Wearables', price: 399 },
    { label: 'Dell XPS 13', value: 'xps', category: 'Electronics', price: 1299 },
    { label: 'Samsung Galaxy', value: 'galaxy', category: 'Electronics', price: 699 },
    { label: 'Sony WH-1000XM5', value: 'sony', category: 'Audio', price: 399 }
  ];

  // Search functionality
  selectedCountry: string | null = null;
  selectedCity: string | null = null;

  // Loading state
  isLoadingCountries = false;
  isLoadingCities = false;

  // Custom styling
  customSelectedValue: string | null = null;
  customOptions: SelectOption[] = [
    { label: 'Enhanced Option', value: 'enhanced' },
    { label: 'Animated Option', value: 'animated' },
    { label: 'Glow Effect', value: 'glow' },
    { label: 'Shadow Effect', value: 'shadow' },
    { label: 'Gradient Background', value: 'gradient' }
  ];

  // Methods
  getCitiesForCountry(): SelectOption[] {
    if (!this.formData.country) return [];
    return this.cities[this.formData.country] || [];
  }

  resetForm(): void {
    this.formData = {
      country: '',
      city: '',
      language: '',
      timezone: '',
      currency: ''
    };
  }

  submitForm(): void {
    console.log('Form submitted:', this.formData);
    alert('Form Data: ' + JSON.stringify(this.formData));
  }

  loadCountries(): void {
    this.isLoadingCountries = true;
    // Simulate API call
    setTimeout(() => {
      this.isLoadingCountries = false;
    }, 2000);
  }

  loadCities(): void {
    this.isLoadingCities = true;
    // Simulate API call
    setTimeout(() => {
      this.isLoadingCities = false;
    }, 1500);
  }

  onCountryChange(): void {
    this.formData.city = ''; // Reset city when country changes
    if (this.formData.country) {
      this.loadCities();
    }
  }

  getSelectedSkills(): Skill[] {
    return this.skills.filter(skill => this.selectedSkills.includes(skill.value));
  }

  getSelectedProducts(): Product[] {
    return this.products.filter(product => this.selectedProducts.includes(product.value));
  }

  getTotalPrice(): number {
    return this.getSelectedProducts().reduce((total, product) => total + product.price, 0);
  }

  getSkillsByCategory(): { [category: string]: Skill[] } {
    return this.skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {} as { [category: string]: Skill[] });
  }

  getProductsByCategory(): { [category: string]: Product[] } {
    return this.products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {} as { [category: string]: Product[] });
  }

  // Expose Math for template usage
  Math = Math;

  // Filter methods
  filterSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  filterProductsByCategory(category: string): Product[] {
    return this.products.filter(product => product.category === category);
  }

  getSkillLevelColor(level: string): string {
    switch (level.toLowerCase()) {
      case 'expert': return '#10b981'; // green
      case 'advanced': return '#3b82f6'; // blue
      case 'intermediate': return '#f59e0b'; // yellow
      case 'beginner': return '#ef4444'; // red
      default: return '#6b7280'; // gray
    }
  }

  getSelectedOptionLabel(options: SelectOption[], selectedValue: string): string {
    const option = options.find(opt => opt.value === selectedValue);
    return option ? option.label : 'None selected';
  }

  getSelectedCountry(): Country | undefined {
    return this.countries.find(country => country.value === this.formData.country);
  }

  getSelectedCity(): SelectOption | undefined {
    const cities = this.getCitiesForCountry();
    return cities.find(city => city.value === this.formData.city);
  }
}