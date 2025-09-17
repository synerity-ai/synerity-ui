import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { ColorPicker as SuiColorPicker } from '../../../../../ui-lib/src/lib/color-picker/color-picker';

@Component({
  selector: 'app-colorpicker',
  imports: [CommonModule, FormsModule, Tabs, SuiColorPicker],
  templateUrl: './colorpicker.html',
  styleUrl: './colorpicker.scss'
})
export class Colorpicker {
  activeTab = 'demo';
  
  // Demo data
  basicColor = '#3B82F6';
  presetColors = [
    '#3B82F6', '#EF4444', '#10B981', '#F59E0B', 
    '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16'
  ];
  selectedPresetColor = '#3B82F6';
  hexColor = '#3B82F6';
  rgbColor = { r: 59, g: 130, b: 246 };
  rgbColorHex = '#3B82F6';
  hslColor = { h: 217, s: 91, l: 60 };
  
  // Advanced demo data
  gradientColor = '#3B82F6';
  alphaColor = 'rgba(59, 130, 246, 0.8)';
  disabledColor = '#6B7280';
  
  // Code visibility states
  showBasicColorPickerCode = false;
  showPresetColorsCode = false;
  showHexInputCode = false;
  showRgbInputCode = false;
  showHslInputCode = false;
  showAdvancedFeaturesCode = false;
  showColorPaletteCode = false;
  
  // Event handlers
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicColorPicker':
        this.showBasicColorPickerCode = !this.showBasicColorPickerCode;
        break;
      case 'presetColors':
        this.showPresetColorsCode = !this.showPresetColorsCode;
        break;
      case 'hexInput':
        this.showHexInputCode = !this.showHexInputCode;
        break;
      case 'rgbInput':
        this.showRgbInputCode = !this.showRgbInputCode;
        break;
      case 'hslInput':
        this.showHslInputCode = !this.showHslInputCode;
        break;
      case 'advancedFeatures':
        this.showAdvancedFeaturesCode = !this.showAdvancedFeaturesCode;
        break;
      case 'colorPalette':
        this.showColorPaletteCode = !this.showColorPaletteCode;
        break;
    }
  }
  
  onColorChange(color: string) {
    this.basicColor = color;
  }
  
  onPresetColorChange(color: string) {
    this.selectedPresetColor = color;
  }
  
  onHexColorChange(color: string) {
    this.hexColor = color;
  }
  
  onRgbColorChange(color: any) {
    this.rgbColor = color;
  }
  
  onRgbColorChangeFromPicker(hexColor: string) {
    this.rgbColorHex = hexColor;
    const rgb = this.hexToRgb(hexColor);
    if (rgb) {
      this.rgbColor = rgb;
    }
  }
  
  onHslColorChange(color: any) {
    this.hslColor = color;
  }
  
  onGradientColorChange(color: string) {
    this.gradientColor = color;
  }
  
  onAlphaColorChange(color: string) {
    this.alphaColor = color;
  }
  
  // Utility methods
  hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
  rgbToHex(r: number, g: number, b: number) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}
