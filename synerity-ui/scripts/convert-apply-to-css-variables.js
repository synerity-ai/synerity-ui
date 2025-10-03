#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Mapping of Tailwind color classes to CSS variables
const colorMappings = {
  // Primary colors
  'bg-primary-50': 'background-color: var(--sui-color-primary-50)',
  'bg-primary-100': 'background-color: var(--sui-color-primary-100)',
  'bg-primary-200': 'background-color: var(--sui-color-primary-200)',
  'bg-primary-300': 'background-color: var(--sui-color-primary-300)',
  'bg-primary-400': 'background-color: var(--sui-color-primary-400)',
  'bg-primary-500': 'background-color: var(--sui-color-primary-500)',
  'bg-primary-600': 'background-color: var(--sui-color-primary-600)',
  'bg-primary-700': 'background-color: var(--sui-color-primary-700)',
  'bg-primary-800': 'background-color: var(--sui-color-primary-800)',
  'bg-primary-900': 'background-color: var(--sui-color-primary-950)',
  'bg-primary-950': 'background-color: var(--sui-color-primary-950)',
  
  'text-primary-50': 'color: var(--sui-color-primary-50)',
  'text-primary-100': 'color: var(--sui-color-primary-100)',
  'text-primary-200': 'color: var(--sui-color-primary-200)',
  'text-primary-300': 'color: var(--sui-color-primary-300)',
  'text-primary-400': 'color: var(--sui-color-primary-400)',
  'text-primary-500': 'color: var(--sui-color-primary-500)',
  'text-primary-600': 'color: var(--sui-color-primary-600)',
  'text-primary-700': 'color: var(--sui-color-primary-700)',
  'text-primary-800': 'color: var(--sui-color-primary-800)',
  'text-primary-900': 'color: var(--sui-color-primary-900)',
  'text-primary-950': 'color: var(--sui-color-primary-950)',
  
  'border-primary-50': 'border-color: var(--sui-color-primary-50)',
  'border-primary-100': 'border-color: var(--sui-color-primary-100)',
  'border-primary-200': 'border-color: var(--sui-color-primary-200)',
  'border-primary-300': 'border-color: var(--sui-color-primary-300)',
  'border-primary-400': 'border-color: var(--sui-color-primary-400)',
  'border-primary-500': 'border-color: var(--sui-color-primary-500)',
  'border-primary-600': 'border-color: var(--sui-color-primary-600)',
  'border-primary-700': 'border-color: var(--sui-color-primary-700)',
  'border-primary-800': 'border-color: var(--sui-color-primary-800)',
  'border-primary-900': 'border-color: var(--sui-color-primary-900)',
  'border-primary-950': 'border-color: var(--sui-color-primary-950)',
  
  'ring-primary-50': 'box-shadow: 0 0 0 1px var(--sui-color-primary-50)',
  'ring-primary-100': 'box-shadow: 0 0 0 1px var(--sui-color-primary-100)',
  'ring-primary-200': 'box-shadow: 0 0 0 1px var(--sui-color-primary-200)',
  'ring-primary-300': 'box-shadow: 0 0 0 1px var(--sui-color-primary-300)',
  'ring-primary-400': 'box-shadow: 0 0 0 1px var(--sui-color-primary-400)',
  'ring-primary-500': 'box-shadow: 0 0 0 1px var(--sui-color-primary-500)',
  'ring-primary-600': 'box-shadow: 0 0 0 1px var(--sui-color-primary-600)',
  'ring-primary-700': 'box-shadow: 0 0 0 1px var(--sui-color-primary-700)',
  'ring-primary-800': 'box-shadow: 0 0 0 1px var(--sui-color-primary-800)',
  'ring-primary-900': 'box-shadow: 0 0 0 1px var(--sui-color-primary-900)',
  'ring-primary-950': 'box-shadow: 0 0 0 1px var(--sui-color-primary-950)',

  // Secondary colors
  'bg-secondary-50': 'background-color: var(--sui-color-secondary-50)',
  'bg-secondary-100': 'background-color: var(--sui-color-secondary-100)',
  'bg-secondary-200': 'background-color: var(--sui-color-secondary-200)',
  'bg-secondary-300': 'background-color: var(--sui-color-secondary-300)',
  'bg-secondary-400': 'background-color: var(--sui-color-secondary-400)',
  'bg-secondary-500': 'background-color: var(--sui-color-secondary-500)',
  'bg-secondary-600': 'background-color: var(--sui-color-secondary-600)',
  'bg-secondary-700': 'background-color: var(--sui-color-secondary-700)',
  'bg-secondary-800': 'background-color: var(--sui-color-secondary-800)',
  'bg-secondary-900': 'background-color: var(--sui-color-secondary-900)',
  'bg-secondary-950': 'background-color: var(--sui-color-secondary-950)',

  // Gray colors
  'bg-gray-50': 'background-color: var(--sui-color-gray-50)',
  'bg-gray-100': 'background-color: var(--sui-color-gray-100)',
  'bg-gray-200': 'background-color: var(--sui-color-gray-200)',
  'bg-gray-300': 'background-color: var(--sui-color-gray-300)',
  'bg-gray-400': 'background-color: var(--sui-color-gray-400)',
  'bg-gray-500': 'background-color: var(--sui-color-gray-500)',
  'bg-gray-600': 'background-color: var(--sui-color-gray-600)',
  'bg-gray-700': 'background-color: var(--sui-color-gray-700)',
  'bg-gray-800': 'background-color: var(--sui-color-gray-800)',
  'bg-gray-900': 'background-color: var(--sui-color-gray-900)',
  'bg-gray-950': 'background-color: var(--sui-color-gray-950)',
  
  'text-gray-50': 'color: var(--sui-color-gray-50)',
  'text-gray-100': 'color: var(--sui-color-gray-100)',
  'text-gray-200': 'color: var(--sui-color-gray-200)',
  'text-gray-300': 'color: var(--sui-color-gray-300)',
  'text-gray-400': 'color: var(--sui-color-gray-400)',
  'text-gray-500': 'color: var(--sui-color-gray-500)',
  'text-gray-600': 'color: var(--sui-color-gray-600)',
  'text-gray-700': 'color: var(--sui-color-gray-700)',
  'text-gray-800': 'color: var(--sui-color-gray-800)',
  'text-gray-900': 'color: var(--sui-color-gray-900)',
  'text-gray-950': 'color: var(--sui-color-gray-950)',
  
  'border-gray-50': 'border-color: var(--sui-color-gray-50)',
  'border-gray-100': 'border-color: var(--sui-color-gray-100)',
  'border-gray-200': 'border-color: var(--sui-color-gray-200)',
  'border-gray-300': 'border-color: var(--sui-color-gray-300)',
  'border-gray-400': 'border-color: var(--sui-color-gray-400)',
  'border-gray-500': 'border-color: var(--sui-color-gray-500)',
  'border-gray-600': 'border-color: var(--sui-color-gray-600)',
  'border-gray-700': 'border-color: var(--sui-color-gray-700)',
  'border-gray-800': 'border-color: var(--sui-color-gray-800)',
  'border-gray-900': 'border-color: var(--sui-color-gray-900)',
  'border-gray-950': 'border-color: var(--sui-color-gray-950)',

  // Red colors
  'bg-red-600': 'background-color: var(--sui-color-red-600)',
  'bg-red-700': 'background-color: var(--sui-color-red-700)',
  'text-red-600': 'color: var(--sui-color-red-600)',
  'text-red-700': 'color: var(--sui-color-red-700)',
  'border-red-600': 'border-color: var(--sui-color-red-600)',
  'border-red-700': 'border-color: var(--sui-color-red-700)',

  // Green colors
  'bg-green-600': 'background-color: var(--sui-color-green-600)',
  'bg-green-700': 'background-color: var(--sui-color-green-700)',
  'text-green-600': 'color: var(--sui-color-green-600)',
  'text-green-700': 'color: var(--sui-color-green-700)',
  'border-green-600': 'border-color: var(--sui-color-green-600)',
  'border-green-700': 'border-color: var(--sui-color-green-700)',

  // Yellow colors
  'bg-yellow-600': 'background-color: var(--sui-color-yellow-600)',
  'bg-yellow-700': 'background-color: var(--sui-color-yellow-700)',
  'text-yellow-600': 'color: var(--sui-color-yellow-600)',
  'text-yellow-700': 'color: var(--sui-color-yellow-700)',
  'border-yellow-600': 'border-color: var(--sui-color-yellow-600)',
  'border-yellow-700': 'border-color: var(--sui-color-yellow-700)',

  // Blue colors
  'bg-blue-600': 'background-color: var(--sui-color-blue-600)',
  'bg-blue-700': 'background-color: var(--sui-color-blue-700)',
  'text-blue-600': 'color: var(--sui-color-blue-600)',
  'text-blue-700': 'color: var(--sui-color-blue-700)',
  'border-blue-600': 'border-color: var(--sui-color-blue-600)',
  'border-blue-700': 'border-color: var(--sui-color-blue-700)',
};

