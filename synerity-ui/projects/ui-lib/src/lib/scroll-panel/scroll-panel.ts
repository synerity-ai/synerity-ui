import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'sui-scroll-panel',
  imports: [],
  templateUrl: './scroll-panel.html',
  styleUrl: './scroll-panel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollPanel implements AfterViewInit {
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() scrollHeight = '200px';
  @Input() scrollWidth = '100%';
  @Input() showScrollbars = true;
  @Output() onScroll = new EventEmitter<any>();

  @ViewChild('scrollElement') scrollElement!: ElementRef;

  ngAfterViewInit(): void {
    if (this.scrollElement) {
      this.scrollElement.nativeElement.addEventListener('scroll', this.onScrollEvent.bind(this));
    }
  }

  onScrollEvent(event: Event): void {
    const target = event.target as HTMLElement;
    this.onScroll.emit({
      scrollTop: target.scrollTop,
      scrollLeft: target.scrollLeft,
      scrollHeight: target.scrollHeight,
      scrollWidth: target.scrollWidth,
      clientHeight: target.clientHeight,
      clientWidth: target.clientWidth
    });
  }

  scrollToTop(): void {
    if (this.scrollElement) {
      this.scrollElement.nativeElement.scrollTop = 0;
    }
  }

  scrollToBottom(): void {
    if (this.scrollElement) {
      const element = this.scrollElement.nativeElement;
      element.scrollTop = element.scrollHeight;
    }
  }

  scrollToLeft(): void {
    if (this.scrollElement) {
      this.scrollElement.nativeElement.scrollLeft = 0;
    }
  }

  scrollToRight(): void {
    if (this.scrollElement) {
      const element = this.scrollElement.nativeElement;
      element.scrollLeft = element.scrollWidth;
    }
  }

  getScrollPanelClass(): string {
    return `sui-scroll-panel ${this.styleClass}`.trim();
  }

  getScrollPanelStyle(): any {
    return {
      height: this.scrollHeight,
      width: this.scrollWidth,
      ...this.style
    };
  }
}
