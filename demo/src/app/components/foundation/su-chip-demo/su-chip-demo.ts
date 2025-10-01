import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chip } from '@synerity/ui';

@Component({
  selector: 'app-su-chip-demo',
  imports: [CommonModule, FormsModule, Chip],
  templateUrl: './su-chip-demo.html',
  styleUrl: './su-chip-demo.scss'
})
export class SuChipDemo {
  // Basic usage
  basicChips = [
    { label: 'Primary', class: 'sui-chip-primary' },
    { label: 'Success', class: 'sui-chip-success' },
    { label: 'Warning', class: 'sui-chip-warning' },
    { label: 'Danger', class: 'sui-chip-danger' },
    { label: 'Default' }
  ];

  // Chips with icons
  iconChips = [
    { label: 'Home', icon: '🏠' },
    { label: 'Settings', icon: '⚙️' },
    { label: 'Notifications', icon: '🔔' },
    { label: 'Profile', icon: '👤' }
  ];

  // Chips with images
  imageChips = [
    { label: 'John Doe', image: 'https://i.pravatar.cc/150?img=1' },
    { label: 'Jane Smith', image: 'https://i.pravatar.cc/150?img=5' },
    { label: 'Bob Johnson', image: 'https://i.pravatar.cc/150?img=3' }
  ];

  // Removable chips
  tags = [
    { id: 1, label: 'Angular' },
    { id: 2, label: 'TypeScript' },
    { id: 3, label: 'RxJS' },
    { id: 4, label: 'SCSS' }
  ];

  // Size variants
  sizes = [
    { label: 'Small', class: 'sui-chip-small' },
    { label: 'Default' },
    { label: 'Large', class: 'sui-chip-large' }
  ];

  // Interactive example
  currentColor = '';
  currentSize = '';
  currentIcon = '';
  currentImage = '';
  showRemoveButton = false;
  isDisabled = false;
  chipLabel = 'Interactive Chip';

  // Color options
  colorOptions = [
    { value: '', label: 'Default', class: '' },
    { value: 'primary', label: 'Primary', class: 'sui-chip-primary' },
    { value: 'success', label: 'Success', class: 'sui-chip-success' },
    { value: 'warning', label: 'Warning', class: 'sui-chip-warning' },
    { value: 'danger', label: 'Danger', class: 'sui-chip-danger' }
  ];

  // Size options
  sizeOptions = [
    { value: '', label: 'Default', class: '' },
    { value: 'small', label: 'Small', class: 'sui-chip-small' },
    { value: 'large', label: 'Large', class: 'sui-chip-large' }
  ];

  // Icon options
  iconOptions = [
    { value: '', label: 'No Icon' },
    { value: '⭐', label: 'Star' },
    { value: '💡', label: 'Bulb' },
    { value: '🔥', label: 'Fire' },
    { value: '✨', label: 'Sparkles' }
  ];

  removeTag(id: number): void {
    this.tags = this.tags.filter(tag => tag.id !== id);
  }

  handleRemove(): void {
    alert('Chip removed!');
  }

  getChipClass(): string {
    const classes = [];
    if (this.currentColor) {
      const colorOption = this.colorOptions.find(opt => opt.value === this.currentColor);
      if (colorOption?.class) {
        classes.push(colorOption.class);
      }
    }
    if (this.currentSize) {
      const sizeOption = this.sizeOptions.find(opt => opt.value === this.currentSize);
      if (sizeOption?.class) {
        classes.push(sizeOption.class);
      }
    }
    return classes.join(' ');
  }

  getCodeExample(): string {
    const attrs = [`label="${this.chipLabel}"`];
    
    if (this.currentIcon) {
      attrs.push(`icon="${this.currentIcon}"`);
    }
    
    if (this.currentImage) {
      attrs.push(`image="${this.currentImage}"`);
    }
    
    if (this.showRemoveButton) {
      attrs.push(`[removable]="true"`);
      attrs.push(`(onRemove)="handleRemove()"`);
    }
    
    if (this.isDisabled) {
      attrs.push(`[disabled]="true"`);
    }
    
    const styleClass = this.getChipClass();
    if (styleClass) {
      attrs.push(`styleClass="${styleClass}"`);
    }
    
    return `<sui-chip ${attrs.join(' ')}></sui-chip>`;
  }
}
