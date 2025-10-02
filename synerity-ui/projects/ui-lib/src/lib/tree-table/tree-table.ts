import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-tree-table',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './tree-table.html',
  styleUrl: './tree-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeTable {
  @Input() value: Array<{ 
    key: string; 
    data: any; 
    children?: any[];
    expanded?: boolean;
    selectable?: boolean;
  }> = [];
  @Input() columns: Array<{ field: string; header: string; sortable?: boolean; filterable?: boolean }> = [];
  @Input() selectionMode: 'single' | 'multiple' | 'checkbox' | null = null;
  @Input() metaKeySelection = true;
  @Input() propagateSelectionUp = true;
  @Input() propagateSelectionDown = true;
  @Input() sortField = '';
  @Input() sortOrder: 'asc' | 'desc' = 'asc';
  @Input() emptyMessage = 'No records found';
  @Output() onNodeSelect = new EventEmitter<any>();
  @Output() onNodeUnselect = new EventEmitter<any>();
  @Output() onNodeExpand = new EventEmitter<any>();
  @Output() onNodeCollapse = new EventEmitter<any>();
  @Output() onSort = new EventEmitter<any>();
  @Output() onSelectionChange = new EventEmitter<any>();

  selectedNodes: any[] = [];

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

  toggleNode(node: any): void {
    if (node.children && node.children.length > 0) {
      node.expanded = !node.expanded;
      if (node.expanded) {
        this.onNodeExpand.emit(node);
      } else {
        this.onNodeCollapse.emit(node);
      }
    }
  }

  onNodeClick(node: any, event?: Event): void {
    if (event && this.metaKeySelection && event instanceof MouseEvent) {
      event.preventDefault();
    }

    if (this.selectionMode === 'single') {
      this.selectedNodes = [node];
      this.onNodeSelect.emit(node);
    } else if (this.selectionMode === 'multiple' || this.selectionMode === 'checkbox') {
      const index = this.selectedNodes.indexOf(node);
      if (index > -1) {
        this.selectedNodes.splice(index, 1);
        this.onNodeUnselect.emit(node);
      } else {
        this.selectedNodes.push(node);
        this.onNodeSelect.emit(node);
      }
    }
    
    this.onSelectionChange.emit(this.selectedNodes);
  }

  isNodeSelected(node: any): boolean {
    return this.selectedNodes.includes(node);
  }

  hasChildren(node: any): boolean {
    return node.children && node.children.length > 0;
  }

  getSortIcon(column: { field: string; header: string; sortable?: boolean }): string {
    if (this.sortField !== column.field) return '↕';
    return this.sortOrder === 'asc' ? '↑' : '↓';
  }

  getNodeValue(node: any, field: string): any {
    return node.data ? node.data[field] : node[field];
  }
}
