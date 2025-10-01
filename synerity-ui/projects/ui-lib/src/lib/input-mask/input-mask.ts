import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sui-input-mask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-mask.html',
  styleUrl: './input-mask.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputMask),
      multi: true
    }
  ]
})
export class InputMask implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() name = '';
  @Input() inputId = '';
  @Input() placeholder = '';
  // Mask legend: 9 = digit, A = letter, * = alphanumeric; all other chars are literals
  @Input() mask = '';
  @Input() maskPlaceholder = '_';
  @Output() change = new EventEmitter<string>();

  rawValue = '';
  viewValue = '';

  private onChange: (val: string) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnInit(): void {
    this.viewValue = this.applyMask(this.rawValue);
  }

  writeValue(value: string): void {
    this.rawValue = value ?? '';
    this.viewValue = this.applyMask(this.rawValue);
  }

  registerOnChange(fn: (val: string) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const stripped = this.stripLiterals(input.value);
    this.rawValue = stripped;
    this.viewValue = this.applyMask(this.rawValue);
    // Reflect formatted value back into the input to keep caret sane
    input.value = this.viewValue;
    this.onChange(this.rawValue);
    this.change.emit(this.rawValue);
  }

  onBlur(): void { this.onTouched(); }

  private stripLiterals(val: string): string {
    if (!this.mask) return val;
    const allowed = /[0-9A-Za-z]/g;
    const chars = val.match(allowed) ?? [];
    return chars.join('');
  }

  private applyMask(raw: string): string {
    if (!this.mask) return raw;
    const result: string[] = [];
    let ri = 0;
    for (let mi = 0; mi < this.mask.length; mi++) {
      const m = this.mask[mi];
      const rv = raw[ri];
      if (m === '9' || m === 'A' || m === '*') {
        if (rv == null) {
          result.push(this.maskPlaceholder);
        } else if (this.fits(m, rv)) {
          result.push(rv);
          ri++;
        } else {
          // Skip invalid raw char
          ri++;
          mi--; // retry same mask position
        }
      } else {
        result.push(m);
        if (rv === m) {
          ri++;
        }
      }
    }
    return result.join('');
  }

  private fits(maskChar: string, ch: string): boolean {
    if (maskChar === '9') return /\d/.test(ch);
    if (maskChar === 'A') return /[A-Za-z]/.test(ch);
    return /[A-Za-z0-9]/.test(ch); // '*'
  }
}
