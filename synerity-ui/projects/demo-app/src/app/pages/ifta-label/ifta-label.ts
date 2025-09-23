import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IftaLabel } from '../../../../../ui-lib/src/lib/ifta-label/ifta-label';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-ifta-label',
  standalone: true,
  imports: [CommonModule, FormsModule, IftaLabel, Tabs],
  templateUrl: './ifta-label.html',
  styleUrls: ['./ifta-label.scss']
})
export class IftaLabelComponent {
  activeTab = 'demo';

  // Code visibility flags
  showBasicIftaLabelCode = false;
  showIftaLabelVariantsCode = false;
  showIftaLabelStatesCode = false;

  // Demo data
  basicCondition = true;
  basicTrueLabel = 'Active';
  basicFalseLabel = 'Inactive';

  variantCondition = false;
  variantTrueLabel = 'Online';
  variantFalseLabel = 'Offline';
  variantAltLabel = 'Maintenance';

  stateCondition = true;
  stateTrueLabel = 'Connected';
  stateFalseLabel = 'Disconnected';
  stateAltLabel = 'Connecting...';

  // Event handlers
  onTabChange(tabId: string): void {
    this.activeTab = tabId;
  }

  toggleCode(codeType: string): void {
    switch (codeType) {
      case 'basic':
        this.showBasicIftaLabelCode = !this.showBasicIftaLabelCode;
        break;
      case 'variants':
        this.showIftaLabelVariantsCode = !this.showIftaLabelVariantsCode;
        break;
      case 'states':
        this.showIftaLabelStatesCode = !this.showIftaLabelStatesCode;
        break;
    }
  }

  toggleBasicCondition(): void {
    this.basicCondition = !this.basicCondition;
  }

  toggleVariantCondition(): void {
    this.variantCondition = !this.variantCondition;
  }

  toggleStateCondition(): void {
    this.stateCondition = !this.stateCondition;
  }
}
