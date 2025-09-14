import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Inplace } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-inplace-page',
  standalone: true,
  imports: [CommonModule, FormsModule, Inplace, Tabs],
  templateUrl: './inplace.html',
  styleUrl: './inplace.scss'
})
export class InplacePage {
  activeTab = 'demo';
  
  // Documentation example
  displayValue = 'Example value';

  // Basic Inplace
  basicValue = 'Click to edit';
  basicActive = false;

  // Custom Inplace
  customValue = 'Custom inplace';
  customActive = false;

  // Form Inplace
  formValue = 'Form inplace';
  formActive = false;

  // Interactive Demo
  interactiveValue = 'Interactive inplace';
  interactiveActive = false;
  interactiveDisabled = false;
  interactiveClosable = true;

  // Code visibility
  showBasicInplaceCode = false;
  showCustomInplaceCode = false;
  showFormInplaceCode = false;
  showInteractiveDemoCode = false;

  // Action log
  actionLog: string[] = [];

  onTabChange(tabId: string) {
    this.activeTab = tabId;
  }

  toggleCode(example: string) {
    switch (example) {
      case 'basicInplace':
        this.showBasicInplaceCode = !this.showBasicInplaceCode;
        break;
      case 'customInplace':
        this.showCustomInplaceCode = !this.showCustomInplaceCode;
        break;
      case 'formInplace':
        this.showFormInplaceCode = !this.showFormInplaceCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }

  // Basic Inplace methods
  onBasicActivate() {
    this.basicActive = true;
    this.addToActionLog('Basic inplace: Activated');
  }

  onBasicDeactivate() {
    this.basicActive = false;
    this.addToActionLog(`Basic inplace: Deactivated - "${this.basicValue}"`);
  }

  // Custom Inplace methods
  onCustomActivate() {
    this.customActive = true;
    this.addToActionLog('Custom inplace: Activated');
  }

  onCustomDeactivate() {
    this.customActive = false;
    this.addToActionLog(`Custom inplace: Deactivated - "${this.customValue}"`);
  }

  // Form Inplace methods
  onFormActivate() {
    this.formActive = true;
    this.addToActionLog('Form inplace: Activated');
  }

  onFormDeactivate() {
    this.formActive = false;
    this.addToActionLog(`Form inplace: Deactivated - "${this.formValue}"`);
  }

  // Interactive Demo methods
  onInteractiveActivate() {
    this.interactiveActive = true;
    this.addToActionLog('Interactive inplace: Activated');
  }

  onInteractiveDeactivate() {
    this.interactiveActive = false;
    this.addToActionLog(`Interactive inplace: Deactivated - "${this.interactiveValue}"`);
  }

  toggleDisabled() {
    this.interactiveDisabled = !this.interactiveDisabled;
    this.addToActionLog(`Interactive inplace: Disabled ${this.interactiveDisabled ? 'enabled' : 'disabled'}`);
  }

  toggleClosable() {
    this.interactiveClosable = !this.interactiveClosable;
    this.addToActionLog(`Interactive inplace: Closable ${this.interactiveClosable ? 'enabled' : 'disabled'}`);
  }

  setRandomValue() {
    const values = ['Random text', 'Another value', 'Test content', 'Sample data', 'Demo text'];
    this.interactiveValue = values[Math.floor(Math.random() * values.length)];
    this.addToActionLog(`Interactive inplace: Value set to "${this.interactiveValue}"`);
  }

  clearInputs() {
    this.interactiveValue = '';
    this.addToActionLog('Interactive inplace: Value cleared');
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