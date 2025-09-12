import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'sui-progress-spinner',
  imports: [],
  templateUrl: './progress-spinner.html',
  styleUrl: './progress-spinner.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressSpinner {
  @Input() strokeWidth = '2';
  @Input() fill = 'transparent';
  @Input() animationDuration = '2s';
  @Input() size: 'small' | 'normal' | 'large' = 'normal';
  @Input() style: any = {};
  @Input() styleClass = '';

  getSpinnerClass(): string {
    return `sui-progress-spinner sui-progress-spinner-${this.size} ${this.styleClass}`.trim();
  }

  getSpinnerStyle(): any {
    return {
      ...this.style
    };
  }

  getCircleStyle(): any {
    return {
      strokeWidth: this.strokeWidth,
      fill: this.fill,
      animationDuration: this.animationDuration
    };
  }

  getSize(): number {
    switch (this.size) {
      case 'small': return 20;
      case 'large': return 60;
      default: return 40;
    }
  }

  getRadius(): number {
    return (this.getSize() - parseInt(this.strokeWidth)) / 2;
  }

  getCircumference(): number {
    return 2 * Math.PI * this.getRadius();
  }
}
