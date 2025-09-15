import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ElementRef, HostListener, OnDestroy, forwardRef } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'sui-color-picker',
  imports: [CommonModule, NgIf],
  templateUrl: './color-picker.html',
  styleUrl: './color-picker.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPicker),
      multi: true
    }
  ]
})
export class ColorPicker implements ControlValueAccessor, OnDestroy {
  @Input() value = '#000000';
  @Input() format: 'hex' | 'rgb' | 'hsl' = 'hex';
  @Input() inline = false;
  @Input() disabled = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onChange = new EventEmitter<string>();
  @Output() onSelect = new EventEmitter<string>();

  @ViewChild('colorInput') colorInput!: ElementRef;
  @ViewChild('colorPicker') colorPicker!: ElementRef;
  @ViewChild('colorPickerContainer') colorPickerContainer!: ElementRef;

  visible = false;
  private documentClickListener!: Subscription;

  // ControlValueAccessor implementation
  private onValueChange = (value: string) => {};
  private onTouched = () => {};

  ngOnDestroy(): void {
    this.unbindDocumentClickListener();
  }


  toggle(): void {
    if (this.disabled) {
      return; // Don't open panel if disabled
    }
    this.visible = !this.visible;
    if (this.visible) {
      this.bindDocumentClickListener();
    } else {
      this.unbindDocumentClickListener();
    }
  }

  onColorChange(event: Event): void {
    if (this.disabled) {
      return; // Don't change color if disabled
    }
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onValueChange(this.value);
    this.onTouched();
    this.onChange.emit(this.value);
    this.onSelect.emit(this.value);
  }

  onColorSelect(color: string): void {
    if (this.disabled) {
      return; // Don't change color if disabled
    }
    this.value = color;
    this.onValueChange(this.value);
    this.onTouched();
    this.onChange.emit(this.value);
    this.onSelect.emit(this.value);
    this.visible = false;
    this.unbindDocumentClickListener();
  }

  private bindDocumentClickListener(): void {
    this.documentClickListener = fromEvent(document, 'click').subscribe((event: any) => {
      if (this.colorPickerContainer && !this.colorPickerContainer.nativeElement.contains(event.target)) {
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
    return `sui-color-picker ${this.inline ? 'sui-color-picker-inline' : ''} ${this.disabled ? 'sui-color-picker-disabled' : ''} sui-color-picker-${this.size} ${this.styleClass}`.trim();
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

  // ControlValueAccessor methods
  writeValue(value: string): void {
    this.value = value || '#000000';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onValueChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
