import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectButton } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-select-button-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectButton],
  templateUrl: './select-button-demo.html',
  styleUrl: './select-button-demo.scss'
})
export class SelectButtonDemoComponent {
  @Input() currentExample!: ComponentExample;

  // Options for select button
  options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  // Values for different examples
  selectedValue: any = null;
  selectedValues: any[] = [];
  valueSmall: any = 'option1';
  valueMedium: any = 'option2';
  valueLarge: any = 'option3';

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }
}
