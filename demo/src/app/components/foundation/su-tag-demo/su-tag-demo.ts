import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tag } from '@synerity/ui';

@Component({
  selector: 'app-su-tag-demo',
  imports: [CommonModule, FormsModule, Tag],
  templateUrl: './su-tag-demo.html',
  styleUrl: './su-tag-demo.scss'
})
export class SuTagDemo {
  // Basic tags
  tags: Array<{ value: string; icon: string; severity: 'info' | 'success' | 'warning' | 'danger' | 'contrast' }> = [
    { value: 'JavaScript', icon: '⚡', severity: 'info' },
    { value: 'Angular', icon: '🅰️', severity: 'success' },
    { value: 'TypeScript', icon: '🔷', severity: 'warning' },
    { value: 'React', icon: '⚛️', severity: 'danger' }
  ];

  // Removable tags
  removableTags: Array<{ value: string; removable: boolean; severity: 'info' | 'success' | 'warning' | 'danger' | 'contrast' }> = [
    { value: 'Frontend', removable: true, severity: 'info' },
    { value: 'Backend', removable: true, severity: 'success' },
    { value: 'Database', removable: true, severity: 'warning' },
    { value: 'DevOps', removable: true, severity: 'danger' }
  ];

  // Dynamic tags
  selectedSeverity: 'info' | 'success' | 'warning' | 'danger' | 'contrast' = 'info';
  selectedIcon = '🏷️';
  tagValue = 'Dynamic Tag';
  isRemovable = true;
  isDisabled = false;

  // Event tracking
  removeCount = 0;
  lastRemoved = '';

  // Event handlers
  onTagRemove(): void {
    this.removeCount++;
    this.lastRemoved = 'Tag removed';
    console.log('Tag removed');
  }

  // Reset counters
  resetCounters(): void {
    this.removeCount = 0;
    this.lastRemoved = '';
  }

  // Add new tag
  addTag(): void {
    if (this.tagValue.trim()) {
      this.tags.push({
        value: this.tagValue,
        icon: this.selectedIcon,
        severity: this.selectedSeverity
      });
      this.tagValue = '';
    }
  }

  // Remove tag by index
  removeTag(index: number): void {
    this.tags.splice(index, 1);
  }

  // Get configuration description
  getConfigDescription(): string {
    return `Severity: ${this.selectedSeverity} • Icon: ${this.selectedIcon} • Removable: ${this.isRemovable} • Disabled: ${this.isDisabled}`;
  }

  // Sample data for different use cases
  getSampleData() {
    return {
      statuses: [
        { value: 'Active', severity: 'success' as const, icon: '✅' },
        { value: 'Pending', severity: 'warning' as const, icon: '⏳' },
        { value: 'Inactive', severity: 'danger' as const, icon: '❌' },
        { value: 'Draft', severity: 'info' as const, icon: '📝' }
      ],
      categories: [
        { value: 'Technology', severity: 'info' as const, icon: '💻' },
        { value: 'Design', severity: 'success' as const, icon: '🎨' },
        { value: 'Marketing', severity: 'warning' as const, icon: '📢' },
        { value: 'Sales', severity: 'danger' as const, icon: '💰' }
      ],
      priorities: [
        { value: 'High', severity: 'danger' as const, icon: '🔴' },
        { value: 'Medium', severity: 'warning' as const, icon: '🟡' },
        { value: 'Low', severity: 'success' as const, icon: '🟢' },
        { value: 'Info', severity: 'info' as const, icon: 'ℹ️' }
      ]
    };
  }
}
