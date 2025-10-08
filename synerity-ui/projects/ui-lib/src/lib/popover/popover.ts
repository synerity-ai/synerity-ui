import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'sui-popover',
  imports: [NgIf],
  templateUrl: './popover.html',
  styleUrl: './popover.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Popover implements AfterViewInit, OnDestroy {
  @Input() visible = false;
  @Input() position: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'bottom';
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() dismissible = true;
  @Input() showCloseIcon = false;
  @Output() onShow = new EventEmitter<void>();
  @Output() onHide = new EventEmitter<void>();

  @ViewChild('popoverElement') popoverElement!: ElementRef;
  @ViewChild('targetElement') targetElement!: ElementRef;

  ngAfterViewInit(): void {
    if (this.dismissible) {
      this.setupEventListeners();
    }
  }

  ngOnDestroy(): void {
    this.removeEventListeners();
  }

  private setupEventListeners(): void {
    document.addEventListener('click', this.onDocumentClick.bind(this));
  }

  private removeEventListeners(): void {
    document.removeEventListener('click', this.onDocumentClick.bind(this));
  }

  private onDocumentClick(event: Event): void {
    if (!this.visible || !this.dismissible) return;
    
    const target = event.target as HTMLElement;
    const isInsidePopover = this.popoverElement?.nativeElement.contains(target);
    const isInsideTarget = this.targetElement?.nativeElement.contains(target);
    
    if (!isInsidePopover && !isInsideTarget) {
      this.hide();
    }
  }

  show(): void {
    this.visible = true;
    this.onShow.emit();
    this.updatePosition();
  }

  hide(): void {
    this.visible = false;
    this.onHide.emit();
  }

  toggle(): void {
    if (this.visible) {
      this.hide();
    } else {
      this.show();
    }
  }

  private updatePosition(): void {
    if (!this.popoverElement || !this.targetElement) return;
    
    const targetRect = this.targetElement.nativeElement.getBoundingClientRect();
    const popoverRect = this.popoverElement.nativeElement.getBoundingClientRect();
    
    let top = 0;
    let left = 0;
    
    switch (this.position) {
      case 'top':
        top = targetRect.top - popoverRect.height - 8;
        left = targetRect.left + (targetRect.width - popoverRect.width) / 2;
        break;
      case 'bottom':
        top = targetRect.bottom + 8;
        left = targetRect.left + (targetRect.width - popoverRect.width) / 2;
        break;
      case 'left':
        top = targetRect.top + (targetRect.height - popoverRect.height) / 2;
        left = targetRect.left - popoverRect.width - 8;
        break;
      case 'right':
        top = targetRect.top + (targetRect.height - popoverRect.height) / 2;
        left = targetRect.right + 8;
        break;
      case 'top-left':
        top = targetRect.top - popoverRect.height - 8;
        left = targetRect.left;
        break;
      case 'top-right':
        top = targetRect.top - popoverRect.height - 8;
        left = targetRect.right - popoverRect.width;
        break;
      case 'bottom-left':
        top = targetRect.bottom + 8;
        left = targetRect.left;
        break;
      case 'bottom-right':
        top = targetRect.bottom + 8;
        left = targetRect.right - popoverRect.width;
        break;
    }
    
    this.popoverElement.nativeElement.style.top = `${top}px`;
    this.popoverElement.nativeElement.style.left = `${left}px`;
  }

  getPopoverClass(): string {
    return `sui-popover sui-popover-${this.position} ${this.styleClass}`.trim();
  }

  getPopoverStyle(): any {
    return {
      ...this.style
    };
  }

  getArrowClass(): string {
    // The arrow styling is now handled by CSS classes in the SCSS file
    // This method can be simplified or removed as the CSS handles positioning
    return `popover-arrow popover-arrow-${this.position}`;
  }
}
