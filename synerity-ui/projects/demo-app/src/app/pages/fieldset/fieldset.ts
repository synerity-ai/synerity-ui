import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Fieldset as SuiFieldset } from '../../../../../ui-lib/src/lib/fieldset/fieldset';

@Component({
  selector: 'app-fieldset',
  imports: [CommonModule, FormsModule, Tabs, SuiFieldset],
  templateUrl: './fieldset.html',
  styleUrl: './fieldset.scss'
})
export class Fieldset {
  activeTab = 'demo';
  
  // Demo data
  fieldsetCollapsed = false;
  fieldsetToggleable = true;
  
  // Code visibility states
  showBasicFieldsetCode = false;
  showCollapsibleFieldsetCode = false;
  showCustomFieldsetCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicFieldset':
        this.showBasicFieldsetCode = !this.showBasicFieldsetCode;
        break;
      case 'collapsibleFieldset':
        this.showCollapsibleFieldsetCode = !this.showCollapsibleFieldsetCode;
        break;
      case 'customFieldset':
        this.showCustomFieldsetCode = !this.showCustomFieldsetCode;
        break;
    }
  }
  
  // Fieldset demo methods
  toggleFieldset() {
    this.fieldsetCollapsed = !this.fieldsetCollapsed;
  }
}
