import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Button } from '@synerity/ui';

@Component({
  selector: 'app-theme-config',
  standalone: true,
  imports: [CommonModule, RouterModule, Button],
  templateUrl: './theme-config.html',
  styleUrl: './theme-config.scss'
})
export class ThemeConfigComponent {
  
  tailwindConfigCode = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/@synerity/ui/**/*.{html,ts,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Synerity UI Theme Colors
        'sui-primary': {
          50: 'var(--sui-primary-50)',
          100: 'var(--sui-primary-100)',
          200: 'var(--sui-primary-200)',
          300: 'var(--sui-primary-300)',
          400: 'var(--sui-primary-400)',
          500: 'var(--sui-primary-500)',
          600: 'var(--sui-primary-600)',
          700: 'var(--sui-primary-700)',
          800: 'var(--sui-primary-800)',
          900: 'var(--sui-primary-900)',
          950: 'var(--sui-primary-950)',
        },
        'sui-secondary': {
          50: 'var(--sui-secondary-50)',
          100: 'var(--sui-secondary-100)',
          200: 'var(--sui-secondary-200)',
          300: 'var(--sui-secondary-300)',
          400: 'var(--sui-secondary-400)',
          500: 'var(--sui-secondary-500)',
          600: 'var(--sui-secondary-600)',
          700: 'var(--sui-secondary-700)',
          800: 'var(--sui-secondary-800)',
          900: 'var(--sui-secondary-900)',
          950: 'var(--sui-secondary-950)',
        },
        'sui-gray': {
          50: 'var(--sui-gray-50)',
          100: 'var(--sui-gray-100)',
          200: 'var(--sui-gray-200)',
          300: 'var(--sui-gray-300)',
          400: 'var(--sui-gray-400)',
          500: 'var(--sui-gray-500)',
          600: 'var(--sui-gray-600)',
          700: 'var(--sui-gray-700)',
          800: 'var(--sui-gray-800)',
          900: 'var(--sui-gray-900)',
          950: 'var(--sui-gray-950)',
        }
      }
    }
  },
  plugins: []
}`;

  customThemeCode = `/* Custom theme configuration */
:root {
  /* Override primary colors */
  --sui-primary-50: #f0f9ff;
  --sui-primary-100: #e0f2fe;
  --sui-primary-500: #0ea5e9;
  --sui-primary-600: #0284c7;
  --sui-primary-700: #0369a1;
  
  /* Override secondary colors */
  --sui-secondary-500: #059669;
  --sui-secondary-600: #047857;
  --sui-secondary-700: #065f46;
}

/* Dark theme variant */
.dark {
  --sui-primary-50: #1e3a8a;
  --sui-primary-100: #1e40af;
  --sui-primary-500: #60a5fa;
  --sui-primary-600: #93c5fd;
  --sui-primary-700: #bfdbfe;
  
  --sui-gray-50: #030712;
  --sui-gray-100: #111827;
  --sui-gray-900: #f3f4f6;
}`;

  corporateThemeCode = `/* Corporate Theme */
:root {
  --sui-primary-500: #1e40af;
  --sui-primary-600: #1d4ed8;
  --sui-primary-700: #1e3a8a;
  --sui-secondary-500: #059669;
  --sui-secondary-600: #047857;
  --sui-secondary-700: #065f46;
}`;

  seasonalThemeCode = `/* Seasonal Theme */
:root {
  --sui-primary-500: #059669;
  --sui-primary-600: #047857;
  --sui-primary-700: #065f46;
  --sui-secondary-500: #dc2626;
  --sui-secondary-600: #b91c1c;
  --sui-secondary-700: #991b1b;
}`;

  darkThemeCode = `/* Dark Theme */
:root {
  --sui-primary-50: #1e3a8a;
  --sui-primary-100: #1e40af;
  --sui-primary-500: #60a5fa;
  --sui-primary-600: #93c5fd;
  --sui-primary-700: #bfdbfe;
  
  --sui-gray-50: #030712;
  --sui-gray-100: #111827;
  --sui-gray-900: #f3f4f6;
  
  background-color: var(--sui-gray-50);
  color: var(--sui-gray-900);
}`;

  copyCode(code: string): void {
    navigator.clipboard.writeText(code).then(() => {
      console.log('Code copied to clipboard');
      // You could add a toast notification here
    }).catch(err => {
      console.error('Failed to copy code: ', err);
    });
  }
}