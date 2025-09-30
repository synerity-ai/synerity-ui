import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-toolbar',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Toolbar {
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() leftItems: Array<{ 
    label?: string; 
    icon?: string; 
    command?: () => void;
    disabled?: boolean;
    separator?: boolean;
  }> = [];
  @Input() rightItems: Array<{ 
    label?: string; 
    icon?: string; 
    command?: () => void;
    disabled?: boolean;
    separator?: boolean;
  }> = [];
  @Output() onItemClick = new EventEmitter<any>();

  onItemClickHandler(item: any): void {
    if (item.disabled || item.separator) return;
    
    if (item.command) {
      item.command();
    }
    
    this.onItemClick.emit(item);
  }

  getToolbarClass(): string {
    return `sui-toolbar sui-toolbar-${this.orientation} ${this.styleClass}`.trim();
  }

  getToolbarStyle(): any {
    return {
      ...this.style
    };
  }
}
