import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Listbox, ListboxOption } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

interface ListboxVariant {
  options: ListboxOption[];
  disabled: boolean;
  multiSelect: boolean;
  size: 'sm' | 'md' | 'lg';
  label: string;
  helperText: string;
  errorText: string;
  description: string;
  value: unknown;
  values: unknown[];
}

@Component({
  selector: 'app-listbox-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Listbox],
  templateUrl: './listbox-demo.html',
  styleUrl: './listbox-demo.scss'
})
export class ListboxDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Basic listbox examples
  basicListboxes: ListboxVariant[] = [
    {
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
        { label: 'Option 4', value: 'option4' },
        { label: 'Option 5', value: 'option5' }
      ],
      disabled: false,
      multiSelect: false,
      size: 'md',
      label: 'Basic Listbox',
      helperText: 'Select an option from the list',
      errorText: '',
      description: 'Simple listbox with basic options',
      value: 'option1',
      values: []
    }
  ];

  // Size variations
  sizeVariants: ListboxVariant[] = [
    {
      options: [
        { label: 'Small Option 1', value: 'sm1' },
        { label: 'Small Option 2', value: 'sm2' },
        { label: 'Small Option 3', value: 'sm3' }
      ],
      disabled: false,
      multiSelect: false,
      size: 'sm',
      label: 'Small Size',
      helperText: 'Compact listbox',
      errorText: '',
      description: 'Compact listbox for smaller spaces',
      value: null,
      values: []
    },
    {
      options: [
        { label: 'Medium Option 1', value: 'md1' },
        { label: 'Medium Option 2', value: 'md2' },
        { label: 'Medium Option 3', value: 'md3' }
      ],
      disabled: false,
      multiSelect: false,
      size: 'md',
      label: 'Medium Size',
      helperText: 'Standard listbox',
      errorText: '',
      description: 'Standard listbox size',
      value: null,
      values: []
    },
    {
      options: [
        { label: 'Large Option 1', value: 'lg1' },
        { label: 'Large Option 2', value: 'lg2' },
        { label: 'Large Option 3', value: 'lg3' }
      ],
      disabled: false,
      multiSelect: false,
      size: 'lg',
      label: 'Large Size',
      helperText: 'Larger listbox',
      errorText: '',
      description: 'Larger listbox for better visibility',
      value: null,
      values: []
    }
  ];

  // State examples
  stateExamples: ListboxVariant[] = [
    {
      options: [
        { label: 'Interactive 1', value: 'int1' },
        { label: 'Interactive 2', value: 'int2' },
        { label: 'Interactive 3', value: 'int3' }
      ],
      disabled: false,
      multiSelect: false,
      size: 'md',
      label: 'Interactive',
      helperText: 'Click to select',
      errorText: '',
      description: 'Standard interactive listbox',
      value: null,
      values: []
    },
    {
      options: [
        { label: 'Disabled 1', value: 'dis1' },
        { label: 'Disabled 2', value: 'dis2' },
        { label: 'Disabled 3', value: 'dis3' }
      ],
      disabled: true,
      multiSelect: false,
      size: 'md',
      label: 'Disabled',
      helperText: 'Listbox is disabled',
      errorText: '',
      description: 'Disabled listbox',
      value: null,
      values: []
    }
  ];

  // Multi-select examples
  multiSelectExamples: ListboxVariant[] = [
    {
      options: [
        { label: 'JavaScript', value: 'js' },
        { label: 'TypeScript', value: 'ts' },
        { label: 'Python', value: 'py' },
        { label: 'Java', value: 'java' },
        { label: 'C++', value: 'cpp' }
      ],
      disabled: false,
      multiSelect: true,
      size: 'md',
      label: 'Multi-Select',
      helperText: 'Select multiple languages',
      errorText: '',
      description: 'Multi-select listbox',
      value: null,
      values: ['ts', 'py']
    }
  ];

  onListboxModelChange(value: unknown, listbox: ListboxVariant): void {
    if (listbox.multiSelect) {
      listbox.values = value as unknown[];
    } else {
      listbox.value = value;
    }
  }

  onListboxChange(value: unknown, listbox: ListboxVariant): void {
    console.log('Listbox change:', value);
  }

  onListboxSelect(option: ListboxOption, listbox: ListboxVariant): void {
    console.log('Listbox select:', option);
  }

  getListboxStatus(listbox: ListboxVariant): string {
    if (listbox.disabled) return 'Disabled';
    return 'Interactive';
  }

  getListboxStatusColor(listbox: ListboxVariant): string {
    if (listbox.disabled) return 'text-gray-500';
    return 'text-green-600';
  }

  getSelectedText(listbox: ListboxVariant): string {
    if (listbox.multiSelect) {
      const selected = listbox.options.filter(opt => listbox.values.includes(opt.value));
      if (selected.length === 0) return 'None';
      return selected.map(opt => opt.label).join(', ');
    } else {
      const selected = listbox.options.find(opt => opt.value === listbox.value);
      return selected ? selected.label : 'None';
    }
  }
}
