import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentExample } from '../../models/component.model';
import { ProgressSpinner } from '@synerity/ui';
import { Button } from '@synerity/ui';

@Component({
  selector: 'app-progress-spinner-demo',
  imports: [CommonModule, ProgressSpinner, Button],
  templateUrl: './progress-spinner-demo.html',
  styleUrl: './progress-spinner-demo.scss'
})
export class ProgressSpinnerDemo {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  // Demo data
  sizes = ['small', 'normal', 'large'];
  colors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];
  
  // Demo state
  isLoading = false;
  loadingText = 'Loading...';

  // Demo methods
  toggleLoading(): void {
    this.isLoading = !this.isLoading;
  }

  simulateLoading(): void {
    this.isLoading = true;
    this.loadingText = 'Processing...';
    
    setTimeout(() => {
      this.isLoading = false;
      this.loadingText = 'Complete!';
      setTimeout(() => {
        this.loadingText = 'Loading...';
      }, 2000);
    }, 3000);
  }
}
