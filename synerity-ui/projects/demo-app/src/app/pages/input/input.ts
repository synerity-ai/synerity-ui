import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputText } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-input',
  imports: [CommonModule, FormsModule, InputText, Tabs],
  templateUrl: './input.html',
  styleUrl: './input.scss'
})
export class Input {
  activeTab = 'demo';
  
  // Demo data
  inputValue = '';
  emailValue = '';
  passwordValue = '';
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
}
