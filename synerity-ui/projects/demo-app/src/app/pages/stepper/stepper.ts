import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Stepper } from 'ui-lib';

@Component({
  selector: 'app-stepper',
  imports: [CommonModule, FormsModule, Tabs, Stepper],
  templateUrl: './stepper.html',
  styleUrl: './stepper.scss'
})
export class StepperPage {
  activeTab = 'demo';

  // Code visibility toggles
  showBasicStepperCode = false;
  showVerticalStepperCode = false;
  showLinearStepperCode = false;
  showCustomStylingCode = false;

  // Stepper configurations
  basicSteps = [
    { label: 'Personal Information', completed: true },
    { label: 'Contact Details', completed: true },
    { label: 'Review & Submit', completed: false }
  ];

  verticalSteps = [
    { label: 'Account Setup', completed: true },
    { label: 'Profile Configuration', completed: true },
    { label: 'Preferences', completed: false },
    { label: 'Confirmation', completed: false }
  ];

  linearSteps = [
    { label: 'Step 1', completed: true },
    { label: 'Step 2', completed: true },
    { label: 'Step 3', completed: false },
    { label: 'Step 4', completed: false }
  ];

  currentStepIndex = 0;
  currentVerticalStepIndex = 0;
  currentLinearStepIndex = 0;

  onTabChange(tab: string): void {
    this.activeTab = tab;
  }

  toggleCode(section: string): void {
    switch (section) {
      case 'basicStepper':
        this.showBasicStepperCode = !this.showBasicStepperCode;
        break;
      case 'verticalStepper':
        this.showVerticalStepperCode = !this.showVerticalStepperCode;
        break;
      case 'linearStepper':
        this.showLinearStepperCode = !this.showLinearStepperCode;
        break;
      case 'customStyling':
        this.showCustomStylingCode = !this.showCustomStylingCode;
        break;
    }
  }

  onActiveIndexChange(index: number): void {
    this.currentStepIndex = index;
    console.log('Basic stepper active index changed:', index);
  }

  onVerticalActiveIndexChange(index: number): void {
    this.currentVerticalStepIndex = index;
    console.log('Vertical stepper active index changed:', index);
  }

  onLinearActiveIndexChange(index: number): void {
    this.currentLinearStepIndex = index;
    console.log('Linear stepper active index changed:', index);
  }

  nextStep(): void {
    if (this.currentStepIndex < this.basicSteps.length - 1) {
      this.currentStepIndex++;
    }
  }

  prevStep(): void {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  }

  completeCurrentStep(): void {
    this.basicSteps[this.currentStepIndex].completed = true;
    if (this.currentStepIndex < this.basicSteps.length - 1) {
      this.nextStep();
    }
  }
}