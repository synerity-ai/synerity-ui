import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '@synerity/ui';

@Component({
  selector: 'app-su-tabs-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Tabs],
  templateUrl: './su-tabs-demo.html',
  styleUrl: './su-tabs-demo.scss'
})
export class SuTabsDemo {
  // Basic tabs data
  basicTabs = [
    { header: 'Home', content: 'Welcome to the home tab! This is where you can find the main content.' },
    { header: 'Profile', content: 'Manage your profile settings, preferences, and account information here.' },
    { header: 'Settings', content: 'Configure your application settings and customize your experience.' }
  ];

  // Tabs with icons
  iconTabs = [
    { header: 'Dashboard', icon: '📊', content: 'Overview of your data and key metrics.' },
    { header: 'Analytics', icon: '📈', content: 'Detailed analytics and reporting features.' },
    { header: 'Reports', icon: '📋', content: 'Generate and view various reports.' }
  ];

  // Closable tabs
  closableTabs = [
    { header: 'Document 1', closable: true, content: 'This is the first document. You can close it using the X button.' },
    { header: 'Document 2', closable: true, content: 'This is the second document. It can also be closed.' },
    { header: 'Document 3', closable: true, content: 'This is the third document. All documents can be closed.' }
  ];

  // Disabled tabs
  disabledTabs = [
    { header: 'Available', content: 'This tab is available and can be selected.' },
    { header: 'Disabled', disabled: true, content: 'This tab is disabled and cannot be selected.' },
    { header: 'Another Available', content: 'This tab is also available for selection.' }
  ];

  // Current demo configurations
  currentActiveIndex = 0;
  currentOrientation: 'top' | 'bottom' | 'left' | 'right' = 'top';
  currentScrollable = false;

  // Event handlers
  onActiveIndexChange(index: number): void {
    console.log('Active tab changed to:', index);
    this.currentActiveIndex = index;
  }

  onTabClose(index: number): void {
    console.log('Tab closed at index:', index);
    // The tab is automatically removed from the array
  }

  // Orientation options - defined as property to avoid recreating on every change detection
  orientations = [
    { value: 'top', label: 'Top' },
    { value: 'bottom', label: 'Bottom' },
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' }
  ];

  // Dynamic tabs for interactive demo
  dynamicTabs = [
    { header: 'Tab 1', content: 'Content for tab 1. This demonstrates dynamic tab content.' },
    { header: 'Tab 2', content: 'Content for tab 2. Each tab can have different content.' },
    { header: 'Tab 3', content: 'Content for tab 3. Tabs can be configured dynamically.' }
  ];

  // Add new tab
  addNewTab(): void {
    const newTabNumber = this.dynamicTabs.length + 1;
    this.dynamicTabs.push({
      header: `Tab ${newTabNumber}`,
      content: `This is dynamically added tab ${newTabNumber}. You can add as many tabs as needed.`
    });
  }

  // Remove last tab
  removeLastTab(): void {
    if (this.dynamicTabs.length > 1) {
      this.dynamicTabs.pop();
      // Adjust active index if needed
      if (this.currentActiveIndex >= this.dynamicTabs.length) {
        this.currentActiveIndex = this.dynamicTabs.length - 1;
      }
    }
  }

  // Reset tabs
  resetTabs(): void {
    this.dynamicTabs = [
      { header: 'Tab 1', content: 'Content for tab 1.' },
      { header: 'Tab 2', content: 'Content for tab 2.' },
      { header: 'Tab 3', content: 'Content for tab 3.' }
    ];
    this.currentActiveIndex = 0;
  }

  // Get current tab content
  getCurrentTabContent(): string {
    return this.dynamicTabs[this.currentActiveIndex]?.content || 'No content available';
  }
}