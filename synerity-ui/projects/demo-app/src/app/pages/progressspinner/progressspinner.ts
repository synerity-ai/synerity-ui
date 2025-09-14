import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressSpinner } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-progressspinner-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ProgressSpinner, Tabs],
  templateUrl: './progressspinner.html',
  styleUrl: './progressspinner.scss'
})
export class Progressspinner {
  activeTab = 'demo';

  // Basic ProgressSpinner
  basicSize: 'small' | 'normal' | 'large' = 'normal';

  // Custom ProgressSpinner
  customSize: 'small' | 'normal' | 'large' = 'large';
  customStrokeWidth = '4';
  customAnimationDuration = '1.5s';

  // Loading States
  loadingStates = [
    { label: 'Loading Data', size: 'small' as 'small' | 'normal' | 'large', strokeWidth: '2' },
    { label: 'Processing', size: 'normal' as 'small' | 'normal' | 'large', strokeWidth: '3' },
    { label: 'Saving', size: 'large' as 'small' | 'normal' | 'large', strokeWidth: '4' }
  ];

  // Interactive Demo
  interactiveSize: 'small' | 'normal' | 'large' = 'normal';
  interactiveStrokeWidth = '3';
  interactiveAnimationDuration = '2s';

  // Code visibility
  showBasicProgressSpinnerCode = false;
  showCustomProgressSpinnerCode = false;
  showLoadingStatesCode = false;
  showInteractiveDemoCode = false;

  // Action log
  actionLog: string[] = [];

  onTabChange(tabId: string) {
    this.activeTab = tabId;
  }

  toggleCode(example: string) {
    switch (example) {
      case 'basicProgressSpinner':
        this.showBasicProgressSpinnerCode = !this.showBasicProgressSpinnerCode;
        break;
      case 'customProgressSpinner':
        this.showCustomProgressSpinnerCode = !this.showCustomProgressSpinnerCode;
        break;
      case 'loadingStates':
        this.showLoadingStatesCode = !this.showLoadingStatesCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }

  // Interactive Demo methods
  setRandomSize() {
    const sizes = ['small', 'normal', 'large'];
    this.interactiveSize = sizes[Math.floor(Math.random() * sizes.length)] as 'small' | 'normal' | 'large';
    this.addToActionLog(`Size set to ${this.interactiveSize}`);
  }

  setRandomStrokeWidth() {
    this.interactiveStrokeWidth = (Math.floor(Math.random() * 6) + 2).toString();
    this.addToActionLog(`Stroke width set to ${this.interactiveStrokeWidth}`);
  }

  setRandomAnimationDuration() {
    const durations = ['1s', '1.5s', '2s', '2.5s', '3s'];
    this.interactiveAnimationDuration = durations[Math.floor(Math.random() * durations.length)];
    this.addToActionLog(`Animation duration set to ${this.interactiveAnimationDuration}`);
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