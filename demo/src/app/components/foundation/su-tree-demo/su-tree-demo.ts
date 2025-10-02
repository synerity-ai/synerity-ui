import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tree } from '@synerity/ui';

@Component({
  selector: 'app-su-tree-demo',
  imports: [CommonModule, FormsModule, Tree],
  templateUrl: './su-tree-demo.html',
  styleUrl: './su-tree-demo.scss'
})
export class SuTreeDemo {
  // File system tree
  files = [
    {
      key: '0',
      label: 'Documents',
      data: 'Documents Folder',
      children: [
        {
          key: '0-0',
          label: 'Work',
          data: 'Work Folder',
          children: [
            { key: '0-0-0', label: 'Expenses.xlsx', data: 'Expenses Document' },
            { key: '0-0-1', label: 'Resume.docx', data: 'Resume Document' }
          ]
        },
        {
          key: '0-1',
          label: 'Personal',
          data: 'Personal Folder',
          children: [
            { key: '0-1-0', label: 'Photos.zip', data: 'Photos Archive' },
            { key: '0-1-1', label: 'Notes.txt', data: 'Notes File' }
          ]
        }
      ]
    },
    {
      key: '1',
      label: 'Downloads',
      data: 'Downloads Folder',
      children: [
        { key: '1-0', label: 'Setup.exe', data: 'Setup File' },
        { key: '1-1', label: 'Document.pdf', data: 'PDF Document' }
      ]
    },
    {
      key: '2',
      label: 'Pictures',
      data: 'Pictures Folder',
      children: [
        { key: '2-0', label: 'Vacation.jpg', data: 'Vacation Photo' },
        { key: '2-1', label: 'Family.jpg', data: 'Family Photo' }
      ]
    }
  ];

  // Organization tree
  organization = [
    {
      key: '0',
      label: 'CEO',
      data: 'Chief Executive Officer',
      children: [
        {
          key: '0-0',
          label: 'CTO',
          data: 'Chief Technology Officer',
          children: [
            { key: '0-0-0', label: 'Development Team Lead', data: 'Dev Lead' },
            { key: '0-0-1', label: 'QA Team Lead', data: 'QA Lead' }
          ]
        },
        {
          key: '0-1',
          label: 'CFO',
          data: 'Chief Financial Officer',
          children: [
            { key: '0-1-0', label: 'Accounting Manager', data: 'Accounting' },
            { key: '0-1-1', label: 'Finance Manager', data: 'Finance' }
          ]
        }
      ]
    }
  ];

  selectedNodes: any[] = [];

  handleNodeSelect(event: any): void {
    console.log('Node selected:', event);
  }

  handleNodeExpand(event: any): void {
    console.log('Node expanded:', event);
  }

  handleSelectionChange(event: any): void {
    console.log('Selection changed:', event);
    this.selectedNodes = event;
  }
}
