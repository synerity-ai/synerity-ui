import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoComplete as SuiAutoComplete } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-autocomplete',
  imports: [CommonModule, FormsModule, SuiAutoComplete, Tabs],
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.scss'
})
export class AutoCompletePage {
  activeTab = 'demo';
  
  // Demo data
  basicAutoComplete = '';
  countryAutoComplete = '';
  disabledAutoComplete = '';
  minLengthAutoComplete = '';
  interactiveAutoComplete = '';
  interactiveMinLength = 1;
  interactiveDisabled = false;
  interactivePlaceholder = 'Type to search...';
  
  // Options for demos
  countryOptions = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 
    'Italy', 'Spain', 'Japan', 'China', 'India', 'Australia', 'Brazil'
  ];
  
  skillOptions = [
    { label: 'JavaScript Developer', value: 'javascript' },
    { label: 'TypeScript Expert', value: 'typescript' },
    { label: 'Angular Specialist', value: 'angular' },
    { label: 'React Developer', value: 'react' },
    { label: 'Vue.js Developer', value: 'vue' },
    { label: 'Node.js Backend', value: 'nodejs' }
  ];
  
  cityOptions = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia',
    'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville',
    'Fort Worth', 'Columbus', 'Charlotte', 'San Francisco', 'Indianapolis',
    'Seattle', 'Denver', 'Washington', 'Boston', 'El Paso', 'Nashville',
    'Detroit', 'Oklahoma City', 'Portland', 'Las Vegas', 'Memphis', 'Louisville'
  ];
  
  // Code visibility states
  showBasicAutoCompleteCode = false;
  showCountryAutoCompleteCode = false;
  showDisabledAutoCompleteCode = false;
  showMinLengthAutoCompleteCode = false;
  showSkillsAutoCompleteCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicAutoComplete':
        this.showBasicAutoCompleteCode = !this.showBasicAutoCompleteCode;
        break;
      case 'countryAutoComplete':
        this.showCountryAutoCompleteCode = !this.showCountryAutoCompleteCode;
        break;
      case 'disabledAutoComplete':
        this.showDisabledAutoCompleteCode = !this.showDisabledAutoCompleteCode;
        break;
      case 'minLengthAutoComplete':
        this.showMinLengthAutoCompleteCode = !this.showMinLengthAutoCompleteCode;
        break;
      case 'skillsAutoComplete':
        this.showSkillsAutoCompleteCode = !this.showSkillsAutoCompleteCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onAutoCompleteChange(value: unknown, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Helper methods
  getAutoCompleteStatus(value: unknown): { status: string; color: string; icon: string } {
    if (!value || value === '') {
      return { status: 'Empty', color: 'text-gray-600', icon: '○' };
    } else {
      return { status: 'Selected', color: 'text-green-600', icon: '✓' };
    }
  }
  
  getAutoCompleteDescription(value: unknown): string {
    if (!value || value === '') {
      return 'No value selected';
    } else {
      return `Selected: ${value}`;
    }
  }
  
  // Quick actions
  setRandomCountry() {
    const randomCountry = this.countryOptions[Math.floor(Math.random() * this.countryOptions.length)];
    this.countryAutoComplete = randomCountry;
  }
  
  setRandomCity() {
    const randomCity = this.cityOptions[Math.floor(Math.random() * this.cityOptions.length)];
    this.minLengthAutoComplete = randomCity;
  }
  
  setRandomSkill() {
    const randomSkill = this.skillOptions[Math.floor(Math.random() * this.skillOptions.length)];
    this.interactiveAutoComplete = randomSkill.value as string;
  }
  
  clearAll() {
    this.basicAutoComplete = '';
    this.countryAutoComplete = '';
    this.disabledAutoComplete = '';
    this.minLengthAutoComplete = '';
    this.interactiveAutoComplete = '';
  }
}
