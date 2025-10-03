import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { SearchResult } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {
  protected readonly sortBy = signal<'relevance' | 'name' | 'category'>('relevance');
  protected readonly viewMode = signal<'grid' | 'list'>('grid');

  readonly searchResults: any;
  readonly isSearching: any;
  readonly hasResults: any;
  readonly resultCount: any;
  readonly searchQuery: any;

  readonly sortedResults: any;

  constructor(private searchService: SearchService) {
    this.searchResults = this.searchService.searchResults;
    this.isSearching = this.searchService.isSearching;
    this.hasResults = this.searchService.hasResults;
    this.resultCount = this.searchService.resultCount;
    this.searchQuery = this.searchService.searchQuery;

    this.sortedResults = computed(() => {
      const results = this.searchResults();
      const sort = this.sortBy();
      
      if (sort === 'relevance') {
        return results; // Already sorted by relevance
      }
      
      return [...results].sort((a, b) => {
        if (sort === 'name') {
          return a.component.name.localeCompare(b.component.name);
        }
        if (sort === 'category') {
          return a.component.category.localeCompare(b.component.category);
        }
        return 0;
      });
    });
  }

  setSortBy(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.sortBy.set(target.value as 'relevance' | 'name' | 'category');
  }

  setViewMode(mode: 'grid' | 'list'): void {
    this.viewMode.set(mode);
  }

  getMatchedFieldsText(matchedFields: string[]): string {
    const fieldLabels: { [key: string]: string } = {
      'name': 'Name',
      'description': 'Description',
      'category': 'Category',
      'tags': 'Tags'
    };
    
    return matchedFields.map(field => fieldLabels[field] || field).join(', ');
  }

  getScoreColor(score: number): string {
    if (score >= 10) return 'high';
    if (score >= 5) return 'medium';
    return 'low';
  }

  trackByComponent(index: number, result: SearchResult): string {
    return result.component.id;
  }
}
