import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentDataService } from '../../services/component-data.service';
import { ComponentModel } from '../../models/component.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  protected readonly isCollapsed = signal(false);
  protected readonly expandedCategories = signal<Set<string>>(new Set(['Actions', 'Data Display']));

  readonly categories: any;
  readonly components: any;

  constructor(private componentDataService: ComponentDataService) {
    this.categories = this.componentDataService.categories;
    this.components = this.componentDataService.components;
  }

  toggleCollapse(): void {
    this.isCollapsed.update(collapsed => !collapsed);
  }

  toggleCategory(category: string): void {
    const expanded = this.expandedCategories();
    const newExpanded = new Set(expanded);
    
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    
    this.expandedCategories.set(newExpanded);
  }

  isCategoryExpanded(category: string): boolean {
    return this.expandedCategories().has(category);
  }

  getComponentsByCategory(category: string): ComponentModel[] {
    return this.componentDataService.getComponentsByCategory(category);
  }

  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'Actions': '⚡',
      'Data Display': '📊',
      'Navigation': '🧭',
      'Feedback': '💬',
      'Data Input': '📝',
      'Layout': '📐'
    };
    return icons[category] || '📦';
  }
}
