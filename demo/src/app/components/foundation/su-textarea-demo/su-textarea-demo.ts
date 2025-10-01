import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Textarea } from '@synerity/ui';

@Component({
  selector: 'app-su-textarea-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Textarea],
  templateUrl: './su-textarea-demo.html',
  styleUrl: './su-textarea-demo.scss'
})
export class SuTextareaDemo {
  // Basic textarea
  basicText = '';

  // Comments textarea
  commentText = '';

  // Description textarea
  descriptionText = 'This is a pre-filled description that can be edited.';

  // Disabled textarea
  disabledText = 'This content cannot be edited';

  // Auto-resize textarea
  autosizeText = '';

  // Large textarea (many rows)
  largeText = '';

  // Form example
  formData = {
    feedback: '',
    suggestions: '',
    additionalComments: ''
  };

  // Interactive demo
  currentText = '';
  currentRows = 3;
  currentAutosize = false;
  currentDisabled = false;

  // Row options - PROPERTY not method
  rowOptions = [
    { value: 2, label: '2 rows' },
    { value: 3, label: '3 rows (default)' },
    { value: 5, label: '5 rows' },
    { value: 10, label: '10 rows' }
  ];

  // Event handlers
  onTextareaChange(value: string): void {
    console.log('Textarea changed, length:', value.length);
  }

  // Character count
  getCharacterCount(text: string): number {
    return text.length;
  }

  getWordCount(text: string): number {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  }

  // Form validation
  isFormValid(): boolean {
    return this.formData.feedback.length >= 10 &&
           this.formData.suggestions.length >= 10;
  }

  // Reset values
  resetValues(): void {
    this.basicText = '';
    this.commentText = '';
    this.descriptionText = '';
    this.largeText = '';
    this.autosizeText = '';
    this.currentText = '';
    this.formData = {
      feedback: '',
      suggestions: '',
      additionalComments: ''
    };
  }

  submitFeedback(): void {
    if (this.isFormValid()) {
      alert('Feedback submitted successfully!');
      this.formData = {
        feedback: '',
        suggestions: '',
        additionalComments: ''
      };
    }
  }
}
