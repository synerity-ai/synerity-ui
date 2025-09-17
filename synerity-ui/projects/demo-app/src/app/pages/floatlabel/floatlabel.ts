import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { FloatLabel as SuiFloatLabel } from '../../../../../ui-lib/src/lib/float-label/float-label';

@Component({
  selector: 'app-floatlabel',
  imports: [CommonModule, FormsModule, Tabs, SuiFloatLabel],
  templateUrl: './floatlabel.html',
  styleUrl: './floatlabel.scss'
})
export class Floatlabel {
  activeTab = 'demo';
  
  // Demo data
  basicFloatLabel = '';
  emailFloatLabel = '';
  passwordFloatLabel = '';
  requiredFloatLabel = '';
  customFloatLabel = '';
  
  // Interactive demo data
  interactiveValue = '';
  interactiveLabel = 'Interactive Label';
  interactiveRequired = false;
  interactiveStyleClass = '';
  
  // Code visibility states
  showBasicFloatLabelCode = false;
  showEmailFloatLabelCode = false;
  showPasswordFloatLabelCode = false;
  showRequiredFloatLabelCode = false;
  showCustomFloatLabelCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicFloatLabel':
        this.showBasicFloatLabelCode = !this.showBasicFloatLabelCode;
        break;
      case 'emailFloatLabel':
        this.showEmailFloatLabelCode = !this.showEmailFloatLabelCode;
        break;
      case 'passwordFloatLabel':
        this.showPasswordFloatLabelCode = !this.showPasswordFloatLabelCode;
        break;
      case 'requiredFloatLabel':
        this.showRequiredFloatLabelCode = !this.showRequiredFloatLabelCode;
        break;
      case 'customFloatLabel':
        this.showCustomFloatLabelCode = !this.showCustomFloatLabelCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  // FloatLabel demo methods
  onFloatLabelChange(value: string) {
    console.log('FloatLabel changed:', value);
  }
  
  onInteractiveFloatLabelChange(value: string) {
    this.interactiveValue = value;
    console.log('Interactive float label changed:', value);
  }
  
  // Helper methods for interactive demo
  setInteractiveLabel(label: string) {
    this.interactiveLabel = label;
  }
  
  setInteractiveRequired(required: boolean) {
    this.interactiveRequired = required;
  }
  
  setInteractiveStyleClass(styleClass: string) {
    this.interactiveStyleClass = styleClass;
  }
  
  resetFloatLabel() {
    this.interactiveValue = '';
    this.interactiveLabel = 'Interactive Label';
    this.interactiveRequired = false;
    this.interactiveStyleClass = '';
  }
  
  // Utility methods
  formatFloatLabelValue(value: string): string {
    return value || 'Empty';
  }
  
  isValidFloatLabelValue(value: string): boolean {
    return value.length > 0;
  }
  
  getFloatLabelStatus(value: string): string {
    return value ? 'Has value' : 'Empty';
  }
}