import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs } from '../../shared/tabs/tabs';
import { Splitter as SuiSplitter } from '../../../../../ui-lib/src/lib/splitter/splitter';

@Component({
  selector: 'app-splitter',
  standalone: true,
  imports: [CommonModule, Tabs, SuiSplitter],
  templateUrl: './splitter.html',
  styleUrl: './splitter.scss'
})
export class SplitterComponent {
  activeTab = 'demo';
  showHorizontalSplitterCode = false;
  showVerticalSplitterCode = false;
  showCustomGutterSplitterCode = false;
  gutterSize = 8;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'horizontalSplitter':
        this.showHorizontalSplitterCode = !this.showHorizontalSplitterCode;
        break;
      case 'verticalSplitter':
        this.showVerticalSplitterCode = !this.showVerticalSplitterCode;
        break;
      case 'customGutterSplitter':
        this.showCustomGutterSplitterCode = !this.showCustomGutterSplitterCode;
        break;
    }
  }

  onResizeEnd(event: any): void {
    console.log('Resize ended:', event);
  }

  updateGutterSize(event: any): void {
    this.gutterSize = +event.target.value;
  }
}