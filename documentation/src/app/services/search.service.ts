import { Injectable, signal, computed } from '@angular/core';
import { ComponentDataService } from './component-data.service';
import { ComponentModel } from '../models/component.model';

export interface SearchFilter {
  category?: string;
  tags?: string[];
  hasExamples?: boolean;
}

export interface SearchResult {
  component: ComponentModel;
  score: number;
  matchedFields: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly _searchQuery = signal<string>('');
  private readonly _searchResults = signal<SearchResult[]>([]);
  private readonly _isSearching = signal<boolean>(false);
  private readonly _searchHistory = signal<string[]>([]);
  private readonly _filters = signal<SearchFilter>({});

  readonly searchQuery = this._searchQuery.asReadonly();
  readonly searchResults = this._searchResults.asReadonly();
  readonly isSearching = this._isSearching.asReadonly();
  readonly searchHistory = this._searchHistory.asReadonly();
  readonly filters = this._filters.asReadonly();
  readonly hasResults = computed(() => this._searchResults().length > 0);
  readonly resultCount = computed(() => this._searchResults().length);

  constructor(private componentDataService: ComponentDataService) {}

  search(query: string, filters?: SearchFilter): void {
    if (!query.trim()) {
      this._searchResults.set([]);
      this._searchQuery.set('');
      return;
    }

    this._isSearching.set(true);
    this._searchQuery.set(query);
    
    if (filters) {
      this._filters.set(filters);
    }
    
    // Simulate search delay for better UX
    setTimeout(() => {
      const results = this.performSearch(query, this._filters());
      this._searchResults.set(results);
      this._isSearching.set(false);
      
      // Add to search history
      this.addToHistory(query);
    }, 300);
  }

  private performSearch(query: string, filters: SearchFilter): SearchResult[] {
    const normalizedQuery = query.toLowerCase().trim();
    const results: SearchResult[] = [];
    
    this.componentDataService.components().forEach(component => {
      const matchedFields: string[] = [];
      let score = 0;
      
      // Name match (highest priority)
      if (component.name.toLowerCase().includes(normalizedQuery)) {
        matchedFields.push('name');
        score += 10;
      }
      
      // Description match
      if (component.description.toLowerCase().includes(normalizedQuery)) {
        matchedFields.push('description');
        score += 5;
      }
      
      // Category match
      if (component.category.toLowerCase().includes(normalizedQuery)) {
        matchedFields.push('category');
        score += 3;
      }
      
      // Tags match
      if (component.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))) {
        matchedFields.push('tags');
        score += 2;
      }
      
      // Apply filters
      if (filters.category && component.category !== filters.category) {
        return;
      }
      
      if (filters.tags && filters.tags.length > 0) {
        const hasMatchingTag = filters.tags.some(filterTag => 
          component.tags.some(componentTag => 
            componentTag.toLowerCase().includes(filterTag.toLowerCase())
          )
        );
        if (!hasMatchingTag) return;
      }
      
      if (filters.hasExamples && (!component.examples || component.examples.length === 0)) {
        return;
      }
      
      if (score > 0) {
        results.push({ component, score, matchedFields });
      }
    });
    
    // Sort by score (highest first)
    return results.sort((a, b) => b.score - a.score);
  }

  setFilters(filters: SearchFilter): void {
    this._filters.set(filters);
    if (this._searchQuery()) {
      this.search(this._searchQuery(), filters);
    }
  }

  clearSearch(): void {
    this._searchQuery.set('');
    this._searchResults.set([]);
    this._isSearching.set(false);
    this._filters.set({});
  }

  getSuggestions(query: string): string[] {
    if (!query.trim()) return [];
    
    const allComponents = this.componentDataService.components();
    const suggestions = new Set<string>();
    
    allComponents.forEach(component => {
      // Add component name if it matches
      if (component.name.toLowerCase().includes(query.toLowerCase())) {
        suggestions.add(component.name);
      }
      
      // Add category if it matches
      if (component.category.toLowerCase().includes(query.toLowerCase())) {
        suggestions.add(component.category);
      }
      
      // Add tags if they match
      component.tags.forEach(tag => {
        if (tag.toLowerCase().includes(query.toLowerCase())) {
          suggestions.add(tag);
        }
      });
    });
    
    return Array.from(suggestions).slice(0, 5);
  }

  private addToHistory(query: string): void {
    const history = this._searchHistory();
    const filteredHistory = history.filter(item => item !== query);
    const newHistory = [query, ...filteredHistory].slice(0, 10);
    this._searchHistory.set(newHistory);
  }

  clearHistory(): void {
    this._searchHistory.set([]);
  }

  getPopularSearches(): string[] {
    return [
      'button',
      'card',
      'input',
      'modal',
      'table',
      'form',
      'navigation',
      'layout'
    ];
  }

  getRecentSearches(): string[] {
    const recent = localStorage.getItem('synerity-recent-searches');
    return recent ? JSON.parse(recent) : [];
  }

  addRecentSearch(query: string): void {
    if (!query.trim()) return;
    
    const recent = this.getRecentSearches();
    const filtered = recent.filter(item => item !== query);
    const updated = [query, ...filtered].slice(0, 5);
    
    localStorage.setItem('synerity-recent-searches', JSON.stringify(updated));
  }
}
