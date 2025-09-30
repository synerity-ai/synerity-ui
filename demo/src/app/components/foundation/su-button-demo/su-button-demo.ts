import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '@synerity/ui';

@Component({
  selector: 'app-su-button-demo',
  imports: [CommonModule, Button],
  templateUrl: './su-button-demo.html',
  styleUrl: './su-button-demo.scss'
})
export class SuButtonDemo {
  // Button variants for demo
  buttonVariants = [
    { variant: 'primary', label: 'Primary' },
    { variant: 'secondary', label: 'Secondary' },
    { variant: 'danger', label: 'Danger' },
    { variant: 'outline', label: 'Outline' },
    { variant: 'ghost', label: 'Ghost' }
  ] as const;

  // Button sizes for demo
  buttonSizes = [
    { size: 'sm', label: 'Small' },
    { size: 'md', label: 'Medium' },
    { size: 'lg', label: 'Large' }
  ] as const;

  // Button states
  isDisabled = false;
  isLoading = false;

  // Methods for demo interactions
  onButtonClick(variant: string, size: string) {
    console.log(`Button clicked: ${variant} ${size}`);
  }

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }
}
