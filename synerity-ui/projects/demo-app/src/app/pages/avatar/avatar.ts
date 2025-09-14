import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Avatar as SuiAvatar } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-avatar',
  imports: [CommonModule, FormsModule, SuiAvatar, Tabs],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss'
})
export class Avatar {
  activeTab = 'demo';
  
  // Demo data
  avatarImage = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face';
  avatarLabel = 'John Doe';
  
  // Code visibility states
  showBasicAvatarsCode = false;
  showAvatarSizesCode = false;
  showAvatarShapesCode = false;
  showAvatarVariantsCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  // Code toggle methods
  toggleCode(section: string) {
    switch(section) {
      case 'basicAvatars':
        this.showBasicAvatarsCode = !this.showBasicAvatarsCode;
        break;
      case 'avatarSizes':
        this.showAvatarSizesCode = !this.showAvatarSizesCode;
        break;
      case 'avatarShapes':
        this.showAvatarShapesCode = !this.showAvatarShapesCode;
        break;
      case 'avatarVariants':
        this.showAvatarVariantsCode = !this.showAvatarVariantsCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
}
