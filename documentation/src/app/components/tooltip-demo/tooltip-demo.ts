import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tooltip, Button } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-tooltip-demo',
  standalone: true,
  imports: [CommonModule, Tooltip, Button],
  templateUrl: './tooltip-demo.html',
  styleUrls: ['./tooltip-demo.scss']
})
export class TooltipDemoComponent {
  @Input() currentExample: ComponentExample = { name: '', code: '', description: '' };

  // Example data for different tooltip scenarios
  basicTooltipText = 'This is a basic tooltip';
  longTooltipText = 'This is a longer tooltip that demonstrates how the component handles text that might wrap to multiple lines and provides helpful information to users.';
  htmlTooltipText = 'This tooltip contains <strong>HTML content</strong> and <em>formatting</em>.';
  
  // Position examples
  topTooltipText = 'Tooltip on top';
  bottomTooltipText = 'Tooltip on bottom';
  leftTooltipText = 'Tooltip on left';
  rightTooltipText = 'Tooltip on right';
  
  // Theme examples
  primaryTooltipText = 'Primary themed tooltip';
  successTooltipText = 'Success themed tooltip';
  warningTooltipText = 'Warning themed tooltip';
  errorTooltipText = 'Error themed tooltip';
  lightTooltipText = 'Light themed tooltip';
  
  // Size examples
  smallTooltipText = 'Small tooltip';
  largeTooltipText = 'This is a large tooltip that demonstrates the larger size variant with more padding and bigger text.';
  
  // Interactive examples
  clickTooltipText = 'Click to show tooltip';
  focusTooltipText = 'Focus to show tooltip';
  hoverTooltipText = 'Hover to show tooltip';
  
  // Form examples
  inputTooltipText = 'Enter your email address';
  buttonTooltipText = 'Click to submit the form';
  
  // Disabled state
  disabledTooltipText = 'This tooltip is disabled';
  
  // Custom styling
  customTooltipText = 'Custom styled tooltip';
  
  // Event handlers
  onTooltipShow(): void {
    console.log('Tooltip shown');
  }
  
  onTooltipHide(): void {
    console.log('Tooltip hidden');
  }
}
