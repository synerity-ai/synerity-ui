# Build Scripts

## SCSS to CSS Compilation

The `compile-scss-to-css.js` script ensures that both `synerity-ui.css` and `synerity-ui.scss` files are kept in sync.

### Why This Is Needed

- **SCSS file**: Contains all component styles with nested selectors and SCSS features
- **CSS file**: Compiled version for projects that can't use SCSS
- **Problem**: CSS file was manually maintained and missing many styles
- **Solution**: Automated compilation from SCSS to CSS

### Usage

```bash
# Compile SCSS to CSS
npm run compile:scss

# Build library (includes SCSS compilation)
npm run build:lib
```

### What It Does

1. Compiles `projects/ui-lib/src/lib/synerity-ui.scss` to CSS
2. Generates `projects/ui-lib/src/lib/synerity-ui.css`
3. Creates source map `projects/ui-lib/src/lib/synerity-ui.css.map`
4. Shows file size comparison
5. Ensures both files contain the same styles

### Integration

The script is automatically run during:
- `npm run build:lib` - Before building the library
- `npm run publish:lib` - Before publishing (via prepublishOnly)

### File Structure

```
projects/ui-lib/src/lib/
├── synerity-ui.scss    # Source SCSS file (3,378 lines)
├── synerity-ui.css     # Compiled CSS file (3,093 lines)
└── synerity-ui.css.map # Source map for debugging
```

### Benefits

- ✅ Both CSS and SCSS files stay in sync
- ✅ No manual maintenance required
- ✅ All component styles included in both files
- ✅ Source maps for debugging
- ✅ Automated during build process
