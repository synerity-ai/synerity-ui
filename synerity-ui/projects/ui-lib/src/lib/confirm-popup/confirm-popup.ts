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
    return `sui-confirm-popup sui-confirm-popup-${this.position} ${this.styleClass}`.trim();
  }

  getPopupStyle(): any {
    return {
      ...this.style
    };
  }
}
