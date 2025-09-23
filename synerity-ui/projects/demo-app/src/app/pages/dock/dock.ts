import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs as AppTabs } from '../../shared/tabs/tabs';
import { Dock as SuiDock } from 'ui-lib';

@Component({
  selector: 'app-dock',
  standalone: true,
  imports: [CommonModule, AppTabs, SuiDock],
  templateUrl: './dock.html',
  styleUrl: './dock.scss'
})
export class DockComponent {
  activeTab = 'demo';
  lastClickedItem: any = null;

  bottomDockItems = [
    { label: 'Home', icon: '🏠', command: () => this.executeAction('Home') },
    { label: 'Search', icon: '🔍', command: () => this.executeAction('Search') },
    { label: 'Settings', icon: '⚙️', command: () => this.executeAction('Settings') },
    { label: 'Profile', icon: '👤', command: () => this.executeAction('Profile') }
  ];

  topDockItems = [
    { label: 'File', icon: '📁', command: () => this.executeAction('File') },
    { label: 'Edit', icon: '✏️', command: () => this.executeAction('Edit') },
    { label: 'View', icon: '👁️', command: () => this.executeAction('View') },
    { label: 'Help', icon: '❓', command: () => this.executeAction('Help') }
  ];

  leftDockItems = [
    { label: 'Dashboard', icon: '📊', command: () => this.executeAction('Dashboard') },
    { label: 'Analytics', icon: '📈', command: () => this.executeAction('Analytics') },
    { label: 'Reports', icon: '📋', command: () => this.executeAction('Reports') },
    { label: 'Users', icon: '👥', command: () => this.executeAction('Users') }
  ];

  rightDockItems = [
    { label: 'Notifications', icon: '🔔', command: () => this.executeAction('Notifications') },
    { label: 'Messages', icon: '💬', command: () => this.executeAction('Messages') },
    { label: 'Calendar', icon: '📅', command: () => this.executeAction('Calendar') },
    { label: 'Tasks', icon: '✅', command: () => this.executeAction('Tasks') }
  ];

  disabledDockItems = [
    { label: 'Home', icon: '🏠', command: () => this.executeAction('Home') },
    { label: 'Search', icon: '🔍', disabled: true },
    { label: 'Settings', icon: '⚙️', command: () => this.executeAction('Settings') },
    { label: 'Profile', icon: '👤', disabled: true }
  ];

  // Code visibility toggles
  showBasicDockCode = false;
  showPositionsDockCode = false;
  showCustomDockCode = false;

  // Custom dock items for the third example
  customDockItems = [
    { label: 'Finder', icon: '📁', command: () => this.executeAction('Finder') },
    { label: 'Safari', icon: '🌐', command: () => this.executeAction('Safari') },
    { label: 'Mail', icon: '📧', command: () => this.executeAction('Mail') },
    { label: 'Photos', icon: '📷', command: () => this.executeAction('Photos') },
    { label: 'Music', icon: '🎵', command: () => this.executeAction('Music') }
  ];

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicDock':
        this.showBasicDockCode = !this.showBasicDockCode;
        break;
      case 'positionsDock':
        this.showPositionsDockCode = !this.showPositionsDockCode;
        break;
      case 'customDock':
        this.showCustomDockCode = !this.showCustomDockCode;
        break;
    }
  }

  onDockItemClick(item: any): void {
    this.lastClickedItem = item;
    console.log('Dock item clicked:', item);
  }

  executeAction(action: string): void {
    console.log(`${action} action executed`);
  }
}
