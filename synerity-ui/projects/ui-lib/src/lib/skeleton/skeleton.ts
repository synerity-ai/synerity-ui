import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'sui-skeleton',
  imports: [],
  templateUrl: './skeleton.html',
  styleUrl: './skeleton.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Skeleton {
  @Input() width = '100%';
  @Input() height = '1rem';
  @Input() borderRadius = '4px';
  @Input() animation = true;
  @Input() style: any = {};
  @Input() styleClass = '';

  getSkeletonClass(): string {
    return `sui-skeleton ${this.animation ? 'sui-skeleton-animated' : ''} ${this.styleClass}`.trim();
  }

  getSkeletonStyle(): any {
    return {
      width: this.width,
      height: this.height,
      borderRadius: this.borderRadius,
      ...this.style
    };
  }

  isAnimated(): boolean {
    return this.animation;
  }
}
