import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'sui-stepper',
  imports: [NgFor, NgIf],
  templateUrl: './stepper.html',
  styleUrl: './stepper.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Stepper {
  @Input() activeIndex = 0;
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() linear = false;
  @Input() style: any = {};
  @Input() styleClass = '';
  @Input() steps: Array<{ 
    label: string; 
    content?: any; 
    disabled?: boolean;
    completed?: boolean;
  }> = [];
  @Output() onActiveIndexChange = new EventEmitter<number>();

  setActiveIndex(index: number): void {
    if (this.canNavigateToStep(index)) {
      this.activeIndex = index;
      this.onActiveIndexChange.emit(index);
    }
  }

  canNavigateToStep(index: number): boolean {
    if (this.linear) {
      // In linear mode, can only go to next step or previous completed steps
      return index <= this.activeIndex || (this.steps[index]?.completed ?? false);
    }
    return !this.steps[index]?.disabled;
  }

  isStepCompleted(index: number): boolean {
    return this.steps[index]?.completed || false;
  }

  isStepActive(index: number): boolean {
    return this.activeIndex === index;
  }

  isStepDisabled(index: number): boolean {
    return this.steps[index]?.disabled || false;
  }

  getStepClass(index: number): string {
    const classes = ['sui-stepper-step'];
    
    if (this.isStepActive(index)) classes.push('sui-stepper-step-active');
    if (this.isStepCompleted(index)) classes.push('sui-stepper-step-completed');
    if (this.isStepDisabled(index)) classes.push('sui-stepper-step-disabled');
    if (!this.canNavigateToStep(index)) classes.push('sui-stepper-step-disabled');
    
    return classes.join(' ');
  }

  getStepperClass(): string {
    return `sui-stepper sui-stepper-${this.orientation} ${this.styleClass}`.trim();
  }

  getStepperStyle(): any {
    return {
      ...this.style
    };
  }
}
