import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { InputGroup as SuiInputGroup } from '../../../../../ui-lib/src/lib/input-group/input-group';

@Component({
  selector: 'app-inputgroup',
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

  // Multiple Input Groups
  firstNameValue = '';
  lastNameValue = '';
  emailValue = '';
  phoneValue = '';

  // Code visibility flags
  showBasicCode = false;
  showSizeCode = false;
  showCustomCode = false;
  showMultipleCode = false;

  onTabChange(tab: string) {
    this.activeTab = tab;
  }

  toggleCode(type: string) {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'size':
        this.showSizeCode = !this.showSizeCode;
        break;
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
      case 'multiple':
        this.showMultipleCode = !this.showMultipleCode;
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

  onFirstNameChange(event: any) {
    this.firstNameValue = event.target.value;
    console.log('First name changed:', this.firstNameValue);
  }

  onLastNameChange(event: any) {
    this.lastNameValue = event.target.value;
    console.log('Last name changed:', this.lastNameValue);
  }

  onEmailChange(event: any) {
    this.emailValue = event.target.value;
    console.log('Email changed:', this.emailValue);
  }

  onPhoneChange(event: any) {
    this.phoneValue = event.target.value;
    console.log('Phone changed:', this.phoneValue);
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

  clearAllInputs() {
    this.firstNameValue = '';
    this.lastNameValue = '';
    this.emailValue = '';
    this.phoneValue = '';
  }
}
