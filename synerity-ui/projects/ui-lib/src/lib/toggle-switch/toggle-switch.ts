import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sui-toggle-switch',
  imports: [FormsModule],
  templateUrl: './toggle-switch.html',
  styleUrl: './toggle-switch.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleSwitch),
      multi: true
    }
  ]
})
export class ToggleSwitch implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() name = '';
  @Input() inputId = '';
  @Output() change = new EventEmitter<boolean>();

  checked = false;

  private onChange: (val: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: boolean): void {
    this.checked = !!value;
  }

  registerOnChange(fn: (val: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggle(): void {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.onChange(this.checked);
    this.change.emit(this.checked);
  }

  onBlur(): void {
    this.onTouched();
  }
}
