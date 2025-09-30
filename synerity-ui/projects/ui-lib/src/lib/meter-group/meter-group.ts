import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';

interface MeterItem {
  label?: string;
  value: number;
  color?: string;
  icon?: string;
}

@Component({
  selector: 'sui-meter-group',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './meter-group.html',
  styleUrl: './meter-group.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeterGroup {
  @Input() value: MeterItem[] = [];
  @Input() min = 0;
  @Input() max = 100;
  @Input() showValue = true;
  @Input() showLabel = true;
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() style: any = {};
  @Input() styleClass = '';

  getMeterGroupClass(): string {
    return `sui-meter-group sui-meter-group-${this.orientation} ${this.styleClass}`.trim();
  }

  getMeterGroupStyle(): any {
    return {
      ...this.style
    };
  }

  getMeterItemClass(item: MeterItem): string {
    return 'sui-meter-item';
  }

  getMeterItemStyle(item: MeterItem): any {
    const percentage = ((item.value - this.min) / (this.max - this.min)) * 100;
    return {
      flex: percentage,
      backgroundColor: item.color || this.getDefaultColor(percentage)
    };
  }

  getMeterValue(item: MeterItem): string {
    return `${item.value}`;
  }

  getMeterLabel(item: MeterItem): string {
    return item.label || '';
  }

  hasIcon(item: MeterItem): boolean {
    return !!item.icon;
  }

  private getDefaultColor(percentage: number): string {
    if (percentage >= 80) return '#ef4444'; // red
    if (percentage >= 60) return '#f59e0b'; // yellow
    if (percentage >= 40) return '#3b82f6'; // blue
    return '#10b981'; // green
  }

  getTotalValue(): number {
    return this.value.reduce((sum, item) => sum + item.value, 0);
  }

  getPercentage(item: MeterItem): number {
    const total = this.getTotalValue();
    return total > 0 ? (item.value / total) * 100 : 0;
  }
}
