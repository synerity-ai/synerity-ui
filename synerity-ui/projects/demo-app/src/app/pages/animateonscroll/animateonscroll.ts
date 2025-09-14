import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimateOnScroll as SuiAnimateOnScroll } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-animateonscroll',
  imports: [CommonModule, FormsModule, SuiAnimateOnScroll, Tabs],
  templateUrl: './animateonscroll.html',
  styleUrl: './animateonscroll.scss'
})
export class AnimateOnScrollPage {
  activeTab = 'demo';
  
  // Demo data
  basicAnimation = 'fadeInUp';
  basicThreshold = 0.1;
  basicDelay = 0;
  basicDuration = 1000;
  basicOnce = true;
  
  // Animation types
  animationTypes = [
    { value: 'fadeInUp', label: 'Fade In Up', description: 'Element fades in while moving up' },
    { value: 'fadeInDown', label: 'Fade In Down', description: 'Element fades in while moving down' },
    { value: 'fadeInLeft', label: 'Fade In Left', description: 'Element fades in while moving from left' },
    { value: 'fadeInRight', label: 'Fade In Right', description: 'Element fades in while moving from right' },
    { value: 'slideInUp', label: 'Slide In Up', description: 'Element slides in from bottom' },
    { value: 'slideInDown', label: 'Slide In Down', description: 'Element slides in from top' },
    { value: 'slideInLeft', label: 'Slide In Left', description: 'Element slides in from left' },
    { value: 'slideInRight', label: 'Slide In Right', description: 'Element slides in from right' },
    { value: 'zoomIn', label: 'Zoom In', description: 'Element zooms in from center' },
    { value: 'zoomOut', label: 'Zoom Out', description: 'Element zooms out from center' },
    { value: 'rotateIn', label: 'Rotate In', description: 'Element rotates in' },
    { value: 'bounceIn', label: 'Bounce In', description: 'Element bounces in' }
  ];
  
  // Interactive demo
  interactiveAnimation = 'fadeInUp';
  interactiveThreshold = 0.1;
  interactiveDelay = 0;
  interactiveDuration = 1000;
  interactiveOnce = true;
  
  // Code visibility states
  showBasicAnimateOnScrollCode = false;
  showAnimationTypesCode = false;
  showThresholdCode = false;
  showDelayCode = false;
  showDurationCode = false;
  showOnceCode = false;
  showInteractiveDemoCode = false;
  
  // Action log
  actionLog: string[] = [];
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicAnimateOnScroll':
        this.showBasicAnimateOnScrollCode = !this.showBasicAnimateOnScrollCode;
        break;
      case 'animationTypes':
        this.showAnimationTypesCode = !this.showAnimationTypesCode;
        break;
      case 'threshold':
        this.showThresholdCode = !this.showThresholdCode;
        break;
      case 'delay':
        this.showDelayCode = !this.showDelayCode;
        break;
      case 'duration':
        this.showDurationCode = !this.showDurationCode;
        break;
      case 'once':
        this.showOnceCode = !this.showOnceCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onAction(action: string) {
    this.actionLog.unshift(`${new Date().toLocaleTimeString()}: ${action}`);
    if (this.actionLog.length > 10) {
      this.actionLog = this.actionLog.slice(0, 10);
    }
  }
  
  onAnimationChange() {
    this.onAction(`Animation changed to ${this.interactiveAnimation}`);
  }
  
  onThresholdChange() {
    this.onAction(`Threshold changed to ${this.interactiveThreshold}`);
  }
  
  onDelayChange() {
    this.onAction(`Delay changed to ${this.interactiveDelay}ms`);
  }
  
  onDurationChange() {
    this.onAction(`Duration changed to ${this.interactiveDuration}ms`);
  }
  
  onOnceChange() {
    this.onAction(`Once changed to ${this.interactiveOnce}`);
  }
  
  // Helper methods
  getAnimateOnScrollStatus(): { status: string; color: string; icon: string } {
    return { status: 'Ready', color: 'text-green-600', icon: '✨' };
  }
  
  // Quick actions
  clearActionLog() {
    this.actionLog = [];
  }
  
  setRandomAnimation() {
    const randomAnimation = this.animationTypes[Math.floor(Math.random() * this.animationTypes.length)];
    this.interactiveAnimation = randomAnimation.value;
    this.onAction(`Random animation set to ${randomAnimation.label}`);
  }
  
  setRandomDelay() {
    const delays = [0, 100, 200, 300, 500, 1000];
    this.interactiveDelay = delays[Math.floor(Math.random() * delays.length)];
    this.onAction(`Random delay set to ${this.interactiveDelay}ms`);
  }
  
  setRandomDuration() {
    const durations = [500, 750, 1000, 1250, 1500, 2000];
    this.interactiveDuration = durations[Math.floor(Math.random() * durations.length)];
    this.onAction(`Random duration set to ${this.interactiveDuration}ms`);
  }
  
  toggleOnce() {
    this.interactiveOnce = !this.interactiveOnce;
    this.onAction(`Once changed to ${this.interactiveOnce}`);
  }
  
  resetToDefaults() {
    this.interactiveAnimation = 'fadeInUp';
    this.interactiveThreshold = 0.1;
    this.interactiveDelay = 0;
    this.interactiveDuration = 1000;
    this.interactiveOnce = true;
    this.onAction('Reset to default values');
  }
}
