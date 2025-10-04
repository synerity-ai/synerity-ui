import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentExample } from '../../models/component.model';
import { Button } from '@synerity/ui';

@Component({
  selector: 'app-button-demo',
  imports: [CommonModule, Button],
  templateUrl: './button-demo.html',
  styleUrl: './button-demo.scss'
})
export class ButtonDemo {
  @Input() currentExample!: ComponentExample;

  getCurrentExample(): ComponentExample {
    return this.currentExample;
  }
}
