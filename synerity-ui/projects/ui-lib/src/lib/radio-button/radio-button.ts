import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sui-radio-button',
  imports: [FormsModule],
  templateUrl: './radio-button.html',
  styleUrl: './radio-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButton),
      multi: true
    }
  ]
})
export class RadioButton implements ControlValueAccessor {
  @Input() name = '';
  @Input() disabled = false;
  @Input() value: unknown = null;
  @Input() inputId = '';
  @Output() change = new EventEmitter<unknown>();

  private _modelValue: unknown = null;

  private onChange: (val: unknown) => void = () => {};
  private onTouched: () => void = () => {};

  get checked(): boolean {
    return this._modelValue === this.value;
  }

  writeValue(obj: unknown): void {
    this._modelValue = obj;
  }

  registerOnChange(fn: (val: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(): void {
    if (this.disabled) return;
    this._modelValue = this.value;
    this.onChange(this._modelValue);
    this.change.emit(this._modelValue);
  }

  onInputBlur(): void {
    this.onTouched();
  }
}
