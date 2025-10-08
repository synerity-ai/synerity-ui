import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentExample } from '../../models/component.model';
import { ColorPicker } from '@synerity/ui';

@Component({
  selector: 'app-color-picker-demo',
  imports: [CommonModule, ColorPicker],
  templateUrl: './color-picker-demo.html',
  styleUrl: './color-picker-demo.scss'
})
export class ColorPickerDemo {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Demo data for different color picker examples
  selectedColor = '#3b82f6';
  selectedColorSmall = '#ef4444';
  selectedColorLarge = '#10b981';
  selectedColorDisabled = '#8b5cf6';
  selectedColorInline = '#f59e0b';
  selectedColorCustom = '#ec4899';
  selectedColorWithPresets = '#6366f1';

  // Color presets for custom examples
  customPresets = [
    '#ef4444', '#f97316', '#f59e0b', '#eab308',
    '#84cc16', '#22c55e', '#10b981', '#14b8a6',
    '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1',
    '#8b5cf6', '#a855f7', '#d946ef', '#ec4899'
  ];

  // Demo methods
  onColorChange(color: string): void {
    console.log('Color changed to:', color);
  }

  onColorSelect(color: string): void {
    console.log('Color selected:', color);
  }

  onSmallColorChange(color: string): void {
    this.selectedColorSmall = color;
    console.log('Small color picker changed to:', color);
  }

  onLargeColorChange(color: string): void {
    this.selectedColorLarge = color;
    console.log('Large color picker changed to:', color);
  }

  onInlineColorChange(color: string): void {
    this.selectedColorInline = color;
    console.log('Inline color picker changed to:', color);
  }

  onCustomColorChange(color: string): void {
    this.selectedColorCustom = color;
    console.log('Custom styled color picker changed to:', color);
  }

  onPresetColorChange(color: string): void {
    this.selectedColorWithPresets = color;
    console.log('Color with presets changed to:', color);
  }

  // Utility methods for color manipulation
  getColorName(color: string): string {
    const colorNames: { [key: string]: string } = {
      '#ef4444': 'Red',
      '#f97316': 'Orange',
      '#f59e0b': 'Amber',
      '#eab308': 'Yellow',
      '#84cc16': 'Lime',
      '#22c55e': 'Green',
      '#10b981': 'Emerald',
      '#14b8a6': 'Teal',
      '#06b6d4': 'Cyan',
      '#0ea5e9': 'Sky',
      '#3b82f6': 'Blue',
      '#6366f1': 'Indigo',
      '#8b5cf6': 'Violet',
      '#a855f7': 'Purple',
      '#d946ef': 'Fuchsia',
      '#ec4899': 'Pink'
    };
    return colorNames[color] || 'Custom';
  }

  getContrastColor(hex: string): string {
    // Convert hex to RGB
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    return luminance > 0.5 ? '#000000' : '#ffffff';
  }

  hexToRgb(hex: string): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }

  saveColors(): void {
    console.log('Saving colors:', {
      primary: this.selectedColor,
      secondary: this.selectedColorCustom
    });
    alert('Colors saved!');
  }

  resetColors(): void {
    this.selectedColor = '#3b82f6';
    this.selectedColorCustom = '#ec4899';
    console.log('Colors reset');
  }
}
