import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { AutoFocus as SuiAutoFocus } from 'ui-lib';

@Component({
  selector: 'app-autofocus',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiAutoFocus],
  templateUrl: './autofocus.html',
  styleUrl: './autofocus.scss'
})
export class AutoFocusComponent {
  activeTab = 'demo';
  
  // Demo data
  showForm = false;
  showModal = false;
  focusCondition = true;
  
  // Code visibility states
  showBasicAutofocusCode = false;
  showConditionalAutofocusCode = false;
  showDelayedAutofocusCode = false;
  
  onTabChange(tab: string): void {
    this.activeTab = tab;
  }
  
  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicAutofocusCode = !this.showBasicAutofocusCode;
        break;
      case 'conditional':
        this.showConditionalAutofocusCode = !this.showConditionalAutofocusCode;
        break;
      case 'delayed':
        this.showDelayedAutofocusCode = !this.showDelayedAutofocusCode;
        break;
    }
  }
  
  toggleForm(): void {
    this.showForm = !this.showForm;
  }
  
  toggleModal(): void {
    this.showModal = !this.showModal;
  }
  
  toggleCondition(): void {
    this.focusCondition = !this.focusCondition;
  }
}