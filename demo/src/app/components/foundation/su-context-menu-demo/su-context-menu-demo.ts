import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContextMenuItem {
  label?: string;
  icon?: string;
  command?: () => void;
  disabled?: boolean;
  separator?: boolean;
  items?: ContextMenuItem[];
}

@Component({
  selector: 'app-su-context-menu-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './su-context-menu-demo.html',
  styleUrl: './su-context-menu-demo.scss'
})
export class SuContextMenuDemo {
  // Sample data for context menus
  basicMenuItems: ContextMenuItem[] = [
    { label: 'Copy', icon: '📋' },
    { label: 'Paste', icon: '📄' },
    { label: 'Cut', icon: '✂️' },
    { separator: true },
    { label: 'Delete', icon: '🗑️', disabled: true }
  ];

  fileMenuItems: ContextMenuItem[] = [
    { label: 'New File', icon: '📄', command: () => this.showMessage('New File created') },
    { label: 'New Folder', icon: '📁', command: () => this.showMessage('New Folder created') },
    { separator: true },
    { 
      label: 'Open With', 
      icon: '🔧',
      items: [
        { label: 'Text Editor', icon: '📝', command: () => this.showMessage('Opened with Text Editor') },
        { label: 'VS Code', icon: '💻', command: () => this.showMessage('Opened with VS Code') },
        { label: 'Sublime Text', icon: '⚡', command: () => this.showMessage('Opened with Sublime Text') }
      ]
    },
    { separator: true },
    { label: 'Properties', icon: '⚙️', command: () => this.showMessage('Properties opened') }
  ];

  imageMenuItems: ContextMenuItem[] = [
    { label: 'View', icon: '👁️', command: () => this.showMessage('Image viewed') },
    { label: 'Edit', icon: '✏️', command: () => this.showMessage('Image edit mode') },
    { separator: true },
    { 
      label: 'Resize', 
      icon: '📏',
      items: [
        { label: '50%', command: () => this.showMessage('Resized to 50%') },
        { label: '75%', command: () => this.showMessage('Resized to 75%') },
        { label: '100%', command: () => this.showMessage('Resized to 100%') },
        { label: '150%', command: () => this.showMessage('Resized to 150%') }
      ]
    },
    { 
      label: 'Rotate', 
      icon: '🔄',
      items: [
        { label: '90° Clockwise', command: () => this.showMessage('Rotated 90° clockwise') },
        { label: '90° Counter-clockwise', command: () => this.showMessage('Rotated 90° counter-clockwise') },
        { label: '180°', command: () => this.showMessage('Rotated 180°') }
      ]
    },
    { separator: true },
    { label: 'Set as Wallpaper', icon: '🖼️', command: () => this.showMessage('Set as wallpaper') },
    { label: 'Delete', icon: '🗑️', command: () => this.showMessage('Image deleted') }
  ];

  // Demo properties
  selectedPosition = 'bottom';
  showIcons = true;
  disabled = false;

  // Available options for demo controls
  positions = [
    { value: 'bottom', label: 'Bottom' },
    { value: 'top', label: 'Top' },
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' }
  ];

  // Context menu event handlers
  onContextMenu(event: MouseEvent, items: ContextMenuItem[]): void {
    event.preventDefault();
    // In a real implementation, you would show the context menu at the cursor position
    console.log('Context menu triggered at:', event.clientX, event.clientY);
    console.log('Menu items:', items);
  }

  onItemClick(item: ContextMenuItem): void {
    console.log('Context menu item clicked:', item.label);
    if (item.command) {
      item.command();
    }
  }

  private showMessage(message: string): void {
    alert(message);
  }

  // Template helpers
  getMenuItems(): ContextMenuItem[] {
    return this.basicMenuItems;
  }

  getFileMenuItems(): ContextMenuItem[] {
    return this.fileMenuItems;
  }

  getImageMenuItems(): ContextMenuItem[] {
    return this.imageMenuItems;
  }
}