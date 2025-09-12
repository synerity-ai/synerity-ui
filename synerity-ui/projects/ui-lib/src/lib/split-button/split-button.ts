import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-split-button',
  imports: [NgFor, NgIf],
  templateUrl: './split-button.html',
  styleUrl: './split-button.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplitButton {
  @Input() disabled = false;
  @Input() label = '';
  @Input() icon = '';
  @Input() items: Array<{ 
    label: string; 
    icon?: string; 
    command?: () => void; 
    disabled?: boolean;
    separator?: boolean;
  }> = [];
  @Input() buttonStyle: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger' = 'primary';
  @Output() onClick = new EventEmitter<void>();
  @Output() itemClick = new EventEmitter<{ 
    label: string; 
    icon?: string; 
    command?: () => void; 
    disabled?: boolean;
    separator?: boolean;
  }>();

  open = false;

  onMainClick(): void {
    if (this.disabled) return;
    this.onClick.emit();
  }

  onItemClick(item: { 
    label: string; 
    icon?: string; 
    command?: () => void; 
    disabled?: boolean;
    separator?: boolean;
  }): void {
    if (item.disabled || item.separator) return;
    
    if (item.command) {
      item.command();
    }
    
    this.itemClick.emit(item);
    this.open = false;
  }

  toggleDropdown(): void {
    if (this.disabled) return;
    this.open = !this.open;
  }

  getButtonClass(): string {
    return `sui-split-button-main sui-split-button-${this.buttonStyle}`;
  }
}
