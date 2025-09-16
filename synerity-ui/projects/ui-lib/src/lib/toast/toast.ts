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
    const baseClasses = 'fixed z-50 space-y-2 pointer-events-none';
    
    const positionClasses = {
      'top-right': 'top-4 right-4',
      'top-left': 'top-4 left-4',
      'bottom-right': 'bottom-4 right-4',
      'bottom-left': 'bottom-4 left-4',
      'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
      'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
    };
    
    return `${baseClasses} ${positionClasses[this.position]} ${this.styleClass}`.trim();
  }

  getToastStyle(): any {
    return {
      ...this.style
    };
  }

  getMessageClass(message: { severity: 'success' | 'info' | 'warn' | 'error' }): string {
    const baseClasses = 'flex items-start p-4 rounded-lg shadow-lg border pointer-events-auto transform transition-all duration-300 ease-in-out';
    
    const severityClasses = {
      success: 'bg-green-50 border-green-200 text-green-800',
      info: 'bg-blue-50 border-blue-200 text-blue-800',
      warn: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      error: 'bg-red-50 border-red-200 text-red-800'
    };
    
    return `${baseClasses} ${severityClasses[message.severity]}`;
  }

  trackByMessageId(index: number, message: any): string {
    return message.id;
  }
}
