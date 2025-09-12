import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-data-view',
  imports: [NgFor, NgIf],
  templateUrl: './data-view.html',
  styleUrl: './data-view.css',
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
