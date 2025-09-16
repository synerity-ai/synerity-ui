import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ElementRef, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
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
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onChange = new EventEmitter<string>();
  @Output() onFocus = new EventEmitter<void>();
  @Output() onBlur = new EventEmitter<void>();

  @ViewChild('editorElement') editorElement!: ElementRef;

  private isFocused = false;

  constructor(private cdr: ChangeDetectorRef) {}

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
      this.cdr.detectChanges();
    }
  }

  onFocusHandler(): void {
    this.isFocused = true;
    this.onFocus.emit();
  }

  onBlurHandler(): void {
    this.isFocused = false;
    this.onBlur.emit();
  }

  onKeyDown(event: KeyboardEvent): void {
    // Handle keyboard shortcuts
    if (event.ctrlKey || event.metaKey) {
      switch (event.key) {
        case 'b':
          event.preventDefault();
          this.execCommand('bold');
          break;
        case 'i':
          event.preventDefault();
          this.execCommand('italic');
          break;
        case 'u':
          event.preventDefault();
          this.execCommand('underline');
          break;
        case 'z':
          event.preventDefault();
          if (event.shiftKey) {
            this.execCommand('redo');
          } else {
            this.execCommand('undo');
          }
          break;
        case 'y':
          event.preventDefault();
          this.execCommand('redo');
          break;
      }
    }
  }

  onPaste(event: ClipboardEvent): void {
    // Handle paste events - clean up formatting if needed
    event.preventDefault();
    const text = event.clipboardData?.getData('text/plain') || '';
    this.insertText(text);
  }

  execCommand(command: string, value?: string): void {
    if (this.editorElement && !this.disabled && !this.readonly) {
      document.execCommand(command, false, value);
      this.onContentChange();
    }
  }

  isFormatActive(format: string): boolean {
    if (!this.editorElement || this.disabled || this.readonly) {
      return false;
    }
    return document.queryCommandState(format);
  }

  insertLink(): void {
    const url = prompt('Enter URL:');
    if (url) {
      this.execCommand('createLink', url);
    }
  }

  insertImage(): void {
    const url = prompt('Enter image URL:');
    if (url) {
      this.execCommand('insertImage', url);
    }
  }

  insertCode(): void {
    const code = prompt('Enter code:');
    if (code) {
      this.insertText(`<code>${code}</code>`);
    }
  }

  insertText(html: string): void {
    if (this.editorElement && !this.disabled && !this.readonly) {
      this.execCommand('insertHTML', html);
    }
  }

  onHeadingChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target) {
      this.execCommand('formatBlock', target.value);
    }
  }

  getEditorClass(): string {
    const classes = [
      'sui-editor',
      this.disabled ? 'sui-editor-disabled' : '',
      this.readonly ? 'sui-editor-readonly' : '',
      this.theme === 'dark' ? 'sui-editor-dark' : '',
      this.styleClass
    ].filter(Boolean);
    
    return classes.join(' ');
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
