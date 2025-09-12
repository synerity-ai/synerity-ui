import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'sui-animate-on-scroll',
  imports: [CommonModule],
  templateUrl: './animate-on-scroll.html',
  styleUrl: './animate-on-scroll.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimateOnScroll implements OnInit, OnDestroy {
  @Input() animation = 'fadeInUp';
  @Input() threshold = 0.1;
  @Input() delay = 0;
  @Input() duration = 1000;
  @Input() once = true;
  @Input() style: any = {};
  @Input() styleClass = '';

  @ViewChild('content') content!: ElementRef;

  isVisible = false;
  hasAnimated = false;
  private scrollSubscription!: Subscription;

  ngOnInit(): void {
    this.bindScrollListener();
    this.checkVisibility();
  }

  ngOnDestroy(): void {
    this.unbindScrollListener();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkVisibility();
  }

  private bindScrollListener(): void {
    this.scrollSubscription = fromEvent(window, 'scroll')
      .pipe(debounceTime(10))
      .subscribe(() => {
        this.checkVisibility();
      });
  }

  private unbindScrollListener(): void {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }

  private checkVisibility(): void {
    if (!this.content || (this.once && this.hasAnimated)) return;

    const element = this.content.nativeElement;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const isInViewport = (
      rect.top >= -rect.height * this.threshold &&
      rect.left >= -rect.width * this.threshold &&
      rect.bottom <= windowHeight + rect.height * this.threshold &&
      rect.right <= windowWidth + rect.width * this.threshold
    );

    if (isInViewport && !this.isVisible) {
      this.isVisible = true;
      this.hasAnimated = true;
    } else if (!isInViewport && !this.once) {
      this.isVisible = false;
    }
  }

  getAnimationClass(): string {
    return `sui-animate-on-scroll sui-animate-${this.animation} ${this.isVisible ? 'sui-animate-visible' : 'sui-animate-hidden'} ${this.styleClass}`.trim();
  }

  getAnimationStyle(): any {
    return {
      animationDelay: `${this.delay}ms`,
      animationDuration: `${this.duration}ms`,
      ...this.style
    };
  }
}
