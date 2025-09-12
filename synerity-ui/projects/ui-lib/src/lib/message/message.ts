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
    return `sui-message sui-message-${this.severity} ${this.styleClass}`.trim();
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
