import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FocusTrap as SuiFocusTrap } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-focustrap',
  imports: [CommonModule, FormsModule, SuiFocusTrap, Tabs],
  templateUrl: './focustrap.html',
  styleUrl: './focustrap.scss'
})
export class FocusTrapPage {
  activeTab = 'demo';
  
  // Demo data
  basicEnabled = true;
  basicAutoFocus = true;
  
  customEnabled = true;
  customAutoFocus = false;
  
  formEnabled = true;
  formAutoFocus = true;
  
  // Interactive demo
  interactiveEnabled = true;
  interactiveAutoFocus = true;
  interactiveInputValue = '';
  interactiveTextareaValue = '';
  interactiveSelectValue = '';
  interactiveCheckboxValue = false;
  interactiveRadioValue = '';
  
  // Code visibility states
  showBasicFocusTrapCode = false;
  showCustomFocusTrapCode = false;
  showFormFocusTrapCode = false;
  showInteractiveDemoCode = false;
  
  // Action log
  actionLog: string[] = [];
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicFocusTrap':
        this.showBasicFocusTrapCode = !this.showBasicFocusTrapCode;
        break;
      case 'customFocusTrap':
        this.showCustomFocusTrapCode = !this.showCustomFocusTrapCode;
        break;
      case 'formFocusTrap':
        this.showFormFocusTrapCode = !this.showFormFocusTrapCode;
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
  
  onSelectChange() {
    this.onAction(`Select value changed to: "${this.interactiveSelectValue}"`);
  }
  
  onCheckboxChange() {
    this.onAction(`Checkbox value changed to: ${this.interactiveCheckboxValue}`);
  }
  
  onRadioChange() {
    this.onAction(`Radio value changed to: "${this.interactiveRadioValue}"`);
  }
  
  onButtonClick() {
    this.onAction('Button clicked');
  }
  
  // Helper methods
  getFocusTrapStatus(): { status: string; color: string; icon: string } {
    return { status: 'Ready', color: 'text-green-600', icon: '🎯' };
  }
  
  // Quick actions
  clearActionLog() {
    this.actionLog = [];
  }
  
  toggleEnabled() {
    this.interactiveEnabled = !this.interactiveEnabled;
    this.onAction(`Focus trap ${this.interactiveEnabled ? 'enabled' : 'disabled'}`);
  }
  
  toggleAutoFocus() {
    this.interactiveAutoFocus = !this.interactiveAutoFocus;
    this.onAction(`Auto focus ${this.interactiveAutoFocus ? 'enabled' : 'disabled'}`);
  }
  
  clearInputs() {
    this.interactiveInputValue = '';
    this.interactiveTextareaValue = '';
    this.interactiveSelectValue = '';
    this.interactiveCheckboxValue = false;
    this.interactiveRadioValue = '';
    this.onAction('All inputs cleared');
  }
  
  setRandomValues() {
    this.interactiveInputValue = 'Random text';
    this.interactiveTextareaValue = 'Random textarea content';
    this.interactiveSelectValue = 'option2';
    this.interactiveCheckboxValue = true;
    this.interactiveRadioValue = 'option2';
    this.onAction('Random values set');
  }
  
  resetToDefaults() {
    this.interactiveEnabled = true;
    this.interactiveAutoFocus = true;
    this.interactiveInputValue = '';
    this.interactiveTextareaValue = '';
    this.interactiveSelectValue = '';
    this.interactiveCheckboxValue = false;
    this.interactiveRadioValue = '';
    this.onAction('Reset to default values');
  }
}
