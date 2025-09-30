import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-split-button',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './split-button.html',
  styleUrl: './split-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplitButton {
  @Input() disabled = false;
  @Input() label = '';
  @Input() icon = '';
  @Input() items: Array<{ 
    label?: string; 
    icon?: string; 
    command?: () => void; 
    disabled?: boolean;
    separator?: boolean;
  }> = [];
  @Input() buttonStyle: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger' = 'primary';
  @Output() onClick = new EventEmitter<void>();
  @Output() itemClick = new EventEmitter<{ 
    label?: string; 
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
    label?: string; 
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

  getMainButtonClasses(): string {
    const baseClasses = 'inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-r-0 rounded-l-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ease-in-out';
    
    const styleClasses = {
      primary: 'bg-primary-600 text-white border-primary-600 hover:bg-primary-700 focus:ring-primary-500',
      secondary: 'bg-gray-600 text-white border-gray-600 hover:bg-gray-700 focus:ring-gray-500',
      success: 'bg-green-600 text-white border-green-600 hover:bg-green-700 focus:ring-green-500',
      info: 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 focus:ring-blue-500',
      warning: 'bg-yellow-600 text-white border-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500',
      help: 'bg-purple-600 text-white border-purple-600 hover:bg-purple-700 focus:ring-purple-500',
      danger: 'bg-red-600 text-white border-red-600 hover:bg-red-700 focus:ring-red-500'
    };

    const disabledClasses = this.disabled ? 'opacity-50 cursor-not-allowed' : '';
    
    return `${baseClasses} ${styleClasses[this.buttonStyle]} ${disabledClasses}`.trim();
  }

  getDropdownButtonClasses(): string {
    const baseClasses = 'inline-flex items-center justify-center px-2 py-2 text-sm font-medium border rounded-r-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ease-in-out';
    
    const styleClasses = {
      primary: 'bg-primary-600 text-white border-primary-600 hover:bg-primary-700 focus:ring-primary-500',
      secondary: 'bg-gray-600 text-white border-gray-600 hover:bg-gray-700 focus:ring-gray-500',
      success: 'bg-green-600 text-white border-green-600 hover:bg-green-700 focus:ring-green-500',
      info: 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 focus:ring-blue-500',
      warning: 'bg-yellow-600 text-white border-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500',
      help: 'bg-purple-600 text-white border-purple-600 hover:bg-purple-700 focus:ring-purple-500',
      danger: 'bg-red-600 text-white border-red-600 hover:bg-red-700 focus:ring-red-500'
    };

    const disabledClasses = this.disabled ? 'opacity-50 cursor-not-allowed' : '';
    
    return `${baseClasses} ${styleClasses[this.buttonStyle]} ${disabledClasses}`.trim();
  }
}
