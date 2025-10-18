import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputMask } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-input-mask-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, InputMask],
  templateUrl: './input-mask-demo.html',
  styleUrl: './input-mask-demo.scss'
})
export class InputMaskDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  phoneValue = '';
  dateValue = '';
  ssnValue = '';
  creditCardValue = '';
}
