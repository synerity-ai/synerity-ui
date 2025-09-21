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
  showBasicCode = false;
  showNumericCode = false;
  showCustomCode = false;

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
  
  showFormCode = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'numeric':
        this.showNumericCode = !this.showNumericCode;
        break;
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
      case 'form':
        this.showFormCode = !this.showFormCode;
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
