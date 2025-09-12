import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sui-input-number',
  imports: [FormsModule],
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
  @Input() name = '';
  @Input() inputId = '';
  @Input() min: number | null = null;
  @Input() max: number | null = null;
  @Input() step = 1;
  @Input() placeholder = '';
  @Output() change = new EventEmitter<number | null>();

  value: number | null = null;

  private onChange: (val: number | null) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: number | null): void {
    this.value = value === null || value === undefined ? null : Number(value);
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
    const input = event.target as HTMLInputElement;
    const parsed = input.value === '' ? null : Number(input.value);
    if (parsed !== null && !Number.isNaN(parsed)) {
      this.value = this.clamp(parsed);
    } else {
      this.value = null;
    }
    this.onChange(this.value);
    this.change.emit(this.value);
  }

  onBlur(): void {
    if (this.value !== null) {
      this.value = this.clamp(this.value);
      this.onChange(this.value);
    }
    this.onTouched();
  }

  increment(): void {
    if (this.disabled) return;
    const base = this.value ?? 0;
    this.updateValue(base + this.step);
  }

  decrement(): void {
    if (this.disabled) return;
    const base = this.value ?? 0;
    this.updateValue(base - this.step);
  }

  private updateValue(v: number): void {
    this.value = this.clamp(v);
    this.onChange(this.value);
    this.change.emit(this.value);
  }

  private clamp(v: number): number {
    let result = v;
    if (this.min !== null && result < this.min) result = this.min;
    if (this.max !== null && result > this.max) result = this.max;
    return result;
  }
}
