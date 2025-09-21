import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Upload } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-fileupload',
  imports: [CommonModule, FormsModule, Upload, Tabs],
  templateUrl: './fileupload.html',
  styleUrl: './fileupload.scss'
})
export class Fileupload {
  activeTab = 'demo';
  
  // Demo data
  uploadedFiles: any[] = [];
  maxFileSize = 1000000; // 1MB
  allowedFileTypes = ['image/*', 'application/pdf'];
  
  // Code visibility states
  showBasicFileUploadCode = false;
  showCustomFileUploadCode = false;
  showEventFileUploadCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicFileUpload':
        this.showBasicFileUploadCode = !this.showBasicFileUploadCode;
        break;
      case 'customFileUpload':
        this.showCustomFileUploadCode = !this.showCustomFileUploadCode;
        break;
      case 'eventFileUpload':
        this.showEventFileUploadCode = !this.showEventFileUploadCode;
        break;
    }
  }
  
  // File upload demo methods
  onFileUpload(event: any) {
    console.log('File uploaded:', event);
    this.uploadedFiles = event.files;
  }
  
  onFileSelect(event: any) {
    console.log('File selected:', event);
  }
  
  onFileError(event: any) {
    console.log('File upload error:', event);
  }
}
