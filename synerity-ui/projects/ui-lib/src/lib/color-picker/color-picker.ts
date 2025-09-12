import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'sui-color-picker',
  imports: [CommonModule, NgIf],
  templateUrl: './color-picker.html',
  styleUrl: './color-picker.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorPicker implements OnDestroy {
  @Input() value = '#000000';
  @Input() format: 'hex' | 'rgb' | 'hsl' = 'hex';
  @Input() inline = false;
  @Input() disabled = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onChange = new EventEmitter<string>();
  @Output() onSelect = new EventEmitter<string>();

  @ViewChild('colorInput') colorInput!: ElementRef;
  @ViewChild('colorPicker') colorPicker!: ElementRef;

  visible = false;
  private documentClickListener!: Subscription;

  ngOnDestroy(): void {
    this.unbindDocumentClickListener();
  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    if (!this.disabled) {
      this.toggle();
    }
  }

  toggle(): void {
    this.visible = !this.visible;
    if (this.visible) {
      this.bindDocumentClickListener();
    } else {
      this.unbindDocumentClickListener();
    }
  }

  onColorChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange.emit(this.value);
    this.onSelect.emit(this.value);
  }

  onColorSelect(color: string): void {
    this.value = color;
    this.onChange.emit(this.value);
    this.onSelect.emit(this.value);
    this.visible = false;
    this.unbindDocumentClickListener();
  }

  private bindDocumentClickListener(): void {
    this.documentClickListener = fromEvent(document, 'click').subscribe((event: any) => {
      if (this.colorPicker && !this.colorPicker.nativeElement.contains(event.target)) {
        this.visible = false;
        this.unbindDocumentClickListener();
      }
    });
  }

  private unbindDocumentClickListener(): void {
    if (this.documentClickListener) {
      this.documentClickListener.unsubscribe();
    }
  }

  getColorPickerClass(): string {
    return `sui-color-picker ${this.inline ? 'sui-color-picker-inline' : ''} ${this.disabled ? 'sui-color-picker-disabled' : ''} ${this.styleClass}`.trim();
  }

  getColorPickerStyle(): any {
    return {
      ...this.style
    };
  }

  getPreviewStyle(): any {
    return {
      backgroundColor: this.value
    };
  }

  isVisible(): boolean {
    return this.visible;
  }

  isDisabled(): boolean {
    return this.disabled;
  }

  isInline(): boolean {
    return this.inline;
  }
}
