import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { InputGroup as SuiInputGroup } from '../../../../../ui-lib/src/lib/input-group/input-group';

@Component({
  selector: 'app-inputgroup',
  standalone: true,
  imports: [CommonModule, FormsModule, Tabs, SuiInputGroup],
  templateUrl: './inputgroup.html',
  styleUrl: './inputgroup.scss'
})
export class InputgroupComponent {
  activeTab = 'demo';

  // Basic Input Group
  basicInputValue = '';
  basicInputDisabled = false;

  // Size variants
  smallInputValue = '';
  normalInputValue = '';
  largeInputValue = '';

  // Custom styled Input Group
  customInputValue = '';
  customInputDisabled = false;


  // Code visibility flags
  showBasicInputGroupCode = false;
  showInputGroupSizesCode = false;
  showInputGroupStatesCode = false;

  onTabChange(tab: string) {
    this.activeTab = tab;
  }

  toggleCode(type: string) {
    switch (type) {
      case 'basicInputGroup':
        this.showBasicInputGroupCode = !this.showBasicInputGroupCode;
        break;
      case 'inputGroupSizes':
        this.showInputGroupSizesCode = !this.showInputGroupSizesCode;
        break;
      case 'inputGroupStates':
        this.showInputGroupStatesCode = !this.showInputGroupStatesCode;
        break;
    }
  }

  onBasicInputChange(event: any) {
    this.basicInputValue = event.target.value;
    console.log('Basic input changed:', this.basicInputValue);
  }

  onSmallInputChange(event: any) {
    this.smallInputValue = event.target.value;
    console.log('Small input changed:', this.smallInputValue);
  }

  onNormalInputChange(event: any) {
    this.normalInputValue = event.target.value;
    console.log('Normal input changed:', this.normalInputValue);
  }

  onLargeInputChange(event: any) {
    this.largeInputValue = event.target.value;
    console.log('Large input changed:', this.largeInputValue);
  }

  onCustomInputChange(event: any) {
    this.customInputValue = event.target.value;
    console.log('Custom input changed:', this.customInputValue);
  }


  toggleBasicDisabled() {
    this.basicInputDisabled = !this.basicInputDisabled;
  }

  toggleCustomDisabled() {
    this.customInputDisabled = !this.customInputDisabled;
  }

  clearBasicInput() {
    this.basicInputValue = '';
  }

  clearCustomInput() {
    this.customInputValue = '';
  }

}
