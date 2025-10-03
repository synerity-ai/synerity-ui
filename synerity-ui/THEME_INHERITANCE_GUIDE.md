# Synerity UI Theme Inheritance Guide

## Overview

Synerity UI now supports **true theme inheritance** through CSS custom properties. Apps can override any color in the library without conflicts or manual synchronization.

## How It Works

The library defines CSS custom properties with default values that match the Tailwind color palette. Apps can override these variables to customize the theme.

## Implementation

### 1. Library CSS Variables

The library defines CSS custom properties in `:root`:

```css
:root {
  /* Primary Colors - Apps can override these */
  --sui-color-primary-50: #faf5ff;
  --sui-color-primary-100: #f3e8ff;
  --sui-color-primary-200: #e9d5ff;
  --sui-color-primary-300: #d8b4fe;
  --sui-color-primary-400: #c084fc;
  --sui-color-primary-500: #a855f7;
  --sui-color-primary-600: #9333ea;
  --sui-color-primary-700: #7c3aed;
  --sui-color-primary-800: #6b21a8;
  --sui-color-primary-900: #581c87;
  --sui-color-primary-950: #3b0764;

  /* Secondary Colors - Apps can override these */
  --sui-color-secondary-50: #eff6ff;
  --sui-color-secondary-100: #dbeafe;
  --sui-color-secondary-200: #bfdbfe;
  --sui-color-secondary-300: #93c5fd;
  --sui-color-secondary-400: #60a5fa;
  --sui-color-secondary-500: #3b82f6;
  --sui-color-secondary-600: #2563eb;
  --sui-color-secondary-700: #1d4ed8;
  --sui-color-secondary-800: #1e40af;
  --sui-color-secondary-900: #1e3a8a;
  --sui-color-secondary-950: #172554;

  /* Gray Colors - Apps can override these */
  --sui-color-gray-50: #fafafa;
  --sui-color-gray-100: #f4f4f5;
  --sui-color-gray-200: #e4e4e7;
  --sui-color-gray-300: #d4d4d8;
  --sui-color-gray-400: #a1a1aa;
  --sui-color-gray-500: #71717a;
  --sui-color-gray-600: #52525b;
  --sui-color-gray-700: #3f3f46;
  --sui-color-gray-800: #27272a;
  --sui-color-gray-900: #18181b;
  --sui-color-gray-950: #09090b;

  /* Semantic Colors - Apps can override these */
  --sui-color-red-600: #dc2626;
  --sui-color-red-700: #b91c1c;
  --sui-color-green-600: #16a34a;
  --sui-color-green-700: #15803d;
  --sui-color-yellow-600: #ca8a04;
  --sui-color-yellow-700: #a16207;
  --sui-color-blue-600: #2563eb;
  --sui-color-blue-700: #1d4ed8;
}
```

### 2. App Theme Customization

Apps can override these variables in their own CSS:

```css
/* In your app's styles.css */
:root {
  /* Override primary colors for your brand */
  --sui-color-primary-50: #fef7ff;
  --sui-color-primary-100: #fce7ff;
  --sui-color-primary-200: #f8d4fe;
  --sui-color-primary-300: #f2b7fc;
  --sui-color-primary-400: #e879f9;
  --sui-color-primary-500: #d946ef;
  --sui-color-primary-600: #c026d3;
  --sui-color-primary-700: #a21caf;
  --sui-color-primary-800: #86198f;
  --sui-color-primary-900: #701a75;
  --sui-color-primary-950: #4a044e;

  /* Override secondary colors */
  --sui-color-secondary-50: #f0f9ff;
  --sui-color-secondary-100: #e0f2fe;
  --sui-color-secondary-200: #bae6fd;
  --sui-color-secondary-300: #7dd3fc;
  --sui-color-secondary-400: #38bdf8;
  --sui-color-secondary-500: #0ea5e9;
  --sui-color-secondary-600: #0284c7;
  --sui-color-secondary-700: #0369a1;
  --sui-color-secondary-800: #075985;
  --sui-color-secondary-900: #0c4a6e;
  --sui-color-secondary-950: #082f49;
}
```

### 3. Dark Mode Support

You can also define different colors for dark mode:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --sui-color-primary-600: #c084fc;
    --sui-color-primary-700: #d8b4fe;
    --sui-color-gray-50: #18181b;
    --sui-color-gray-100: #27272a;
    /* ... other dark mode colors */
  }
}
```

## Benefits

✅ **True Theme Inheritance**: Apps control all colors through CSS variables  
✅ **No Conflicts**: Library and app colors don't conflict  
✅ **No Synchronization**: No need to keep configs in sync  
✅ **Backward Compatible**: Existing styles continue to work  
✅ **Easy Customization**: Simple CSS variable overrides  
✅ **Dark Mode Ready**: Built-in support for dark themes  

## Migration Guide

### For New Apps
1. Import the library CSS
2. Override CSS variables as needed
3. No additional configuration required

### For Existing Apps
1. Continue using existing Tailwind config
2. Optionally override CSS variables for customization
3. No breaking changes

## Examples

### Brand Colors
```css
:root {
  --sui-color-primary-500: #your-brand-color;
  --sui-color-primary-600: #your-brand-color-dark;
  --sui-color-primary-700: #your-brand-color-darker;
}
```

### Corporate Theme
```css
:root {
  /* Blue corporate theme */
  --sui-color-primary-500: #1e40af;
  --sui-color-primary-600: #1d4ed8;
  --sui-color-primary-700: #1e3a8a;
  
  /* Gray corporate theme */
  --sui-color-gray-500: #6b7280;
  --sui-color-gray-600: #4b5563;
  --sui-color-gray-700: #374151;
}
```

### Seasonal Themes
```css
:root {
  /* Spring theme */
  --sui-color-primary-500: #059669;
  --sui-color-primary-600: #047857;
  --sui-color-primary-700: #065f46;
}

/* Or use CSS classes for theme switching */
.theme-winter {
  --sui-color-primary-500: #0ea5e9;
  --sui-color-primary-600: #0284c7;
  --sui-color-primary-700: #0369a1;
}

.theme-summer {
  --sui-color-primary-500: #f59e0b;
  --sui-color-primary-600: #d97706;
  --sui-color-primary-700: #b45309;
}
```

## Status

- ✅ **Phase 1**: CSS variables defined with default values
- ✅ **Phase 2**: Library components use CSS variables alongside @apply
- 🔄 **Phase 3**: Systematic conversion of @apply classes to CSS variables
- ⏳ **Phase 4**: Complete conversion and documentation

## Next Steps

1. **Systematic Conversion**: Convert @apply classes to use CSS variables
2. **Testing**: Test with multiple theme configurations
3. **Documentation**: Update component documentation with theming examples
4. **Migration Guide**: Provide detailed migration instructions

---

This approach provides the best of both worlds: **backward compatibility** with existing Tailwind configs and **true theme inheritance** through CSS custom properties.
