import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly currentTheme = signal('');

  constructor() {
    this.initializeTheme();
  }

  getCurrentTheme() {
    return this.currentTheme.asReadonly();
  }

  private initializeTheme(): void {
    // Initialize with default theme
    this.setTheme('');
  }

  setTheme(themeClass: string) {
    // Remove existing theme classes from html element
    document.documentElement.classList.remove('theme-corporate', 'theme-seasonal', 'theme-winter', 'theme-dark');

    // Add new theme class if provided
    if (themeClass) {
      document.documentElement.classList.add(themeClass);
    }

    this.currentTheme.set(themeClass);

    // Debug: Log the current theme and CSS variables
    console.log('Theme changed to:', themeClass || 'default');
    console.log('HTML classes:', document.documentElement.className);

    // Check computed CSS variables
    const computedStyle = getComputedStyle(document.documentElement);
    console.log('Primary 600:', computedStyle.getPropertyValue('--sui-primary-600'));
    console.log('Secondary 600:', computedStyle.getPropertyValue('--sui-secondary-600'));
  }

  getAvailableThemes() {
    return [
      { id: '', name: 'Default', description: 'Synerity UI default theme' },
      { id: 'theme-corporate', name: 'Corporate', description: 'Professional blue theme' },
      { id: 'theme-seasonal', name: 'Seasonal', description: 'Green and red seasonal theme' },
      { id: 'theme-winter', name: 'Winter', description: 'Cool blue winter theme' },
      { id: 'theme-dark', name: 'Dark', description: 'Dark mode theme' }
    ];
  }

  getCurrentThemeName(): string {
    const current = this.currentTheme();
    const themes = this.getAvailableThemes();
    const theme = themes.find(t => t.id === current);
    return theme ? theme.name : 'Default';
  }
}
