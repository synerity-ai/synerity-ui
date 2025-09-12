import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-breadcrumb',
  imports: [NgFor, NgIf],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Breadcrumb {
  @Input() model: Array<{ 
    label: string; 
    url?: string; 
    command?: () => void;
    icon?: string;
    disabled?: boolean;
  }> = [];
  @Input() home: { 
    label?: string; 
    url?: string; 
    command?: () => void;
    icon?: string;
  } = { label: 'Home', icon: '🏠' };
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onItemClick = new EventEmitter<any>();

  onItemClickHandler(item: any, index: number): void {
    if (item.disabled) return;
    
    if (item.command) {
      item.command();
    }
    
    this.onItemClick.emit({ item, index });
  }

  onHomeClick(): void {
    if (this.home.command) {
      this.home.command();
    }
    
    this.onItemClick.emit({ item: this.home, index: -1 });
  }

  isLastItem(index: number): boolean {
    return index === this.model.length - 1;
  }

  getBreadcrumbClass(): string {
    return `sui-breadcrumb ${this.styleClass}`.trim();
  }

  getBreadcrumbStyle(): any {
    return {
      ...this.style
    };
  }
}
