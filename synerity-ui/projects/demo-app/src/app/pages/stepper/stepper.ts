import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tabs } from '../../shared/tabs/tabs';
import { Stepper as SuiStepper } from '../../../../../ui-lib/src/lib/stepper/stepper';

@Component({
  selector: 'app-stepper',
  imports: [CommonModule, FormsModule, Tabs, SuiStepper],
  templateUrl: './stepper.html',
  styleUrl: './stepper.scss'
})
export class Stepper {
  activeTab = 'demo';
  
  // Demo data
  currentStep = 0;
  stepperItems = [
    { label: 'Personal Info', icon: '👤' },
    { label: 'Contact Details', icon: '📞' },
    { label: 'Review', icon: '📋' },
    { label: 'Complete', icon: '✅' }
  ];
  
  // Code visibility states
  showBasicStepperCode = false;
  showVerticalStepperCode = false;
  showCustomStepperCode = false;
  
  onTabChange(tab: string) {
    this.activeTab = tab;
  }
  
  toggleCode(example: string) {
    switch (example) {
      case 'basicStepper':
        this.showBasicStepperCode = !this.showBasicStepperCode;
        break;
      case 'verticalStepper':
        this.showVerticalStepperCode = !this.showVerticalStepperCode;
        break;
      case 'customStepper':
        this.showCustomStepperCode = !this.showCustomStepperCode;
        break;
    }
  }
  
  // Stepper demo methods
  nextStep() {
    if (this.currentStep < this.stepperItems.length - 1) {
      this.currentStep++;
    }
  }
  
  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
  
  goToStep(step: number) {
    this.currentStep = step;
  }
}
