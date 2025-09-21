import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { Subscription, fromEvent } from 'rxjs';

interface FileUploadItem {
  file: File;
  id: string;
  name: string;
  size: number;
  type: string;
  progress: number;
  status: 'pending' | 'uploading' | 'success' | 'error';
  error?: string;
}

@Component({
  selector: 'sui-file-upload-advanced',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './file-upload-advanced.html',
  styleUrl: './file-upload-advanced.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadAdvanced implements OnInit, OnDestroy {
  @Input() multiple = true;
  @Input() accept = '';
  @Input() maxFileSize = 0;
  @Input() maxFiles = 10;
  @Input() disabled = false;
  @Input() dragDropEnabled = true;
  @Input() autoUpload = false;
  @Input() showProgress = true;
  @Input() showPreview = true;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() uploadUrl = '';

  @Output() onSelect = new EventEmitter<File[]>();
  @Output() onUpload = new EventEmitter<FileUploadItem[]>();
  @Output() onRemove = new EventEmitter<FileUploadItem>();
  @Output() onError = new EventEmitter<{file: File, error: string}>();

  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('dropZone') dropZone!: ElementRef;

  files: FileUploadItem[] = [];
  isDragOver = false;
  private dragOverSubscription?: Subscription;

  ngOnInit(): void {
    this.bindDragListeners();
  }

  ngOnDestroy(): void {
    this.unbindDragListeners();
  }

  onFileSelect(event: any): void {
    const files = Array.from(event.target.files) as File[];
    this.handleFiles(files);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
    
    if (this.disabled || !this.dragDropEnabled) return;

    const files = Array.from(event.dataTransfer?.files || []);
    this.handleFiles(files);
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    if (this.dragDropEnabled && !this.disabled) {
      this.isDragOver = true;
    }
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
  }

  removeFile(fileItem: FileUploadItem): void {
    this.files = this.files.filter(f => f.id !== fileItem.id);
    this.onRemove.emit(fileItem);
  }

  uploadFiles(): void {
    const filesToUpload = this.files.filter(f => f.status === 'pending');
    
    filesToUpload.forEach(fileItem => {
      this.uploadFile(fileItem);
    });
  }

  clearFiles(): void {
    this.files = [];
  }

  private handleFiles(files: File[]): void {
    if (this.disabled) return;

    const validFiles = files.filter(file => this.isFileValid(file));
    
    if (this.files.length + validFiles.length > this.maxFiles) {
      const allowedCount = this.maxFiles - this.files.length;
      validFiles.splice(allowedCount);
    }

    const newFileItems: FileUploadItem[] = validFiles.map(file => ({
      file,
      id: this.generateId(),
      name: file.name,
      size: file.size,
      type: file.type,
      progress: 0,
      status: 'pending'
    }));

    this.files = [...this.files, ...newFileItems];
    this.onSelect.emit(validFiles);

    if (this.autoUpload) {
      this.uploadFiles();
    }
  }

  private uploadFile(fileItem: FileUploadItem): void {
    fileItem.status = 'uploading';
    
    // Simulate upload progress
    const interval = setInterval(() => {
      if (fileItem.progress < 90) {
        fileItem.progress += Math.random() * 20;
      }
    }, 200);

    // Simulate upload completion
    setTimeout(() => {
      clearInterval(interval);
      fileItem.progress = 100;
      fileItem.status = 'success';
      
      if (this.files.every(f => f.status === 'success' || f.status === 'error')) {
        this.onUpload.emit(this.files);
      }
    }, 2000 + Math.random() * 1000);
  }

  private isFileValid(file: File): boolean {
    if (this.maxFileSize > 0 && file.size > this.maxFileSize) {
      this.onError.emit({file, error: 'File size exceeds maximum allowed size'});
      return false;
    }

    if (this.accept && !this.isFileTypeAccepted(file)) {
      this.onError.emit({file, error: 'File type not accepted'});
      return false;
    }

    return true;
  }

  private isFileTypeAccepted(file: File): boolean {
    const acceptedTypes = this.accept.split(',').map(type => type.trim());
    return acceptedTypes.some(type => {
      if (type.endsWith('/*')) {
        const category = type.slice(0, -2);
        return file.type.startsWith(category);
      }
      return file.type === type;
    });
  }

  private bindDragListeners(): void {
    if (this.dragDropEnabled && this.dropZone) {
      this.dragOverSubscription = fromEvent(this.dropZone.nativeElement, 'dragover').subscribe((event: any) => {
        this.onDragOver(event);
      });
    }
  }

  private unbindDragListeners(): void {
    if (this.dragOverSubscription) {
      this.dragOverSubscription.unsubscribe();
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  getFileIcon(fileType: string): string {
    if (fileType.startsWith('image/')) return '🖼️';
    if (fileType.startsWith('video/')) return '🎥';
    if (fileType.startsWith('audio/')) return '🎵';
    if (fileType.includes('pdf')) return '📄';
    if (fileType.includes('text')) return '📝';
    if (fileType.includes('zip') || fileType.includes('rar')) return '📦';
    return '📁';
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'pending': return '⏳';
      case 'uploading': return '⬆️';
      case 'success': return '✅';
      case 'error': return '❌';
      default: return '📄';
    }
  }

  hasFiles(): boolean {
    return this.files.length > 0;
  }

  canAddMoreFiles(): boolean {
    return this.files.length < this.maxFiles;
  }

  getDropZoneClass(): string {
    return `sui-file-upload-advanced-dropzone ${this.isDragOver ? 'sui-file-upload-advanced-dropzone-active' : ''} ${this.disabled ? 'sui-file-upload-advanced-dropzone-disabled' : ''}`.trim();
  }

  trackByFileId(index: number, fileItem: FileUploadItem): string {
    return fileItem.id;
  }

  areAllFilesUploaded(): boolean {
    return this.files.length > 0 && this.files.every(f => f.status === 'success');
  }
}
