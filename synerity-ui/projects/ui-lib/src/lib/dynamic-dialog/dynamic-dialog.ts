import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'sui-dynamic-dialog',
  imports: [NgIf],
  templateUrl: './dynamic-dialog.html',
  styleUrl: './dynamic-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicDialog implements AfterViewInit, OnDestroy {
  @Input() visible = false;
  @Input() header = '';
  @Input() modal = true;
  @Input() closable = true;
  @Input() draggable = true;
  @Input() resizable = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() width = 'auto';
  @Input() height = 'auto';
  @Input() position: 'center' | 'top' | 'bottom' | 'left' | 'right' = 'center';
  @Output() onShow = new EventEmitter<void>();
  @Output() onHide = new EventEmitter<void>();

  @ViewChild('dialogElement') dialogElement!: ElementRef;

  private isDragging = false;
  private startX = 0;
  private startY = 0;
  private startLeft = 0;
  private startTop = 0;

  ngAfterViewInit(): void {
    if (this.draggable && this.dialogElement) {
      this.setupDragging();
    }
  }

  ngOnDestroy(): void {
    this.removeEventListeners();
  }

  private setupDragging(): void {
    const header = this.dialogElement.nativeElement.querySelector('.sui-dynamic-dialog-header');
    if (header) {
      header.addEventListener('mousedown', this.onDragStart.bind(this));
    }
  }

  private removeEventListeners(): void {
    document.removeEventListener('mousemove', this.onDragMove.bind(this));
    document.removeEventListener('mouseup', this.onDragEnd.bind(this));
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
    this.removeEventListeners();
  }

  show(): void {
    this.visible = true;
    this.onShow.emit();
  }

  hide(): void {
    this.visible = false;
    this.onHide.emit();
  }

  close(): void {
    if (this.closable) {
      this.hide();
    }
  }

  getDialogClass(): string {
    return `sui-dynamic-dialog sui-dynamic-dialog-${this.position} ${this.styleClass}`.trim();
  }

  getDialogStyle(): any {
    return {
      width: this.width,
      height: this.height,
      ...this.style
    };
  }
}
