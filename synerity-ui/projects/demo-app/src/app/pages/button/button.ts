import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'ui-lib';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './button.html',
  styleUrls: ['./button.scss']
})
export class ButtonComponent {
  activeTab = 0;
  showBasicCode = false;
  showSizeCode = false;
  showCustomCode = false;

  // Demo data
  buttonText = 'Click me';
  isLoading = false;

  onTabChange(index: number): void {
    this.activeTab = index;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'size':
        this.showSizeCode = !this.showSizeCode;
        break;
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
    }
  }

  onButtonClick(): void {
    console.log('Button clicked!');
  }

  onPrimaryClick(): void {
    console.log('Primary button clicked!');
  }

  onSecondaryClick(): void {
    console.log('Secondary button clicked!');
  }

  onOutlineClick(): void {
    console.log('Outline button clicked!');
  }

  onGhostClick(): void {
    console.log('Ghost button clicked!');
  }

  onDangerClick(): void {
    console.log('Danger button clicked!');
  }

  onSmallClick(): void {
    console.log('Small button clicked!');
  }

  onMediumClick(): void {
    console.log('Medium button clicked!');
  }

  onLargeClick(): void {
    console.log('Large button clicked!');
  }

  onLoadingClick(): void {
    this.isLoading = true;
    console.log('Loading button clicked!');
    
    // Simulate loading for 3 seconds
    setTimeout(() => {
      this.isLoading = false;
      console.log('Loading completed!');
    }, 3000);
  }

  onDisabledClick(): void {
    console.log('This should not be logged - button is disabled');
  }
}