import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Timeline } from 'ui-lib';

@Component({
  selector: 'app-timeline',
  imports: [CommonModule, FormsModule, Tabs, Timeline],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss'
})
export class TimelinePage {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicTimelineCode = false;
  showAlternateTimelineCode = false;
  showHorizontalTimelineCode = false;
  showCustomIconsCode = false;

  // Basic timeline data
  basicTimelineData = [
    {
      date: '2024-01-15',
      content: 'Project kickoff meeting',
      status: 'completed'
    },
    {
      date: '2024-01-20',
      content: 'Requirements gathering',
      status: 'completed'
    },
    {
      date: '2024-01-25',
      content: 'Design phase begins',
      status: 'in-progress'
    },
    {
      date: '2024-02-01',
      content: 'Development starts',
      status: 'pending'
    },
    {
      date: '2024-02-15',
      content: 'Testing phase',
      status: 'pending'
    }
  ];

  // Alternate timeline data
  alternateTimelineData = [
    {
      date: '2024-01-01',
      content: 'New Year celebration',
      status: 'completed'
    },
    {
      date: '2024-01-15',
      content: 'Team building event',
      status: 'completed'
    },
    {
      date: '2024-02-01',
      content: 'Product launch planning',
      status: 'in-progress'
    },
    {
      date: '2024-02-15',
      content: 'Marketing campaign',
      status: 'pending'
    }
  ];

  // Horizontal timeline data
  horizontalTimelineData = [
    {
      date: 'Q1',
      content: 'Planning',
      status: 'completed'
    },
    {
      date: 'Q2',
      content: 'Development',
      status: 'in-progress'
    },
    {
      date: 'Q3',
      content: 'Testing',
      status: 'pending'
    },
    {
      date: 'Q4',
      content: 'Launch',
      status: 'pending'
    }
  ];

  // Custom icons timeline data
  customIconsTimelineData = [
    {
      date: '2024-01-10',
      content: 'User registration',
      icon: '👤',
      status: 'completed'
    },
    {
      date: '2024-01-15',
      content: 'Email verification',
      icon: '📧',
      status: 'completed'
    },
    {
      date: '2024-01-20',
      content: 'Profile setup',
      icon: '⚙️',
      status: 'in-progress'
    },
    {
      date: '2024-01-25',
      content: 'First login',
      icon: '🔐',
      status: 'pending'
    },
    {
      date: '2024-02-01',
      content: 'Welcome message',
      icon: '🎉',
      status: 'pending'
    }
  ];

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicTimeline':
        this.showBasicTimelineCode = !this.showBasicTimelineCode;
        break;
      case 'alternateTimeline':
        this.showAlternateTimelineCode = !this.showAlternateTimelineCode;
        break;
      case 'horizontalTimeline':
        this.showHorizontalTimelineCode = !this.showHorizontalTimelineCode;
        break;
      case 'customIcons':
        this.showCustomIconsCode = !this.showCustomIconsCode;
        break;
    }
  }

  onEventClick(event: any): void {
    console.log('Timeline event clicked:', event);
  }
}