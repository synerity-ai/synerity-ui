import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-auto-complete',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './auto-complete.html',
  styleUrl: './auto-complete.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutoComplete),
      multi: true
    }
  ]
})
export class AutoComplete implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() name = '';
  @Input() inputId = '';
  @Input() placeholder = '';
  @Input() minLength = 1;
  @Input() options: Array<string | { label: string; value: unknown } > = [];
  @Output() change = new EventEmitter<unknown>();

  value: unknown = '';
  term = '';
  open = false;
  activeIndex = -1;

  private onChange: (val: unknown) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(obj: unknown): void {
    this.value = obj ?? '';
    this.term = this.displayValue(this.value);
  }
  registerOnChange(fn: (val: unknown) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.term = input.value ?? '';
    this.open = this.term.length >= this.minLength && this.filtered.length > 0;
    this.activeIndex = this.filtered.length ? 0 : -1;
  }

  onFocus(): void {
    this.open = this.term.length >= this.minLength && this.filtered.length > 0;
  }

  onBlur(): void {
    this.onTouched();
    // Add a small delay to allow click events to be processed before closing
    setTimeout(() => {
      this.open = false;
    }, 150);
  }

  onKeyDown(event: KeyboardEvent): void {
    if (!this.open) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.activeIndex = Math.min(this.activeIndex + 1, this.filtered.length - 1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.activeIndex = Math.max(this.activeIndex - 1, 0);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (this.activeIndex >= 0) this.select(this.filtered[this.activeIndex]);
    } else if (event.key === 'Escape') {
      this.open = false;
    }
  }

  select(item: string | { label: string; value: unknown }): void {
    if (this.disabled) return;
    const val = this.resolveValue(item);
    this.value = val;
    this.term = this.displayValue(val);
    this.onChange(this.value);
    this.change.emit(this.value);
    this.open = false;
  }

  clear(): void {
    if (this.disabled) return;
    this.value = '';
    this.term = '';
    this.onChange(this.value);
    this.change.emit(this.value);
  }

  get filtered(): Array<string | { label: string; value: unknown }> {
    const t = (this.term || '').toLowerCase();
    if (!t) return [];
    return this.options.filter(opt => this.displayItem(opt).toLowerCase().includes(t));
  }

  displayItem(item: string | { label: string; value: unknown }): string {
    return typeof item === 'string' ? item : item.label ?? '';
  }

  resolveValue(item: string | { label: string; value: unknown }): unknown {
    return typeof item === 'string' ? item : item.value;
  }

  displayValue(val: unknown): string {
    if (typeof val === 'string') return val;
    const match = this.options.find(o => typeof o !== 'string' && o.value === val) as { label: string; value: unknown } | undefined;
    return match?.label ?? '';
  }
}
