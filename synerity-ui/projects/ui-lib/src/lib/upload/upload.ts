import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ElementRef, ViewChild } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-upload',
  imports: [NgFor, NgIf],
  templateUrl: './upload.html',
  styleUrl: './upload.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Upload {
  @Input() multiple = false;
  @Input() accept = '';
  @Input() maxFileSize = 0;
  @Input() disabled = false;
  @Input() auto = false;
  @Input() customUpload = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onUpload = new EventEmitter<any>();
  @Output() onBeforeUpload = new EventEmitter<any>();
  @Output() onProgress = new EventEmitter<any>();
  @Output() onError = new EventEmitter<any>();
  @Output() onSelect = new EventEmitter<any>();
  @Output() onRemove = new EventEmitter<any>();

  @ViewChild('fileInput') fileInput!: ElementRef;

  files: File[] = [];
  dragOver = false;

  onFileSelect(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      this.handleFiles(Array.from(target.files));
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.dragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.dragOver = false;
    
    if (event.dataTransfer?.files) {
      this.handleFiles(Array.from(event.dataTransfer.files));
    }
  }

  private handleFiles(files: File[]): void {
    const validFiles = files.filter(file => this.validateFile(file));
    
    if (this.multiple) {
      this.files.push(...validFiles);
    } else {
      this.files = validFiles.slice(0, 1);
    }
    
    this.onSelect.emit({ files: this.files });
    
    if (this.auto && !this.customUpload) {
      this.upload();
    }
  }

  private validateFile(file: File): boolean {
    if (this.maxFileSize > 0 && file.size > this.maxFileSize) {
      this.onError.emit({ file, error: 'File size exceeds maximum allowed size' });
      return false;
    }
    
    if (this.accept && !this.isFileTypeAccepted(file)) {
      this.onError.emit({ file, error: 'File type not accepted' });
      return false;
    }
    
    return true;
  }

  private isFileTypeAccepted(file: File): boolean {
    const acceptedTypes = this.accept.split(',').map(type => type.trim());
    return acceptedTypes.some(type => {
      if (type.startsWith('.')) {
        return file.name.toLowerCase().endsWith(type.toLowerCase());
      }
      return file.type.match(type.replace('*', '.*'));
    });
  }

  upload(): void {
    if (this.files.length === 0) return;
    
    this.onBeforeUpload.emit({ files: this.files });
    
    if (this.customUpload) {
      this.onUpload.emit({ files: this.files });
    } else {
      // Simulate upload progress
      this.simulateUpload();
    }
  }

  private simulateUpload(): void {
    this.files.forEach((file, index) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          this.onUpload.emit({ file, files: this.files });
        }
        this.onProgress.emit({ file, progress, files: this.files });
      }, 200);
    });
  }

  removeFile(index: number): void {
    const file = this.files[index];
    this.files.splice(index, 1);
    this.onRemove.emit({ file, files: this.files });
  }

  clear(): void {
    this.files = [];
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  choose(): void {
    if (!this.disabled && this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  getUploadClass(): string {
    const baseClasses = 'relative border-2 border-dashed rounded-lg p-6 transition-colors cursor-pointer';
    return `${baseClasses} ${this.styleClass}`.trim();
  }

  getUploadStyle(): any {
    return {
      ...this.style
    };
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}
