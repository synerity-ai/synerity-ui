import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeSelect, TreeSelectNode } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-tree-select-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, TreeSelect],
  templateUrl: './tree-select-demo.html',
  styleUrl: './tree-select-demo.scss'
})
export class TreeSelectDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  basicValue: unknown = null;
  multiValue: unknown[] = [];
  fileValue: unknown = null;
  categoryValues: unknown[] = [];

  fileOptions: TreeSelectNode[] = [
    {
      label: 'Documents',
      value: 'documents',
      expanded: true, // Expand by default
      children: [
        { label: 'Work', value: 'work' },
        { label: 'Personal', value: 'personal' },
        { label: 'Archive', value: 'archive' }
      ]
    },
    {
      label: 'Images',
      value: 'images',
      expanded: true, // Expand by default
      children: [
        { label: 'Photos', value: 'photos' },
        { label: 'Screenshots', value: 'screenshots' }
      ]
    }
  ];

  techOptions: TreeSelectNode[] = [
    {
      label: 'Frontend',
      value: 'frontend',
      expanded: true, // Expand by default
      children: [
        { label: 'React', value: 'react' },
        { label: 'Angular', value: 'angular' },
        { label: 'Vue', value: 'vue' }
      ]
    },
    {
      label: 'Backend',
      value: 'backend',
      expanded: true, // Expand by default
      children: [
        { label: 'Node.js', value: 'nodejs' },
        { label: 'Python', value: 'python' },
        { label: 'Java', value: 'java' }
      ]
    }
  ];

  categoryOptions: TreeSelectNode[] = [
    {
      label: 'Electronics',
      value: 'electronics',
      expanded: true, // Expand by default
      children: [
        {
          label: 'Computers',
          value: 'computers',
          expanded: true, // Expand by default
          children: [
            { label: 'Laptops', value: 'laptops' },
            { label: 'Desktops', value: 'desktops' }
          ]
        },
        { label: 'Phones', value: 'phones' }
      ]
    },
    {
      label: 'Clothing',
      value: 'clothing',
      expanded: true, // Expand by default
      children: [
        { label: 'Men', value: 'men' },
        { label: 'Women', value: 'women' }
      ]
    }
  ];
}
