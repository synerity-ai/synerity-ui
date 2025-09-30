import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Avatar } from '@synerity/ui';

@Component({
  selector: 'app-su-avatar-demo',
  imports: [CommonModule, FormsModule, Avatar],
  templateUrl: './su-avatar-demo.html',
  styleUrl: './su-avatar-demo.scss'
})
export class SuAvatarDemo {
  // Sample user data
  users = [
    { name: 'John Doe', email: 'john@example.com', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face' },
    { name: 'Jane Smith', email: 'jane@example.com', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face' },
    { name: 'Mike Johnson', email: 'mike@example.com', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
    { name: 'Sarah Wilson', email: 'sarah@example.com', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face' },
    { name: 'Alex Brown', email: 'alex@example.com', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face' }
  ];

  // Avatar sizes
  sizes = [
    { size: 'small', label: 'Small', description: '32px' },
    { size: 'normal', label: 'Normal', description: '48px' },
    { size: 'large', label: 'Large', description: '64px' },
    { size: 'xlarge', label: 'Extra Large', description: '96px' }
  ] as const;

  // Avatar shapes
  shapes = [
    { shape: 'circle', label: 'Circle' },
    { shape: 'square', label: 'Square' }
  ] as const;

  // Icon options
  icons = [
    { icon: '👤', label: 'User' },
    { icon: '👨', label: 'Man' },
    { icon: '👩', label: 'Woman' },
    { icon: '👨‍💼', label: 'Businessman' },
    { icon: '👩‍💼', label: 'Businesswoman' },
    { icon: '👨‍🎓', label: 'Student' },
    { icon: '👩‍🎓', label: 'Student' },
    { icon: '👨‍⚕️', label: 'Doctor' },
    { icon: '👩‍⚕️', label: 'Doctor' }
  ];

  // Current demo settings
  selectedSize: 'small' | 'normal' | 'large' | 'xlarge' = 'normal';
  selectedShape: 'square' | 'circle' = 'circle';
  selectedIcon = '👤';
  customLabel = 'John Doe';
  customImage = '';
  showCustomAvatar = false;

  // Status indicators
  statuses = [
    { status: 'online', label: 'Online', color: '#10b981' },
    { status: 'away', label: 'Away', color: '#f59e0b' },
    { status: 'busy', label: 'Busy', color: '#ef4444' },
    { status: 'offline', label: 'Offline', color: '#6b7280' }
  ];

  // Avatar groups
  avatarGroups = [
    { users: this.users.slice(0, 2), label: 'Small Team' },
    { users: this.users.slice(0, 4), label: 'Medium Team' },
    { users: this.users, label: 'Large Team' }
  ];

  // Utility methods
  getInitials(name: string): string {
    const words = name.trim().split(' ');
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }
    return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
  }

  generateRandomAvatar(): void {
    const randomUser = this.users[Math.floor(Math.random() * this.users.length)];
    this.customLabel = randomUser.name;
    this.customImage = randomUser.image;
    this.showCustomAvatar = true;
  }

  clearCustomAvatar(): void {
    this.customLabel = '';
    this.customImage = '';
    this.showCustomAvatar = false;
  }

  // Color utilities for initials avatars
  getAvatarColor(name: string): string {
    const colors = [
      '#3b82f6', '#ef4444', '#10b981', '#f59e0b', 
      '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'
    ];
    const hash = name.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    return colors[Math.abs(hash) % colors.length];
  }

  // Badge positioning
  getBadgePosition(index: number): string {
    const positions = ['top-right', 'top-left', 'bottom-right', 'bottom-left'];
    return positions[index % positions.length];
  }
}
