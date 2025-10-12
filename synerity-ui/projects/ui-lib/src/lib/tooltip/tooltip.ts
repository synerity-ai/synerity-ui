import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'sui-tooltip',
  imports: [NgIf],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tooltip implements AfterViewInit, OnDestroy {
  @Input() tooltip = '';
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input() showDelay = 0;
  @Input() hideDelay = 0;
  @Input() disabled = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onShow = new EventEmitter<void>();
  @Output() onHide = new EventEmitter<void>();

  @ViewChild('tooltipElement') tooltipElement!: ElementRef;
  @ViewChild('targetElement') targetElement!: ElementRef;

  visible = false;
  private showTimeout: any;
  private hideTimeout: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    if (this.targetElement) {
      this.setupEventListeners();
    }
  }

  ngOnDestroy(): void {
    this.clearTimeouts();
    this.removeEventListeners();
  }

  private setupEventListeners(): void {
    const target = this.targetElement.nativeElement;
    
    target.addEventListener('mouseenter', this.onMouseEnter.bind(this));
    target.addEventListener('mouseleave', this.onMouseLeave.bind(this));
    target.addEventListener('focus', this.onFocus.bind(this));
    target.addEventListener('blur', this.onBlur.bind(this));
  }

  private removeEventListeners(): void {
    const target = this.targetElement?.nativeElement;
    if (!target) return;
    
    target.removeEventListener('mouseenter', this.onMouseEnter.bind(this));
    target.removeEventListener('mouseleave', this.onMouseLeave.bind(this));
    target.removeEventListener('focus', this.onFocus.bind(this));
    target.removeEventListener('blur', this.onBlur.bind(this));
  }

  private onMouseEnter(): void {
    if (this.disabled || !this.tooltip) return;
    
    this.clearTimeouts();
    this.showTimeout = setTimeout(() => {
      this.show();
    }, this.showDelay);
  }

  private onMouseLeave(): void {
    this.clearTimeouts();
    this.hideTimeout = setTimeout(() => {
      this.hide();
    }, this.hideDelay);
  }

  private onFocus(): void {
    if (this.disabled || !this.tooltip) return;
    this.show();
  }

  private onBlur(): void {
    this.hide();
  }

  private show(): void {
    this.visible = true;
    this.cdr.markForCheck();
    this.onShow.emit();
    // Use setTimeout to ensure DOM is updated before positioning
    setTimeout(() => {
      this.updatePosition();
      this.addShowClass();
      this.setupTooltipListeners();
    }, 0);
  }

  private setupTooltipListeners(): void {
    if (!this.tooltipElement) return;
    
    const tooltip = this.tooltipElement.nativeElement;
    tooltip.addEventListener('mouseenter', () => {
      this.clearTimeouts();
    });
    tooltip.addEventListener('mouseleave', () => {
      this.hide();
    });
  }

  private hide(): void {
    this.visible = false;
    this.cdr.markForCheck();
    this.onHide.emit();
  }

  private addShowClass(): void {
    if (this.tooltipElement) {
      this.tooltipElement.nativeElement.classList.add('show');
    }
  }

  private updatePosition(): void {
    if (!this.tooltipElement || !this.targetElement) return;
    
    const targetRect = this.targetElement.nativeElement.getBoundingClientRect();
    const tooltipEl = this.tooltipElement.nativeElement;
    const tooltipRect = tooltipEl.getBoundingClientRect();
    
    let top = 0;
    let left = 0;
    
    const spacing = 12; // Space between target and tooltip
    
    switch (this.position) {
      case 'top':
        top = targetRect.top - tooltipRect.height - spacing;
        left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
        break;
      case 'bottom':
        top = targetRect.bottom + spacing;
        left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
        left = targetRect.left - tooltipRect.width - spacing;
        break;
      case 'right':
        top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
        left = targetRect.right + spacing;
        break;
    }
    
    // Ensure tooltip stays within viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    if (left < 8) left = 8;
    if (left + tooltipRect.width > viewportWidth - 8) {
      left = viewportWidth - tooltipRect.width - 8;
    }
    if (top < 8) top = 8;
    if (top + tooltipRect.height > viewportHeight - 8) {
      top = viewportHeight - tooltipRect.height - 8;
    }
    
    tooltipEl.style.top = `${top}px`;
    tooltipEl.style.left = `${left}px`;
  }

  private clearTimeouts(): void {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }

  getTooltipClass(): string {
    const baseClass = `sui-tooltip sui-tooltip-${this.position}`;
    const showClass = this.visible ? 'show' : '';
    return `${baseClass} ${showClass} ${this.styleClass}`.trim();
  }

  getTooltipStyle(): any {
    return {
      ...this.style
    };
  }

}
