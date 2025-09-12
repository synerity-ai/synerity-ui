import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-menubar',
  imports: [NgFor, NgIf],
  templateUrl: './menubar.html',
  styleUrl: './menubar.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Menubar {
  @Input() model: Array<{ 
    label: string; 
    icon?: string; 
    command?: () => void;
    disabled?: boolean;
    items?: any[];
  }> = [];
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onItemClick = new EventEmitter<any>();

  activeItem: any = null;

  onItemClickHandler(item: any): void {
    if (item.disabled) return;
    
    if (item.command) {
      item.command();
    }
    
    this.onItemClick.emit(item);
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

  getMenubarClass(): string {
    return `sui-menubar ${this.styleClass}`.trim();
  }

  getMenubarStyle(): any {
    return {
      ...this.style
    };
  }
}
