import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpeedDial } from '@synerity/ui';

@Component({
  selector: 'app-su-speed-dial-demo',
  imports: [CommonModule, FormsModule, SpeedDial],
  templateUrl: './su-speed-dial-demo.html',
  styleUrl: './su-speed-dial-demo.scss'
})
export class SuSpeedDialDemo {
  // Speed dial configurations
  speedDialConfigs = [
    {
      id: 'basic',
      direction: 'up' as const,
      buttonIcon: '+',
      buttonLabel: '',
      items: [
        { label: 'Edit', icon: '✏️', command: () => console.log('Edit clicked') },
        { label: 'Share', icon: '📤', command: () => console.log('Share clicked') },
        { label: 'Delete', icon: '🗑️', command: () => console.log('Delete clicked') }
      ]
    },
    {
      id: 'directions',
      direction: 'down' as const,
      buttonIcon: '⚙️',
      buttonLabel: '',
      items: [
        { label: 'Settings', icon: '⚙️', command: () => console.log('Settings clicked') },
        { label: 'Profile', icon: '👤', command: () => console.log('Profile clicked') },
        { label: 'Help', icon: '❓', command: () => console.log('Help clicked') }
      ]
    }
  ];

  // Direction options
  directions = [
    { value: 'up', label: 'Up' },
    { value: 'down', label: 'Down' },
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' }
  ];

  // Size options
  sizes = [
    { value: 'small', label: 'Small' },
    { value: 'normal', label: 'Normal' },
    { value: 'large', label: 'Large' }
  ];

  // Color options
  colors = [
    { value: '', label: 'Default' },
    { value: 'primary', label: 'Primary' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'error', label: 'Error' }
  ];

  selectedDirection: 'up' | 'down' | 'left' | 'right' = 'up';
  selectedSize = 'normal';
  selectedColor = '';
  disabled = false;
  buttonIcon = '+';
  buttonLabel = '';

  // Speed dial items
  speedDialItems = [
    { label: 'Edit', icon: '✏️', command: () => this.onItemClick('Edit') },
    { label: 'Share', icon: '📤', command: () => this.onItemClick('Share') },
    { label: 'Delete', icon: '🗑️', command: () => this.onItemClick('Delete') },
    { label: 'Settings', icon: '⚙️', command: () => this.onItemClick('Settings') }
  ];

  // Event tracking
  itemClickCount = 0;
  lastClickedItem = '';

  // Event handlers
  onItemClick(item: string): void {
    this.itemClickCount++;
    this.lastClickedItem = item;
    console.log('Speed dial item clicked:', item);
  }

  onSpeedDialItemClick(item: any): void {
    this.onItemClick(item.label || 'Unknown');
  }

  // Get speed dial class
  getSpeedDialClass(): string {
    let classes = 'sui-speed-dial';
    
    if (this.selectedSize !== 'normal') {
      classes += ` sui-speed-dial--${this.selectedSize}`;
    }
    
    if (this.selectedColor) {
      classes += ` sui-speed-dial--${this.selectedColor}`;
    }
    
    return classes;
  }

  // Get speed dial style
  getSpeedDialStyle(): any {
    return {};
  }

  // Reset counters
  resetCounters(): void {
    this.itemClickCount = 0;
    this.lastClickedItem = '';
  }

  // Get configuration description
  getConfigDescription(): string {
    let description = `Direction: ${this.selectedDirection}`;
    description += ` • Size: ${this.selectedSize}`;
    description += ` • Color: ${this.selectedColor || 'Default'}`;
    description += ` • Disabled: ${this.disabled ? 'Yes' : 'No'}`;
    return description;
  }

  // Sample speed dial items for different use cases
  getActionItems() {
    return [
      { label: 'Edit', icon: '✏️', command: () => this.onItemClick('Edit') },
      { label: 'Share', icon: '📤', command: () => this.onItemClick('Share') },
      { label: 'Delete', icon: '🗑️', command: () => this.onItemClick('Delete') }
    ];
  }

  getNavigationItems() {
    return [
      { label: 'Home', icon: '🏠', command: () => this.onItemClick('Home') },
      { label: 'Profile', icon: '👤', command: () => this.onItemClick('Profile') },
      { label: 'Settings', icon: '⚙️', command: () => this.onItemClick('Settings') }
    ];
  }

  getSocialItems() {
    return [
      { label: 'Facebook', icon: '📘', command: () => this.onItemClick('Facebook') },
      { label: 'Twitter', icon: '🐦', command: () => this.onItemClick('Twitter') },
      { label: 'LinkedIn', icon: '💼', command: () => this.onItemClick('LinkedIn') }
    ];
  }

  getDocumentItems() {
    return [
      { label: 'Edit', icon: '✏️', command: () => this.onItemClick('Edit Document') },
      { label: 'Share', icon: '📤', command: () => this.onItemClick('Share Document') },
      { label: 'Print', icon: '🖨️', command: () => this.onItemClick('Print Document') },
      { label: 'Download', icon: '💾', command: () => this.onItemClick('Download Document') }
    ];
  }

  getShareItems() {
    return [
      { label: 'Facebook', icon: '📘', command: () => this.onItemClick('Share to Facebook') },
      { label: 'Twitter', icon: '🐦', command: () => this.onItemClick('Share to Twitter') },
      { label: 'LinkedIn', icon: '💼', command: () => this.onItemClick('Share to LinkedIn') },
      { label: 'WhatsApp', icon: '💬', command: () => this.onItemClick('Share to WhatsApp') }
    ];
  }

  getUserActionItems() {
    return [
      { label: 'Profile', icon: '👤', command: () => this.onItemClick('View Profile') },
      { label: 'Settings', icon: '⚙️', command: () => this.onItemClick('Open Settings') },
      { label: 'Help', icon: '❓', command: () => this.onItemClick('Get Help') },
      { label: 'Logout', icon: '🚪', command: () => this.onItemClick('Logout') }
    ];
  }

  getMediaItems() {
    return [
      { label: 'Play', icon: '▶️', command: () => this.onItemClick('Play Media') },
      { label: 'Pause', icon: '⏸️', command: () => this.onItemClick('Pause Media') },
      { label: 'Stop', icon: '⏹️', command: () => this.onItemClick('Stop Media') },
      { label: 'Volume', icon: '🔊', command: () => this.onItemClick('Adjust Volume') }
    ];
  }
}
