import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IftLabel as SuiIftLabel } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-iftlabel',
  imports: [CommonModule, FormsModule, SuiIftLabel, Tabs],
  templateUrl: './iftlabel.html',
  styleUrl: './iftlabel.scss'
})
export class IftLabelPage {
  activeTab = 'demo';
  
  // Demo data
  basicIftLabel = true;
  statusIftLabel = false;
  interactiveIftLabel = true;
  interactiveTrueLabel = 'Enabled';
  interactiveFalseLabel = 'Disabled';
  
  // Code visibility states
  showBasicIftLabelCode = false;
  showStatusIftLabelCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicIftLabel':
        this.showBasicIftLabelCode = !this.showBasicIftLabelCode;
        break;
      case 'statusIftLabel':
        this.showStatusIftLabelCode = !this.showStatusIftLabelCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  // Helper methods
  getIftLabelStatus(condition: boolean): { status: string; color: string; icon: string } {
    if (condition) {
      return { status: 'True', color: 'text-green-600', icon: '✓' };
    } else {
      return { status: 'False', color: 'text-red-600', icon: '✗' };
    }
  }
  
  getIftLabelDescription(condition: boolean): string {
    return `Condition is ${condition ? 'true' : 'false'}`;
  }
  
  // Quick actions
  toggleBasic() {
    this.basicIftLabel = !this.basicIftLabel;
  }
  
  toggleStatus() {
    this.statusIftLabel = !this.statusIftLabel;
  }
  
  toggleInteractive() {
    this.interactiveIftLabel = !this.interactiveIftLabel;
  }
  
  setRandomLabels() {
    const trueLabels = ['Enabled', 'Active', 'Online', 'Available'];
    const falseLabels = ['Disabled', 'Inactive', 'Offline', 'Unavailable'];
    
    this.interactiveTrueLabel = trueLabels[Math.floor(Math.random() * trueLabels.length)];
    this.interactiveFalseLabel = falseLabels[Math.floor(Math.random() * falseLabels.length)];
  }
}
