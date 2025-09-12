import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sui-listbox',
  imports: [FormsModule, CommonModule],
  templateUrl: './listbox.html',
  styleUrl: './listbox.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Listbox),
      multi: true
    }
  ]
})
export class Listbox implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() options: Array<{ label: string; value: unknown; disabled?: boolean }> = [];
  @Output() change = new EventEmitter<unknown>();

  value: unknown = null;
  activeIndex = -1;

  private onChange: (val: unknown) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(obj: unknown): void { this.value = obj; }
  registerOnChange(fn: (val: unknown) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }

  isSelected(opt: { value: unknown }): boolean { return this.value === opt.value; }

  select(opt: { label: string; value: unknown; disabled?: boolean }, index: number): void {
    if (this.disabled || opt.disabled) return;
    this.value = opt.value;
    this.activeIndex = index;
    this.onChange(this.value);
    this.change.emit(this.value);
  }

  onKeyDown(event: KeyboardEvent): void {
    if (this.disabled) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.moveActive(1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.moveActive(-1);
    } else if (event.key === 'Enter' && this.activeIndex >= 0) {
      const opt = this.options[this.activeIndex];
      if (opt) this.select(opt, this.activeIndex);
    }
  }

  private moveActive(delta: number): void {
    const len = this.options.length;
    if (len === 0) return;
    let next = this.activeIndex + delta;
    if (next < 0) next = 0;
    if (next > len - 1) next = len - 1;
    this.activeIndex = next;
  }
}
