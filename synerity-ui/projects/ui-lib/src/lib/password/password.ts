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
  @Input() inputId = '';
  @Input() placeholder = '';
  @Input() minLength: number | null = null;
  @Input() maxLength: number | null = null;
  @Input() toggleMask = true;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() color: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink' = 'default';
  @Input() label = '';
  @Input() helperText = '';
  @Input() errorText = '';
  @Input() icon = '';
  @Input() compact = false;
  @Input() spacious = false;
  @Input() animated = false;
  @Input() bounce = false;
  @Input() glow = false;
  @Input() loading = false;
  @Input() showStrength = false;
  @Input() ariaLabel = '';
  @Input() ariaDescribedBy: string | null = null;
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

  onKeyDown(event: KeyboardEvent): void {
    if (this.disabled || this.readonly) return;
    
    if (event.key === 'Enter') {
      this.onTouched();
    }
  }

  toggleVisibility(): void {
    if (!this.toggleMask || this.disabled || this.readonly || this.loading) return;
    this.show = !this.show;
    this.onToggle.emit(this.show);
  }

  getComponentClass(): string {
    const classes = [
      'sui-password',
      `sui-password-${this.size}`,
      `sui-password-${this.theme}`
    ];

    if (this.disabled) classes.push('sui-password-disabled');
    if (this.readonly) classes.push('sui-password-readonly');
    if (this.hasError) classes.push('sui-password-error');
    if (this.loading) classes.push('sui-password-loading');
    if (this.compact) classes.push('sui-password-compact');
    if (this.spacious) classes.push('sui-password-spacious');
    if (this.animated) classes.push('sui-password-animated');
    if (this.bounce) classes.push('sui-password-bounce');
    if (this.glow) classes.push('sui-password-glow');
    if (this.icon) classes.push('sui-password-with-icon');
    if (this.color !== 'default') classes.push(`sui-password-${this.color}`);

    return classes.join(' ');
  }

  getContainerClass(): string {
    const classes = ['sui-password-container'];
    
    if (this.hasError) classes.push('sui-password-error');
    
    return classes.join(' ');
  }

  getInputClass(): string {
    return 'sui-password-input';
  }

  getToggleClass(): string {
    const classes = ['sui-password-toggle'];
    
    if (this.loading) classes.push('sui-password-loading');
    
    return classes.join(' ');
  }

  getAriaLabel(): string {
    if (this.ariaLabel) return this.ariaLabel;
    if (this.label) return this.label;
    return 'Password input';
  }

  getAriaDescribedBy(): string | null {
    const ids = [];
    if (this.ariaDescribedBy) ids.push(this.ariaDescribedBy);
    if (this.helperText) ids.push(`${this.inputId}-helper`);
    if (this.errorText) ids.push(`${this.inputId}-error`);
    if (this.showStrength) ids.push(`${this.inputId}-strength`);
    return ids.length > 0 ? ids.join(' ') : null;
  }

  getToggleButtonText(): string {
    return this.show ? 'Hide' : 'Show';
  }

  getToggleButtonAriaLabel(): string {
    return this.show ? 'Hide password' : 'Show password';
  }

  getPasswordStrength(): 'weak' | 'medium' | 'strong' | 'none' {
    if (!this.value) return 'none';
    
    const length = this.value.length;
    const hasLower = /[a-z]/.test(this.value);
    const hasUpper = /[A-Z]/.test(this.value);
    const hasNumber = /\d/.test(this.value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(this.value);
    
    let score = 0;
    if (length >= 8) score++;
    if (length >= 12) score++;
    if (hasLower) score++;
    if (hasUpper) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;
    
    if (score < 3) return 'weak';
    if (score < 5) return 'medium';
    return 'strong';
  }

  getPasswordStrengthText(): string {
    const strength = this.getPasswordStrength();
    switch (strength) {
      case 'weak': return 'Weak password';
      case 'medium': return 'Medium strength';
      case 'strong': return 'Strong password';
      default: return '';
    }
  }

  getPasswordStrengthSegments(): number[] {
    const strength = this.getPasswordStrength();
    switch (strength) {
      case 'weak': return [1, 0, 0, 0];
      case 'medium': return [1, 1, 1, 0];
      case 'strong': return [1, 1, 1, 1];
      default: return [0, 0, 0, 0];
    }
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
