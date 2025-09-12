import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'sui-divider',
  imports: [],
  templateUrl: './divider.html',
  styleUrl: './divider.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Divider {
  @Input() type: 'solid' | 'dashed' | 'dotted' = 'solid';
  @Input() layout: 'horizontal' | 'vertical' = 'horizontal';
  @Input() align: 'left' | 'center' | 'right' = 'center';
  @Input() style: any = {};
  @Input() styleClass = '';

  getDividerClass(): string {
    return `sui-divider sui-divider-${this.layout} sui-divider-${this.type} sui-divider-${this.align} ${this.styleClass}`.trim();
  }

  getDividerStyle(): any {
    return {
      ...this.style
    };
  }
}
