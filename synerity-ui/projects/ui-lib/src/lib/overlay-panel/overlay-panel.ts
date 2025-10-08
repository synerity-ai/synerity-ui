import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'sui-overlay-panel',
  imports: [CommonModule, NgIf],
  templateUrl: './overlay-panel.html',
  styleUrl: './overlay-panel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayPanel implements OnInit, OnDestroy {
  @Input() visible = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() appendTo: string | null = null;
  @Input() showCloseIcon = true;
  @Input() dismissable = true;
  @Input() modal = false;
  @Input() baseZIndex = 0;
  @Input() autoZIndex = true;
  @Input() showTransitionOptions = '225ms ease-out';
  @Input() hideTransitionOptions = '195ms ease-in';
  @Input() size: 'small' | 'normal' | 'large' = 'normal';
  @Input() position: 'top' | 'bottom' | 'left' | 'right' | null = null;

  @Output() onShow = new EventEmitter<void>();
  @Output() onHide = new EventEmitter<void>();
  @Output() visibleChange = new EventEmitter<boolean>();

  @ViewChild('overlayPanel') overlayPanel!: ElementRef;

  private documentClickListener!: Subscription;
  private documentKeydownListener!: Subscription;

  ngOnInit(): void {
    this.bindDocumentListeners();
  }

  ngOnDestroy(): void {
    this.unbindDocumentListeners();
  }

  show(): void {
    this.visible = true;
    this.visibleChange.emit(true);
    this.onShow.emit();
  }

  hide(): void {
    this.visible = false;
    this.visibleChange.emit(false);
    this.onHide.emit();
  }

  toggle(): void {
    if (this.visible) {
      this.hide();
    } else {
      this.show();
    }
  }

  private bindDocumentListeners(): void {
    if (this.dismissable) {
      this.documentClickListener = fromEvent(document, 'click').subscribe((event: any) => {
        if (this.visible && this.overlayPanel && !this.overlayPanel.nativeElement.contains(event.target)) {
          this.hide();
        }
      });
    }

    if (this.dismissable) {
      this.documentKeydownListener = fromEvent(document, 'keydown').subscribe((event: any) => {
        if (this.visible && event.key === 'Escape') {
          this.hide();
        }
      });
    }
  }

  private unbindDocumentListeners(): void {
    if (this.documentClickListener) {
      this.documentClickListener.unsubscribe();
    }
    if (this.documentKeydownListener) {
      this.documentKeydownListener.unsubscribe();
    }
  }

  getOverlayPanelClass(): string {
    let classes = 'sui-overlay-panel';
    
    // Visibility state
    if (this.visible) {
      classes += ' sui-overlay-panel-visible';
    }
    
    // Modal variant
    if (this.modal) {
      classes += ' sui-overlay-panel-modal';
    }
    
    // Size variant
    if (this.size !== 'normal') {
      classes += ` sui-overlay-panel-${this.size}`;
    }
    
    // Position variant
    if (this.position) {
      classes += ` sui-overlay-panel-${this.position}`;
    }
    
    // Custom class
    if (this.styleClass) {
      classes += ` ${this.styleClass}`;
    }
    
    return classes.trim();
  }

  getOverlayPanelStyle(): any {
    const zIndex = this.autoZIndex ? this.baseZIndex + 1000 : this.baseZIndex;
    return {
      zIndex,
      ...this.style
    };
  }

  onOverlayPanelClick(event: Event): void {
    event.stopPropagation();
  }

  onCloseClick(): void {
    this.hide();
  }
}
