import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sui-select',
  imports: [FormsModule, CommonModule],
  templateUrl: './select.html',
  styleUrl: './select.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Select),
      multi: true
    }
  ]
})
export class Select implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() name = '';
  @Input() inputId = '';
  @Input() placeholder: string | null = null;
  @Input() options: Array<{ label: string; value: unknown; disabled?: boolean }>= [];
  @Input() searchable = false;
  @Input() clearable = false;
  @Output() change = new EventEmitter<unknown>();

  value: unknown = null;
  searchTerm = '';

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

  onSelectChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const selectedIndex = select.selectedIndex;
    // Account for placeholder option at index 0
    const realIndex = this.placeholder != null ? selectedIndex - 1 : selectedIndex;
    if (this.placeholder != null && selectedIndex === 0) {
      this.value = null;
    } else if (realIndex >= 0 && realIndex < this.options.length) {
      this.value = this.options[realIndex]?.value;
    }
    this.onChange(this.value);
    this.change.emit(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value ?? '';
  }

  clearSelection(): void {
    if (this.disabled) return;
    this.value = null;
    this.onChange(this.value);
    this.change.emit(this.value);
  }

  get filteredOptions(): Array<{ label: string; value: unknown; disabled?: boolean }> {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) return this.options;
    return this.options.filter(o => (o.label ?? '').toLowerCase().includes(term));
  }
}
