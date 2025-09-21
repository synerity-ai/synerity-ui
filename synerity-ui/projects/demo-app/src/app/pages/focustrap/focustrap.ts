import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { FocusTrap as SuiFocusTrap } from '../../../../../ui-lib/src/lib/focus-trap/focus-trap';

@Component({
  selector: 'app-focustrap',
  standalone: true,
  imports: [CommonModule, FormsModule, Tabs, SuiFocusTrap],
  templateUrl: './focustrap.html',
  styleUrl: './focustrap.scss'
})
export class FocustrapComponent {
  activeTab = 'demo';
  showBasicCode = false;
  showModalCode = false;
  showCustomCode = false;

  // Demo data
  isModalOpen = false;
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'modal':
        this.showModalCode = !this.showModalCode;
        break;
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
    }
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  onFormSubmit(): void {
    console.log('Form submitted:', this.formData);
    this.closeModal();
  }

  resetForm(): void {
    this.formData = { name: '', email: '', message: '' };
  }
}
