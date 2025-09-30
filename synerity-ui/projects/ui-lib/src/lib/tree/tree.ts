import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-tree',
  imports: [NgFor, NgIf],
  templateUrl: './tree.html',
  styleUrl: './tree.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tree {
  @Input() value: Array<{ 
    key: string; 
    label: string; 
    data?: any; 
    children?: any[];
    expanded?: boolean;
    selectable?: boolean;
  }> = [];
  @Input() selectionMode: 'single' | 'multiple' | 'checkbox' | null = null;
  @Input() metaKeySelection = true;
  @Input() propagateSelectionUp = true;
  @Input() propagateSelectionDown = true;
  @Input() filter = false;
  @Input() filterPlaceholder = 'Search';
  @Input() filterBy = 'label';
  @Output() onNodeSelect = new EventEmitter<any>();
  @Output() onNodeUnselect = new EventEmitter<any>();
  @Output() onNodeExpand = new EventEmitter<any>();
  @Output() onNodeCollapse = new EventEmitter<any>();
  @Output() onSelectionChange = new EventEmitter<any>();

  selectedNodes: any[] = [];
  filterValue = '';

  get filteredValue(): any[] {
    if (!this.filter || !this.filterValue) {
      return this.value;
    }
    return this.filterNodes(this.value, this.filterValue);
  }

  private filterNodes(nodes: any[], filter: string): any[] {
    return nodes.filter(node => {
      const matches = node[this.filterBy]?.toLowerCase().includes(filter.toLowerCase());
      const hasMatchingChildren = node.children ? this.filterNodes(node.children, filter).length > 0 : false;
      return matches || hasMatchingChildren;
    }).map(node => ({
      ...node,
      children: node.children ? this.filterNodes(node.children, filter) : undefined
    }));
  }

  onFilter(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.filterValue = target.value;
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
}
