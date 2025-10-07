import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sui-toggle-switch',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './toggle-switch.html',
  styleUrl: './toggle-switch.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleSwitch),
      multi: true
    }
  ]
})
export class ToggleSwitch implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() name = '';
  @Input() inputId = '';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() color: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'purple' | 'pink' = 'default';
  @Input() label = '';
  @Input() labelPosition: 'left' | 'right' = 'right';
  @Input() showText = false;
  @Input() onText = 'On';
  @Input() offText = 'Off';
  @Input() compact = false;
  @Input() spacious = false;
  @Input() animated = false;
  @Input() bounce = false;
  @Input() glow = false;
  @Input() loading = false;
  @Input() ariaLabel = 'Toggle switch';
  @Input() ariaDescribedBy: string | null = null;
  @Output() change = new EventEmitter<boolean>();
  @Output() onToggle = new EventEmitter<boolean>();

  checked = false;

  private onChange: (val: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: boolean): void {
    this.checked = !!value;
  }

  registerOnChange(fn: (val: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggle(): void {
    if (this.disabled || this.readonly || this.loading) return;
    this.checked = !this.checked;
    this.onChange(this.checked);
    this.change.emit(this.checked);
    this.onToggle.emit(this.checked);
  }

  onBlur(): void {
    this.onTouched();
  }

  onKeyDown(event: KeyboardEvent): void {
    if (this.disabled || this.readonly || this.loading) return;
    
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.toggle();
    }
  }

  getComponentClass(): string {
    const classes = [
      'sui-toggle-switch',
      `sui-toggle-switch-${this.size}`,
      `sui-toggle-switch-${this.theme}`
    ];

    if (this.disabled) classes.push('sui-toggle-switch-disabled');
    if (this.readonly) classes.push('sui-toggle-switch-readonly');
    if (this.loading) classes.push('sui-toggle-switch-loading');
    if (this.compact) classes.push('sui-toggle-switch-compact');
    if (this.spacious) classes.push('sui-toggle-switch-spacious');
    if (this.animated) classes.push('sui-toggle-switch-animated');
    if (this.bounce) classes.push('sui-toggle-switch-bounce');
    if (this.glow) classes.push('sui-toggle-switch-glow');
    if (this.showText) classes.push('sui-toggle-switch-with-text');
    if (this.labelPosition === 'left') classes.push('sui-toggle-switch-with-label');
    if (this.color !== 'default') classes.push(`sui-toggle-switch-${this.color}`);

    return classes.join(' ');
  }

  getButtonClass(): string {
    const classes = ['sui-toggle-switch-button'];
    
    if (this.checked) classes.push('sui-toggle-switch-checked');
    if (this.loading) classes.push('sui-toggle-switch-loading');
    
    return classes.join(' ');
  }

  getTextClass(): string {
    const classes = ['sui-toggle-switch-text'];
    
    if (this.checked) {
      classes.push('sui-toggle-switch-text-on');
    } else {
      classes.push('sui-toggle-switch-text-off');
    }
    
    return classes.join(' ');
  }

  getDisplayText(): string {
    return this.checked ? this.onText : this.offText;
  }

  getAriaLabel(): string {
    if (this.ariaLabel) return this.ariaLabel;
    return `${this.label || 'Toggle switch'}: ${this.getDisplayText()}`;
  }
}
