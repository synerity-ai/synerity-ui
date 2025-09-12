import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'sui-panel',
  imports: [NgIf],
  templateUrl: './panel.html',
  styleUrl: './panel.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Panel {
  @Input() header = '';
  @Input() toggleable = false;
  @Input() collapsed = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() showHeader = true;
  @Output() onToggle = new EventEmitter<any>();

  toggle(): void {
    if (this.toggleable) {
      this.collapsed = !this.collapsed;
      this.onToggle.emit({ collapsed: this.collapsed });
    }
  }

  getPanelClass(): string {
    return `sui-panel ${this.styleClass}`.trim();
  }

  getPanelStyle(): any {
    return {
      ...this.style
    };
  }
}
