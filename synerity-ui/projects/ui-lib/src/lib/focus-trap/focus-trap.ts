import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sui-focus-trap',
  imports: [CommonModule],
  templateUrl: './focus-trap.html',
  styleUrl: './focus-trap.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FocusTrap implements OnInit, OnDestroy {
  @Input() enabled = true;
  @Input() autoFocus = true;
  @Input() style: any = {};
  @Input() styleClass = '';

  @ViewChild('trapElement') trapElement!: ElementRef;

  private firstFocusableElement!: HTMLElement;
  private lastFocusableElement!: HTMLElement;

  ngOnInit(): void {
    if (this.enabled) {
      this.setupFocusTrap();
    }
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (!this.enabled) return;

    if (event.key === 'Tab') {
      this.handleTabKey(event);
    }
  }

  private setupFocusTrap(): void {
    setTimeout(() => {
      this.updateFocusableElements();
      if (this.autoFocus && this.firstFocusableElement) {
        this.firstFocusableElement.focus();
      }
    }, 0);
  }

  private updateFocusableElements(): void {
    if (!this.trapElement) return;

    const focusableElements = this.trapElement.nativeElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    this.firstFocusableElement = focusableElements[0];
    this.lastFocusableElement = focusableElements[focusableElements.length - 1];
  }

  private handleTabKey(event: KeyboardEvent): void {
    if (!this.firstFocusableElement || !this.lastFocusableElement) return;

    if (event.shiftKey) {
      if (document.activeElement === this.firstFocusableElement) {
        this.lastFocusableElement.focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === this.lastFocusableElement) {
        this.firstFocusableElement.focus();
        event.preventDefault();
      }
    }
  }

  getFocusTrapClass(): string {
    return `sui-focus-trap ${this.styleClass}`.trim();
  }

  getFocusTrapStyle(): any {
    return {
      ...this.style
    };
  }

  isEnabled(): boolean {
    return this.enabled;
  }
}
