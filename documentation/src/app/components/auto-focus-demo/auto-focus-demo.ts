import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoFocus, InputText } from '@synerity/ui';
import { ComponentExample } from '../../models/component.model';

@Component({
  selector: 'app-auto-focus-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, AutoFocus, InputText],
  templateUrl: './auto-focus-demo.html',
  styleUrl: './auto-focus-demo.scss'
})
export class AutoFocusDemoComponent {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }

  value1 = '';
  value2 = '';
  value3 = '';
}
