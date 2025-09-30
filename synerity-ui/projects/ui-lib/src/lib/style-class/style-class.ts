import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sui-style-class',
  imports: [CommonModule],
  templateUrl: './style-class.html',
  styleUrl: './style-class.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StyleClass implements OnInit {
  @Input() selector = 'body';
  @Input() enterClass = '';
  @Input() leaveClass = '';
  @Input() toggleClass = '';
  @Input() target: ElementRef | string = 'body';
  @Input() style: any = {};
  @Input() styleClass = '';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.applyInitialClass();
  }

  addClass(className: string): void {
    const targetElement = this.getTargetElement();
    if (targetElement && className) {
      this.renderer.addClass(targetElement, className);
    }
  }

  removeClass(className: string): void {
    const targetElement = this.getTargetElement();
    if (targetElement && className) {
      this.renderer.removeClass(targetElement, className);
    }
  }

  toggleClassMethod(className: string): void {
    const targetElement = this.getTargetElement();
    if (targetElement && className) {
      if (targetElement.classList.contains(className)) {
        this.renderer.removeClass(targetElement, className);
      } else {
        this.renderer.addClass(targetElement, className);
      }
    }
  }

  enter(): void {
    if (this.enterClass) {
      this.addClass(this.enterClass);
    }
  }

  leave(): void {
    if (this.leaveClass) {
      this.addClass(this.leaveClass);
    }
  }

  toggle(): void {
    if (this.toggleClass) {
      this.toggleClassMethod(this.toggleClass);
    }
  }

  private getTargetElement(): Element | null {
    if (typeof this.target === 'string') {
      return document.querySelector(this.target);
    } else if (this.target instanceof ElementRef) {
      return this.target.nativeElement;
    }
    return null;
  }

  private applyInitialClass(): void {
    if (this.styleClass) {
      this.addClass(this.styleClass);
    }
  }

  getStyleClassClass(): string {
    return `sui-style-class ${this.styleClass}`.trim();
  }

  getStyleClassStyle(): any {
    return {
      ...this.style
    };
  }
}
