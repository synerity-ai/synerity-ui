import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Fluid as SuiFluid } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-fluid',
  imports: [CommonModule, FormsModule, SuiFluid, Tabs],
  templateUrl: './fluid.html',
  styleUrl: './fluid.scss'
})
export class FluidPage {
  activeTab = 'demo';
  
  // Demo data
  basicColumns = 12;
  basicGutter = 16;
  basicResponsive = true;
  
  customColumns = 6;
  customGutter = 24;
  customResponsive = true;
  
  gridColumns = 4;
  gridGutter = 20;
  gridResponsive = true;
  
  // Interactive demo
  interactiveColumns = 12;
  interactiveGutter = 16;
  interactiveResponsive = true;
  
  // Code visibility states
  showBasicFluidCode = false;
  showCustomFluidCode = false;
  showGridFluidCode = false;
  showInteractiveDemoCode = false;
  
  // Action log
  actionLog: string[] = [];
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicFluid':
        this.showBasicFluidCode = !this.showBasicFluidCode;
        break;
      case 'customFluid':
        this.showCustomFluidCode = !this.showCustomFluidCode;
        break;
      case 'gridFluid':
        this.showGridFluidCode = !this.showGridFluidCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onAction(action: string) {
    this.actionLog.unshift(`${new Date().toLocaleTimeString()}: ${action}`);
    if (this.actionLog.length > 10) {
      this.actionLog = this.actionLog.slice(0, 10);
    }
  }
  
  onColumnsChange() {
    this.onAction(`Columns changed to ${this.interactiveColumns}`);
  }
  
  onGutterChange() {
    this.onAction(`Gutter changed to ${this.interactiveGutter}px`);
  }
  
  onResponsiveChange() {
    this.onAction(`Responsive ${this.interactiveResponsive ? 'enabled' : 'disabled'}`);
  }
  
  // Helper methods
  getFluidStatus(): { status: string; color: string; icon: string } {
    return { status: 'Ready', color: 'text-green-600', icon: '📐' };
  }
  
  // Quick actions
  clearActionLog() {
    this.actionLog = [];
  }
  
  setRandomColumns() {
    const columns = [2, 3, 4, 6, 8, 12];
    this.interactiveColumns = columns[Math.floor(Math.random() * columns.length)];
    this.onAction(`Random columns set to ${this.interactiveColumns}`);
  }
  
  setRandomGutter() {
    const gutters = [8, 12, 16, 20, 24, 32];
    this.interactiveGutter = gutters[Math.floor(Math.random() * gutters.length)];
    this.onAction(`Random gutter set to ${this.interactiveGutter}px`);
  }
  
  toggleResponsive() {
    this.interactiveResponsive = !this.interactiveResponsive;
    this.onAction(`Responsive ${this.interactiveResponsive ? 'enabled' : 'disabled'}`);
  }
  
  setPreset(preset: string) {
    switch (preset) {
      case 'mobile':
        this.interactiveColumns = 1;
        this.interactiveGutter = 16;
        this.interactiveResponsive = true;
        this.onAction('Mobile preset applied');
        break;
      case 'tablet':
        this.interactiveColumns = 6;
        this.interactiveGutter = 20;
        this.interactiveResponsive = true;
        this.onAction('Tablet preset applied');
        break;
      case 'desktop':
        this.interactiveColumns = 12;
        this.interactiveGutter = 24;
        this.interactiveResponsive = true;
        this.onAction('Desktop preset applied');
        break;
    }
  }
  
  resetToDefaults() {
    this.interactiveColumns = 12;
    this.interactiveGutter = 16;
    this.interactiveResponsive = true;
    this.onAction('Reset to default values');
  }
}
