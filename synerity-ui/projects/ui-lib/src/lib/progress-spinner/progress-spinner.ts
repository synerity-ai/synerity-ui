import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'sui-progress-spinner',
  imports: [],
  templateUrl: './progress-spinner.html',
  styleUrl: './progress-spinner.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressSpinner {
  @Input() strokeWidth = '2';
  @Input() fill = 'transparent';
  @Input() animationDuration = '2s';
  @Input() size: 'small' | 'normal' | 'large' = 'normal';
  @Input() color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' = 'primary';
  @Input() style: any = {};
  @Input() styleClass = '';

  getSpinnerClass(): string {
    const sizeClass = `sui-progress-spinner-${this.size}`;
    const colorClass = this.color !== 'primary' ? `sui-progress-spinner-${this.color}` : '';
    return `sui-progress-spinner ${sizeClass} ${colorClass} ${this.styleClass}`.trim();
  }

  getSpinnerStyle(): any {
    return {
      '--spinner-circumference': `${this.getCircumference()}`,
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
