import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'sui-overlay-panel',
  imports: [CommonModule, NgIf],
  templateUrl: './overlay-panel.html',
  styleUrl: './overlay-panel.css',
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
    return `sui-overlay-panel ${this.visible ? 'sui-overlay-panel-visible' : ''} ${this.modal ? 'sui-overlay-panel-modal' : ''} ${this.styleClass}`.trim();
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
