import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import ColorPicker component from Synerity UI
import { ColorPicker } from '@synerity/ui';

@Component({
  selector: 'app-rapid-color-picker',
  imports: [
    CommonModule,
    FormsModule,
    ColorPicker
  ],
  templateUrl: './rapid-color-picker.html',
  styleUrl: './rapid-color-picker.scss'
})
export class RapidColorPicker {
  title = 'Synerity UI ColorPicker Demo';
  
  // Basic color picker states
  selectedColor = '#3b82f6';
  disabledColor = '#6b7280';
  
  // Form integration
  formData = {
    primaryColor: '#3b82f6',
    secondaryColor: '#6b7280',
    accentColor: '#10b981',
    backgroundColor: '#ffffff',
    textColor: '#1f2937'
  };
  
  // Color picker variants
  colorVariants = [
    { name: 'primary', label: 'Primary Color', color: '#3b82f6' },
    { name: 'secondary', label: 'Secondary Color', color: '#6b7280' },
    { name: 'success', label: 'Success Color', color: '#10b981' },
    { name: 'warning', label: 'Warning Color', color: '#f59e0b' },
    { name: 'danger', label: 'Danger Color', color: '#ef4444' },
    { name: 'info', label: 'Info Color', color: '#06b6d4' }
  ];
  
  // Size variants
  sizeOptions = [
    { value: 'small', label: 'Small', size: 'sm' },
    { value: 'medium', label: 'Medium', size: 'md' },
    { value: 'large', label: 'Large', size: 'lg' }
  ];
  selectedSize = 'medium';
  
  // Format options
  formatOptions = [
    { value: 'hex', label: 'HEX' },
    { value: 'rgb', label: 'RGB' },
    { value: 'hsl', label: 'HSL' }
  ];
  selectedFormat = 'hex';
  
  // Preset colors
  presetColors = [
    '#3b82f6', '#6b7280', '#10b981', '#f59e0b', '#ef4444', '#06b6d4',
    '#8b5cf6', '#ec4899', '#f97316', '#84cc16', '#06b6d4', '#6366f1'
  ];
  
  // Theme colors
  themeColors = {
    primary: '#3b82f6',
    secondary: '#6b7280',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#06b6d4'
  };
  
  onColorChange(event: any, type: string) {
    console.log(`${type} color changed to:`, event);
  }
  
  onPrimaryColorChange(event: any) {
    this.formData.primaryColor = event.value;
    console.log('Primary color changed to:', event.value);
  }
  
  onSecondaryColorChange(event: any) {
    this.formData.secondaryColor = event.value;
    console.log('Secondary color changed to:', event.value);
  }
  
  onAccentColorChange(event: any) {
    this.formData.accentColor = event.value;
    console.log('Accent color changed to:', event.value);
  }
  
  onBackgroundColorChange(event: any) {
    this.formData.backgroundColor = event.value;
    console.log('Background color changed to:', event.value);
  }
  
  onTextColorChange(event: any) {
    this.formData.textColor = event.value;
    console.log('Text color changed to:', event.value);
  }
  
  resetColors() {
    this.formData = {
      primaryColor: '#3b82f6',
      secondaryColor: '#6b7280',
      accentColor: '#10b981',
      backgroundColor: '#ffffff',
      textColor: '#1f2937'
    };
    this.selectedColor = '#3b82f6';
  }
  
  getColorPreview(hexColor: string): string {
    return `background-color: ${hexColor}`;
  }
}
