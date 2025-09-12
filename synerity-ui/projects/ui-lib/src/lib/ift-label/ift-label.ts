import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'sui-ift-label',
  imports: [CommonModule, NgIf],
  templateUrl: './ift-label.html',
  styleUrl: './ift-label.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IftLabel {
  @Input() condition = true;
  @Input() trueLabel = '';
  @Input() falseLabel = '';
  @Input() style: any = {};
  @Input() styleClass = '';

  getLabelClass(): string {
    return `sui-ift-label ${this.styleClass}`.trim();
  }

  getLabelStyle(): any {
    return {
      ...this.style
    };
  }

  getDisplayLabel(): string {
    return this.condition ? this.trueLabel : this.falseLabel;
  }

  hasTrueLabel(): boolean {
    return !!this.trueLabel;
  }

  hasFalseLabel(): boolean {
    return !!this.falseLabel;
  }

  shouldShowTrue(): boolean {
    return this.condition && this.hasTrueLabel();
  }

  shouldShowFalse(): boolean {
    return !this.condition && this.hasFalseLabel();
  }
}
