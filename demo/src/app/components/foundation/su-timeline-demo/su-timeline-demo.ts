import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Timeline } from '@synerity/ui';

@Component({
  selector: 'app-su-timeline-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Timeline],
  templateUrl: './su-timeline-demo.html',
  styleUrl: './su-timeline-demo.scss'
})
export class SuTimelineDemo {
  // Project timeline data
  projectEvents = [
    {
      status: 'completed',
      content: 'Project kickoff meeting with stakeholders',
      date: '2024-01-15',
      icon: '✓'
    },
    {
      status: 'completed',
      content: 'Requirements gathering and analysis',
      date: '2024-01-22',
      icon: '📋'
    },
    {
      status: 'completed',
      content: 'UI/UX design and prototyping',
      date: '2024-02-05',
      icon: '🎨'
    },
    {
      status: 'warning',
      content: 'Development phase - backend API',
      date: '2024-02-20',
      icon: '⚙️'
    },
    {
      status: 'error',
      content: 'Frontend development - delayed',
      date: '2024-03-10',
      icon: '⚠️'
    },
    {
      content: 'Testing and quality assurance',
      date: '2024-03-25',
      icon: '🧪'
    },
    {
      content: 'Deployment and launch',
      date: '2024-04-15',
      icon: '🚀'
    }
  ];

  // Simple timeline data
  simpleEvents = [
    {
      status: 'success',
      content: 'Order placed successfully',
      date: '2024-01-10 10:30 AM'
    },
    {
      status: 'success',
      content: 'Payment processed',
      date: '2024-01-10 10:32 AM'
    },
    {
      status: 'warning',
      content: 'Order is being prepared',
      date: '2024-01-10 11:15 AM'
    },
    {
      content: 'Order shipped',
      date: '2024-01-11 09:00 AM'
    }
  ];

  // Horizontal timeline data
  horizontalEvents = [
    {
      status: 'completed',
      content: 'Step 1',
      date: 'Jan'
    },
    {
      status: 'completed',
      content: 'Step 2',
      date: 'Feb'
    },
    {
      status: 'warning',
      content: 'Step 3',
      date: 'Mar'
    },
    {
      content: 'Step 4',
      date: 'Apr'
    }
  ];

  selectedEvent: any = null;

  handleEventClick(event: any): void {
    console.log('Event clicked:', event);
    this.selectedEvent = event;
  }
}
