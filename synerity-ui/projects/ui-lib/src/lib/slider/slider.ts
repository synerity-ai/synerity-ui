import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sui-slider',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './slider.html',
  styleUrl: './slider.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Slider),
      multi: true
    }
  ]
})
export class Slider implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() name = '';
  @Input() inputId = '';
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() color: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink' = 'default';
  @Input() showValue = false;
  @Input() showRange = false;
  @Input() label = '';
  @Input() vertical = false;
  @Input() compact = false;
  @Input() spacious = false;
  @Input() animated = false;
  @Input() glow = false;
  @Input() ariaLabel = 'Slider';
  @Input() ariaDescribedBy: string | null = null;
  @Output() change = new EventEmitter<number>();
  @Output() onSlide = new EventEmitter<number>();

  value = 0;

  private onChange: (val: number) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: number): void {
    if (value === null || value === undefined || Number.isNaN(Number(value))) {
      this.value = this.min;
    } else {
      this.value = this.clamp(Number(value));
    }
  }

  registerOnChange(fn: (val: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    if (this.disabled || this.readonly) return;
    
    const input = event.target as HTMLInputElement;
    const parsed = Number(input.value);
    this.value = this.clamp(parsed);
    this.onChange(this.value);
    this.change.emit(this.value);
    this.onSlide.emit(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }

  onKeyDown(event: KeyboardEvent): void {
    if (this.disabled || this.readonly) return;
    
    const step = this.step;
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault();
        this.setValue(this.value + step);
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault();
        this.setValue(this.value - step);
        break;
      case 'Home':
        event.preventDefault();
        this.setValue(this.min);
        break;
      case 'End':
        event.preventDefault();
        this.setValue(this.max);
        break;
      case 'PageUp':
        event.preventDefault();
        this.setValue(this.value + (this.max - this.min) * 0.1);
        break;
      case 'PageDown':
        event.preventDefault();
        this.setValue(this.value - (this.max - this.min) * 0.1);
        break;
    }
  }

  setValue(newValue: number): void {
    if (this.disabled || this.readonly) return;
    
    this.value = this.clamp(newValue);
    this.onChange(this.value);
    this.change.emit(this.value);
    this.onSlide.emit(this.value);
  }

  getPercentage(): number {
    return ((this.value - this.min) / (this.max - this.min)) * 100;
  }

  getValueText(): string {
    if (this.step < 1) {
      return this.value.toFixed(1);
    }
    return this.value.toString();
  }

  getRangeText(): string {
    return `${this.min} - ${this.max}`;
  }

  getComponentClass(): string {
    const classes = [
      'sui-slider',
      `sui-slider-${this.size}`,
      `sui-slider-${this.theme}`
    ];

    if (this.disabled) classes.push('sui-slider-disabled');
    if (this.readonly) classes.push('sui-slider-readonly');
    if (this.vertical) classes.push('sui-slider-vertical');
    if (this.compact) classes.push('sui-slider-compact');
    if (this.spacious) classes.push('sui-slider-spacious');
    if (this.animated) classes.push('sui-slider-animated');
    if (this.glow) classes.push('sui-slider-glow');
    if (this.showValue) classes.push('sui-slider-with-value');
    if (this.color !== 'default') classes.push(`sui-slider-${this.color}`);

    return classes.join(' ');
  }

  getInputClass(): string {
    return 'sui-slider-input';
  }

  private clamp(v: number): number {
    let out = v;
    if (out < this.min) out = this.min;
    if (out > this.max) out = this.max;
    const steps = Math.round((out - this.min) / this.step);
    return this.min + steps * this.step;
  }
}
