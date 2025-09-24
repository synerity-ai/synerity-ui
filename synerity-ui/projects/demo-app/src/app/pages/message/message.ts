import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Message as SuiMessage } from 'ui-lib';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiMessage],
  templateUrl: './message.html',
  styleUrl: './message.scss'
})
export class MessageComponent {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicMessageCode = false;
  showInfoMessageCode = false;
  showSuccessMessageCode = false;
  showWarningMessageCode = false;
  showErrorMessageCode = false;
  showClosableMessageCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicMessage':
        this.showBasicMessageCode = !this.showBasicMessageCode;
        break;
      case 'infoMessage':
        this.showInfoMessageCode = !this.showInfoMessageCode;
        break;
      case 'successMessage':
        this.showSuccessMessageCode = !this.showSuccessMessageCode;
        break;
      case 'warningMessage':
        this.showWarningMessageCode = !this.showWarningMessageCode;
        break;
      case 'errorMessage':
        this.showErrorMessageCode = !this.showErrorMessageCode;
        break;
      case 'closableMessage':
        this.showClosableMessageCode = !this.showClosableMessageCode;
        break;
    }
  }

  onMessageClose(): void {
    console.log('Message closed');
  }
}