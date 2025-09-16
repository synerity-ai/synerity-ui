import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-button',
  imports: [CommonModule, FormsModule, Tabs],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  activeTab = 'demo';
  
  // Demo data
  buttonText = 'Click me!';
  buttonDisabled = false;
  buttonLoading = false;
  
  // Code visibility states
  showBasicVariantsCode = false;
  showButtonSizesCode = false;
  showButtonStatesCode = false;
  showButtonIconsCode = false;
  showButtonGroupsCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
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
  
  // Button demo methods
  onButtonClick() {
    console.log('Button clicked!');
    alert('Button clicked!');
  }
  
  onLoadingClick() {
    this.buttonLoading = true;
    setTimeout(() => {
      this.buttonLoading = false;
      alert('Loading completed!');
    }, 2000);
  }
  
  toggleDisabled() {
    this.buttonDisabled = !this.buttonDisabled;
  }
}
