import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'sui-editor',
  imports: [CommonModule, NgIf],
  templateUrl: './editor.html',
  styleUrl: './editor.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Editor implements OnInit, OnDestroy {
  @Input() value = '';
  @Input() placeholder = 'Enter text...';
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() height = '200px';
  @Input() showToolbar = true;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onChange = new EventEmitter<string>();
  @Output() onFocus = new EventEmitter<void>();
  @Output() onBlur = new EventEmitter<void>();

  @ViewChild('editorElement') editorElement!: ElementRef;

  ngOnInit(): void {
    // Initialize editor if needed
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  onContentChange(): void {
    if (this.editorElement) {
      this.value = this.editorElement.nativeElement.innerHTML;
      this.onChange.emit(this.value);
    }
  }

  onFocusHandler(): void {
    this.onFocus.emit();
  }

  onBlurHandler(): void {
    this.onBlur.emit();
  }

  execCommand(command: string, value?: string): void {
    if (this.editorElement && !this.disabled && !this.readonly) {
      document.execCommand(command, false, value);
      this.onContentChange();
    }
  }

  getEditorClass(): string {
    return `sui-editor ${this.disabled ? 'sui-editor-disabled' : ''} ${this.readonly ? 'sui-editor-readonly' : ''} ${this.styleClass}`.trim();
  }

  getEditorStyle(): any {
    return {
      height: this.height,
      ...this.style
    };
  }

  isDisabled(): boolean {
    return this.disabled;
  }

  isReadonly(): boolean {
    return this.readonly;
  }

  hasToolbar(): boolean {
    return this.showToolbar;
  }
}
