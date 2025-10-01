import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

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
  @Input() options: Array<{ label: string; value: unknown; icon?: string }> = [];
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() variant: 'default' | 'success' | 'warning' | 'danger' | 'purple' = 'default';
  @Input() style: 'default' | 'outline' | 'ghost' = 'default';
  @Input() shape: 'default' | 'rounded' | 'pill' = 'default';
  @Output() change = new EventEmitter<unknown | unknown[]>();

  value: unknown | unknown[] = null;
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

  select(option: { label: string; value: unknown; icon?: string }): void {
    if (this.disabled) return;

    if (this.multiple) {
      const currentValues = Array.isArray(this.value) ? this.value : [];
      const index = currentValues.indexOf(option.value);
      
      if (index > -1) {
        currentValues.splice(index, 1);
      } else {
        currentValues.push(option.value);
      }
      
      this.value = [...currentValues];
    } else {
      this.value = option.value;
    }

    this.onChange(this.value);
    this.change.emit(this.value);
    this.onTouched();
  }

  isSelected(option: { label: string; value: unknown; icon?: string }): boolean {
    if (this.multiple) {
      return Array.isArray(this.value) && this.value.includes(option.value);
    }
    return this.value === option.value;
  }

  getGroupClasses(): string {
    const classes = ['sui-toggle-button-group'];
    
    // Size classes
    if (this.size !== 'md') {
      classes.push(`sui-toggle-button-${this.size}`);
    }
    
    // Variant classes (only for default style)
    if (this.style === 'default' && this.variant !== 'default') {
      classes.push(`sui-toggle-button-${this.variant}`);
    }
    
    // Style classes
    if (this.style !== 'default') {
      classes.push(`sui-toggle-button-${this.style}`);
    }
    
    // Shape classes
    if (this.shape !== 'default') {
      classes.push(`sui-toggle-button-${this.shape}`);
    }
    
    return classes.join(' ');
  }
}
