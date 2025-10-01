import { ChangeDetectionStrategy, Component, Input, AfterViewInit, ElementRef } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'sui-icon-field',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './icon-field.html',
  styleUrl: './icon-field.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconField implements AfterViewInit {
  @Input() icon = '';
  @Input() position: 'left' | 'right' = 'left';
  @Input() size: 'small' | 'normal' | 'large' = 'normal';
  @Input() style: any = {};
  @Input() styleClass = '';

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    // Apply padding directly via JavaScript
    setTimeout(() => {
      this.applyInputPadding();
    }, 0);
  }

  private applyInputPadding(): void {
    const paddingValue = this.getPaddingValue();
    const inputElements = this.elementRef.nativeElement.querySelectorAll('input');
    
    inputElements.forEach((input: HTMLInputElement) => {
      if (this.position === 'left') {
        input.style.paddingLeft = paddingValue;
      } else if (this.position === 'right') {
        input.style.paddingRight = paddingValue;
      }
    });
  }

  getPaddingValue(): string {
    switch (this.size) {
      case 'small':
        return '36px';
      case 'large':
        return '44px';
      default:
        return '40px';
    }
  }

  getIconFieldClass(): string {
    return `sui-icon-field sui-icon-field-${this.position} sui-icon-field-${this.size} ${this.styleClass}`.trim();
  }

  getIconFieldStyle(): any {
    return {
      ...this.style
    };
  }

  getIconClass(): string {
    return `sui-icon-field-icon sui-icon-field-icon-${this.size}`;
  }

  hasIcon(): boolean {
    return !!this.icon;
  }

  getIcon(): string {
    return this.icon;
  }

  isLeftPosition(): boolean {
    return this.position === 'left';
  }

  isRightPosition(): boolean {
    return this.position === 'right';
  }

  getSize(): string {
    return this.size;
  }
}
