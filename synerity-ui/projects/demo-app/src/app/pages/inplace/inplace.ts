import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Inplace as SuiInplace } from 'ui-lib';

@Component({
  selector: 'app-inplace',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiInplace],
  templateUrl: './inplace.html',
  styleUrl: './inplace.scss'
})
export class InplaceComponent {
  activeTab = 'demo';
  
  // Demo data
  isActive = false;
  isClosable = true;
  isDisabled = false;
  
  // Code visibility states
  showBasicInplaceCode = false;
  showClosableInplaceCode = false;
  showDisabledInplaceCode = false;
  
  onTabChange(tab: string): void {
    this.activeTab = tab;
  }
  
  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicInplaceCode = !this.showBasicInplaceCode;
        break;
      case 'closable':
        this.showClosableInplaceCode = !this.showClosableInplaceCode;
        break;
      case 'disabled':
        this.showDisabledInplaceCode = !this.showDisabledInplaceCode;
        break;
    }
  }
  
  onActivate(): void {
    console.log('Inplace activated');
  }
  
  onDeactivate(): void {
    console.log('Inplace deactivated');
  }
}