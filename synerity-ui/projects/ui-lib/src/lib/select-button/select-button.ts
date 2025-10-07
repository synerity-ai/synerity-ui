import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface SelectButtonOption {
  label: string;
  value: unknown;
  disabled?: boolean;
  icon?: string;
  description?: string;
  badge?: string | number;
}

@Component({
  selector: 'sui-select-button',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './select-button.html',
  styleUrl: './select-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectButton),
      multi: true
    }
  ]
})
export class SelectButton implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() multiple = false;
  @Input() options: SelectButtonOption[] = [];
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() variant: 'default' | 'success' | 'warning' | 'danger' | 'purple' | 'pink' = 'default';
  @Input() style: 'default' | 'outline' | 'ghost' = 'default';
  @Input() shape: 'default' | 'rounded' | 'pill' = 'default';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() color: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink' = 'default';
  @Input() label = '';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() compact = false;
  @Input() spacious = false;
  @Input() animated = false;
  @Input() bounce = false;
  @Input() glow = false;
  @Input() loading = false;
  @Input() ariaLabel = '';
  @Input() ariaDescribedBy: string | null = null;
  @Output() change = new EventEmitter<unknown | unknown[]>();
  @Output() onSelect = new EventEmitter<SelectButtonOption>();
  @Output() onFocus = new EventEmitter<number>();
  @Output() onBlur = new EventEmitter<void>();

  value: unknown | unknown[] = null;
  activeIndex = -1;
  hasError = false;
  private onChange: (val: unknown | unknown[]) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(val: unknown | unknown[]): void { 
    this.value = val ?? (this.multiple ? [] : null); 
  }

  registerOnChange(fn: (val: unknown | unknown[]) => void): void { 
    this.onChange = fn; 
  }

  registerOnTouched(fn: () => void): void { 
    this.onTouched = fn; 
  }

  setDisabledState(isDisabled: boolean): void { 
    this.disabled = isDisabled; 
  }

  select(option: SelectButtonOption, index: number): void {
    if (this.disabled || option.disabled || this.loading) return;

    if (this.multiple) {
      const currentValues = Array.isArray(this.value) ? this.value : [];
      const valueIndex = currentValues.indexOf(option.value);
      
      if (valueIndex > -1) {
        currentValues.splice(valueIndex, 1);
      } else {
        currentValues.push(option.value);
      }
      
      this.value = [...currentValues];
    } else {
      this.value = option.value;
      this.activeIndex = index;
    }

    this.onChange(this.value);
    this.change.emit(this.value);
    this.onSelect.emit(option);
    this.onTouched();
  }

  isSelected(option: SelectButtonOption): boolean {
    if (this.multiple) {
      return Array.isArray(this.value) && this.value.includes(option.value);
    }
    return this.value === option.value;
  }

  onKeyDown(event: KeyboardEvent): void {
    if (this.disabled || this.loading) return;

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.moveActive(-1);
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.moveActive(1);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (this.activeIndex >= 0) {
          const option = this.options[this.activeIndex];
          if (option) this.select(option, this.activeIndex);
        }
        break;
      case 'Home':
        event.preventDefault();
        this.activeIndex = 0;
        this.onFocus.emit(this.activeIndex);
        break;
      case 'End':
        event.preventDefault();
        this.activeIndex = this.options.length - 1;
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

  getGroupClasses(): string {
    const classes = ['sui-select-button-group'];
    
    // Size classes
    if (this.size !== 'md') {
      classes.push(`sui-select-button-${this.size}`);
    }
    
    // Color classes (only for default style)
    if (this.style === 'default' && this.color !== 'default') {
      classes.push(`sui-select-button-${this.color}`);
    }
    
    // Style classes
    if (this.style !== 'default') {
      classes.push(`sui-select-button-${this.style}`);
    }
    
    // Shape classes
    if (this.shape !== 'default') {
      classes.push(`sui-select-button-${this.shape}`);
    }
    
    // Theme classes
    if (this.theme !== 'light') {
      classes.push(`sui-select-button-${this.theme}`);
    }
    
    // State classes
    if (this.disabled) classes.push('sui-select-button-disabled');
    if (this.loading) classes.push('sui-select-button-loading');
    if (this.hasError) classes.push('sui-select-button-error');
    if (this.compact) classes.push('sui-select-button-compact');
    if (this.spacious) classes.push('sui-select-button-spacious');
    if (this.animated) classes.push('sui-select-button-animated');
    if (this.bounce) classes.push('sui-select-button-bounce');
    if (this.glow) classes.push('sui-select-button-glow');
    
    return classes.join(' ');
  }

  getButtonClasses(option: SelectButtonOption, index: number): string {
    const classes = ['sui-select-button'];
    
    if (this.isSelected(option)) classes.push('sui-select-button-selected');
    if (this.activeIndex === index) classes.push('sui-select-button-active');
    if (option.disabled) classes.push('sui-select-button-option-disabled');
    if (option.icon) classes.push('sui-select-button-with-icon');
    if (option.badge) classes.push('sui-select-button-with-badge');
    if (option.description) classes.push('sui-select-button-with-description');
    
    return classes.join(' ');
  }

  getAriaLabel(): string {
    if (this.ariaLabel) return this.ariaLabel;
    if (this.label) return this.label;
    return 'Select button group';
  }

  getAriaDescribedBy(): string | null {
    const ids = [];
    if (this.ariaDescribedBy) ids.push(this.ariaDescribedBy);
    if (this.helperText) ids.push(`${this.getComponentId()}-helper`);
    if (this.errorText) ids.push(`${this.getComponentId()}-error`);
    return ids.length > 0 ? ids.join(' ') : null;
  }

  getComponentId(): string {
    return `sui-select-button-${Math.random().toString(36).substr(2, 9)}`;
  }

  getSelectedText(): string {
    if (this.multiple) {
      const selected = this.getSelectedOptions();
      if (selected.length === 0) return 'No selection';
      if (selected.length === 1) return selected[0].label;
      return `${selected.length} items selected`;
    } else {
      const selected = this.getSelectedOption();
      return selected ? selected.label : 'No selection';
    }
  }

  getSelectedOption(): SelectButtonOption | null {
    if (this.multiple) return null;
    return this.options.find(opt => opt.value === this.value) || null;
  }

  getSelectedOptions(): SelectButtonOption[] {
    if (!this.multiple) return [];
    return this.options.filter(opt => Array.isArray(this.value) && this.value.includes(opt.value));
  }

  private moveActive(delta: number): void {
    const len = this.options.length;
    if (len === 0) return;

    let next = this.activeIndex + delta;
    if (next < 0) next = 0;
    if (next > len - 1) next = len - 1;

    // Skip disabled options
    while (next >= 0 && next < len && this.options[next].disabled) {
      next += delta;
    }

    if (next < 0) next = 0;
    if (next > len - 1) next = len - 1;

    this.activeIndex = next;
    this.onFocus.emit(this.activeIndex);
  }
}
