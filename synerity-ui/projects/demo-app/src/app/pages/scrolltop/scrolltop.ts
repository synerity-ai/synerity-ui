import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollTop } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-scrolltop-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollTop, Tabs],
  templateUrl: './scrolltop.html',
  styleUrl: './scrolltop.scss'
})
export class Scrolltop {
  activeTab = 'demo';

  // Basic ScrollTop
  basicThreshold = 400;
  basicIcon = '↑';
  basicBehavior: 'smooth' | 'auto' = 'smooth';

  // Custom ScrollTop
  customThreshold = 200;
  customIcon = '🔝';
  customBehavior: 'smooth' | 'auto' = 'smooth';
  customStyle = { backgroundColor: '#3b82f6', color: 'white' };
  customStyleClass = 'custom-scroll-top';

  // Multiple ScrollTops
  scrollTops = [
    { label: 'Top Left', threshold: 300, icon: '↑', behavior: 'smooth' as 'smooth' | 'auto' },
    { label: 'Top Right', threshold: 300, icon: '⬆️', behavior: 'smooth' as 'smooth' | 'auto' },
    { label: 'Bottom Left', threshold: 300, icon: '🔝', behavior: 'auto' as 'smooth' | 'auto' },
    { label: 'Bottom Right', threshold: 300, icon: '⏫', behavior: 'smooth' as 'smooth' | 'auto' }
  ];

  // Interactive Demo
  interactiveThreshold = 500;
  interactiveIcon = '⬆️';
  interactiveBehavior: 'smooth' | 'auto' = 'smooth';
  interactiveStyle = { backgroundColor: '#8b5cf6', color: 'white' };
  interactiveStyleClass = 'interactive-scroll-top';

  // Code visibility
  showBasicScrollTopCode = false;
  showCustomScrollTopCode = false;
  showMultipleScrollTopsCode = false;
  showInteractiveDemoCode = false;

  // Action log
  actionLog: string[] = [];

  onTabChange(tabId: string) {
    this.activeTab = tabId;
  }

  toggleCode(example: string) {
    switch (example) {
      case 'basicScrollTop':
        this.showBasicScrollTopCode = !this.showBasicScrollTopCode;
        break;
      case 'customScrollTop':
        this.showCustomScrollTopCode = !this.showCustomScrollTopCode;
        break;
      case 'multipleScrollTops':
        this.showMultipleScrollTopsCode = !this.showMultipleScrollTopsCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }

  // Interactive Demo methods
  setRandomThreshold() {
    this.interactiveThreshold = Math.floor(Math.random() * 800) + 200;
    this.addToActionLog(`Threshold set to ${this.interactiveThreshold}px`);
  }

  setRandomIcon() {
    const icons = ['↑', '⬆️', '🔝', '⏫', '🔼', '↟'];
    this.interactiveIcon = icons[Math.floor(Math.random() * icons.length)];
    this.addToActionLog(`Icon set to ${this.interactiveIcon}`);
  }

  toggleBehavior() {
    this.interactiveBehavior = this.interactiveBehavior === 'smooth' ? 'auto' : 'smooth';
    this.addToActionLog(`Behavior set to ${this.interactiveBehavior}`);
  }

  setRandomStyle() {
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.interactiveStyle = { backgroundColor: randomColor, color: 'white' };
    this.addToActionLog(`Style updated with color ${randomColor}`);
  }

  addToActionLog(action: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.actionLog.unshift(`[${timestamp}] ${action}`);
    if (this.actionLog.length > 10) {
      this.actionLog.pop();
    }
  }

  clearActionLog() {
    this.actionLog = [];
  }
}