import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly isMenuOpen = signal(false);
  protected readonly isSearchOpen = signal(false);
  protected readonly isThemeDropdownOpen = signal(false);
  
  readonly searchQuery: any;
  readonly searchResults: any;
  readonly hasResults: any;
  readonly currentTheme: any;
  readonly availableThemes: any;

  constructor(
    private searchService: SearchService,
    private themeService: ThemeService
  ) {
    this.searchQuery = this.searchService.searchQuery;
    this.searchResults = this.searchService.searchResults;
    this.hasResults = this.searchService.hasResults;
    this.currentTheme = this.themeService.getCurrentTheme();
    this.availableThemes = this.themeService.getAvailableThemes();
  }

  toggleMenu(): void {
    this.isMenuOpen.update(open => !open);
  }

  toggleSearch(): void {
    this.isSearchOpen.update(open => !open);
  }

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchService.search(target.value);
  }

  clearSearch(): void {
    this.searchService.clearSearch();
  }

  closeSearch(): void {
    this.isSearchOpen.set(false);
    this.clearSearch();
  }

  toggleThemeDropdown(): void {
    this.isThemeDropdownOpen.update(open => !open);
  }

  closeThemeDropdown(): void {
    this.isThemeDropdownOpen.set(false);
  }

  setTheme(themeId: string): void {
    this.themeService.setTheme(themeId);
    this.closeThemeDropdown();
  }

  getCurrentThemeName(): string {
    return this.themeService.getCurrentThemeName();
  }
}
