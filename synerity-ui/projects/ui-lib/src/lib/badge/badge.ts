import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'sui-badge',
  imports: [],
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Badge {
  @Input() value: string | number = '';
  @Input() severity: 'info' | 'success' | 'warning' | 'danger' | 'contrast' = 'info';
  @Input() size: 'small' | 'normal' | 'large' = 'normal';
  @Input() style: any = {};
  @Input() styleClass = '';

  getBadgeClass(): string {
    return `sui-badge sui-badge-${this.severity} sui-badge-${this.size} ${this.styleClass}`.trim();
  }

  getBadgeStyle(): any {
    return {
      ...this.style
    };
  }

  hasValue(): boolean {
    return this.value !== null && this.value !== undefined && this.value !== '';
  }

  getDisplayValue(): string {
    if (typeof this.value === 'number' && this.value > 99) {
      return '99+';
    }
    return String(this.value);
  }
}
