import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollPanel } from '@synerity/ui';

@Component({
  selector: 'app-su-scroll-panel-demo',
  imports: [CommonModule, FormsModule, ScrollPanel],
  templateUrl: './su-scroll-panel-demo.html',
  styleUrl: './su-scroll-panel-demo.scss'
})
export class SuScrollPanelDemo {
  // Scroll panel configurations
  scrollConfigs = [
    {
      id: 'basic',
      scrollHeight: '200px',
      scrollWidth: '100%',
      showScrollbars: true
    },
    {
      id: 'large',
      scrollHeight: '400px',
      scrollWidth: '100%',
      showScrollbars: true
    },
    {
      id: 'small',
      scrollHeight: '150px',
      scrollWidth: '100%',
      showScrollbars: true
    }
  ];

  // Size options
  sizes = [
    { value: 'small', label: 'Small (150px)' },
    { value: 'normal', label: 'Normal (200px)' },
    { value: 'large', label: 'Large (400px)' }
  ];

  // Color options
  colors = [
    { value: '', label: 'Default' },
    { value: 'primary', label: 'Primary' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'error', label: 'Error' }
  ];

  selectedSize = 'normal';
  selectedColor = '';
  showScrollbars = true;
  scrollHeight = '200px';

  // Event tracking
  scrollEvents: any[] = [];
  scrollCount = 0;

  // Event handlers
  onScrollEvent(event: any): void {
    this.scrollCount++;
    this.scrollEvents.unshift({
      timestamp: new Date().toLocaleTimeString(),
      scrollTop: event.scrollTop,
      scrollLeft: event.scrollLeft,
      scrollHeight: event.scrollHeight,
      scrollWidth: event.scrollWidth
    });
    
    // Keep only last 10 events
    if (this.scrollEvents.length > 10) {
      this.scrollEvents = this.scrollEvents.slice(0, 10);
    }
  }

  // Get scroll panel class
  getScrollPanelClass(): string {
    let classes = 'sui-scroll-panel';
    
    if (this.selectedSize !== 'normal') {
      classes += ` sui-scroll-panel--${this.selectedSize}`;
    }
    
    if (this.selectedColor) {
      classes += ` sui-scroll-panel--${this.selectedColor}`;
    }
    
    return classes;
  }

  // Get scroll panel style
  getScrollPanelStyle(): any {
    return {
      height: this.scrollHeight,
      width: '100%'
    };
  }

  // Update scroll height based on size
  updateScrollHeight(): void {
    switch (this.selectedSize) {
      case 'small':
        this.scrollHeight = '150px';
        break;
      case 'normal':
        this.scrollHeight = '200px';
        break;
      case 'large':
        this.scrollHeight = '400px';
        break;
    }
  }

  // Reset scroll events
  resetScrollEvents(): void {
    this.scrollEvents = [];
    this.scrollCount = 0;
  }

  // Get configuration description
  getConfigDescription(): string {
    let description = `Size: ${this.selectedSize}`;
    description += ` • Color: ${this.selectedColor || 'Default'}`;
    description += ` • Scrollbars: ${this.showScrollbars ? 'Yes' : 'No'}`;
    description += ` • Height: ${this.scrollHeight}`;
    return description;
  }

  // Sample content for different panels
  getSampleContent(): string {
    return `
      <h3 class="text-lg font-semibold mb-4">Sample Content</h3>
      <p class="mb-4">This is a scrollable panel with sample content. You can scroll through this content to test the scroll functionality.</p>
      <div class="space-y-4">
        <div class="p-4 bg-blue-50 rounded-lg">
          <h4 class="font-medium text-blue-900">Section 1</h4>
          <p class="text-blue-700">This is the first section of content in the scroll panel.</p>
        </div>
        <div class="p-4 bg-green-50 rounded-lg">
          <h4 class="font-medium text-green-900">Section 2</h4>
          <p class="text-green-700">This is the second section with different styling.</p>
        </div>
        <div class="p-4 bg-yellow-50 rounded-lg">
          <h4 class="font-medium text-yellow-900">Section 3</h4>
          <p class="text-yellow-700">This is the third section to demonstrate scrolling.</p>
        </div>
        <div class="p-4 bg-purple-50 rounded-lg">
          <h4 class="font-medium text-purple-900">Section 4</h4>
          <p class="text-purple-700">This is the fourth section with more content.</p>
        </div>
        <div class="p-4 bg-red-50 rounded-lg">
          <h4 class="font-medium text-red-900">Section 5</h4>
          <p class="text-red-700">This is the fifth section to test scrolling behavior.</p>
        </div>
        <div class="p-4 bg-indigo-50 rounded-lg">
          <h4 class="font-medium text-indigo-900">Section 6</h4>
          <p class="text-indigo-700">This is the sixth section with additional content.</p>
        </div>
        <div class="p-4 bg-pink-50 rounded-lg">
          <h4 class="font-medium text-pink-900">Section 7</h4>
          <p class="text-pink-700">This is the seventh section for scroll testing.</p>
        </div>
        <div class="p-4 bg-gray-50 rounded-lg">
          <h4 class="font-medium text-gray-900">Section 8</h4>
          <p class="text-gray-700">This is the eighth section with more content.</p>
        </div>
      </div>
    `;
  }
}
