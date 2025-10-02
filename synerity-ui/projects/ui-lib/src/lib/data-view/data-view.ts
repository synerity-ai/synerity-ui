import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'sui-data-view',
  standalone: true,
  imports: [NgFor, NgIf, NgTemplateOutlet],
  templateUrl: './data-view.html',
  styleUrl: './data-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataView {
  @Input() value: any[] = [];
  @Input() layout: 'list' | 'grid' = 'list';
  @Input() paginator = false;
  @Input() rows = 0;
  @Input() first = 0;
  @Input() totalRecords = 0;
  @Input() emptyMessage = 'No records found';
  @Input() itemTemplate: TemplateRef<any> | null = null;
  @Output() onPage = new EventEmitter<any>();
  @Output() onLazyLoad = new EventEmitter<any>();

  get paginatedValue(): any[] {
    if (!this.paginator || this.rows === 0) {
      return this.value;
    }
    return this.value.slice(this.first, this.first + this.rows);
  }

  onPageChange(event: any): void {
    this.first = event.first;
    this.rows = event.rows;
    this.onPage.emit(event);
  }

  getLayoutClass(): string {
    return `sui-data-view-${this.layout}`;
  }
}
