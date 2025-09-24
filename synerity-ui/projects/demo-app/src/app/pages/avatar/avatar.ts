import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Avatar as SuiAvatar } from 'ui-lib';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiAvatar],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss'
})
export class AvatarComponent {
  activeTab = 'demo';
  
  // Demo data
  avatarImage = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face';
  avatarName = 'John Doe';
  avatarInitials = 'JD';
  
  // Code visibility states
  showBasicAvatarCode = false;
  showAvatarSizesCode = false;
  showAvatarVariantsCode = false;
  
  onTabChange(tab: string): void {
    this.activeTab = tab;
  }
  
  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicAvatarCode = !this.showBasicAvatarCode;
        break;
      case 'sizes':
        this.showAvatarSizesCode = !this.showAvatarSizesCode;
        break;
      case 'variants':
        this.showAvatarVariantsCode = !this.showAvatarVariantsCode;
        break;
    }
  }
}