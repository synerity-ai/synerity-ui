import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MeterGroup } from '@synerity/ui';

@Component({
  selector: 'app-su-meter-group-demo',
  imports: [CommonModule, FormsModule, MeterGroup],
  templateUrl: './su-meter-group-demo.html',
  styleUrl: './su-meter-group-demo.scss'
})
export class SuMeterGroupDemo {
  // Sales data
  salesData = [
    { label: 'Q1', value: 25, color: '#3b82f6', icon: '📈' },
    { label: 'Q2', value: 35, color: '#10b981', icon: '📊' },
    { label: 'Q3', value: 20, color: '#f59e0b', icon: '📉' },
    { label: 'Q4', value: 20, color: '#ef4444', icon: '⚠️' }
  ];

  // Budget allocation
  budgetData = [
    { label: 'Marketing', value: 40, color: '#8b5cf6' },
    { label: 'Development', value: 35, color: '#06b6d4' },
    { label: 'Operations', value: 15, color: '#84cc16' },
    { label: 'Research', value: 10, color: '#f97316' }
  ];

  // Performance metrics
  performanceData = [
    { label: 'CPU', value: 75, color: '#ef4444' },
    { label: 'Memory', value: 60, color: '#f59e0b' },
    { label: 'Storage', value: 45, color: '#3b82f6' },
    { label: 'Network', value: 30, color: '#10b981' }
  ];

  // Simple data without colors
  simpleData = [
    { label: 'A', value: 30 },
    { label: 'B', value: 25 },
    { label: 'C', value: 20 },
    { label: 'D', value: 15 },
    { label: 'E', value: 10 }
  ];

  // Vertical orientation data
  verticalData = [
    { label: 'Jan', value: 80, color: '#3b82f6' },
    { label: 'Feb', value: 65, color: '#10b981' },
    { label: 'Mar', value: 90, color: '#f59e0b' },
    { label: 'Apr', value: 45, color: '#ef4444' }
  ];

  // Size options
  sizes = [
    { value: 'small', label: 'Small' },
    { value: 'normal', label: 'Normal' },
    { value: 'large', label: 'Large' },
    { value: 'xlarge', label: 'Extra Large' }
  ];

  // Color options
  colors = [
    { value: '', label: 'Default' },
    { value: 'primary', label: 'Primary' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'error', label: 'Error' },
    { value: 'info', label: 'Info' }
  ];

  selectedOrientation: 'horizontal' | 'vertical' = 'horizontal';
  selectedSize = 'normal';
  selectedColor = '';
  showValues = true;
  showLabels = true;
  min = 0;
  max = 100;

  // Get meter group class
  getMeterGroupClass(): string {
    let classes = 'sui-meter-group';
    
    if (this.selectedSize !== 'normal') {
      classes += ` sui-meter-group--${this.selectedSize}`;
    }
    
    if (this.selectedColor) {
      classes += ` sui-meter-group--${this.selectedColor}`;
    }
    
    return classes;
  }

  // Get meter group style
  getMeterGroupStyle(): any {
    return {};
  }

  // Get configuration description
  getConfigDescription(): string {
    let description = `Orientation: ${this.selectedOrientation}`;
    description += ` • Size: ${this.selectedSize}`;
    description += ` • Color: ${this.selectedColor || 'Default'}`;
    return description;
  }

  // Update data values
  updateSalesData(): void {
    this.salesData = this.salesData.map(item => ({
      ...item,
      value: Math.floor(Math.random() * 50) + 10
    }));
  }

  // Reset data
  resetData(): void {
    this.salesData = [
      { label: 'Q1', value: 25, color: '#3b82f6', icon: '📈' },
      { label: 'Q2', value: 35, color: '#10b981', icon: '📊' },
      { label: 'Q3', value: 20, color: '#f59e0b', icon: '📉' },
      { label: 'Q4', value: 20, color: '#ef4444', icon: '⚠️' }
    ];
  }
}