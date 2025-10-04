import { Component, Input } from '@angular/core';
import { AutoComplete } from '@synerity/ui';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-auto-complete-demo',
  standalone: true,
  imports: [CommonModule, AutoComplete, FormsModule],
  templateUrl: './auto-complete-demo.html',
  styleUrl: './auto-complete-demo.scss'
})
export class AutoCompleteDemoComponent {
  @Input() currentExample: ComponentExample | null = null;
  // Basic Auto Complete
  basicValue = '';
  basicOptions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];

  // Object-based Auto Complete
  objectValue: any = null;
  objectOptions = [
    { label: 'United States', value: 'US' },
    { label: 'United Kingdom', value: 'UK' },
    { label: 'Canada', value: 'CA' },
    { label: 'Australia', value: 'AU' },
    { label: 'Germany', value: 'DE' },
    { label: 'France', value: 'FR' },
    { label: 'Japan', value: 'JP' },
    { label: 'China', value: 'CN' }
  ];

  // Disabled Auto Complete
  disabledValue = 'Disabled Value';
  disabledOptions = ['Option 1', 'Option 2', 'Option 3'];

  // Auto Complete with Placeholder
  placeholderValue = '';
  placeholderOptions = ['Search for a city...', 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia'];

  // Auto Complete with Min Length
  minLengthValue = '';
  minLengthOptions = ['Type at least 2 characters', 'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta'];

  // Auto Complete with Clear Button
  clearValue = '';
  clearOptions = ['Clear me', 'Option A', 'Option B', 'Option C'];

  onBasicChange(value: any): void {
    console.log('Basic value changed:', value);
  }

  onObjectChange(value: any): void {
    console.log('Object value changed:', value);
  }

  onClearChange(value: any): void {
    console.log('Clear value changed:', value);
  }
}