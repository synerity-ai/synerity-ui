import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Tag as SuiTag } from 'ui-lib';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [CommonModule, FormsModule, AppTabs, SuiTag],
  templateUrl: './tag.html',
  styleUrl: './tag.scss'
})
export class TagComponent {
  activeTab = 'demo';
  
  // Demo data
  tags = [
    { value: 'Angular', severity: 'info' as const },
    { value: 'React', severity: 'success' as const },
    { value: 'Vue', severity: 'warning' as const },
    { value: 'TypeScript', severity: 'danger' as const },
    { value: 'JavaScript', severity: 'contrast' as const }
  ];

  iconTags = [
    { value: 'Frontend', icon: '🎨', severity: 'info' as const },
    { value: 'Backend', icon: '⚙️', severity: 'success' as const },
    { value: 'Database', icon: '🗄️', severity: 'warning' as const },
    { value: 'DevOps', icon: '🚀', severity: 'danger' as const },
    { value: 'Design', icon: '🎯', severity: 'contrast' as const }
  ];

  removableTags = [
    { value: 'Removable Tag 1', severity: 'info' as const, removable: true, disabled: false },
    { value: 'Removable Tag 2', severity: 'success' as const, removable: true, disabled: false },
    { value: 'Removable Tag 3', severity: 'warning' as const, removable: true, disabled: false },
    { value: 'Disabled Tag', severity: 'danger' as const, removable: true, disabled: true }
  ];
  
  // Code visibility states
  showBasicTagCode = false;
  showIconTagCode = false;
  showRemovableTagCode = false;
  showStyledTagCode = false;
  
  onTabChange(tab: string): void {
    this.activeTab = tab;
  }
  
  toggleCode(example: string): void {
    switch (example) {
      case 'basic':
        this.showBasicTagCode = !this.showBasicTagCode;
        break;
      case 'icon':
        this.showIconTagCode = !this.showIconTagCode;
        break;
      case 'removable':
        this.showRemovableTagCode = !this.showRemovableTagCode;
        break;
      case 'styled':
        this.showStyledTagCode = !this.showStyledTagCode;
        break;
    }
  }
  
  // Tag demo methods
  onTagRemove(tag: any): void {
    console.log('Tag removed:', tag);
    // In a real application, you would remove the tag from the array
  }
  
  onTagClick(event: any): void {
    console.log('Tag clicked:', event);
  }
}
