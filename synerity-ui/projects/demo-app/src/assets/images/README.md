# Synerity UI Logo Assets

This folder contains the official logo assets for the Synerity UI component library.

## Files

- `synerity.jpg` - Official Synerity UI logo image for all use cases

## Usage

### In HTML Templates
```html
<!-- Standard logo (navbar) -->
<img src="assets/images/synerity.jpg" alt="Synerity UI Logo" width="40" height="40" class="rounded-lg" />

<!-- Large logo (hero sections) -->
<img src="assets/images/synerity.jpg" alt="Synerity UI Logo" width="96" height="96" class="rounded-xl shadow-lg" />
```

### In CSS
```css
.logo {
  background-image: url('assets/images/synerity.jpg');
  background-size: contain;
  background-repeat: no-repeat;
}
```

## Design Specifications

- **Format**: JPG (JPEG Image)
- **Style**: Professional, modern logo design
- **Accessibility**: Includes proper alt text and ARIA labels
- **Styling**: Uses Tailwind CSS classes for rounded corners and shadows

## Brand Guidelines

- Always maintain the original proportions
- Use appropriate sizing for different contexts
- Ensure sufficient contrast for accessibility
- Include proper alt text for screen readers
- Apply consistent styling (rounded corners, shadows)

## Updates

To update the logo:
1. Replace the JPG file in this directory
2. Ensure all references in the application are updated
3. Test across different screen sizes and contexts
4. Verify accessibility compliance
5. Maintain consistent styling classes
