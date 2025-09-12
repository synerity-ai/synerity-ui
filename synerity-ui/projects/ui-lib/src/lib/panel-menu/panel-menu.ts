import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';

interface PanelMenuItem {
  label?: string;
  icon?: string;
  command?: () => void;
  disabled?: boolean;
  expanded?: boolean;
  items?: PanelMenuItem[];
}

@Component({
  selector: 'sui-panel-menu',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './panel-menu.html',
  styleUrl: './panel-menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelMenu {
  @Input() model: PanelMenuItem[] = [];
  @Input() multiple = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onItemClick = new EventEmitter<PanelMenuItem>();

  onItemClickHandler(event: Event, item: PanelMenuItem): void {
    if (item.disabled) {
      event.preventDefault();
      return;
    }

    if (item.command) {
      item.command();
    }

    if (item.items && item.items.length > 0) {
      if (this.multiple) {
        item.expanded = !item.expanded;
      } else {
        // Close other items
        this.model.forEach(modelItem => {
          if (modelItem !== item) {
            modelItem.expanded = false;
          }
        });
        item.expanded = !item.expanded;
      }
    }

    this.onItemClick.emit(item);
    event.stopPropagation();
  }

  hasSubmenu(item: PanelMenuItem): boolean {
    return !!(item.items && item.items.length > 0);
  }

  getMenuClass(): string {
    return `sui-panel-menu ${this.styleClass}`.trim();
  }

  getMenuStyle(): any {
    return {
      ...this.style
    };
  }

  getItemClass(item: PanelMenuItem): string {
    return `sui-panel-menu-item ${item.disabled ? 'sui-panel-menu-item-disabled' : ''} ${item.expanded ? 'sui-panel-menu-item-expanded' : ''}`.trim();
  }
}
