import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlockUi as SuiBlockUi } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-blockui',
  imports: [CommonModule, FormsModule, SuiBlockUi, Tabs],
  templateUrl: './blockui.html',
  styleUrl: './blockui.scss'
})
export class BlockUiPage {
  activeTab = 'demo';
  
  // Demo data
  basicBlocked = false;
  basicMessage = 'Loading...';
  basicShowSpinner = true;
  
  customBlocked = false;
  customMessage = 'Processing your request...';
  customShowSpinner = true;
  
  overlayBlocked = false;
  overlayMessage = 'Saving changes...';
  overlayShowSpinner = true;
  
  // Interactive demo
  interactiveBlocked = false;
  interactiveMessage = 'Please wait...';
  interactiveShowSpinner = true;
  interactiveOverlayStyle = {};
  interactiveOverlayClass = '';
  
  // Code visibility states
  showBasicBlockUiCode = false;
  showCustomBlockUiCode = false;
  showOverlayBlockUiCode = false;
  showInteractiveDemoCode = false;
  
  // Action log
  actionLog: string[] = [];
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicBlockUi':
        this.showBasicBlockUiCode = !this.showBasicBlockUiCode;
        break;
      case 'customBlockUi':
        this.showCustomBlockUiCode = !this.showCustomBlockUiCode;
        break;
      case 'overlayBlockUi':
        this.showOverlayBlockUiCode = !this.showOverlayBlockUiCode;
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
  
  // Helper methods
  getBlockUiStatus(): { status: string; color: string; icon: string } {
    return { status: 'Ready', color: 'text-green-600', icon: '🔒' };
  }
  
  // Quick actions
  clearActionLog() {
    this.actionLog = [];
  }
  
  toggleBasicBlock() {
    this.basicBlocked = !this.basicBlocked;
    this.onAction(`Basic block UI ${this.basicBlocked ? 'enabled' : 'disabled'}`);
  }
  
  toggleCustomBlock() {
    this.customBlocked = !this.customBlocked;
    this.onAction(`Custom block UI ${this.customBlocked ? 'enabled' : 'disabled'}`);
  }
  
  toggleOverlayBlock() {
    this.overlayBlocked = !this.overlayBlocked;
    this.onAction(`Overlay block UI ${this.overlayBlocked ? 'enabled' : 'disabled'}`);
  }
  
  toggleInteractiveBlock() {
    this.interactiveBlocked = !this.interactiveBlocked;
    this.onAction(`Interactive block UI ${this.interactiveBlocked ? 'enabled' : 'disabled'}`);
  }
  
  setRandomMessage() {
    const messages = [
      'Loading...',
      'Processing...',
      'Saving...',
      'Uploading...',
      'Connecting...',
      'Validating...',
      'Generating...',
      'Synchronizing...'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    this.interactiveMessage = randomMessage;
    this.onAction(`Message changed to: "${randomMessage}"`);
  }
  
  toggleSpinner() {
    this.interactiveShowSpinner = !this.interactiveShowSpinner;
    this.onAction(`Spinner ${this.interactiveShowSpinner ? 'enabled' : 'disabled'}`);
  }
  
  setRandomOverlayStyle() {
    const styles = [
      { background: 'rgba(59, 130, 246, 0.8)' },
      { background: 'rgba(16, 185, 129, 0.8)' },
      { background: 'rgba(139, 92, 246, 0.8)' },
      { background: 'rgba(245, 158, 11, 0.8)' },
      { background: 'rgba(239, 68, 68, 0.8)' }
    ];
    this.interactiveOverlayStyle = styles[Math.floor(Math.random() * styles.length)];
    this.onAction('Random overlay style applied');
  }
  
  resetToDefaults() {
    this.interactiveBlocked = false;
    this.interactiveMessage = 'Please wait...';
    this.interactiveShowSpinner = true;
    this.interactiveOverlayStyle = {};
    this.interactiveOverlayClass = '';
    this.onAction('Reset to default values');
  }
}
