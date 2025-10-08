import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Editor } from '@synerity/ui';

@Component({
  selector: 'app-editor-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Editor],
  templateUrl: './editor-demo.html',
  styleUrls: ['./editor-demo.scss']
})
export class EditorDemo {
  @Input() currentExample: any;

  // Basic Editor
  basicContent = 'Welcome to the **Synerity Editor**! This is a rich text editor with full formatting capabilities.';

  // Size variants
  smallContent = 'Small editor for compact spaces.';
  mediumContent = 'Medium editor for standard use cases.';
  largeContent = 'Large editor for extensive content creation.';

  // States
  disabledContent = 'This editor is disabled and cannot be edited.';
  readonlyContent = 'This editor is in readonly mode. The toolbar is hidden and content cannot be modified.';

  // Custom styling
  customContent = 'This editor has custom styling with a different theme.';

  // Form integration
  formContent = 'This editor is integrated with Angular forms.';
  formValid = true;

  // Rich content example
  richContentExample = '<h1>Rich Text Example</h1><p>This editor demonstrates <strong>bold</strong>, <em>italic</em>, and <u>underlined</u> text formatting.</p><ul><li>Bullet point 1</li><li>Bullet point 2</li></ul><ol><li>Numbered item 1</li><li>Numbered item 2</li></ol><blockquote>This is a blockquote with important information.</blockquote><p>You can also add <code>inline code</code> and <a href="#">links</a>.</p>';

  // Event handlers
  onContentChange(content: string, example: string): void {
    console.log(`${example} content changed:`, content);
  }

  onFocus(example: string): void {
    console.log(`${example} editor focused`);
  }

  onBlur(example: string): void {
    console.log(`${example} editor blurred`);
  }

  // Utility methods
  clearContent(): void {
    this.basicContent = '';
  }

  insertSampleContent(): void {
    this.basicContent = `
      <h1>Sample Rich Content</h1>
      <p>This is a <strong>sample</strong> of rich content with various formatting:</p>
      <ul>
        <li><strong>Bold text</strong></li>
        <li><em>Italic text</em></li>
        <li><u>Underlined text</u></li>
      </ul>
      <blockquote>
        This is a blockquote with some important information.
      </blockquote>
      <p>You can also add <code>inline code</code> and create links.</p>
    `;
  }

  // Form validation
  validateForm(): void {
    this.formValid = this.formContent.trim().length > 0;
  }

  onFormContentChange(): void {
    this.validateForm();
  }

  // Theme toggle
  toggleTheme(editor: any): void {
    if (editor.theme === 'light') {
      editor.theme = 'dark';
    } else {
      editor.theme = 'light';
    }
  }
}
