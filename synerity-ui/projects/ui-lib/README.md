# @synerity/ui

A comprehensive Angular UI component library with 90+ components including forms, data display, navigation, and utility components.

## 🚀 Features

- **90+ Components**: Complete set of UI components for Angular applications
- **Angular 17+ Support**: Compatible with Angular 17, 18, 19, and 20
- **Tailwind CSS**: Built with Tailwind CSS for modern styling
- **TypeScript**: Fully typed components with excellent IDE support
- **Standalone Components**: Modern Angular standalone component architecture
- **Accessibility**: WCAG compliant components with proper ARIA support
- **Responsive**: Mobile-first responsive design
- **Customizable**: Easy theming and customization options

## 📦 Installation

```bash
npm install @synerity/ui
```

## 🎯 Quick Start

### 1. Import the component you need

```typescript
import { Button } from '@synerity/ui';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [Button],
  template: `
    <sui-button label="Click me" severity="primary"></sui-button>
  `
})
export class ExampleComponent {}
```

### 2. Add Tailwind CSS to your project

```bash
npm install -D tailwindcss
npx tailwindcss init
```

Update your `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/@synerity/ui/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 🧩 Component Categories

### Foundation Components
- **Button** - Various button styles and states
- **InputText** - Text input with validation
- **InputTextarea** - Multi-line text input
- **Card** - Content container with header and footer

### Form Components
- **Checkbox** - Checkbox input with labels
- **RadioButton** - Radio button groups
- **Select** - Dropdown selection
- **DatePicker** - Date selection component
- **ColorPicker** - Color selection
- **Slider** - Range input slider
- **Rating** - Star rating component
- **ToggleSwitch** - On/off toggle switch

### Data Display
- **Table** - Feature-rich data table
- **DataView** - Flexible data display
- **Tree** - Hierarchical data display
- **TreeTable** - Tree structure in table format
- **Paginator** - Data pagination
- **Timeline** - Chronological data display

### Navigation
- **Menu** - Application navigation menu
- **Menubar** - Horizontal menu bar
- **Breadcrumb** - Navigation breadcrumbs
- **Tabs** - Tabbed content interface
- **Accordion** - Collapsible content sections

### Overlay Components
- **Dialog** - Modal dialogs
- **Tooltip** - Contextual information
- **Popover** - Floating content
- **Sidebar** - Slide-out panel
- **OverlayPanel** - Floating panel

### Utility Components
- **ProgressBar** - Progress indication
- **ProgressSpinner** - Loading spinner
- **Badge** - Status indicators
- **Avatar** - User profile images
- **Tag** - Label components
- **Chip** - Compact information chips

## 🎨 Theming

All components support Tailwind CSS classes and can be customized using CSS custom properties:

```css
:root {
  --sui-primary-color: #3b82f6;
  --sui-secondary-color: #6b7280;
  --sui-success-color: #10b981;
  --sui-warning-color: #f59e0b;
  --sui-danger-color: #ef4444;
}
```

## 📚 Documentation

- **Live Demo**: [View all components in action](https://synerity-ai.github.io/synerity-ui/)
- **Component API**: Each component has detailed documentation with examples
- **GitHub Repository**: [Source code and issues](https://github.com/synerity-ai/synerity-ui)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://github.com/synerity-ai/synerity-ui/blob/main/CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/synerity-ai/synerity-ui/blob/main/LICENSE) file for details.

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/synerity-ai/synerity-ui/issues)
- **Discussions**: [GitHub Discussions](https://github.com/synerity-ai/synerity-ui/discussions)
- **Email**: support@synerity.ai

## 🔗 Related Packages

- [@synerity/charts](https://www.npmjs.com/package/@synerity/charts) - Chart components for Angular

---

Made with ❤️ by [Synerity AI](https://synerity.ai)