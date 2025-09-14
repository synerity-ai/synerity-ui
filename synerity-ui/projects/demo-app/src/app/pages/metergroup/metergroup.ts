import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MeterGroup } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-metergroup-page',
  standalone: true,
  imports: [CommonModule, FormsModule, MeterGroup, Tabs],
  templateUrl: './metergroup.html',
  styleUrl: './metergroup.scss'
})
export class Metergroup {
  activeTab = 'demo';
  
  // Make Math available in template
  Math = Math;

  // Basic MeterGroup
  basicValue = [{ label: 'Basic Meter', value: 75, color: '#3b82f6' }];
  basicMin = 0;
  basicMax = 100;

  // Custom MeterGroup
  customValue = [{ label: 'Custom Meter', value: 60, color: '#10b981' }];
  customMin = 0;
  customMax = 100;

  // Multiple Meters
  meters = [
    { label: 'CPU', value: 85, min: 0, max: 100, color: '#ef4444' },
    { label: 'Memory', value: 65, min: 0, max: 100, color: '#f59e0b' },
    { label: 'Storage', value: 45, min: 0, max: 100, color: '#10b981' },
    { label: 'Network', value: 30, min: 0, max: 100, color: '#3b82f6' }
  ];

  // Interactive Demo
  interactiveValue = [{ label: 'Interactive Meter', value: 50, color: '#8b5cf6' }];
  interactiveMin = 0;
  interactiveMax = 100;

  // Code visibility
  showBasicMeterGroupCode = false;
  showCustomMeterGroupCode = false;
  showMultipleMetersCode = false;
  showInteractiveDemoCode = false;

  // Action log
  actionLog: string[] = [];

  onTabChange(tabId: string) {
    this.activeTab = tabId;
  }

  toggleCode(example: string) {
    switch (example) {
      case 'basicMeterGroup':
        this.showBasicMeterGroupCode = !this.showBasicMeterGroupCode;
        break;
      case 'customMeterGroup':
        this.showCustomMeterGroupCode = !this.showCustomMeterGroupCode;
        break;
      case 'multipleMeters':
        this.showMultipleMetersCode = !this.showMultipleMetersCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }

  // Interactive Demo methods
  setRandomValue() {
    const newValue = Math.floor(Math.random() * (this.interactiveMax - this.interactiveMin + 1)) + this.interactiveMin;
    this.interactiveValue[0].value = newValue;
    this.addToActionLog(`Value set to ${newValue}`);
  }

  setRandomColor() {
    const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4'];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    this.interactiveValue[0].color = newColor;
    this.addToActionLog(`Color set to ${newColor}`);
  }

  setRandomSize() {
    // MeterGroup doesn't have size property, so this is a placeholder
    this.addToActionLog('Size randomization not applicable for MeterGroup');
  }

  updateMeters() {
    this.meters.forEach(meter => {
      meter.value = Math.floor(Math.random() * 101);
    });
    this.addToActionLog('All meters updated with random values');
  }

  addToActionLog(action: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.actionLog.unshift(`[${timestamp}] ${action}`);
    if (this.actionLog.length > 10) {
      this.actionLog.pop();
    }
  }

  clearActionLog() {
    this.actionLog = [];
  }
}