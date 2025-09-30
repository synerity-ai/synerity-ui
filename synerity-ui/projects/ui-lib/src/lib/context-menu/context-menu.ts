import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { Subscription, fromEvent } from 'rxjs';

interface MenuItem {
  label?: string;
  icon?: string;
  command?: () => void;
  disabled?: boolean;
  separator?: boolean;
  items?: MenuItem[];
}

@Component({
  selector: 'sui-context-menu',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './context-menu.html',
  styleUrl: './context-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenu implements OnDestroy {
  @Input() model: MenuItem[] = [];
  @Input() appendTo: 'body' | 'target' | ElementRef | string = 'body';
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onShow = new EventEmitter<void>();
  @Output() onHide = new EventEmitter<void>();

  @ViewChild('menuElement') menuElement!: ElementRef;

  visible = false;
  activeItem: MenuItem | null = null;
  private documentClickListener!: Subscription;
  private contextMenuListener!: Subscription;

  ngOnDestroy(): void {
    this.unbindDocumentClickListener();
    this.unbindContextMenuListener();
  }

  show(event: MouseEvent): void {
    event.preventDefault();
    this.visible = true;
    this.onShow.emit();
    this.bindDocumentClickListener();
    this.positionMenu(event);
  }

  hide(): void {
    this.visible = false;
    this.onHide.emit();
    this.unbindDocumentClickListener();
    this.activeItem = null;
  }

  onItemClick(event: Event, item: MenuItem): void {
    if (item.disabled || item.separator) {
      event.preventDefault();
      return;
    }

    if (item.command) {
      item.command();
    }

    if (!item.items || item.items.length === 0) {
      this.hide();
    } else {
      this.activeItem = this.activeItem === item ? null : item;
    }
    event.stopPropagation();
  }

  hasSubmenu(item: MenuItem): boolean {
    return !!(item.items && item.items.length > 0);
  }

  private positionMenu(event: MouseEvent): void {
    if (!this.menuElement) return;
    
    const menuEl = this.menuElement.nativeElement;
    const menuRect = menuEl.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let left = event.clientX;
    let top = event.clientY;

    // Adjust if menu would go off screen
    if (left + menuRect.width > viewportWidth) {
      left = viewportWidth - menuRect.width - 10;
    }
    if (top + menuRect.height > viewportHeight) {
      top = viewportHeight - menuRect.height - 10;
    }

    menuEl.style.position = 'fixed';
    menuEl.style.left = `${left}px`;
    menuEl.style.top = `${top}px`;
    menuEl.style.zIndex = '1000';
  }

  private bindDocumentClickListener(): void {
    if (!this.documentClickListener) {
      this.documentClickListener = fromEvent(document, 'click').subscribe(() => {
        if (this.visible) {
          this.hide();
        }
      });
    }
  }

  private unbindDocumentClickListener(): void {
    if (this.documentClickListener) {
      this.documentClickListener.unsubscribe();
      this.documentClickListener = null!;
    }
  }

  private bindContextMenuListener(): void {
    if (!this.contextMenuListener) {
      this.contextMenuListener = fromEvent(document, 'contextmenu').subscribe((event: any) => {
        this.show(event);
      });
    }
  }

  private unbindContextMenuListener(): void {
    if (this.contextMenuListener) {
      this.contextMenuListener.unsubscribe();
      this.contextMenuListener = null!;
    }
  }
}
