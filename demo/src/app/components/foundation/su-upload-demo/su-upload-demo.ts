import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Upload } from '@synerity/ui';

@Component({
  selector: 'app-su-upload-demo',
  imports: [CommonModule, FormsModule, Upload],
  templateUrl: './su-upload-demo.html',
  styleUrl: './su-upload-demo.scss'
})
export class SuUploadDemo {
  // Upload configurations
  basicConfig = {
    multiple: false,
    accept: '',
    maxFileSize: 0,
    disabled: false,
    auto: false
  };

  imageConfig = {
    multiple: true,
    accept: 'image/*',
    maxFileSize: 5 * 1024 * 1024, // 5MB
    disabled: false,
    auto: false
  };

  documentConfig = {
    multiple: true,
    accept: '.pdf,.doc,.docx,.txt',
    maxFileSize: 10 * 1024 * 1024, // 10MB
    disabled: false,
    auto: false
  };

  autoUploadConfig = {
    multiple: true,
    accept: '',
    maxFileSize: 0,
    disabled: false,
    auto: true
  };

  disabledConfig = {
    multiple: false,
    accept: '',
    maxFileSize: 0,
    disabled: true,
    auto: false
  };

  uploadResults: any[] = [];

  handleUpload(event: any): void {
    console.log('Upload event:', event);
    this.uploadResults.push({
      type: 'upload',
      message: `Uploaded ${event.files.length} file(s)`,
      timestamp: new Date().toLocaleTimeString()
    });
  }

  handleBeforeUpload(event: any): void {
    console.log('Before upload:', event);
    this.uploadResults.push({
      type: 'before',
      message: 'Preparing to upload...',
      timestamp: new Date().toLocaleTimeString()
    });
  }

  handleProgress(event: any): void {
    console.log('Upload progress:', event);
    this.uploadResults.push({
      type: 'progress',
      message: `Progress: ${event.progress}%`,
      timestamp: new Date().toLocaleTimeString()
    });
  }

  handleError(event: any): void {
    console.log('Upload error:', event);
    this.uploadResults.push({
      type: 'error',
      message: `Error: ${event.error}`,
      timestamp: new Date().toLocaleTimeString()
    });
  }

  handleSelect(event: any): void {
    console.log('Files selected:', event);
    this.uploadResults.push({
      type: 'select',
      message: `Selected ${event.files.length} file(s)`,
      timestamp: new Date().toLocaleTimeString()
    });
  }

  handleRemove(event: any): void {
    console.log('File removed:', event);
    this.uploadResults.push({
      type: 'remove',
      message: 'File removed',
      timestamp: new Date().toLocaleTimeString()
    });
  }

  clearResults(): void {
    this.uploadResults = [];
  }
}
