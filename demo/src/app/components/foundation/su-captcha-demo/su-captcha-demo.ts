import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Captcha } from '@synerity/ui';

@Component({
  selector: 'app-su-captcha-demo',
  imports: [CommonModule, FormsModule, Captcha],
  templateUrl: './su-captcha-demo.html',
  styleUrl: './su-captcha-demo.scss'
})
export class SuCaptchaDemo {
  // Captcha configurations
  captchaConfigs = [
    {
      id: 'math',
      type: 'math' as const,
      difficulty: 'easy' as const,
      refreshButton: true
    },
    {
      id: 'text',
      type: 'text' as const,
      difficulty: 'medium' as const,
      refreshButton: true
    },
    {
      id: 'image',
      type: 'image' as const,
      difficulty: 'hard' as const,
      refreshButton: true
    },
    {
      id: 'custom',
      type: 'math' as const,
      difficulty: 'easy' as const,
      refreshButton: false
    }
  ];

  // Type options
  types = [
    { value: 'math', label: 'Math Challenge' },
    { value: 'text', label: 'Text Challenge' },
    { value: 'image', label: 'Image Challenge' }
  ];

  // Difficulty options
  difficulties = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' }
  ];

  // Size options
  sizes = [
    { value: 'small', label: 'Small' },
    { value: 'normal', label: 'Normal' },
    { value: 'large', label: 'Large' }
  ];

  // Color options
  colors = [
    { value: '', label: 'Default' },
    { value: 'primary', label: 'Primary' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'error', label: 'Error' }
  ];

  selectedType: 'math' | 'text' | 'image' = 'math';
  selectedDifficulty: 'easy' | 'medium' | 'hard' = 'easy';
  selectedSize = 'normal';
  selectedColor = '';
  refreshButton = true;
  disabled = false;

  // Event tracking
  verifyCount = 0;
  refreshCount = 0;
  successCount = 0;
  errorCount = 0;

  // Event handlers
  onCaptchaVerify(isValid: boolean): void {
    this.verifyCount++;
    if (isValid) {
      this.successCount++;
      console.log('Captcha verified successfully');
    } else {
      this.errorCount++;
      console.log('Captcha verification failed');
    }
  }

  onCaptchaRefresh(): void {
    this.refreshCount++;
    console.log('Captcha refreshed');
  }

  // Get current configuration
  getCurrentConfig(): any {
    return this.captchaConfigs.find(config => config.id === 'math') || this.captchaConfigs[0];
  }

  // Get captcha class
  getCaptchaClass(): string {
    let classes = 'sui-captcha';
    
    if (this.selectedSize !== 'normal') {
      classes += ` sui-captcha--${this.selectedSize}`;
    }
    
    if (this.selectedColor) {
      classes += ` sui-captcha--${this.selectedColor}`;
    }
    
    return classes;
  }

  // Get captcha style
  getCaptchaStyle(): any {
    return {};
  }

  // Reset counters
  resetCounters(): void {
    this.verifyCount = 0;
    this.refreshCount = 0;
    this.successCount = 0;
    this.errorCount = 0;
  }

  // Get configuration description
  getConfigDescription(): string {
    let description = `Type: ${this.selectedType}`;
    description += ` • Difficulty: ${this.selectedDifficulty}`;
    description += ` • Refresh Button: ${this.refreshButton ? 'Yes' : 'No'}`;
    return description;
  }

  // Get success rate
  getSuccessRate(): number {
    if (this.verifyCount === 0) return 0;
    return Math.round((this.successCount / this.verifyCount) * 100);
  }
}
