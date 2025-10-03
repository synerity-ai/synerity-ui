# Synerity UI Theme System

## Overview

The Synerity UI theme system provides a clean, flexible way to customize component colors and themes. It uses SCSS mixins for compile-time customization and CSS custom properties for runtime theme switching.

## Architecture

### 1. Theme Mixins (`mixins.scss`)
- Define theme tokens as SCSS mixins
- Can be overridden by consuming applications
- Organized by color groups (primary, secondary, gray, semantic)

### 2. Theme Variables (`variables.scss`)
- Generates CSS custom properties from mixins
- Provides theme variant classes for runtime switching
- Includes built-in theme variants (corporate, seasonal, winter, dark)

## Usage

### Compile-time Theme Customization

Override theme mixins in your application's SCSS:

```scss
// In your app's styles.scss
@import '@synerity/ui/theme/mixins.scss';

// Override primary colors
@mixin sui-theme-primary-colors() {
  --sui-primary-600: #1d4ed8; // Your brand blue
  --sui-primary-700: #1e3a8a;
}

// Override secondary colors
@mixin sui-theme-secondary-colors() {
  --sui-secondary-600: #047857; // Your brand green
  --sui-secondary-700: #065f46;
}
```

### Runtime Theme Switching

Apply theme classes to your HTML:

```html
<body class="theme-corporate">
  <!-- Your app content -->
</body>
```

Or switch themes dynamically:

```typescript
// Switch to corporate theme
document.body.classList.add('theme-corporate');

// Switch to seasonal theme
document.body.classList.remove('theme-corporate');
document.body.classList.add('theme-seasonal');
```

### Creating Custom Themes

Create your own theme variants:

```scss
// In your app's styles.scss
.theme-my-brand {
  @include sui-theme-variant-primary(#ff6b6b, #ee5a52);
  @include sui-theme-variant-secondary(#4ecdc4, #44a08d);
}
```

## Available Theme Variants

- **Default**: Purple primary, blue secondary
- **Corporate**: Blue primary, green secondary
- **Seasonal**: Green primary, red secondary
- **Winter**: Cyan primary, gray secondary
- **Dark**: Purple primary with dark gray background

## Available CSS Variables

### Primary Colors
- `--sui-primary-50` through `--sui-primary-950`

### Secondary Colors
- `--sui-secondary-50` through `--sui-secondary-950`

### Gray Colors
- `--sui-gray-50` through `--sui-gray-950`

### Semantic Colors
- `--sui-red-600`, `--sui-red-700`
- `--sui-green-600`, `--sui-green-700`
- `--sui-yellow-600`, `--sui-yellow-700`
- `--sui-blue-600`, `--sui-blue-700`

## Migration from Old System

If you're using the old CSS variable system:

1. **Remove old overrides**: Delete any `!important` CSS variable overrides
2. **Use theme mixins**: Override mixins instead of CSS variables
3. **Update theme classes**: Use the new theme variant classes
4. **Test thoroughly**: Verify all components inherit the new theme

## Benefits

- **Clean separation**: No CSS specificity conflicts
- **Flexible**: Supports both compile-time and runtime customization
- **Maintainable**: Clear theme token structure
- **Performant**: CSS variables for runtime switching
- **Type-safe**: SCSS mixins prevent typos in theme tokens
