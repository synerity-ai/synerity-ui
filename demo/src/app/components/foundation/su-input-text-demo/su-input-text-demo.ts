import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputText } from '@synerity/ui';

@Component({
  selector: 'app-su-input-text-demo',
  imports: [CommonModule, FormsModule, InputText],
  templateUrl: './su-input-text-demo.html',
  styleUrl: './su-input-text-demo.scss'
})
export class SuInputTextDemo {
  // Input states for demo
  basicValue = '';
  placeholderValue = '';
  disabledValue = 'Disabled input';
  readonlyValue = 'Read-only input';
  requiredValue = '';
  
  // Input sizes for demo
  inputSizes = [
    { size: 'sm', label: 'Small' },
    { size: 'md', label: 'Medium' },
    { size: 'lg', label: 'Large' }
  ] as const;

  
  // Input types
  emailValue = '';
  passwordValue = '';
  numberValue = '';
  telValue = '';
  urlValue = '';
  
  // Input with icons
  searchValue = '';
  
  // Form integration
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  // Methods for demo interactions
  onInputChange(event: any) {
    console.log('Input changed:', event.target.value);
  }

  onInputFocus(event: any) {
    console.log('Input focused');
  }

  onInputBlur(event: any) {
    console.log('Input blurred');
  }

  clearInput(field: string) {
    if (field in this.formData) {
      (this.formData as any)[field] = '';
    }
  }

  resetForm() {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    };
  }
}
