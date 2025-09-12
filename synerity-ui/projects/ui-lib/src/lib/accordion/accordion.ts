import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-accordion',
  imports: [NgFor, NgIf],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Accordion {
  @Input() multiple = false;
  @Input() activeIndex: number | number[] = 0;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() tabs: Array<{ header: string; content?: any }> = [];
  @Output() onOpen = new EventEmitter<any>();
  @Output() onClose = new EventEmitter<any>();
  @Output() onActiveIndexChange = new EventEmitter<number | number[]>();

  isActive(index: number): boolean {
    if (this.multiple) {
      return Array.isArray(this.activeIndex) && this.activeIndex.includes(index);
    }
    return this.activeIndex === index;
  }

  toggle(index: number): void {
    if (this.multiple) {
      const activeIndexes = Array.isArray(this.activeIndex) ? [...this.activeIndex] : [];
      const currentIndex = activeIndexes.indexOf(index);
      
      if (currentIndex > -1) {
        activeIndexes.splice(currentIndex, 1);
        this.onClose.emit({ index });
      } else {
        activeIndexes.push(index);
        this.onOpen.emit({ index });
      }
      
      this.activeIndex = activeIndexes;
    } else {
      if (this.activeIndex === index) {
        this.activeIndex = -1;
        this.onClose.emit({ index });
      } else {
        this.activeIndex = index;
        this.onOpen.emit({ index });
      }
    }
    
    this.onActiveIndexChange.emit(this.activeIndex);
  }

  getAccordionClass(): string {
    return `sui-accordion ${this.styleClass}`.trim();
  }
}
