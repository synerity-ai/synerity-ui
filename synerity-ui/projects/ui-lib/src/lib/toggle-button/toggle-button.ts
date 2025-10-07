import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

export interface ToggleButtonOption {
  label: string;
  value: unknown;
  icon?: string;
  disabled?: boolean;
  description?: string;
  badge?: string | number;
}

@Component({
  selector: 'sui-toggle-button',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './toggle-button.html',
  styleUrl: './toggle-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleButton),
      multi: true
    }
  ]
})
export class ToggleButton implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() multiple = false;
  @Input() options: ToggleButtonOption[] = [];
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
  @Output() onSelect = new EventEmitter<ToggleButtonOption>();
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

  select(option: ToggleButtonOption, index: number): void {
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

  isSelected(option: ToggleButtonOption): boolean {
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
    const classes = ['sui-toggle-button-group'];
    
    // Size classes
    if (this.size !== 'md') {
      classes.push(`sui-toggle-button-${this.size}`);
    }
    
    // Color classes (only for default style)
    if (this.style === 'default' && this.color !== 'default') {
      classes.push(`sui-toggle-button-${this.color}`);
    }
    
    // Style classes
    if (this.style !== 'default') {
      classes.push(`sui-toggle-button-${this.style}`);
    }
    
    // Shape classes
    if (this.shape !== 'default') {
      classes.push(`sui-toggle-button-${this.shape}`);
    }
    
    // Theme classes
    if (this.theme !== 'light') {
      classes.push(`sui-toggle-button-${this.theme}`);
    }
    
    // State classes
    if (this.disabled) classes.push('sui-toggle-button-disabled');
    if (this.loading) classes.push('sui-toggle-button-loading');
    if (this.hasError) classes.push('sui-toggle-button-error');
    if (this.compact) classes.push('sui-toggle-button-compact');
    if (this.spacious) classes.push('sui-toggle-button-spacious');
    if (this.animated) classes.push('sui-toggle-button-animated');
    if (this.bounce) classes.push('sui-toggle-button-bounce');
    if (this.glow) classes.push('sui-toggle-button-glow');
    
    return classes.join(' ');
  }

  getButtonClasses(option: ToggleButtonOption, index: number): string {
    const classes = ['sui-toggle-button'];
    
    if (this.isSelected(option)) classes.push('sui-toggle-button-selected');
    if (this.activeIndex === index) classes.push('sui-toggle-button-active');
    if (option.disabled) classes.push('sui-toggle-button-option-disabled');
    if (option.icon) classes.push('sui-toggle-button-with-icon');
    if (option.badge) classes.push('sui-toggle-button-with-badge');
    if (option.description) classes.push('sui-toggle-button-with-description');
    
    return classes.join(' ');
  }

  getAriaLabel(): string {
    if (this.ariaLabel) return this.ariaLabel;
    if (this.label) return this.label;
    return 'Toggle button group';
  }

  getAriaDescribedBy(): string | null {
    const ids = [];
    if (this.ariaDescribedBy) ids.push(this.ariaDescribedBy);
    if (this.helperText) ids.push(`${this.getComponentId()}-helper`);
    if (this.errorText) ids.push(`${this.getComponentId()}-error`);
    return ids.length > 0 ? ids.join(' ') : null;
  }

  getComponentId(): string {
    return `sui-toggle-button-${Math.random().toString(36).substr(2, 9)}`;
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

  getSelectedOption(): ToggleButtonOption | null {
    if (this.multiple) return null;
    return this.options.find(opt => opt.value === this.value) || null;
  }

  getSelectedOptions(): ToggleButtonOption[] {
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
