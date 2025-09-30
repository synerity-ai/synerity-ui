import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CaptchaChallenge {
  question: string;
  answer: string;
  type: 'math' | 'text' | 'image';
}

@Component({
  selector: 'sui-captcha',
  imports: [CommonModule, FormsModule],
  templateUrl: './captcha.html',
  styleUrl: './captcha.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Captcha implements OnInit {
  @Input() type: 'math' | 'text' | 'image' = 'math';
  @Input() difficulty: 'easy' | 'medium' | 'hard' = 'easy';
  @Input() disabled = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() refreshButton = true;
  @Input() customChallenge?: CaptchaChallenge;

  @Output() onVerify = new EventEmitter<boolean>();
  @Output() onRefresh = new EventEmitter<void>();

  currentChallenge: CaptchaChallenge | null = null;
  userAnswer = '';
  isVerified = false;
  isError = false;
  errorMessage = '';

  ngOnInit(): void {
    this.generateChallenge();
  }

  generateChallenge(): void {
    if (this.customChallenge) {
      this.currentChallenge = this.customChallenge;
    } else {
      switch (this.type) {
        case 'math':
          this.currentChallenge = this.generateMathChallenge();
          break;
        case 'text':
          this.currentChallenge = this.generateTextChallenge();
          break;
        case 'image':
          this.currentChallenge = this.generateImageChallenge();
          break;
      }
    }
    
    this.resetState();
    this.onRefresh.emit();
  }

  verifyAnswer(): void {
    if (!this.currentChallenge || this.disabled) return;

    const isCorrect = this.userAnswer.toLowerCase().trim() === this.currentChallenge.answer.toLowerCase().trim();
    
    this.isVerified = isCorrect;
    this.isError = !isCorrect;
    
    if (!isCorrect) {
      this.errorMessage = 'Incorrect answer. Please try again.';
      setTimeout(() => {
        this.isError = false;
        this.errorMessage = '';
        this.userAnswer = '';
      }, 3000);
    }
    
    this.onVerify.emit(isCorrect);
  }

  onInputChange(value: string): void {
    this.userAnswer = value;
    if (this.isError) {
      this.isError = false;
      this.errorMessage = '';
    }
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.verifyAnswer();
    }
  }

  refresh(): void {
    this.generateChallenge();
  }

  private generateMathChallenge(): CaptchaChallenge {
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let num1: number, num2: number;
    
    switch (this.difficulty) {
      case 'easy':
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        break;
      case 'medium':
        num1 = Math.floor(Math.random() * 50) + 1;
        num2 = Math.floor(Math.random() * 50) + 1;
        break;
      case 'hard':
        num1 = Math.floor(Math.random() * 100) + 1;
        num2 = Math.floor(Math.random() * 100) + 1;
        break;
    }

    let answer: string;
    switch (operation) {
      case '+':
        answer = (num1 + num2).toString();
        break;
      case '-':
        // Ensure positive result
        if (num1 < num2) [num1, num2] = [num2, num1];
        answer = (num1 - num2).toString();
        break;
      case '*':
        // Limit multiplication for easier calculation
        if (this.difficulty === 'easy') {
          num1 = Math.floor(Math.random() * 5) + 1;
          num2 = Math.floor(Math.random() * 5) + 1;
        }
        answer = (num1 * num2).toString();
        break;
      default:
        answer = '0';
    }

    return {
      question: `What is ${num1} ${operation} ${num2}?`,
      answer,
      type: 'math'
    };
  }

  private generateTextChallenge(): CaptchaChallenge {
    const words = [
      'apple', 'banana', 'orange', 'grape', 'lemon',
      'house', 'car', 'tree', 'book', 'water',
      'happy', 'smile', 'peace', 'love', 'hope'
    ];
    
    const word = words[Math.floor(Math.random() * words.length)];
    const scrambled = this.scrambleWord(word);
    
    return {
      question: `Unscramble this word: "${scrambled}"`,
      answer: word,
      type: 'text'
    };
  }

  private generateImageChallenge(): CaptchaChallenge {
    // For demo purposes, using text-based image challenge
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    const shapes = ['circle', 'square', 'triangle', 'rectangle'];
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    
    return {
      question: `What color is the ${shape}? (Answer: ${color})`,
      answer: color,
      type: 'image'
    };
  }

  private scrambleWord(word: string): string {
    const chars = word.split('');
    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    return chars.join('');
  }

  private resetState(): void {
    this.userAnswer = '';
    this.isVerified = false;
    this.isError = false;
    this.errorMessage = '';
  }

  getCaptchaClass(): string {
    return `sui-captcha ${this.isVerified ? 'sui-captcha-verified' : ''} ${this.isError ? 'sui-captcha-error' : ''} ${this.styleClass}`.trim();
  }
}
