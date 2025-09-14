import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StyleClass } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-styleclass-page',
  standalone: true,
  imports: [CommonModule, FormsModule, StyleClass, Tabs],
  templateUrl: './styleclass.html',
  styleUrl: './styleclass.scss'
})
export class Styleclass {
  activeTab = 'demo';

  // ViewChild references for template elements
  @ViewChild('basicTarget') basicTarget!: ElementRef;
  @ViewChild('customTarget') customTarget!: ElementRef;
  @ViewChild('interactiveTarget') interactiveTarget!: ElementRef;

  // Basic StyleClass
  basicActive = false;
  basicEnterClass = 'fade-in';
  basicLeaveClass = 'fade-out';
  basicToggleClass = 'active';

  // Custom StyleClass
  customActive = false;
  customEnterClass = 'slide-in';
  customLeaveClass = 'slide-out';
  customToggleClass = 'highlighted';
  customStyle = { transition: 'all 0.5s ease' };
  customStyleClass = 'custom-style-class';

  // Multiple StyleClasses
  styleClasses = [
    { label: 'Fade', baseClass: 'bg-blue-500', enterClass: 'fade-in', leaveClass: 'fade-out', toggleClass: 'active', active: false },
    { label: 'Slide', baseClass: 'bg-green-500', enterClass: 'slide-in', leaveClass: 'slide-out', toggleClass: 'active', active: false },
    { label: 'Scale', baseClass: 'bg-yellow-500', enterClass: 'scale-in', leaveClass: 'scale-out', toggleClass: 'active', active: false },
    { label: 'Rotate', baseClass: 'bg-red-500', enterClass: 'rotate-in', leaveClass: 'rotate-out', toggleClass: 'active', active: false }
  ];

  // Interactive Demo
  interactiveActive = false;
  interactiveEnterClass = 'bounce-in';
  interactiveLeaveClass = 'bounce-out';
  interactiveToggleClass = 'pulse';
  interactiveStyle = { transition: 'all 0.3s ease' };
  interactiveStyleClass = 'interactive-style-class';

  // Code visibility
  showBasicStyleClassCode = false;
  showCustomStyleClassCode = false;
  showMultipleStyleClassesCode = false;
  showInteractiveDemoCode = false;

  // Action log
  actionLog: string[] = [];

  onTabChange(tabId: string) {
    this.activeTab = tabId;
  }

  toggleCode(example: string) {
    switch (example) {
      case 'basicStyleClass':
        this.showBasicStyleClassCode = !this.showBasicStyleClassCode;
        break;
      case 'customStyleClass':
        this.showCustomStyleClassCode = !this.showCustomStyleClassCode;
        break;
      case 'multipleStyleClasses':
        this.showMultipleStyleClassesCode = !this.showMultipleStyleClassesCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }

  // Interactive Demo methods
  toggleBasicStyle() {
    this.basicActive = !this.basicActive;
    this.addToActionLog(`Basic style ${this.basicActive ? 'activated' : 'deactivated'}`);
  }

  toggleCustomStyle() {
    this.customActive = !this.customActive;
    this.addToActionLog(`Custom style ${this.customActive ? 'activated' : 'deactivated'}`);
  }

  toggleStyleClass(styleClass: any) {
    styleClass.active = !styleClass.active;
    this.addToActionLog(`${styleClass.label} style ${styleClass.active ? 'activated' : 'deactivated'}`);
  }

  toggleAllStyleClasses() {
    const allActive = this.styleClasses.every(sc => sc.active);
    this.styleClasses.forEach(sc => {
      sc.active = !allActive;
    });
    this.addToActionLog(`All style classes ${allActive ? 'deactivated' : 'activated'}`);
  }

  toggleInteractiveStyle() {
    this.interactiveActive = !this.interactiveActive;
    this.addToActionLog(`Interactive style ${this.interactiveActive ? 'activated' : 'deactivated'}`);
  }

  setRandomEnterClass() {
    const enterClasses = ['fade-in', 'slide-in', 'scale-in', 'rotate-in', 'bounce-in'];
    this.interactiveEnterClass = enterClasses[Math.floor(Math.random() * enterClasses.length)];
    this.addToActionLog(`Enter class set to ${this.interactiveEnterClass}`);
  }

  setRandomLeaveClass() {
    const leaveClasses = ['fade-out', 'slide-out', 'scale-out', 'rotate-out', 'bounce-out'];
    this.interactiveLeaveClass = leaveClasses[Math.floor(Math.random() * leaveClasses.length)];
    this.addToActionLog(`Leave class set to ${this.interactiveLeaveClass}`);
  }

  setRandomToggleClass() {
    const toggleClasses = ['active', 'highlighted', 'selected', 'focused', 'pulse'];
    this.interactiveToggleClass = toggleClasses[Math.floor(Math.random() * toggleClasses.length)];
    this.addToActionLog(`Toggle class set to ${this.interactiveToggleClass}`);
  }

  setRandomStyle() {
    const transitions = ['all 0.3s ease', 'all 0.5s ease', 'all 0.2s ease', 'all 0.8s ease'];
    const randomTransition = transitions[Math.floor(Math.random() * transitions.length)];
    this.interactiveStyle = { transition: randomTransition };
    this.addToActionLog(`Style updated with transition ${randomTransition}`);
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