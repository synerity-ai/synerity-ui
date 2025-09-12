import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sui-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() variant: 'default' | 'outlined' | 'elevated' | 'filled' = 'default';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() clickable: boolean = false;
  @Input() disabled: boolean = false;
  @Input() header: string = '';
  @Input() subheader: string = '';
  @Input() showHeader: boolean = true;
  @Input() showFooter: boolean = false;
  @Input() loading: boolean = false;
  @Input() hoverable: boolean = false;
  @Input() borderless: boolean = false;

  @Output() click = new EventEmitter<MouseEvent>();
  @Output() headerClick = new EventEmitter<MouseEvent>();

  onCardClick(event: MouseEvent): void {
    if (this.disabled || this.loading || !this.clickable) {
      return;
    }
    this.click.emit(event);
  }

  onHeaderClick(event: MouseEvent): void {
    if (this.disabled || this.loading) {
      return;
    }
    this.headerClick.emit(event);
  }

  get cardClasses(): string {
    const baseClasses = 'bg-white rounded-lg transition-all duration-200 relative';
    
    const sizeClasses = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    };

    const variantClasses = {
      default: 'border border-gray-200',
      outlined: 'border-2 border-gray-300',
      elevated: 'shadow-lg border border-gray-100',
      filled: 'bg-gray-50 border border-gray-200'
    };

    const interactiveClasses = this.clickable && !this.disabled ? 'cursor-pointer hover:shadow-md' : '';
    const hoverClasses = this.hoverable && !this.disabled ? 'hover:shadow-md hover:scale-[1.02]' : '';
    const disabledClasses = this.disabled ? 'opacity-50 cursor-not-allowed' : '';
    const borderlessClasses = this.borderless ? 'border-0' : '';

    return `${baseClasses} ${sizeClasses[this.size]} ${variantClasses[this.variant]} ${interactiveClasses} ${hoverClasses} ${disabledClasses} ${borderlessClasses}`.trim();
  }

  get headerClasses(): string {
    const baseClasses = 'font-semibold text-gray-900';
    const sizeClasses = {
      sm: 'text-base',
      md: 'text-lg',
      lg: 'text-xl'
    };
    const clickableClasses = this.clickable ? 'cursor-pointer hover:text-primary-600' : '';
    
    return `${baseClasses} ${sizeClasses[this.size]} ${clickableClasses}`.trim();
  }

  get subheaderClasses(): string {
    return 'text-sm text-gray-600 mt-1';
  }

  get contentClasses(): string {
    const sizeClasses = {
      sm: 'mt-3',
      md: 'mt-4',
      lg: 'mt-6'
    };
    
    return `${sizeClasses[this.size]}`;
  }

  get footerClasses(): string {
    const sizeClasses = {
      sm: 'mt-3 pt-3',
      md: 'mt-4 pt-4',
      lg: 'mt-6 pt-6'
    };
    
    return `border-t border-gray-200 ${sizeClasses[this.size]}`;
  }
}
