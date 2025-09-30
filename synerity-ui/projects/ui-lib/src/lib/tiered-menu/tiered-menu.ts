import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface TieredMenuItem {
  label?: string;
  icon?: string;
  command?: () => void;
  disabled?: boolean;
  separator?: boolean;
  items?: TieredMenuItem[];
}

@Component({
  selector: 'sui-tiered-menu',
  imports: [NgFor, NgIf],
  templateUrl: './tiered-menu.html',
  styleUrl: './tiered-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TieredMenu implements AfterViewInit, OnDestroy {
  @Input() model: TieredMenuItem[] = [];
  @Input() popup = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onItemClick = new EventEmitter<TieredMenuItem>();

  @ViewChild('menuElement') menuElement!: ElementRef;

  activeItem: TieredMenuItem | null = null;

  ngAfterViewInit(): void {
    if (this.popup) {
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
    if (!this.activeItem) return;

    const target = event.target as HTMLElement;
    const isInsideMenu = this.menuElement?.nativeElement.contains(target);

    if (!isInsideMenu) {
      this.activeItem = null;
    }
  }

  onItemClickHandler(event: Event, item: TieredMenuItem): void {
    if (item.disabled || item.separator) {
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

  onItemMouseEnter(item: TieredMenuItem): void {
    if (item.items && item.items.length > 0) {
      this.activeItem = item;
    }
  }

  onItemMouseLeave(): void {
    // Keep submenu open when hovering over submenu items
    setTimeout(() => {
      if (!this.isHoveringSubmenu()) {
        this.activeItem = null;
      }
    }, 100);
  }

  private isHoveringSubmenu(): boolean {
    // Check if mouse is over any submenu
    return false; // Simplified for now
  }

  hasSubmenu(item: TieredMenuItem): boolean {
    return !!(item.items && item.items.length > 0);
  }

  getMenuClass(): string {
    const baseClasses = 'flex items-center bg-white border-b border-gray-200 shadow-sm';
    return `${baseClasses} ${this.styleClass}`.trim();
  }

  getMenuStyle(): any {
    return {
      ...this.style
    };
  }
}
