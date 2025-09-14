import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorPicker as SuiColorPicker } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-colorpicker',
  imports: [CommonModule, FormsModule, SuiColorPicker, Tabs],
  templateUrl: './colorpicker.html',
  styleUrl: './colorpicker.scss'
})
export class ColorPickerPage {
  activeTab = 'demo';
  
  // Demo data
  basicColor = '#3B82F6';
  primaryColor = '#EF4444';
  secondaryColor = '#10B981';
  customColor = '#8B5CF6';
  disabledColor = '#6B7280';
  interactiveColor = '#F59E0B';
  interactiveFormat: 'hex' | 'rgb' | 'hsl' = 'hex';
  interactiveInline = false;
  interactiveDisabled = false;
  
  // Predefined color palette
  predefinedColors = [
    '#EF4444', '#F97316', '#F59E0B', '#EAB308', '#84CC16',
    '#22C55E', '#10B981', '#14B8A6', '#06B6D4', '#0EA5E9',
    '#3B82F6', '#6366F1', '#8B5CF6', '#A855F7', '#D946EF',
    '#EC4899', '#F43F5E', '#6B7280', '#374151', '#000000'
  ];
  
  // Code visibility states
  showBasicColorCode = false;
  showPrimaryColorCode = false;
  showSecondaryColorCode = false;
  showDisabledColorCode = false;
  showInlineColorCode = false;
  showInteractiveDemoCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicColor':
        this.showBasicColorCode = !this.showBasicColorCode;
        break;
      case 'primaryColor':
        this.showPrimaryColorCode = !this.showPrimaryColorCode;
        break;
      case 'secondaryColor':
        this.showSecondaryColorCode = !this.showSecondaryColorCode;
        break;
      case 'disabledColor':
        this.showDisabledColorCode = !this.showDisabledColorCode;
        break;
      case 'inlineColor':
        this.showInlineColorCode = !this.showInlineColorCode;
        break;
      case 'interactiveDemo':
        this.showInteractiveDemoCode = !this.showInteractiveDemoCode;
        break;
    }
  }
  
  onColorChange(value: string, field: string) {
    console.log(`${field} changed to:`, value);
  }
  
  // Helper methods
  getColorInfo(color: string): { hex: string; rgb: string; hsl: string; name: string } {
    const hex = color;
    const rgb = this.hexToRgb(color);
    const hsl = this.rgbToHsl(rgb);
    const name = this.getColorName(color);
    
    return {
      hex,
      rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
      hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
      name
    };
  }
  
  private hexToRgb(hex: string): { r: number; g: number; b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  }
  
  private rgbToHsl(rgb: { r: number; g: number; b: number }): { h: number; s: number; l: number } {
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  }
  
  private getColorName(hex: string): string {
    const colorNames: { [key: string]: string } = {
      '#EF4444': 'Red',
      '#F97316': 'Orange',
      '#F59E0B': 'Amber',
      '#EAB308': 'Yellow',
      '#84CC16': 'Lime',
      '#22C55E': 'Green',
      '#10B981': 'Emerald',
      '#14B8A6': 'Teal',
      '#06B6D4': 'Cyan',
      '#0EA5E9': 'Sky',
      '#3B82F6': 'Blue',
      '#6366F1': 'Indigo',
      '#8B5CF6': 'Violet',
      '#A855F7': 'Purple',
      '#D946EF': 'Fuchsia',
      '#EC4899': 'Pink',
      '#F43F5E': 'Rose',
      '#6B7280': 'Gray',
      '#374151': 'Dark Gray',
      '#000000': 'Black'
    };
    
    return colorNames[hex] || 'Custom';
  }
  
  // Quick color selection
  setColor(color: string) {
    this.interactiveColor = color;
  }
  
  // Random color generator
  generateRandomColor() {
    const colors = ['#EF4444', '#F97316', '#F59E0B', '#EAB308', '#84CC16', '#22C55E', '#10B981', '#14B8A6', '#06B6D4', '#0EA5E9', '#3B82F6', '#6366F1', '#8B5CF6', '#A855F7', '#D946EF', '#EC4899', '#F43F5E'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.interactiveColor = randomColor;
  }
}
