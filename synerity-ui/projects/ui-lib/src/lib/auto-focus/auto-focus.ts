import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sui-auto-focus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auto-focus.html',
  styleUrl: './auto-focus.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutoFocus implements OnInit {
  @Input() delay = 0;
  @Input() condition = true;
  @Input() style: any = {};
  @Input() styleClass = '';

  @ViewChild('focusElement') focusElement!: ElementRef;

  ngOnInit(): void {
    if (this.condition) {
      setTimeout(() => {
        this.focus();
      }, this.delay);
    }
  }

  focus(): void {
    if (this.focusElement && this.focusElement.nativeElement) {
      const element = this.focusElement.nativeElement;
      if (element.focus) {
        element.focus();
      }
    }
  }

  getAutoFocusClass(): string {
    return `sui-auto-focus ${this.styleClass}`.trim();
  }

  getAutoFocusStyle(): any {
    return {
      ...this.style
    };
  }
}
