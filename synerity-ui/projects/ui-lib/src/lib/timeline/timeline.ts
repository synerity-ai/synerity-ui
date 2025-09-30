import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-timeline',
  imports: [NgFor, NgIf],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Timeline {
  @Input() value: Array<{ 
    status?: string; 
    content?: string; 
    date?: string; 
    icon?: string;
    color?: string;
  }> = [];
  @Input() align: 'left' | 'right' | 'alternate' = 'left';
  @Input() layout: 'vertical' | 'horizontal' = 'vertical';
  @Input() dataKey = '';
  @Output() onEventClick = new EventEmitter<any>();

  onEventClickHandler(event: any): void {
    this.onEventClick.emit(event);
  }

  getAlignmentClass(index: number): string {
    if (this.align === 'alternate') {
      return index % 2 === 0 ? 'sui-timeline-left' : 'sui-timeline-right';
    }
    return `sui-timeline-${this.align}`;
  }

  getLayoutClass(): string {
    return `sui-timeline-${this.layout}`;
  }

  getStatusClass(event: any): string {
    return event.status ? `sui-timeline-${event.status}` : '';
  }
}
