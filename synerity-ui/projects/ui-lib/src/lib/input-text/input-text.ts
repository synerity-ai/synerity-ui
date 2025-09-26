import { Component, Input, Output, EventEmitter, forwardRef, OnInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sui-input-text',
  imports: [CommonModule],
  templateUrl: './input-text.html',
  styleUrl: './input-text.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputText),
      multi: true
    }
  ]
})
export class InputText implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() required: boolean = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() variant: 'default' | 'filled' | 'outlined' = 'default';
  @Input() validationState: 'none' | 'valid' | 'invalid' = 'none';
  @Input() errorMessage: string = '';
  @Input() helperText: string = '';
  @Input() label: string = '';
  @Input() type: 'text' | 'email' | 'password' | 'tel' | 'url' = 'text';
  @Input() maxlength: number | null = null;
  @Input() minlength: number | null = null;
  @Input() pattern: string | null = null;
  @Input() autocomplete: string | null = null;
  @Input() autofocus: boolean = false;
  @Input() spellcheck: boolean = true;
  @Input() prefix: string | null = null;
  @Input() suffix: string | null = null;
  @Input() clearable: boolean = false;
  @Input() showPasswordToggle: boolean = false;

  @Output() blur = new EventEmitter<FocusEvent>();
  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() input = new EventEmitter<Event>();
  @Output() clear = new EventEmitter<void>();

  // ControlValueAccessor implementation
  private _value: string = '';
  private onChange = (value: string) => {};
  private onTouched = () => {};

  // Internal state
  private _showPassword: boolean = false;
  private _focused: boolean = false;

  get value(): string {
    return this._value;
  }

  set value(val: string) {
    this._value = val;
    this.onChange(val);
  }

  get showPassword(): boolean {
    return this._showPassword;
  }

  get focused(): boolean {
    return this._focused;
  }

  get inputType(): string {
    if (this.type === 'password' && this.showPasswordToggle) {
      return this._showPassword ? 'text' : 'password';
    }
    return this.type;
  }

  ngOnInit(): void {
    // Component initialization
  }

  ngOnDestroy(): void {
    // Cleanup
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.input.emit(event);
  }

  onBlur(event: FocusEvent): void {
    this._focused = false;
    this.onTouched();
    this.blur.emit(event);
  }

  onFocus(event: FocusEvent): void {
    this._focused = true;
    this.focus.emit(event);
  }

  onClear(): void {
    this.value = '';
    this.clear.emit();
  }

  togglePasswordVisibility(): void {
    this._showPassword = !this._showPassword;
  }

  writeValue(value: string): void {
    this._value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  get inputClasses(): string {
    const baseClasses = 'sui-input-text';
    const sizeClass = `sui-input-text-${this.size}`;
    const variantClass = `sui-input-text-${this.variant}`;
    const stateClass = this.validationState !== 'none' ? `sui-input-text-${this.validationState}` : '';
    const disabledClass = this.disabled ? 'sui-input-text-disabled' : '';
    const readonlyClass = this.readonly ? 'sui-input-text-readonly' : '';
    
    return `${baseClasses} ${sizeClass} ${variantClass} ${stateClass} ${disabledClass} ${readonlyClass}`.trim();
  }

  get containerClasses(): string {
    return 'relative';
  }

  get hasValue(): boolean {
    return !!(this.value && this.value.length > 0);
  }
}
