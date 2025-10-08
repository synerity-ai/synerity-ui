#!/usr/bin/env node

/**
 * Post-build script to fix package.json exports
 * This ensures the CSS file is properly exported after each build
 */

const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '../dist/ui-lib/package.json');

console.log('🔧 Fixing package.json exports...');

try {
  // Read the current package.json
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  // Ensure exports field exists
  if (!packageJson.exports) {
    packageJson.exports = {};
  }
  
  // Add the CSS export if it doesn't exist
  if (!packageJson.exports['./synerity-ui.css']) {
    packageJson.exports['./synerity-ui.css'] = {
      default: './src/lib/synerity-ui.css'
    };
    console.log('✅ Added synerity-ui.css export');
  } else {
    console.log('✅ synerity-ui.css export already exists');
  }
  
  // Write the updated package.json back
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  
  console.log('🎉 Package.json exports fixed successfully!');
  
} catch (error) {
  console.error('❌ Error fixing package.json exports:', error.message);
  process.exit(1);
}
