import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { ToggleButton as SuiToggleButton } from '../../../../../ui-lib/src/lib/toggle-button/toggle-button';

@Component({
  selector: 'app-togglebutton',
  imports: [CommonModule, FormsModule, Tabs, SuiToggleButton],
  templateUrl: './togglebutton.html',
  styleUrl: './togglebutton.scss'
})
export class TogglebuttonComponent {
  activeTab = 'demo';

  // Single selection ToggleButton
  singleValue: any = null;
  singleOptions = [
    { label: 'Bold', value: 'bold' },
    { label: 'Italic', value: 'italic' },
    { label: 'Underline', value: 'underline' }
  ];

  // Multiple selection ToggleButton
  multipleValue: any[] = [];
  multipleOptions = [
    { label: 'Font', value: 'font' },
    { label: 'Color', value: 'color' },
    { label: 'Size', value: 'size' },
    { label: 'Style', value: 'style' }
  ];

  // Icon ToggleButton
  iconValue: any = null;
  iconOptions = [
    { label: 'Save', value: 'save', icon: '💾' },
    { label: 'Edit', value: 'edit', icon: '✏️' },
    { label: 'Delete', value: 'delete', icon: '🗑️' },
    { label: 'Share', value: 'share', icon: '📤' }
  ];

  // Status ToggleButton
  statusValue: any = 'active';
  statusOptions = [
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
    { label: 'Pending', value: 'pending' }
  ];

  // View mode ToggleButton with multiple selection
  viewModeValue: any[] = ['list'];
  viewModeOptions = [
    { label: 'List View', value: 'list' },
    { label: 'Grid View', value: 'grid' },
    { label: 'Card View', value: 'card' },
    { label: 'Table View', value: 'table' }
  ];

  // Code visibility flags
  showSingleCode = false;
  showMultipleCode = false;
  showIconCode = false;
  showStatusCode = false;
  showViewModeCode = false;

  onTabChange(tab: string) {
    this.activeTab = tab;
  }

  toggleCode(type: string) {
    switch (type) {
      case 'single':
        this.showSingleCode = !this.showSingleCode;
        break;
      case 'multiple':
        this.showMultipleCode = !this.showMultipleCode;
        break;
      case 'icon':
        this.showIconCode = !this.showIconCode;
        break;
      case 'status':
        this.showStatusCode = !this.showStatusCode;
        break;
      case 'viewmode':
        this.showViewModeCode = !this.showViewModeCode;
        break;
    }
  }

  onSingleChange(value: any) {
    this.singleValue = value;
    console.log('Single ToggleButton selection changed:', value);
  }

  onMultipleChange(value: unknown | unknown[]) {
    this.multipleValue = Array.isArray(value) ? value : [];
    console.log('Multiple ToggleButton selection changed:', this.multipleValue);
  }

  onIconChange(value: any) {
    this.iconValue = value;
    console.log('Icon ToggleButton selection changed:', value);
  }

  onStatusChange(value: any) {
    this.statusValue = value;
    console.log('Status ToggleButton selection changed:', value);
  }

  onViewModeChange(value: unknown | unknown[]) {
    this.viewModeValue = Array.isArray(value) ? value : [];
    console.log('View Mode ToggleButton selection changed:', this.viewModeValue);
  }
}
