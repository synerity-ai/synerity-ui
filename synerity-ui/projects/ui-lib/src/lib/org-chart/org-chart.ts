import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-org-chart',
  imports: [NgFor, NgIf],
  templateUrl: './org-chart.html',
  styleUrl: './org-chart.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrgChart {
  @Input() value: Array<{ 
    key: string; 
    label: string; 
    data?: any; 
    children?: any[];
    expanded?: boolean;
    type?: string;
  }> = [];
  @Input() selectionMode: 'single' | 'multiple' | null = null;
  @Input() collapsible = true;
  @Input() orientation: 'vertical' | 'horizontal' = 'vertical';
  @Output() onNodeSelect = new EventEmitter<any>();
  @Output() onNodeUnselect = new EventEmitter<any>();
  @Output() onNodeExpand = new EventEmitter<any>();
  @Output() onNodeCollapse = new EventEmitter<any>();

  selectedNodes: any[] = [];

  toggleNode(node: any): void {
    if (this.collapsible && node.children && node.children.length > 0) {
      node.expanded = !node.expanded;
      if (node.expanded) {
        this.onNodeExpand.emit(node);
      } else {
        this.onNodeCollapse.emit(node);
      }
    }
  }

  onNodeClick(node: any): void {
    if (this.selectionMode === 'single') {
      this.selectedNodes = [node];
      this.onNodeSelect.emit(node);
    } else if (this.selectionMode === 'multiple') {
      const index = this.selectedNodes.indexOf(node);
      if (index > -1) {
        this.selectedNodes.splice(index, 1);
        this.onNodeUnselect.emit(node);
      } else {
        this.selectedNodes.push(node);
        this.onNodeSelect.emit(node);
      }
    }
  }

  isNodeSelected(node: any): boolean {
    return this.selectedNodes.includes(node);
  }

  hasChildren(node: any): boolean {
    return node.children && node.children.length > 0;
  }

  getOrientationClass(): string {
    return `sui-org-chart-${this.orientation}`;
  }

  getNodeTypeClass(node: any): string {
    return node.type ? `sui-org-chart-node-${node.type}` : '';
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj || {});
  }
}
