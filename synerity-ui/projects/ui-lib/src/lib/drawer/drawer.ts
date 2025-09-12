import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'sui-drawer',
  imports: [NgIf],
  templateUrl: './drawer.html',
  styleUrl: './drawer.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Drawer implements AfterViewInit, OnDestroy {
  @Input() visible = false;
  @Input() position: 'left' | 'right' | 'top' | 'bottom' = 'left';
  @Input() modal = true;
  @Input() closable = true;
  @Input() blockScroll = true;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() width = '300px';
  @Input() height = '300px';
  @Output() onShow = new EventEmitter<void>();
  @Output() onHide = new EventEmitter<void>();

  @ViewChild('drawerElement') drawerElement!: ElementRef;

  ngAfterViewInit(): void {
    if (this.modal) {
      this.setupEventListeners();
    }
  }

  ngOnDestroy(): void {
    this.removeEventListeners();
  }

  private setupEventListeners(): void {
    document.addEventListener('click', this.onDocumentClick.bind(this));
  }

  private removeEventListeners(): void {
    document.removeEventListener('click', this.onDocumentClick.bind(this));
  }

  private onDocumentClick(event: Event): void {
    if (!this.visible || !this.modal) return;
    
    const target = event.target as HTMLElement;
    const isInsideDrawer = this.drawerElement?.nativeElement.contains(target);
    
    if (!isInsideDrawer) {
      this.hide();
    }
  }

  show(): void {
    this.visible = true;
    this.onShow.emit();
  }

  hide(): void {
    this.visible = false;
    this.onHide.emit();
  }

  toggle(): void {
    if (this.visible) {
      this.hide();
    } else {
      this.show();
    }
  }

  getDrawerClass(): string {
    return `sui-drawer sui-drawer-${this.position} ${this.styleClass}`.trim();
  }

  getDrawerStyle(): any {
    const isVertical = this.position === 'left' || this.position === 'right';
    return {
      [isVertical ? 'width' : 'height']: isVertical ? this.width : this.height,
      ...this.style
    };
  }
}
