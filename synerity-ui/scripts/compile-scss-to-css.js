#!/usr/bin/env node

/**
 * Script to compile synerity-ui.scss to synerity-ui.css
 * This ensures both CSS and SCSS files are kept in sync
 */

const sass = require('sass');
const fs = require('fs');
const path = require('path');

const scssFile = path.join(__dirname, '../projects/ui-lib/src/lib/synerity-ui.scss');
const cssFile = path.join(__dirname, '../projects/ui-lib/src/lib/synerity-ui.css');
const cssMapFile = path.join(__dirname, '../projects/ui-lib/src/lib/synerity-ui.css.map');

console.log('🔄 Compiling synerity-ui.scss to CSS...');

try {
  const result = sass.compile(scssFile, {
    style: 'expanded',
    sourceMap: true,
    sourceMapIncludeSources: true,
    verbose: true
  });

  // Write CSS file
  fs.writeFileSync(cssFile, result.css);
  console.log(`✅ CSS file written: ${cssFile}`);

  // Write source map file
  if (result.sourceMap) {
    fs.writeFileSync(cssMapFile, JSON.stringify(result.sourceMap, null, 2));
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
