import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Splitter as SuiSplitter } from '../../../../../ui-lib/src/lib/splitter/splitter';

@Component({
  selector: 'app-splitter',
  imports: [CommonModule, FormsModule, Tabs, SuiSplitter],
  templateUrl: './splitter.html',
  styleUrl: './splitter.scss'
})
export class Splitter {
  activeTab = 'demo';
  
  // Demo data
  splitterSizes = [30, 70];
  verticalSplitterSizes = [40, 60];
  
  // Code visibility states
  showBasicSplitterCode = false;
  showVerticalSplitterCode = false;
  showNestedSplitterCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicSplitter':
        this.showBasicSplitterCode = !this.showBasicSplitterCode;
        break;
      case 'verticalSplitter':
        this.showVerticalSplitterCode = !this.showVerticalSplitterCode;
        break;
      case 'nestedSplitter':
        this.showNestedSplitterCode = !this.showNestedSplitterCode;
        break;
    }
  }
  
  // Splitter demo methods
  onResize(event: any) {
    console.log('Splitter resized:', event);
  }
}
