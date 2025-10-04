import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentExample } from '../../models/component.model';
import { InputText } from '@synerity/ui';

@Component({
  selector: 'app-input-demo',
  imports: [CommonModule, InputText],
  templateUrl: './input-demo.html',
  styleUrl: './input-demo.scss'
})
export class InputDemo {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }
}
