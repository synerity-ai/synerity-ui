import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'sui-block-ui',
  imports: [CommonModule, NgIf],
  templateUrl: './block-ui.html',
  styleUrl: './block-ui.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockUi {
  @Input() blocked = false;
  @Input() message = 'Loading...';
  @Input() showSpinner = true;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() overlayStyle: any = {};
  @Input() overlayClass = '';

  getBlockUiClass(): string {
    return `sui-block-ui ${this.styleClass}`.trim();
  }

  getBlockUiStyle(): any {
    return {
      ...this.style
    };
  }

  getOverlayClass(): string {
    return `sui-block-ui-overlay ${this.overlayClass}`.trim();
  }

  getOverlayStyle(): any {
    return {
      ...this.overlayStyle
    };
  }

  isBlocked(): boolean {
    return this.blocked;
  }

  hasMessage(): boolean {
    return !!this.message;
  }

  shouldShowSpinner(): boolean {
    return this.showSpinner;
  }
}
