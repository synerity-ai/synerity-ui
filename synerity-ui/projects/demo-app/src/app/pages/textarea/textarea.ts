import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Textarea as SuiTextarea } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-textarea',
  imports: [CommonModule, FormsModule, SuiTextarea, Tabs],
  templateUrl: './textarea.html',
  styleUrl: './textarea.scss'
})
export class TextareaPage {
  activeTab = 'demo';
  
  // Demo data
  basicValue = '';
  placeholderValue = '';
  disabledValue = 'This textarea is disabled';
  readonlyValue = 'This textarea is read-only';
  autosizeValue = '';
  rowsValue = '';
  interactiveValue = '';
  interactiveRows = 4;
  interactivePlaceholder = 'Enter your message...';
  interactiveDisabled = false;
  interactiveReadonly = false;
  interactiveAutosize = false;
  
  // Code visibility states
  showBasicTextareaCode = false;
  showPlaceholderTextareaCode = false;
  showDisabledTextareaCode = false;
  showReadonlyTextareaCode = false;
  showAutosizeTextareaCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicTextarea':
        this.showBasicTextareaCode = !this.showBasicTextareaCode;
        break;
      case 'placeholderTextarea':
        this.showPlaceholderTextareaCode = !this.showPlaceholderTextareaCode;
        break;
      case 'disabledTextarea':
        this.showDisabledTextareaCode = !this.showDisabledTextareaCode;
        break;
      case 'readonlyTextarea':
        this.showReadonlyTextareaCode = !this.showReadonlyTextareaCode;
        break;
      case 'autosizeTextarea':
        this.showAutosizeTextareaCode = !this.showAutosizeTextareaCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onTextareaChange(value: string, field: string) {
    console.log(`${field} changed to:`, value);
  }
}
