import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Upload as SuiUpload } from 'ui-lib';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiUpload],
  templateUrl: './upload.html',
  styleUrl: './upload.scss'
})
export class UploadComponent {
  activeTab = 'demo';
  uploadStatus: Array<{ file: File; status: string }> = [];

  // Code visibility toggles
  showBasicUploadCode = false;
  showSingleUploadCode = false;
  showAutoUploadCode = false;
  showCustomUploadCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicUpload':
        this.showBasicUploadCode = !this.showBasicUploadCode;
        break;
      case 'singleUpload':
        this.showSingleUploadCode = !this.showSingleUploadCode;
        break;
      case 'autoUpload':
        this.showAutoUploadCode = !this.showAutoUploadCode;
        break;
      case 'customUpload':
        this.showCustomUploadCode = !this.showCustomUploadCode;
        break;
    }
  }

  onFileSelect(event: any): void {
    console.log('Files selected:', event.files);
  }

  onUpload(event: any): void {
    console.log('Files uploaded:', event.files);
    if (event.file) {
      this.uploadStatus.push({ file: event.file, status: 'success' });
    } else {
      event.files.forEach((file: File) => {
        this.uploadStatus.push({ file, status: 'success' });
      });
    }
  }

  onCustomUpload(event: any): void {
    console.log('Custom upload handler:', event.files);
    // Simulate custom upload logic
    event.files.forEach((file: File) => {
      console.log(`Uploading ${file.name} with custom logic...`);
      this.uploadStatus.push({ file, status: 'success' });
    });
  }

  onError(event: any): void {
    console.error('Upload error:', event.error);
    this.uploadStatus.push({ file: event.file, status: 'error' });
  }
}