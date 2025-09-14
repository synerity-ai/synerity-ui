import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoFocus as SuiAutoFocus } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-autofocus',
  imports: [CommonModule, FormsModule, SuiAutoFocus, Tabs],
  templateUrl: './autofocus.html',
  styleUrl: './autofocus.scss'
})
export class AutoFocusPage {
  activeTab = 'demo';
  
  // Demo data
  basicDelay = 0;
  basicCondition = true;
  
  // Interactive demo
  interactiveDelay = 0;
  interactiveCondition = true;
  interactiveInputValue = '';
  interactiveTextareaValue = '';
  
  // Code visibility states
  showBasicAutoFocusCode = false;
  showDelayAutoFocusCode = false;
  showConditionalAutoFocusCode = false;
  showInteractiveDemoCode = false;
  
  // Action log
  actionLog: string[] = [];
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicAutoFocus':
        this.showBasicAutoFocusCode = !this.showBasicAutoFocusCode;
        break;
      case 'delayAutoFocus':
        this.showDelayAutoFocusCode = !this.showDelayAutoFocusCode;
        break;
      case 'conditionalAutoFocus':
        this.showConditionalAutoFocusCode = !this.showConditionalAutoFocusCode;
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
  
  onFocus() {
    this.onAction('Element focused');
  }
  
  onBlur() {
    this.onAction('Element blurred');
  }
  
  onInputChange() {
    this.onAction(`Input value changed to: "${this.interactiveInputValue}"`);
  }
  
  onTextareaChange() {
    this.onAction(`Textarea value changed to: "${this.interactiveTextareaValue}"`);
  }
  
  // Helper methods
  getAutoFocusStatus(): { status: string; color: string; icon: string } {
    return { status: 'Ready', color: 'text-green-600', icon: '🎯' };
  }
  
  // Quick actions
  clearActionLog() {
    this.actionLog = [];
  }
  
  setRandomDelay() {
    const delays = [0, 100, 200, 500, 1000, 2000];
    this.interactiveDelay = delays[Math.floor(Math.random() * delays.length)];
    this.onAction(`Random delay set to ${this.interactiveDelay}ms`);
  }
  
  toggleCondition() {
    this.interactiveCondition = !this.interactiveCondition;
    this.onAction(`Condition changed to ${this.interactiveCondition}`);
  }
  
  clearInputs() {
    this.interactiveInputValue = '';
    this.interactiveTextareaValue = '';
    this.onAction('All inputs cleared');
  }
  
  setRandomText() {
    const texts = [
      'Hello World!',
      'Auto Focus Demo',
      'Angular Component',
      'UI Library',
      'Interactive Demo'
    ];
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    this.interactiveInputValue = randomText;
    this.interactiveTextareaValue = randomText;
    this.onAction(`Random text set: "${randomText}"`);
  }
  
  resetToDefaults() {
    this.interactiveDelay = 0;
    this.interactiveCondition = true;
    this.interactiveInputValue = '';
    this.interactiveTextareaValue = '';
    this.onAction('Reset to default values');
  }
}
