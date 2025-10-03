import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService, SearchFilter } from '../../services/search.service';
import { ComponentDataService } from '../../services/component-data.service';

@Component({
  selector: 'app-search-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-filters.component.html',
  styleUrl: './search-filters.component.scss'
})
export class SearchFiltersComponent {
  protected readonly isExpanded = signal(false);
  protected readonly selectedCategory = signal<string>('');
  protected readonly selectedTags = signal<string[]>([]);
  protected readonly hasExamplesOnly = signal(false);

  readonly categories: any;
  readonly allTags: any;

  constructor(
    private searchService: SearchService,
    private componentDataService: ComponentDataService
  ) {
    this.categories = this.componentDataService.categories;
    this.allTags = computed(() => {
      const tags = new Set<string>();
      this.componentDataService.components().forEach(component => {
        component.tags.forEach(tag => tags.add(tag));
      });
      return Array.from(tags).sort();
    });
  }

  toggleExpanded(): void {
    this.isExpanded.update(expanded => !expanded);
  }

  onCategoryChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedCategory.set(target.value);
    this.applyFilters();
  }

  onTagToggle(tag: string): void {
    const currentTags = this.selectedTags();
    const newTags = currentTags.includes(tag)
      ? currentTags.filter(t => t !== tag)
      : [...currentTags, tag];
    this.selectedTags.set(newTags);
    this.applyFilters();
  }

  onExamplesOnlyChange(checked: boolean): void {
    this.hasExamplesOnly.set(checked);
    this.applyFilters();
  }

  clearFilters(): void {
    this.selectedCategory.set('');
    this.selectedTags.set([]);
    this.hasExamplesOnly.set(false);
    this.applyFilters();
  }

  private applyFilters(): void {
    const filters: SearchFilter = {
      category: this.selectedCategory() || undefined,
      tags: this.selectedTags().length > 0 ? this.selectedTags() : undefined,
      hasExamples: this.hasExamplesOnly() || undefined
    };

    this.searchService.setFilters(filters);
  }

  get hasActiveFilters(): boolean {
    return this.selectedCategory() !== '' || 
           this.selectedTags().length > 0 || 
           this.hasExamplesOnly();
  }

  getActiveFilterCount(): number {
    let count = 0;
    if (this.selectedCategory() !== '') count++;
    if (this.selectedTags().length > 0) count++;
    if (this.hasExamplesOnly()) count++;
    return count;
  }
}
