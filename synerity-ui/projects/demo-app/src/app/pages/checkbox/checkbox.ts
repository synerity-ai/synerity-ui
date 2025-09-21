import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Checkbox as SuiCheckbox } from '../../../../../ui-lib/src/lib/checkbox/checkbox';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule, Tabs, SuiCheckbox],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss'
})
export class CheckboxComponent {
  activeTab = 'demo';
  showBasicCheckboxesCode = false;
  showCheckboxGroupCode = false;
  showCustomCheckboxesCode = false;

  // Demo data
  basicChecked = false;
  indeterminateChecked = false;
  disabledChecked = true;
  
  // Checkbox group data
  allSelected = false;
  checkboxOptions = [
    { label: 'Option 1', checked: false },
    { label: 'Option 2', checked: false },
    { label: 'Option 3', checked: false },
    { label: 'Option 4', checked: false }
  ];

  // Custom checkbox data
  customChecked = false;
  animatedChecked = false;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicCheckboxes':
        this.showBasicCheckboxesCode = !this.showBasicCheckboxesCode;
        break;
      case 'checkboxGroup':
        this.showCheckboxGroupCode = !this.showCheckboxGroupCode;
        break;
      case 'customCheckboxes':
        this.showCustomCheckboxesCode = !this.showCustomCheckboxesCode;
        break;
    }
  }

  onBasicChange(checked: boolean): void {
    console.log('Basic checkbox changed:', checked);
    this.basicChecked = checked;
  }

  onIndeterminateChange(checked: boolean): void {
    console.log('Indeterminate checkbox changed:', checked);
    this.indeterminateChecked = checked;
  }

  onDisabledChange(checked: boolean): void {
    console.log('Disabled checkbox changed:', checked);
    this.disabledChecked = checked;
  }

  onOptionChange(index: number, checked: boolean): void {
    console.log('Option changed:', index, checked);
    this.checkboxOptions[index].checked = checked;
    this.updateSelectAllState();
  }

  onSelectAllChange(checked: boolean): void {
    console.log('Select all changed:', checked);
    this.allSelected = checked;
    this.checkboxOptions.forEach(option => {
      option.checked = checked;
    });
  }

  onCustomChange(checked: boolean): void {
    console.log('Custom checkbox changed:', checked);
    this.customChecked = checked;
  }

  onAnimatedChange(checked: boolean): void {
    console.log('Animated checkbox changed:', checked);
    this.animatedChecked = checked;
  }

  updateSelectAllState(): void {
    const checkedCount = this.checkboxOptions.filter(option => option.checked).length;
    this.allSelected = checkedCount === this.checkboxOptions.length;
  }

  get someSelected(): boolean {
    const checkedCount = this.checkboxOptions.filter(option => option.checked).length;
    return checkedCount > 0 && checkedCount < this.checkboxOptions.length;
  }
}