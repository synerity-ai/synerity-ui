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
  @Input() variant: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' = 'default';
  @Input() size: 'small' | 'medium' | 'large' | 'xlarge' = 'medium';
  @Input() shape: 'default' | 'circle' | 'rounded' | 'square' = 'default';
  @Input() type: 'default' | 'text' | 'title' | 'subtitle' | 'caption' | 'card' | 'avatar' | 'button' | 'input' | 'list-item' | 'table-row' | 'grid-item' = 'default';
  @Input() animationType: 'loading' | 'pulse' | 'fade' = 'loading';
  @Input() style: any = {};
  @Input() styleClass = '';

  getSkeletonClass(): string {
    let classes = 'sui-skeleton';
    
    // Animation class
    if (this.animation) {
      classes += ' sui-skeleton-animated';
      
      // Animation type
      if (this.animationType !== 'loading') {
        classes += ` sui-skeleton-${this.animationType}`;
      } else {
        classes += ' sui-skeleton-loading';
      }
    }
    
    // Size class
    if (this.size !== 'medium') {
      classes += ` sui-skeleton-${this.size}`;
    }
    
    // Shape class
    if (this.shape !== 'default') {
      classes += ` sui-skeleton-${this.shape}`;
    }
    
    // Type class
    if (this.type !== 'default') {
      classes += ` sui-skeleton-${this.type}`;
    }
    
    // Variant class
    if (this.variant !== 'default') {
      classes += ` sui-skeleton-${this.variant}`;
    }
    
    // Custom class
    if (this.styleClass) {
      classes += ` ${this.styleClass}`;
    }
    
    return classes.trim();
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
