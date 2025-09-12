import { ChangeDetectionStrategy, Component, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'sui-float-label',
  imports: [CommonModule, NgIf],
  templateUrl: './float-label.html',
  styleUrl: './float-label.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloatLabel {
  @Input() label = '';
  @Input() for = '';
  @Input() required = false;
  @Input() style: any = {};
  @Input() styleClass = '';

  @ViewChild('inputElement') inputElement!: ElementRef;

  isFocused = false;
  hasValue = false;

  @HostListener('focus')
  onFocus(): void {
    this.isFocused = true;
  }

  @HostListener('blur')
  onBlur(): void {
    this.isFocused = false;
    this.checkValue();
  }

  @HostListener('input')
  onInput(): void {
    this.checkValue();
  }

  private checkValue(): void {
    if (this.inputElement) {
      const input = this.inputElement.nativeElement;
      this.hasValue = input.value && input.value.length > 0;
    }
  }

  getFloatLabelClass(): string {
    return `sui-float-label ${this.isFocused || this.hasValue ? 'sui-float-label-focused' : ''} ${this.required ? 'sui-float-label-required' : ''} ${this.styleClass}`.trim();
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
}
