import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { IconField as SuiIconField } from '../../../../../ui-lib/src/lib/icon-field/icon-field';
import { InputText as SuiInputText } from '../../../../../ui-lib/src/lib/input-text/input-text';

@Component({
  selector: 'app-iconfield',
  standalone: true,
  imports: [CommonModule, FormsModule, Tabs, SuiIconField, SuiInputText],
  templateUrl: './iconfield.html',
  styleUrl: './iconfield.scss'
})
export class IconfieldComponent {
  activeTab = 'demo';
  tabs = [
    { id: 'demo', label: 'Demo', icon: '🎯' },
    { id: 'usage', label: 'How to Use', icon: '📖' },
    { id: 'docs', label: 'Documentation', icon: '📚' }
  ];

  // Demo data
  username = '';
  email = '';
  password = '';
  searchQuery = '';
  phone = '';
  website = '';
  
  // Code visibility flags
  showBasicCode = false;
  showPositionCode = false;
  showSizeCode = false;
  showStyleCode = false;

  onTabChange(tab: string) {
    this.activeTab = tab;
  }

  toggleCode(type: string) {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'position':
        this.showPositionCode = !this.showPositionCode;
        break;
      case 'size':
        this.showSizeCode = !this.showSizeCode;
        break;
      case 'style':
        this.showStyleCode = !this.showStyleCode;
        break;
    }
  }

  onInputChange(field: string, value: string) {
    (this as any)[field] = value;
    console.log(`${field} changed:`, value);
  }
}
