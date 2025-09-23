import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sui-input-otp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input-otp.html',
  styleUrl: './input-otp.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputOtp),
      multi: true
    }
  ]
})
export class InputOtp implements ControlValueAccessor {
  @Input() length = 6;
  @Input() disabled = false;
  @Input() name = '';
  @Input() inputType: 'text' | 'tel' = 'tel';
  @Input() numericOnly = true;
  @Output() change = new EventEmitter<string>();
  @Output() complete = new EventEmitter<string>();

  @ViewChildren('otpInput') inputs!: QueryList<ElementRef<HTMLInputElement>>;

  values: string[] = [];

  private onChange: (val: string) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnInit(): void {
    this.resetValues();
  }

  writeValue(value: string): void {
    if (typeof value === 'string') {
      this.ensureLength();
      const chars = value.slice(0, this.length).split('');
      this.values = Array.from({ length: this.length }, (_, i) => chars[i] ?? '');
    } else {
      this.resetValues();
    }
  }

  registerOnChange(fn: (val: string) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }

  onInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    let val = input.value || '';
    if (this.numericOnly) val = val.replace(/\D/g, '');
    val = val.slice(-1);
    this.values[index] = val;
    input.value = val;
    this.emitValue();
    if (val && index < this.length - 1) this.focusIndex(index + 1);
    if (this.isComplete()) this.complete.emit(this.values.join(''));
  }

  onKeyDown(event: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Backspace') {
      if (input.value) {
        this.values[index] = '';
        this.emitValue();
      } else if (index > 0) {
        this.focusIndex(index - 1);
        const prev = this.inputs.get(index - 1)?.nativeElement;
        if (prev) prev.value = '';
        this.values[index - 1] = '';
        this.emitValue();
      }
      return;
    }
    if (event.key.length === 1 && this.numericOnly && /\D/.test(event.key)) {
      event.preventDefault();
    }
  }

  onPaste(event: ClipboardEvent): void {
    if (!event.clipboardData) return;
    event.preventDefault();
    const text = event.clipboardData.getData('text').replace(this.numericOnly ? /\D/g : /[^\S\s]/g, '');
    const chars = text.slice(0, this.length).split('');
    this.values = Array.from({ length: this.length }, (_, i) => chars[i] ?? '');
    this.emitValue();
    if (this.isComplete()) this.complete.emit(this.values.join(''));
    const nextIndex = Math.min(chars.length, this.length - 1);
    this.focusIndex(nextIndex);
  }

  onBlur(): void { this.onTouched(); }

  private emitValue(): void {
    const joined = this.values.join('');
    this.onChange(joined);
    this.change.emit(joined);
  }

  private focusIndex(index: number): void {
    const el = this.inputs?.get(index)?.nativeElement;
    if (el) el.focus();
  }

  private ensureLength(): void {
    if (this.length < 1) this.length = 1;
  }

  private resetValues(): void {
    this.ensureLength();
    this.values = Array.from({ length: this.length }, () => '');
  }

  private isComplete(): boolean {
    return this.values.every(v => v && v.length === 1);
  }
}
