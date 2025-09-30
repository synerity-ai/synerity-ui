import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-table',
  imports: [NgFor, NgIf],
  templateUrl: './table.html',
  styleUrl: './table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Table {
  @Input() value: any[] = [];
  @Input() columns: Array<{ field: string; header: string; sortable?: boolean; filterable?: boolean }> = [];
  @Input() paginator = false;
  @Input() rows = 10;
  @Input() first = 0;
  @Input() totalRecords = 0;
  @Input() sortField = '';
  @Input() sortOrder: 'asc' | 'desc' = 'asc';
  @Input() filterDelay = 300;
  @Input() emptyMessage = 'No records found';
  @Input() selectionMode: 'single' | 'multiple' | null = null;
  @Output() onSort = new EventEmitter<any>();
  @Output() onFilter = new EventEmitter<any>();
  @Output() onRowSelect = new EventEmitter<any>();
  @Output() onRowUnselect = new EventEmitter<any>();
  @Output() onSelectionChange = new EventEmitter<any>();

  selectedRows: any[] = [];
  filters: { [key: string]: any } = {};

  get paginatedValue(): any[] {
    if (!this.paginator || this.rows === 0) {
      return this.value;
    }
    return this.value.slice(this.first, this.first + this.rows);
  }

  onSortColumn(column: { field: string; header: string; sortable?: boolean }): void {
    if (!column.sortable) return;
    
    if (this.sortField === column.field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = column.field;
      this.sortOrder = 'asc';
    }
    
    this.onSort.emit({ field: this.sortField, order: this.sortOrder });
  }

  onFilterColumn(column: { field: string; header: string; filterable?: boolean }, value: string): void {
    if (!column.filterable) return;
    
    this.filters[column.field] = value;
    this.onFilter.emit({ filters: this.filters });
  }

  onRowClick(row: any): void {
    if (this.selectionMode === 'single') {
      this.selectedRows = [row];
      this.onRowSelect.emit(row);
      this.onSelectionChange.emit(this.selectedRows);
    } else if (this.selectionMode === 'multiple') {
      const index = this.selectedRows.indexOf(row);
      if (index > -1) {
        this.selectedRows.splice(index, 1);
        this.onRowUnselect.emit(row);
      } else {
        this.selectedRows.push(row);
        this.onRowSelect.emit(row);
      }
      this.onSelectionChange.emit(this.selectedRows);
    }
  }

  isRowSelected(row: any): boolean {
    return this.selectedRows.includes(row);
  }

  getSortIcon(column: { field: string; header: string; sortable?: boolean }): string {
    if (this.sortField !== column.field) return '↕';
    return this.sortOrder === 'asc' ? '↑' : '↓';
  }
}
