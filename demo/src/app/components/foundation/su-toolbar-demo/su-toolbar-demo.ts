import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Toolbar } from '@synerity/ui';

@Component({
  selector: 'app-su-toolbar-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Toolbar],
  templateUrl: './su-toolbar-demo.html',
  styleUrl: './su-toolbar-demo.scss'
})
export class SuToolbarDemo {
  selectedOrientation: 'horizontal' | 'vertical' = 'horizontal';
  selectedVariant = 'default';
  selectedSize = 'default';

  orientations = [
    { value: 'horizontal', label: 'Horizontal' },
    { value: 'vertical', label: 'Vertical' }
  ];

  variants = [
    { value: 'default', label: 'Default' },
    { value: 'outlined', label: 'Outlined' },
    { value: 'filled', label: 'Filled' },
    { value: 'floating', label: 'Floating' },
    { value: 'flat', label: 'Flat' },
    { value: 'primary', label: 'Primary' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'error', label: 'Error' }
  ];

  sizes = [
    { value: 'default', label: 'Default' },
    { value: 'sm', label: 'Small' },
    { value: 'lg', label: 'Large' }
  ];

  // Basic toolbar items
  basicLeftItems = [
    { label: 'New', icon: '📄', command: () => this.showMessage('New document created') },
    { label: 'Open', icon: '📁', command: () => this.showMessage('Opening file...') },
    { separator: true },
    { label: 'Save', icon: '💾', command: () => this.showMessage('Document saved') }
  ];

  basicRightItems = [
    { label: 'Undo', icon: '↶', command: () => this.showMessage('Undo action') },
    { label: 'Redo', icon: '↷', command: () => this.showMessage('Redo action') },
    { separator: true },
    { label: 'Help', icon: '❓', command: () => this.showMessage('Help opened') }
  ];

  // Icon-only toolbar
  iconLeftItems = [
    { icon: '📄', command: () => this.showMessage('New') },
    { icon: '📁', command: () => this.showMessage('Open') },
    { icon: '💾', command: () => this.showMessage('Save') },
    { separator: true },
    { icon: '✂️', command: () => this.showMessage('Cut') },
    { icon: '📋', command: () => this.showMessage('Copy') },
    { icon: '📌', command: () => this.showMessage('Paste') }
  ];

  iconRightItems = [
    { icon: '🔍', command: () => this.showMessage('Search') },
    { icon: '⚙️', command: () => this.showMessage('Settings') },
    { separator: true },
    { icon: '👤', command: () => this.showMessage('Profile') }
  ];

  // Mixed content toolbar
  mixedLeftItems = [
    { label: 'File', icon: '📄' },
    { label: 'Edit', icon: '✏️' },
    { label: 'View', icon: '👁️' },
    { separator: true },
    { label: 'Tools', icon: '🔧' }
  ];

  mixedRightItems = [
    { icon: '🌙', command: () => this.showMessage('Dark mode toggled') },
    { icon: '🔔', command: () => this.showMessage('Notifications') },
    { separator: true },
    { label: 'Share', icon: '📤', command: () => this.showMessage('Sharing options') }
  ];

  // Disabled items toolbar
  disabledLeftItems = [
    { label: 'Available', icon: '✅', command: () => this.showMessage('Available action') },
    { label: 'Disabled', icon: '❌', disabled: true },
    { label: 'Another Available', icon: '✅', command: () => this.showMessage('Another action') }
  ];

  disabledRightItems = [
    { label: 'Active', icon: '🟢', command: () => this.showMessage('Active action') },
    { label: 'Inactive', icon: '🔴', disabled: true },
    { separator: true },
    { label: 'Final', icon: '🏁', command: () => this.showMessage('Final action') }
  ];

  // Custom toolbar with center content
  customLeftItems = [
    { label: 'Home', icon: '🏠', command: () => this.showMessage('Home') },
    { label: 'Back', icon: '⬅️', command: () => this.showMessage('Back') }
  ];

  customRightItems = [
    { label: 'Forward', icon: '➡️', command: () => this.showMessage('Forward') },
    { label: 'Refresh', icon: '🔄', command: () => this.showMessage('Refresh') }
  ];

  onItemClick(event: any): void {
    console.log('Toolbar item clicked:', event);
  }

  showMessage(message: string): void {
    alert(message);
  }

  getToolbarClass(): string {
    let classes = '';
    if (this.selectedVariant !== 'default') {
      classes += ` sui-toolbar-${this.selectedVariant}`;
    }
    if (this.selectedSize !== 'default') {
      classes += ` sui-toolbar-${this.selectedSize}`;
    }
    return classes.trim();
  }
}
