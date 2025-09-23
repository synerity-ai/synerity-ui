import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Divider } from '../../../../../ui-lib/src/lib/divider/divider';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [CommonModule, FormsModule, Divider, Tabs],
  templateUrl: './divider.html',
  styleUrls: ['./divider.scss']
})
export class DividerComponent {
  activeTab = 'demo';

  // Code visibility flags
  showBasicDividerCode = false;
  showDividerVariantsCode = false;
  showDividerLayoutsCode = false;

  // Demo data
  dividerType: 'solid' | 'dashed' | 'dotted' = 'solid';
  dividerLayout: 'horizontal' | 'vertical' = 'horizontal';
  dividerAlign: 'left' | 'center' | 'right' = 'center';

  // Event handlers
  onTabChange(tabId: string): void {
    this.activeTab = tabId;
  }

  toggleCode(codeType: string): void {
    switch (codeType) {
      case 'basic':
        this.showBasicDividerCode = !this.showBasicDividerCode;
        break;
      case 'variants':
        this.showDividerVariantsCode = !this.showDividerVariantsCode;
        break;
      case 'layouts':
        this.showDividerLayoutsCode = !this.showDividerLayoutsCode;
        break;
    }
  }
}