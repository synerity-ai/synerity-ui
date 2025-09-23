import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss'
})
export class Tabs {
  @Input() activeTab: string = 'demo';
  @Input() tabs: Array<{ id: string; label: string; icon: string }> = [
    { id: 'demo', label: 'Demo', icon: '🎮' },
    { id: 'usage', label: 'How to Use', icon: '📖' },
    { id: 'docs', label: 'Documentation', icon: '📚' }
  ];
  @Output() tabChange = new EventEmitter<string>();

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
    this.tabChange.emit(tabId);
  }
}
