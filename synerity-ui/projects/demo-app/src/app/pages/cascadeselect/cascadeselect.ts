import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CascadeSelect as SuiCascadeSelect } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-cascadeselect',
  imports: [CommonModule, FormsModule, SuiCascadeSelect, Tabs],
  templateUrl: './cascadeselect.html',
  styleUrl: './cascadeselect.scss'
})
export class CascadeSelectPage {
  activeTab = 'demo';
  
  // Demo data
  basicCascadeSelect: any = null;
  countryCascadeSelect: any = null;
  disabledCascadeSelect: any = null;
  interactiveCascadeSelect: any = null;
  interactiveDisabled = false;
  
  // Options for demos
  basicOptions = [
    {
      label: 'Option 1',
      value: 'option1',
      children: [
        { label: 'Sub-option 1.1', value: 'option1_1' },
        { label: 'Sub-option 1.2', value: 'option1_2' }
      ]
    },
    {
      label: 'Option 2',
      value: 'option2',
      children: [
        { label: 'Sub-option 2.1', value: 'option2_1' },
        { label: 'Sub-option 2.2', value: 'option2_2' }
      ]
    }
  ];
  
  countryOptions = [
    {
      label: 'North America',
      value: 'north_america',
      children: [
        {
          label: 'United States',
          value: 'us',
          children: [
            { label: 'California', value: 'ca' },
            { label: 'New York', value: 'ny' },
            { label: 'Texas', value: 'tx' }
          ]
        },
        {
          label: 'Canada',
          value: 'ca',
          children: [
            { label: 'Ontario', value: 'on' },
            { label: 'Quebec', value: 'qc' },
            { label: 'British Columbia', value: 'bc' }
          ]
        }
      ]
    },
    {
      label: 'Europe',
      value: 'europe',
      children: [
        {
          label: 'Germany',
          value: 'de',
          children: [
            { label: 'Berlin', value: 'berlin' },
            { label: 'Munich', value: 'munich' },
            { label: 'Hamburg', value: 'hamburg' }
          ]
        },
        {
          label: 'France',
          value: 'fr',
          children: [
            { label: 'Paris', value: 'paris' },
            { label: 'Lyon', value: 'lyon' },
            { label: 'Marseille', value: 'marseille' }
          ]
        }
      ]
    }
  ];
  
  categoryOptions = [
    {
      label: 'Technology',
      value: 'tech',
      children: [
        {
          label: 'Programming',
          value: 'programming',
          children: [
            { label: 'Frontend', value: 'frontend' },
            { label: 'Backend', value: 'backend' },
            { label: 'Mobile', value: 'mobile' }
          ]
        },
        {
          label: 'Design',
          value: 'design',
          children: [
            { label: 'UI/UX', value: 'ui_ux' },
            { label: 'Graphic Design', value: 'graphic' },
            { label: 'Web Design', value: 'web' }
          ]
        }
      ]
    },
    {
      label: 'Business',
      value: 'business',
      children: [
        {
          label: 'Marketing',
          value: 'marketing',
          children: [
            { label: 'Digital Marketing', value: 'digital' },
            { label: 'Content Marketing', value: 'content' },
            { label: 'Social Media', value: 'social' }
          ]
        },
        {
          label: 'Sales',
          value: 'sales',
          children: [
            { label: 'B2B Sales', value: 'b2b' },
            { label: 'B2C Sales', value: 'b2c' },
            { label: 'Enterprise Sales', value: 'enterprise' }
          ]
        }
      ]
    }
  ];
  
  // Code visibility states
  showBasicCascadeSelectCode = false;
  showCountryCascadeSelectCode = false;
  showDisabledCascadeSelectCode = false;
  showCategoryCascadeSelectCode = false;
  showInteractiveDemoCode = false;
  
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
      case 'disabledCascadeSelect':
        this.showDisabledCascadeSelectCode = !this.showDisabledCascadeSelectCode;
        break;
      case 'categoryCascadeSelect':
        this.showCategoryCascadeSelectCode = !this.showCategoryCascadeSelectCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onCascadeSelectChange(value: unknown, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Helper methods
  getCascadeSelectStatus(value: unknown): { status: string; color: string; icon: string } {
    if (!value || value === null) {
      return { status: 'Empty', color: 'text-gray-600', icon: '○' };
    } else {
      return { status: 'Selected', color: 'text-green-600', icon: '✓' };
    }
  }
  
  getCascadeSelectDescription(value: unknown): string {
    if (!value || value === null) {
      return 'No value selected';
    } else {
      return `Selected: ${value}`;
    }
  }
  
  // Quick actions
  setRandomCountry() {
    this.countryCascadeSelect = 'ca'; // Set to California
  }
  
  setRandomCategory() {
    this.interactiveCascadeSelect = 'frontend'; // Set to Frontend
  }
  
  clearAll() {
    this.basicCascadeSelect = null;
    this.countryCascadeSelect = null;
    this.disabledCascadeSelect = null;
    this.interactiveCascadeSelect = null;
  }
}
