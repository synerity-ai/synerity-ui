import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { Subscription, fromEvent } from 'rxjs';

interface SidebarMenuItem {
  label?: string;
  icon?: string;
  routerLink?: string;
  items?: SidebarMenuItem[];
  disabled?: boolean;
  separator?: boolean;
}

@Component({
  selector: 'sui-sidebar',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Sidebar implements OnInit, OnDestroy {
  @Input() visible = true;
  @Input() position: 'left' | 'right' = 'left';
  @Input() fullScreen = false;
  @Input() modal = false;
  @Input() dismissable = true;
  @Input() showCloseIcon = true;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() baseZIndex = 0;
  @Input() autoZIndex = true;
  @Input() appendTo: string | null = null;
  @Input() blockScroll = false;
  @Input() items: SidebarMenuItem[] = [];

  @Output() onShow = new EventEmitter<void>();
  @Output() onHide = new EventEmitter<void>();
  @Output() visibleChange = new EventEmitter<boolean>();

  @ViewChild('sidebar') sidebar!: ElementRef;

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
    if (this.dismissable && this.modal) {
      this.documentClickListener = fromEvent(document, 'click').subscribe((event: any) => {
        if (this.visible && this.sidebar && !this.sidebar.nativeElement.contains(event.target)) {
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

  getSidebarClass(): string {
    return `sui-sidebar sui-sidebar-${this.position} ${this.visible ? 'sui-sidebar-visible' : ''} ${this.fullScreen ? 'sui-sidebar-fullscreen' : ''} ${this.modal ? 'sui-sidebar-modal' : ''} ${this.styleClass}`.trim();
  }

  getSidebarStyle(): any {
    const zIndex = this.autoZIndex ? this.baseZIndex + 1000 : this.baseZIndex;
    return {
      zIndex,
      ...this.style
    };
  }

  onSidebarClick(event: Event): void {
    event.stopPropagation();
  }

  onCloseClick(): void {
    this.hide();
  }

  onMenuItemClick(item: SidebarMenuItem): void {
    if (!item.disabled && !item.separator) {
      // Handle menu item click
      console.log('Menu item clicked:', item.label);
    }
  }

  hasItems(): boolean {
    return this.items && this.items.length > 0;
  }

  hasSubItems(item: SidebarMenuItem): boolean {
    return !!(item.items && item.items.length > 0);
  }
}
