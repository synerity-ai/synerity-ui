import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Knob as SuiKnob } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-knob',
  imports: [CommonModule, FormsModule, SuiKnob, Tabs],
  templateUrl: './knob.html',
  styleUrl: './knob.scss'
})
export class KnobPage {
  activeTab = 'demo';
  
  // Demo data
  basicKnob = 50;
  volumeKnob = 75;
  temperatureKnob = 20;
  disabledKnob = 30;
  readonlyKnob = 60;
  interactiveKnob = 40;
  interactiveMin = 0;
  interactiveMax = 100;
  interactiveStep = 1;
  interactiveSize = 100;
  interactiveStrokeWidth = 14;
  interactiveDisabled = false;
  interactiveReadonly = false;
  interactiveShowValue = true;
  
  // Code visibility states
  showBasicKnobCode = false;
  showVolumeKnobCode = false;
  showTemperatureKnobCode = false;
  showDisabledKnobCode = false;
  showReadonlyKnobCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicKnob':
        this.showBasicKnobCode = !this.showBasicKnobCode;
        break;
      case 'volumeKnob':
        this.showVolumeKnobCode = !this.showVolumeKnobCode;
        break;
      case 'temperatureKnob':
        this.showTemperatureKnobCode = !this.showTemperatureKnobCode;
        break;
      case 'disabledKnob':
        this.showDisabledKnobCode = !this.showDisabledKnobCode;
        break;
      case 'readonlyKnob':
        this.showReadonlyKnobCode = !this.showReadonlyKnobCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  
  // Helper methods
  getKnobStatus(value: number): { status: string; color: string; icon: string } {
    if (value === 0) {
      return { status: 'Min Value', color: 'text-gray-600', icon: '○' };
    } else if (value === 100) {
      return { status: 'Max Value', color: 'text-red-600', icon: '●' };
    } else {
      return { status: 'Active', color: 'text-green-600', icon: '●' };
    }
  }
  
  getKnobDescription(value: number): string {
    return `Value: ${value}`;
  }
  
  // Quick actions
  setRandomValue() {
    this.interactiveKnob = Math.floor(Math.random() * (this.interactiveMax - this.interactiveMin + 1)) + this.interactiveMin;
  }
  
  setMinValue() {
    this.interactiveKnob = this.interactiveMin;
  }
  
  setMaxValue() {
    this.interactiveKnob = this.interactiveMax;
  }
  
  setMidValue() {
    this.interactiveKnob = Math.floor((this.interactiveMax - this.interactiveMin) / 2) + this.interactiveMin;
  }
  
  setVolumeValue() {
    this.volumeKnob = 85;
  }
  
  setTemperatureValue() {
    this.temperatureKnob = 25;
  }
  
  clearAll() {
    this.basicKnob = 0;
    this.volumeKnob = 0;
    this.temperatureKnob = 0;
    this.disabledKnob = 0;
    this.readonlyKnob = 0;
    this.interactiveKnob = 0;
  }
  
  onKnobChange(value: number, property: string) {
    (this as any)[property] = value;
  }
}
