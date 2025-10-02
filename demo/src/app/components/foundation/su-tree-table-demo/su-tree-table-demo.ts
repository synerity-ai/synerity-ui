import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeTable } from '@synerity/ui';

@Component({
  selector: 'app-su-tree-table-demo',
  imports: [CommonModule, FormsModule, TreeTable],
  templateUrl: './su-tree-table-demo.html',
  styleUrl: './su-tree-table-demo.scss'
})
export class SuTreeTableDemo {
  // File system data
  files = [
    {
      key: '0',
      data: { name: 'Documents', size: '75 KB', type: 'Folder', modified: '2024-01-15' },
      children: [
        { key: '0-0', data: { name: 'Work', size: '25 KB', type: 'Folder', modified: '2024-01-10' } },
        { key: '0-1', data: { name: 'Personal', size: '50 KB', type: 'Folder', modified: '2024-01-12' } }
      ]
    },
    {
      key: '1',
      data: { name: 'Pictures', size: '2.3 MB', type: 'Folder', modified: '2024-01-20' },
      children: [
        { key: '1-0', data: { name: 'Vacation.jpg', size: '1.2 MB', type: 'Image', modified: '2024-01-18' } },
        { key: '1-1', data: { name: 'Family.jpg', size: '1.1 MB', type: 'Image', modified: '2024-01-19' } }
      ]
    },
    {
      key: '2',
      data: { name: 'Downloads', size: '150 MB', type: 'Folder', modified: '2024-01-25' },
      children: [
        { key: '2-0', data: { name: 'Setup.exe', size: '120 MB', type: 'Application', modified: '2024-01-24' } },
        { key: '2-1', data: { name: 'Document.pdf', size: '30 MB', type: 'PDF', modified: '2024-01-25' } }
      ]
    }
  ];

  columns = [
    { field: 'name', header: 'Name', sortable: true },
    { field: 'size', header: 'Size', sortable: true },
    { field: 'type', header: 'Type', sortable: true },
    { field: 'modified', header: 'Modified', sortable: true }
  ];

  selectedNodes: any[] = [];

  handleSort(event: any): void {
    console.log('Sort event:', event);
  }

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
