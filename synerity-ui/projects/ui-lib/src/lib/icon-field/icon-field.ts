import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'sui-icon-field',
  imports: [CommonModule, NgIf],
  templateUrl: './icon-field.html',
  styleUrl: './icon-field.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconField {
  @Input() icon = '';
  @Input() position: 'left' | 'right' = 'left';
  @Input() size: 'small' | 'normal' | 'large' = 'normal';
  @Input() style: any = {};
  @Input() styleClass = '';

  getIconFieldClass(): string {
    return `sui-icon-field sui-icon-field-${this.position} sui-icon-field-${this.size} ${this.styleClass}`.trim();
  }

  getIconFieldStyle(): any {
    return {
      ...this.style
    };
  }

  getIconClass(): string {
    return `sui-icon-field-icon sui-icon-field-icon-${this.size}`;
  }

  hasIcon(): boolean {
    return !!this.icon;
  }

  getIcon(): string {
    return this.icon;
  }

  isLeftPosition(): boolean {
    return this.position === 'left';
  }

  isRightPosition(): boolean {
    return this.position === 'right';
  }

  getSize(): string {
    return this.size;
  }
}
