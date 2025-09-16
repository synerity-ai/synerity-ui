import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { ScrollPanel } from 'ui-lib';

@Component({
  selector: 'app-scrollpanel',
  imports: [CommonModule, FormsModule, Tabs, ScrollPanel],
  templateUrl: './scrollpanel.html',
  styleUrl: './scrollpanel.scss'
})
export class ScrollPanelPage {
  @ViewChild('scrollPanel') scrollPanel!: ScrollPanel;
  
  activeTab = 'demo';

  // Code visibility toggles
  showBasicScrollPanelCode = false;
  showCustomSizeCode = false;
  showScrollEventsCode = false;
  showCustomStylingCode = false;

  // Scroll event data
  scrollData = {
    scrollTop: 0,
    scrollLeft: 0,
    scrollHeight: 0,
    scrollWidth: 0,
    clientHeight: 0,
    clientWidth: 0
  };

  // Sample content for scroll panels
  longContent = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    description: `This is a description for item ${i + 1}. It contains some sample text to demonstrate scrolling functionality.`
  }));

  wideContent = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Column ${i + 1}`,
    value: `Value ${i + 1}`
  }));

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicScrollPanel':
        this.showBasicScrollPanelCode = !this.showBasicScrollPanelCode;
        break;
      case 'customSize':
        this.showCustomSizeCode = !this.showCustomSizeCode;
        break;
      case 'scrollEvents':
        this.showScrollEventsCode = !this.showScrollEventsCode;
        break;
      case 'customStyling':
        this.showCustomStylingCode = !this.showCustomStylingCode;
        break;
    }
  }

  onScrollEvent(event: any): void {
    this.scrollData = event;
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
    if (this.scrollPanel) {
      this.scrollPanel.scrollToLeft();
    }
  }

  scrollToRight(): void {
    if (this.scrollPanel) {
      this.scrollPanel.scrollToRight();
    }
  }
}