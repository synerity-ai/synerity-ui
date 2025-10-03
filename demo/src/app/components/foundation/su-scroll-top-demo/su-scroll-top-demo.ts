import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollTop } from '@synerity/ui';

@Component({
  selector: 'app-su-scroll-top-demo',
  imports: [CommonModule, FormsModule, ScrollTop],
  templateUrl: './su-scroll-top-demo.html',
  styleUrl: './su-scroll-top-demo.scss'
})
export class SuScrollTopDemo {
  // Scroll top configurations
  scrollTopConfigs = [
    { id: 'basic', threshold: 400, icon: '↑', behavior: 'smooth' as 'smooth' | 'auto' },
    { id: 'custom', threshold: 200, icon: '🔝', behavior: 'auto' as 'smooth' | 'auto' }
  ];

  // Threshold options
  thresholds = [
    { value: 100, label: '100px' },
    { value: 200, label: '200px' },
    { value: 400, label: '400px (Default)' },
    { value: 600, label: '600px' },
    { value: 800, label: '800px' }
  ];

  // Icon options
  icons = [
    { value: '↑', label: 'Arrow Up' },
    { value: '🔝', label: 'Top Emoji' },
    { value: '^', label: 'Caret' },
    { value: '▲', label: 'Triangle' },
    { value: '↑↑', label: 'Double Arrow' }
  ];

  // Behavior options
  behaviors = [
    { value: 'smooth', label: 'Smooth' },
    { value: 'auto', label: 'Instant' }
  ];

  // Style options
  styles = [
    { value: '', label: 'Default' },
    { value: 'sui-scroll-top--primary', label: 'Primary' },
    { value: 'sui-scroll-top--success', label: 'Success' },
    { value: 'sui-scroll-top--warning', label: 'Warning' },
    { value: 'sui-scroll-top--error', label: 'Error' },
    { value: 'sui-scroll-top--info', label: 'Info' }
  ];

  // Size options
  sizes = [
    { value: '', label: 'Normal' },
    { value: 'sui-scroll-top--small', label: 'Small' },
    { value: 'sui-scroll-top--large', label: 'Large' }
  ];

  // Position options
  positions = [
    { value: '', label: 'Bottom Right (Default)' },
    { value: 'sui-scroll-top--bottom-left', label: 'Bottom Left' },
    { value: 'sui-scroll-top--bottom-center', label: 'Bottom Center' }
  ];

  // Shape options
  shapes = [
    { value: 'sui-scroll-top--rounded', label: 'Rounded (Default)' },
    { value: 'sui-scroll-top--square', label: 'Square' }
  ];

  selectedThreshold = 400;
  selectedIcon = '↑';
  selectedBehavior: 'smooth' | 'auto' = 'smooth';
  selectedStyle = '';
  selectedSize = '';
  selectedPosition = '';
  selectedShape = 'sui-scroll-top--rounded';

  // Event tracking
  scrollTopCount = 0;
  lastScrollTopTime = '';

  // Event handlers
  onScrollTopClick(): void {
    this.scrollTopCount++;
    this.lastScrollTopTime = new Date().toLocaleTimeString();
    console.log('Scroll to top triggered');
  }

  // Get scroll top class
  getScrollTopClass(): string {
    let classes = 'sui-scroll-top';

    if (this.selectedStyle) {
      classes += ` ${this.selectedStyle}`;
    }

    if (this.selectedSize) {
      classes += ` ${this.selectedSize}`;
    }

    if (this.selectedPosition) {
      classes += ` ${this.selectedPosition}`;
    }

    if (this.selectedShape) {
      classes += ` ${this.selectedShape}`;
    }

    return classes;
  }

  // Get scroll top style
  getScrollTopStyle(): any {
    return {};
  }

  // Reset counters
  resetCounters(): void {
    this.scrollTopCount = 0;
    this.lastScrollTopTime = '';
  }

  // Get configuration description
  getConfigDescription(): string {
    let description = `Threshold: ${this.selectedThreshold}px`;
    description += ` • Icon: ${this.selectedIcon}`;
    description += ` • Behavior: ${this.selectedBehavior}`;
    description += ` • Style: ${this.selectedStyle || 'Default'}`;
    description += ` • Size: ${this.selectedSize || 'Normal'}`;
    description += ` • Position: ${this.selectedPosition || 'Bottom Right'}`;
    return description;
  }

  // Sample scroll top variants
  getSampleVariants() {
    return [
      { threshold: 200, icon: '↑', style: 'sui-scroll-top--primary', label: 'Primary' },
      { threshold: 300, icon: '🔝', style: 'sui-scroll-top--success', label: 'Success' },
      { threshold: 400, icon: '▲', style: 'sui-scroll-top--warning', label: 'Warning' },
      { threshold: 500, icon: '^', style: 'sui-scroll-top--error', label: 'Error' }
    ];
  }

  // Generate sample content for scrolling
  generateSampleContent(): string[] {
    const content = [];
    for (let i = 1; i <= 50; i++) {
      content.push(`This is sample content item ${i}. Scroll down to see the scroll-to-top button appear.`);
    }
    return content;
  }
}
