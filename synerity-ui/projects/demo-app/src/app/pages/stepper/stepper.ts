import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs } from '../../shared/tabs/tabs';
import { Stepper as SuiStepper } from '../../../../../ui-lib/src/lib/stepper/stepper';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule, Tabs, SuiStepper],
  templateUrl: './stepper.html',
  styleUrl: './stepper.scss'
})
export class StepperComponent {
  activeTab = 'demo';
  showBasicHorizontalStepperCode = false;
  showVerticalStepperCode = false;
  showLinearStepperCode = false;

  // Basic stepper
  activeIndex = 0;
  basicSteps = [
    { label: 'Personal Info' },
    { label: 'Contact Info' },
    { label: 'Review' }
  ];

  // Vertical stepper
  verticalActiveIndex = 0;
  verticalSteps = [
    { label: 'Setup Account' },
    { label: 'Configure Settings' },
    { label: 'Import Data' },
    { label: 'Complete Setup' }
  ];

  // Linear stepper
  linearActiveIndex = 0;
  linearSteps = [
    { label: 'Basic Info', completed: false },
    { label: 'Advanced Settings', completed: false },
    { label: 'Final Review', completed: false }
  ];

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(type: string): void {
    switch (type) {
      case 'basicHorizontalStepper':
        this.showBasicHorizontalStepperCode = !this.showBasicHorizontalStepperCode;
        break;
      case 'verticalStepper':
        this.showVerticalStepperCode = !this.showVerticalStepperCode;
        break;
      case 'linearStepper':
        this.showLinearStepperCode = !this.showLinearStepperCode;
        break;
    }
  }

  onActiveIndexChange(index: number): void {
    this.activeIndex = index;
  }

  onVerticalActiveIndexChange(index: number): void {
    this.verticalActiveIndex = index;
  }

  onLinearActiveIndexChange(index: number): void {
    this.linearActiveIndex = index;
  }

  nextStep(): void {
    if (this.activeIndex < this.basicSteps.length - 1) {
      this.activeIndex++;
    }
  }

  previousStep(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }

  completeLinearStep(index: number): void {
    this.linearSteps[index].completed = true;
    if (index < this.linearSteps.length - 1) {
      this.linearActiveIndex = index + 1;
    }
  }
}