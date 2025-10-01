import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputNumber } from '@synerity/ui';

@Component({
  selector: 'app-su-input-number-demo',
  imports: [CommonModule, FormsModule, InputNumber],
  templateUrl: './su-input-number-demo.html',
  styleUrl: './su-input-number-demo.scss'
})
export class SuInputNumberDemo {
  // Values
  quantity = 1;
  price = 99.99;
  percentage = 50;
  rating = 5;
  temperature = 20;
  
  // Interactive
  interactiveValue = 0;
  minValue: number | null = null;
  maxValue: number | null = null;
  stepValue = 1;
  isDisabled = false;
  
  handleChange(value: number | null): void {
    console.log('Value changed:', value);
  }
  
  getCodeExample(): string {
    const attrs = [];
    if (this.minValue !== null) attrs.push(`[min]="${this.minValue}"`);
    if (this.maxValue !== null) attrs.push(`[max]="${this.maxValue}"`);
    if (this.stepValue !== 1) attrs.push(`[step]="${this.stepValue}"`);
    if (this.isDisabled) attrs.push('[disabled]="true"');
    
    return `<sui-input-number
  [(ngModel)]="interactiveValue"${attrs.length > 0 ? '\n  ' + attrs.join('\n  ') : ''}
  (change)="handleChange($event)"
></sui-input-number>`;
  }
}
