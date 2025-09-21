import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Captcha } from 'ui-lib';

@Component({
  selector: 'app-captcha',
  standalone: true,
  imports: [CommonModule, Captcha],
  templateUrl: './captcha.html',
  styleUrls: ['./captcha.scss']
})
export class CaptchaComponent {
  activeTab = 0;
  showBasicCode = false;
  showMathCode = false;
  showTextCode = false;
  showCustomCode = false;

  // Demo configurations
  basicConfig = {
    type: 'math' as 'math' | 'text' | 'image',
    difficulty: 'easy' as 'easy' | 'medium' | 'hard',
    refreshButton: true
  };

  mathConfig = {
    type: 'math' as 'math' | 'text' | 'image',
    difficulty: 'medium' as 'easy' | 'medium' | 'hard',
    refreshButton: true
  };

  textConfig = {
    type: 'text' as 'math' | 'text' | 'image',
    difficulty: 'easy' as 'easy' | 'medium' | 'hard',
    refreshButton: true
  };

  customConfig = {
    type: 'math' as 'math' | 'text' | 'image',
    difficulty: 'hard' as 'easy' | 'medium' | 'hard',
    refreshButton: false,
    customChallenge: {
      question: 'What is the capital of France?',
      answer: 'Paris',
      type: 'text' as 'math' | 'text' | 'image'
    }
  };

  onTabChange(index: number): void {
    this.activeTab = index;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicCode = !this.showBasicCode;
        break;
      case 'math':
        this.showMathCode = !this.showMathCode;
        break;
      case 'text':
        this.showTextCode = !this.showTextCode;
        break;
      case 'custom':
        this.showCustomCode = !this.showCustomCode;
        break;
    }
  }

  onVerify(isValid: boolean): void {
    console.log('Captcha verification:', isValid ? 'Valid' : 'Invalid');
  }

  onRefresh(): void {
    console.log('Captcha refreshed');
  }
}
