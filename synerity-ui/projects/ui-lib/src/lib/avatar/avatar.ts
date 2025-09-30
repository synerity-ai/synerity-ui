import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'sui-avatar',
  imports: [NgIf],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Avatar {
  @Input() image = '';
  @Input() label = '';
  @Input() icon = '';
  @Input() size: 'small' | 'normal' | 'large' | 'xlarge' = 'normal';
  @Input() shape: 'square' | 'circle' = 'circle';
  @Input() style: any = {};
  @Input() styleClass = '';

  getAvatarClass(): string {
    return `sui-avatar sui-avatar-${this.size} sui-avatar-${this.shape} ${this.styleClass}`.trim();
  }

  getAvatarStyle(): any {
    return {
      ...this.style
    };
  }

  getInitials(): string {
    if (!this.label) return '';
    const words = this.label.trim().split(' ');
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }
    return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
  }

  hasImage(): boolean {
    return !!this.image;
  }

  hasLabel(): boolean {
    return !!this.label;
  }

  hasIcon(): boolean {
    return !!this.icon;
  }
}
