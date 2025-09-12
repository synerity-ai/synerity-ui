import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sui-textarea',
  imports: [FormsModule],
  templateUrl: './textarea.html',
  styleUrl: './textarea.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Textarea),
      multi: true
    }
  ]
})
export class Textarea implements ControlValueAccessor, AfterViewInit {
  @Input() disabled = false;
  @Input() name = '';
  @Input() inputId = '';
  @Input() placeholder = '';
  @Input() rows = 3;
  @Input() autosize = false;
  @Output() change = new EventEmitter<string>();

  @ViewChild('ta') textareaRef!: ElementRef<HTMLTextAreaElement>;

  value = '';

  private onChange: (val: string) => void = () => {};
  private onTouched: () => void = () => {};

  ngAfterViewInit(): void {
    if (this.autosize) {
      queueMicrotask(() => this.adjustHeight());
    }
  }

  writeValue(value: string): void {
    this.value = value ?? '';
    if (this.autosize) {
      queueMicrotask(() => this.adjustHeight());
    }
  }

  registerOnChange(fn: (val: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLTextAreaElement;
    this.value = input.value ?? '';
    if (this.autosize) this.adjustHeight();
    this.onChange(this.value);
    this.change.emit(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }

  private adjustHeight(): void {
    if (!this.textareaRef) return;
    const el = this.textareaRef.nativeElement;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }
}
