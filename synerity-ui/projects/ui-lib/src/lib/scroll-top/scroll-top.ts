import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'sui-scroll-top',
  imports: [CommonModule, NgIf],
  templateUrl: './scroll-top.html',
  styleUrl: './scroll-top.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollTop implements OnInit, OnDestroy {
  @Input() threshold = 400;
  @Input() icon = '↑';
  @Input() behavior: 'smooth' | 'auto' = 'smooth';
  @Input() style: any = {};
  @Input() styleClass = '';

  @ViewChild('scrollButton') scrollButton!: ElementRef;

  visible = false;
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

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: this.behavior
    });
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
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.visible = scrollTop > this.threshold;
  }

  getScrollTopClass(): string {
    return `sui-scroll-top ${this.visible ? 'sui-scroll-top-visible' : 'sui-scroll-top-hidden'} ${this.styleClass}`.trim();
  }

  getScrollTopStyle(): any {
    return {
      ...this.style
    };
  }

  isVisible(): boolean {
    return this.visible;
  }

  getIcon(): string {
    return this.icon;
  }
}
