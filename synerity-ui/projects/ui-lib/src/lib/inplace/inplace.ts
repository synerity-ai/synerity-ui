import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'sui-inplace',
  imports: [CommonModule, NgIf],
  templateUrl: './inplace.html',
  styleUrl: './inplace.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Inplace {
  @Input() active = false;
  @Input() closable = true;
  @Input() disabled = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onActivate = new EventEmitter<void>();
  @Output() onDeactivate = new EventEmitter<void>();

  activate(): void {
    if (!this.disabled && !this.active) {
      this.active = true;
      this.onActivate.emit();
    }
  }

  deactivate(): void {
    if (this.active) {
      this.active = false;
      this.onDeactivate.emit();
    }
  }

  toggle(): void {
    if (this.active) {
      this.deactivate();
    } else {
      this.activate();
    }
  }

  getInplaceClass(): string {
    return `sui-inplace ${this.active ? 'sui-inplace-active' : ''} ${this.disabled ? 'sui-inplace-disabled' : ''} ${this.styleClass}`.trim();
  }

  getInplaceStyle(): any {
    return {
      ...this.style
    };
  }

  isActive(): boolean {
    return this.active;
  }

  isDisabled(): boolean {
    return this.disabled;
  }

  isClosable(): boolean {
    return this.closable;
  }
}
