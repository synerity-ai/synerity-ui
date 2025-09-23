import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs } from '../../shared/tabs/tabs';
import { Timeline as SuiTimeline } from '../../../../../ui-lib/src/lib/timeline/timeline';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, Tabs, SuiTimeline],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss'
})
export class TimelineComponent {
  activeTab = 'demo';
  showVerticalTimelineCode = false;
  showHorizontalTimelineCode = false;
  showStatusTimelineCode = false;

  // Vertical timeline data
  verticalTimelineData = [
    {
      date: '2024-01-15',
      content: 'Project initialization and setup completed',
      status: 'completed'
    },
    {
      date: '2024-01-20',
      content: 'UI/UX design phase started',
      status: 'completed'
    },
    {
      date: '2024-02-01',
      content: 'Development phase in progress',
      status: 'completed'
    },
    {
      date: '2024-02-15',
      content: 'Testing and quality assurance',
      status: 'warning'
    },
    {
      date: '2024-03-01',
      content: 'Deployment and launch',
      status: 'error'
    }
  ];

  // Horizontal timeline data
  horizontalTimelineData = [
    {
      date: 'Jan',
      content: 'Planning',
      status: 'completed'
    },
    {
      date: 'Feb',
      content: 'Development',
      status: 'completed'
    },
    {
      date: 'Mar',
      content: 'Testing',
      status: 'warning'
    },
    {
      date: 'Apr',
      content: 'Launch',
      status: 'error'
    }
  ];

  // Status timeline data
  statusTimelineData = [
    {
      date: '2024-01-15',
      content: 'Order placed successfully',
      status: 'success',
      icon: '✓'
    },
    {
      date: '2024-01-16',
      content: 'Payment processed',
      status: 'success',
      icon: '✓'
    },
    {
      date: '2024-01-17',
      content: 'Order shipped',
      status: 'completed',
      icon: '🚚'
    },
    {
      date: '2024-01-20',
      content: 'Out for delivery',
      status: 'warning',
      icon: '📦'
    },
    {
      date: '2024-01-21',
      content: 'Delivered',
      status: 'success',
      icon: '✓'
    }
  ];

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'verticalTimeline':
        this.showVerticalTimelineCode = !this.showVerticalTimelineCode;
        break;
      case 'horizontalTimeline':
        this.showHorizontalTimelineCode = !this.showHorizontalTimelineCode;
        break;
      case 'statusTimeline':
        this.showStatusTimelineCode = !this.showStatusTimelineCode;
        break;
    }
  }

  onEventClick(event: any): void {
    console.log('Timeline event clicked:', event);
  }
}
