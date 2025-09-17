import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { AutoComplete } from '../../../../../ui-lib/src/lib/auto-complete/auto-complete';

@Component({
  selector: 'app-autocomplete',
  imports: [CommonModule, FormsModule, Tabs, AutoComplete],
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.scss'
})
export class Autocomplete {
  activeTab = 'demo';
  
  // Basic AutoComplete
  basicAutoComplete = '';
  showBasicAutoCompleteCode = false;
  
  // Product AutoComplete
  productAutoComplete = '';
  showProductAutoCompleteCode = false;
  
  // Template AutoComplete
  templateAutoComplete = '';
  showTemplateAutoCompleteCode = false;
  
  // Interactive Demo
  interactiveValue = '';
  interactiveDisabled = false;
  showInteractiveDemoCode = false;
  
  // Sample data
  countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
    'Bahrain', 'Bangladesh', 'Belarus', 'Belgium', 'Bolivia', 'Brazil', 'Bulgaria', 'Cambodia',
    'Canada', 'Chile', 'China', 'Colombia', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic',
    'Denmark', 'Ecuador', 'Egypt', 'Estonia', 'Finland', 'France', 'Georgia', 'Germany',
    'Ghana', 'Greece', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq',
    'Ireland', 'Israel', 'Italy', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait',
    'Latvia', 'Lebanon', 'Libya', 'Lithuania', 'Luxembourg', 'Malaysia', 'Mexico', 'Morocco',
    'Netherlands', 'New Zealand', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Peru', 'Philippines',
    'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Saudi Arabia', 'Singapore', 'Slovakia',
    'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Sweden', 'Switzerland',
    'Syria', 'Thailand', 'Turkey', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Venezuela',
    'Vietnam', 'Yemen', 'Zimbabwe'
  ];
  
  products = [
    { label: 'Laptop', value: 'laptop' },
    { label: 'Smartphone', value: 'smartphone' },
    { label: 'Tablet', value: 'tablet' },
    { label: 'Headphones', value: 'headphones' },
    { label: 'Camera', value: 'camera' },
    { label: 'Book', value: 'book' },
    { label: 'Notebook', value: 'notebook' },
    { label: 'Pen', value: 'pen' },
    { label: 'Desk', value: 'desk' },
    { label: 'Chair', value: 'chair' },
    { label: 'Lamp', value: 'lamp' },
    { label: 'Sofa', value: 'sofa' }
  ];
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(section: string) {
    switch (section) {
      case 'basicAutoComplete':
        this.showBasicAutoCompleteCode = !this.showBasicAutoCompleteCode;
        break;
      case 'productAutoComplete':
        this.showProductAutoCompleteCode = !this.showProductAutoCompleteCode;
        break;
      case 'templateAutoComplete':
        this.showTemplateAutoCompleteCode = !this.showTemplateAutoCompleteCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onAutoCompleteChange(value: unknown) {
    console.log('AutoComplete value changed:', value);
  }
  
  onInteractiveAutoCompleteChange(value: unknown) {
    console.log('Interactive AutoComplete value changed:', value);
  }
  
  formatAutoCompleteValue(value: unknown): string {
    return value ? String(value) : 'No selection';
  }
  
  // Interactive demo methods
  resetAutoComplete() {
    this.interactiveValue = '';
    this.interactiveDisabled = false;
  }
  
  getAutoCompleteStatus(value: unknown): string {
    return value ? 'Selected' : 'Not selected';
  }
  
  isValidAutoCompleteValue(value: unknown): boolean {
    return Boolean(value);
  }
  
  // Filter methods for different data sources
  filterCountries(event: any) {
    const query = event.query.toLowerCase();
    return this.countries.filter(country => 
      country.toLowerCase().includes(query)
    );
  }
  
  filterProducts(event: any) {
    const query = event.query.toLowerCase();
    return this.products.filter(product => 
      product.label.toLowerCase().includes(query) ||
      product.value.toLowerCase().includes(query)
    );
  }
}
