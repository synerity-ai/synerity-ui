import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Stepper } from '@synerity/ui';

@Component({
  selector: 'app-su-stepper-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Stepper],
  templateUrl: './su-stepper-demo.html',
  styleUrl: './su-stepper-demo.scss'
})
export class SuStepperDemo {
  activeIndex = 0;
  selectedOrientation: 'horizontal' | 'vertical' = 'horizontal';
  isLinear = false;
  
  orientations = [
    { value: 'horizontal', label: 'Horizontal' },
    { value: 'vertical', label: 'Vertical' }
  ];

  basicSteps = [
    { label: 'Personal Information' },
    { label: 'Contact Details' },
    { label: 'Account Setup' },
    { label: 'Confirmation' }
  ];

  linearSteps = [
    { label: 'Step 1', completed: true },
    { label: 'Step 2', completed: true },
    { label: 'Step 3', completed: false },
    { label: 'Step 4', completed: false }
  ];

  complexSteps = [
    { 
      label: 'Account Creation', 
      description: 'Create your account',
      completed: true 
    },
    { 
      label: 'Profile Setup', 
      description: 'Complete your profile',
      completed: true 
    },
    { 
      label: 'Verification', 
      description: 'Verify your email',
      completed: false 
    },
    { 
      label: 'Preferences', 
      description: 'Set your preferences',
      disabled: true 
    }
  ];

  onActiveIndexChange(event: number) {
    console.log('Active index changed:', event);
    this.activeIndex = event;
  }

  nextStep() {
    if (this.activeIndex < this.basicSteps.length - 1) {
      this.activeIndex++;
    }
  }

  previousStep() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }
}
