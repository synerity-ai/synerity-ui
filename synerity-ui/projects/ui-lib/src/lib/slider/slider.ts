import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sui-slider',
  imports: [FormsModule],
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
  @Input() name = '';
  @Input() inputId = '';
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Output() change = new EventEmitter<number>();

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
    const input = event.target as HTMLInputElement;
    const parsed = Number(input.value);
    this.value = this.clamp(parsed);
    this.onChange(this.value);
    this.change.emit(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }

  private clamp(v: number): number {
    let out = v;
    if (out < this.min) out = this.min;
    if (out > this.max) out = this.max;
    const steps = Math.round((out - this.min) / this.step);
    return this.min + steps * this.step;
  }
}
