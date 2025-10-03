import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchService } from '../../services/search.service';

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
  
  readonly searchQuery: any;
  readonly searchResults: any;
  readonly hasResults: any;

  constructor(private searchService: SearchService) {
    this.searchQuery = this.searchService.searchQuery;
    this.searchResults = this.searchService.searchResults;
    this.hasResults = this.searchService.hasResults;
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
}
