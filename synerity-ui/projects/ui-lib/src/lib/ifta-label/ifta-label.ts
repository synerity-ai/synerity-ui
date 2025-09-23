import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'sui-ifta-label',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './ifta-label.html',
  styleUrl: './ifta-label.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IftaLabel {
  @Input() condition = true;
  @Input() trueLabel = '';
  @Input() falseLabel = '';
  @Input() altLabel = '';
  @Input() style: any = {};
  @Input() styleClass = '';

  getIftaLabelClass(): string {
    return `sui-ifta-label ${this.styleClass}`.trim();
  }

  getIftaLabelStyle(): any {
    return {
      ...this.style
    };
  }

  getDisplayLabel(): string {
    if (this.condition) {
      return this.trueLabel;
    } else if (this.altLabel) {
      return this.altLabel;
    } else {
      return this.falseLabel;
    }
  }

  hasTrueLabel(): boolean {
    return !!this.trueLabel;
  }

  hasFalseLabel(): boolean {
    return !!this.falseLabel;
  }

  hasAltLabel(): boolean {
    return !!this.altLabel;
  }

  shouldShowTrue(): boolean {
    return this.condition && this.hasTrueLabel();
  }

  shouldShowFalse(): boolean {
    return !this.condition && this.hasFalseLabel();
  }

  shouldShowAlt(): boolean {
    return !this.condition && this.hasAltLabel();
  }
}
