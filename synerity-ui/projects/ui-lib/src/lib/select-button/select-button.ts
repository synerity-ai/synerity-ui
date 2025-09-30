import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sui-select-button',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './select-button.html',
  styleUrl: './select-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectButton),
      multi: true
    }
  ]
})
export class SelectButton implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() name = '';
  @Input() options: Array<{ label: string; value: unknown; disabled?: boolean }>= [];
  @Output() change = new EventEmitter<unknown>();

  value: unknown = null;

  private onChange: (val: unknown) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(obj: unknown): void {
    this.value = obj;
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

  onOptionClick(option: { label: string; value: unknown; disabled?: boolean }): void {
    if (this.disabled || option.disabled) return;
    this.value = option.value;
    this.onChange(this.value);
    this.change.emit(this.value);
  }
}
