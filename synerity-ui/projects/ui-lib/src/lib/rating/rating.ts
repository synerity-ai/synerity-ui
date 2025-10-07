import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sui-rating',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './rating.html',
  styleUrl: './rating.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Rating),
      multi: true
    }
  ]
})
export class Rating implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() max = 5;
  @Input() allowClear = true;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() color: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink' = 'default';
  @Input() showValue = false;
  @Input() animate = false;
  @Input() bounce = false;
  @Input() glow = false;
  @Input() compact = false;
  @Input() spacious = false;
  @Input() ariaLabel = 'Rating';
  @Input() ariaDescribedBy: string | null = null;
  @Output() change = new EventEmitter<number>();
  @Output() onRate = new EventEmitter<number>();

  value = 0;
  hoverIndex = -1;

  private onChange: (val: number) => void = () => {};
  private onTouched: () => void = () => {};

  get stars(): number[] {
    const m = Math.max(1, Math.floor(this.max));
    return Array.from({ length: m }, (_, i) => i + 1);
  }

  writeValue(val: number): void {
    const num = Number(val);
    this.value = Number.isFinite(num) ? this.clamp(num) : 0;
  }
  registerOnChange(fn: (val: number) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }

  setValue(star: number): void {
    if (this.disabled || this.readonly) return;
    if (this.allowClear && this.value === star) {
      this.value = 0;
    } else {
      this.value = star;
    }
    this.onChange(this.value);
    this.change.emit(this.value);
    this.onRate.emit(this.value);
  }

  onKeyDown(event: KeyboardEvent): void {
    if (this.disabled || this.readonly) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      event.preventDefault();
      this.setValue(this.clamp(this.value + 1));
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      event.preventDefault();
      this.setValue(this.clamp(this.value - 1));
    } else if (event.key === 'Home') {
      event.preventDefault();
      this.setValue(1);
    } else if (event.key === 'End') {
      event.preventDefault();
      this.setValue(this.max);
    } else if (event.key === 'Space' || event.key === ' ') {
      event.preventDefault();
      // toggle at current hover index if any
      if (this.hoverIndex > 0) this.setValue(this.hoverIndex);
    }
  }

  onMouseEnter(star: number): void { if (!this.disabled && !this.readonly) this.hoverIndex = star; }
  onMouseLeave(): void { this.hoverIndex = -1; }
  onBlur(): void { this.onTouched(); }

  isFilled(star: number): boolean {
    const active = this.hoverIndex > 0 ? this.hoverIndex : this.value;
    return star <= active;
  }

  private clamp(v: number): number {
    if (v < 0) return 0;
    if (v > this.max) return this.max;
    return v;
  }

  // Styling methods
  getComponentClass(): string {
    const classes = [
      'sui-rating',
      `sui-rating-${this.size}`,
      `sui-rating-${this.theme}`
    ];

    if (this.disabled) classes.push('sui-rating-disabled');
    if (this.readonly) classes.push('sui-rating-readonly');
    if (this.animate) classes.push('sui-rating-animate');
    if (this.bounce) classes.push('sui-rating-bounce');
    if (this.glow) classes.push('sui-rating-glow');
    if (this.compact) classes.push('sui-rating-compact');
    if (this.spacious) classes.push('sui-rating-spacious');
    if (this.showValue) classes.push('sui-rating-with-label');
    if (this.color !== 'default') classes.push(`sui-rating-${this.color}`);

    return classes.join(' ');
  }

  getStarClass(star: number): string {
    const classes = ['sui-rating-star'];

    if (this.isFilled(star)) {
      classes.push('sui-rating-star-filled');
    }

    return classes.join(' ');
  }

  getStarAriaLabel(star: number): string {
    return `Rate ${star} out of ${this.max} stars`;
  }
}
