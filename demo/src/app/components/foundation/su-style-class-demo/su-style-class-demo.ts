import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StyleClass } from '@synerity/ui';

@Component({
  selector: 'app-su-style-class-demo',
  imports: [CommonModule, FormsModule, StyleClass],
  templateUrl: './su-style-class-demo.html',
  styleUrl: './su-style-class-demo.scss'
})
export class SuStyleClassDemo {
  // Style class configurations
  styleClassConfigs = [
    { id: 'basic', selector: 'body', enterClass: 'sui-style-class--visible', leaveClass: 'sui-style-class--hidden' },
    { id: 'custom', selector: '.demo-element', enterClass: 'sui-style-class--bg-primary', leaveClass: 'sui-style-class--bg-secondary' }
  ];

  // Selector options
  selectors = [
    { value: 'body', label: 'Body Element' },
    { value: '.demo-element', label: 'Demo Element' },
    { value: '#target-element', label: 'Target Element' },
    { value: '.custom-class', label: 'Custom Class' }
  ];

  // Enter class options
  enterClasses = [
    { value: '', label: 'None' },
    { value: 'sui-style-class--visible', label: 'Visible' },
    { value: 'sui-style-class--bg-primary', label: 'Primary Background' },
    { value: 'sui-style-class--text-primary', label: 'Primary Text' },
    { value: 'sui-style-class--flex', label: 'Flex' },
    { value: 'sui-style-class--items-center', label: 'Items Center' },
    { value: 'sui-style-class--justify-center', label: 'Justify Center' },
    { value: 'sui-style-class--transition', label: 'Transition' },
    { value: 'sui-style-class--animate-bounce', label: 'Bounce Animation' },
    { value: 'sui-style-class--animate-pulse', label: 'Pulse Animation' },
    { value: 'sui-style-class--animate-spin', label: 'Spin Animation' },
    { value: 'sui-style-class--opacity-100', label: 'Full Opacity' },
    { value: 'sui-style-class--scale-100', label: 'Normal Scale' },
    { value: 'sui-style-class--rotate-0', label: 'No Rotation' }
  ];

  // Leave class options
  leaveClasses = [
    { value: '', label: 'None' },
    { value: 'sui-style-class--hidden', label: 'Hidden' },
    { value: 'sui-style-class--bg-secondary', label: 'Secondary Background' },
    { value: 'sui-style-class--text-secondary', label: 'Secondary Text' },
    { value: 'sui-style-class--opacity-0', label: 'No Opacity' },
    { value: 'sui-style-class--scale-50', label: 'Small Scale' },
    { value: 'sui-style-class--rotate-180', label: '180° Rotation' },
    { value: 'sui-style-class--invisible', label: 'Invisible' }
  ];

  // Toggle class options
  toggleClasses = [
    { value: '', label: 'None' },
    { value: 'sui-style-class--bg-success', label: 'Success Background' },
    { value: 'sui-style-class--text-success', label: 'Success Text' },
    { value: 'sui-style-class--bg-warning', label: 'Warning Background' },
    { value: 'sui-style-class--text-warning', label: 'Warning Text' },
    { value: 'sui-style-class--bg-error', label: 'Error Background' },
    { value: 'sui-style-class--text-error', label: 'Error Text' },
    { value: 'sui-style-class--animate-bounce', label: 'Bounce Animation' },
    { value: 'sui-style-class--animate-pulse', label: 'Pulse Animation' }
  ];

  selectedSelector = 'body';
  selectedEnterClass = 'sui-style-class--visible';
  selectedLeaveClass = 'sui-style-class--hidden';
  selectedToggleClass = 'sui-style-class--bg-success';

  // Event tracking
  classOperationCount = 0;
  lastOperation = '';

  // Event handlers
  onClassOperation(operation: string): void {
    this.classOperationCount++;
    this.lastOperation = operation;
    console.log('Style class operation:', operation);
  }

  // Get style class class
  getStyleClassClass(): string {
    return 'sui-style-class';
  }

  // Get style class style
  getStyleClassStyle(): any {
    return {};
  }

  // Reset counters
  resetCounters(): void {
    this.classOperationCount = 0;
    this.lastOperation = '';
  }

  // Get configuration description
  getConfigDescription(): string {
    let description = `Selector: ${this.selectedSelector}`;
    description += ` • Enter: ${this.selectedEnterClass || 'None'}`;
    description += ` • Leave: ${this.selectedLeaveClass || 'None'}`;
    description += ` • Toggle: ${this.selectedToggleClass || 'None'}`;
    return description;
  }

  // Sample elements for demonstration
  getSampleElements() {
    return [
      { id: 'demo-element-1', label: 'Element 1', class: 'demo-element' },
      { id: 'demo-element-2', label: 'Element 2', class: 'demo-element' },
      { id: 'demo-element-3', label: 'Element 3', class: 'demo-element' }
    ];
  }

  // Utility class examples
  getUtilityExamples() {
    return [
      { category: 'Visibility', classes: ['sui-style-class--visible', 'sui-style-class--hidden', 'sui-style-class--invisible'] },
      { category: 'Opacity', classes: ['sui-style-class--opacity-0', 'sui-style-class--opacity-50', 'sui-style-class--opacity-100'] },
      { category: 'Scale', classes: ['sui-style-class--scale-50', 'sui-style-class--scale-75', 'sui-style-class--scale-100', 'sui-style-class--scale-125', 'sui-style-class--scale-150'] },
      { category: 'Rotation', classes: ['sui-style-class--rotate-0', 'sui-style-class--rotate-90', 'sui-style-class--rotate-180', 'sui-style-class--rotate-270'] },
      { category: 'Position', classes: ['sui-style-class--static', 'sui-style-class--relative', 'sui-style-class--absolute', 'sui-style-class--fixed', 'sui-style-class--sticky'] },
      { category: 'Flexbox', classes: ['sui-style-class--flex', 'sui-style-class--inline-flex', 'sui-style-class--flex-col', 'sui-style-class--flex-row', 'sui-style-class--items-center', 'sui-style-class--justify-center'] },
      { category: 'Animation', classes: ['sui-style-class--animate-bounce', 'sui-style-class--animate-pulse', 'sui-style-class--animate-spin', 'sui-style-class--transition'] },
      { category: 'Colors', classes: ['sui-style-class--text-primary', 'sui-style-class--text-success', 'sui-style-class--text-warning', 'sui-style-class--text-error', 'sui-style-class--bg-primary', 'sui-style-class--bg-success', 'sui-style-class--bg-warning', 'sui-style-class--bg-error'] }
    ];
  }
}
