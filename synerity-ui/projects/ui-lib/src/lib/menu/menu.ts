import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-menu',
  imports: [NgFor, NgIf],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Menu implements AfterViewInit, OnDestroy {
  @Input() model: Array<{ 
    label: string; 
    icon?: string; 
    command?: () => void;
    disabled?: boolean;
    separator?: boolean;
    items?: any[];
  }> = [];
  @Input() popup = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onItemClick = new EventEmitter<any>();

  @ViewChild('menuElement') menuElement!: ElementRef;

  visible = false;
  activeItem: any = null;

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
    if (!this.visible) return;
    
    const target = event.target as HTMLElement;
    const isInsideMenu = this.menuElement?.nativeElement.contains(target);
    
    if (!isInsideMenu) {
      this.hide();
    }
  }

  show(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.visible = true;
  }

  hide(): void {
    this.visible = false;
    this.activeItem = null;
  }

  toggle(event?: Event): void {
    if (this.visible) {
      this.hide();
    } else {
      this.show(event);
    }
  }

  onItemClickHandler(item: any): void {
    if (item.disabled || item.separator) return;
    
    if (item.command) {
      item.command();
    }
    
    this.onItemClick.emit(item);
    
    if (!item.items) {
      this.hide();
    }
  }

  onItemMouseEnter(item: any): void {
    if (item.items && item.items.length > 0) {
      this.activeItem = item;
    }
  }

  onItemMouseLeave(): void {
    this.activeItem = null;
  }

  hasSubmenu(item: any): boolean {
    return item.items && item.items.length > 0;
  }

  getMenuClass(): string {
    return `sui-menu ${this.styleClass}`.trim();
  }

  getMenuStyle(): any {
    return {
      ...this.style
    };
  }
}
