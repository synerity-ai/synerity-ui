import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeterGroup } from '@synerity/ui';

interface MeterItem {
  label?: string;
  value: number;
  color?: string;
  icon?: string;
}

@Component({
  selector: 'app-meter-group-demo',
  standalone: true,
  imports: [CommonModule, MeterGroup],
  templateUrl: './meter-group-demo.html',
  styleUrls: ['./meter-group-demo.scss']
})
export class MeterGroupDemo {
  @Input() currentExample: any;

  getCurrentExample() {
    return this.currentExample || { name: 'Basic Meter Group' };
  }

  // Storage usage
  storageMeters: MeterItem[] = [
    { label: 'Documents', value: 25, color: '#3b82f6', icon: '📄' },
    { label: 'Photos', value: 40, color: '#10b981', icon: '📷' },
    { label: 'Videos', value: 20, color: '#f59e0b', icon: '🎥' },
    { label: 'Other', value: 15, color: '#6b7280', icon: '📦' }
  ];

  // CPU usage
  cpuMeters: MeterItem[] = [
    { label: 'System', value: 30, color: '#3b82f6' },
    { label: 'User', value: 45, color: '#10b981' },
    { label: 'Idle', value: 25, color: '#e5e7eb' }
  ];

  // Memory distribution
  memoryMeters: MeterItem[] = [
    { label: 'Used', value: 65, color: '#ef4444' },
    { label: 'Cached', value: 20, color: '#f59e0b' },
    { label: 'Available', value: 15, color: '#10b981' }
  ];

  // Task completion
  taskMeters: MeterItem[] = [
    { label: 'Completed', value: 75, color: '#10b981', icon: '✓' },
    { label: 'In Progress', value: 20, color: '#3b82f6', icon: '⟳' },
    { label: 'Pending', value: 5, color: '#f59e0b', icon: '○' }
  ];

  // Budget allocation
  budgetMeters: MeterItem[] = [
    { label: 'Marketing', value: 35, color: '#8b5cf6', icon: '📢' },
    { label: 'Development', value: 40, color: '#3b82f6', icon: '💻' },
    { label: 'Operations', value: 15, color: '#10b981', icon: '⚙️' },
    { label: 'Research', value: 10, color: '#f59e0b', icon: '🔬' }
  ];

  // Simple meters (no labels)
  simpleMeters: MeterItem[] = [
    { value: 40, color: '#3b82f6' },
    { value: 30, color: '#10b981' },
    { value: 30, color: '#f59e0b' }
  ];
}
