# Component Data Structure

This directory contains modular component data files organized by category. This approach makes the codebase more maintainable and easier to work with.

## Structure

```
data/
├── index.ts                           # Main export file that combines all components
├── foundation-components.data.ts      # Foundation components (20 components)
├── form-components.data.ts            # Form components (19 components)
├── data-components.data.ts            # Data display components (12 components)
├── overlay-components.data.ts         # Overlay components (9 components)
├── layout-components.data.ts          # Layout components (7 components)
├── navigation-components.data.ts      # Navigation components (7 components)
├── media-components.data.ts           # Media components (4 components)
├── messages-components.data.ts        # Message components (4 components)
├── progress-components.data.ts        # Progress components (4 components)
├── file-components.data.ts            # File components (1 component)
├── utility-components.data.ts         # Utility components (10 components)
└── README.md                          # This file
```

## Categories

### Foundation Components
- **Button**: Interactive button component with multiple variants and sizes
- **Card**: Container component for displaying content in a structured format
- **Input**: Text input component for user data entry
- **Accordion**: Collapsible content panels

### Form Components
- **Checkbox**: Checkbox input component
- **Radio Button**: Radio button input component
- **Select**: Dropdown selection component
- **Textarea**: Multi-line text input component

### Data Components
- **Table**: Data table component for displaying structured data

### Overlay Components
- **Dialog**: Modal dialog component for displaying content in an overlay
- **Tooltip**: Contextual information component

### Layout Components
- **Panel**: Container component for organizing content into sections
- **Sidebar**: Navigation sidebar component
- **Splitter**: Resizable split panel component

### Navigation Components
- **Menu**: Navigation menu component
- **Menubar**: Horizontal menu bar component
- **Breadcrumb**: Navigation breadcrumb component
- **Tiered Menu**: Multi-level menu component

### Media Components
- **Carousel**: Image and content carousel component
- **Image**: Enhanced image component with loading and error states
- **Galleria**: Image gallery component with lightbox functionality

### Messages Components
- **Toast**: Notification toast component for displaying temporary messages
- **Message**: Inline message component for displaying contextual information

### Progress Components
- **Progress Bar**: Progress indicator component for showing completion status
- **Progress Spinner**: Circular progress indicator component
- **Skeleton**: Loading skeleton component for placeholder content

### File Components
- **File Upload Advanced**: Advanced file upload component with drag and drop support

### Utility Components
- **Animate On Scroll**: Animation component that triggers on scroll
- **Focus Trap**: Component for trapping focus within a container
- **Inplace**: Inline editing component
- **Ripple**: Ripple effect component
- **Scroll Panel**: Custom scrollable panel component
- **Scroll Top**: Scroll to top button component
- **Speed Dial**: Floating action button with multiple options
- **Split Button**: Button with dropdown menu
- **Style Class**: Dynamic CSS class management component
- **Terminal**: Terminal/console component

## Adding New Components

1. **Choose the appropriate category** based on the component's primary purpose
2. **Add the component** to the corresponding data file
3. **Export the component** in the category file
4. **Import the category** in `index.ts`
5. **Add to the `allComponents` array** in `index.ts`

## Example

```typescript
// In foundation-components.data.ts
export const foundationComponents: ComponentModel[] = [
  // ... existing components
  {
    id: 'new-component',
    name: 'New Component',
    category: 'Foundation',
    description: 'Description of the new component',
    examples: [
      {
        name: 'Basic Example',
        code: '<sui-new-component>Content</sui-new-component>',
        description: 'Basic usage example'
      }
    ],
    props: [
      {
        name: 'prop1',
        type: 'string',
        default: 'default-value',
        description: 'Description of the prop',
        required: false
      }
    ],
    usage: 'When and how to use this component.',
    tags: ['tag1', 'tag2']
  }
];
```

## Benefits

- **Comprehensive Coverage**: All 97 components from the original service are now properly organized
- **Maintainability**: Easier to find and update specific components across 11 categories
- **Performance**: Better tree-shaking with modular structure (1.17MB total bundle)
- **Collaboration**: Multiple developers can work on different categories simultaneously
- **Organization**: Clear separation of concerns by component category and purpose
- **Scalability**: Easy to add new categories and components
- **Complete Data**: All components include comprehensive examples, props, and documentation

## Migration Notes

The original `component-data.service.ts` (4000+ lines) has been replaced with this modular structure. The old file is preserved as `component-data.service.old.ts` for reference.

The new service (`component-data.service.ts`) is much cleaner and imports all components from the data files, maintaining the same API for backward compatibility.
