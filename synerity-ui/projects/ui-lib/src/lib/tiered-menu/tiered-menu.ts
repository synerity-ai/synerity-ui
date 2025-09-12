import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { Subscription, fromEvent } from 'rxjs';

interface TieredMenuItem {
  label?: string;
  icon?: string;
  command?: () => void;
  disabled?: boolean;
  items?: TieredMenuItem[];
}

@Component({
  selector: 'sui-tiered-menu',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './tiered-menu.html',
  styleUrl: './tiered-menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TieredMenu implements OnDestroy {
  @Input() model: TieredMenuItem[] = [];
  @Input() popup = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onItemClick = new EventEmitter<TieredMenuItem>();

  @ViewChild('menuElement') menuElement!: ElementRef;

  activeItem: TieredMenuItem | null = null;
  private documentClickListener!: Subscription;

  ngOnDestroy(): void {
    this.unbindDocumentClickListener();
  }

  onItemClickHandler(event: Event, item: TieredMenuItem): void {
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

  hasSubmenu(item: TieredMenuItem): boolean {
    return !!(item.items && item.items.length > 0);
  }

  getMenuClass(): string {
    return `sui-tiered-menu ${this.styleClass}`.trim();
  }

  getMenuStyle(): any {
    return {
      ...this.style
    };
  }

  getItemClass(item: TieredMenuItem): string {
    return `sui-tiered-menu-item ${item.disabled ? 'sui-tiered-menu-item-disabled' : ''} ${this.activeItem === item ? 'sui-tiered-menu-item-active' : ''}`.trim();
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
