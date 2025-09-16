import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Editor as SuiEditor } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-editor',
  imports: [CommonModule, FormsModule, SuiEditor, Tabs],
  templateUrl: './editor.html',
  styleUrl: './editor.scss'
})
export class EditorPage {
  activeTab = 'demo';
  
  // Demo data
  basicEditor = '<h2>Welcome to the Rich Text Editor</h2><p>This is a professional rich text editor with <strong>bold</strong>, <em>italic</em>, and <u>underlined</u> text support.</p><ul><li>Bullet lists</li><li>Numbered lists</li><li>Links and images</li></ul><blockquote>This is a blockquote example with professional styling.</blockquote>';
  readonlyEditor = '<h2>Read-only Content</h2><p>This content cannot be edited. It\'s perfect for displaying formatted text that users should only view.</p><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>';
  disabledEditor = '<h3>Disabled Editor</h3><p>This editor is disabled and cannot be interacted with.</p>';
  lightThemeEditor = '<h3>Light Theme Editor</h3><p>This editor uses the light theme with clean, modern styling. Perfect for bright interfaces.</p><p>Try using the <strong>toolbar</strong> to format your text!</p>';
  darkThemeEditor = '<h3>Dark Theme Editor</h3><p>This editor uses the dark theme with professional dark styling. Perfect for dark interfaces.</p><p>All formatting options work seamlessly in both themes.</p>';
  interactiveEditor = '<p>Start typing here to see the editor in action!</p>';
  
  // Interactive settings
  interactiveHeight = '300px';
  interactiveShowToolbar = true;
  interactiveDisabled = false;
  interactiveReadonly = false;
  interactivePlaceholder = 'Enter your content here...';
  
  // Code visibility states
  showBasicEditorCode = false;
  showReadonlyEditorCode = false;
  showDisabledEditorCode = false;
  showCustomEditorCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicEditor':
        this.showBasicEditorCode = !this.showBasicEditorCode;
        break;
      case 'readonlyEditor':
        this.showReadonlyEditorCode = !this.showReadonlyEditorCode;
        break;
      case 'disabledEditor':
        this.showDisabledEditorCode = !this.showDisabledEditorCode;
        break;
      case 'customEditor':
        this.showCustomEditorCode = !this.showCustomEditorCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onEditorChange(value: string, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Helper methods
  getEditorStatus(value: string): { status: string; color: string; icon: string } {
    if (!value || value.trim() === '' || value === '<p></p>') {
      return { status: 'Empty', color: 'text-gray-600', icon: '○' };
    } else {
      return { status: 'Has Content', color: 'text-green-600', icon: '✓' };
    }
  }
  
  getEditorDescription(value: string): string {
    if (!value || value.trim() === '' || value === '<p></p>') {
      return 'No content';
    } else {
      const textContent = this.stripHtml(value);
      return textContent.length > 50 ? `${textContent.substring(0, 50)}...` : textContent;
    }
  }
  
  private stripHtml(html: string): string {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }
  
  // Quick actions
  setSampleContent() {
    this.interactiveEditor = '<h2>Sample Content</h2><p>This is a sample of rich text content with <strong>bold text</strong> and <em>italic text</em>.</p><ul><li>List item 1</li><li>List item 2</li></ul><blockquote>This is a blockquote example.</blockquote>';
  }
  
  setHtmlContent() {
    this.interactiveEditor = '<h1>HTML Example</h1><p>This editor supports <a href="#">links</a>, <code>code snippets</code>, and various formatting options.</p><pre><code>function example() {<br>&nbsp;&nbsp;return "Hello World!";<br>}</code></pre>';
  }
  
  clearContent() {
    this.interactiveEditor = '';
  }
  
  // Toolbar actions
  bold() {
    document.execCommand('bold', false);
  }
  
  italic() {
    document.execCommand('italic', false);
  }
  
  underline() {
    document.execCommand('underline', false);
  }
  
  insertLink() {
    const url = prompt('Enter URL:');
    if (url) {
      document.execCommand('createLink', false, url);
    }
  }
  
  insertUnorderedList() {
    document.execCommand('insertUnorderedList', false);
  }
  
  insertOrderedList() {
    document.execCommand('insertOrderedList', false);
  }
}
