import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sui-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Button),
      multi: true
    }
  ]
})
export class Button implements ControlValueAccessor {
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() fullWidth: boolean = false;
  @Input() icon: string | null = null;
  @Input() iconPosition: 'left' | 'right' = 'left';
  
  @Output() click = new EventEmitter<MouseEvent>();

  // ControlValueAccessor implementation
  private _value: boolean = false;
  private onChange = (value: boolean) => {};
  private onTouched = () => {};

  get value(): boolean {
    return this._value;
  }

  set value(val: boolean) {
    this._value = val;
    this.onChange(val);
  }

  onButtonClick(event: MouseEvent): void {
    if (this.disabled || this.loading) {
      event.preventDefault();
      return;
    }
    
    this.click.emit(event);
    
    // Toggle value for button group usage
    if (this.type === 'button') {
      this.value = !this.value;
    }
  }

  writeValue(value: boolean): void {
    this._value = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  get buttonClasses(): string {
    const baseClasses = 'sui-button';
    const sizeClass = `sui-button-${this.size}`;
    const variantClass = `sui-button-${this.variant}`;
    const widthClass = this.fullWidth ? 'sui-button-full-width' : '';
    const loadingClass = this.loading ? 'sui-button-loading' : '';
    
    return `${baseClasses} ${sizeClass} ${variantClass} ${widthClass} ${loadingClass}`.trim();
  }
}
