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
  
  // Code visibility states
  showBasicVariantsCode = false;
  showButtonSizesCode = false;
  showButtonStatesCode = false;
  showButtonIconsCode = false;
  showButtonGroupsCode = false;
  showInteractiveDemoCode = false;
  
  // Button demo
  onButtonClick() {
    console.log('Button clicked!');
    alert('Button clicked!');
  }

  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  // Code toggle methods
  toggleCode(section: string) {
    switch(section) {
      case 'basicVariants':
        this.showBasicVariantsCode = !this.showBasicVariantsCode;
        break;
      case 'buttonSizes':
        this.showButtonSizesCode = !this.showButtonSizesCode;
        break;
      case 'buttonStates':
        this.showButtonStatesCode = !this.showButtonStatesCode;
        break;
      case 'buttonIcons':
        this.showButtonIconsCode = !this.showButtonIconsCode;
        break;
      case 'buttonGroups':
        this.showButtonGroupsCode = !this.showButtonGroupsCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
}
