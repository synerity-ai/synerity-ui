import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'sui-chip',
  standalone: true,
  imports: [NgIf],
  templateUrl: './chip.html',
  styleUrl: './chip.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Chip {
  @Input() label = '';
  @Input() icon = '';
  @Input() image = '';
  @Input() removable = false;
  @Input() disabled = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onRemove = new EventEmitter<void>();

  remove(): void {
    if (!this.disabled && this.removable) {
      this.onRemove.emit();
    }
  }

  getChipClass(): string {
    return `sui-chip ${this.styleClass}`.trim();
  }

  getChipStyle(): any {
    return {
      ...this.style
    };
  }

  hasImage(): boolean {
    return !!this.image;
  }

  hasIcon(): boolean {
    return !!this.icon;
  }

  hasLabel(): boolean {
    return !!this.label;
  }
}
