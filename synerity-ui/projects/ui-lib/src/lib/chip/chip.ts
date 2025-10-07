import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sui-chip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chip.html',
  styleUrl: './chip.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Chip {
  @Input() label = '';
  @Input() icon = '';
  @Input() image = '';
  @Input() removable = false;
  @Input() disabled = false;
  @Input() clickable = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() color: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink' = 'default';
  @Input() variant: 'default' | 'outline' | 'filled' | 'soft' = 'default';
  @Input() compact = false;
  @Input() spacious = false;
  @Input() rounded = false;
  @Input() square = false;
  @Input() animated = false;
  @Input() bounce = false;
  @Input() glow = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() ariaLabel = '';
  @Input() ariaDescribedBy: string | null = null;
  @Output() onRemove = new EventEmitter<void>();
  @Output() onClick = new EventEmitter<void>();

  remove(event: Event): void {
    event.stopPropagation();
    if (!this.disabled && this.removable) {
      this.onRemove.emit();
    }
  }

  click(event: Event): void {
    if (!this.disabled && this.clickable) {
      this.onClick.emit();
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (this.disabled) return;
    
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (this.clickable) {
        this.onClick.emit();
      }
    } else if (event.key === 'Delete' || event.key === 'Backspace') {
      if (this.removable) {
        this.remove(event);
      }
    }
  }

  getChipClass(): string {
    const classes = [
      'sui-chip',
      `sui-chip-${this.size}`,
      `sui-chip-${this.theme}`
    ];

    if (this.disabled) classes.push('sui-chip-disabled');
    if (this.clickable) classes.push('sui-chip-clickable');
    if (this.compact) classes.push('sui-chip-compact');
    if (this.spacious) classes.push('sui-chip-spacious');
    if (this.rounded) classes.push('sui-chip-rounded');
    if (this.square) classes.push('sui-chip-square');
    if (this.animated) classes.push('sui-chip-animated');
    if (this.bounce) classes.push('sui-chip-bounce');
    if (this.glow) classes.push('sui-chip-glow');
    if (this.variant !== 'default') classes.push(`sui-chip-${this.variant}`);
    if (this.color !== 'default') classes.push(`sui-chip-${this.color}`);
    if (this.styleClass) classes.push(this.styleClass);

    return classes.join(' ');
  }

  getChipStyle(): any {
    return {
      ...this.style
    };
  }

  getChipRole(): string {
    return this.clickable ? 'button' : 'img';
  }

  getChipTabIndex(): number {
    return this.clickable && !this.disabled ? 0 : -1;
  }

  getChipAriaLabel(): string {
    if (this.ariaLabel) return this.ariaLabel;
    if (this.label) return this.label;
    return 'Chip';
  }

  hasImage(): boolean {
    return !!this.image;
  }

  hasIcon(): boolean {
    return !!this.icon;
  }

  hasLabel(): boolean {
    return !!this.label;
  }

  hasContent(): boolean {
    return this.hasLabel() || this.hasIcon() || this.hasImage();
  }
}
