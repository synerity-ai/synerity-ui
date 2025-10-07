import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeSelect, TreeSelectNode } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

interface TreeSelectVariant {
  options: TreeSelectNode[];
  disabled: boolean;
  loading: boolean;
  multiple: boolean;
  searchable: boolean;
  clearable: boolean;
  size: 'sm' | 'md' | 'lg';
  theme: 'light' | 'dark';
  color: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  label: string;
  helperText: string;
  errorText: string;
  placeholder: string;
  maxHeight: string;
  compact: boolean;
  spacious: boolean;
  animated: boolean;
  bounce: boolean;
  glow: boolean;
  description: string;
  value: unknown;
  values: unknown[];
}

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

  // Basic tree select examples
  basicTreeSelects: TreeSelectVariant[] = [
    {
      options: [
        {
          label: 'Documents',
          value: 'documents',
          icon: '📁',
          children: [
            { label: 'Work', value: 'work', icon: '💼' },
            { label: 'Personal', value: 'personal', icon: '👤' },
            { label: 'Archive', value: 'archive', icon: '📦' }
          ]
        },
        {
          label: 'Images',
          value: 'images',
          icon: '🖼️',
          children: [
            { label: 'Photos', value: 'photos', icon: '📸' },
            { label: 'Screenshots', value: 'screenshots', icon: '📱' },
            { label: 'Graphics', value: 'graphics', icon: '🎨' }
          ]
        },
        {
          label: 'Videos',
          value: 'videos',
          icon: '🎥',
          children: [
            { label: 'Movies', value: 'movies', icon: '🎬' },
            { label: 'Clips', value: 'clips', icon: '✂️' },
            { label: 'Tutorials', value: 'tutorials', icon: '📚' }
          ]
        }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      searchable: false,
      clearable: false,
      size: 'md',
      theme: 'light',
      color: 'default',
      label: 'Basic Tree Select',
      helperText: 'Select a folder or file from the tree structure',
      errorText: '',
      placeholder: 'Choose a location...',
      maxHeight: '300px',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Simple tree select with hierarchical options',
      value: 'work',
      values: []
    },
    {
      options: [
        {
          label: 'Frontend',
          value: 'frontend',
          icon: '🎨',
          description: 'User interface technologies',
          children: [
            { label: 'React', value: 'react', icon: '⚛️', description: 'JavaScript library' },
            { label: 'Angular', value: 'angular', icon: '🅰️', description: 'TypeScript framework' },
            { label: 'Vue', value: 'vue', icon: '💚', description: 'Progressive framework' }
          ]
        },
        {
          label: 'Backend',
          value: 'backend',
          icon: '⚙️',
          description: 'Server-side technologies',
          children: [
            { label: 'Node.js', value: 'nodejs', icon: '🟢', description: 'JavaScript runtime' },
            { label: 'Python', value: 'python', icon: '🐍', description: 'General-purpose language' },
            { label: 'Java', value: 'java', icon: '☕', description: 'Enterprise language' }
          ]
        },
        {
          label: 'Database',
          value: 'database',
          icon: '🗄️',
          description: 'Data storage solutions',
          children: [
            { label: 'PostgreSQL', value: 'postgresql', icon: '🐘', description: 'Relational database' },
            { label: 'MongoDB', value: 'mongodb', icon: '🍃', description: 'Document database' },
            { label: 'Redis', value: 'redis', icon: '🔴', description: 'In-memory database' }
          ]
        }
      ],
      disabled: false,
      loading: false,
      multiple: true,
      searchable: false,
      clearable: true,
      size: 'md',
      theme: 'light',
      color: 'default',
      label: 'Multi-Select with Descriptions',
      helperText: 'Select multiple technologies you work with',
      errorText: '',
      placeholder: 'Choose technologies...',
      maxHeight: '300px',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Multi-select tree with descriptions and icons',
      value: null,
      values: ['react', 'angular', 'nodejs']
    },
    {
      options: [
        {
          label: 'Searchable Categories',
          value: 'categories',
          icon: '🔍',
          children: [
            { label: 'Electronics', value: 'electronics', icon: '📱' },
            { label: 'Clothing', value: 'clothing', icon: '👕' },
            { label: 'Books', value: 'books', icon: '📚' },
            { label: 'Home & Garden', value: 'home-garden', icon: '🏠' },
            { label: 'Sports', value: 'sports', icon: '⚽' },
            { label: 'Automotive', value: 'automotive', icon: '🚗' }
          ]
        }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      searchable: true,
      clearable: true,
      size: 'md',
      theme: 'light',
      color: 'default',
      label: 'Searchable Tree Select',
      helperText: 'Type to search through categories',
      errorText: '',
      placeholder: 'Search and select...',
      maxHeight: '300px',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Tree select with search functionality',
      value: 'electronics',
      values: []
    }
  ];

  // Size variations
  sizeVariants: TreeSelectVariant[] = [
    {
      options: [
        {
          label: 'Small 1', value: 'small1', icon: '📁',
          children: [
            { label: 'Child 1', value: 'child1' },
            { label: 'Child 2', value: 'child2' }
          ]
        },
        {
          label: 'Small 2', value: 'small2', icon: '📄',
          children: [
            { label: 'Child 3', value: 'child3' },
            { label: 'Child 4', value: 'child4' }
          ]
        }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      searchable: false,
      clearable: false,
      size: 'sm',
      theme: 'light',
      color: 'default',
      label: 'Small Size',
      helperText: '',
      errorText: '',
      placeholder: 'Select...',
      maxHeight: '200px',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Compact tree select for space-constrained layouts',
      value: 'child1',
      values: []
    },
    {
      options: [
        {
          label: 'Medium 1', value: 'medium1', icon: '📁',
          children: [
            { label: 'Child 1', value: 'child1' },
            { label: 'Child 2', value: 'child2' }
          ]
        },
        {
          label: 'Medium 2', value: 'medium2', icon: '📄',
          children: [
            { label: 'Child 3', value: 'child3' },
            { label: 'Child 4', value: 'child4' }
          ]
        }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      searchable: false,
      clearable: false,
      size: 'md',
      theme: 'light',
      color: 'default',
      label: 'Medium Size',
      helperText: '',
      errorText: '',
      placeholder: 'Select...',
      maxHeight: '300px',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Standard tree select size for most use cases',
      value: 'child1',
      values: []
    },
    {
      options: [
        {
          label: 'Large 1', value: 'large1', icon: '📁',
          children: [
            { label: 'Child 1', value: 'child1' },
            { label: 'Child 2', value: 'child2' }
          ]
        },
        {
          label: 'Large 2', value: 'large2', icon: '📄',
          children: [
            { label: 'Child 3', value: 'child3' },
            { label: 'Child 4', value: 'child4' }
          ]
        }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      searchable: false,
      clearable: false,
      size: 'lg',
      theme: 'light',
      color: 'default',
      label: 'Large Size',
      helperText: '',
      errorText: '',
      placeholder: 'Select...',
      maxHeight: '400px',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Larger tree select for better accessibility and touch interaction',
      value: 'child1',
      values: []
    }
  ];

  // Color themes
  colorThemes: TreeSelectVariant[] = [
    {
      options: [
        {
          label: 'Default 1', value: 'default1', icon: '📁',
          children: [
            { label: 'Child 1', value: 'child1' },
            { label: 'Child 2', value: 'child2' }
          ]
        },
        {
          label: 'Default 2', value: 'default2', icon: '📄',
          children: [
            { label: 'Child 3', value: 'child3' },
            { label: 'Child 4', value: 'child4' }
          ]
        }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      searchable: false,
      clearable: false,
      size: 'md',
      theme: 'light',
      color: 'default',
      label: 'Default Color',
      helperText: '',
      errorText: '',
      placeholder: 'Select...',
      maxHeight: '300px',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Standard gray colored tree select',
      value: 'child1',
      values: []
    },
    {
      options: [
        {
          label: 'Primary 1', value: 'primary1', icon: '📁',
          children: [
            { label: 'Child 1', value: 'child1' },
            { label: 'Child 2', value: 'child2' }
          ]
        },
        {
          label: 'Primary 2', value: 'primary2', icon: '📄',
          children: [
            { label: 'Child 3', value: 'child3' },
            { label: 'Child 4', value: 'child4' }
          ]
        }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      searchable: false,
      clearable: false,
      size: 'md',
      theme: 'light',
      color: 'primary',
      label: 'Primary Color',
      helperText: '',
      errorText: '',
      placeholder: 'Select...',
      maxHeight: '300px',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Blue colored tree select',
      value: 'child1',
      values: []
    },
    {
      options: [
        {
          label: 'Success 1', value: 'success1', icon: '📁',
          children: [
            { label: 'Child 1', value: 'child1' },
            { label: 'Child 2', value: 'child2' }
          ]
        },
        {
          label: 'Success 2', value: 'success2', icon: '📄',
          children: [
            { label: 'Child 3', value: 'child3' },
            { label: 'Child 4', value: 'child4' }
          ]
        }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      searchable: false,
      clearable: false,
      size: 'md',
      theme: 'light',
      color: 'success',
      label: 'Success Color',
      helperText: '',
      errorText: '',
      placeholder: 'Select...',
      maxHeight: '300px',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Green colored tree select',
      value: 'child1',
      values: []
    },
    {
      options: [
        {
          label: 'Warning 1', value: 'warning1', icon: '📁',
          children: [
            { label: 'Child 1', value: 'child1' },
            { label: 'Child 2', value: 'child2' }
          ]
        },
        {
          label: 'Warning 2', value: 'warning2', icon: '📄',
          children: [
            { label: 'Child 3', value: 'child3' },
            { label: 'Child 4', value: 'child4' }
          ]
        }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      searchable: false,
      clearable: false,
      size: 'md',
      theme: 'light',
      color: 'warning',
      label: 'Warning Color',
      helperText: '',
      errorText: '',
      placeholder: 'Select...',
      maxHeight: '300px',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Orange colored tree select',
      value: 'child1',
      values: []
    },
    {
      options: [
        {
          label: 'Danger 1', value: 'danger1', icon: '📁',
          children: [
            { label: 'Child 1', value: 'child1' },
            { label: 'Child 2', value: 'child2' }
          ]
        },
        {
          label: 'Danger 2', value: 'danger2', icon: '📄',
          children: [
            { label: 'Child 3', value: 'child3' },
            { label: 'Child 4', value: 'child4' }
          ]
        }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      searchable: false,
      clearable: false,
      size: 'md',
      theme: 'light',
      color: 'danger',
      label: 'Danger Color',
      helperText: '',
      errorText: '',
      placeholder: 'Select...',
      maxHeight: '300px',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Red colored tree select',
      value: 'child1',
      values: []
    }
  ];

  // State examples
  stateExamples: TreeSelectVariant[] = [
    {
      options: [
        {
          label: 'Interactive 1', value: 'interactive1', icon: '📁',
          children: [
            { label: 'Child 1', value: 'child1' },
            { label: 'Child 2', value: 'child2' }
          ]
        },
        {
          label: 'Interactive 2', value: 'interactive2', icon: '📄',
          children: [
            { label: 'Child 3', value: 'child3' },
            { label: 'Child 4', value: 'child4' }
          ]
        }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      searchable: false,
      clearable: false,
      size: 'md',
      theme: 'light',
      color: 'default',
      label: 'Interactive',
      helperText: 'Standard interactive tree select',
      errorText: '',
      placeholder: 'Select...',
      maxHeight: '300px',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Standard interactive tree select',
      value: 'child1',
      values: []
    },
    {
      options: [
        {
          label: 'Disabled 1', value: 'disabled1', icon: '📁',
          children: [
            { label: 'Child 1', value: 'child1' },
            { label: 'Child 2', value: 'child2' }
          ]
        },
        {
          label: 'Disabled 2', value: 'disabled2', icon: '📄',
          children: [
            { label: 'Child 3', value: 'child3' },
            { label: 'Child 4', value: 'child4' }
          ]
        }
      ],
      disabled: true,
      loading: false,
      multiple: false,
      searchable: false,
      clearable: false,
      size: 'md',
      theme: 'light',
      color: 'default',
      label: 'Disabled',
      helperText: 'Tree select is disabled',
      errorText: '',
      placeholder: 'Select...',
      maxHeight: '300px',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Disabled tree select',
      value: 'child1',
      values: []
    },
    {
      options: [
        {
          label: 'Loading 1', value: 'loading1', icon: '📁',
          children: [
            { label: 'Child 1', value: 'child1' },
            { label: 'Child 2', value: 'child2' }
          ]
        },
        {
          label: 'Loading 2', value: 'loading2', icon: '📄',
          children: [
            { label: 'Child 3', value: 'child3' },
            { label: 'Child 4', value: 'child4' }
          ]
        }
      ],
      disabled: false,
      loading: true,
      multiple: false,
      searchable: false,
      clearable: false,
      size: 'md',
      theme: 'light',
      color: 'default',
      label: 'Loading',
      helperText: 'Loading options...',
      errorText: '',
      placeholder: 'Select...',
      maxHeight: '300px',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Tree select in loading state',
      value: 'child1',
      values: []
    }
  ];

  // Layout options
  layoutOptions: TreeSelectVariant[] = [
    {
      options: [
        {
          label: 'Compact 1', value: 'compact1', icon: '📁',
          children: [
            { label: 'Child 1', value: 'child1' },
            { label: 'Child 2', value: 'child2' }
          ]
        },
        {
          label: 'Compact 2', value: 'compact2', icon: '📄',
          children: [
            { label: 'Child 3', value: 'child3' },
            { label: 'Child 4', value: 'child4' }
          ]
        }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      searchable: false,
      clearable: false,
      size: 'md',
      theme: 'light',
      color: 'default',
      label: 'Compact',
      helperText: 'Reduced padding and spacing',
      errorText: '',
      placeholder: 'Select...',
      maxHeight: '300px',
      compact: true,
      spacious: false,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Compact layout with reduced spacing',
      value: 'child1',
      values: []
    },
    {
      options: [
        {
          label: 'Spacious 1', value: 'spacious1', icon: '📁',
          children: [
            { label: 'Child 1', value: 'child1' },
            { label: 'Child 2', value: 'child2' }
          ]
        },
        {
          label: 'Spacious 2', value: 'spacious2', icon: '📄',
          children: [
            { label: 'Child 3', value: 'child3' },
            { label: 'Child 4', value: 'child4' }
          ]
        }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      searchable: false,
      clearable: false,
      size: 'md',
      theme: 'light',
      color: 'default',
      label: 'Spacious',
      helperText: 'Increased padding and spacing',
      errorText: '',
      placeholder: 'Select...',
      maxHeight: '300px',
      compact: false,
      spacious: true,
      animated: false,
      bounce: false,
      glow: false,
      description: 'Spacious layout with increased spacing',
      value: 'child1',
      values: []
    }
  ];

  // Animation effects
  animationEffects: TreeSelectVariant[] = [
    {
      options: [
        {
          label: 'Animated 1', value: 'animated1', icon: '📁',
          children: [
            { label: 'Child 1', value: 'child1' },
            { label: 'Child 2', value: 'child2' }
          ]
        },
        {
          label: 'Animated 2', value: 'animated2', icon: '📄',
          children: [
            { label: 'Child 3', value: 'child3' },
            { label: 'Child 4', value: 'child4' }
          ]
        }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      searchable: false,
      clearable: false,
      size: 'md',
      theme: 'light',
      color: 'primary',
      label: 'Animated',
      helperText: 'Smooth hover animations',
      errorText: '',
      placeholder: 'Select...',
      maxHeight: '300px',
      compact: false,
      spacious: false,
      animated: true,
      bounce: false,
      glow: false,
      description: 'Tree select with smooth animations',
      value: 'child1',
      values: []
    },
    {
      options: [
        {
          label: 'Bounce 1', value: 'bounce1', icon: '📁',
          children: [
            { label: 'Child 1', value: 'child1' },
            { label: 'Child 2', value: 'child2' }
          ]
        },
        {
          label: 'Bounce 2', value: 'bounce2', icon: '📄',
          children: [
            { label: 'Child 3', value: 'child3' },
            { label: 'Child 4', value: 'child4' }
          ]
        }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      searchable: false,
      clearable: false,
      size: 'md',
      theme: 'light',
      color: 'success',
      label: 'Bounce',
      helperText: 'Bounce animation on hover',
      errorText: '',
      placeholder: 'Select...',
      maxHeight: '300px',
      compact: false,
      spacious: false,
      animated: false,
      bounce: true,
      glow: false,
      description: 'Tree select with bounce animation',
      value: 'child1',
      values: []
    },
    {
      options: [
        {
          label: 'Glow 1', value: 'glow1', icon: '📁',
          children: [
            { label: 'Child 1', value: 'child1' },
            { label: 'Child 2', value: 'child2' }
          ]
        },
        {
          label: 'Glow 2', value: 'glow2', icon: '📄',
          children: [
            { label: 'Child 3', value: 'child3' },
            { label: 'Child 4', value: 'child4' }
          ]
        }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      searchable: false,
      clearable: false,
      size: 'md',
      theme: 'light',
      color: 'warning',
      label: 'Glow',
      helperText: 'Glowing effect on focus',
      errorText: '',
      placeholder: 'Select...',
      maxHeight: '300px',
      compact: false,
      spacious: false,
      animated: false,
      bounce: false,
      glow: true,
      description: 'Tree select with glow effect',
      value: 'child1',
      values: []
    },
    {
      options: [
        {
          label: 'All Effects 1', value: 'all1', icon: '📁',
          children: [
            { label: 'Child 1', value: 'child1' },
            { label: 'Child 2', value: 'child2' }
          ]
        },
        {
          label: 'All Effects 2', value: 'all2', icon: '📄',
          children: [
            { label: 'Child 3', value: 'child3' },
            { label: 'Child 4', value: 'child4' }
          ]
        }
      ],
      disabled: false,
      loading: false,
      multiple: false,
      searchable: false,
      clearable: false,
      size: 'md',
      theme: 'light',
      color: 'danger',
      label: 'All Effects',
      helperText: 'Combined animation effects',
      errorText: '',
      placeholder: 'Select...',
      maxHeight: '300px',
      compact: false,
      spacious: false,
      animated: true,
      bounce: true,
      glow: true,
      description: 'Tree select with all animation effects',
      value: 'child1',
      values: []
    }
  ];

  // Real-world examples
  fileExplorer: TreeSelectVariant = {
    options: [
      {
        label: 'My Documents',
        value: 'documents',
        icon: '📁',
        children: [
          {
            label: 'Projects',
            value: 'projects',
            icon: '💼',
            children: [
              { label: 'Web App', value: 'web-app', icon: '🌐' },
              { label: 'Mobile App', value: 'mobile-app', icon: '📱' },
              { label: 'Desktop App', value: 'desktop-app', icon: '💻' }
            ]
          },
          {
            label: 'Personal',
            value: 'personal',
            icon: '👤',
            children: [
              { label: 'Photos', value: 'photos', icon: '📸' },
              { label: 'Videos', value: 'videos', icon: '🎥' },
              { label: 'Music', value: 'music', icon: '🎵' }
            ]
          }
        ]
      },
      {
        label: 'Downloads',
        value: 'downloads',
        icon: '⬇️',
        children: [
          { label: 'Software', value: 'software', icon: '💿' },
          { label: 'Documents', value: 'docs', icon: '📄' },
          { label: 'Media', value: 'media', icon: '🎬' }
        ]
      }
    ],
    disabled: false,
    loading: false,
    multiple: false,
    searchable: true,
    clearable: true,
    size: 'md',
    theme: 'light',
    color: 'primary',
    label: 'File Explorer',
    helperText: 'Navigate through your file system',
    errorText: '',
    placeholder: 'Select a folder...',
    maxHeight: '400px',
    compact: false,
    spacious: false,
    animated: true,
    bounce: false,
    glow: false,
    description: 'File system navigation with hierarchical structure',
    value: 'web-app',
    values: []
  };

  categorySelector: TreeSelectVariant = {
    options: [
      {
        label: 'Electronics',
        value: 'electronics',
        icon: '📱',
        children: [
          {
            label: 'Computers',
            value: 'computers',
            icon: '💻',
            children: [
              { label: 'Laptops', value: 'laptops', icon: '💻' },
              { label: 'Desktops', value: 'desktops', icon: '🖥️' },
              { label: 'Tablets', value: 'tablets', icon: '📱' }
            ]
          },
          {
            label: 'Accessories',
            value: 'accessories',
            icon: '🎧',
            children: [
              { label: 'Keyboards', value: 'keyboards', icon: '⌨️' },
              { label: 'Mice', value: 'mice', icon: '🖱️' },
              { label: 'Monitors', value: 'monitors', icon: '🖥️' }
            ]
          }
        ]
      },
      {
        label: 'Clothing',
        value: 'clothing',
        icon: '👕',
        children: [
          {
            label: 'Men',
            value: 'men',
            icon: '👨',
            children: [
              { label: 'Shirts', value: 'shirts', icon: '👔' },
              { label: 'Pants', value: 'pants', icon: '👖' },
              { label: 'Shoes', value: 'shoes', icon: '👟' }
            ]
          },
          {
            label: 'Women',
            value: 'women',
            icon: '👩',
            children: [
              { label: 'Dresses', value: 'dresses', icon: '👗' },
              { label: 'Tops', value: 'tops', icon: '👚' },
              { label: 'Bags', value: 'bags', icon: '👜' }
            ]
          }
        ]
      }
    ],
    disabled: false,
    loading: false,
    multiple: true,
    searchable: true,
    clearable: true,
    size: 'lg',
    theme: 'light',
    color: 'success',
    label: 'Product Categories',
    helperText: 'Select product categories for your store',
    errorText: '',
    placeholder: 'Choose categories...',
    maxHeight: '500px',
    compact: false,
    spacious: true,
    animated: true,
    bounce: false,
    glow: false,
    description: 'E-commerce category selection with multi-level hierarchy',
    value: null,
    values: ['laptops', 'keyboards', 'shirts', 'dresses']
  };

  onTreeSelectChange(value: unknown, treeSelect: TreeSelectVariant): void {
    if (treeSelect.multiple) {
      treeSelect.values = Array.isArray(value) ? value : [];
    } else {
      treeSelect.value = value;
    }
    console.log(`${treeSelect.label} changed to:`, value);
  }

  onTreeSelectModelChange(value: unknown, treeSelect: TreeSelectVariant): void {
    if (treeSelect.multiple) {
      treeSelect.values = Array.isArray(value) ? value : [];
    } else {
      treeSelect.value = value;
    }
    console.log(`${treeSelect.label} model changed to:`, value);
  }

  onTreeSelectSelect(node: TreeSelectNode, treeSelect: TreeSelectVariant): void {
    console.log(`${treeSelect.label} selected:`, node);
  }

  onTreeSelectExpand(node: TreeSelectNode, treeSelect: TreeSelectVariant): void {
    console.log(`${treeSelect.label} expanded:`, node);
  }

  onTreeSelectCollapse(node: TreeSelectNode, treeSelect: TreeSelectVariant): void {
    console.log(`${treeSelect.label} collapsed:`, node);
  }

  onTreeSelectFocus(treeSelect: TreeSelectVariant): void {
    console.log(`${treeSelect.label} focused`);
  }

  onTreeSelectBlur(treeSelect: TreeSelectVariant): void {
    console.log(`${treeSelect.label} blurred`);
  }

  // Interactive playground
  playgroundTreeSelect: TreeSelectVariant = {
    options: [
      {
        label: 'Frontend',
        value: 'frontend',
        icon: '🎨',
        description: 'User interface technologies',
        children: [
          { label: 'React', value: 'react', icon: '⚛️', description: 'JavaScript library' },
          { label: 'Angular', value: 'angular', icon: '🅰️', description: 'TypeScript framework' },
          { label: 'Vue', value: 'vue', icon: '💚', description: 'Progressive framework' }
        ]
      },
      {
        label: 'Backend',
        value: 'backend',
        icon: '⚙️',
        description: 'Server-side technologies',
        children: [
          { label: 'Node.js', value: 'nodejs', icon: '🟢', description: 'JavaScript runtime' },
          { label: 'Python', value: 'python', icon: '🐍', description: 'General-purpose language' },
          { label: 'Java', value: 'java', icon: '☕', description: 'Enterprise language' }
        ]
      },
      {
        label: 'Database',
        value: 'database',
        icon: '🗄️',
        description: 'Data storage solutions',
        children: [
          { label: 'PostgreSQL', value: 'postgresql', icon: '🐘', description: 'Relational database' },
          { label: 'MongoDB', value: 'mongodb', icon: '🍃', description: 'Document database' },
          { label: 'Redis', value: 'redis', icon: '🔴', description: 'In-memory database' }
        ]
      }
    ],
    disabled: false,
    loading: false,
    multiple: false,
    searchable: false,
    clearable: false,
    size: 'md',
    theme: 'light',
    color: 'default',
    label: 'Interactive Playground',
    helperText: 'Customize the tree select properties above',
    errorText: '',
    placeholder: 'Select a technology...',
    maxHeight: '300px',
    compact: false,
    spacious: false,
    animated: false,
    bounce: false,
    glow: false,
    description: 'Interactive playground for testing different configurations',
    value: 'react',
    values: []
  };

  getTreeSelectStatus(treeSelect: TreeSelectVariant): string {
    if (treeSelect.disabled) return 'Disabled';
    if (treeSelect.loading) return 'Loading';
    return 'Interactive';
  }

  getTreeSelectStatusColor(treeSelect: TreeSelectVariant): string {
    if (treeSelect.disabled) return 'text-gray-500';
    if (treeSelect.loading) return 'text-yellow-600';
    return 'text-green-600';
  }

  getSelectedText(treeSelect: TreeSelectVariant): string {
    if (treeSelect.multiple) {
      const selected = treeSelect.values;
      if (selected.length === 0) return 'No selection';
      if (selected.length === 1) {
        const node = this.findNodeInTree(treeSelect.options, selected[0]);
        return node ? node.label : 'Unknown';
      }
      return `${selected.length} items selected`;
    } else {
      const node = this.findNodeInTree(treeSelect.options, treeSelect.value);
      return node ? node.label : 'No selection';
    }
  }

  private findNodeInTree(nodes: TreeSelectNode[], target: unknown): TreeSelectNode | null {
    for (const node of nodes) {
      if (node.value === target) return node;
      if (node.children) {
        const found = this.findNodeInTree(node.children, target);
        if (found) return found;
      }
    }
    return null;
  }
}