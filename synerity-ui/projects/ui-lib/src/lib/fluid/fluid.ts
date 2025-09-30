import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sui-fluid',
  imports: [CommonModule],
  templateUrl: './fluid.html',
  styleUrl: './fluid.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Fluid {
  @Input() columns = 12;
  @Input() gutter = 16;
  @Input() responsive = true;
  @Input() style: any = {};
  @Input() styleClass = '';

  getFluidClass(): string {
    return `sui-fluid sui-fluid-columns-${this.columns} ${this.responsive ? 'sui-fluid-responsive' : ''} ${this.styleClass}`.trim();
  }

  getFluidStyle(): any {
    return {
      '--sui-fluid-gutter': `${this.gutter}px`,
      ...this.style
    };
  }

  getColumnClass(): string {
    return 'sui-fluid-column';
  }

  getColumnStyle(): any {
    return {
      flex: `0 0 ${100 / this.columns}%`,
      maxWidth: `${100 / this.columns}%`
    };
  }

  isResponsive(): boolean {
    return this.responsive;
  }

  getColumns(): number {
    return this.columns;
  }

  getGutter(): number {
    return this.gutter;
  }
}
