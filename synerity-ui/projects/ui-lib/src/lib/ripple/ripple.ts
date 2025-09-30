import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sui-ripple',
  imports: [CommonModule],
  templateUrl: './ripple.html',
  styleUrl: './ripple.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ripple {
  @Input() disabled = false;
  @Input() color = 'rgba(255, 255, 255, 0.6)';
  @Input() duration = 600;
  @Input() style: any = {};
  @Input() styleClass = '';

  @ViewChild('rippleContainer') rippleContainer!: ElementRef;

  constructor(private renderer: Renderer2) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    if (this.disabled) return;

    this.createRipple(event);
  }

  private createRipple(event: MouseEvent): void {
    if (!this.rippleContainer) return;

    const container = this.rippleContainer.nativeElement;
    const rect = container.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = this.renderer.createElement('span');
    this.renderer.addClass(ripple, 'sui-ripple-effect');
    this.renderer.setStyle(ripple, 'width', `${size}px`);
    this.renderer.setStyle(ripple, 'height', `${size}px`);
    this.renderer.setStyle(ripple, 'left', `${x}px`);
    this.renderer.setStyle(ripple, 'top', `${y}px`);
    this.renderer.setStyle(ripple, 'backgroundColor', this.color);
    this.renderer.setStyle(ripple, 'animationDuration', `${this.duration}ms`);

    this.renderer.appendChild(container, ripple);

    // Remove ripple after animation
    setTimeout(() => {
      if (ripple.parentNode) {
        this.renderer.removeChild(container, ripple);
      }
    }, this.duration);
  }

  getRippleClass(): string {
    return `sui-ripple ${this.disabled ? 'sui-ripple-disabled' : ''} ${this.styleClass}`.trim();
  }

  getRippleStyle(): any {
    return {
      ...this.style
    };
  }

  isDisabled(): boolean {
    return this.disabled;
  }
}
