import { ChangeDetectionStrategy, Component, Input, ViewChild, ElementRef, HostListener, forwardRef } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sui-float-label',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './float-label.html',
  styleUrl: './float-label.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FloatLabel),
      multi: true
    }
  ]
})
export class FloatLabel implements ControlValueAccessor {
  @Input() label = '';
  @Input() for = '';
  @Input() required = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() state: 'default' | 'error' | 'success' | 'warning' = 'default';
  @Input() disabled = false;
  @Input() animated = false;
  @Input() bounce = false;
  @Input() rtl = false;
  @Input() placeholder = '';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() successText = '';
  @Input() warningText = '';
  @Input() ariaLabel = '';
  @Input() ariaDescribedBy: string | null = null;

  @ViewChild('inputElement') inputElement!: ElementRef;

  isFocused = false;
  hasValue = false;
  value: any = '';
  private onChange: (val: any) => void = () => {};
  private onTouched: () => void = () => {};

  @HostListener('focus')
  onFocus(): void {
    if (!this.disabled) {
      this.isFocused = true;
    }
  }

  @HostListener('blur')
  onBlur(): void {
    this.isFocused = false;
    this.checkValue();
    this.onTouched();
  }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    if (!this.disabled) {
      const target = event.target as HTMLInputElement;
      this.value = target.value;
      this.onChange(this.value);
      this.checkValue();
    }
  }

  private checkValue(): void {
    if (this.inputElement) {
      const input = this.inputElement.nativeElement;
      this.hasValue = input.value && input.value.length > 0;
    }
  }

  getFloatLabelClass(): string {
    const classes = ['sui-float-label'];
    
    // Size classes
    if (this.size !== 'md') {
      classes.push(`sui-float-label-${this.size}`);
    }
    
    // State classes
    if (this.state !== 'default') {
      classes.push(`sui-float-label-${this.state}`);
    }
    
    // Animation classes
    if (this.animated) {
      classes.push('sui-float-label-animated');
    }
    
    if (this.bounce) {
      classes.push('sui-float-label-bounce');
    }
    
    // RTL class
    if (this.rtl) {
      classes.push('sui-float-label-rtl');
    }
    
    // State classes
    if (this.isFocused || this.hasValue) {
      classes.push('sui-float-label-focused');
    }
    
    if (this.required) {
      classes.push('sui-float-label-required');
    }
    
    if (this.disabled) {
      classes.push('sui-float-label-disabled');
    }
    
    // Custom style class
    if (this.styleClass) {
      classes.push(this.styleClass);
    }
    
    return classes.join(' ');
  }

  getFloatLabelStyle(): any {
    return {
      ...this.style
    };
  }

  getLabelText(): string {
    return this.label;
  }

  getForAttribute(): string {
    return this.for;
  }

  isRequired(): boolean {
    return this.required;
  }

  isFocusedOrHasValue(): boolean {
    return this.isFocused || this.hasValue;
  }

  getPlaceholder(): string {
    return this.placeholder;
  }

  getHelperText(): string {
    switch (this.state) {
      case 'error':
        return this.errorText || 'Please correct this field';
      case 'success':
        return this.successText || 'This field is valid';
      case 'warning':
        return this.warningText || 'Please review this field';
      default:
        return this.helperText;
    }
  }

  getAriaLabel(): string {
    if (this.ariaLabel) return this.ariaLabel;
    if (this.label) return this.label;
    return 'Input field';
  }

  getAriaDescribedBy(): string | null {
    const ids = [];
    if (this.ariaDescribedBy) ids.push(this.ariaDescribedBy);
    if (this.helperText) ids.push(`${this.getComponentId()}-helper`);
    if (this.errorText) ids.push(`${this.getComponentId()}-error`);
    return ids.length > 0 ? ids.join(' ') : null;
  }

  getComponentId(): string {
    return `sui-float-label-${Math.random().toString(36).substr(2, 9)}`;
  }

  // ControlValueAccessor implementation
  writeValue(val: any): void {
    this.value = val ?? '';
    if (this.inputElement) {
      this.inputElement.nativeElement.value = this.value;
      this.checkValue();
    }
  }

  registerOnChange(fn: (val: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
