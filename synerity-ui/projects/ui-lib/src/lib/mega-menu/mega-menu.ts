import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { Subscription, fromEvent } from 'rxjs';

interface MegaMenuItem {
  label?: string;
  icon?: string;
  command?: () => void;
  disabled?: boolean;
  items?: MegaMenuItem[];
  columns?: MegaMenuItem[][];
}

@Component({
  selector: 'sui-mega-menu',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './mega-menu.html',
  styleUrl: './mega-menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MegaMenu implements OnDestroy {
  @Input() model: MegaMenuItem[] = [];
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onItemClick = new EventEmitter<MegaMenuItem>();

  @ViewChild('menuElement') menuElement!: ElementRef;

  activeItem: MegaMenuItem | null = null;
  private documentClickListener!: Subscription;

  ngOnDestroy(): void {
    this.unbindDocumentClickListener();
  }

  onItemClickHandler(event: Event, item: MegaMenuItem): void {
    if (item.disabled) {
      event.preventDefault();
      return;
    }

    if (item.command) {
      item.command();
    }

    if (item.items && item.items.length > 0) {
      this.activeItem = this.activeItem === item ? null : item;
    } else {
      this.activeItem = null;
    }

    this.onItemClick.emit(item);
    event.stopPropagation();
  }

  hasSubmenu(item: MegaMenuItem): boolean {
    return !!(item.items && item.items.length > 0) || !!(item.columns && item.columns.length > 0);
  }

  getMenuClass(): string {
    return `sui-mega-menu sui-mega-menu-${this.orientation} ${this.styleClass}`.trim();
  }

  getMenuStyle(): any {
    return {
      ...this.style
    };
  }

  private bindDocumentClickListener(): void {
    if (!this.documentClickListener) {
      this.documentClickListener = fromEvent(document, 'click').subscribe(() => {
        this.activeItem = null;
      });
    }
  }

  private unbindDocumentClickListener(): void {
    if (this.documentClickListener) {
      this.documentClickListener.unsubscribe();
      this.documentClickListener = null!;
    }
  }
}
