import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    // Apply light theme colors
    this.applyTheme();
  }

  private applyTheme(): void {
    const root = document.documentElement;
    
    // Apply CSS custom properties for light theme
    root.style.setProperty('--color-primary', '#3b82f6');
    root.style.setProperty('--color-secondary', '#64748b');
    root.style.setProperty('--color-accent', '#f59e0b');
    root.style.setProperty('--color-neutral', '#6b7280');
    root.style.setProperty('--color-base', '#ffffff');
    root.style.setProperty('--color-info', '#0ea5e9');
    root.style.setProperty('--color-success', '#10b981');
    root.style.setProperty('--color-warning', '#f59e0b');
    root.style.setProperty('--color-error', '#ef4444');
    
    // Apply light theme class
    root.classList.remove('dark');
    root.classList.add('light');
  }
}
