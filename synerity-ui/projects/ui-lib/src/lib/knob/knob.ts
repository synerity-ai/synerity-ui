import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ElementRef, HostListener } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'sui-knob',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './knob.html',
  styleUrl: './knob.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Knob {
  @Input() value = 0;
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() size = 100;
  @Input() strokeWidth = 14;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() showValue = true;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() label = '';
  @Input() unit = '';
  @Input() showTicks = true;
  @Input() tickCount = 12;
  @Output() onChange = new EventEmitter<number>();

  @ViewChild('knobElement') knobElement!: ElementRef;

  isDragging = false;
  startAngle = 0;
  startValue = 0;

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    if (!this.disabled && !this.readonly) {
      this.startDragging(event);
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.isDragging) {
      this.updateValue(event);
    }
  }

  @HostListener('mouseup')
  onMouseUp(): void {
    this.stopDragging();
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    if (!this.disabled && !this.readonly) {
      this.startDragging(event.touches[0]);
    }
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent): void {
    if (this.isDragging) {
      this.updateValue(event.touches[0]);
    }
  }

  @HostListener('touchend')
  onTouchEnd(): void {
    this.stopDragging();
  }

  private startDragging(event: MouseEvent | Touch): void {
    this.isDragging = true;
    this.startValue = this.value;
    this.startAngle = this.getAngle(event);
  }

  private updateValue(event: MouseEvent | Touch): void {
    const currentAngle = this.getAngle(event);
    const angleDiff = currentAngle - this.startAngle;
    const valueDiff = (angleDiff / 360) * (this.max - this.min);
    const newValue = Math.max(this.min, Math.min(this.max, this.startValue + valueDiff));
    
    this.value = Math.round(newValue / this.step) * this.step;
    this.onChange.emit(this.value);
  }

  private stopDragging(): void {
    this.isDragging = false;
  }

  private getAngle(event: MouseEvent | Touch): number {
    if (!this.knobElement) return 0;
    
    const rect = this.knobElement.nativeElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;
    
    return Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90;
  }

  getKnobClass(): string {
    return `sui-knob ${this.disabled ? 'sui-knob-disabled' : ''} ${this.readonly ? 'sui-knob-readonly' : ''} ${this.styleClass}`.trim();
  }

  getKnobStyle(): any {
    return {
      width: `${this.size}px`,
      height: `${this.size}px`,
      ...this.style
    };
  }

  getProgressStyle(): any {
    const percentage = ((this.value - this.min) / (this.max - this.min)) * 100;
    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = (percentage / 100) * circumference;
    return {
      strokeDasharray: `${strokeDasharray} ${circumference}`,
      strokeWidth: this.strokeWidth
    };
  }

  getDisplayValue(): string {
    return this.value.toString();
  }

  isDisabled(): boolean {
    return this.disabled;
  }

  isReadonly(): boolean {
    return this.readonly;
  }

  shouldShowValue(): boolean {
    return this.showValue;
  }

  getIndicatorStyle(): any {
    const percentage = ((this.value - this.min) / (this.max - this.min)) * 100;
    const angle = (percentage / 100) * 360 - 90; // Start from top (-90 degrees)
    const radius = 35; // Distance from center
    const centerX = 50;
    const centerY = 50;
    
    const x = centerX + radius * Math.cos(angle * Math.PI / 180);
    const y = centerY + radius * Math.sin(angle * Math.PI / 180);
    
    return {
      cx: x,
      cy: y
    };
  }

  getTickMarks(): Array<{x1: number, y1: number, x2: number, y2: number}> {
    if (!this.showTicks) return [];
    
    const ticks = [];
    const radius = 38;
    const tickLength = 2;
    const centerX = 50;
    const centerY = 50;
    
    for (let i = 0; i < this.tickCount; i++) {
      const angle = (i / this.tickCount) * 360 - 90; // Start from top
      const x1 = centerX + radius * Math.cos(angle * Math.PI / 180);
      const y1 = centerY + radius * Math.sin(angle * Math.PI / 180);
      const x2 = centerX + (radius - tickLength) * Math.cos(angle * Math.PI / 180);
      const y2 = centerY + (radius - tickLength) * Math.sin(angle * Math.PI / 180);
      
      ticks.push({ x1, y1, x2, y2 });
    }
    
    return ticks;
  }
}
