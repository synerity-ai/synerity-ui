import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputMask } from '@synerity/ui';

@Component({
  selector: 'app-su-input-mask-demo',
  imports: [CommonModule, FormsModule, InputMask],
  templateUrl: './su-input-mask-demo.html',
  styleUrl: './su-input-mask-demo.scss'
})
export class SuInputMaskDemo {
  // Mask examples
  phone = '';
  ssn = '';
  date = '';
  creditCard = '';
  zipCode = '';
  time = '';
  
  // Interactive
  customMask = '(999) 999-9999';
  customValue = '';
  customPlaceholder = '_';
  
  // Mask patterns (for documentation)
  maskPatterns = [
    { mask: '(999) 999-9999', label: 'US Phone', example: '(555) 123-4567' },
    { mask: '999-99-9999', label: 'SSN', example: '123-45-6789' },
    { mask: '99/99/9999', label: 'Date', example: '12/31/2025' },
    { mask: '9999-9999-9999-9999', label: 'Credit Card', example: '1234-5678-9012-3456' },
    { mask: '99999', label: 'ZIP Code', example: '90210' },
    { mask: '99:99', label: 'Time', example: '14:30' },
    { mask: 'AAA-999', label: 'License Plate', example: 'ABC-123' },
    { mask: '****-****', label: 'Product Key', example: 'AB12-CD34' }
  ];
  
  getCodeExample(): string {
    return `<sui-input-mask
  mask="${this.customMask}"
  maskPlaceholder="${this.customPlaceholder}"
  [(ngModel)]="customValue"
  placeholder="Enter value"
></sui-input-mask>`;
  }
}
