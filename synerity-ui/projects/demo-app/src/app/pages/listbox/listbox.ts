import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Listbox as SuiListbox } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-listbox',
  imports: [CommonModule, FormsModule, SuiListbox, Tabs],
  templateUrl: './listbox.html',
  styleUrl: './listbox.scss'
})
export class ListBoxPage {
  activeTab = 'demo';
  
  // Demo data
  basicListBox: unknown = null;
  countriesListBox: unknown = null;
  disabledListBox: unknown = null;
  interactiveListBox: unknown = null;
  interactiveDisabled = false;
  
  // Options data
  basicOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
    { label: 'Option 5', value: 'option5' }
  ];
  
  countriesOptions = [
    { label: 'United States', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Germany', value: 'de' },
    { label: 'France', value: 'fr' },
    { label: 'Japan', value: 'jp' },
    { label: 'Australia', value: 'au' },
    { label: 'Brazil', value: 'br' },
    { label: 'India', value: 'in' },
    { label: 'China', value: 'cn' }
  ];
  
  disabledOptions = [
    { label: 'Enabled Option 1', value: 'enabled1' },
    { label: 'Disabled Option', value: 'disabled', disabled: true },
    { label: 'Enabled Option 2', value: 'enabled2' },
    { label: 'Another Disabled', value: 'disabled2', disabled: true },
    { label: 'Enabled Option 3', value: 'enabled3' }
  ];
  
  // Code visibility states
  showBasicListBoxCode = false;
  showCountriesListBoxCode = false;
  showDisabledListBoxCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicListBox':
        this.showBasicListBoxCode = !this.showBasicListBoxCode;
        break;
      case 'countriesListBox':
        this.showCountriesListBoxCode = !this.showCountriesListBoxCode;
        break;
      case 'disabledListBox':
        this.showDisabledListBoxCode = !this.showDisabledListBoxCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onListBoxChange(value: unknown, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Helper methods
  getListBoxStatus(value: unknown): { status: string; color: string; icon: string } {
    if (value === null || value === undefined) {
      return { status: 'No Selection', color: 'text-gray-600', icon: '○' };
    } else {
      return { status: 'Selected', color: 'text-green-600', icon: '✓' };
    }
  }
  
  getListBoxDescription(value: unknown): string {
    if (value === null || value === undefined) {
      return 'No option selected';
    } else {
      return `Selected: ${value}`;
    }
  }
  
  // Quick actions
  setRandomBasicOption() {
    const randomIndex = Math.floor(Math.random() * this.basicOptions.length);
    this.basicListBox = this.basicOptions[randomIndex].value;
  }
  
  setRandomCountry() {
    const randomIndex = Math.floor(Math.random() * this.countriesOptions.length);
    this.countriesListBox = this.countriesOptions[randomIndex].value;
  }
  
  setRandomInteractiveOption() {
    const randomIndex = Math.floor(Math.random() * this.basicOptions.length);
    this.interactiveListBox = this.basicOptions[randomIndex].value;
  }
  
  clearAll() {
    this.basicListBox = null;
    this.countriesListBox = null;
    this.disabledListBox = null;
    this.interactiveListBox = null;
  }
}
