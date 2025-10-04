import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'sui-dialog',
  imports: [NgIf],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Dialog implements AfterViewInit {
  @Input() visible = false;
  @Input() modal = true;
  @Input() closable = true;
  @Input() draggable = true;
  @Input() resizable = false;
  @Input() header = '';
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() width = 'auto';
  @Input() height = 'auto';
  @Input() minWidth = 150;
  @Input() minHeight = 150;
  @Input() maximizable = false;
  @Input() maximized = false;
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'md';
  @Input() position: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'center';
  @Output() onShow = new EventEmitter<void>();
  @Output() onHide = new EventEmitter<void>();
  @Output() onMaximize = new EventEmitter<void>();
  @Output() onUnmaximize = new EventEmitter<void>();

  @ViewChild('dialogElement') dialogElement!: ElementRef;

  private isDragging = false;
  private isResizing = false;
  private startX = 0;
  private startY = 0;
  private startWidth = 0;
  private startHeight = 0;
  private startLeft = 0;
  private startTop = 0;

  ngAfterViewInit(): void {
    if (this.draggable && this.dialogElement) {
      this.setupDragging();
    }
    if (this.resizable && this.dialogElement) {
      this.setupResizing();
    }
  }

  private setupDragging(): void {
    const header = this.dialogElement.nativeElement.querySelector('.sui-dialog-header');
    if (header) {
      header.addEventListener('mousedown', this.onDragStart.bind(this));
    }
  }

  private setupResizing(): void {
    const resizeHandle = this.dialogElement.nativeElement.querySelector('.sui-dialog-resize-handle');
    if (resizeHandle) {
      resizeHandle.addEventListener('mousedown', this.onResizeStart.bind(this));
    }
  }

  private onDragStart(event: MouseEvent): void {
    if (!this.draggable) return;
    
    event.preventDefault();
    this.isDragging = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
    
    const rect = this.dialogElement.nativeElement.getBoundingClientRect();
    this.startLeft = rect.left;
    this.startTop = rect.top;
    
    document.addEventListener('mousemove', this.onDragMove.bind(this));
    document.addEventListener('mouseup', this.onDragEnd.bind(this));
  }

  private onDragMove(event: MouseEvent): void {
    if (!this.isDragging) return;
    
    const deltaX = event.clientX - this.startX;
    const deltaY = event.clientY - this.startY;
    
    this.dialogElement.nativeElement.style.left = `${this.startLeft + deltaX}px`;
    this.dialogElement.nativeElement.style.top = `${this.startTop + deltaY}px`;
  }

  private onDragEnd(): void {
    this.isDragging = false;
    document.removeEventListener('mousemove', this.onDragMove.bind(this));
    document.removeEventListener('mouseup', this.onDragEnd.bind(this));
  }

  private onResizeStart(event: MouseEvent): void {
    if (!this.resizable) return;
    
    event.preventDefault();
    this.isResizing = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
    
    const rect = this.dialogElement.nativeElement.getBoundingClientRect();
    this.startWidth = rect.width;
    this.startHeight = rect.height;
    
    document.addEventListener('mousemove', this.onResizeMove.bind(this));
    document.addEventListener('mouseup', this.onResizeEnd.bind(this));
  }

  private onResizeMove(event: MouseEvent): void {
    if (!this.isResizing) return;
    
    const deltaX = event.clientX - this.startX;
    const deltaY = event.clientY - this.startY;
    
    const newWidth = Math.max(this.minWidth, this.startWidth + deltaX);
    const newHeight = Math.max(this.minHeight, this.startHeight + deltaY);
    
    this.dialogElement.nativeElement.style.width = `${newWidth}px`;
    this.dialogElement.nativeElement.style.height = `${newHeight}px`;
  }

  private onResizeEnd(): void {
    this.isResizing = false;
    document.removeEventListener('mousemove', this.onResizeMove.bind(this));
    document.removeEventListener('mouseup', this.onResizeEnd.bind(this));
  }

  close(): void {
    if (this.closable) {
      this.visible = false;
      this.onHide.emit();
    }
  }

  maximize(): void {
    if (this.maximizable) {
      this.maximized = !this.maximized;
      if (this.maximized) {
        this.onMaximize.emit();
      } else {
        this.onUnmaximize.emit();
      }
    }
  }

  getDialogClass(): string {
    const classes = [
      'sui-dialog',
      `sui-dialog-${this.position}`,
      `sui-dialog-${this.size}`,
      this.styleClass
    ].filter(Boolean);
    
    return classes.join(' ');
  }

  getDialogStyle(): any {
    return {
      width: this.width,
      height: this.height,
      ...this.style
    };
  }
}
