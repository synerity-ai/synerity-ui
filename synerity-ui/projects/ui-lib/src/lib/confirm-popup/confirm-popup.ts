import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'sui-confirm-popup',
  imports: [NgIf],
  templateUrl: './confirm-popup.html',
  styleUrl: './confirm-popup.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmPopup implements AfterViewInit, OnDestroy {
  @Input() visible = false;
  @Input() message = 'Are you sure?';
  @Input() acceptLabel = 'Yes';
  @Input() rejectLabel = 'No';
  @Input() acceptIcon = '';
  @Input() rejectIcon = '';
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Output() onAccept = new EventEmitter<void>();
  @Output() onReject = new EventEmitter<void>();
  @Output() onHide = new EventEmitter<void>();

  @ViewChild('popupElement') popupElement!: ElementRef;
  @ViewChild('targetElement') targetElement!: ElementRef;

  ngAfterViewInit(): void {
    this.setupEventListeners();
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
    if (!this.visible) return;
    
    const target = event.target as HTMLElement;
    const isInsidePopup = this.popupElement?.nativeElement.contains(target);
    const isInsideTarget = this.targetElement?.nativeElement.contains(target);
    
    if (!isInsidePopup && !isInsideTarget) {
      this.hide();
    }
  }

  show(): void {
    this.visible = true;
    this.updatePosition();
  }

  hide(): void {
    this.visible = false;
    this.onHide.emit();
  }

  accept(): void {
    this.onAccept.emit();
    this.hide();
  }

  reject(): void {
    this.onReject.emit();
    this.hide();
  }

  private updatePosition(): void {
    if (!this.popupElement || !this.targetElement) return;
    
    const targetRect = this.targetElement.nativeElement.getBoundingClientRect();
    const popupRect = this.popupElement.nativeElement.getBoundingClientRect();
    
    let top = 0;
    let left = 0;
    
    switch (this.position) {
      case 'top':
        top = targetRect.top - popupRect.height - 8;
        left = targetRect.left + (targetRect.width - popupRect.width) / 2;
        break;
      case 'bottom':
        top = targetRect.bottom + 8;
        left = targetRect.left + (targetRect.width - popupRect.width) / 2;
        break;
      case 'left':
        top = targetRect.top + (targetRect.height - popupRect.height) / 2;
        left = targetRect.left - popupRect.width - 8;
        break;
      case 'right':
        top = targetRect.top + (targetRect.height - popupRect.height) / 2;
        left = targetRect.right + 8;
        break;
    }
    
    this.popupElement.nativeElement.style.top = `${top}px`;
    this.popupElement.nativeElement.style.left = `${left}px`;
  }

  getPopupClass(): string {
    const baseClasses = 'absolute z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-64';
    return `${baseClasses} ${this.styleClass}`.trim();
  }

  getArrowClass(): string {
    const baseClasses = 'absolute w-2 h-2 bg-white border border-gray-200 transform rotate-45';
    
    const positionClasses = {
      'top': '-bottom-1 left-1/2 transform -translate-x-1/2 border-t-0 border-l-0',
      'bottom': '-top-1 left-1/2 transform -translate-x-1/2 border-b-0 border-r-0',
      'left': '-right-1 top-1/2 transform -translate-y-1/2 border-l-0 border-b-0',
      'right': '-left-1 top-1/2 transform -translate-y-1/2 border-r-0 border-t-0'
    };
    
    return `${baseClasses} ${positionClasses[this.position]}`;
  }

  getPopupStyle(): any {
    return {
      ...this.style
    };
  }
}
