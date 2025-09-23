import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Fieldset } from '../../../../../ui-lib/src/lib/fieldset/fieldset';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-fieldset',
  standalone: true,
  imports: [CommonModule, FormsModule, Fieldset, Tabs],
  templateUrl: './fieldset.html',
  styleUrls: ['./fieldset.scss']
})
export class FieldsetComponent {
  activeTab = 'demo';

  // Code visibility flags
  showBasicFieldsetCode = false;
  showFieldsetToggleableCode = false;
  showFieldsetCustomCode = false;

  // Demo data
  basicLegend = 'Basic Fieldset';
  toggleableLegend = 'Toggleable Fieldset';
  customLegend = 'Custom Styled Fieldset';
  customFieldsetStyle = { borderColor: '#3b82f6', borderRadius: '8px' };

  // Event handlers
  onTabChange(tabId: string): void {
    this.activeTab = tabId;
  }

  toggleCode(codeType: string): void {
    switch (codeType) {
      case 'basic':
        this.showBasicFieldsetCode = !this.showBasicFieldsetCode;
        break;
      case 'toggleable':
        this.showFieldsetToggleableCode = !this.showFieldsetToggleableCode;
        break;
      case 'custom':
        this.showFieldsetCustomCode = !this.showFieldsetCustomCode;
        break;
    }
  }

  onFieldsetToggle(event: any): void {
    console.log('Fieldset toggled:', event);
  }
}