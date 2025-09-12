import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-order-list',
  imports: [NgFor, NgIf],
  templateUrl: './order-list.html',
  styleUrl: './order-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderList {
  @Input() value: any[] = [];
  @Input() header = '';
  @Input() listStyle: any = {};
  @Input() dragdrop = false;
  @Input() filter = false;
  @Input() filterPlaceholder = 'Search';
  @Output() onReorder = new EventEmitter<any>();
  @Output() onSelectionChange = new EventEmitter<any>();

  selectedItems: any[] = [];
  filteredValue: any[] = [];
  filterValue = '';

  ngOnInit(): void {
    this.filteredValue = [...this.value];
  }

  onFilter(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.filterValue = target.value.toLowerCase();
    this.filteredValue = this.value.filter(item => 
      JSON.stringify(item).toLowerCase().includes(this.filterValue)
    );
  }

  onItemSelect(item: any): void {
    const index = this.selectedItems.indexOf(item);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    } else {
      this.selectedItems.push(item);
    }
    this.onSelectionChange.emit(this.selectedItems);
  }

  isSelected(item: any): boolean {
    return this.selectedItems.includes(item);
  }

  moveUp(index: number): void {
    if (index > 0) {
      const item = this.filteredValue.splice(index, 1)[0];
      this.filteredValue.splice(index - 1, 0, item);
      this.onReorder.emit({ items: this.filteredValue, direction: 'up', index });
    }
  }

  moveDown(index: number): void {
    if (index < this.filteredValue.length - 1) {
      const item = this.filteredValue.splice(index, 1)[0];
      this.filteredValue.splice(index + 1, 0, item);
      this.onReorder.emit({ items: this.filteredValue, direction: 'down', index });
    }
  }
}
