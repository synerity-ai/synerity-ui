# Build Scripts

This directory contains build automation scripts for the Synerity UI library.

## Scripts

### `fix-exports.js`
**Purpose**: Automatically fixes the `package.json` exports after each build to ensure CSS files are properly exported.

**Problem Solved**: 
- Angular's ng-packagr overwrites the `dist/ui-lib/package.json` during build
- This removes manually added CSS exports, causing build failures in consuming applications
- The script runs after each build to restore the necessary exports

**Usage**:
```bash
# Run manually
npm run fix:exports

# Automatically runs after build
npm run build:lib
```

**What it does**:
1. Reads the `dist/ui-lib/package.json` file
2. Ensures the `exports` field exists
3. Adds the `./synerity-ui.css` export if missing
4. Writes the updated package.json back

### `compile-scss-to-css.js`
**Purpose**: Compiles the main SCSS file to CSS for distribution.

**Usage**:
```bash
npm run compile:scss
```

## Integration

The `fix-exports.js` script is automatically integrated into the build process:

```json
{
  "scripts": {
    "build:lib": "npm run compile:scss && ng build ui-lib && node scripts/fix-exports.js",
    "fix:exports": "node scripts/fix-exports.js"
  }
}
```

This ensures that every build automatically includes the CSS export fix, preventing the recurring CSS import issues in consuming applications.