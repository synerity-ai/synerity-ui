import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sui-input-group',
  imports: [CommonModule],
  templateUrl: './input-group.html',
  styleUrl: './input-group.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputGroup {
  @Input() size: 'small' | 'normal' | 'large' = 'normal';
  @Input() disabled = false;
  @Input() style: any = {};
  @Input() styleClass = '';

  getInputGroupClass(): string {
    return `sui-input-group sui-input-group-${this.size} ${this.disabled ? 'sui-input-group-disabled' : ''} ${this.styleClass}`.trim();
  }

  getInputGroupStyle(): any {
    return {
      ...this.style
    };
  }

  getSize(): string {
    return this.size;
  }

  isDisabled(): boolean {
    return this.disabled;
  }

  isSmall(): boolean {
    return this.size === 'small';
  }

  isNormal(): boolean {
    return this.size === 'normal';
  }

  isLarge(): boolean {
    return this.size === 'large';
  }
}
