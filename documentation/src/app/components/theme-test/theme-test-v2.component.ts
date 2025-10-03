import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '@synerity/ui';

@Component({
  selector: 'app-theme-test-v2',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './theme-test-v2.component.html',
  styleUrl: './theme-test-v2.component.scss'
})
export class ThemeTestV2Component {
  currentTheme: string = '';

  get document() {
    return document;
  }

  setTheme(themeClass: string) {
    // Remove all theme classes
    document.body.classList.remove('theme-corporate', 'theme-seasonal', 'theme-winter', 'theme-dark');
    
    // Add new theme class if provided
    if (themeClass) {
      document.body.classList.add(themeClass);
    }
    
    this.currentTheme = themeClass;
    
    // Debug: Log the current theme and CSS variables
    console.log('Theme changed to:', themeClass || 'default');
    console.log('Body classes:', document.body.className);
    
    // Check computed CSS variables
    const computedStyle = getComputedStyle(document.body);
    console.log('Primary 600:', computedStyle.getPropertyValue('--sui-primary-600'));
    console.log('Secondary 600:', computedStyle.getPropertyValue('--sui-secondary-600'));
  }

  getComputedColor(variable: string): string {
    if (typeof window !== 'undefined') {
      const computedStyle = getComputedStyle(document.body);
      return computedStyle.getPropertyValue(variable).trim() || 'not set';
    }
    return 'not available';
  }
}
