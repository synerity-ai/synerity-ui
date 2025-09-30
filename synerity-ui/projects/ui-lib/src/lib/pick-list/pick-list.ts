import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-pick-list',
  imports: [NgFor, NgIf],
  templateUrl: './pick-list.html',
  styleUrl: './pick-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PickList {
  @Input() source: any[] = [];
  @Input() target: any[] = [];
  @Input() sourceHeader = 'Available';
  @Input() targetHeader = 'Selected';
  @Input() filter = true;
  @Input() filterPlaceholder = 'Search';
  @Input() dragdrop = false;
  @Input() showSourceControls = true;
  @Input() showTargetControls = true;
  @Output() onMoveToTarget = new EventEmitter<any>();
  @Output() onMoveToSource = new EventEmitter<any>();
  @Output() onMoveAllToTarget = new EventEmitter<any>();
  @Output() onMoveAllToSource = new EventEmitter<any>();

  sourceFilterValue = '';
  targetFilterValue = '';
  selectedSourceItems: any[] = [];
  selectedTargetItems: any[] = [];

  get filteredSource(): any[] {
    if (!this.filter || !this.sourceFilterValue) {
      return this.source;
    }
    return this.source.filter(item => 
      JSON.stringify(item).toLowerCase().includes(this.sourceFilterValue.toLowerCase())
    );
  }

  get filteredTarget(): any[] {
    if (!this.filter || !this.targetFilterValue) {
      return this.target;
    }
    return this.target.filter(item => 
      JSON.stringify(item).toLowerCase().includes(this.targetFilterValue.toLowerCase())
    );
  }

  onSourceFilter(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.sourceFilterValue = target.value;
  }

  onTargetFilter(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.targetFilterValue = target.value;
  }

  selectSourceItem(item: any): void {
    const index = this.selectedSourceItems.indexOf(item);
    if (index > -1) {
      this.selectedSourceItems.splice(index, 1);
    } else {
      this.selectedSourceItems.push(item);
    }
  }

  selectTargetItem(item: any): void {
    const index = this.selectedTargetItems.indexOf(item);
    if (index > -1) {
      this.selectedTargetItems.splice(index, 1);
    } else {
      this.selectedTargetItems.push(item);
    }
  }

  isSourceSelected(item: any): boolean {
    return this.selectedSourceItems.includes(item);
  }

  isTargetSelected(item: any): boolean {
    return this.selectedTargetItems.includes(item);
  }

  moveToTarget(): void {
    this.selectedSourceItems.forEach(item => {
      const sourceIndex = this.source.indexOf(item);
      if (sourceIndex > -1) {
        this.source.splice(sourceIndex, 1);
        this.target.push(item);
      }
    });
    this.onMoveToTarget.emit({ items: this.selectedSourceItems });
    this.selectedSourceItems = [];
  }

  moveToSource(): void {
    this.selectedTargetItems.forEach(item => {
      const targetIndex = this.target.indexOf(item);
      if (targetIndex > -1) {
        this.target.splice(targetIndex, 1);
        this.source.push(item);
      }
    });
    this.onMoveToSource.emit({ items: this.selectedTargetItems });
    this.selectedTargetItems = [];
  }

  moveAllToTarget(): void {
    const items = [...this.source];
    this.target.push(...items);
    this.source = [];
    this.onMoveAllToTarget.emit({ items });
  }

  moveAllToSource(): void {
    const items = [...this.target];
    this.source.push(...items);
    this.target = [];
    this.onMoveAllToSource.emit({ items });
  }
}
