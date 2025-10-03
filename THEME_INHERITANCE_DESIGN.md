# Clean Theme Inheritance Design

## Problem Analysis

The current approach has several issues:
1. **CSS Variable Conflicts**: Library `:root` variables conflict with app overrides
2. **Specificity Wars**: Apps need `!important` and complex selectors to override
3. **Tight Coupling**: Apps must know internal library CSS variable names
4. **No Clear Extension Pattern**: No clean way to extend themes

## Proposed Solution: SCSS Mixin + CSS Variable Hybrid

### 1. Library Architecture
- **SCSS Mixins**: Define theme tokens as mixins that can be overridden
- **CSS Variables**: Generated from mixins for runtime theme switching
- **Theme API**: Clear, documented theme customization points

### 2. Theme Structure
```scss
// Library defines theme tokens as mixins
@mixin sui-theme-primary-colors() {
  --sui-primary-50: #faf5ff;
  --sui-primary-600: #9333ea;
  --sui-primary-700: #7c3aed;
}

@mixin sui-theme-secondary-colors() {
  --sui-secondary-50: #eff6ff;
  --sui-secondary-600: #2563eb;
  --sui-secondary-700: #1d4ed8;
}

// Components use the mixins
.sui-button-primary {
  @include sui-theme-primary-colors();
  background-color: var(--sui-primary-600);
}
```

### 3. App Customization
```scss
// Apps can override theme mixins
@mixin sui-theme-primary-colors() {
  --sui-primary-600: #1d4ed8; // Custom blue
  --sui-primary-700: #1e3a8a;
}

@mixin sui-theme-secondary-colors() {
  --sui-secondary-600: #047857; // Custom green
  --sui-secondary-700: #065f46;
}
```

### 4. Runtime Theme Switching
```scss
// Theme classes that apps can apply
.theme-corporate {
  --sui-primary-600: #1d4ed8;
  --sui-secondary-600: #047857;
}

.theme-seasonal {
  --sui-primary-600: #047857;
  --sui-secondary-600: #b91c1c;
}
```

## Benefits

1. **Clean Separation**: Mixins define tokens, CSS variables handle runtime switching
2. **No Specificity Issues**: Apps override mixins, not compete with CSS variables
3. **Clear API**: Documented theme tokens that apps can customize
4. **Flexible**: Supports both compile-time and runtime theme switching
5. **Backward Compatible**: Existing Tailwind configs still work

## Implementation Plan

1. **Phase 1**: Create theme mixin system in library
2. **Phase 2**: Update components to use mixins
3. **Phase 3**: Generate CSS variables from mixins
4. **Phase 4**: Update documentation and examples
5. **Phase 5**: Test with multiple theme configurations
