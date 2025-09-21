import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Listbox as SuiListbox } from '../../../../../ui-lib/src/lib/listbox/listbox';

@Component({
  selector: 'app-listbox',
  imports: [CommonModule, FormsModule, Tabs, SuiListbox],
  templateUrl: './listbox.html',
  styleUrl: './listbox.scss'
})
export class ListboxComponent {
  activeTab = 'demo';

  // Basic ListBox
  basicValue: any = null;
  basicOptions = [
    { label: 'New York', value: 'NY' },
    { label: 'Rome', value: 'RM' },
    { label: 'London', value: 'LDN' },
    { label: 'Istanbul', value: 'IST' },
    { label: 'Paris', value: 'PRS' }
  ];

  // Grouped ListBox
  groupedValue: any = null;
  groupedOptions = [
    { label: 'Frontend Technologies', value: 'frontend' },
    { label: 'Angular', value: 'angular' },
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Backend Technologies', value: 'backend' },
    { label: 'Node.js', value: 'nodejs' },
    { label: 'Python', value: 'python' },
    { label: 'Java', value: 'java' }
  ];

  // Custom styled ListBox
  customValue: any = null;
  customOptions = [
    { label: 'Premium Plan', value: 'premium' },
    { label: 'Business Plan', value: 'business' },
    { label: 'Starter Plan', value: 'starter' },
    { label: 'Free Plan', value: 'free' }
  ];

  // Disabled ListBox
  disabledValue: any = 'london';
  disabledOptions = [
    { label: 'New York', value: 'newyork' },
    { label: 'Rome', value: 'rome' },
    { label: 'London', value: 'london' },
    { label: 'Istanbul', value: 'istanbul', disabled: true },
    { label: 'Paris', value: 'paris' }
  ];

  // Code visibility flags
  showBasicCode = false;
  showGroupedCode = false;
  showCustomCode = false;
  showDisabledCode = false;

  onTabChange(tab: string) {
    this.activeTab = tab;
  }

  toggleCode(type: string) {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'grouped':
        this.showGroupedCode = !this.showGroupedCode;
        break;
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
      case 'disabled':
        this.showDisabledCode = !this.showDisabledCode;
        break;
    }
  }

  onBasicChange(value: any) {
    this.basicValue = value;
    console.log('Basic ListBox selection changed:', value);
  }

  onGroupedChange(value: any) {
    this.groupedValue = value;
    console.log('Grouped ListBox selection changed:', value);
  }

  onCustomChange(value: any) {
    this.customValue = value;
    console.log('Custom ListBox selection changed:', value);
  }

  onDisabledChange(value: any) {
    this.disabledValue = value;
    console.log('Disabled ListBox selection changed:', value);
  }
}
