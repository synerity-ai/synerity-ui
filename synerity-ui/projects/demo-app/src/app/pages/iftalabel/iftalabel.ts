import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IftaLabel as SuiIftaLabel } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-iftalabel',
  imports: [CommonModule, FormsModule, SuiIftaLabel, Tabs],
  templateUrl: './iftalabel.html',
  styleUrl: './iftalabel.scss'
})
export class IftaLabelPage {
  activeTab = 'demo';
  
  // Demo data
  basicIftaLabel = true;
  statusIftaLabel = false;
  interactiveIftaLabel = true;
  interactiveTrueLabel = 'Active';
  interactiveFalseLabel = 'Inactive';
  interactiveAltLabel = 'Alternative';
  
  // Code visibility states
  showBasicIftaLabelCode = false;
  showStatusIftaLabelCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicIftaLabel':
        this.showBasicIftaLabelCode = !this.showBasicIftaLabelCode;
        break;
      case 'statusIftaLabel':
        this.showStatusIftaLabelCode = !this.showStatusIftaLabelCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  // Helper methods
  getIftaLabelStatus(condition: boolean): { status: string; color: string; icon: string } {
    if (condition) {
      return { status: 'True', color: 'text-green-600', icon: '✓' };
    } else {
      return { status: 'False', color: 'text-red-600', icon: '✗' };
    }
  }
  
  getIftaLabelDescription(condition: boolean): string {
    return `Condition is ${condition ? 'true' : 'false'}`;
  }
  
  // Quick actions
  toggleBasic() {
    this.basicIftaLabel = !this.basicIftaLabel;
  }
  
  toggleStatus() {
    this.statusIftaLabel = !this.statusIftaLabel;
  }
  
  toggleInteractive() {
    this.interactiveIftaLabel = !this.interactiveIftaLabel;
  }
  
  setRandomLabels() {
    const trueLabels = ['Active', 'Enabled', 'Online', 'Available'];
    const falseLabels = ['Inactive', 'Disabled', 'Offline', 'Unavailable'];
    const altLabels = ['Alternative', 'Custom', 'Special', 'Other'];
    
    this.interactiveTrueLabel = trueLabels[Math.floor(Math.random() * trueLabels.length)];
    this.interactiveFalseLabel = falseLabels[Math.floor(Math.random() * falseLabels.length)];
    this.interactiveAltLabel = altLabels[Math.floor(Math.random() * altLabels.length)];
  }
}
