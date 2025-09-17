import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Avatar as SuiAvatar } from '../../../../../ui-lib/src/lib/avatar/avatar';

@Component({
  selector: 'app-avatar',
  imports: [CommonModule, FormsModule, Tabs, SuiAvatar],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss'
})
export class Avatar {
  activeTab = 'demo';
  
  // Demo data
  avatarImage = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face';
  avatarName = 'John Doe';
  avatarInitials = 'JD';
  
  // Code visibility states
  showBasicAvatarCode = false;
  showAvatarSizesCode = false;
  showAvatarVariantsCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicAvatar':
        this.showBasicAvatarCode = !this.showBasicAvatarCode;
        break;
      case 'avatarSizes':
        this.showAvatarSizesCode = !this.showAvatarSizesCode;
        break;
      case 'avatarVariants':
        this.showAvatarVariantsCode = !this.showAvatarVariantsCode;
        break;
    }
  }
}
