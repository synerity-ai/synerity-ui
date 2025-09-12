import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Textarea as SuiTextarea } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-textarea',
  imports: [CommonModule, FormsModule, SuiTextarea, Tabs],
  templateUrl: './textarea.html',
  styleUrl: './textarea.scss'
})
export class Textarea {
  activeTab = 'demo';
  
  // Demo data
  basicValue = '';
  placeholderValue = '';
  disabledValue = '';
  autosizeValue = '';
  rowsValue = '';
  interactiveValue = '';
  
  // Code visibility states
  showBasicUsageCode = false;
  showTextareaVariantsCode = false;
  showTextareaStatesCode = false;
  showTextareaFeaturesCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  onTextareaChange(value: string, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Code toggle methods
  toggleCode(section: string) {
    switch(section) {
      case 'basicUsage': this.showBasicUsageCode = !this.showBasicUsageCode; break;
      case 'textareaVariants': this.showTextareaVariantsCode = !this.showTextareaVariantsCode; break;
      case 'textareaStates': this.showTextareaStatesCode = !this.showTextareaStatesCode; break;
      case 'textareaFeatures': this.showTextareaFeaturesCode = !this.showTextareaFeaturesCode; break;
      case 'interactiveDemo': this.showInteractiveDemoCode = !this.showInteractiveDemoCode; break;
    }
  }
}
