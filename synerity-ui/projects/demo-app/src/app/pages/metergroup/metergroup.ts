import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { MeterGroup as SuiMeterGroup } from 'ui-lib';

@Component({
  selector: 'app-metergroup',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiMeterGroup],
  templateUrl: './metergroup.html',
  styleUrl: './metergroup.scss'
})
export class MeterGroupComponent {
  activeTab = 'demo';

  // Demo data
  basicMeterData = [
    { label: 'CPU', value: 75, color: '#3b82f6' },
    { label: 'Memory', value: 60, color: '#10b981' },
    { label: 'Storage', value: 45, color: '#f59e0b' }
  ];

  horizontalMeterData = [
    { label: 'Sales', value: 85, color: '#10b981' },
    { label: 'Marketing', value: 70, color: '#3b82f6' },
    { label: 'Support', value: 55, color: '#f59e0b' },
    { label: 'Development', value: 90, color: '#8b5cf6' }
  ];

  verticalMeterData = [
    { label: 'Q1', value: 80, color: '#ef4444' },
    { label: 'Q2', value: 65, color: '#f59e0b' },
    { label: 'Q3', value: 90, color: '#10b981' },
    { label: 'Q4', value: 75, color: '#3b82f6' }
  ];

  // Code visibility states
  showBasicMeterCode = false;
  showHorizontalMeterCode = false;
  showVerticalMeterCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicMeterCode = !this.showBasicMeterCode;
        break;
      case 'horizontal':
        this.showHorizontalMeterCode = !this.showHorizontalMeterCode;
        break;
      case 'vertical':
        this.showVerticalMeterCode = !this.showVerticalMeterCode;
        break;
    }
  }
}