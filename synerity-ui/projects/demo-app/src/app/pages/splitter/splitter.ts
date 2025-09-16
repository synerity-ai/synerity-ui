import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Splitter } from 'ui-lib';

@Component({
  selector: 'app-splitter',
  imports: [CommonModule, FormsModule, Tabs, Splitter],
  templateUrl: './splitter.html',
  styleUrl: './splitter.scss'
})
export class SplitterPage {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicSplitterCode = false;
  showVerticalSplitterCode = false;
  showCustomSizesCode = false;
  showCustomStylingCode = false;

  // Splitter configurations
  horizontalSizes = [50, 50];
  verticalSizes = [40, 60];
  customSizes = [30, 70];

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicSplitter':
        this.showBasicSplitterCode = !this.showBasicSplitterCode;
        break;
      case 'verticalSplitter':
        this.showVerticalSplitterCode = !this.showVerticalSplitterCode;
        break;
      case 'customSizes':
        this.showCustomSizesCode = !this.showCustomSizesCode;
        break;
      case 'customStyling':
        this.showCustomStylingCode = !this.showCustomStylingCode;
        break;
    }
  }

  onResizeEnd(event: any): void {
    console.log('Splitter resized:', event);
  }

  // Sample content for panels
  leftPanelContent = {
    title: 'Left Panel',
    description: 'This is the left panel content. You can resize this panel by dragging the gutter.',
    items: [
      'Item 1',
      'Item 2', 
      'Item 3',
      'Item 4',
      'Item 5'
    ]
  };

  rightPanelContent = {
    title: 'Right Panel',
    description: 'This is the right panel content. The splitter allows you to adjust the layout dynamically.',
    features: [
      'Responsive design',
      'Customizable sizes',
      'Smooth resizing',
      'Event handling'
    ]
  };

  topPanelContent = {
    title: 'Top Panel',
    description: 'This is the top panel in a vertical splitter layout.',
    content: 'You can drag the horizontal gutter to resize this panel vertically.'
  };

  bottomPanelContent = {
    title: 'Bottom Panel', 
    description: 'This is the bottom panel in a vertical splitter layout.',
    content: 'The vertical splitter provides a different layout orientation.'
  };
}