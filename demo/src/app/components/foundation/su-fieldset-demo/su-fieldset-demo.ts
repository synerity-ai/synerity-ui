import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Fieldset } from '@synerity/ui';

@Component({
  selector: 'app-su-fieldset-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, Fieldset],
  templateUrl: './su-fieldset-demo.html',
  styleUrl: './su-fieldset-demo.scss'
})
export class SuFieldsetDemo {
  isCollapsed = false;
  
  onFieldsetToggle(event: any) {
    console.log('Fieldset toggled:', event);
  }

  sampleFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: ''
  };
}
