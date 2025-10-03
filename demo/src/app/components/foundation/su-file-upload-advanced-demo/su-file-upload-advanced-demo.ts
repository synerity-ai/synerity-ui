import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploadAdvanced } from '@synerity/ui';

@Component({
  selector: 'app-su-file-upload-advanced-demo',
  imports: [CommonModule, FormsModule, FileUploadAdvanced],
  templateUrl: './su-file-upload-advanced-demo.html',
  styleUrl: './su-file-upload-advanced-demo.scss'
})
export class SuFileUploadAdvancedDemo {
  // Upload configurations
  uploadConfigs = [
    {
      id: 'basic',
      multiple: true,
      accept: '',
      maxFileSize: 0,
      maxFiles: 10,
      dragDropEnabled: true,
      autoUpload: false,
      showProgress: true,
      showPreview: true
    },
    {
      id: 'images',
      multiple: true,
      accept: 'image/*',
      maxFileSize: 5 * 1024 * 1024, // 5MB
      maxFiles: 5,
      dragDropEnabled: true,
      autoUpload: false,
      showProgress: true,
      showPreview: true
    },
    {
      id: 'documents',
      multiple: true,
      accept: '.pdf,.doc,.docx,.txt',
      maxFileSize: 10 * 1024 * 1024, // 10MB
      maxFiles: 3,
      dragDropEnabled: true,
      autoUpload: false,
      showProgress: true,
      showPreview: true
    },
    {
      id: 'single',
      multiple: false,
      accept: '',
      maxFileSize: 0,
      maxFiles: 1,
      dragDropEnabled: true,
      autoUpload: false,
      showProgress: true,
      showPreview: true
    }
  ];

  selectedConfig = 'basic';
  uploadUrl = 'https://api.example.com/upload';

  // Event tracking
  selectedFiles: any[] = [];
  uploadedFiles: any[] = [];
  removedFiles: any[] = [];
  errorFiles: any[] = [];

  // Event handlers
  onFileSelect(files: File[]): void {
    console.log('Files selected:', files);
    this.selectedFiles = [...this.selectedFiles, ...files];
  }

  onFileUpload(fileItems: any[]): void {
    console.log('Files uploaded:', fileItems);
    this.uploadedFiles = [...this.uploadedFiles, ...fileItems];
  }

  onFileRemove(fileItem: any): void {
    console.log('File removed:', fileItem);
    this.removedFiles = [...this.removedFiles, fileItem];
  }

  onFileError(error: {file: File, error: string}): void {
    console.log('File error:', error);
    this.errorFiles = [...this.errorFiles, error];
  }

  // Get current configuration
  getCurrentConfig(): any {
    return this.uploadConfigs.find(config => config.id === this.selectedConfig) || this.uploadConfigs[0];
  }

  // Reset tracking
  resetTracking(): void {
    this.selectedFiles = [];
    this.uploadedFiles = [];
    this.removedFiles = [];
    this.errorFiles = [];
  }

  // Format file size
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  // Get configuration description
  getConfigDescription(): string {
    const config = this.getCurrentConfig();
    let description = `Multiple: ${config.multiple ? 'Yes' : 'No'}`;
    if (config.accept) description += ` • Accept: ${config.accept}`;
    if (config.maxFileSize > 0) description += ` • Max size: ${this.formatFileSize(config.maxFileSize)}`;
    if (config.maxFiles > 1) description += ` • Max files: ${config.maxFiles}`;
    return description;
  }
}
