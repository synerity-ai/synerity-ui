import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Textarea as SuiTextarea } from '../../../../../ui-lib/src/lib/textarea/textarea';

@Component({
  selector: 'app-inputtextarea',
  imports: [CommonModule, FormsModule, Tabs, SuiTextarea],
  templateUrl: './inputtextarea.html',
  styleUrl: './inputtextarea.scss'
})
export class Inputtextarea {
  activeTab = 'demo';
  
  // Demo data
  basicTextarea = '';
  placeholderTextarea = '';
  disabledTextarea = 'This textarea is disabled and cannot be edited.';
  readonlyTextarea = 'This textarea is read-only.';
  autoResizeValue = '';
  fixedHeightTextarea = '';
  
  // Interactive demo
  interactiveValue = '';
  interactivePlaceholder = 'Type your message here...';
  interactiveDisabled = false;
  interactiveReadonly = false;
  interactiveRequired = false;
  interactiveAutoResize = true;
  interactiveRows = 4;
  interactiveMaxLength = 500;
  
  // Code visibility states
  showBasicTextareaCode = false;
  showTextareaStatesCode = false;
  showTextareaSizesCode = false;
  showAutoResizeCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicTextarea':
        this.showBasicTextareaCode = !this.showBasicTextareaCode;
        break;
      case 'textareaStates':
        this.showTextareaStatesCode = !this.showTextareaStatesCode;
        break;
      case 'textareaSizes':
        this.showTextareaSizesCode = !this.showTextareaSizesCode;
        break;
      case 'autoResize':
        this.showAutoResizeCode = !this.showAutoResizeCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  // Textarea demo methods
  onTextareaChange(value: string) {
    console.log('Textarea changed:', value);
  }
  
  onInteractiveTextareaChange(value: string) {
    console.log('Interactive textarea value changed:', value);
    // sui-textarea handles auto-resize automatically when [autosize]="true"
  }
  
  onTextareaFocus() {
    console.log('Textarea focused');
  }
  
  onTextareaBlur() {
    console.log('Textarea blurred');
  }
  
  clearTextarea() {
    this.interactiveValue = '';
  }
  
  setSampleText() {
    this.interactiveValue = 'This is a sample text for the textarea field. You can type multiple lines of text here. The textarea will automatically resize if auto-resize is enabled.';
  }
  
  toggleDisabled() {
    this.interactiveDisabled = !this.interactiveDisabled;
  }
  
  toggleReadonly() {
    this.interactiveReadonly = !this.interactiveReadonly;
  }
  
  toggleRequired() {
    this.interactiveRequired = !this.interactiveRequired;
  }
  
  toggleAutoResize() {
    this.interactiveAutoResize = !this.interactiveAutoResize;
  }
  
  // Auto-resize functionality
  autoResizeTextarea(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
  
  // Character count
  getCharacterCount(): number {
    return this.interactiveValue.length;
  }
  
  getRemainingCharacters(): number {
    return this.interactiveMaxLength - this.getCharacterCount();
  }
  
  isCharacterLimitReached(): boolean {
    return this.getCharacterCount() >= this.interactiveMaxLength;
  }
}
