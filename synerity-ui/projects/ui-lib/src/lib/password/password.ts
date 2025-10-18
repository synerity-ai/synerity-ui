import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sui-password',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './password.html',
  styleUrl: './password.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Password),
      multi: true
    }
  ]
})
export class Password implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() name = '';
  @Input() inputId = 'sui-password-' + Math.random().toString(36).substr(2, 9);
  @Input() placeholder = '';
  @Input() minLength: number | null = null;
  @Input() maxLength: number | null = null;
  @Input() toggleMask = true;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() label = '';
  @Input() helperText = '';
  @Input() errorText = '';
  @Output() change = new EventEmitter<string>();
  @Output() onToggle = new EventEmitter<boolean>();

  value = '';
  show = false;
  hasError = false;

  private onChange: (val: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.value = value ?? '';
    this.validatePassword();
  }

  registerOnChange(fn: (val: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    if (this.disabled || this.readonly) return;
    
    const input = event.target as HTMLInputElement;
    this.value = input.value ?? '';
    this.validatePassword();
    this.onChange(this.value);
    this.change.emit(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }

  onFocus(): void {
    // Focus handler
  }

  toggleVisibility(): void {
    if (!this.toggleMask || this.disabled || this.readonly) return;
    this.show = !this.show;
    this.onToggle.emit(this.show);
  }

  getInputClass(): string {
    const classes = [
      'sui-password-input',
      `sui-password-input-${this.size}`
    ];

    if (this.hasError || this.errorText) {
      classes.push('sui-password-input-invalid');
    }

    return classes.join(' ');
  }

  private validatePassword(): void {
    this.hasError = false;
    
    if (this.value && this.minLength && this.value.length < this.minLength) {
      this.hasError = true;
    }
    
    if (this.value && this.maxLength && this.value.length > this.maxLength) {
      this.hasError = true;
    }
  }
}
