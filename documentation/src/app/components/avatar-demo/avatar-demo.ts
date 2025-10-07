import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Avatar } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

interface User {
  name: string;
  email: string;
  image?: string;
  role: string;
  status: 'online' | 'offline' | 'busy' | 'away';
}

interface TeamMember {
  name: string;
  position: string;
  department: string;
  image?: string;
  initials: string;
}

@Component({
  selector: 'app-avatar-demo',
  standalone: true,
  imports: [CommonModule, NgFor, Avatar],
  templateUrl: './avatar-demo.html',
  styleUrl: './avatar-demo.scss'
})
export class AvatarDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Basic avatars
  basicUsers = [
    { name: 'John Doe', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face' },
    { name: 'Jane Smith', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face' },
    { name: 'Mike Johnson', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
    { name: 'Sarah Wilson', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face' }
  ];

  // Size variations
  sizeVariants: Array<{size: 'small' | 'normal' | 'large' | 'xlarge', label: string}> = [
    { size: 'small', label: 'Small' },
    { size: 'normal', label: 'Normal' },
    { size: 'large', label: 'Large' },
    { size: 'xlarge', label: 'Extra Large' }
  ];

  // Shape variations
  shapeVariants: Array<{shape: 'circle' | 'square', label: string}> = [
    { shape: 'circle', label: 'Circle' },
    { shape: 'square', label: 'Square' }
  ];

  // Users with status
  usersWithStatus: User[] = [
    {
      name: 'Alice Cooper',
      email: 'alice@company.com',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      role: 'Product Manager',
      status: 'online'
    },
    {
      name: 'Bob Smith',
      email: 'bob@company.com',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      role: 'Developer',
      status: 'busy'
    },
    {
      name: 'Carol Davis',
      email: 'carol@company.com',
      role: 'Designer',
      status: 'away'
    },
    {
      name: 'David Wilson',
      email: 'david@company.com',
      role: 'QA Engineer',
      status: 'offline'
    }
  ];

  // Team members for group demo
  teamMembers: TeamMember[] = [
    {
      name: 'Emma Thompson',
      position: 'CEO',
      department: 'Executive',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      initials: 'ET'
    },
    {
      name: 'James Rodriguez',
      position: 'CTO',
      department: 'Engineering',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      initials: 'JR'
    },
    {
      name: 'Lisa Chen',
      position: 'Head of Design',
      department: 'Design',
      initials: 'LC'
    },
    {
      name: 'Michael Brown',
      position: 'Head of Marketing',
      department: 'Marketing',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      initials: 'MB'
    },
    {
      name: 'Sarah Johnson',
      position: 'Head of Sales',
      department: 'Sales',
      initials: 'SJ'
    }
  ];

  // Icon avatars
  iconAvatars = [
    { icon: '👤', label: 'User' },
    { icon: '👨‍💼', label: 'Manager' },
    { icon: '👩‍💻', label: 'Developer' },
    { icon: '👨‍🎨', label: 'Designer' },
    { icon: '👩‍🔬', label: 'Scientist' },
    { icon: '👨‍🏫', label: 'Teacher' }
  ];

  // Custom styled avatars
  customAvatars = [
    { name: 'Alex Green', color: '#10b981', initials: 'AG' },
    { name: 'Blue Sky', color: '#3b82f6', initials: 'BS' },
    { name: 'Red Rose', color: '#ef4444', initials: 'RR' },
    { name: 'Purple Rain', color: '#8b5cf6', initials: 'PR' },
    { name: 'Orange Sunset', color: '#f59e0b', initials: 'OS' }
  ];

  // Methods
  getStatusColor(status: string): string {
    switch (status) {
      case 'online': return '#10b981';
      case 'busy': return '#ef4444';
      case 'away': return '#f59e0b';
      case 'offline': return '#6b7280';
      default: return '#6b7280';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'online': return 'Online';
      case 'busy': return 'Busy';
      case 'away': return 'Away';
      case 'offline': return 'Offline';
      default: return 'Unknown';
    }
  }

  getDepartmentColor(department: string): string {
    switch (department.toLowerCase()) {
      case 'executive': return '#8b5cf6';
      case 'engineering': return '#3b82f6';
      case 'design': return '#f59e0b';
      case 'marketing': return '#ef4444';
      case 'sales': return '#10b981';
      default: return '#6b7280';
    }
  }
}