function convertApplyToCSSVariables(content) {
  let converted = content;
  
  // Find all @apply directives with color classes
  const applyRegex = /@apply\s+([^;]+);/g;
  
  converted = converted.replace(applyRegex, (match, classes) => {
    const classList = classes.trim().split(/\s+/);
    const cssProperties = [];
    const nonColorClasses = [];
    
    classList.forEach(className => {
      if (colorMappings[className]) {
        cssProperties.push(colorMappings[className]);
      } else {
        nonColorClasses.push(className);
      }
    });
    
    // If we have non-color classes, keep them in @apply
    // If we only have color classes, replace entirely with CSS properties
    if (nonColorClasses.length > 0) {
      return cssProperties.length > 0 
        ? `${cssProperties.join('; ')}; @apply ${nonColorClasses.join(' ')};`
        : `@apply ${nonColorClasses.join(' ')};`;
    } else {
      return cssProperties.join('; ') + ';';
    }
  });
  
  return converted;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const converted = convertApplyToCSSVariables(content);
    
    if (content !== converted) {
      fs.writeFileSync(filePath, converted, 'utf8');
      console.log(`✅ Converted: ${filePath}`);
      return true;
    } else {
      console.log(`⏭️  No changes: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  const scssFile = path.join(__dirname, '../projects/ui-lib/src/lib/synerity-ui.scss');
  
  console.log('🔄 Converting @apply color classes to CSS variables...');
  console.log(`📁 Processing: ${scssFile}`);
  
  const changed = processFile(scssFile);
  
  if (changed) {
    console.log('\n✅ Conversion completed successfully!');
    console.log('📝 Next steps:');
    console.log('   1. npm run compile:scss');
    console.log('   2. npm run build:lib');
    console.log('   3. Test with demo app');
  } else {
    console.log('\n⏭️  No @apply color classes found to convert.');
  }
}

if (require.main === module) {
  main();
}

module.exports = { convertApplyToCSSVariables, processFile };
