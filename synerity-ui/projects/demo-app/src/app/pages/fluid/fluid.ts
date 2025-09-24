import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Fluid as SuiFluid } from 'ui-lib';

@Component({
  selector: 'app-fluid',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiFluid],
  templateUrl: './fluid.html',
  styleUrl: './fluid.scss'
})
export class FluidComponent {
  activeTab = 'demo';
  
  // Demo data
  columns = 12;
  gutter = 16;
  responsive = true;
  
  // Code visibility states
  showBasicFluidCode = false;
  showResponsiveFluidCode = false;
  showCustomFluidCode = false;
  
  onTabChange(tab: string): void {
    this.activeTab = tab;
  }
  
  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicFluidCode = !this.showBasicFluidCode;
        break;
      case 'responsive':
        this.showResponsiveFluidCode = !this.showResponsiveFluidCode;
        break;
      case 'custom':
        this.showCustomFluidCode = !this.showCustomFluidCode;
        break;
    }
  }
  
  updateColumns(value: number): void {
    this.columns = value;
  }
  
  updateGutter(value: number): void {
    this.gutter = value;
  }
}