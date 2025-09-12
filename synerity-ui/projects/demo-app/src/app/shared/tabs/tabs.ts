import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  imports: [CommonModule],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss'
})
export class Tabs {
  @Input() activeTab: string = 'demo';
  @Output() tabChange = new EventEmitter<string>();

  tabs = [
    { id: 'demo', label: 'Demo', icon: '🎮' },
    { id: 'usage', label: 'How to Use', icon: '📖' },
    { id: 'docs', label: 'Documentation', icon: '📚' }
  ];

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
    this.tabChange.emit(tabId);
  }
}
