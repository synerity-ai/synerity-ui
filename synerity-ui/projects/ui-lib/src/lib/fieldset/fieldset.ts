import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'sui-fieldset',
  standalone: true,
  imports: [NgIf],
  templateUrl: './fieldset.html',
  styleUrl: './fieldset.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Fieldset {
  @Input() legend = '';
  @Input() toggleable = false;
  @Input() collapsed = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onToggle = new EventEmitter<any>();

  toggle(): void {
    if (this.toggleable) {
      this.collapsed = !this.collapsed;
      this.onToggle.emit({ collapsed: this.collapsed });
    }
  }

  getFieldsetClass(): string {
    return `sui-fieldset ${this.styleClass}`.trim();
  }

  getFieldsetStyle(): any {
    return {
      ...this.style
    };
  }
}
