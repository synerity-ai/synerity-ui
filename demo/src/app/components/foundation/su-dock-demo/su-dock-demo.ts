import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DockItem {
  label: string;
  icon: string;
  command?: () => void;
  disabled?: boolean;
  tooltip?: string;
}

@Component({
  selector: 'app-su-dock-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './su-dock-demo.html',
  styleUrl: './su-dock-demo.scss'
})
export class SuDockDemo {
  // Sample dock items
  basicDockItems: DockItem[] = [
    { 
      label: 'Home', 
      icon: '🏠', 
      command: () => this.showMessage('Navigating to Home'),
      tooltip: 'Go to Home page'
    },
    { 
      label: 'Files', 
      icon: '📁', 
      command: () => this.showMessage('Opening File Manager'),
      tooltip: 'Open File Manager'
    },
    { 
      label: 'Settings', 
      icon: '⚙️', 
      command: () => this.showMessage('Opening Settings'),
      tooltip: 'Open Settings'
    },
    { 
      label: 'Help', 
      icon: '❓', 
      command: () => this.showMessage('Opening Help'),
      tooltip: 'Open Help'
    }
  ];

  appDockItems: DockItem[] = [
    { 
      label: 'Browser', 
      icon: '🌐', 
      command: () => this.showMessage('Launching Browser'),
      tooltip: 'Open Web Browser'
    },
    { 
      label: 'Terminal', 
      icon: '💻', 
      command: () => this.showMessage('Opening Terminal'),
      tooltip: 'Open Terminal'
    },
    { 
      label: 'Editor', 
      icon: '📝', 
      command: () => this.showMessage('Opening Code Editor'),
      tooltip: 'Open Code Editor'
    },
    { 
      label: 'Designer', 
      icon: '🎨', 
      command: () => this.showMessage('Opening Design Tool'),
      tooltip: 'Open Design Tool'
    },
    { 
      label: 'Database', 
      icon: '🗄️', 
      command: () => this.showMessage('Opening Database Tool'),
      tooltip: 'Open Database Tool'
    }
  ];

  mediaDockItems: DockItem[] = [
    { 
      label: 'Music', 
      icon: '🎵', 
      command: () => this.showMessage('Opening Music Player'),
      tooltip: 'Open Music Player'
    },
    { 
      label: 'Videos', 
      icon: '🎬', 
      command: () => this.showMessage('Opening Video Player'),
      tooltip: 'Open Video Player'
    },
    { 
      label: 'Photos', 
      icon: '📸', 
      command: () => this.showMessage('Opening Photo Gallery'),
      tooltip: 'Open Photo Gallery'
    },
    { 
      label: 'Camera', 
      icon: '📷', 
      command: () => this.showMessage('Opening Camera'),
      tooltip: 'Open Camera'
    }
  ];

  // Demo properties
  selectedPosition = 'bottom';
  selectedSize = 'md';
  selectedStyle = 'default';
  showLabels = true;
  disabled = false;

  // Available options for demo controls
  positions = [
    { value: 'bottom', label: 'Bottom' },
    { value: 'top', label: 'Top' },
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' }
  ];

  sizes = [
    { value: 'sm', label: 'Small' },
    { value: 'md', label: 'Medium' },
    { value: 'lg', label: 'Large' }
  ];

  styles = [
    { value: 'default', label: 'Default' },
    { value: 'glass', label: 'Glass' },
    { value: 'solid', label: 'Solid' },
    { value: 'dark', label: 'Dark' }
  ];

  // Dock event handlers
  onItemClick(item: DockItem): void {
    console.log('Dock item clicked:', item.label);
    if (item.command) {
      item.command();
    }
  }

  private showMessage(message: string): void {
    alert(message);
  }

  // Template helpers
  getBasicDockItems(): DockItem[] {
    return this.basicDockItems;
  }

  getAppDockItems(): DockItem[] {
    return this.appDockItems;
  }

  getMediaDockItems(): DockItem[] {
    return this.mediaDockItems;
  }

  getDockClass(): string {
    let classes = 'sui-dock';
    
    // Position class
    classes += ` sui-dock-${this.selectedPosition}`;
    
    // Size class
    if (this.selectedSize !== 'md') {
      classes += ` sui-dock-${this.selectedSize}`;
    }
    
    // Style class
    if (this.selectedStyle !== 'default') {
      classes += ` sui-dock-${this.selectedStyle}`;
    }
    
    return classes;
  }

  getDockStyle(): any {
    return {
      position: 'fixed',
      zIndex: 40
    };
  }
}