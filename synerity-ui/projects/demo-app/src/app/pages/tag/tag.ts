import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Tag as SuiTag } from '../../../../../ui-lib/src/lib/tag/tag';

@Component({
  selector: 'app-tag',
  imports: [CommonModule, FormsModule, Tabs, SuiTag],
  templateUrl: './tag.html',
  styleUrl: './tag.scss'
})
export class TagComponent {
  activeTab = 'demo';
  
  // Demo data
  tagValue = 'Sample Tag';
  tagIcon = 'pi pi-tag';
  
  // Code visibility states
  showBasicTagCode = false;
  showIconTagCode = false;
  showCustomTagCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicTag':
        this.showBasicTagCode = !this.showBasicTagCode;
        break;
      case 'iconTag':
        this.showIconTagCode = !this.showIconTagCode;
        break;
      case 'customTag':
        this.showCustomTagCode = !this.showCustomTagCode;
        break;
    }
  }
  
  // Tag demo methods
  onTagClick(event: any) {
    console.log('Tag clicked:', event);
  }
}
