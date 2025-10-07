import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface ListboxOption {
  label: string;
  value: unknown;
  disabled?: boolean;
  icon?: string;
  badge?: string | number;
  description?: string;
  group?: string;
}

export interface ListboxGroup {
  label: string;
  options: ListboxOption[];
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
  @Input() groups: ListboxGroup[] = [];
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() color: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink' = 'default';
  @Input() label = '';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() placeholder = 'Select an option';
  @Input() emptyText = 'No options available';
  @Input() emptyDescription = 'Try adjusting your search or filters';
  @Input() emptyIcon = '📋';
  @Input() compact = false;
  @Input() spacious = false;
  @Input() animated = false;
  @Input() bounce = false;
  @Input() glow = false;
  @Input() loading = false;
  @Input() multiSelect = false;
  @Input() showGroups = false;
  @Input() maxHeight = '';
  @Input() ariaLabel = '';
  @Input() ariaDescribedBy: string | null = null;
  @Output() change = new EventEmitter<unknown>();
  @Output() onSelect = new EventEmitter<ListboxOption>();
  @Output() onFocus = new EventEmitter<number>();
  @Output() onBlur = new EventEmitter<void>();

  value: unknown = null;
  values: unknown[] = [];
  activeIndex = -1;
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

  get allOptions(): ListboxOption[] {
    if (this.showGroups && this.groups.length > 0) {
      return this.groups.flatMap(group => group.options);
    }
    return this.options;
  }

  get hasOptions(): boolean {
    return this.allOptions.length > 0;
  }

  get selectedOption(): ListboxOption | null {
    if (this.multiSelect) return null;
    return this.allOptions.find(opt => opt.value === this.value) || null;
  }

  get selectedOptions(): ListboxOption[] {
    if (!this.multiSelect) return [];
    return this.allOptions.filter(opt => this.values.includes(opt.value));
  }

  isSelected(opt: ListboxOption): boolean {
    if (this.multiSelect) {
      return this.values.includes(opt.value);
    }
    return this.value === opt.value;
  }

  select(opt: ListboxOption, index: number): void {
    if (this.disabled || opt.disabled || this.loading) return;

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
      this.activeIndex = index;
      this.onChange(this.value);
      this.change.emit(this.value);
      this.onSelect.emit(opt);
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (this.disabled || this.loading) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.moveActive(1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.moveActive(-1);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (this.activeIndex >= 0) {
          const opt = this.allOptions[this.activeIndex];
          if (opt) this.select(opt, this.activeIndex);
        }
        break;
      case 'Home':
        event.preventDefault();
        this.activeIndex = 0;
        this.onFocus.emit(this.activeIndex);
        break;
      case 'End':
        event.preventDefault();
        this.activeIndex = this.allOptions.length - 1;
        this.onFocus.emit(this.activeIndex);
        break;
      case 'Escape':
        event.preventDefault();
        this.activeIndex = -1;
        this.onBlur.emit();
        break;
    }
  }

  onFocusEvent(): void {
    if (this.activeIndex >= 0) {
      this.onFocus.emit(this.activeIndex);
    }
  }

  onBlurEvent(): void {
    this.onTouched();
    this.onBlur.emit();
  }

  getComponentClass(): string {
    const classes = [
      'sui-listbox',
      `sui-listbox-${this.size}`,
      `sui-listbox-${this.theme}`
    ];

    if (this.disabled) classes.push('sui-listbox-disabled');
    if (this.hasError) classes.push('sui-listbox-error');
    if (this.loading) classes.push('sui-listbox-loading');
    if (this.compact) classes.push('sui-listbox-compact');
    if (this.spacious) classes.push('sui-listbox-spacious');
    if (this.animated) classes.push('sui-listbox-animated');
    if (this.bounce) classes.push('sui-listbox-bounce');
    if (this.glow) classes.push('sui-listbox-glow');
    if (this.multiSelect) classes.push('sui-listbox-multi');
    if (this.showGroups) classes.push('sui-listbox-group');
    if (this.color !== 'default') classes.push(`sui-listbox-${this.color}`);

    return classes.join(' ');
  }

  getContainerClass(): string {
    return 'sui-listbox-container';
  }

  getItemClass(option: ListboxOption, index: number): string {
    const classes = ['sui-listbox-item'];

    if (this.isSelected(option)) classes.push('sui-listbox-item-selected');
    if (this.activeIndex === index) classes.push('sui-listbox-item-active');
    if (option.disabled) classes.push('sui-listbox-item-disabled');
    if (option.icon) classes.push('sui-listbox-item-with-icon');
    if (option.badge) classes.push('sui-listbox-item-with-badge');
    if (option.description) classes.push('sui-listbox-item-with-description');

    return classes.join(' ');
  }

  getAriaLabel(): string {
    if (this.ariaLabel) return this.ariaLabel;
    if (this.label) return this.label;
    return 'Listbox';
  }

  getAriaDescribedBy(): string | null {
    const ids = [];
    if (this.ariaDescribedBy) ids.push(this.ariaDescribedBy);
    if (this.helperText) ids.push(`${this.getComponentId()}-helper`);
    if (this.errorText) ids.push(`${this.getComponentId()}-error`);
    return ids.length > 0 ? ids.join(' ') : null;
  }

  getComponentId(): string {
    return `sui-listbox-${Math.random().toString(36).substr(2, 9)}`;
  }

  getContainerStyle(): { [key: string]: string } {
    const style: { [key: string]: string } = {};
    if (this.maxHeight) {
      style['--sui-listbox-max-height'] = this.maxHeight;
    }
    return style;
  }

  getSelectedText(): string {
    if (this.multiSelect) {
      const selected = this.selectedOptions;
      if (selected.length === 0) return this.placeholder;
      if (selected.length === 1) return selected[0].label;
      return `${selected.length} items selected`;
    } else {
      const selected = this.selectedOption;
      return selected ? selected.label : this.placeholder;
    }
  }

  getGroupedOptions(): ListboxGroup[] {
    if (!this.showGroups || this.groups.length === 0) {
      return [{ label: 'Options', options: this.options }];
    }
    return this.groups;
  }

  private moveActive(delta: number): void {
    const len = this.allOptions.length;
    if (len === 0) return;

    let next = this.activeIndex + delta;
    if (next < 0) next = 0;
    if (next > len - 1) next = len - 1;

    // Skip disabled options
    while (next >= 0 && next < len && this.allOptions[next].disabled) {
      next += delta;
    }

    if (next < 0) next = 0;
    if (next > len - 1) next = len - 1;

    this.activeIndex = next;
    this.onFocus.emit(this.activeIndex);
  }
}
