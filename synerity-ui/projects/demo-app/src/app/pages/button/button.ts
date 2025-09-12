import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Button as SuiButton } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-button',
  imports: [CommonModule, FormsModule, SuiButton, Tabs],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  activeTab = 'demo';
  
  // Demo data
  buttonText = 'Click me!';
  
  // Button demo
  onButtonClick() {
    console.log('Button clicked!');
    alert('Button clicked!');
  }

  onTabChange(tab: string) {
    this.activeTab = tab;
  }
}
