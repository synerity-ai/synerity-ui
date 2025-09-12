import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'sui-splitter',
  imports: [],
  templateUrl: './splitter.html',
  styleUrl: './splitter.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Splitter implements AfterViewInit {
  @Input() layout: 'horizontal' | 'vertical' = 'horizontal';
  @Input() gutterSize = 4;
  @Input() minSizes: number[] = [0, 0];
  @Input() maxSizes: number[] = [100, 100];
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onResizeEnd = new EventEmitter<any>();

  @ViewChild('splitterElement') splitterElement!: ElementRef;

  panels: Array<{ size: number; minSize: number; maxSize: number }> = [];
  isResizing = false;
  startPosition = 0;
  startSizes: number[] = [];

  ngAfterViewInit(): void {
    this.initializePanels();
  }

  private initializePanels(): void {
    const panelCount = 2; // Default to 2 panels
    this.panels = [];
    
    for (let i = 0; i < panelCount; i++) {
      this.panels.push({
        size: 50, // Default 50% each
        minSize: this.minSizes[i] || 0,
        maxSize: this.maxSizes[i] || 100
      });
    }
  }

  onGutterMouseDown(event: MouseEvent, gutterIndex: number): void {
    event.preventDefault();
    this.isResizing = true;
    this.startPosition = this.layout === 'horizontal' ? event.clientX : event.clientY;
    this.startSizes = [...this.panels.map(p => p.size)];
    
    document.addEventListener('mousemove', this.onMouseMove.bind(this));
    document.addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  private onMouseMove(event: MouseEvent): void {
    if (!this.isResizing) return;
    
    const currentPosition = this.layout === 'horizontal' ? event.clientX : event.clientY;
    const delta = currentPosition - this.startPosition;
    
    if (this.splitterElement) {
      const containerSize = this.layout === 'horizontal' 
        ? this.splitterElement.nativeElement.clientWidth 
        : this.splitterElement.nativeElement.clientHeight;
      
      const deltaPercent = (delta / containerSize) * 100;
      
      const newSize1 = Math.max(
        this.panels[0].minSize,
        Math.min(this.panels[0].maxSize, this.startSizes[0] + deltaPercent)
      );
      const newSize2 = Math.max(
        this.panels[1].minSize,
        Math.min(this.panels[1].maxSize, this.startSizes[1] - deltaPercent)
      );
      
      this.panels[0].size = newSize1;
      this.panels[1].size = newSize2;
    }
  }

  private onMouseUp(): void {
    this.isResizing = false;
    document.removeEventListener('mousemove', this.onMouseMove.bind(this));
    document.removeEventListener('mouseup', this.onMouseUp.bind(this));
    
    this.onResizeEnd.emit({
      sizes: this.panels.map(p => p.size)
    });
  }

  getSplitterClass(): string {
    return `sui-splitter sui-splitter-${this.layout} ${this.styleClass}`.trim();
  }

  getSplitterStyle(): any {
    return {
      ...this.style
    };
  }

  getPanelStyle(index: number): any {
    return {
      [this.layout === 'horizontal' ? 'width' : 'height']: `${this.panels[index]?.size || 50}%`
    };
  }

  getGutterStyle(): any {
    return {
      [this.layout === 'horizontal' ? 'width' : 'height']: `${this.gutterSize}px`
    };
  }
}
