# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-01-03

### 🚀 Major Release: Clean Theme Inheritance System

This major release introduces a completely redesigned theme inheritance system that eliminates CSS specificity conflicts and provides a clean, maintainable approach to theme customization.

### Added
- **SCSS Mixin System**: New theme mixins for compile-time customization
- **Clean CSS Variables**: Generated from mixins for runtime theme switching
- **Theme API**: Clear, documented theme customization points
- **Built-in Theme Variants**: Corporate, seasonal, winter, and dark themes
- **Component Theme Mixins**: Dedicated mixins for different component types

### Changed
- **Breaking Change**: CSS variable names changed from `--sui-color-*` to `--sui-*`
- **Breaking Change**: Theme system architecture completely redesigned
- **Library Architecture**: Components now use theme mixins instead of direct CSS variables
- **Documentation**: Comprehensive theme system documentation and examples

### Removed
- **Old CSS Variable System**: Removed `--sui-color-*` variables that caused specificity conflicts
- **Tight Coupling**: Eliminated need for `!important` and complex selectors

### Technical Details
- **SCSS Mixins**: `@mixin sui-theme-primary-colors()`, `@mixin sui-theme-secondary-colors()`, etc.
- **CSS Variables**: Generated from mixins: `--sui-primary-600`, `--sui-secondary-600`, etc.
- **Theme Classes**: `.theme-corporate`, `.theme-seasonal`, `.theme-winter`, `.theme-dark`
- **Component Integration**: `@include sui-button-theme()` for button components

### Migration Guide

#### From 1.x to 2.0

1. **Update CSS Variables**:
   ```scss
   // Old (1.x)
   --sui-color-primary-600: #your-color;
   
   // New (2.0)
   --sui-primary-600: #your-color;
   ```

2. **Use Theme Mixins**:
   ```scss
   // Override theme mixins instead of CSS variables
   @mixin sui-theme-primary-colors() {
     --sui-primary-600: #your-color;
     --sui-primary-700: #your-hover-color;
   }
   ```

3. **Update Theme Classes**:
   ```scss
   // Old theme classes may need updating
   .theme-corporate {
     --sui-primary-600: #1d4ed8;
     --sui-secondary-600: #047857;
   }
   ```

### Benefits
- ✅ **No CSS Specificity Conflicts**: Mixins define tokens, CSS variables handle runtime switching
- ✅ **Clean Separation**: Apps override mixins, not compete with CSS variables
- ✅ **Clear API**: Documented theme tokens that apps can customize
- ✅ **Flexible**: Supports both compile-time and runtime theme switching
- ✅ **Maintainable**: Clear theme token structure and organization
- ✅ **Type-safe**: SCSS mixins prevent typos in theme tokens

### Files Changed
- `src/lib/theme/mixins.scss`: New theme mixin system
- `src/lib/theme/variables.scss`: CSS variable generation
- `src/lib/theme/README.md`: Comprehensive documentation
- `src/lib/synerity-ui.scss`: Updated to use new theme system
- All component styles updated to use theme mixins

## [1.2.0] - 2025-01-03

### Added
- **CSS Custom Properties for Theme Inheritance**: Added CSS variables for all color tokens, enabling apps to override library colors without conflicts
- **Theme Customization Guide**: Comprehensive documentation on how to implement theme inheritance in consuming applications
- **Hybrid Approach**: Maintains backward compatibility with existing Tailwind configs while providing CSS variable overrides

### Changed
- **Library Architecture**: Enhanced to support both Tailwind `@apply` directives and CSS custom properties
- **Color System**: All color tokens now available as CSS variables with `--sui-color-` prefix
- **Documentation**: Updated to include theme inheritance examples and best practices

### Technical Details
- Added CSS variables for primary, secondary, gray, and semantic colors
- Variables defined in `:root` with default values matching Tailwind color palette
- Apps can override variables by redefining them in their own CSS
- No breaking changes to existing implementations
- Library continues to use `@apply` directives with Tailwind colors as defaults

### Migration Guide
No migration required. Existing applications will continue to work with the default theme. To enable theme customization:

1. Override CSS variables in your application's CSS:
```css
:root {
  --sui-color-primary-600: #your-color;
  --sui-color-primary-700: #your-hover-color;
}
```

2. Or use theme classes:
```css
.theme-custom {
  --sui-color-primary-600: #your-color;
  --sui-color-primary-700: #your-hover-color;
}
```

### Files Changed
- `projects/ui-lib/src/lib/synerity-ui.scss`: Added CSS custom properties
- `tailwind.config.js`: Maintained color definitions for `@apply` compatibility
- `THEME_INHERITANCE_GUIDE.md`: New documentation file
- `test-theme-inheritance.html`: Example implementation

## [1.1.66] - Previous Release

### Features
- 70+ Angular UI components
- Enhanced SCSS styling with nested selectors
- Tailwind CSS integration
- Comprehensive form components
- Data display and navigation components
