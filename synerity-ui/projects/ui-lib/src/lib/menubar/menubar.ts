import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-menubar',
  imports: [NgFor, NgIf],
  templateUrl: './menubar.html',
  styleUrl: './menubar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Menubar implements AfterViewInit, OnDestroy {
  @Input() model: Array<{ 
    label: string; 
    icon?: string; 
    command?: () => void;
    disabled?: boolean;
    separator?: boolean;
    items?: any[];
  }> = [];
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onItemClick = new EventEmitter<any>();

  @ViewChild('menubarElement') menubarElement!: ElementRef;

  activeItem: any = null;

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
    const isInsideMenubar = this.menubarElement?.nativeElement.contains(target);
    
    if (!isInsideMenubar) {
      this.activeItem = null;
    }
  }

  onItemClickHandler(item: any): void {
    if (item.disabled || item.separator) return;
    
    if (item.command) {
      item.command();
    }
    
    this.onItemClick.emit(item);
    
    if (!item.items) {
      this.activeItem = null;
    }
  }

  onItemMouseEnter(item: any): void {
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

  hasSubmenu(item: any): boolean {
    return item.items && item.items.length > 0;
  }

  getMenubarClass(): string {
    const baseClasses = 'flex items-center bg-white border-b border-gray-200 shadow-sm';
    return `${baseClasses} ${this.styleClass}`.trim();
  }

  getMenubarStyle(): any {
    return {
      ...this.style
    };
  }
}
