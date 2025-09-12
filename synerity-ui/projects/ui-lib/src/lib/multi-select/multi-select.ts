import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { JsonPipe, CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sui-multi-select',
  imports: [FormsModule, JsonPipe, CommonModule],
  templateUrl: './multi-select.html',
  styleUrl: './multi-select.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelect),
      multi: true
    }
  ]
})
export class MultiSelect implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() name = '';
  @Input() options: Array<{ label: string; value: unknown; disabled?: boolean }> = [];
  @Output() change = new EventEmitter<unknown[]>();

  value: unknown[] = [];

  private onChange: (val: unknown[]) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(obj: unknown[] | null): void {
    this.value = Array.isArray(obj) ? [...obj] : [];
  }

  registerOnChange(fn: (val: unknown[]) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }

  isChecked(optionValue: unknown): boolean {
    return this.value.some(v => v === optionValue);
  }

  toggleOption(option: { label: string; value: unknown; disabled?: boolean }): void {
    if (this.disabled || option.disabled) return;
    if (this.isChecked(option.value)) {
      this.value = this.value.filter(v => v !== option.value);
    } else {
      this.value = [...this.value, option.value];
    }
    this.onChange(this.value);
    this.change.emit(this.value);
  }

  onBlur(): void { this.onTouched(); }
}
