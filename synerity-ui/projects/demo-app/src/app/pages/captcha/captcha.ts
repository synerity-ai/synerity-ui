import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Captcha } from 'ui-lib';
import { Tabs } from '../../shared/tabs/tabs';

@Component({
  selector: 'app-captcha',
  standalone: true,
  imports: [CommonModule, Captcha, Tabs],
  templateUrl: './captcha.html',
  styleUrls: ['./captcha.scss']
})
export class CaptchaComponent {
  activeTab = 'demo';
  showBasicCaptchaCode = false;
  showCaptchaTypesCode = false;
  showCaptchaStatesCode = false;

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

  onTabChange(tabId: string): void {
    this.activeTab = tabId;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basic':
        this.showBasicCaptchaCode = !this.showBasicCaptchaCode;
        break;
      case 'types':
        this.showCaptchaTypesCode = !this.showCaptchaTypesCode;
        break;
      case 'states':
        this.showCaptchaStatesCode = !this.showCaptchaStatesCode;
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
