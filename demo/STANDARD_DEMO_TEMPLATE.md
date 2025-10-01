# Standard Demo Template

## **Required Structure for All Component Demos**

### **1. Header Section**
```html
<div class="demo-container">
  <header>
    <h1>[Component Name] Component Demo</h1>
    <p>[Brief description of the component and its purpose]</p>
  </header>
```

### **2. Basic Usage Section**
```html
  <div class="demo-section">
    <h2>Basic [Component Name]</h2>
    <p>Simple [component name] with default styling</p>
    
    <div class="component-grid">
      <div class="component-card">
        <h4>Default [Component Name]</h4>
        <div class="demo-content">
          <sui-[component] [properties]="values"></sui-[component]>
        </div>
        <div class="code-block">
          &lt;sui-[component] [properties]="values"&gt;&lt;/sui-[component]&gt;
        </div>
      </div>
    </div>
  </div>
```

### **3. Variants Section**
```html
  <div class="demo-section">
    <h2>[Property] Variants</h2>
    <p>Different [property] options for various use cases</p>
    
    <div class="component-grid">
      <div class="component-card">
        <h4>[Variant Name]</h4>
        <div class="demo-content">
          <sui-[component] [property]="value"></sui-[component]>
        </div>
        <div class="code-block">
          &lt;sui-[component] [property]="value"&gt;&lt;/sui-[component]&gt;
        </div>
      </div>
      <!-- Repeat for each variant -->
    </div>
  </div>
```

### **4. Interactive Examples Section**
```html
  <div class="demo-section">
    <h2>Interactive Examples</h2>
    <p>Live examples with dynamic values</p>
    
    <div class="component-grid">
      <div class="component-card">
        <h4>Dynamic [Property]</h4>
        <div class="demo-content">
          <sui-[component] [property]="dynamicValue"></sui-[component]>
          <div class="radio-group">
            <div class="radio-item">
              <input type="radio" id="option1" name="property" value="value1" [(ngModel)]="dynamicValue">
              <label for="option1">Option 1</label>
            </div>
            <!-- Repeat for each option -->
          </div>
        </div>
      </div>
    </div>
  </div>
```

### **5. API Reference Section**
```html
  <div class="demo-section">
    <h2>API Reference</h2>
    <div class="component-card">
      <h4>Properties</h4>
      <div class="code-block">
        @Input() property: type = defaultValue;  // Description
        @Input() property2: type = defaultValue; // Description
      </div>
      
      <h4>Methods</h4>
      <div class="code-block">
        methodName(): returnType;  // Description
        methodName2(): returnType; // Description
      </div>
    </div>
  </div>
</div>
```

## **Required CSS Classes**

### **Global Classes (in styles.scss)**
```scss
.demo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.demo-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.demo-section h2 {
  margin-top: 0;
  color: #1f2937;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 0.5rem;
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.component-card {
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fafafa;
}

.component-card h4 {
  margin-top: 0;
  color: #1f2937;
}

.demo-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.code-block {
  background: #1f2937;
  color: #f9fafb;
  padding: 1rem;
  border-radius: 6px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
  overflow-x: auto;
  margin: 1rem 0;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
}

.radio-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.radio-item input[type="radio"] {
  margin-right: 0.5rem;
}

.radio-item label {
  cursor: pointer;
  font-weight: 500;
  color: #495057;
}
```

## **⚠️ CRITICAL: Avoid Infinite Change Detection Loops**

### **Angular Template Best Practices:**

**❌ NEVER use methods that return new objects/arrays in templates:**
```typescript
// ❌ BAD - Creates new array on every change detection cycle
getVariants() {
  return [
    { value: 'default', label: 'Default' },
    { value: 'primary', label: 'Primary' }
  ];
}
```

```html
<!-- ❌ BAD - Causes infinite loop and app freezing -->
<div *ngFor="let variant of getVariants()">
```

**✅ ALWAYS use properties for static data:**
```typescript
// ✅ GOOD - Array created once as a property
variants = [
  { value: 'default', label: 'Default' },
  { value: 'primary', label: 'Primary' }
];
```

```html
<!-- ✅ GOOD - Uses stable reference -->
<div *ngFor="let variant of variants">
```

### **Why This Matters:**
- Methods that return new object/array references trigger infinite change detection
- Each change detection cycle calls the method again, creating a new reference
- Angular sees it as a "change" and runs change detection again
- This causes the app to freeze and become unresponsive
- **ALWAYS define static options as class properties, NOT as methods**

---

## **Component-Specific Requirements**

### **For Form Components:**
- Include form validation examples
- Show error states
- Include disabled states
- Show label and help text examples

### **For Data Components:**
- Include data binding examples
- Show loading states
- Include empty states
- Show pagination if applicable

### **For Layout Components:**
- Include responsive examples
- Show different orientations
- Include spacing examples

### **For Interactive Components:**
- Include event handling examples
- Show state changes
- Include keyboard navigation
- Show accessibility features

## **Code Block Standards**

### **HTML Escaping:**
- Use `&lt;` for `<`
- Use `&gt;` for `>`
- Use `{{ '{' }}{{ '}' }}` for `{}`
- Use `&amp;` for `&`

### **Code Examples:**
- Always include working code examples
- Show both simple and complex usage
- Include property bindings
- Show event handlers

## **Accessibility Requirements**

### **All Demos Must Include:**
- Proper ARIA labels
- Keyboard navigation examples
- Screen reader friendly content
- Focus management examples
- Color contrast examples

## **Responsive Design**

### **All Demos Must:**
- Work on mobile devices
- Use responsive grid layouts
- Include mobile-specific examples
- Show touch interactions for mobile components
