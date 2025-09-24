import { Component, EventEmitter, Input, Output, ChangeDetectorRef } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'sui-image',
  imports: [CommonModule, NgIf],
  templateUrl: './image.html',
  styleUrl: './image.css'
})
export class Image {
  @Input() src = '';
  @Input() alt = '';
  @Input() width = '';
  @Input() height = '';
  @Input() preview = false;
  @Input() zoom = false;
  @Input() loading: 'lazy' | 'eager' = 'lazy';
  @Input() style: any = {};
  @Input() styleClass = '';
  @Output() onError = new EventEmitter<Event>();
  @Output() onLoad = new EventEmitter<Event>();

  imageLoaded = false;
  imageError = false;
  showPreview = false;
  imageLoading = true;

  constructor(private cdr: ChangeDetectorRef) {}

  onImageLoad(event: Event): void {
    this.imageLoaded = true;
    this.imageError = false;
    this.imageLoading = false;
    this.cdr.detectChanges();
    this.onLoad.emit(event);
  }

  onImageError(event: Event): void {
    this.imageError = true;
    this.imageLoaded = false;
    this.imageLoading = false;
    this.cdr.detectChanges();
    this.onError.emit(event);
  }

  togglePreview(): void {
    if (this.preview) {
      this.showPreview = !this.showPreview;
      this.cdr.detectChanges();
    }
  }

  closePreview(): void {
    this.showPreview = false;
    this.cdr.detectChanges();
  }

  getImageClass(): string {
    return `sui-image ${this.imageError ? 'sui-image-error' : ''} ${this.imageLoaded ? 'sui-image-loaded' : ''} ${this.imageLoading ? 'sui-image-loading' : ''} ${this.styleClass}`.trim();
  }

  getImageStyle(): any {
    return {
      width: this.width || undefined,
      height: this.height || undefined,
      ...this.style
    };
  }

  getPreviewClass(): string {
    return `sui-image-preview ${this.showPreview ? 'sui-image-preview-visible' : ''}`.trim();
  }

  hasSrc(): boolean {
    return !!this.src;
  }

  hasError(): boolean {
    return this.imageError;
  }

  isLoaded(): boolean {
    return this.imageLoaded;
  }

  isPreviewEnabled(): boolean {
    return this.preview;
  }

  isZoomEnabled(): boolean {
    return this.zoom;
  }

  isLoading(): boolean {
    return this.imageLoading;
  }
}
