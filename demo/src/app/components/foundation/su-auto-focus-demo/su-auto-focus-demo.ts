import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoFocus } from '@synerity/ui';

@Component({
  selector: 'app-su-auto-focus-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, AutoFocus],
  templateUrl: './su-auto-focus-demo.html',
  styleUrl: './su-auto-focus-demo.scss'
})
export class SuAutoFocusDemo {
  // Basic auto-focus
  basicInput = '';

  // Delayed focus
  delayedInput = '';
  currentDelay = 0;

  // Conditional focus
  focusCondition = true;
  conditionalInput = '';

  // Delay options - PROPERTY not method
  delayOptions = [
    { value: 0, label: 'No delay' },
    { value: 500, label: '500ms' },
    { value: 1000, label: '1 second' },
    { value: 2000, label: '2 seconds' }
  ];

  // Form example
  formData = {
    username: '',
    email: '',
    password: ''
  };

  // Event handlers
  onInputChange(value: string): void {
    console.log('Input value:', value);
  }

  // Reset
  resetPage(): void {
    window.location.reload();
  }
}
