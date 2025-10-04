import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

export interface TableColumn {
  field: string;
  header: string;
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

@Component({
  selector: 'sui-table',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './table.html',
  styleUrl: './table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Table implements OnInit {
  @Input() value: any[] = [];
  @Input() columns: TableColumn[] = [];
  @Input() paginator = false;
  @Input() rows = 10;
  @Input() first = 0;
  @Input() totalRecords = 0;
  @Input() sortField = '';
  @Input() sortOrder: 'asc' | 'desc' = 'asc';
  @Input() showFilters = false;
  @Input() emptyMessage = 'No records found';
  @Input() selectionMode: 'single' | 'multiple' | null = null;
  @Input() striped = false;
  @Input() hover = true;
  @Input() bordered = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Output() onSort = new EventEmitter<{ field: string; order: 'asc' | 'desc' }>();
  @Output() onFilter = new EventEmitter<{ filters: { [key: string]: any } }>();
  @Output() onRowSelect = new EventEmitter<any>();
  @Output() onRowUnselect = new EventEmitter<any>();
  @Output() onSelectionChange = new EventEmitter<any[]>();

  selectedRows: any[] = [];
  filters: { [key: string]: any } = {};

  ngOnInit() {
    // Set default sort to first sortable column
    if (this.columns.length > 0) {
      const firstSortableColumn = this.columns.find(col => col.sortable);
      if (firstSortableColumn && !this.sortField) {
        this.sortField = firstSortableColumn.field;
        this.sortOrder = 'asc';
      }
    }
  }

  get filteredValue(): any[] {
    if (Object.keys(this.filters).length === 0) {
      return this.value;
    }
    
    return this.value.filter(row => {
      return Object.entries(this.filters).every(([field, filterValue]) => {
        if (!filterValue || filterValue.trim() === '') {
          return true; // Empty filter means no filtering
        }
        
        const cellValue = row[field];
        if (cellValue == null) {
          return false;
        }
        
        const cellStr = String(cellValue).toLowerCase();
        const filterStr = String(filterValue).toLowerCase().trim();
        
        return cellStr.includes(filterStr);
      });
    });
  }

  get sortedValue(): any[] {
    const filteredData = this.filteredValue;
    
    if (!this.sortField) {
      return filteredData;
    }
    
    const sorted = [...filteredData].sort((a, b) => {
      const aValue = a[this.sortField];
      const bValue = b[this.sortField];
      
      // Handle null/undefined values
      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return this.sortOrder === 'asc' ? -1 : 1;
      if (bValue == null) return this.sortOrder === 'asc' ? 1 : -1;
      
      // Handle different data types
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return this.sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      // Handle strings
      const aStr = String(aValue).toLowerCase();
      const bStr = String(bValue).toLowerCase();
      if (this.sortOrder === 'asc') {
        return aStr < bStr ? -1 : aStr > bStr ? 1 : 0;
      } else {
        return aStr > bStr ? -1 : aStr < bStr ? 1 : 0;
      }
    });
    
    return sorted;
  }

  get paginatedValue(): any[] {
    const sortedData = this.sortedValue;
    if (!this.paginator || this.rows === 0) {
      return sortedData;
    }
    return sortedData.slice(this.first, this.first + this.rows);
  }

  get tableClasses(): string {
    const classes = ['sui-table'];
    if (this.striped) classes.push('sui-table-striped');
    if (this.hover) classes.push('sui-table-hover');
    if (this.bordered) classes.push('sui-table-bordered');
    if (this.size !== 'md') classes.push(`sui-table-${this.size}`);
    return classes.join(' ');
  }

  get containerClasses(): string {
    const classes = ['sui-table-container'];
    if (this.bordered) classes.push('sui-table-bordered');
    return classes.join(' ');
  }

  onSortColumn(column: TableColumn): void {
    if (!column.sortable) return;
    
    // Update internal sort state
    if (this.sortField === column.field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = column.field;
      this.sortOrder = 'asc';
    }
    
    // Emit sort event for external handling (if needed)
    this.onSort.emit({ field: this.sortField, order: this.sortOrder });
  }

  onFilterColumn(column: TableColumn, value: string): void {
    if (!column.filterable) return;
    
    // Update internal filter state
    this.filters[column.field] = value;
    
    // Emit filter event for external handling (if needed)
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

  getSortIcon(column: TableColumn): string {
    if (this.sortField !== column.field) return '';
    return this.sortOrder === 'asc' ? '↑' : '↓';
  }

  getCellValue(row: any, column: TableColumn): any {
    return row[column.field];
  }

  getColumnStyle(column: TableColumn): { [key: string]: string } {
    const style: { [key: string]: string } = {};
    if (column.width) {
      style['width'] = column.width;
    }
    if (column.align) {
      style['textAlign'] = column.align;
    }
    return style;
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }

  isAllSelected(): boolean {
    if (this.selectionMode !== 'multiple' || this.paginatedValue.length === 0) {
      return false;
    }
    return this.paginatedValue.every(row => this.isRowSelected(row));
  }

  toggleSelectAll(event: Event): void {
    if (this.selectionMode !== 'multiple') return;
    
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      // Select all visible rows
      this.paginatedValue.forEach(row => {
        if (!this.isRowSelected(row)) {
          this.selectedRows.push(row);
          this.onRowSelect.emit(row);
        }
      });
    } else {
      // Deselect all visible rows
      this.paginatedValue.forEach(row => {
        const index = this.selectedRows.indexOf(row);
        if (index > -1) {
          this.selectedRows.splice(index, 1);
          this.onRowUnselect.emit(row);
        }
      });
    }
    this.onSelectionChange.emit(this.selectedRows);
  }
}