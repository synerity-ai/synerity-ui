import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IftLabel } from '../../../../../ui-lib/src/lib/ift-label/ift-label';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-ift-label',
  standalone: true,
  imports: [CommonModule, FormsModule, IftLabel, Tabs],
  templateUrl: './ift-label.html',
  styleUrls: ['./ift-label.scss']
})
export class IftLabelComponent {
  activeTab = 'demo';

  // Code visibility flags
  showBasicIftLabelCode = false;
  showIftLabelVariantsCode = false;
  showIftLabelStatesCode = false;

  // Demo data
  basicCondition = true;
  basicTrueLabel = 'Enabled';
  basicFalseLabel = 'Disabled';

  variantCondition = false;
  variantTrueLabel = 'Public';
  variantFalseLabel = 'Private';

  stateCondition = true;
  stateTrueLabel = 'Available';
  stateFalseLabel = 'Unavailable';

  // Event handlers
  onTabChange(tabId: string): void {
    this.activeTab = tabId;
  }

  toggleCode(codeType: string): void {
    switch (codeType) {
      case 'basic':
        this.showBasicIftLabelCode = !this.showBasicIftLabelCode;
        break;
      case 'variants':
        this.showIftLabelVariantsCode = !this.showIftLabelVariantsCode;
        break;
      case 'states':
        this.showIftLabelStatesCode = !this.showIftLabelStatesCode;
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
