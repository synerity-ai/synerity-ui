import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Knob as SuiKnob } from '../../../../../ui-lib/src/lib/knob/knob';

@Component({
  selector: 'app-knob',
  standalone: true,
  imports: [CommonModule, FormsModule, Tabs, SuiKnob],
  templateUrl: './knob.html',
  styleUrl: './knob.scss'
})
export class KnobComponent {
  activeTab = 'demo';
  showBasicKnobCode = false;
  showKnobSizesCode = false;
  showKnobStatesCode = false;

  // Demo data
  basicValue = 50;
  customValue = 75;
  volumeValue = 30;
  temperatureValue = 65;
  speedValue = 85;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicKnob':
        this.showBasicKnobCode = !this.showBasicKnobCode;
        break;
      case 'knobSizes':
        this.showKnobSizesCode = !this.showKnobSizesCode;
        break;
      case 'knobStates':
        this.showKnobStatesCode = !this.showKnobStatesCode;
        break;
    }
  }

  onKnobChange(value: number, knobName: string): void {
    console.log(`${knobName} value changed to:`, value);
    
    switch (knobName) {
      case 'basic':
        this.basicValue = value;
        break;
      case 'custom':
        this.customValue = value;
        break;
      case 'volume':
        this.volumeValue = value;
        break;
      case 'temperature':
        this.temperatureValue = value;
        break;
      case 'speed':
        this.speedValue = value;
        break;
    }
  }

  getVolumeColor(): string {
    if (this.volumeValue < 30) return '#ef4444'; // red
    if (this.volumeValue < 70) return '#f59e0b'; // yellow
    return '#10b981'; // green
  }

  getTemperatureColor(): string {
    if (this.temperatureValue < 20) return '#3b82f6'; // blue
    if (this.temperatureValue < 50) return '#10b981'; // green
    if (this.temperatureValue < 80) return '#f59e0b'; // yellow
    return '#ef4444'; // red
  }

  getSpeedColor(): string {
    if (this.speedValue < 30) return '#10b981'; // green
    if (this.speedValue < 70) return '#f59e0b'; // yellow
    return '#ef4444'; // red
  }
}
