import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { Subscription, interval } from 'rxjs';

interface CarouselItem {
  src: string;
  alt?: string;
  title?: string;
  caption?: string;
}

@Component({
  selector: 'sui-carousel',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Carousel implements OnInit, OnDestroy {
  @Input() value: CarouselItem[] = [];
  @Input() activeIndex = 0;
  @Input() circular = true;
  @Input() autoplayInterval = 0;
  @Input() showIndicators = true;
  @Input() showNavigators = true;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onPageChange = new EventEmitter<number>();

  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  private autoplaySubscription!: Subscription;

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  next(): void {
    if (this.value.length === 0) return;

    if (this.circular) {
      this.activeIndex = (this.activeIndex + 1) % this.value.length;
    } else {
      this.activeIndex = Math.min(this.activeIndex + 1, this.value.length - 1);
    }

    this.onPageChange.emit(this.activeIndex);
  }

  prev(): void {
    if (this.value.length === 0) return;

    if (this.circular) {
      this.activeIndex = this.activeIndex === 0 ? this.value.length - 1 : this.activeIndex - 1;
    } else {
      this.activeIndex = Math.max(this.activeIndex - 1, 0);
    }

    this.onPageChange.emit(this.activeIndex);
  }

  goToPage(index: number): void {
    if (index >= 0 && index < this.value.length) {
      this.activeIndex = index;
      this.onPageChange.emit(this.activeIndex);
    }
  }

  private startAutoplay(): void {
    if (this.autoplayInterval > 0) {
      this.autoplaySubscription = interval(this.autoplayInterval).subscribe(() => {
        this.next();
      });
    }
  }

  private stopAutoplay(): void {
    if (this.autoplaySubscription) {
      this.autoplaySubscription.unsubscribe();
    }
  }

  getCarouselClass(): string {
    return `sui-carousel ${this.styleClass}`.trim();
  }

  getCarouselStyle(): any {
    return {
      ...this.style
    };
  }

  getActiveItem(): CarouselItem | null {
    return this.value[this.activeIndex] || null;
  }

  getTotalItems(): number {
    return this.value.length;
  }

  isFirstPage(): boolean {
    return this.activeIndex === 0;
  }

  isLastPage(): boolean {
    return this.activeIndex === this.value.length - 1;
  }
}
