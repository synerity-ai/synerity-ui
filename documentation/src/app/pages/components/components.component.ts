import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { ComponentDataService } from '../../services/component-data.service';
import { SearchFiltersComponent } from '../../components/search-filters/search-filters.component';
import { SearchResultsComponent } from '../../components/search-results/search-results.component';
import { Button, Card } from '@synerity/ui';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchFiltersComponent, SearchResultsComponent, Button, Card],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent {
  protected readonly showFilters = signal(true);
  protected readonly showResults = signal(false);

  readonly components: any;
  readonly categories: any;
  readonly searchResults: any;
  readonly hasResults: any;
  readonly isSearching: any;

  constructor(
    private searchService: SearchService,
    private componentDataService: ComponentDataService
  ) {
    this.components = this.componentDataService.components;
    this.categories = this.componentDataService.categories;
    this.searchResults = this.searchService.searchResults;
    this.hasResults = this.searchService.hasResults;
    this.isSearching = this.searchService.isSearching;
  }

  toggleFilters(): void {
    this.showFilters.update(show => !show);
  }

  onSearchPerformed(): void {
    this.showResults.set(true);
  }

  onFiltersCleared(): void {
    this.showResults.set(false);
  }

  getComponentsByCategory(categoryName: string) {
    const result = this.componentDataService.getComponentsByCategory(categoryName);
    console.log(`Category: ${categoryName}, Components found: ${result.length}`);
    return result;
  }

  getTotalComponents(): number {
    return this.components().length;
  }

  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'Foundation': '🧱',
      'Form': '📝',
      'Data': '📊',
      'Layout': '📐',
      'Navigation': '🧭',
      'Media': '🎨',
      'File': '📁',
      'Messages': '💬',
      'Overlay': '🪟',
      'Progress': '⏳',
      'Utility': '🔧'
    };
    return icons[category] || '📦';
  }

}
