import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-speed-dial',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './speed-dial.html',
  styleUrl: './speed-dial.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeedDial {
  @Input() disabled = false;
  @Input() direction: 'up' | 'down' | 'left' | 'right' = 'up';
  @Input() items: Array<{ 
    label?: string; 
    icon?: string; 
    command?: () => void; 
    disabled?: boolean;
  }> = [];
  @Input() buttonIcon = '+';
  @Input() buttonLabel = '';
  @Output() itemClick = new EventEmitter<{ 
    label?: string; 
    icon?: string; 
    command?: () => void; 
    disabled?: boolean;
  }>();

  open = false;

  toggle(): void {
    if (this.disabled) return;
    this.open = !this.open;
  }

  onItemClick(item: { 
    label?: string; 
    icon?: string; 
    command?: () => void; 
    disabled?: boolean;
  }): void {
    if (item.disabled) return;
    
    if (item.command) {
      item.command();
    }
    
    this.itemClick.emit(item);
    this.open = false;
  }

  getDirectionClass(): string {
    return `sui-speed-dial-${this.direction}`;
  }

  getItemsContainerClass(): string {
    const baseClasses = 'absolute z-10 flex flex-col gap-2 transition-all duration-300 ease-in-out';
    
    switch (this.direction) {
      case 'up':
        return `${baseClasses} bottom-full mb-2`;
      case 'down':
        return `${baseClasses} top-full mt-2`;
      case 'left':
        return `${baseClasses} right-full mr-2 flex-row-reverse`;
      case 'right':
        return `${baseClasses} left-full ml-2 flex-row`;
      default:
        return `${baseClasses} bottom-full mb-2`;
    }
  }
}
