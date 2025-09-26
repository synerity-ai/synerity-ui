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
    const baseClasses = 'sui-card';
    const sizeClass = `sui-card-${this.size}`;
    const variantClass = `sui-card-${this.variant}`;
    const interactiveClass = this.clickable && !this.disabled ? 'sui-card-clickable' : '';
    const hoverClass = this.hoverable && !this.disabled ? 'sui-card-hoverable' : '';
    const disabledClass = this.disabled ? 'sui-card-disabled' : '';
    const borderlessClass = this.borderless ? 'sui-card-borderless' : '';
    
    return `${baseClasses} ${sizeClass} ${variantClass} ${interactiveClass} ${hoverClass} ${disabledClass} ${borderlessClass}`.trim();
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
