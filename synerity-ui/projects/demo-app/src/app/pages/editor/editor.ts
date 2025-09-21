import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Editor as SuiEditor } from '../../../../../ui-lib/src/lib/editor/editor';

@Component({
  selector: 'app-editor',
  imports: [CommonModule, FormsModule, Tabs, SuiEditor],
  templateUrl: './editor.html',
  styleUrl: './editor.scss'
})
export class EditorComponent {
  activeTab = 'demo';
  showBasicCode = false;
  showCustomCode = false;
  showReadonlyCode = false;

  // Demo data
  basicContent = '<p>This is a <strong>rich text editor</strong> with basic formatting capabilities.</p><p>You can <em>italicize text</em>, add <u>underlines</u>, and create lists:</p><ul><li>First item</li><li>Second item</li><li>Third item</li></ul>';

  customContent = '<h2>Advanced Editor Features</h2><p>This editor supports:</p><ol><li>Headers and paragraphs</li><li>Text formatting (bold, italic, underline)</li><li>Lists (ordered and unordered)</li><li>Links and images</li><li>Tables and code blocks</li></ol><p>Try editing this content!</p>';

  readonlyContent = '<h3>Read-Only Content</h3><p>This content cannot be edited. It\'s displayed in read-only mode for viewing purposes.</p><blockquote>This is a quote that cannot be modified.</blockquote>';

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
      case 'readonly':
        this.showReadonlyCode = !this.showReadonlyCode;
        break;
    }
  }

  onEditorChange(content: string): void {
    console.log('Editor content changed:', content);
  }

  onEditorFocus(): void {
    console.log('Editor focused');
  }

  onEditorBlur(): void {
    console.log('Editor blurred');
  }

  onEditorReady(): void {
    console.log('Editor ready');
  }
}
