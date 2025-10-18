import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface ListboxOption {
  label: string;
  value: unknown;
  disabled?: boolean;
}

@Component({
  selector: 'sui-listbox',
  standalone: true,
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
  @Input() options: ListboxOption[] = [];
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() label = '';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() multiSelect = false;
  @Output() change = new EventEmitter<unknown>();
  @Output() onSelect = new EventEmitter<ListboxOption>();

  value: unknown = null;
  values: unknown[] = [];
  hasError = false;

  private onChange: (val: unknown) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(obj: unknown): void {
    if (this.multiSelect) {
      this.values = Array.isArray(obj) ? obj : [];
    } else {
      this.value = obj;
    }
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

  isSelected(opt: ListboxOption): boolean {
    if (this.multiSelect) {
      return this.values.includes(opt.value);
    }
    return this.value === opt.value;
  }

  select(opt: ListboxOption): void {
    if (this.disabled || opt.disabled) return;

    if (this.multiSelect) {
      const currentIndex = this.values.indexOf(opt.value);
      if (currentIndex > -1) {
        this.values.splice(currentIndex, 1);
      } else {
        this.values.push(opt.value);
      }
      this.onChange(this.values);
      this.change.emit(this.values);
    } else {
      this.value = opt.value;
      this.onChange(this.value);
      this.change.emit(this.value);
      this.onSelect.emit(opt);
    }
  }

  onBlurEvent(): void {
    this.onTouched();
  }

  getContainerClass(): string {
    const classes = ['sui-listbox-container'];
    if (this.disabled) classes.push('sui-listbox-disabled');
    return classes.join(' ');
  }

  getListboxClass(): string {
    const classes = [
      'sui-listbox',
      `sui-listbox-${this.size}`
    ];

    if (this.disabled) classes.push('sui-listbox-disabled');
    if (this.hasError || this.errorText) classes.push('sui-listbox-invalid');
    if (this.multiSelect) classes.push('sui-listbox-multi');

    return classes.join(' ');
  }

  getItemClass(option: ListboxOption): string {
    const classes = ['sui-listbox-item'];

    if (this.isSelected(option)) classes.push('sui-listbox-item-selected');
    if (option.disabled) classes.push('sui-listbox-item-disabled');

    return classes.join(' ');
  }
}
