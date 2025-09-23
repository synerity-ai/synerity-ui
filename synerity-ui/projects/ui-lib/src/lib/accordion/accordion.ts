import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'sui-accordion',
  standalone: true,
  imports: [NgFor],
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
  @Input() variant: 'default' | 'bordered' | 'minimal' = 'default';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Output() onOpen = new EventEmitter<any>();
  @Output() onClose = new EventEmitter<any>();
  @Output() onActiveIndexChange = new EventEmitter<number | number[]>();

  hoveredIndex: number | null = null;

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
    return `sui-accordion sui-accordion-${this.variant} sui-accordion-${this.size} ${this.styleClass}`.trim();
  }

  onMouseEnter(index: number): void {
    this.hoveredIndex = index;
  }

  onMouseLeave(): void {
    this.hoveredIndex = null;
  }
}
