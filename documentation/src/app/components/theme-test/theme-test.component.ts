import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '@synerity/ui';

@Component({
  selector: 'app-theme-test',
  imports: [CommonModule, Button],
  template: `
    <div class="p-6 space-y-6">
      <h2 class="text-2xl font-bold text-gray-900">Theme Inheritance Test</h2>
      <p class="text-gray-600">Testing if Synerity UI components inherit the app's new purple & blue Tailwind theme.</p>
      
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-800">Library Components with App Theme:</h3>
        
        <div class="flex flex-wrap gap-4">
          <sui-button 
            variant="primary"
            size="md">
            Primary Purple Theme
          </sui-button>
          
          <sui-button 
            variant="secondary"
            size="md">
            Secondary Blue Theme
          </sui-button>
          
          <sui-button 
            variant="outline"
            size="md">
            Outline Theme
          </sui-button>
        </div>
        
        <div class="mt-6 p-4 bg-gray-100 rounded-lg">
          <h4 class="font-medium text-gray-800 mb-2">Theme Customization Test:</h4>
          <p class="text-sm text-gray-600 mb-4">
            These buttons use the library's built-in variants (primary, secondary, outline, ghost, danger) 
            which should inherit the app's new purple & blue Tailwind theme colors.
          </p>
          
          <div class="flex gap-2">
            <sui-button variant="primary" size="sm">
              Small Primary
            </sui-button>
            <sui-button variant="secondary" size="sm">
              Small Secondary
            </sui-button>
            <sui-button variant="ghost" size="sm">
              Small Ghost
            </sui-button>
            <sui-button variant="danger" size="sm">
              Small Danger
            </sui-button>
          </div>
        </div>
        
        <div class="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
          <h4 class="font-medium text-primary-800 mb-2">Primary Color Palette Test (Purple):</h4>
          <div class="grid grid-cols-5 gap-2">
            <div class="h-8 bg-primary-100 rounded"></div>
            <div class="h-8 bg-primary-300 rounded"></div>
            <div class="h-8 bg-primary-500 rounded"></div>
            <div class="h-8 bg-primary-700 rounded"></div>
            <div class="h-8 bg-primary-900 rounded"></div>
          </div>
        </div>
        
        <div class="mt-4 p-4 bg-secondary-50 rounded-lg border border-secondary-200">
          <h4 class="font-medium text-secondary-800 mb-2">Secondary Color Palette Test (Blue):</h4>
          <div class="grid grid-cols-5 gap-2">
            <div class="h-8 bg-secondary-100 rounded"></div>
            <div class="h-8 bg-secondary-300 rounded"></div>
            <div class="h-8 bg-secondary-500 rounded"></div>
            <div class="h-8 bg-secondary-700 rounded"></div>
            <div class="h-8 bg-secondary-900 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ThemeTestComponent {}
