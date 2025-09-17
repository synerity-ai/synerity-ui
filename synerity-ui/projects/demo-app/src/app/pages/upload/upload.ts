import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Upload as SuiUpload } from '../../../../../ui-lib/src/lib/upload/upload';

@Component({
  selector: 'app-upload',
  imports: [CommonModule, FormsModule, Tabs, SuiUpload],
  templateUrl: './upload.html',
  styleUrl: './upload.scss'
})
export class Upload {
  activeTab = 'demo';
  
  // Demo data
  uploadedFiles: File[] = [];
  uploadProgress = 0;
  isUploading = false;
  
  // Code visibility states
  showBasicUploadCode = false;
  showDragDropUploadCode = false;
  showMultipleUploadCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicUpload':
        this.showBasicUploadCode = !this.showBasicUploadCode;
        break;
      case 'dragDropUpload':
        this.showDragDropUploadCode = !this.showDragDropUploadCode;
        break;
      case 'multipleUpload':
        this.showMultipleUploadCode = !this.showMultipleUploadCode;
        break;
    }
  }
  
  // Upload demo methods
  onFileSelect(event: any) {
    const files = event.target.files;
    if (files) {
      this.uploadedFiles = Array.from(files);
    }
  }
  
  onUpload(event: any) {
    console.log('Upload event:', event);
    this.isUploading = true;
    this.uploadProgress = 0;
    
    // Simulate upload progress
    const interval = setInterval(() => {
      this.uploadProgress += 10;
      if (this.uploadProgress >= 100) {
        clearInterval(interval);
        this.isUploading = false;
        alert('Upload completed!');
      }
    }, 200);
  }
  
  onFileRemove(file: File) {
    const index = this.uploadedFiles.indexOf(file);
    if (index > -1) {
      this.uploadedFiles.splice(index, 1);
    }
  }
  
  clearFiles() {
    this.uploadedFiles = [];
  }
}
