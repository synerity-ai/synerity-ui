import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';

interface DockItem {
  label?: string;
  icon?: string;
  command?: () => void;
  disabled?: boolean;
  tooltip?: string;
}

@Component({
  selector: 'sui-dock',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './dock.html',
  styleUrl: './dock.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Dock {
  @Input() model: DockItem[] = [];
  @Input() position: 'bottom' | 'top' | 'left' | 'right' = 'bottom';
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onItemClick = new EventEmitter<DockItem>();

  onItemClickHandler(event: Event, item: DockItem): void {
    if (item.disabled) {
      event.preventDefault();
      return;
    }

    if (item.command) {
      item.command();
    }

    this.onItemClick.emit(item);
    event.stopPropagation();
  }

  getDockClass(): string {
    return `sui-dock sui-dock-${this.position} ${this.styleClass}`.trim();
  }

  getDockStyle(): any {
    return {
      ...this.style
    };
  }

  getItemClass(item: DockItem): string {
    return `sui-dock-item ${item.disabled ? 'sui-dock-item-disabled' : ''}`.trim();
  }
}
