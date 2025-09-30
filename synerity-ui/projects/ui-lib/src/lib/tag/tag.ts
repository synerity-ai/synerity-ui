import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'sui-tag',
  imports: [NgIf],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tag {
  @Input() value = '';
  @Input() severity: 'info' | 'success' | 'warning' | 'danger' | 'contrast' = 'info';
  @Input() icon = '';
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

  getTagClass(): string {
    return `sui-tag sui-tag-${this.severity} ${this.styleClass}`.trim();
  }

  getTagStyle(): any {
    return {
      ...this.style
    };
  }

  hasIcon(): boolean {
    return !!this.icon;
  }

  hasValue(): boolean {
    return !!this.value;
  }
}
