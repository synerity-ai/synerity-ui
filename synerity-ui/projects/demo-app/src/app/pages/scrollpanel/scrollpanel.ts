import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs } from '../../shared/tabs/tabs';
import { ScrollPanel as SuiScrollPanel } from '../../../../../ui-lib/src/lib/scroll-panel/scroll-panel';

@Component({
  selector: 'app-scrollpanel',
  standalone: true,
  imports: [CommonModule, Tabs, SuiScrollPanel],
  templateUrl: './scrollpanel.html',
  styleUrl: './scrollpanel.scss'
})
export class ScrollPanelComponent {
  @ViewChild('scrollPanel') scrollPanel!: SuiScrollPanel;
  @ViewChild('horizontalScrollPanel') horizontalScrollPanel!: SuiScrollPanel;

  activeTab = 'demo';
  showBasicScrollPanelCode = false;
  showControlsScrollPanelCode = false;
  showHorizontalScrollPanelCode = false;
  scrollPosition = '0px';

  // Long content for basic scroll panel
  longContent = Array.from({ length: 20 }, (_, i) => ({
    title: `Content Item ${i + 1}`,
    content: `This is the content for item ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`
  }));

  // Content for controls scroll panel
  controlContent = Array.from({ length: 15 }, (_, i) => ({
    title: `Control Item ${i + 1}`,
    content: `This is a control item with scroll functionality. You can use the buttons above to control the scroll position.`
  }));

  // Horizontal content
  horizontalContent = Array.from({ length: 10 }, (_, i) => ({
    title: `Card ${i + 1}`,
    content: `This is horizontal scroll content item ${i + 1}.`
  }));

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicScrollPanel':
        this.showBasicScrollPanelCode = !this.showBasicScrollPanelCode;
        break;
      case 'controlsScrollPanel':
        this.showControlsScrollPanelCode = !this.showControlsScrollPanelCode;
        break;
      case 'horizontalScrollPanel':
        this.showHorizontalScrollPanelCode = !this.showHorizontalScrollPanelCode;
        break;
    }
  }

  onScroll(event: any): void {
    console.log('Scroll event:', event);
  }

  onScrollWithControls(event: any): void {
    this.scrollPosition = `${event.scrollTop}px`;
  }

  onHorizontalScroll(event: any): void {
    console.log('Horizontal scroll event:', event);
  }

  scrollToTop(): void {
    if (this.scrollPanel) {
      this.scrollPanel.scrollToTop();
    }
  }

  scrollToBottom(): void {
    if (this.scrollPanel) {
      this.scrollPanel.scrollToBottom();
    }
  }

  scrollToLeft(): void {
    if (this.horizontalScrollPanel) {
      this.horizontalScrollPanel.scrollToLeft();
    }
  }

  scrollToRight(): void {
    if (this.horizontalScrollPanel) {
      this.horizontalScrollPanel.scrollToRight();
    }
  }
}