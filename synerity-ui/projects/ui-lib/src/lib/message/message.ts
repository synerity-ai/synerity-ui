import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'sui-message',
  imports: [NgIf],
  templateUrl: './message.html',
  styleUrl: './message.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Message {
  @Input() severity: 'success' | 'info' | 'warn' | 'error' = 'info';
  @Input() text = '';
  @Input() closable = true;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onClose = new EventEmitter<void>();

  visible = true;

  close(): void {
    this.visible = false;
    this.onClose.emit();
  }

  getMessageClass(): string {
    const baseClasses = 'flex items-center p-4 rounded-lg border transition-all duration-200';
    
    const severityClasses = {
      success: 'bg-green-50 border-green-200 text-green-800',
      info: 'bg-blue-50 border-blue-200 text-blue-800',
      warn: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      error: 'bg-red-50 border-red-200 text-red-800'
    };
    
    return `${baseClasses} ${severityClasses[this.severity]} ${this.styleClass}`.trim();
  }

  getMessageStyle(): any {
    return {
      ...this.style
    };
  }

  getIcon(): string {
    switch (this.severity) {
      case 'success': return '✓';
      case 'info': return 'ℹ';
      case 'warn': return '⚠';
      case 'error': return '✗';
      default: return 'ℹ';
    }
  }
}
