import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Textarea } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-textarea-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Textarea],
  templateUrl: './textarea-demo.html',
  styleUrls: ['./textarea-demo.scss']
})
export class TextareaDemoComponent {
  @Input() currentExample: ComponentExample = { name: '', code: '', description: '' };

  // Basic textarea example
  basicValue = '';
  basicPlaceholder = 'Enter your message here...';

  // Autosize textarea example
  autosizeValue = 'This textarea automatically adjusts its height based on content. Try typing multiple lines to see it grow!';
  autosizePlaceholder = 'Type multiple lines to see autosize in action...';

  // Disabled textarea example
  disabledValue = 'This textarea is disabled and cannot be edited.';
  disabledPlaceholder = 'This is disabled';

  // Different sizes example
  smallValue = '';
  mediumValue = '';
  largeValue = '';

  // Form validation example
  emailValue = '';
  messageValue = '';
  isEmailValid = true;
  isMessageValid = true;

  // Character count example
  charCountValue = '';
  maxLength = 100;

  // Resizable example
  resizableValue = 'This textarea can be resized by dragging the bottom-right corner.';

  // Custom styling example
  customValue = 'This textarea has custom styling applied.';

  // Event handlers
  onBasicChange(value: string): void {
    this.basicValue = value;
  }

  onAutosizeChange(value: string): void {
    this.autosizeValue = value;
  }

  onSmallChange(value: string): void {
    this.smallValue = value;
  }

  onMediumChange(value: string): void {
    this.mediumValue = value;
  }

  onLargeChange(value: string): void {
    this.largeValue = value;
  }

  onEmailChange(value: string): void {
    this.emailValue = value;
    this.isEmailValid = this.validateEmail(value);
  }

  onMessageChange(value: string): void {
    this.messageValue = value;
    this.isMessageValid = value.length >= 10;
  }

  onCharCountChange(value: string): void {
    this.charCountValue = value;
  }

  onResizableChange(value: string): void {
    this.resizableValue = value;
  }

  onCustomChange(value: string): void {
    this.customValue = value;
  }

  // Validation methods
  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email === '' || emailRegex.test(email);
  }

  // Getters for computed values
  get remainingChars(): number {
    return this.maxLength - this.charCountValue.length;
  }

  get isCharLimitExceeded(): boolean {
    return this.charCountValue.length > this.maxLength;
  }

  get emailError(): string {
    if (this.emailValue && !this.isEmailValid) {
      return 'Please enter a valid email address';
    }
    return '';
  }

  get messageError(): string {
    if (this.messageValue && !this.isMessageValid) {
      return 'Message must be at least 10 characters long';
    }
    return '';
  }
}