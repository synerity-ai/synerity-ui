import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'sui-confirm-dialog',
  imports: [NgIf],
  templateUrl: './confirm-dialog.html',
  styleUrl: './confirm-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDialog {
  @Input() visible = false;
  @Input() header = 'Confirm';
  @Input() message = 'Are you sure?';
  @Input() acceptLabel = 'Yes';
  @Input() rejectLabel = 'No';
  @Input() acceptIcon = '';
  @Input() rejectIcon = '';
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() blockScroll = true;
  @Output() onAccept = new EventEmitter<void>();
  @Output() onReject = new EventEmitter<void>();
  @Output() onHide = new EventEmitter<void>();

  accept(): void {
    this.onAccept.emit();
    this.hide();
  }

  reject(): void {
    this.onReject.emit();
    this.hide();
  }

  hide(): void {
    this.visible = false;
    this.onHide.emit();
  }

  getDialogClass(): string {
    return `sui-confirm-dialog ${this.styleClass}`.trim();
  }

  getDialogStyle(): any {
    return {
      ...this.style
    };
  }
}
