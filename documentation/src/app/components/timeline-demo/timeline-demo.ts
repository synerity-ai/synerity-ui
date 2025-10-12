import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Timeline } from '@synerity/ui';

interface TimelineEvent {
  status?: string;
  content?: string;
  date?: string;
  icon?: string;
  color?: string;
}

@Component({
  selector: 'app-timeline-demo',
  standalone: true,
  imports: [CommonModule, Timeline],
  templateUrl: './timeline-demo.html',
  styleUrls: ['./timeline-demo.scss']
})
export class TimelineDemo {
  @Input() currentExample: any;

  getCurrentExample() {
    return this.currentExample || { name: 'Basic Timeline' };
  }

  // Project progress events
  projectEvents: TimelineEvent[] = [
    {
      status: 'completed',
      content: 'Project kickoff meeting completed',
      date: 'January 15, 2024'
    },
    {
      status: 'completed',
      content: 'Requirements gathering and analysis done',
      date: 'January 22, 2024'
    },
    {
      status: 'completed',
      content: 'Design mockups approved by client',
      date: 'February 5, 2024'
    },
    {
      status: 'success',
      content: 'Development phase in progress',
      date: 'February 12, 2024'
    },
    {
      status: 'warning',
      content: 'Testing and QA scheduled',
      date: 'March 1, 2024'
    }
  ];

  // Order tracking events
  orderEvents: TimelineEvent[] = [
    {
      status: 'completed',
      icon: '📦',
      content: 'Order placed successfully',
      date: '10:00 AM'
    },
    {
      status: 'completed',
      icon: '✓',
      content: 'Payment confirmed',
      date: '10:05 AM'
    },
    {
      status: 'completed',
      icon: '🏭',
      content: 'Order processed and packed',
      date: '11:30 AM'
    },
    {
      status: 'success',
      icon: '🚚',
      content: 'Out for delivery',
      date: '2:00 PM'
    },
    {
      status: 'warning',
      icon: '📍',
      content: 'Expected delivery',
      date: '5:00 PM'
    }
  ];

  // Activity log events
  activityEvents: TimelineEvent[] = [
    {
      status: 'success',
      icon: '👤',
      content: 'User logged in',
      date: '2 minutes ago'
    },
    {
      status: 'completed',
      icon: '📝',
      content: 'Document uploaded',
      date: '15 minutes ago'
    },
    {
      status: 'completed',
      icon: '💬',
      content: 'Comment added',
      date: '1 hour ago'
    },
    {
      status: 'warning',
      icon: '⚠️',
      content: 'Password change required',
      date: '3 hours ago'
    },
    {
      status: 'error',
      icon: '❌',
      content: 'Login failed',
      date: '5 hours ago'
    }
  ];

  // Horizontal timeline
  horizontalEvents: TimelineEvent[] = [
    {
      status: 'completed',
      content: 'Registered',
      date: 'Step 1'
    },
    {
      status: 'completed',
      content: 'Verified',
      date: 'Step 2'
    },
    {
      status: 'success',
      content: 'In Progress',
      date: 'Step 3'
    },
    {
      status: 'warning',
      content: 'Review',
      date: 'Step 4'
    }
  ];

  // Alternate timeline
  alternateEvents: TimelineEvent[] = [
    {
      status: 'completed',
      icon: '🎯',
      content: 'Project planning completed',
      date: 'Week 1'
    },
    {
      status: 'completed',
      icon: '💻',
      content: 'Development started',
      date: 'Week 2'
    },
    {
      status: 'success',
      icon: '🚀',
      content: 'Beta release deployed',
      date: 'Week 6'
    },
    {
      status: 'warning',
      icon: '📊',
      content: 'Final testing pending',
      date: 'Week 8'
    }
  ];

  // Simple events
  simpleEvents: TimelineEvent[] = [
    { content: 'First event', date: 'Today' },
    { content: 'Second event', date: 'Yesterday' },
    { content: 'Third event', date: '2 days ago' }
  ];

  onEventClick(event: any): void {
    console.log('Event clicked:', event);
  }
}
