import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sui-input-number',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input-number.html',
  styleUrl: './input-number.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumber),
      multi: true
    }
  ]
})
export class InputNumber implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() name = '';
  @Input() inputId = '';
  @Input() min: number | null = null;
  @Input() max: number | null = null;
  @Input() step = 1;
  @Input() placeholder = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() color: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink' = 'default';
  @Input() label = '';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() icon = '';
  @Input() compact = false;
  @Input() spacious = false;
  @Input() animated = false;
  @Input() bounce = false;
  @Input() glow = false;
  @Input() loading = false;
  @Input() showButtons = true;
  @Input() ariaLabel = '';
  @Input() ariaDescribedBy: string | null = null;
  @Output() change = new EventEmitter<number | null>();
  @Output() onIncrement = new EventEmitter<number | null>();
  @Output() onDecrement = new EventEmitter<number | null>();

  value: number | null = null;
  hasError = false;

  private onChange: (val: number | null) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: number | null): void {
    this.value = value === null || value === undefined ? null : Number(value);
    this.validateValue();
  }

  registerOnChange(fn: (val: number | null) => void): void {
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
    const parsed = input.value === '' ? null : Number(input.value);
    
    if (parsed !== null && !Number.isNaN(parsed)) {
      this.value = this.clamp(parsed);
    } else {
      this.value = null;
    }
    
    this.validateValue();
    this.onChange(this.value);
    this.change.emit(this.value);
  }

  onBlur(): void {
    if (this.value !== null) {
      this.value = this.clamp(this.value);
      this.validateValue();
      this.onChange(this.value);
    }
    this.onTouched();
  }

  onKeyDown(event: KeyboardEvent): void {
    if (this.disabled || this.readonly) return;
    
    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault();
        this.increment();
        break;
      case 'ArrowDown':
        event.preventDefault();
        this.decrement();
        break;
      case 'Home':
        event.preventDefault();
        this.setValue(this.min ?? 0);
        break;
      case 'End':
        event.preventDefault();
        this.setValue(this.max ?? 0);
        break;
      case 'PageUp':
        event.preventDefault();
        this.setValue((this.value ?? 0) + (this.step * 10));
        break;
      case 'PageDown':
        event.preventDefault();
        this.setValue((this.value ?? 0) - (this.step * 10));
        break;
    }
  }

  increment(): void {
    if (this.disabled || this.readonly || this.loading) return;
    const base = this.value ?? 0;
    const newValue = this.clamp(base + this.step);
    this.setValue(newValue);
    this.onIncrement.emit(newValue);
  }

  decrement(): void {
    if (this.disabled || this.readonly || this.loading) return;
    const base = this.value ?? 0;
    const newValue = this.clamp(base - this.step);
    this.setValue(newValue);
    this.onDecrement.emit(newValue);
  }

  setValue(v: number): void {
    if (this.disabled || this.readonly) return;
    
    this.value = this.clamp(v);
    this.validateValue();
    this.onChange(this.value);
    this.change.emit(this.value);
  }

  getComponentClass(): string {
    const classes = [
      'sui-input-number',
      `sui-input-number-${this.size}`,
      `sui-input-number-${this.theme}`
    ];

    if (this.disabled) classes.push('sui-input-number-disabled');
    if (this.readonly) classes.push('sui-input-number-readonly');
    if (this.hasError) classes.push('sui-input-number-error');
    if (this.loading) classes.push('sui-input-number-loading');
    if (this.compact) classes.push('sui-input-number-compact');
    if (this.spacious) classes.push('sui-input-number-spacious');
    if (this.animated) classes.push('sui-input-number-animated');
    if (this.bounce) classes.push('sui-input-number-bounce');
    if (this.glow) classes.push('sui-input-number-glow');
    if (this.icon) classes.push('sui-input-number-with-icon');
    if (this.color !== 'default') classes.push(`sui-input-number-${this.color}`);

    return classes.join(' ');
  }

  getContainerClass(): string {
    const classes = ['sui-input-number-container'];
    
    if (this.hasError) classes.push('sui-input-number-error');
    
    return classes.join(' ');
  }

  getInputClass(): string {
    return 'sui-input-number-input';
  }

  getButtonClass(): string {
    const classes = ['sui-input-number-button'];
    
    if (this.loading) classes.push('sui-input-number-loading');
    
    return classes.join(' ');
  }

  getDisplayValue(): string {
    return this.value === null ? '' : this.value.toString();
  }

  getAriaLabel(): string {
    if (this.ariaLabel) return this.ariaLabel;
    if (this.label) return this.label;
    return 'Number input';
  }

  getAriaDescribedBy(): string | null {
    const ids = [];
    if (this.ariaDescribedBy) ids.push(this.ariaDescribedBy);
    if (this.helperText) ids.push(`${this.inputId}-helper`);
    if (this.errorText) ids.push(`${this.inputId}-error`);
    return ids.length > 0 ? ids.join(' ') : null;
  }

  private validateValue(): void {
    this.hasError = false;
    
    if (this.value !== null) {
      if (this.min !== null && this.value < this.min) {
        this.hasError = true;
      }
      if (this.max !== null && this.value > this.max) {
        this.hasError = true;
      }
    }
  }

  private clamp(v: number): number {
    let result = v;
    if (this.min !== null && result < this.min) result = this.min;
    if (this.max !== null && result > this.max) result = this.max;
    return result;
  }
}
