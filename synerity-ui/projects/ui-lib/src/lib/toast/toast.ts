import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-toast',
  imports: [NgFor, NgIf],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Toast implements AfterViewInit, OnDestroy {
  @Input() position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center' = 'top-right';
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onClose = new EventEmitter<any>();

  @ViewChild('toastContainer') toastContainer!: ElementRef;

  messages: Array<{ 
    id: string; 
    severity: 'success' | 'info' | 'warn' | 'error'; 
    summary: string; 
    detail?: string;
    life?: number;
    closable?: boolean;
  }> = [];

  ngAfterViewInit(): void {
    // Toast container is ready
  }

  ngOnDestroy(): void {
    this.clearAll();
  }

  add(message: { 
    severity: 'success' | 'info' | 'warn' | 'error'; 
    summary: string; 
    detail?: string;
    life?: number;
    closable?: boolean;
  }): void {
    const id = this.generateId();
    const toastMessage = {
      id,
      ...message,
      life: message.life || 3000,
      closable: message.closable !== false
    };
    
    this.messages.push(toastMessage);
    
    if (toastMessage.life > 0) {
      setTimeout(() => {
        this.remove(id);
      }, toastMessage.life);
    }
  }

  remove(id: string): void {
    const index = this.messages.findIndex(msg => msg.id === id);
    if (index > -1) {
      const message = this.messages[index];
      this.messages.splice(index, 1);
      this.onClose.emit(message);
    }
  }

  clearAll(): void {
    this.messages = [];
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  getToastClass(): string {
    return `sui-toast sui-toast-${this.position} ${this.styleClass}`.trim();
  }

  getToastStyle(): any {
    return {
      ...this.style
    };
  }

  getMessageClass(message: any): string {
    return `sui-toast-message sui-toast-message-${message.severity}`;
  }
}
