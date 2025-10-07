import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentExample } from '../../models/component.model';
import { ProgressBar } from '@synerity/ui';

@Component({
  selector: 'app-progress-bar-demo',
  standalone: true,
  imports: [CommonModule, ProgressBar],
  templateUrl: './progress-bar-demo.html',
  styleUrls: ['./progress-bar-demo.scss']
})
export class ProgressBarDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Progress values for different examples
  basicProgress = 45;
  successProgress = 75;
  warningProgress = 60;
  dangerProgress = 30;
  infoProgress = 85;
  animatedProgress = 65;

  // Size variations
  smallProgress = 40;
  normalProgress = 65;
  largeProgress = 80;

  // Custom unit progress
  fileSize = 2.4;
  maxFileSize = 5.0;

  // Task completion
  taskProgress = 60;
  
  // Expose Math and parseFloat for template usage
  Math = Math;
  parseFloat = parseFloat;
}