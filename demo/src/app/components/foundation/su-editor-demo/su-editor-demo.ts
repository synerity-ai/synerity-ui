import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Editor } from '@synerity/ui';

@Component({
  selector: 'app-su-editor-demo',
  standalone: true,
  imports: [CommonModule, Editor],
  templateUrl: './su-editor-demo.html',
  styleUrl: './su-editor-demo.scss'
})
export class SuEditorDemo {
  // Basic editor states
  basicContent = 'This is a basic rich text editor with bold and italic text.';
  disabledContent = 'This editor is disabled and cannot be edited.';
  readonlyContent = 'This editor is in readonly mode. Content can be viewed but not modified.';

  // Size variants
  smallContent = 'Small editor with limited height for compact forms.';
  mediumContent = 'Medium-sized editor for standard content editing.';
  largeContent = 'Large editor with more height for extensive content creation and editing.';

  // Theme variants
  lightContent = 'Light theme editor with clean, bright interface.';
  darkContent = 'Dark theme editor with dark interface for low-light environments.';

  // Toolbar variants
  withToolbarContent = 'Editor with full toolbar including formatting options.';
  withoutToolbarContent = 'Editor without toolbar for simple text input.';

  // Content templates
  blogPostContent = `
    <h2>Welcome to Our Blog</h2>
    <p>This is a sample blog post created with our rich text editor. You can format text with various options:</p>
    <ul>
      <li><strong>Bold text</strong> for emphasis</li>
      <li><em>Italic text</em> for style</li>
      <li><u>Underlined text</u> for importance</li>
    </ul>
    <blockquote>
      <p>This is a blockquote example for highlighting important content.</p>
    </blockquote>
    <p>You can also create numbered lists:</p>
    <ol>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ol>
  `;

  emailContent = `
    <p>Dear Team,</p>
    <p>I hope this email finds you well. I wanted to update you on our project progress:</p>
    <p><strong>Key Updates:</strong></p>
    <ul>
      <li>Completed phase 1 development</li>
      <li>Started testing phase</li>
      <li>Planning for deployment</li>
    </ul>
    <p>Please let me know if you have any questions.</p>
    <p>Best regards,<br>Project Manager</p>
  `;

  documentationContent = `
    <h1>API Documentation</h1>
    <h2>Overview</h2>
    <p>This API provides comprehensive functionality for managing user data and system operations.</p>
    
    <h2>Authentication</h2>
    <p>All API requests require authentication using Bearer tokens.</p>
    
    <h3>Headers</h3>
    <pre><code>Authorization: Bearer your-token-here
Content-Type: application/json</code></pre>
    
    <h2>Endpoints</h2>
    <table border="1" style="border-collapse: collapse; width: 100%;">
      <tr>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>GET</td>
        <td>/api/users</td>
        <td>Retrieve all users</td>
      </tr>
      <tr>
        <td>POST</td>
        <td>/api/users</td>
        <td>Create a new user</td>
      </tr>
    </table>
  `;

  // Form integration
  formData = {
    title: '',
    content: 'Enter your article content here...',
    summary: 'Brief summary of your article...',
    tags: ''
  };

  // Editor configurations
  editorConfigs = [
    { name: 'Basic', content: this.basicContent, height: '200px', showToolbar: true },
    { name: 'Compact', content: this.smallContent, height: '150px', showToolbar: false },
    { name: 'Large', content: this.largeContent, height: '400px', showToolbar: true },
    { name: 'Dark', content: this.darkContent, height: '250px', showToolbar: true, theme: 'dark' }
  ];

  selectedConfig = this.editorConfigs[0];

  onContentChange(content: string, property: string): void {
    (this as any)[property] = content;
  }

  onFormContentChange(content: string, property: string): void {
    this.formData[property as keyof typeof this.formData] = content;
  }

  resetForm(): void {
    this.formData = {
      title: '',
      content: 'Enter your article content here...',
      summary: 'Brief summary of your article...',
      tags: ''
    };
  }

  setDefaultValues(): void {
    this.basicContent = 'This is a basic rich text editor with bold and italic text.';
    this.disabledContent = 'This editor is disabled and cannot be edited.';
    this.readonlyContent = 'This editor is in readonly mode. Content can be viewed but not modified.';
    this.smallContent = 'Small editor with limited height for compact forms.';
    this.mediumContent = 'Medium-sized editor for standard content editing.';
    this.largeContent = 'Large editor with more height for extensive content creation and editing.';
    this.lightContent = 'Light theme editor with clean, bright interface.';
    this.darkContent = 'Dark theme editor with dark interface for low-light environments.';
    this.withToolbarContent = 'Editor with full toolbar including formatting options.';
    this.withoutToolbarContent = 'Editor without toolbar for simple text input.';
  }

  loadTemplate(template: string): void {
    switch (template) {
      case 'blog':
        this.basicContent = this.blogPostContent;
        break;
      case 'email':
        this.basicContent = this.emailContent;
        break;
      case 'documentation':
        this.basicContent = this.documentationContent;
        break;
      default:
        this.basicContent = '<p>Select a template to load sample content.</p>';
    }
  }

  getContentPreview(content: string): string {
    // Strip HTML tags for preview
    return content.replace(/<[^>]*>/g, '').substring(0, 100) + (content.length > 100 ? '...' : '');
  }

  getWordCount(content: string): number {
    const text = content.replace(/<[^>]*>/g, '');
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  }

  getCharacterCount(content: string): number {
    const text = content.replace(/<[^>]*>/g, '');
    return text.length;
  }

  // Template options
  templateOptions = [
    { label: 'Blog Post', value: 'blog' },
    { label: 'Email', value: 'email' },
    { label: 'Documentation', value: 'documentation' }
  ];

  selectedTemplate = '';

  loadSelectedTemplate(): void {
    if (this.selectedTemplate) {
      this.loadTemplate(this.selectedTemplate);
    }
  }
}