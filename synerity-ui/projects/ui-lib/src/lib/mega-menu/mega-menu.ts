import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface MegaMenuItem {
  label?: string;
  icon?: string;
  command?: () => void;
  disabled?: boolean;
  separator?: boolean;
  items?: MegaMenuItem[];
  columns?: MegaMenuItem[][];
}

@Component({
  selector: 'sui-mega-menu',
  imports: [NgFor, NgIf],
  templateUrl: './mega-menu.html',
  styleUrl: './mega-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MegaMenu implements AfterViewInit, OnDestroy {
  @Input() model: MegaMenuItem[] = [];
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onItemClick = new EventEmitter<MegaMenuItem>();

  @ViewChild('menuElement') menuElement!: ElementRef;

  activeItem: MegaMenuItem | null = null;

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
    if (!this.activeItem) return;
    
    const target = event.target as HTMLElement;
    const isInsideMenu = this.menuElement?.nativeElement.contains(target);
    
    if (!isInsideMenu) {
      this.activeItem = null;
    }
  }

  onItemClickHandler(event: Event, item: MegaMenuItem): void {
    if (item.disabled || item.separator) {
      event.preventDefault();
      return;
    }

    if (item.command) {
      item.command();
    }

    this.onItemClick.emit(item);

    if (this.hasSubmenu(item)) {
      this.activeItem = this.activeItem === item ? null : item;
    } else {
      this.activeItem = null;
    }

    event.stopPropagation();
  }

  onItemMouseEnter(item: MegaMenuItem): void {
    if (this.hasSubmenu(item)) {
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

  hasSubmenu(item: MegaMenuItem): boolean {
    return !!(item.items && item.items.length > 0) || !!(item.columns && item.columns.length > 0);
  }

  getMenuClass(): string {
    const baseClasses = this.orientation === 'horizontal' 
      ? 'flex items-center bg-white border-b border-gray-200 shadow-sm'
      : 'flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg';
    return `${baseClasses} ${this.styleClass}`.trim();
  }

  getMenuStyle(): any {
    return {
      ...this.style
    };
  }
}
