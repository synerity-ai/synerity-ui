import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadAdvanced } from 'ui-lib';

@Component({
  selector: 'app-file-upload-advanced',
  standalone: true,
  imports: [CommonModule, FileUploadAdvanced],
  templateUrl: './file-upload-advanced.html',
  styleUrls: ['./file-upload-advanced.scss']
})
export class FileUploadAdvancedComponent {
  activeTab = 0;
  showBasicCode = false;
  showDragDropCode = false;
  showCustomCode = false;

  // Demo configurations
  basicConfig = {
    multiple: true,
    accept: 'image/*,.pdf,.doc,.docx',
    maxFileSize: 5 * 1024 * 1024, // 5MB
    maxFiles: 5,
    autoUpload: false
  };

  dragDropConfig = {
    multiple: true,
    accept: 'image/*,video/*',
    maxFileSize: 10 * 1024 * 1024, // 10MB
    maxFiles: 3,
    dragDropEnabled: true,
    autoUpload: true,
    showProgress: true
  };

  customConfig = {
    multiple: false,
    accept: '.pdf',
    maxFileSize: 2 * 1024 * 1024, // 2MB
    maxFiles: 1,
    dragDropEnabled: true,
    showPreview: false,
    style: {
      borderColor: '#10b981',
      backgroundColor: '#f0fdf4'
    }
  };

  onTabChange(index: number): void {
    this.activeTab = index;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'dragdrop':
        this.showDragDropCode = !this.showDragDropCode;
        break;
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
    }
  }

  onFileSelect(files: File[]): void {
    console.log('Files selected:', files);
  }

  onFileUpload(uploadedFiles: any[]): void {
    console.log('Files uploaded:', uploadedFiles);
  }

  onFileRemove(removedFile: any): void {
    console.log('File removed:', removedFile);
  }

  onFileError(error: {file: File, error: string}): void {
    console.log('File error:', error);
  }
}
