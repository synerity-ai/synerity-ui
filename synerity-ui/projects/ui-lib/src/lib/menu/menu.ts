import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'sui-menu',
  imports: [NgFor, NgIf, LucideAngularModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Menu implements AfterViewInit, OnDestroy {
  @Input() model: Array<{ 
    label?: string; 
    icon?: string; 
    lucideIcon?: string;
    command?: () => void;
    disabled?: boolean;
    separator?: boolean;
    items?: any[];
    badge?: string;
    tooltip?: string;
    divider?: boolean;
    highlight?: boolean;
  }> = [];
  @Input() popup = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() variant: 'default' | 'outlined' | 'filled' = 'default';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() glow = false;
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
    const sizeClass = this.size !== 'md' ? `sui-menu-${this.size}` : '';
    const variantClass = this.variant !== 'default' ? `sui-menu-${this.variant}` : '';
    const glowClass = this.glow ? 'sui-menu-glow' : '';
    const baseClasses = 'sui-menu';
    return `${baseClasses} ${sizeClass} ${variantClass} ${glowClass} ${this.styleClass}`.trim();
  }

  getMenuStyle(): any {
    return {
      ...this.style
    };
  }
}
