#!/usr/bin/env node

/**
 * Script to compile synerity-ui.scss to synerity-ui.css
 * This ensures both CSS and SCSS files are kept in sync
 */

const sass = require('sass');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const fs = require('fs');
const path = require('path');

const scssFile = path.join(__dirname, '../projects/ui-lib/src/lib/synerity-ui.scss');
const cssFile = path.join(__dirname, '../projects/ui-lib/src/lib/synerity-ui.css');
const cssMapFile = path.join(__dirname, '../projects/ui-lib/src/lib/synerity-ui.css.map');

console.log('🔄 Compiling synerity-ui.scss to CSS...');

(async () => {
try {
  // Step 1: Compile SCSS to CSS
  const sassResult = sass.compile(scssFile, {
    style: 'expanded',
    sourceMap: true,
    sourceMapIncludeSources: true,
    verbose: true
  });

  // Step 2: Process CSS with Tailwind and PostCSS
  const postcssResult = await postcss([
    tailwindcss('./tailwind.config.js'), // Use the library's Tailwind config
    autoprefixer()
  ]).process(sassResult.css, {
    from: scssFile,
    to: cssFile,
    map: { inline: false, sourcesContent: true }
  });

  // Write CSS file
  fs.writeFileSync(cssFile, postcssResult.css);
  console.log(`✅ CSS file written: ${cssFile}`);

  // Write source map file
  if (postcssResult.map) {
    fs.writeFileSync(cssMapFile, postcssResult.map.toString());
    console.log(`✅ Source map written: ${cssMapFile}`);
  }

  // Get file sizes for comparison
  const scssStats = fs.statSync(scssFile);
  const cssStats = fs.statSync(cssFile);
  
  console.log(`📊 File sizes:`);
  console.log(`   SCSS: ${(scssStats.size / 1024).toFixed(1)} KB`);
  console.log(`   CSS:  ${(cssStats.size / 1024).toFixed(1)} KB`);
  
  console.log('✅ SCSS to CSS compilation completed successfully!');
  
} catch (error) {
  console.error('❌ Error compiling SCSS to CSS:');
  console.error(error.message);
  process.exit(1);
}
})();
