import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'sui-progress-bar',
  imports: [NgIf],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBar {
  @Input() value = 0;
  @Input() showValue = true;
  @Input() unit = '%';
  @Input() color = '';
  @Input() mode: 'determinate' | 'indeterminate' = 'determinate';
  @Input() style: any = {};
  @Input() styleClass = '';

  getProgressBarClass(): string {
    return `sui-progress-bar sui-progress-bar-${this.mode} ${this.styleClass}`.trim();
  }

  getProgressBarStyle(): any {
    return {
      ...this.style
    };
  }

  getProgressStyle(): any {
    const progressStyle: any = {};
    
    if (this.mode === 'determinate') {
      progressStyle.width = `${Math.min(100, Math.max(0, this.value))}%`;
    }
    
    if (this.color) {
      progressStyle.backgroundColor = this.color;
    }
    
    return progressStyle;
  }

  getDisplayValue(): string {
    if (this.mode === 'indeterminate') {
      return '';
    }
    return `${Math.round(this.value)}${this.unit}`;
  }

  isIndeterminate(): boolean {
    return this.mode === 'indeterminate';
  }
}
