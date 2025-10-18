import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputGroup, InputText } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-input-group-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, InputGroup, InputText],
  templateUrl: './input-group-demo.html',
  styleUrl: './input-group-demo.scss'
})
export class InputGroupDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  basicValue = '';
  urlValue = '';
  priceValue = '';
  emailValue = '';
}
