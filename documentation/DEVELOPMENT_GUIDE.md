# Development Guide - Synerity UI Documentation

## Quick Start

### Prerequisites
- Node.js 18+ 
- Angular CLI 20+
- @synerity/ui package

### Setup Commands
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## Development Workflow

### 1. Component Development
```bash
# Generate new component
ng generate component components/component-name

# Generate new service
ng generate service services/service-name

# Generate new page
ng generate component pages/page-name
```

### 2. File Structure Standards
```
src/app/
├── components/          # Reusable UI components
│   ├── header/
│   ├── sidebar/
│   └── component-preview/
├── pages/              # Route components
│   ├── home/
│   └── components/
├── services/           # Business logic
│   ├── theme.service.ts
│   └── search.service.ts
├── models/            # TypeScript interfaces
│   ├── component.model.ts
│   └── theme.model.ts
└── shared/            # Shared utilities
    ├── pipes/
    └── directives/
```

### 3. Naming Conventions
- **Components**: PascalCase (e.g., `HeaderComponent`)
- **Services**: camelCase with .service suffix (e.g., `themeService`)
- **Models**: PascalCase with .model suffix (e.g., `ComponentModel`)
- **Files**: kebab-case (e.g., `header.component.ts`)

## Component Development Guidelines

### 1. Component Structure
```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-name',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-name.component.html',
  styleUrl: './component-name.component.scss'
})
export class ComponentNameComponent {
  // Use signals for reactive state
  protected readonly isOpen = signal(false);
  
  // Public methods
  toggle() {
    this.isOpen.update(open => !open);
  }
}
```

### 2. Template Guidelines
```html
<!-- Use semantic HTML -->
<header class="header">
  <nav class="nav">
    <!-- Navigation content -->
  </nav>
</header>

<!-- Use Angular control flow -->
@if (isOpen()) {
  <div class="menu">
    <!-- Menu content -->
  </div>
}

<!-- Use trackBy for loops -->
@for (item of items; track item.id) {
  <div class="item">{{ item.name }}</div>
}
```

### 3. Styling Guidelines
```scss
// Use CSS custom properties for theming
.component {
  --component-bg: var(--color-bg);
  --component-text: var(--color-text);
  
  background-color: var(--component-bg);
  color: var(--component-text);
}

// Use BEM methodology
.component {
  &__header {
    // Header styles
  }
  
  &__content {
    // Content styles
  }
  
  &--active {
    // Active state styles
  }
}
```

## Service Development

### 1. Service Structure
```typescript
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceName {
  // Use signals for reactive state
  private readonly _state = signal(initialState);
  readonly state = this._state.asReadonly();
  
  // Use BehaviorSubject for complex state
  private readonly _data$ = new BehaviorSubject(null);
  readonly data$ = this._data$.asObservable();
  
  // Public methods
  updateState(newState: any) {
    this._state.set(newState);
  }
}
```

### 2. Error Handling
```typescript
import { catchError, of } from 'rxjs';

getData() {
  return this.http.get('/api/data').pipe(
    catchError(error => {
      console.error('Error fetching data:', error);
      return of(null);
    })
  );
}
```

## State Management

### 1. Component State
- Use Angular signals for simple state
- Use RxJS for complex state management
- Avoid global state unless necessary

### 2. Service State
```typescript
// Simple state with signals
private readonly _theme = signal('light');
readonly theme = this._theme.asReadonly();

// Complex state with BehaviorSubject
private readonly _components$ = new BehaviorSubject<Component[]>([]);
readonly components$ = this._components$.asObservable();
```

## Testing Guidelines

### 1. Unit Tests
```typescript
describe('ComponentNameComponent', () => {
  let component: ComponentNameComponent;
  let fixture: ComponentFixture<ComponentNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ComponentNameComponent]
    });
    fixture = TestBed.createComponent(ComponentNameComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle state', () => {
    expect(component.isOpen()).toBeFalse();
    component.toggle();
    expect(component.isOpen()).toBeTrue();
  });
});
```

### 2. Integration Tests
```typescript
describe('Component Integration', () => {
  it('should render component with data', () => {
    // Test component rendering with data
  });

  it('should handle user interactions', () => {
    // Test user interactions
  });
});
```

## Performance Optimization

### 1. Lazy Loading
```typescript
// Lazy load routes
const routes: Routes = [
  {
    path: 'components',
    loadComponent: () => import('./pages/components/components.component')
  }
];
```

### 2. OnPush Strategy
```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentNameComponent {
  // Component implementation
}
```

### 3. TrackBy Functions
```typescript
trackByFn(index: number, item: any): any {
  return item.id;
}
```

## Accessibility Guidelines

### 1. ARIA Attributes
```html
<button 
  [attr.aria-expanded]="isOpen()"
  [attr.aria-controls]="menuId"
  (click)="toggle()">
  Menu
</button>
```

### 2. Keyboard Navigation
```typescript
@HostListener('keydown', ['$event'])
onKeyDown(event: KeyboardEvent) {
  switch (event.key) {
    case 'Escape':
      this.close();
      break;
    case 'Enter':
    case ' ':
      this.toggle();
      break;
  }
}
```

### 3. Focus Management
```typescript
focusFirstItem() {
  const firstItem = this.elementRef.nativeElement.querySelector('[tabindex="0"]');
  if (firstItem) {
    firstItem.focus();
  }
}
```

## Code Quality

### 1. ESLint Configuration
```json
{
  "extends": ["@angular-eslint/recommended"],
  "rules": {
    "@angular-eslint/directive-selector": [
      "error",
      {
        "type": "attribute",
        "prefix": "app",
        "style": "camelCase"
      }
    ]
  }
}
```

### 2. Prettier Configuration
```json
{
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

### 3. TypeScript Configuration
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

## Deployment

### 1. Build Configuration
```json
{
  "build": {
    "builder": "@angular/build:application",
    "options": {
      "outputPath": "dist/documentation",
      "index": "src/index.html",
      "main": "src/main.ts",
      "polyfills": "src/polyfills.ts"
    }
  }
}
```

### 2. Environment Configuration
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.synerity.com',
  version: '1.0.0'
};
```

## Troubleshooting

### Common Issues

1. **Build Errors**
   - Check TypeScript configuration
   - Verify all imports are correct
   - Run `ng build --verbose` for detailed errors

2. **Runtime Errors**
   - Check browser console
   - Verify service dependencies
   - Check component lifecycle

3. **Performance Issues**
   - Use Angular DevTools
   - Check bundle size
   - Optimize images and assets

### Debug Commands
```bash
# Debug build
ng build --configuration development

# Analyze bundle
ng build --stats-json
npx webpack-bundle-analyzer dist/documentation/stats.json

# Run with verbose logging
ng serve --verbose
```

## Resources

### Documentation
- [Angular Documentation](https://angular.dev)
- [Angular Signals](https://angular.dev/guide/signals)
- [Angular Standalone Components](https://angular.dev/guide/standalone-components)

### Tools
- [Angular DevTools](https://angular.dev/tools/devtools)
- [Angular CLI](https://angular.dev/tools/cli)
- [Angular Language Service](https://angular.dev/tools/language-service)

### Best Practices
- [Angular Style Guide](https://angular.dev/style-guide)
- [Angular Architecture Guide](https://angular.dev/guide/architecture)
- [Angular Performance Guide](https://angular.dev/guide/performance)
