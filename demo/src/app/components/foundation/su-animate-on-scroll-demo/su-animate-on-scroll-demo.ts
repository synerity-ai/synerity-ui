import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimateOnScroll } from '@synerity/ui';

@Component({
  selector: 'app-su-animate-on-scroll-demo',
  imports: [CommonModule, FormsModule, AnimateOnScroll],
  templateUrl: './su-animate-on-scroll-demo.html',
  styleUrl: './su-animate-on-scroll-demo.scss'
})
export class SuAnimateOnScrollDemo {
  // Animation options
  animations = [
    { value: 'fadeInUp', label: 'Fade In Up' },
    { value: 'fadeInDown', label: 'Fade In Down' },
    { value: 'fadeInLeft', label: 'Fade In Left' },
    { value: 'fadeInRight', label: 'Fade In Right' },
    { value: 'fadeIn', label: 'Fade In' },
    { value: 'slideInUp', label: 'Slide In Up' },
    { value: 'slideInDown', label: 'Slide In Down' },
    { value: 'slideInLeft', label: 'Slide In Left' },
    { value: 'slideInRight', label: 'Slide In Right' },
    { value: 'zoomIn', label: 'Zoom In' },
    { value: 'zoomOut', label: 'Zoom Out' },
    { value: 'rotateIn', label: 'Rotate In' },
    { value: 'bounceIn', label: 'Bounce In' },
    { value: 'flipInX', label: 'Flip In X' },
    { value: 'flipInY', label: 'Flip In Y' }
  ];

  // Threshold options
  thresholds = [
    { value: 0.1, label: '10%' },
    { value: 0.2, label: '20%' },
    { value: 0.3, label: '30%' },
    { value: 0.5, label: '50%' },
    { value: 0.8, label: '80%' }
  ];

  // Duration options
  durations = [
    { value: 300, label: 'Fast (300ms)' },
    { value: 500, label: 'Normal (500ms)' },
    { value: 1000, label: 'Slow (1000ms)' },
    { value: 1500, label: 'Slower (1500ms)' },
    { value: 2000, label: 'Slowest (2000ms)' }
  ];

  // Delay options
  delays = [
    { value: 0, label: 'No Delay' },
    { value: 100, label: '100ms' },
    { value: 200, label: '200ms' },
    { value: 300, label: '300ms' },
    { value: 500, label: '500ms' }
  ];

  selectedAnimation = 'fadeInUp';
  selectedThreshold = 0.1;
  selectedDuration = 1000;
  selectedDelay = 0;
  once = true;

  // Event tracking
  animationCount = 0;
  lastAnimatedElement = '';

  // Event handlers
  onAnimationStart(element: string): void {
    this.animationCount++;
    this.lastAnimatedElement = element;
    console.log('Animation started for:', element);
  }

  // Get animation class
  getAnimationClass(): string {
    return `sui-animate-on-scroll sui-animate-${this.selectedAnimation}`;
  }

  // Get animation style
  getAnimationStyle(): any {
    return {
      animationDelay: `${this.selectedDelay}ms`,
      animationDuration: `${this.selectedDuration}ms`
    };
  }

  // Reset counters
  resetCounters(): void {
    this.animationCount = 0;
    this.lastAnimatedElement = '';
  }

  // Get configuration description
  getConfigDescription(): string {
    let description = `Animation: ${this.selectedAnimation}`;
    description += ` • Threshold: ${(this.selectedThreshold * 100)}%`;
    description += ` • Duration: ${this.selectedDuration}ms`;
    description += ` • Delay: ${this.selectedDelay}ms`;
    description += ` • Once: ${this.once ? 'Yes' : 'No'}`;
    return description;
  }

  // Sample content for different animations
  getSampleContent() {
    return `
      <div class="p-6 bg-white rounded-lg shadow-lg">
        <h3 class="text-xl font-semibold mb-4">Sample Content</h3>
        <p class="text-gray-600 mb-4">This content will animate when it comes into view. Scroll down to see the animation effect.</p>
        <div class="flex space-x-2">
          <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Tag 1</span>
          <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Tag 2</span>
          <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Tag 3</span>
        </div>
      </div>
    `;
  }

  getCardContent(title: string, description: string, color: string) {
    return `
      <div class="p-6 bg-${color}-50 rounded-lg shadow-lg border border-${color}-200">
        <h3 class="text-xl font-semibold text-${color}-900 mb-4">${title}</h3>
        <p class="text-${color}-700 mb-4">${description}</p>
        <div class="flex space-x-2">
          <span class="px-3 py-1 bg-${color}-100 text-${color}-800 rounded-full text-sm">Feature 1</span>
          <span class="px-3 py-1 bg-${color}-100 text-${color}-800 rounded-full text-sm">Feature 2</span>
        </div>
      </div>
    `;
  }
}
