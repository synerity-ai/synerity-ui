import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
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

  ngAfterViewInit(): void {
    if (this.targetElement) {
      this.setupEventListeners();
    }
  }

  ngOnDestroy(): void {
    this.clearTimeouts();
  }

  private setupEventListeners(): void {
    const target = this.targetElement.nativeElement;
    
    target.addEventListener('mouseenter', this.onMouseEnter.bind(this));
    target.addEventListener('mouseleave', this.onMouseLeave.bind(this));
    target.addEventListener('focus', this.onFocus.bind(this));
    target.addEventListener('blur', this.onBlur.bind(this));
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
    this.onShow.emit();
    this.updatePosition();
  }

  private hide(): void {
    this.visible = false;
    this.onHide.emit();
  }

  private updatePosition(): void {
    if (!this.tooltipElement || !this.targetElement) return;
    
    const targetRect = this.targetElement.nativeElement.getBoundingClientRect();
    const tooltipRect = this.tooltipElement.nativeElement.getBoundingClientRect();
    
    let top = 0;
    let left = 0;
    
    switch (this.position) {
      case 'top':
        top = targetRect.top - tooltipRect.height - 8;
        left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
        break;
      case 'bottom':
        top = targetRect.bottom + 8;
        left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
        left = targetRect.left - tooltipRect.width - 8;
        break;
      case 'right':
        top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
        left = targetRect.right + 8;
        break;
    }
    
    this.tooltipElement.nativeElement.style.top = `${top}px`;
    this.tooltipElement.nativeElement.style.left = `${left}px`;
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
    return `sui-tooltip sui-tooltip-${this.position} ${this.styleClass}`.trim();
  }

  getTooltipStyle(): any {
    return {
      ...this.style
    };
  }

  getArrowClass(): string {
    const positionClasses = {
      'top': '-bottom-1 left-1/2 transform -translate-x-1/2',
      'bottom': '-top-1 left-1/2 transform -translate-x-1/2',
      'left': '-right-1 top-1/2 transform -translate-y-1/2',
      'right': '-left-1 top-1/2 transform -translate-y-1/2'
    };

    return positionClasses[this.position];
  }
}
