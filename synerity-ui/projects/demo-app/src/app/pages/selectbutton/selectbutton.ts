import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { SelectButton as SuiSelectButton } from '../../../../../ui-lib/src/lib/select-button/select-button';

@Component({
  selector: 'app-selectbutton',
  imports: [CommonModule, FormsModule, Tabs, SuiSelectButton],
  templateUrl: './selectbutton.html',
  styleUrl: './selectbutton.scss'
})
export class SelectbuttonComponent {
  activeTab = 'demo';

  // Basic SelectButton
  basicValue: any = null;
  basicOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  // View type SelectButton
  viewValue: any = 'list';
  viewOptions = [
    { label: 'List', value: 'list' },
    { label: 'Grid', value: 'grid' },
    { label: 'Card', value: 'card' }
  ];

  // Size variants SelectButton
  sizeValue: any = 'medium';
  sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  // Disabled options SelectButton
  disabledValue: any = 'edit';
  disabledOptions = [
    { label: 'View', value: 'view' },
    { label: 'Edit', value: 'edit' },
    { label: 'Delete', value: 'delete', disabled: true },
    { label: 'Archive', value: 'archive' }
  ];

  // Icon SelectButton
  iconValue: any = 'left';
  iconOptions = [
    { label: 'Left', value: 'left' },
    { label: 'Center', value: 'center' },
    { label: 'Right', value: 'right' },
    { label: 'Justify', value: 'justify' }
  ];

  // Code visibility flags
  showBasicCode = false;
  showViewCode = false;
  showSizeCode = false;
  showDisabledCode = false;
  showIconCode = false;

  onTabChange(tab: string) {
    this.activeTab = tab;
  }

  toggleCode(type: string) {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'view':
        this.showViewCode = !this.showViewCode;
        break;
      case 'size':
        this.showSizeCode = !this.showSizeCode;
        break;
      case 'disabled':
        this.showDisabledCode = !this.showDisabledCode;
        break;
      case 'icon':
        this.showIconCode = !this.showIconCode;
        break;
    }
  }

  onBasicChange(value: any) {
    this.basicValue = value;
    console.log('Basic SelectButton selection changed:', value);
  }

  onViewChange(value: any) {
    this.viewValue = value;
    console.log('View SelectButton selection changed:', value);
  }

  onSizeChange(value: any) {
    this.sizeValue = value;
    console.log('Size SelectButton selection changed:', value);
  }

  onDisabledChange(value: any) {
    this.disabledValue = value;
    console.log('Disabled SelectButton selection changed:', value);
  }

  onIconChange(value: any) {
    this.iconValue = value;
    console.log('Icon SelectButton selection changed:', value);
  }
}
