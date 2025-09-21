import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { TreeSelect as SuiTreeSelect } from '../../../../../ui-lib/src/lib/tree-select/tree-select';

@Component({
  selector: 'app-treeselect',
  imports: [CommonModule, FormsModule, Tabs, SuiTreeSelect],
  templateUrl: './treeselect.html',
  styleUrl: './treeselect.scss'
})
export class TreeselectComponent {
  activeTab = 'demo';

  // Basic TreeSelect
  basicValue: any = null;
  basicOptions = [
    {
      label: 'Frontend',
      children: [
        { label: 'Angular', value: 'angular' },
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' }
      ]
    },
    {
      label: 'Backend',
      children: [
        { label: 'Node.js', value: 'nodejs' },
        { label: 'Python', value: 'python' },
        { label: 'Java', value: 'java' }
      ]
    },
    {
      label: 'Mobile',
      children: [
        { label: 'React Native', value: 'react-native' },
        { label: 'Flutter', value: 'flutter' },
        { label: 'Ionic', value: 'ionic' }
      ]
    }
  ];

  // Department TreeSelect
  departmentValue: any = null;
  departmentOptions = [
    {
      label: 'Engineering',
      children: [
        {
          label: 'Frontend Team',
          children: [
            { label: 'UI/UX Designers', value: 'ui-ux' },
            { label: 'React Developers', value: 'react-dev' },
            { label: 'Angular Developers', value: 'angular-dev' }
          ]
        },
        {
          label: 'Backend Team',
          children: [
            { label: 'API Developers', value: 'api-dev' },
            { label: 'Database Administrators', value: 'dba' },
            { label: 'DevOps Engineers', value: 'devops' }
          ]
        }
      ]
    },
    {
      label: 'Business',
      children: [
        { label: 'Sales Team', value: 'sales' },
        { label: 'Marketing Team', value: 'marketing' },
        { label: 'Customer Support', value: 'support' }
      ]
    }
  ];

  // File System TreeSelect
  fileSystemValue: any = null;
  fileSystemOptions = [
    {
      label: 'Documents',
      children: [
        { label: 'Projects', value: 'projects' },
        { label: 'Reports', value: 'reports' },
        { label: 'Presentations', value: 'presentations' }
      ]
    },
    {
      label: 'Media',
      children: [
        { label: 'Photos', value: 'photos' },
        { label: 'Videos', value: 'videos' },
        { label: 'Music', value: 'music' }
      ]
    },
    {
      label: 'Applications',
      children: [
        { label: 'Web Apps', value: 'web-apps' },
        { label: 'Mobile Apps', value: 'mobile-apps' },
        { label: 'Desktop Apps', value: 'desktop-apps' }
      ]
    }
  ];

  // Disabled TreeSelect
  disabledValue: any = 'react';
  disabledOptions = [
    {
      label: 'Available Frameworks',
      children: [
        { label: 'Angular', value: 'angular' },
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' }
      ]
    }
  ];

  // Code visibility flags
  showBasicCode = false;
  showDepartmentCode = false;
  showFileSystemCode = false;
  showDisabledCode = false;

  onTabChange(tab: string) {
    this.activeTab = tab;
  }

  toggleCode(type: string) {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'department':
        this.showDepartmentCode = !this.showDepartmentCode;
        break;
      case 'filesystem':
        this.showFileSystemCode = !this.showFileSystemCode;
        break;
      case 'disabled':
        this.showDisabledCode = !this.showDisabledCode;
        break;
    }
  }

  onBasicChange(value: any) {
    this.basicValue = value;
    console.log('Basic TreeSelect selection changed:', value);
  }

  onDepartmentChange(value: any) {
    this.departmentValue = value;
    console.log('Department TreeSelect selection changed:', value);
  }

  onFileSystemChange(value: any) {
    this.fileSystemValue = value;
    console.log('File System TreeSelect selection changed:', value);
  }

  onDisabledChange(value: any) {
    this.disabledValue = value;
    console.log('Disabled TreeSelect selection changed:', value);
  }
}
