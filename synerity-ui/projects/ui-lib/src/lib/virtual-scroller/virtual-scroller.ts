import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'sui-virtual-scroller',
  imports: [NgFor],
  templateUrl: './virtual-scroller.html',
  styleUrl: './virtual-scroller.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VirtualScroller implements OnInit, OnDestroy {
  @Input() value: any[] = [];
  @Input() itemSize = 50;
  @Input() scrollHeight = '200px';
  @Input() scrollWidth = '100%';
  @Input() orientation: 'vertical' | 'horizontal' = 'vertical';
  @Input() lazy = false;
  @Input() delay = 0;
  @Output() onLazyLoad = new EventEmitter<any>();
  @Output() onScroll = new EventEmitter<any>();
  @Output() onScrollIndexChange = new EventEmitter<any>();

  @ViewChild('scrollElement') scrollElement!: ElementRef;

  visibleItems: any[] = [];
  startIndex = 0;
  endIndex = 0;
  scrollTop = 0;
  scrollLeft = 0;
  private scrollTimeout: any;

  ngOnInit(): void {
    this.calculateVisibleItems();
  }

  ngOnDestroy(): void {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }

  onScrollEvent(event: Event): void {
    const target = event.target as HTMLElement;
    this.scrollTop = target.scrollTop;
    this.scrollLeft = target.scrollLeft;
    
    this.calculateVisibleItems();
    
    this.onScroll.emit({
      scrollTop: this.scrollTop,
      scrollLeft: this.scrollLeft
    });

    this.onScrollIndexChange.emit({
      first: this.startIndex,
      last: this.endIndex
    });

    if (this.lazy) {
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }
      
      this.scrollTimeout = setTimeout(() => {
        this.onLazyLoad.emit({
          first: this.startIndex,
          last: this.endIndex
        });
      }, this.delay);
    }
  }

  private calculateVisibleItems(): void {
    const containerHeight = this.scrollElement?.nativeElement?.clientHeight || 200;
    const containerWidth = this.scrollElement?.nativeElement?.clientWidth || 200;
    
    if (this.orientation === 'vertical') {
      this.startIndex = Math.floor(this.scrollTop / this.itemSize);
      this.endIndex = Math.min(
        this.value.length - 1,
        Math.ceil((this.scrollTop + containerHeight) / this.itemSize)
      );
    } else {
      this.startIndex = Math.floor(this.scrollLeft / this.itemSize);
      this.endIndex = Math.min(
        this.value.length - 1,
        Math.ceil((this.scrollLeft + containerWidth) / this.itemSize)
      );
    }
    
    this.visibleItems = this.value.slice(this.startIndex, this.endIndex + 1);
  }

  getTotalHeight(): string {
    return this.orientation === 'vertical' ? `${this.value.length * this.itemSize}px` : '100%';
  }

  getTotalWidth(): string {
    return this.orientation === 'horizontal' ? `${this.value.length * this.itemSize}px` : '100%';
  }

  getItemStyle(index: number): any {
    const offset = (this.startIndex + index) * this.itemSize;
    return {
      position: 'absolute',
      [this.orientation === 'vertical' ? 'top' : 'left']: `${offset}px`,
      [this.orientation === 'vertical' ? 'height' : 'width']: `${this.itemSize}px`,
      [this.orientation === 'vertical' ? 'width' : 'height']: '100%'
    };
  }
}
