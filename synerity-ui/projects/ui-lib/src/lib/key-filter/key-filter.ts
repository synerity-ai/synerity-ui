import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sui-key-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './key-filter.html',
  styleUrl: './key-filter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KeyFilter),
      multi: true
    }
  ]
})
export class KeyFilter implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() name = '';
  @Input() inputId = '';
  @Input() placeholder = '';
  // pattern can be preset: 'int' | 'num' | 'alpha' | 'alphanum' or a custom regex string like "^[A-F0-9]+$"
  @Input() pattern: 'int' | 'num' | 'alpha' | 'alphanum' | string = 'alphanum';
  @Output() change = new EventEmitter<string>();

  value = '';

  private onChange: (val: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string): void { this.value = value ?? ''; }
  registerOnChange(fn: (val: string) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value ?? '';
    this.onChange(this.value);
    this.change.emit(this.value);
  }

  onBlur(): void { this.onTouched(); }

  onKeyDown(event: KeyboardEvent): void {
    if (this.disabled) return;
    // Allow control keys
    const ctrlKeys = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'Home', 'End'];
    if (ctrlKeys.includes(event.key) || (event.ctrlKey || event.metaKey)) return;
    if (event.key.length !== 1) return;
    const regex = this.resolveRegex();
    if (!regex.test(event.key)) {
      event.preventDefault();
    }
  }

  private resolveRegex(): RegExp {
    switch (this.pattern) {
      case 'int':
        return /[0-9]/;
      case 'num':
        return /[0-9.\-+]/;
      case 'alpha':
        return /[A-Za-z]/;
      case 'alphanum':
        return /[A-Za-z0-9]/;
      default:
        try {
          return new RegExp(this.pattern as string);
        } catch {
          return /[\s\S]/; // fallback allow all
        }
    }
  }
}
