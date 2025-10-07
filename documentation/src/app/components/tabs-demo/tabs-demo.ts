import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-tabs-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Tabs],
  templateUrl: './tabs-demo.html',
  styleUrls: ['./tabs-demo.scss']
})
export class TabsDemoComponent {
  @Input() currentExample: ComponentExample = { name: '', code: '', description: '' };
  // Basic tabs example
  basicTabs: Array<{ 
    header: string; 
    content: string; 
  }> = [
    { header: 'Home', content: 'Welcome to the home page!' },
    { header: 'About', content: 'Learn more about our company.' },
    { header: 'Contact', content: 'Get in touch with us.' }
  ];
  basicActiveIndex = 0;

  // Tabs with icons
  iconTabs: Array<{ 
    header: string; 
    icon: string; 
    content: string; 
  }> = [
    { header: 'Dashboard', icon: '📊', content: 'Your dashboard overview.' },
    { header: 'Analytics', icon: '📈', content: 'Detailed analytics and reports.' },
    { header: 'Settings', icon: '⚙️', content: 'Configure your preferences.' }
  ];
  iconActiveIndex = 0;

  // Closable tabs
  closableTabs: Array<{ 
    header: string; 
    content: string; 
    closable: boolean;
  }> = [
    { header: 'Tab 1', content: 'This is the first tab.', closable: true },
    { header: 'Tab 2', content: 'This is the second tab.', closable: true },
    { header: 'Tab 3', content: 'This is the third tab.', closable: true }
  ];
  closableActiveIndex = 0;

  // Disabled tabs
  disabledTabs: Array<{ 
    header: string; 
    content: string; 
    disabled?: boolean;
  }> = [
    { header: 'Active Tab', content: 'This tab is active and clickable.' },
    { header: 'Disabled Tab', content: 'This tab is disabled.', disabled: true },
    { header: 'Another Active', content: 'This tab is also active.' }
  ];
  disabledActiveIndex = 0;

  // Different orientations
  leftTabs: Array<{ 
    header: string; 
    content: string; 
  }> = [
    { header: 'Profile', content: 'Manage your profile settings.' },
    { header: 'Security', content: 'Update your security preferences.' },
    { header: 'Notifications', content: 'Configure notification settings.' }
  ];
  leftActiveIndex = 0;

  rightTabs: Array<{ 
    header: string; 
    content: string; 
  }> = [
    { header: 'Projects', content: 'View and manage your projects.' },
    { header: 'Tasks', content: 'Track your current tasks.' },
    { header: 'Team', content: 'Manage your team members.' }
  ];
  rightActiveIndex = 0;

  // Dynamic tabs
  dynamicTabs: Array<{ 
    header: string; 
    content: string; 
    closable?: boolean;
  }> = [
    { header: 'Initial Tab', content: 'This is the initial tab.' }
  ];
  dynamicActiveIndex = 0;
  newTabCounter = 2;

  // Tab change handlers
  onBasicTabChange(index: number): void {
    this.basicActiveIndex = index;
  }

  onIconTabChange(index: number): void {
    this.iconActiveIndex = index;
  }

  onClosableTabChange(index: number): void {
    this.closableActiveIndex = index;
  }

  onDisabledTabChange(index: number): void {
    this.disabledActiveIndex = index;
  }

  onLeftTabChange(index: number): void {
    this.leftActiveIndex = index;
  }

  onRightTabChange(index: number): void {
    this.rightActiveIndex = index;
  }

  onDynamicTabChange(index: number): void {
    this.dynamicActiveIndex = index;
  }

  // Tab close handlers
  onClosableTabClose(index: number): void {
    console.log('Closing tab at index:', index);
  }

  onDynamicTabClose(index: number): void {
    console.log('Closing dynamic tab at index:', index);
  }

  // Dynamic tab management
  addNewTab(): void {
    this.dynamicTabs.push({
      header: `Tab ${this.newTabCounter}`,
      content: `This is dynamically added tab number ${this.newTabCounter}.`,
      closable: true
    });
    this.newTabCounter++;
    this.dynamicActiveIndex = this.dynamicTabs.length - 1;
  }

  removeLastTab(): void {
    if (this.dynamicTabs.length > 1) {
      this.dynamicTabs.pop();
      if (this.dynamicActiveIndex >= this.dynamicTabs.length) {
        this.dynamicActiveIndex = this.dynamicTabs.length - 1;
      }
    }
  }
}