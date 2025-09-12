import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'sui-image-compare',
  imports: [CommonModule, NgIf],
  templateUrl: './image-compare.html',
  styleUrl: './image-compare.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageCompare {
  @Input() beforeSrc = '';
  @Input() afterSrc = '';
  @Input() beforeAlt = 'Before';
  @Input() afterAlt = 'After';
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() sliderPosition = 50;
  @Input() style: any = {};
  @Input() styleClass = '';

  @ViewChild('container') container!: ElementRef;
  @ViewChild('slider') slider!: ElementRef;

  isDragging = false;

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.updateSliderPosition(event);
    event.preventDefault();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.isDragging) {
      this.updateSliderPosition(event);
    }
  }

  @HostListener('mouseup')
  onMouseUp(): void {
    this.isDragging = false;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.isDragging = false;
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.isDragging = true;
    this.updateSliderPosition(event.touches[0]);
    event.preventDefault();
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent): void {
    if (this.isDragging) {
      this.updateSliderPosition(event.touches[0]);
    }
  }

  @HostListener('touchend')
  onTouchEnd(): void {
    this.isDragging = false;
  }

  private updateSliderPosition(event: MouseEvent | Touch): void {
    if (!this.container) return;

    const rect = this.container.nativeElement.getBoundingClientRect();
    let position: number;

    if (this.orientation === 'horizontal') {
      position = ((event.clientX - rect.left) / rect.width) * 100;
    } else {
      position = ((event.clientY - rect.top) / rect.height) * 100;
    }

    this.sliderPosition = Math.max(0, Math.min(100, position));
  }

  getImageCompareClass(): string {
    return `sui-image-compare sui-image-compare-${this.orientation} ${this.styleClass}`.trim();
  }

  getImageCompareStyle(): any {
    return {
      ...this.style
    };
  }

  getSliderStyle(): any {
    if (this.orientation === 'horizontal') {
      return {
        left: `${this.sliderPosition}%`
      };
    } else {
      return {
        top: `${this.sliderPosition}%`
      };
    }
  }

  getBeforeImageStyle(): any {
    if (this.orientation === 'horizontal') {
      return {
        clipPath: `inset(0 ${100 - this.sliderPosition}% 0 0)`
      };
    } else {
      return {
        clipPath: `inset(0 0 ${100 - this.sliderPosition}% 0)`
      };
    }
  }

  hasBeforeImage(): boolean {
    return !!this.beforeSrc;
  }

  hasAfterImage(): boolean {
    return !!this.afterSrc;
  }

  isHorizontal(): boolean {
    return this.orientation === 'horizontal';
  }

  isVertical(): boolean {
    return this.orientation === 'vertical';
  }
}
