import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToggleButton } from '@synerity/ui';

@Component({
  selector: 'app-su-toggle-button-demo',
  imports: [CommonModule, FormsModule, ToggleButton],
  templateUrl: './su-toggle-button-demo.html',
  styleUrl: './su-toggle-button-demo.scss'
})
export class SuToggleButtonDemo {
  // Single selection
  selectedView: any = 'grid';
  selectedAlign: any = 'left';
  selectedFormat: any = null;
  
  // Multiple selection
  selectedOptions: any[] = [];
  
  // Options
  viewOptions = [
    { label: 'Grid', value: 'grid', icon: '⊞' },
    { label: 'List', value: 'list', icon: '☰' },
    { label: 'Timeline', value: 'timeline', icon: '◷' }
  ];
  
  alignOptions = [
    { label: 'Left', value: 'left', icon: '⇤' },
    { label: 'Center', value: 'center', icon: '↔' },
    { label: 'Right', value: 'right', icon: '⇥' },
    { label: 'Justify', value: 'justify', icon: '⊟' }
  ];
  
  formatOptions = [
    { label: 'Bold', value: 'bold', icon: '𝐁' },
    { label: 'Italic', value: 'italic', icon: '𝐼' },
    { label: 'Underline', value: 'underline', icon: 'U̲' }
  ];
  
  multipleOptions = [
    { label: 'Email', value: 'email', icon: '📧' },
    { label: 'SMS', value: 'sms', icon: '💬' },
    { label: 'Push', value: 'push', icon: '🔔' },
    { label: 'Chat', value: 'chat', icon: '💭' }
  ];
  
  handleChange(value: any): void {
    console.log('Selection changed:', value);
  }
}
