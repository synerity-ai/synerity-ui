import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Upload } from '@synerity/ui';

@Component({
  selector: 'app-upload-demo',
  standalone: true,
  imports: [CommonModule, Upload],
  templateUrl: './upload-demo.html',
  styleUrls: ['./upload-demo.scss']
})
export class UploadDemo {
  @Input() currentExample: any;

  getCurrentExample() {
    return this.currentExample || { name: 'Basic Upload' };
  }

  uploadedFiles: any[] = [];

  onUpload(event: any): void {
    console.log('Files uploaded:', event);
    this.uploadedFiles = event.files || [];
  }

  onBeforeUpload(event: any): void {
    console.log('Before upload:', event);
  }

  onProgress(event: any): void {
    console.log('Upload progress:', event);
  }

  onError(event: any): void {
    console.error('Upload error:', event);
    alert(`Error: ${event.error}`);
  }

  onSelect(event: any): void {
    console.log('Files selected:', event);
  }

  onRemove(event: any): void {
    console.log('File removed:', event);
  }
}
