import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorPicker } from '@synerity/ui';

@Component({
  selector: 'app-su-color-picker-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, ColorPicker],
  templateUrl: './su-color-picker-demo.html',
  styleUrl: './su-color-picker-demo.scss'
})
export class SuColorPickerDemo {
  // Basic color picker states
  basicColor = '#3b82f6';
  disabledColor = '#10b981';
  readonlyColor = '#f59e0b';

  // Size variants
  smallColor = '#ef4444';
  mediumColor = '#8b5cf6';
  largeColor = '#06b6d4';

  // Format variants
  hexColor = '#3b82f6';
  rgbColor = 'rgb(59, 130, 246)';
  hslColor = 'hsl(217, 91%, 60%)';

  // Inline variants
  inlineColor = '#10b981';
  inlineDisabled = '#6b7280';

  // Theme colors
  primaryColor = '#3b82f6';
  secondaryColor = '#6b7280';
  successColor = '#10b981';
  warningColor = '#f59e0b';
  dangerColor = '#ef4444';
  infoColor = '#06b6d4';

  // Form integration
  formData = {
    brandPrimary: '#3b82f6',
    brandSecondary: '#6b7280',
    accentColor: '#10b981',
    textColor: '#1f2937',
    backgroundColor: '#ffffff'
  };

  // Preset colors
  presetColors = [
    '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6',
    '#06b6d4', '#f97316', '#84cc16', '#ec4899', '#6366f1'
  ];

  // Size options
  sizeOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];
  selectedSize = 'medium';

  // Format options
  formatOptions = [
    { label: 'HEX', value: 'hex' },
    { label: 'RGB', value: 'rgb' },
    { label: 'HSL', value: 'hsl' }
  ];
  selectedFormat = 'hex';

  onColorChange(value: string, property: string): void {
    (this as any)[property] = value;
  }

  onFormColorChange(value: string, property: string): void {
    this.formData[property as keyof typeof this.formData] = value;
  }

  resetForm(): void {
    this.formData = {
      brandPrimary: '#3b82f6',
      brandSecondary: '#6b7280',
      accentColor: '#10b981',
      textColor: '#1f2937',
      backgroundColor: '#ffffff'
    };
  }

  setDefaultValues(): void {
    this.basicColor = '#3b82f6';
    this.disabledColor = '#10b981';
    this.readonlyColor = '#f59e0b';
    this.smallColor = '#ef4444';
    this.mediumColor = '#8b5cf6';
    this.largeColor = '#06b6d4';
    this.hexColor = '#3b82f6';
    this.rgbColor = 'rgb(59, 130, 246)';
    this.hslColor = 'hsl(217, 91%, 60%)';
    this.inlineColor = '#10b981';
    this.inlineDisabled = '#6b7280';
    this.primaryColor = '#3b82f6';
    this.secondaryColor = '#6b7280';
    this.successColor = '#10b981';
    this.warningColor = '#f59e0b';
    this.dangerColor = '#ef4444';
    this.infoColor = '#06b6d4';
  }

  getColorName(color: string): string {
    const colorNames: { [key: string]: string } = {
      '#3b82f6': 'Blue',
      '#10b981': 'Green',
      '#f59e0b': 'Yellow',
      '#ef4444': 'Red',
      '#8b5cf6': 'Purple',
      '#06b6d4': 'Cyan',
      '#f97316': 'Orange',
      '#84cc16': 'Lime',
      '#ec4899': 'Pink',
      '#6366f1': 'Indigo',
      '#6b7280': 'Gray',
      '#1f2937': 'Dark Gray',
      '#ffffff': 'White'
    };
    return colorNames[color] || 'Custom';
  }

  getColorPreview(color: string): string {
    return `background-color: ${color}`;
  }

  convertToHex(color: string): string {
    if (color.startsWith('#')) return color;
    if (color.startsWith('rgb')) {
      const matches = color.match(/\d+/g);
      if (matches) {
        const r = parseInt(matches[0]);
        const g = parseInt(matches[1]);
        const b = parseInt(matches[2]);
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
      }
    }
    if (color.startsWith('hsl')) {
      // Simple HSL to HEX conversion for demo purposes
      return '#3b82f6'; // Default fallback
    }
    return color;
  }

  getColorContrast(color: string): string {
    // Simple contrast calculation for demo
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#000000' : '#ffffff';
  }

  // Preset color selection
  selectPresetColor(color: string): void {
    this.basicColor = color;
  }
}