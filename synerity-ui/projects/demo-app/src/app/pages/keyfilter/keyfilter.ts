import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { KeyFilter as SuiKeyFilter } from '../../../../../ui-lib/src/lib/key-filter/key-filter';

@Component({
  selector: 'app-keyfilter',
  standalone: true,
  imports: [CommonModule, FormsModule, Tabs, SuiKeyFilter],
  templateUrl: './keyfilter.html',
  styleUrl: './keyfilter.scss'
})
export class KeyfilterComponent {
  activeTab = 'demo';
  showBasicKeyFilterCode = false;
  showKeyFilterPatternsCode = false;
  showKeyFilterStatesCode = false;

  // Demo data
  basicValue = '';
  alphaValue = '';
  numericValue = '';
  numberValue = '';
  emailValue = '';
  phoneValue = '';
  hexValue = '';
  cardValue = '';
  customValue = '';
  
  // Form data
  formData = {
    username: '',
    age: '',
    email: '',
    phone: ''
  };
  
  // Additional demo data
  disabledValue = 'Disabled input';
  

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicKeyFilter':
        this.showBasicKeyFilterCode = !this.showBasicKeyFilterCode;
        break;
      case 'keyFilterPatterns':
        this.showKeyFilterPatternsCode = !this.showKeyFilterPatternsCode;
        break;
      case 'keyFilterStates':
        this.showKeyFilterStatesCode = !this.showKeyFilterStatesCode;
        break;
    }
  }

  onInputChange(value: string, field: string): void {
    console.log(`${field} changed to:`, value);
  }

  onFormSubmit(): void {
    console.log('Form submitted:', this.formData);
    alert('Form submitted! Check console for data.');
  }

  resetForm(): void {
    this.formData = {
      username: '',
      age: '',
      email: '',
      phone: ''
    };
  }
}
